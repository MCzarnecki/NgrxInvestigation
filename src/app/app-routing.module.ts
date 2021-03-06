import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const appRoutes = [
    { path: '', redirectTo: '/people', pathMatch: 'full' },
    {
      path: 'people',
      loadChildren: './features/people/people.module#PeopleModule',
    },
    {
        path: 'items',
        loadChildren: './features/items/items.module#ItemsModule',
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],

})
export class AppRoutingModule { }
