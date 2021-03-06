
export class PolicyGrp {
	policyGrpId: number;
	policyGrpName: string;
	description: string;
    createdBy: string;
    createdTs: any;
    auditTypeId: number;
    reviewDate: any;
    status: string;
    auditTypeName: string;
    definitiveSource: string;
    owner: string;
    policyReviewTerm: string;
      policyReviewTermId :number ;
	  policyReviewDate: any ;
	  lastReviewDate : any;
	  updatedBy :	string;
	  updatedTs:any;
	 resourceLinks : string;
	policyDTOs: Policy;
	DocumentDTOs: Documents;	
}


export class Policy{
	 policyId: number;
	  controlNumber: string;
	  policyName: string;
	  description: string;
	  policyVal: string;
	  createdBy: string;
	 createdTs:any;
	  updatedBy: string;
	updatedTs:any;
	  priority: string;
	  procedures: string;
	  guidelines: string;
	  familyName: string;
	  classType: string;
	  assignedTo: string;
	  assignedBy: string;
	  startDate:any;
	 endDate:any;
		reviewDate:any;
	 status:boolean;
	linked:boolean;
	
	  linkType: string;
	
	  isDesignDocument: string;
	  configBaseline: string;
	  auditRecords: string;
	  artifacts: string;
	  nonCov: string;
	  securityPlan: string;
	  isConfigSettings: string;
	
	  policyGrpId:number;
	  comments: string;
	
//	  linkedPolicies:any;
	
	  linkedPoliciesString:string;
	
//	policyDocumentsDTOs: any;

}

export class Documents{
	
	policyDocumentsTblId: number;
	documentName: string;
	documentPath: string;
	activeFlag: boolean;
	createdBy: string;
	createdTs: any;
	updatedBy: string;
	updatedTs: any;
	

}