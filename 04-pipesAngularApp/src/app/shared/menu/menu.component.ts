import { Component, OnInit } from '@angular/core';

import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: [
  ]
})
export class MenuComponent implements OnInit {

  items: MenuItem[] = []; 

  constructor() { }

  ngOnInit(): void {
    this.items = [
      {
        label: 'Pipes',
        icon: 'pi pi-home',
        items: [
          {
            label: 'Basics',
            icon: 'pi pi-folder',
            routerLink: 'basics'
          },
          {
            label: 'Numbers',
            icon: 'pi pi-chart-bar',
            routerLink: 'numbers'
          }
        ]
      },
      {
        label: 'Personal Pipes',
        icon: 'pi pi-cog',
        routerLink: 'organized'
      },
      {
        label: 'Projects',
        icon: 'pi pi-copy',
        items:[
          {
            label: 'GiffApp',
            icon: 'pi pi-image',
            url: 'https://xenodochial-kowalevski-94da2b.netlify.app/'
          },
          {
            label: 'CountriesApp',
            icon: 'pi pi-globe',
            url: 'https://wonderful-goodall-388efa.netlify.app'
          },
          {
            label: 'HeroesApp - Only GitHub',
            icon: 'pi pi-play',
            url: 'https://github.com/danieljhesseling/angular/tree/master/05-heroesApp'
          }
        ]
      },
      {
        label: 'Portfolio',
        icon: 'pi pi-file',
        url: 'https://danieljhesseling.github.io/portafolio/'
      }
    ];
  }

}
