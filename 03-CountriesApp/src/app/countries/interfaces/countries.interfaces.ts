// To parse this data:
//
//   import { Convert } from "./file";
//
//   const welcome = Convert.toWelcome(json);
//
// These functions will throw an error if the JSON doesn't
// match the expected interface, even if the JSON is valid.

export interface Country {
    name:         Name;
    tld:          string[];
    cca2:         string;
    ccn3:         string;
    cca3:         string;
    cioc?:        string;
    independent:  boolean;
    status:       string;
    unMember:     boolean;
    currencies:   { [key: string]: Currency };
    idd:          Idd;
    capital:      string[];
    altSpellings: string[];
    region:       string;
    subregion:    string;
    languages:    Languages;
    translations: { [key: string]: Translation };
    latlng:       number[];
    landlocked:   boolean;
    borders:      string[];
    area:         number;
    flag:         string;
    flags:        string[];
    demonyms:     Demonyms;
}

export interface Currency {
    name:   string;
    symbol: string;
}

export interface Demonyms {
    eng: Eng;
    fra: Eng;
}

export interface Eng {
    f: string;
    m: string;
}

export interface Idd {
    root:     string;
    suffixes: string[];
}

export interface Languages {
    spa?: string;
    por?: string;
    zho?: string;
    aze?: string;
    rus?: string;
    uzb?: string;
    kaz?: string;
    kir?: string;
    lit?: string;
}

export interface Name {
    common:     string;
    official:   string;
    nativeName: NativeName;
}

export interface NativeName {
    spa?: Translation;
    por?: Translation;
    zho?: Translation;
    aze?: Translation;
    rus?: Translation;
    uzb?: Translation;
    kaz?: Translation;
    kir?: Translation;
    lit?: Translation;
}

export interface Translation {
    official: string;
    common:   string;
}

// Converts JSON strings to/from your types
// and asserts the results of JSON.parse at runtime
export class Convert {
    public static toWelcome(json: string): Country[] {
        return cast(JSON.parse(json), a(r("Welcome")));
    }

    public static welcomeToJson(value: Country[]): string {
        return JSON.stringify(uncast(value, a(r("Welcome"))), null, 2);
    }
}

function invalidValue(typ: any, val: any, key: any = ''): never {
    if (key) {
        throw Error(`Invalid value for key "${key}". Expected type ${JSON.stringify(typ)} but got ${JSON.stringify(val)}`);
    }
    throw Error(`Invalid value ${JSON.stringify(val)} for type ${JSON.stringify(typ)}`, );
}

function jsonToJSProps(typ: any): any {
    if (typ.jsonToJS === undefined) {
        const map: any = {};
        typ.props.forEach((p: any) => map[p.json] = { key: p.js, typ: p.typ });
        typ.jsonToJS = map;
    }
    return typ.jsonToJS;
}

function jsToJSONProps(typ: any): any {
    if (typ.jsToJSON === undefined) {
        const map: any = {};
        typ.props.forEach((p: any) => map[p.js] = { key: p.json, typ: p.typ });
        typ.jsToJSON = map;
    }
    return typ.jsToJSON;
}

function transform(val: any, typ: any, getProps: any, key: any = ''): any {
    function transformPrimitive(typ: string, val: any): any {
        if (typeof typ === typeof val) return val;
        return invalidValue(typ, val, key);
    }

    function transformUnion(typs: any[], val: any): any {
        // val must validate against one typ in typs
        const l = typs.length;
        for (let i = 0; i < l; i++) {
            const typ = typs[i];
            try {
                return transform(val, typ, getProps);
            } catch (_) {}
        }
        return invalidValue(typs, val);
    }

    function transformEnum(cases: string[], val: any): any {
        if (cases.indexOf(val) !== -1) return val;
        return invalidValue(cases, val);
    }

    function transformArray(typ: any, val: any): any {
        // val must be an array with no invalid elements
        if (!Array.isArray(val)) return invalidValue("array", val);
        return val.map(el => transform(el, typ, getProps));
    }

    function transformDate(val: any): any {
        if (val === null) {
            return null;
        }
        const d = new Date(val);
        if (isNaN(d.valueOf())) {
            return invalidValue("Date", val);
        }
        return d;
    }

    function transformObject(props: { [k: string]: any }, additional: any, val: any): any {
        if (val === null || typeof val !== "object" || Array.isArray(val)) {
            return invalidValue("object", val);
        }
        const result: any = {};
        Object.getOwnPropertyNames(props).forEach(key => {
            const prop = props[key];
            const v = Object.prototype.hasOwnProperty.call(val, key) ? val[key] : undefined;
            result[prop.key] = transform(v, prop.typ, getProps, prop.key);
        });
        Object.getOwnPropertyNames(val).forEach(key => {
            if (!Object.prototype.hasOwnProperty.call(props, key)) {
                result[key] = transform(val[key], additional, getProps, key);
            }
        });
        return result;
    }

    if (typ === "any") return val;
    if (typ === null) {
        if (val === null) return val;
        return invalidValue(typ, val);
    }
    if (typ === false) return invalidValue(typ, val);
    while (typeof typ === "object" && typ.ref !== undefined) {
        typ = typeMap[typ.ref];
    }
    if (Array.isArray(typ)) return transformEnum(typ, val);
    if (typeof typ === "object") {
        return typ.hasOwnProperty("unionMembers") ? transformUnion(typ.unionMembers, val)
            : typ.hasOwnProperty("arrayItems")    ? transformArray(typ.arrayItems, val)
            : typ.hasOwnProperty("props")         ? transformObject(getProps(typ), typ.additional, val)
            : invalidValue(typ, val);
    }
    // Numbers can be parsed by Date but shouldn't be.
    if (typ === Date && typeof val !== "number") return transformDate(val);
    return transformPrimitive(typ, val);
}

