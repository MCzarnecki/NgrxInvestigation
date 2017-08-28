
import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Person } from '../../features/people/person';

import 'rxjs/Rx';

@Injectable()
export class PersonService {

    constructor(private http: Http) { }

    getPeople(): Observable<Person[]> {
        return this.http.get('http://localhost:8080/people').map((response: Response) => <Person[]> response.json());
    }

}
