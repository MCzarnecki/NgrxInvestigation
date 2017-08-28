import { Person } from '../person';
import { createSelector, createFeatureSelector } from '@ngrx/store';

import * as collection from '../actions/collection';

export interface State {
    people: Person[];
}

const initialState: State = {
    people: []
};

export function reducer(state = initialState, action: collection.Actions) {
    switch (action.type) {

        case collection.ADD_PERSON: {
            const newState = [];
            if (state.people) {
                state.people.forEach(x => newState.push(x));
            }
            newState.push(action.payload);
            console.log(Object.assign({}, { people: newState }));
            return Object.assign({}, state, { people: newState });
        }

        case collection.LOAD_SUCCESS: {
            return Object.assign({}, state, {people: action.payload});
        }

        default: {
            console.log(state);
            return state;
        }
    }
}

export const getPeopleState = createFeatureSelector<State>('people');

export const getPeopleCollection = createSelector(
    getPeopleState,
    (state: State) => state.people
);
