import { NgModule } from '@angular/core';
import { PersonService } from './services/person.service';
import { HttpModule } from '@angular/http';

const SERVICES = [PersonService];

@NgModule( {
    imports: [HttpModule],
    providers: [SERVICES]
})
export class CoreModule { }
