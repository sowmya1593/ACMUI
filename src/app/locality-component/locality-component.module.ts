import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LocalityComponentRoutingModule} from '.././app.routing';
import { BrowserModule } from '@angular/platform-browser';
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
import { LocalityAuditComponent } from './locality-tab/locality-audit/locality-audit.component';
import { AuditDetailsComponent } from './locality-tab/locality-audit/audit-details/audit-details.component';
import { AuditFindingsComponent } from './locality-tab/locality-audit/audit-findings/audit-findings.component';
import { AuditRecomendationsComponent } from './locality-tab/locality-audit/audit-recomendations/audit-recomendations.component';
import { LocalityLegalComponent } from './locality-tab/locality-legal/locality-legal.component';
import { AuditManagementComponent } from './locality-tab/locality-audit/audit-management/audit-management.component';
import { LocalitySecurityComponent } from './locality-tab/locality-security/locality-security.component';
import { AuditActionComponent } from './locality-tab/locality-audit/audit-action/audit-action.component';
import { AuditBusinessriskComponent } from './locality-tab/locality-audit/audit-businessrisk/audit-businessrisk.component';
import { AuditSecurityriskComponent } from './locality-tab/locality-audit/audit-securityrisk/audit-securityrisk.component';
import { AuditBudgetComponent } from './locality-tab/locality-audit/audit-budget/audit-budget.component';
import { AuditAttachmentsComponent } from './locality-tab/locality-audit/audit-attachments/audit-attachments.component';
import { LocalityAssessmentComponent } from './locality-tab/locality-assessment/locality-assessment.component';
import { LocalityTechnicalComponent } from './locality-tab/locality-technical/locality-technical.component';
import { MyDatePickerModule } from 'mydatepicker';

@NgModule({
  imports: [
    CommonModule,
    NavigationComponentModule,
    Angular2FontawesomeModule,
    OptionListModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserModule,
    LocalityComponentRoutingModule,
    MyDatePickerModule
  ],
  declarations: [LocalityAddComponentComponent, LocalityTabComponent,LocalityComponentComponent, LocalityDetailsComponent, LocalitySolutionsComponent, LocalitySolutionsLinkComponent, LocalitySolutionstablelinkComponent, LocalityBusinessComponent, LocalityAuditComponent, AuditDetailsComponent, AuditFindingsComponent, AuditRecomendationsComponent, LocalityLegalComponent, AuditManagementComponent, LocalitySecurityComponent, AuditActionComponent, AuditBusinessriskComponent, AuditSecurityriskComponent, AuditBudgetComponent, AuditAttachmentsComponent, LocalityAssessmentComponent, LocalityTechnicalComponent]
})
export class LocalityComponentModule { }
