import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddComponent } from './pages/add/add.component';
import { HeroeComponent } from './pages/heroe/heroe.component';
import { HomeComponent } from './pages/home/home.component';
import { ListComponent } from './pages/list/list.component';
import { SearchComponent } from './pages/search/search.component';


  const route: Routes = [
    {
      path: '',
      component: HomeComponent,
      children: [
        {
          path: 'list',
          component: ListComponent
        },
        {
          path: 'add',
          component: AddComponent
        },
        {
          path: 'change/:id',
          component: AddComponent
        },
        {
          path: 'search',
          component: SearchComponent
        },
        {
          path: ':id',
          component: HeroeComponent
        },
        {
          path: '**',
          redirectTo: 'list'
        }
      ]
    }
  ]

@NgModule({
  
  imports: [
    RouterModule.forChild( route )
  ],
  exports: [
    RouterModule
  ]
})
export class HeroesRoutingModule { }
