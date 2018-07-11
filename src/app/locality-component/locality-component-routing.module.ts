import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LocalityComponentComponent } from './locality-component.component';
import { LocalityAddComponentComponent } from "./locality-add-component/locality-add-component.component"
import { LocalityTabComponent } from './locality-tab/locality-tab.component';
import { LocalityDetailsComponent } from './locality-tab/locality-details/locality-details.component';
import { LocalitySolutionsComponent } from './locality-tab/locality-solutions/locality-solutions.component';
import { LocalitySolutionsLinkComponent } from './locality-tab/locality-solutions/locality-solutions-link/locality-solutions-link.component';
import { LocalitySolutionstablelinkComponent } from './locality-tab/locality-solutionstablelink/locality-solutionstablelink.component';
import { LocalityBusinessComponent } from './locality-tab/locality-business/locality-business.component';
import { LocalityAuditComponent } from './locality-tab/locality-audit/locality-audit.component';
import { AuditDetailsComponent } from './locality-tab/locality-audit/audit-details/audit-details.component';
import { AuditFindingsComponent } from './locality-tab/locality-audit/audit-findings/audit-findings.component';
import { AuditRecomendationsComponent } from './locality-tab/locality-audit/audit-recomendations/audit-recomendations.component';
import { LocalityLegalComponent } from './locality-tab/locality-legal/locality-legal.component';
import { AuditManagementComponent } from './locality-tab/locality-audit/audit-management/audit-management.component';
const routes: Routes = [ 
     {  
       path: '', 
       component: LocalityComponentComponent,
       children: [
          {
            path: '',
            component: LocalityAddComponentComponent,
          },
          {
            path: 'option',
            component: LocalityTabComponent,
            children: [
             {
              path: '',
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
                	}
              ]
              }
            
            ]
          }
       ]
     }    
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LocalityComponentRoutingModule { }
