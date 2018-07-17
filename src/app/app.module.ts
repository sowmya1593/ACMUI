import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { Angular2FontawesomeModule } from 'angular2-fontawesome/angular2-fontawesome';

import { MyDatePickerModule } from 'mydatepicker';

import { RegisterService } from './services/register.service';
import {HttpModule} from '@angular/http';
import { LocalityComponentRoutingModule} from './app.routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NavigationComponentModule } from './navigation-component/navigation-component.module';
import { OptionListModule } from './option-list/option-list.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { VendorsComponentComponent } from './vendors-component/vendors-component.component';
import { VendorsViewComponent } from './vendors-view/vendors-view.component';
import { SolutionsComponent } from './solutions/solutions.component';
import { FormsComponent } from './forms/forms.component';
import { SolutionsFormsComponentComponent } from './solutions/solutions-forms-component/solutions-forms-component.component';
import { PolicyComponentComponent } from './policy-component/policy-component.component';
import { PolicyViewComponentComponent } from './policy-view-component/policy-view-component.component';
import { ContactComponentComponent } from './solutions/solutions-forms-component/contact-component/contact-component.component';
import { PolicyViewFormsComponentComponent } from './policy-view-component/policy-view-forms-component/policy-view-forms-component.component';
import { ViewTableComponent } from './vendors-view/view-table/view-table.component';
import { LocalityViewComponentComponent } from './locality-view-component/locality-view-component.component';
import { SolutionViewComponentComponent } from './solution-view-component/solution-view-component.component';
import { PolicyFormsComponent } from './policy-component/policy-forms/policy-forms.component';
import { RegisterComponent } from './services/register.component';
import { SolutionTableComponent } from './solution-view-component/solution-table/solution-table.component';
import { PolicyDetailsComponent } from './policy-view-component/policy-view-forms-component/policy-details/policy-details.component';
import { EditSolutionComponent } from './edit-solution/edit-solution.component';
import { EditSolutionFormComponent } from './edit-solution/edit-solution-form/edit-solution-form.component';
import { ReviewComponent } from './policy-view-component/policy-view-forms-component/review/review.component';
import { DocumentsComponent } from './policy-view-component/policy-view-forms-component/documents/documents.component';
import { ApplicationsComponent } from './policy-view-component/policy-view-forms-component/applications/applications.component';
import { DialogBoxComponent } from './policy-view-component/policy-view-forms-component/documents/dialog-box/dialog-box.component';
import { EditNavigationComponent } from './edit-navigation/edit-navigation.component';
import { EditVendorComponent } from './edit-vendor/edit-vendor.component';
import { FilterPipe } from './convertDate.pipe';


import {  LocalityComponentModule} from "./locality-component/locality-component.module";
import { ControlNameComponent } from './control-name/control-name.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LocalityViewComponentComponent,
    VendorsComponentComponent,
    VendorsViewComponent,
    SolutionsComponent,
    FormsComponent,
    SolutionsFormsComponentComponent,
    PolicyComponentComponent,
    PolicyViewComponentComponent,
    ContactComponentComponent,
    PolicyViewFormsComponentComponent,
    ViewTableComponent,
    SolutionViewComponentComponent,
    PolicyFormsComponent,
    RegisterComponent,
    SolutionTableComponent,
    PolicyDetailsComponent,
    EditSolutionComponent,
    EditSolutionFormComponent,
    ReviewComponent,
    DocumentsComponent,
    ApplicationsComponent,
    DialogBoxComponent,
    EditVendorComponent,
    EditNavigationComponent,
    FilterPipe,
    ControlNameComponent

   
    
  ],
  
  imports: [
    BrowserModule,
    Angular2FontawesomeModule,
    MyDatePickerModule,
    HttpModule,
    CoreModule,
    FormsModule,
    LocalityComponentRoutingModule,
    LocalityComponentModule,
    BrowserAnimationsModule,
    NavigationComponentModule,
    OptionListModule,
    ReactiveFormsModule,
    NgbModule.forRoot()
  ],
  entryComponents: [
    DialogBoxComponent
  ],


  
  providers: [RegisterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
