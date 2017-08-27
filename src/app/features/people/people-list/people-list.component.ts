import { Component, OnInit, Input } from '@angular/core';
import { Person } from '../person';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.css']
})
export class PeopleListComponent {

  @Input() people;

  constructor() { }
}
