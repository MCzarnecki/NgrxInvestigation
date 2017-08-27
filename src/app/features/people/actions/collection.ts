import { Action } from '@ngrx/store';
import { Person } from '../person';

export const ADD_PERSON = '[Collection] Add Person';

export class AddPeronAction implements Action {
    readonly type = ADD_PERSON;

    constructor(public payload: Person) { }
}

export type Actions = AddPeronAction;
