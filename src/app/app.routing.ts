import { LocalityDetailsComponent } from './locality-component/locality-tab/locality-details/locality-details.component';


import { NgModule } from '@angular/core';

import { LocalityComponentComponent } from './locality-component/locality-component.component';

import { LocalityTabComponent } from './locality-component/locality-tab/locality-tab.component';

import { LocalitySolutionsComponent } from './locality-component/locality-tab/locality-solutions/locality-solutions.component';
import { LocalitySolutionsLinkComponent } from './locality-component/locality-tab/locality-solutions/locality-solutions-link/locality-solutions-link.component';
import { LocalitySolutionstablelinkComponent } from './locality-component/locality-tab/locality-solutionstablelink/locality-solutionstablelink.component';
import { LocalityBusinessComponent } from './locality-component/locality-tab/locality-business/locality-business.component';
import { LocalityAuditComponent } from './locality-component/locality-tab/locality-audit/locality-audit.component';
import { AuditDetailsComponent } from './locality-component/locality-tab/locality-audit/audit-details/audit-details.component';
import { AuditFindingsComponent } from './locality-component/locality-tab/locality-audit/audit-findings/audit-findings.component';
import { AuditRecomendationsComponent } from './locality-component/locality-tab/locality-audit/audit-recomendations/audit-recomendations.component';
import { LocalityLegalComponent } from './locality-component/locality-tab/locality-legal/locality-legal.component';
import { AuditManagementComponent } from './locality-component/locality-tab/locality-audit/audit-management/audit-management.component';
import {Routes, RouterModule} from '@angular/router';
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
import { LocalityAddComponentComponent } from "./locality-component/locality-add-component/locality-add-component.component";

const appRoutes: Routes = [

    {path: '', component: DashboardComponent },
    {path: 'dashboard', component: DashboardComponent },
    {path: 'vendors', component: VendorsComponentComponent },
    {path: 'solutions', component: SolutionsComponent },
    {path: 'vendorsView', component: VendorsViewComponent },
    {path: 'policy', component: PolicyComponentComponent },
    {path:"locality", component: LocalityComponentComponent, children: [
    {path: 'map',component: LocalityAddComponentComponent},
    {path: 'tab' ,component: LocalityTabComponent, children:[
    
    {path: 'info' , component: LocalityDetailsComponent}
     ]},
   
    ]} ,         
        {path: 'localityView', component: LocalityViewComponentComponent},
    {path: 'solutionsView', component: SolutionViewComponentComponent },
    {path: 'editSolutions/:id', component: EditSolutionComponent },
    {path: 'editVendors/:id', component: EditVendorComponent },
    {path: 'policyView', component: PolicyViewComponentComponent, children: [
      {path: 'policyDetails', component: PolicyDetailsComponent },
      {path: 'review', component: ReviewComponent },
      {path: 'documents', component: DocumentsComponent },
      {path: 'applications', component: ApplicationsComponent}] },
  ];
  @NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
  
 
  
  export class LocalityComponentRoutingModule { }