function cast<T>(val: any, typ: any): T {
    return transform(val, typ, jsonToJSProps);
}

function uncast<T>(val: T, typ: any): any {
    return transform(val, typ, jsToJSONProps);
}

function a(typ: any) {
    return { arrayItems: typ };
}

function u(...typs: any[]) {
    return { unionMembers: typs };
}

function o(props: any[], additional: any) {
    return { props, additional };
}

function m(additional: any) {
    return { props: [], additional };
}

function r(name: string) {
    return { ref: name };
}

const typeMap: any = {
    "Welcome": o([
        { json: "name", js: "name", typ: r("Name") },
        { json: "tld", js: "tld", typ: a("") },
        { json: "cca2", js: "cca2", typ: "" },
        { json: "ccn3", js: "ccn3", typ: "" },
        { json: "cca3", js: "cca3", typ: "" },
        { json: "cioc", js: "cioc", typ: u(undefined, "") },
        { json: "independent", js: "independent", typ: true },
        { json: "status", js: "status", typ: "" },
        { json: "unMember", js: "unMember", typ: true },
        { json: "currencies", js: "currencies", typ: m(r("Currency")) },
        { json: "idd", js: "idd", typ: r("Idd") },
        { json: "capital", js: "capital", typ: a("") },
        { json: "altSpellings", js: "altSpellings", typ: a("") },
        { json: "region", js: "region", typ: "" },
        { json: "subregion", js: "subregion", typ: "" },
        { json: "languages", js: "languages", typ: r("Languages") },
        { json: "translations", js: "translations", typ: m(r("Translation")) },
        { json: "latlng", js: "latlng", typ: a(3.14) },
        { json: "landlocked", js: "landlocked", typ: true },
        { json: "borders", js: "borders", typ: a("") },
        { json: "area", js: "area", typ: 0 },
        { json: "flag", js: "flag", typ: "" },
        { json: "flags", js: "flags", typ: a("") },
        { json: "demonyms", js: "demonyms", typ: r("Demonyms") },
    ], false),
    "Currency": o([
        { json: "name", js: "name", typ: "" },
        { json: "symbol", js: "symbol", typ: "" },
    ], false),
    "Demonyms": o([
        { json: "eng", js: "eng", typ: r("Eng") },
        { json: "fra", js: "fra", typ: r("Eng") },
    ], false),
    "Eng": o([
        { json: "f", js: "f", typ: "" },
        { json: "m", js: "m", typ: "" },
    ], false),
    "Idd": o([
        { json: "root", js: "root", typ: "" },
        { json: "suffixes", js: "suffixes", typ: a("") },
    ], false),
    "Languages": o([
        { json: "spa", js: "spa", typ: u(undefined, "") },
        { json: "por", js: "por", typ: u(undefined, "") },
        { json: "zho", js: "zho", typ: u(undefined, "") },
        { json: "aze", js: "aze", typ: u(undefined, "") },
        { json: "rus", js: "rus", typ: u(undefined, "") },
        { json: "uzb", js: "uzb", typ: u(undefined, "") },
        { json: "kaz", js: "kaz", typ: u(undefined, "") },
        { json: "kir", js: "kir", typ: u(undefined, "") },
        { json: "lit", js: "lit", typ: u(undefined, "") },
    ], false),
    "Name": o([
        { json: "common", js: "common", typ: "" },
        { json: "official", js: "official", typ: "" },
        { json: "nativeName", js: "nativeName", typ: r("NativeName") },
    ], false),
    "NativeName": o([
        { json: "spa", js: "spa", typ: u(undefined, r("Translation")) },
        { json: "por", js: "por", typ: u(undefined, r("Translation")) },
        { json: "zho", js: "zho", typ: u(undefined, r("Translation")) },
        { json: "aze", js: "aze", typ: u(undefined, r("Translation")) },
        { json: "rus", js: "rus", typ: u(undefined, r("Translation")) },
        { json: "uzb", js: "uzb", typ: u(undefined, r("Translation")) },
        { json: "kaz", js: "kaz", typ: u(undefined, r("Translation")) },
        { json: "kir", js: "kir", typ: u(undefined, r("Translation")) },
        { json: "lit", js: "lit", typ: u(undefined, r("Translation")) },
    ], false),
    "Translation": o([
        { json: "official", js: "official", typ: "" },
        { json: "common", js: "common", typ: "" },
    ], false),
};
