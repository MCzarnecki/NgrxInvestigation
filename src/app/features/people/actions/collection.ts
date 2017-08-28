import { Action } from '@ngrx/store';
import { Person } from '../person';

export const ADD_PERSON = '[Collection] Add Person';
export const LOAD = '[Collection] Load People';
export const LOAD_SUCCESS = '[Collection] Load People Successful';

export class AddPeronAction implements Action {
    readonly type = ADD_PERSON;

    constructor(public payload: Person) { }
}

export class LoadAction implements Action {
    readonly type = LOAD;

    constructor() { }
}


export class LoadSuccessAction implements Action {
    readonly type = LOAD_SUCCESS;

    constructor(public payload: Person[]) { }
}

export type Actions = AddPeronAction | LoadAction | LoadSuccessAction;
