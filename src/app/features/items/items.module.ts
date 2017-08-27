import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemsComponent } from './items/items.component';
import { ItemsRoutingModule } from './items-routing.module';

const COMPONENTS = [ItemsComponent];

@NgModule({
    declarations: [COMPONENTS],
    imports: [CommonModule, ItemsRoutingModule],
})

export class ItemsModule { }
