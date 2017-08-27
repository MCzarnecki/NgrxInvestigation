import { Component, OnInit, OnDestroy } from '@angular/core';
import { Person } from '../person';
import { Observable } from 'rxjs/Observable';

import * as fromPeople from '../reducers/index';
import * as peopleActions from '../actions/collection';
import { Store } from '@ngrx/store';
import { AddPeronAction } from '../actions/collection';

@Component({
  selector: 'app-people.component.ts',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit, OnDestroy {

  public people;

  constructor(private store: Store<any>) {
      this.people = this.store.select('people');
   }

  ngOnInit() {
  }

  personAdded(event: Person) {
     this.store.dispatch(new AddPeronAction(event));
  }

  ngOnDestroy(): void {
    console.log('Destroying PeopleComponent');
  }

}
