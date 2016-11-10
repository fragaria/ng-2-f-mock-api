import { NgModule } from '@angular/core';
import { HttpModule }  from '@angular/http';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';

import { MockData } from './mock-data';

let configData = {
  delay: 500,
  passThruUnknownUrl: true
}

@NgModule({
  imports: [
    HttpModule,
    InMemoryWebApiModule.forRoot(MockData, configData)
  ]
})
export class MockApiModule { }
