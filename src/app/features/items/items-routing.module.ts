import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ItemsComponent } from './items/items.component';

const itemsRoutes = [
    { path: '', component: ItemsComponent, pathMatch: 'full'},
];

@NgModule({
    imports: [RouterModule.forChild(itemsRoutes)]
})
export class ItemsRoutingModule { }
