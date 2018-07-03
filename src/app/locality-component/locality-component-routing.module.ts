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
