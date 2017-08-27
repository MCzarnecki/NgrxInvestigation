import { Person } from '../person';

import * as collection from '../actions/collection';

export function reducer(state: Person[] = [], action: collection.Actions) {
    switch (action.type) {

        case collection.ADD_PERSON: {
            const newState = [];
            state.forEach(x => newState.push(x));
            newState.push(action.payload);
            return newState;
        }

        default: {
            return state;
        }
    }
}
