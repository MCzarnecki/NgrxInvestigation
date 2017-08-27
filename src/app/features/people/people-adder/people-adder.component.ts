import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Person } from '../person';

@Component({
  selector: 'app-people-adder',
  templateUrl: './people-adder.component.html',
  styleUrls: ['./people-adder.component.css']
})
export class PeopleAdderComponent {

  @Output() person = new EventEmitter<Person>();

  newPerson: Person;

  constructor() {
    this.newPerson = new Person();
  }

  add() {
    this.person.emit(this.newPerson);
    this.newPerson = new Person();
  }

}
