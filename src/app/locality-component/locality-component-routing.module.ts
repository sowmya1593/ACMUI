import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LocalityComponentComponent } from './locality-component.component';
import { LocalityAddComponentComponent } from "./locality-add-component/locality-add-component.component"
import { LocalityTabComponent } from './locality-tab/locality-tab.component';
import { LocalityDetailsComponent } from './locality-tab/locality-details/locality-details.component';

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
