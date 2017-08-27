import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { routerReducer } from '@ngrx/router-store';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { reducers } from './reducers/index';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    RouterModule,
    CoreModule,
    AppRoutingModule,
    // @ngrx/store modules
    StoreRouterConnectingModule,
    StoreModule.forRoot(reducers),
    !environment.production ? StoreDevtoolsModule.instrument({ maxAge: 50 }) : []
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
