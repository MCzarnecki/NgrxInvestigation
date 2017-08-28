import { NgModule } from '@angular/core';
import { PeopleRoutingModule } from './people-routing.module';
import { PeopleComponent } from './people/people.component';
import { PeopleListComponent } from './people-list/people-list.component';
import { CommonModule } from '@angular/common';
import { PeopleAdderComponent } from './people-adder/people-adder.component';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { reducer } from './reducers/index';
import { EffectsModule } from '@ngrx/effects';
import { PeopleEffects } from './effects/people.effects';

const COMPONENTS = [PeopleComponent, PeopleListComponent, PeopleAdderComponent];

@NgModule({
    declarations: [COMPONENTS],
    imports: [PeopleRoutingModule,
    CommonModule,
    FormsModule,
    StoreModule.forFeature('people', reducer),
    EffectsModule.forFeature([PeopleEffects])]
})
export class PeopleModule { }

