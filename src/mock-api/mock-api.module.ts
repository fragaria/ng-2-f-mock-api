import { NgModule } from '@angular/core';
import { HttpModule }  from '@angular/http';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';

import { MockData } from './mock-data';

@NgModule({
  imports: [
    HttpModule,
    InMemoryWebApiModule.forRoot(MockData, { delay: 500 , passThruUnknownUrl: true})
  ]
})
export class MockApiModule { }
