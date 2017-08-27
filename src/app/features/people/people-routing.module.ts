import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PeopleComponent } from './people/people.component';

const peopleRoutes = [
    { path: '', component: PeopleComponent, pathMatch: 'full'},
];

@NgModule({
    imports: [RouterModule.forChild(peopleRoutes)]
})
export class PeopleRoutingModule { }
