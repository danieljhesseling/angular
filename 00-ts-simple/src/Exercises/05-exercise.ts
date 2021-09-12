/*
    ===== Code =====
*/

interface SuperHeroe {
    heroeName: string;
    age: number;
    direction: Direction,
    showDirection: () => string;
}

interface Direction {
    street: string, country: string, city: string
}

const superHeroe: SuperHeroe = {
    heroeName: 'DanielMan',
    age: 30,
    direction: {
        street: 'Kloosterstr',
        country: 'Germany',
        city: 'Bochum'
    },
    showDirection() {
        return this.heroeName + ', ' + this.direction.city + ', ' + this.direction.country;
    }
}

const direction = superHeroe.showDirection();
console.log(direction);