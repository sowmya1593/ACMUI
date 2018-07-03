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
import { LocalitySolutionsComponent } from './locality-tab/locality-solutions/locality-solutions.component';
import { LocalitySolutionsLinkComponent } from './locality-tab/locality-solutions/locality-solutions-link/locality-solutions-link.component';
import { LocalitySolutionstablelinkComponent } from './locality-tab/locality-solutionstablelink/locality-solutionstablelink.component';
import { LocalityBusinessComponent } from './locality-tab/locality-business/locality-business.component';
@NgModule({
  imports: [
    CommonModule,
    LocalityComponentRoutingModule,
    NavigationComponentModule,
    Angular2FontawesomeModule,
    OptionListModule
  ],
  declarations: [LocalityAddComponentComponent, LocalityTabComponent,LocalityComponentComponent, LocalityDetailsComponent, LocalitySolutionsComponent, LocalitySolutionsLinkComponent, LocalitySolutionstablelinkComponent, LocalityBusinessComponent]
})
export class LocalityComponentModule { }
