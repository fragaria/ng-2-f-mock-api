import { NgModule, ModuleWithProviders } from '@angular/core';
import { HttpModule }  from '@angular/http';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';

import { MockData } from './mock-data';

let configData = {
  delay: 500,
  passThruUnknownUrl: true
}

@NgModule({
  imports: [ HttpModule ]
})
export class MockApiModule {

  static forRoot(newData: Object = {}): ModuleWithProviders {
    // call with new data from project if you want inject your data to mock data
    return InMemoryWebApiModule.forRoot(MockData.getMeWithFreshData(newData), configData)
  }
}
