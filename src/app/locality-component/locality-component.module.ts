import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LocalityComponentRoutingModule } from './locality-component-routing.module';
import { NavigationComponentModule } from '../navigation-component/navigation-component.module';
import { Angular2FontawesomeModule } from 'angular2-fontawesome/angular2-fontawesome';
import { LocalityAddComponentComponent } from './locality-add-component/locality-add-component.component';
import { LocalityTabComponent } from './locality-tab/locality-tab.component'
import { OptionListModule } from '../option-list/option-list.module';
import { LocalityComponentComponent } from './locality-component.component';
import { LocalityDetailsComponent } from './locality-tab/locality-details/locality-details.component';
@NgModule({
  imports: [
    CommonModule,
    LocalityComponentRoutingModule,
    NavigationComponentModule,
    Angular2FontawesomeModule,
    OptionListModule
  ],
  declarations: [LocalityAddComponentComponent, LocalityTabComponent,LocalityComponentComponent, LocalityDetailsComponent]
})
export class LocalityComponentModule { }
