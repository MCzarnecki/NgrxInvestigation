import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Effect, Actions } from '@ngrx/effects';
import { Action } from '@ngrx/store';

import * as fromPeople from '../actions/collection';
import { PersonService } from '../../../core/services/person.service';
import { Person } from '../person';
import { LOAD } from '../actions/collection';

@Injectable()
export class PeopleEffects {

    constructor(private action$: Actions, private personService: PersonService) { }

    @Effect()
    loadCollection$: Observable<Action> = this.action$.ofType(fromPeople.LOAD)
        .switchMap(() => this.personService.getPeople())
        .map((people: Person[]) => { console.log('a'); return new fromPeople.LoadSuccessAction(people); });
}
