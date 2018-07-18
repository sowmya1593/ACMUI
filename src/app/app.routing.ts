import { LocalityDetailsComponent } from './locality-component/locality-tab/locality-details/locality-details.component';


import { NgModule } from '@angular/core';

import { LocalityComponentComponent } from './locality-component/locality-component.component';

import { LocalityTabComponent } from './locality-component/locality-tab/locality-tab.component';

import { LocalitySolutionsComponent } from './locality-component/locality-tab/locality-solutions/locality-solutions.component';
import { LocalitySolutionsLinkComponent } from './locality-component/locality-tab/locality-solutions/locality-solutions-link/locality-solutions-link.component';
import { LocalitySolutionstablelinkComponent } from './locality-component/locality-tab/locality-solutionstablelink/locality-solutionstablelink.component';
import { LocalityBusinessComponent } from './locality-component/locality-tab/locality-business/locality-business.component';
import { LocalityAuditComponent } from './locality-component/locality-tab/locality-audit/locality-audit.component';
import { LocalitySecurityComponent } from './locality-component/locality-tab/locality-security/locality-security.component';
import { AuditDetailsComponent } from './locality-component/locality-tab/locality-audit/audit-details/audit-details.component';
import { AuditFindingsComponent } from './locality-component/locality-tab/locality-audit/audit-findings/audit-findings.component';
import { AuditRecomendationsComponent } from './locality-component/locality-tab/locality-audit/audit-recomendations/audit-recomendations.component';
import { AuditActionComponent } from './locality-component/locality-tab/locality-audit/audit-action/audit-action.component';
import { AuditBusinessriskComponent } from './locality-component/locality-tab/locality-audit/audit-businessrisk/audit-businessrisk.component';
import { AuditSecurityriskComponent } from './locality-component/locality-tab/locality-audit/audit-securityrisk/audit-securityrisk.component';
import { AuditBudgetComponent } from './locality-component/locality-tab/locality-audit/audit-budget/audit-budget.component';
import { AuditAttachmentsComponent } from './locality-component/locality-tab/locality-audit/audit-attachments/audit-attachments.component';
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
import { ControlNameComponent } from './control-name/control-name.component';

const appRoutes: Routes = [

   
   
    
   {path: '', component: DashboardComponent },
    {path: 'dashboard', component: DashboardComponent },
    {path: 'vendors', component: VendorsComponentComponent },
    {path: 'solutions', component: SolutionsComponent },
    {path: 'vendorsView', component: VendorsViewComponent },
    {path: 'policy', component: PolicyComponentComponent },
    {path: 'policy/accessControl', component: ControlNameComponent},
    {path:"locality", component: LocalityComponentComponent, 
         children: [
          {
            path: 'map',
            component: LocalityAddComponentComponent,
          },
          {
            path: 'tab',
            component: LocalityTabComponent,
            children: [
             {
              path: 'info/:Locality',
              component: LocalityDetailsComponent
             },
             {
             path: 'legal',
             component: LocalityLegalComponent
             },
             {
              path: 'solutions',
              component: LocalitySolutionsComponent,
              },
              {
               path: 'security',
              component: LocalitySecurityComponent,
              },
              {
              path: 'link' ,
              component:LocalitySolutionstablelinkComponent
              },
              {
              path: 'business' ,
              component:LocalityBusinessComponent
              },
              {
              path: 'Audit' ,
              component:LocalityAuditComponent,
              children: [
                {
                  path:'',
                  component:AuditDetailsComponent
                },
                {
                	path:'find',
                	component:AuditFindingsComponent
                	},
                	{
                	path:'recomendation',
                	component:AuditRecomendationsComponent
                	},
                	{
                	path:'management',
                	component:AuditManagementComponent
                	},
                	{
                	path:'action',
                	component:AuditActionComponent
                	},
                	{
                	path:'brisk',
                	component:AuditBusinessriskComponent
                	},
                	{
                	path:'srisk',
                	component:AuditSecurityriskComponent
                	},
                	{
                	path:'budget',
                	component:AuditBudgetComponent
                	},
                	{
                	path:'attachment',
                	component:AuditAttachmentsComponent
                	}
              ]
              }
            
            ]
          }
       ]
     },         
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