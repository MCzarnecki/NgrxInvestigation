import { Person } from '../person';

import * as collection from '../actions/collection';

export function reducer(state: Person[] = [], action: collection.Actions) {
    console.log('State ' + state);
    switch (action.type) {

        case collection.ADD_PERSON: {
            let per = state;
            per.push(action.payload);
            return per;
        }

        default: {
            return state;
        }
    }
}
