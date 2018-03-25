// import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
//
// @NgModule({
//   imports: [
//     CommonModule
//   ],
//   declarations: []
// })
// export class AppRoutingModule { }

import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { HeroesComponent }      from './heroes/heroes.component';
import { HeroDetailComponent }  from './hero-detail/hero-detail.component';

const routes: Routes = [
    //RUTA POR DEFECTO AQUI SE DEFINIE A DONDE IRA AL INICIO DE LA APP.
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },

    //OTRAS RUTAS
    //RUTA AL DASHBOARD
    { path: 'dashboard', component: DashboardComponent },
    //RUTA A HEROES
    { path: 'heroes', component: HeroesComponent },
    //RUTA AL DETALLE DE HEROES
    { path: 'detail/:id', component: HeroDetailComponent },

];

@NgModule({
    //SE DEFINEN LA CONSTANTE RUTA PARA QUE EL ENTORNO GLOBAL PROCESE LAS RUTAS
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}
