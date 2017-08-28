import { Component, OnInit, OnDestroy } from '@angular/core';
import { Person } from '../person';
import { Observable } from 'rxjs/Observable';

import * as fromPeople from '../reducers/index';
import * as collection from '../actions/collection';

import { Store } from '@ngrx/store';
import { AddPeronAction } from '../actions/collection';

@Component({
  selector: 'app-people.component.ts',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit, OnDestroy {

  public people: Observable<Person[]>;

  constructor(private store: Store<fromPeople.State>) {
      this.people = this.store.select(fromPeople.getPeopleCollection);
   }

  ngOnInit() {
     this.store.dispatch(new collection.LoadAction());
  }

  personAdded(event: Person) {
     this.store.dispatch(new AddPeronAction(event));
  }

  ngOnDestroy(): void {
    console.log('Destroying PeopleComponent');
  }

}
