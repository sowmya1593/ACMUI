/**
 * New typescript file
 */
const baseUrl = 'http://localhost:8080/ApplicationPortfolioManager/services/';

//const baseUrl = 'http://ec2-54-86-177-206.compute-1.amazonaws.com/ApplicationPortfolioManager/services/';

//http://ec2-54-86-177-206.compute-1.amazonaws.com/

const apiBaseUrl = baseUrl;


export const APP_CONFIG = {
  
  getVendors: apiBaseUrl + 'getVendors',
  getSolutions: apiBaseUrl + 'getSolutions',
  getSolution: apiBaseUrl +'getSolution',
  getVendor: apiBaseUrl + 'getVendor',
  postVendor:apiBaseUrl + 'addNewVendor',
  postSolution: apiBaseUrl + 'updateSolution',
  getSolutionTypes: apiBaseUrl + 'getSolutionOnType',
  getSolutionsOnload: apiBaseUrl + 'getSolutionsOnload',
  addSolutions: apiBaseUrl + 'registerSolution',
  getSolutionFile: apiBaseUrl + 'getSolutionFile',
  fetchPolicies: apiBaseUrl + 'fetchPolicies',
  getAuditTypes: apiBaseUrl + 'getAuditTypes',
  getPolicyGroup: apiBaseUrl + 'fetchPolicyGroup',
  addPolicyGroup: apiBaseUrl + 'addPolicyGrp',
  addLocality: apiBaseUrl + 'createApplication',
  viewApplication: apiBaseUrl + 'viewApplication',
  updateLocality: apiBaseUrl + 'updateApplication'

}


