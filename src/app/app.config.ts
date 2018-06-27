/**
 * New typescript file
 */
const baseUrl = 'http://localhost:8080/ApplicationPortfolioManager/services/';


const apiBaseUrl = baseUrl;


export const APP_CONFIG = {
  
  getVendors: apiBaseUrl + 'getVendors',
  getSolutions: apiBaseUrl + 'getSolutions',
  getSolution: apiBaseUrl +'getSolution',
  getVendor: apiBaseUrl + 'getVendor',
  postVendor:apiBaseUrl + 'addNewVendor'
}


