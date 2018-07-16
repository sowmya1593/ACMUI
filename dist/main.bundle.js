webpackJsonp([0],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/apiservice.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_config__ = __webpack_require__("../../../../../src/app/app.config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_http_service__ = __webpack_require__("../../../../../src/app/core/http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiserviceService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ApiserviceService = (function () {
    function ApiserviceService(_httpService, http) {
        this._httpService = _httpService;
        this.http = http;
    }
    ApiserviceService.prototype.getVendors = function () {
        var url = __WEBPACK_IMPORTED_MODULE_0__app_config__["a" /* APP_CONFIG */].getVendors;
        return this._httpService.get(url)
            .map(function (res) { return res.json(); });
    };
    ApiserviceService.prototype.getSolutions = function () {
        var url = __WEBPACK_IMPORTED_MODULE_0__app_config__["a" /* APP_CONFIG */].getSolutions;
        return this._httpService.get(url)
            .map(function (res) { return res.json(); });
    };
    ApiserviceService.prototype.getSolutionExtra = function (id) {
        var url = __WEBPACK_IMPORTED_MODULE_0__app_config__["a" /* APP_CONFIG */].getSolution;
        return this._httpService.get(url + '?' + 'solutionID' + '=' + id)
            .map(function (res) { return res.json(); });
    };
    /*getSolution()
   {
     let url = APP_CONFIG.getSolution;
     return this._httpService.get(url)
     .map(res =><Response>res.json());
   }*/
    ApiserviceService.prototype.getVendorExtra = function (id) {
        var url = __WEBPACK_IMPORTED_MODULE_0__app_config__["a" /* APP_CONFIG */].getVendor;
        return this._httpService.get(url + '?' + 'vendorId' + '=' + id)
            .map(function (res) { return res.json(); });
    };
    ApiserviceService.prototype.postVendorData = function (body) {
        console.log("body", body);
        var url = __WEBPACK_IMPORTED_MODULE_0__app_config__["a" /* APP_CONFIG */].postVendor;
        return this._httpService.post(url, body).map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__["Observable"].throw(error.json().error || 'Server error'); });
    };
    ApiserviceService.prototype.updateSolution = function (body) {
        console.log(body);
        var url = __WEBPACK_IMPORTED_MODULE_0__app_config__["a" /* APP_CONFIG */].postSolution;
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* Headers */]({ 'Content-Type': 'multipart/form-data' });
        var options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestOptions */]({ headers: headers });
        this.http.post(url, body);
        //return this.http.post(url, body).map((res: Response) => res.json())
        //.catch((error : any) => Observable.throw(error.json().error || 'Server error'));
    };
    ApiserviceService.prototype.getSolutionTypes = function (id) {
        var url = __WEBPACK_IMPORTED_MODULE_0__app_config__["a" /* APP_CONFIG */].getSolutionTypes;
        return this._httpService.get(url + '?' + 'solutionID' + '=' + id)
            .map(function (res) { return res.json(); });
    };
    ApiserviceService.prototype.getSolutionsOnload = function () {
        var url = __WEBPACK_IMPORTED_MODULE_0__app_config__["a" /* APP_CONFIG */].getSolutionsOnload;
        return this._httpService.get(url)
            .map(function (res) { return res.json(); });
    };
    ApiserviceService.prototype.addSolutions = function (body) {
        console.log(body);
        var url = __WEBPACK_IMPORTED_MODULE_0__app_config__["a" /* APP_CONFIG */].addSolutions;
        return this._httpService.post(url, body).map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__["Observable"].throw(error.json().error || 'Server error'); });
    };
    ApiserviceService.prototype.getSolutionFile = function (id) {
        var url = __WEBPACK_IMPORTED_MODULE_0__app_config__["a" /* APP_CONFIG */].getSolutionFile;
        return this._httpService.get(url + '?' + 'fileId' + '=' + id)
            .map(function (res) { return res.json(); });
    };
    ApiserviceService.prototype.fetchPolicies = function (id) {
        var url = __WEBPACK_IMPORTED_MODULE_0__app_config__["a" /* APP_CONFIG */].fetchPolicies;
        return this._httpService.get(url + '?' + 'policyGrpId' + '=' + id)
            .map(function (res) { return res.json(); });
    };
    ApiserviceService.prototype.getAuditTypes = function () {
        var url = __WEBPACK_IMPORTED_MODULE_0__app_config__["a" /* APP_CONFIG */].getAuditTypes;
        return this._httpService.get(url)
            .map(function (res) { return res.json(); });
    };
    ApiserviceService.prototype.getPolicyGroup = function (auditId) {
        var url = __WEBPACK_IMPORTED_MODULE_0__app_config__["a" /* APP_CONFIG */].getPolicyGroup;
        return this._httpService.get(url + '?' + 'auditTypeId' + '=' + auditId)
            .map(function (res) { return res.json(); });
    };
    return ApiserviceService;
}());
ApiserviceService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__core_http_service__["a" /* HttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__core_http_service__["a" /* HttpService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */]) === "function" && _b || Object])
], ApiserviceService);

var _a, _b;
//# sourceMappingURL=apiservice.service.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "*{\n\tbox-sizing: border-box;\n\tmargin: 0;\n\tpadding: 0;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.config.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return APP_CONFIG; });
/**
 * New typescript file
 */
var baseUrl = 'http://localhost:8080/ApplicationPortfolioManager/services/';
var apiBaseUrl = baseUrl;
var APP_CONFIG = {
    getVendors: apiBaseUrl + 'getVendors',
    getSolutions: apiBaseUrl + 'getSolutions',
    getSolution: apiBaseUrl + 'getSolution',
    getVendor: apiBaseUrl + 'getVendor',
    postVendor: apiBaseUrl + 'addNewVendor',
    postSolution: apiBaseUrl + 'updateSolution',
    getSolutionTypes: apiBaseUrl + 'getSolutionOnType',
    getSolutionsOnload: apiBaseUrl + 'getSolutionsOnload',
    addSolutions: apiBaseUrl + 'registerSolution',
    getSolutionFile: apiBaseUrl + 'getSolutionFile',
    fetchPolicies: apiBaseUrl + 'fetchPolicies',
    getAuditTypes: apiBaseUrl + 'getAuditTypes',
    getPolicyGroup: apiBaseUrl + 'fetchPolicyGroup'
};
//# sourceMappingURL=app.config.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__core_core_module__ = __webpack_require__("../../../../../src/app/core/core.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_fontawesome_angular2_fontawesome__ = __webpack_require__("../../../../angular2-fontawesome/angular2-fontawesome.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_fontawesome_angular2_fontawesome___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_angular2_fontawesome_angular2_fontawesome__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_mydatepicker__ = __webpack_require__("../../../../mydatepicker/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_register_service__ = __webpack_require__("../../../../../src/app/services/register.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_routing__ = __webpack_require__("../../../../../src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__navigation_component_navigation_component_module__ = __webpack_require__("../../../../../src/app/navigation-component/navigation-component.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__option_list_option_list_module__ = __webpack_require__("../../../../../src/app/option-list/option-list.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__vendors_component_vendors_component_component__ = __webpack_require__("../../../../../src/app/vendors-component/vendors-component.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__vendors_view_vendors_view_component__ = __webpack_require__("../../../../../src/app/vendors-view/vendors-view.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__solutions_solutions_component__ = __webpack_require__("../../../../../src/app/solutions/solutions.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__forms_forms_component__ = __webpack_require__("../../../../../src/app/forms/forms.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__solutions_solutions_forms_component_solutions_forms_component_component__ = __webpack_require__("../../../../../src/app/solutions/solutions-forms-component/solutions-forms-component.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__policy_component_policy_component_component__ = __webpack_require__("../../../../../src/app/policy-component/policy-component.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__policy_view_component_policy_view_component_component__ = __webpack_require__("../../../../../src/app/policy-view-component/policy-view-component.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__solutions_solutions_forms_component_contact_component_contact_component_component__ = __webpack_require__("../../../../../src/app/solutions/solutions-forms-component/contact-component/contact-component.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__policy_view_component_policy_view_forms_component_policy_view_forms_component_component__ = __webpack_require__("../../../../../src/app/policy-view-component/policy-view-forms-component/policy-view-forms-component.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__vendors_view_view_table_view_table_component__ = __webpack_require__("../../../../../src/app/vendors-view/view-table/view-table.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__locality_view_component_locality_view_component_component__ = __webpack_require__("../../../../../src/app/locality-view-component/locality-view-component.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__solution_view_component_solution_view_component_component__ = __webpack_require__("../../../../../src/app/solution-view-component/solution-view-component.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__policy_component_policy_forms_policy_forms_component__ = __webpack_require__("../../../../../src/app/policy-component/policy-forms/policy-forms.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__services_register_component__ = __webpack_require__("../../../../../src/app/services/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__solution_view_component_solution_table_solution_table_component__ = __webpack_require__("../../../../../src/app/solution-view-component/solution-table/solution-table.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__policy_view_component_policy_view_forms_component_policy_details_policy_details_component__ = __webpack_require__("../../../../../src/app/policy-view-component/policy-view-forms-component/policy-details/policy-details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__edit_solution_edit_solution_component__ = __webpack_require__("../../../../../src/app/edit-solution/edit-solution.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__edit_solution_edit_solution_form_edit_solution_form_component__ = __webpack_require__("../../../../../src/app/edit-solution/edit-solution-form/edit-solution-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__policy_view_component_policy_view_forms_component_review_review_component__ = __webpack_require__("../../../../../src/app/policy-view-component/policy-view-forms-component/review/review.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__policy_view_component_policy_view_forms_component_documents_documents_component__ = __webpack_require__("../../../../../src/app/policy-view-component/policy-view-forms-component/documents/documents.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__policy_view_component_policy_view_forms_component_applications_applications_component__ = __webpack_require__("../../../../../src/app/policy-view-component/policy-view-forms-component/applications/applications.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__policy_view_component_policy_view_forms_component_documents_dialog_box_dialog_box_component__ = __webpack_require__("../../../../../src/app/policy-view-component/policy-view-forms-component/documents/dialog-box/dialog-box.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__edit_navigation_edit_navigation_component__ = __webpack_require__("../../../../../src/app/edit-navigation/edit-navigation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__edit_vendor_edit_vendor_component__ = __webpack_require__("../../../../../src/app/edit-vendor/edit-vendor.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__convertDate_pipe__ = __webpack_require__("../../../../../src/app/convertDate.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__locality_component_locality_component_module__ = __webpack_require__("../../../../../src/app/locality-component/locality-component.module.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









































var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_14__dashboard_dashboard_component__["a" /* DashboardComponent */],
            __WEBPACK_IMPORTED_MODULE_25__locality_view_component_locality_view_component_component__["a" /* LocalityViewComponentComponent */],
            __WEBPACK_IMPORTED_MODULE_15__vendors_component_vendors_component_component__["a" /* VendorsComponentComponent */],
            __WEBPACK_IMPORTED_MODULE_16__vendors_view_vendors_view_component__["a" /* VendorsViewComponent */],
            __WEBPACK_IMPORTED_MODULE_17__solutions_solutions_component__["a" /* SolutionsComponent */],
            __WEBPACK_IMPORTED_MODULE_18__forms_forms_component__["a" /* FormsComponent */],
            __WEBPACK_IMPORTED_MODULE_19__solutions_solutions_forms_component_solutions_forms_component_component__["a" /* SolutionsFormsComponentComponent */],
            __WEBPACK_IMPORTED_MODULE_20__policy_component_policy_component_component__["a" /* PolicyComponentComponent */],
            __WEBPACK_IMPORTED_MODULE_21__policy_view_component_policy_view_component_component__["a" /* PolicyViewComponentComponent */],
            __WEBPACK_IMPORTED_MODULE_22__solutions_solutions_forms_component_contact_component_contact_component_component__["a" /* ContactComponentComponent */],
            __WEBPACK_IMPORTED_MODULE_23__policy_view_component_policy_view_forms_component_policy_view_forms_component_component__["a" /* PolicyViewFormsComponentComponent */],
            __WEBPACK_IMPORTED_MODULE_24__vendors_view_view_table_view_table_component__["a" /* ViewTableComponent */],
            __WEBPACK_IMPORTED_MODULE_26__solution_view_component_solution_view_component_component__["a" /* SolutionViewComponentComponent */],
            __WEBPACK_IMPORTED_MODULE_27__policy_component_policy_forms_policy_forms_component__["a" /* PolicyFormsComponent */],
            __WEBPACK_IMPORTED_MODULE_28__services_register_component__["a" /* RegisterComponent */],
            __WEBPACK_IMPORTED_MODULE_29__solution_view_component_solution_table_solution_table_component__["a" /* SolutionTableComponent */],
            __WEBPACK_IMPORTED_MODULE_30__policy_view_component_policy_view_forms_component_policy_details_policy_details_component__["a" /* PolicyDetailsComponent */],
            __WEBPACK_IMPORTED_MODULE_31__edit_solution_edit_solution_component__["a" /* EditSolutionComponent */],
            __WEBPACK_IMPORTED_MODULE_32__edit_solution_edit_solution_form_edit_solution_form_component__["a" /* EditSolutionFormComponent */],
            __WEBPACK_IMPORTED_MODULE_33__policy_view_component_policy_view_forms_component_review_review_component__["a" /* ReviewComponent */],
            __WEBPACK_IMPORTED_MODULE_34__policy_view_component_policy_view_forms_component_documents_documents_component__["a" /* DocumentsComponent */],
            __WEBPACK_IMPORTED_MODULE_35__policy_view_component_policy_view_forms_component_applications_applications_component__["a" /* ApplicationsComponent */],
            __WEBPACK_IMPORTED_MODULE_36__policy_view_component_policy_view_forms_component_documents_dialog_box_dialog_box_component__["a" /* DialogBoxComponent */],
            __WEBPACK_IMPORTED_MODULE_38__edit_vendor_edit_vendor_component__["a" /* EditVendorComponent */],
            __WEBPACK_IMPORTED_MODULE_37__edit_navigation_edit_navigation_component__["a" /* EditNavigationComponent */],
            __WEBPACK_IMPORTED_MODULE_39__convertDate_pipe__["a" /* FilterPipe */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_6_angular2_fontawesome_angular2_fontawesome__["Angular2FontawesomeModule"],
            __WEBPACK_IMPORTED_MODULE_7_mydatepicker__["MyDatePickerModule"],
            __WEBPACK_IMPORTED_MODULE_9__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_5__core_core_module__["a" /* CoreModule */],
            __WEBPACK_IMPORTED_MODULE_11__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_10__app_routing__["a" /* LocalityComponentRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_40__locality_component_locality_component_module__["a" /* LocalityComponentModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_12__navigation_component_navigation_component_module__["a" /* NavigationComponentModule */],
            __WEBPACK_IMPORTED_MODULE_13__option_list_option_list_module__["a" /* OptionListModule */],
            __WEBPACK_IMPORTED_MODULE_11__angular_forms__["b" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot()
        ],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_36__policy_view_component_policy_view_forms_component_documents_dialog_box_dialog_box_component__["a" /* DialogBoxComponent */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_8__services_register_service__["a" /* RegisterService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__locality_component_locality_tab_locality_details_locality_details_component__ = __webpack_require__("../../../../../src/app/locality-component/locality-tab/locality-details/locality-details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__locality_component_locality_component_component__ = __webpack_require__("../../../../../src/app/locality-component/locality-component.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__locality_component_locality_tab_locality_tab_component__ = __webpack_require__("../../../../../src/app/locality-component/locality-tab/locality-tab.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__vendors_component_vendors_component_component__ = __webpack_require__("../../../../../src/app/vendors-component/vendors-component.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__vendors_view_vendors_view_component__ = __webpack_require__("../../../../../src/app/vendors-view/vendors-view.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__solutions_solutions_component__ = __webpack_require__("../../../../../src/app/solutions/solutions.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__policy_component_policy_component_component__ = __webpack_require__("../../../../../src/app/policy-component/policy-component.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__policy_view_component_policy_view_component_component__ = __webpack_require__("../../../../../src/app/policy-view-component/policy-view-component.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__locality_view_component_locality_view_component_component__ = __webpack_require__("../../../../../src/app/locality-view-component/locality-view-component.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__solution_view_component_solution_view_component_component__ = __webpack_require__("../../../../../src/app/solution-view-component/solution-view-component.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__policy_view_component_policy_view_forms_component_policy_details_policy_details_component__ = __webpack_require__("../../../../../src/app/policy-view-component/policy-view-forms-component/policy-details/policy-details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__edit_solution_edit_solution_component__ = __webpack_require__("../../../../../src/app/edit-solution/edit-solution.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__policy_view_component_policy_view_forms_component_review_review_component__ = __webpack_require__("../../../../../src/app/policy-view-component/policy-view-forms-component/review/review.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__policy_view_component_policy_view_forms_component_documents_documents_component__ = __webpack_require__("../../../../../src/app/policy-view-component/policy-view-forms-component/documents/documents.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__policy_view_component_policy_view_forms_component_applications_applications_component__ = __webpack_require__("../../../../../src/app/policy-view-component/policy-view-forms-component/applications/applications.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__edit_vendor_edit_vendor_component__ = __webpack_require__("../../../../../src/app/edit-vendor/edit-vendor.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__locality_component_locality_add_component_locality_add_component_component__ = __webpack_require__("../../../../../src/app/locality-component/locality-add-component/locality-add-component.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocalityComponentRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_5__dashboard_dashboard_component__["a" /* DashboardComponent */] },
    { path: 'vendors', component: __WEBPACK_IMPORTED_MODULE_6__vendors_component_vendors_component_component__["a" /* VendorsComponentComponent */] },
    { path: 'solutions', component: __WEBPACK_IMPORTED_MODULE_8__solutions_solutions_component__["a" /* SolutionsComponent */] },
    { path: 'vendorsView', component: __WEBPACK_IMPORTED_MODULE_7__vendors_view_vendors_view_component__["a" /* VendorsViewComponent */] },
    { path: 'policy', component: __WEBPACK_IMPORTED_MODULE_9__policy_component_policy_component_component__["a" /* PolicyComponentComponent */] },
    { path: "locality", component: __WEBPACK_IMPORTED_MODULE_2__locality_component_locality_component_component__["a" /* LocalityComponentComponent */], children: [
            { path: 'map', component: __WEBPACK_IMPORTED_MODULE_19__locality_component_locality_add_component_locality_add_component_component__["a" /* LocalityAddComponentComponent */] },
            { path: 'tab', component: __WEBPACK_IMPORTED_MODULE_3__locality_component_locality_tab_locality_tab_component__["a" /* LocalityTabComponent */], children: [
                    { path: 'info', component: __WEBPACK_IMPORTED_MODULE_0__locality_component_locality_tab_locality_details_locality_details_component__["a" /* LocalityDetailsComponent */] }
                ] },
        ] },
    { path: 'localityView', component: __WEBPACK_IMPORTED_MODULE_11__locality_view_component_locality_view_component_component__["a" /* LocalityViewComponentComponent */] },
    { path: 'solutionsView', component: __WEBPACK_IMPORTED_MODULE_12__solution_view_component_solution_view_component_component__["a" /* SolutionViewComponentComponent */] },
    { path: 'editSolutions/:id', component: __WEBPACK_IMPORTED_MODULE_14__edit_solution_edit_solution_component__["a" /* EditSolutionComponent */] },
    { path: 'editVendors/:id', component: __WEBPACK_IMPORTED_MODULE_18__edit_vendor_edit_vendor_component__["a" /* EditVendorComponent */] },
    { path: 'policyView', component: __WEBPACK_IMPORTED_MODULE_10__policy_view_component_policy_view_component_component__["a" /* PolicyViewComponentComponent */], children: [
            { path: 'policyDetails', component: __WEBPACK_IMPORTED_MODULE_13__policy_view_component_policy_view_forms_component_policy_details_policy_details_component__["a" /* PolicyDetailsComponent */] },
            { path: 'review', component: __WEBPACK_IMPORTED_MODULE_15__policy_view_component_policy_view_forms_component_review_review_component__["a" /* ReviewComponent */] },
            { path: 'documents', component: __WEBPACK_IMPORTED_MODULE_16__policy_view_component_policy_view_forms_component_documents_documents_component__["a" /* DocumentsComponent */] },
            { path: 'applications', component: __WEBPACK_IMPORTED_MODULE_17__policy_view_component_policy_view_forms_component_applications_applications_component__["a" /* ApplicationsComponent */] }
        ] },
];
var LocalityComponentRoutingModule = (function () {
    function LocalityComponentRoutingModule() {
    }
    return LocalityComponentRoutingModule;
}());
LocalityComponentRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot(appRoutes)],
        exports: [__WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */]]
    })
], LocalityComponentRoutingModule);

//# sourceMappingURL=app.routing.js.map

/***/ }),

/***/ "../../../../../src/app/convertDate.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FilterPipe = (function () {
    function FilterPipe() {
    }
    FilterPipe.prototype.transform = function (date) {
        if (date === null) {
            return '';
        }
        else {
            var d = new Date(date * 1000);
            return d;
        }
    };
    return FilterPipe;
}());
FilterPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
        name: 'filter'
    })
], FilterPipe);

//# sourceMappingURL=convertDate.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/core/angular-redux-request.options.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AngularReduxRequestOptions; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var AngularReduxRequestOptions = (function (_super) {
    __extends(AngularReduxRequestOptions, _super);
    function AngularReduxRequestOptions(angularReduxOptions) {
        var _this = _super.call(this) || this;
        _this.headers.append('content-type', 'application/json');
        _this.headers.append('Access-Control-Allow-Origin', '*');
        return _this;
    }
    return AngularReduxRequestOptions;
}(__WEBPACK_IMPORTED_MODULE_0__angular_http__["f" /* BaseRequestOptions */]));

//# sourceMappingURL=angular-redux-request.options.js.map

/***/ }),

/***/ "../../../../../src/app/core/core.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__http_service__ = __webpack_require__("../../../../../src/app/core/http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__http_service_factory__ = __webpack_require__("../../../../../src/app/core/http-service.factory.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoreModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



//import { MaterialModule } from '@angular/material';


var CoreModule = (function () {
    function CoreModule() {
    }
    return CoreModule;
}());
CoreModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"] //,
            // MaterialModule
        ],
        exports: [],
        declarations: [],
        providers: [
            {
                provide: __WEBPACK_IMPORTED_MODULE_3__http_service__["a" /* HttpService */],
                useFactory: __WEBPACK_IMPORTED_MODULE_4__http_service_factory__["a" /* httpServiceFactory */],
                deps: [__WEBPACK_IMPORTED_MODULE_2__angular_http__["e" /* XHRBackend */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]]
            }
        ]
    })
], CoreModule);

//# sourceMappingURL=core.module.js.map

/***/ }),

/***/ "../../../../../src/app/core/http-service.factory.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core_http_service__ = __webpack_require__("../../../../../src/app/core/http.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return httpServiceFactory; });

function httpServiceFactory(backend, options) {
    return new __WEBPACK_IMPORTED_MODULE_0__core_http_service__["a" /* HttpService */](backend, options);
}

//# sourceMappingURL=http-service.factory.js.map

/***/ }),

/***/ "../../../../../src/app/core/http.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_redux_request_options__ = __webpack_require__("../../../../../src/app/core/angular-redux-request.options.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpService; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HttpService = (function (_super) {
    __extends(HttpService, _super);
    function HttpService(backend, defaultOptions) {
        return _super.call(this, backend, defaultOptions) || this;
    }
    HttpService.prototype.delete = function (url, options) {
        var _this = this;
        //        this.showLoader();
        return _super.prototype.delete.call(this, url, this.requestOptions(options))
            .catch(this.onCatch)
            .do(function (res) {
            _this.onSuccess(res);
        }, function (error) {
            _this.onError(error);
        })
            .finally(function () {
            //                this.onEnd();
        });
    };
    HttpService.prototype.get = function (url, options) {
        //        this.showLoader();
        var _this = this;
        return _super.prototype.get.call(this, url, this.requestOptions(options))
            .catch(this.onCatch)
            .do(function (res) {
            _this.onSuccess(res);
        }, function (error) {
            _this.onError(error);
        })
            .finally(function () {
            //                this.onEnd();
        });
    };
    HttpService.prototype.post = function (url, postData, options) {
        var _this = this;
        //        this.showLoader();
        // let md = JSON.stringify(postData);
        // var objectToSend = JSON.stringify(postData);
        return _super.prototype.post.call(this, url, this.formatPostData(postData), this.requestOptions(options))
            .catch(this.onCatch)
            .do(function (res) {
            _this.onSuccess(res);
        }, function (error) {
            _this.onError(error);
        })
            .finally(function () {
            //                this.onEnd();
        });
    };
    HttpService.prototype.put = function (url, postData, options) {
        var _this = this;
        //        this.showLoader();
        return _super.prototype.put.call(this, url, this.formatPostData(postData), this.requestOptions(options))
            .catch(this.onCatch)
            .do(function (res) {
            _this.onSuccess(res);
        }, function (error) {
            _this.onError(error);
        })
            .finally(function () {
            //                this.onEnd();
        });
    };
    HttpService.prototype.requestOptions = function (options) {
        if (!options) {
            options = new __WEBPACK_IMPORTED_MODULE_4__angular_redux_request_options__["a" /* AngularReduxRequestOptions */]();
        }
        if (!options.headers) {
            options.headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* Headers */]();
        }
        // options.headers.append('Authorization', this.getToken());
        return options;
    };
    HttpService.prototype.formatPostData = function (postData) {
        return JSON.stringify(postData);
    };
    HttpService.prototype.onCatch = function (error, caught) {
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].throw(error);
    };
    HttpService.prototype.onSuccess = function (res) {
        //console.log('Request successful');
    };
    HttpService.prototype.onError = function (res) {
        //  console.log('Error, status code: ' + res.status);
    };
    return HttpService;
}(__WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */]));
HttpService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_http__["e" /* XHRBackend */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_http__["e" /* XHRBackend */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__angular_redux_request_options__["a" /* AngularReduxRequestOptions */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_redux_request_options__["a" /* AngularReduxRequestOptions */]) === "function" && _b || Object])
], HttpService);

var _a, _b;
//# sourceMappingURL=http.service.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".p-4{\n    background-color: #2C3E50;\n    border-top: 1px solid #ECF0F1;\n}\n\nnav{\n    background-color: #3A539B;\n    text-align: center;\n    position: relative;\n}\n\n.heading{\n    color: white;\n    text-align: center;\n}\n\nimg{\n    width: 10%;\n}\n\n.login{\n\tcolor: white;\n\tfont-size: 10px;\n\tmargin-top: 15px;\n\tmargin-right: 8px;\n}\n\nh1{\n    color: white;\n}\n\n.dashboard{\n    width: 100%;\n    margin-top: 50px;\n    margin-left: 5%;\n    /*position: absolute;\n    top: 25%;\n    left: 5%;*/\n}\n\n.card{\n    float: left;\n    margin-left: 5px;\n    margin-bottom: 15px;\n}\n\n.card-heading{\n    background-color: #3A539B;\n    border-radius: 6%;\n}\n\n.card-title{\n    padding: 4%;\n    color: white;\n}\n\n.card-body{\n    background-color: #ECF0F1;\n}\n\n.card-link{\n    color: black;\n}\n\n.card-link:hover{\n    color: white;\n    background-color: #00B16A;\n    padding: 3%;\n}\n\n.view-edit{\n    margin-left: 20px;\n}\n\n/*.second-row{\n    margin-top: 20px;\n}\n\n.third-row{\n    \n}*/", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"pos-f-t\">\n          <nav class=\"navbar\">\n            <img src=\"assets/img/logo.png\">\n            <h2 class=\"heading\">Application and Audit Manager</h2>\n            <div class=\"login\"><p class=\"user\">Sunny Singh<fa class=\"down-icon\" [name]=\"'chevron-down'\"></fa></p></div>\n          </nav>\n    </div>\n    <div class=\"dashboard\">\n         <div class=\"first-row\">\n        <div class=\"card\" style=\"width: 18rem;\">\n  <div class=\"card-body\">\n    <div class=\"card-heading\"><h5 class=\"card-title\">Locality</h5>\n      </div>\n    <hr />\n    <!--<h6 class=\"card-subtitle mb-2 text-muted\">Card subtitle</h6>-->\n    <p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\n    <a routerLink=\"/locality/map\" class=\"card-link\"><fa [name]=\"'plus-circle'\"></fa></a>\n    <a routerLink=\"/localityView\" class=\"view-edit card-link\"><fa [name]=\"'eye'\"></fa> / <fa [name]=\"'edit'\"></fa></a>\n  </div>\n</div>\n    <div class=\"card\" style=\"width: 18rem;\">\n  <div class=\"card-body\">\n    <div class=\"card-heading\"><h5 class=\"card-title\">Vendors</h5>\n      </div>\n    <hr />\n    <!--<h6 class=\"card-subtitle mb-2 text-muted\">Card subtitle</h6>-->\n    <p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\n    <a routerLink=\"/vendors\" class=\"card-link\"><fa [name]=\"'plus-circle'\"></fa></a>\n    <a [routerLink]=\"['/vendorsView']\" class=\"view-edit card-link\"><fa [name]=\"'eye'\"></fa>/ <fa [name]=\"'edit'\"></fa></a>\n  </div>\n</div>\n    <div class=\"card\" style=\"width: 18rem;\">\n  <div class=\"card-body\">\n    <div class=\"card-heading\"><h5 class=\"card-title\">Solutions</h5>\n      </div>\n    <hr />\n    <!--<h6 class=\"card-subtitle mb-2 text-muted\">Card subtitle</h6>-->\n    <p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\n    <a routerLink=\"/solutions\" class=\"card-link\"><fa [name]=\"'plus-circle'\"></fa></a>\n    <!-- <a routerLink=\"/solutionsView\" class=\"card-link\"><fa [name]=\"'plus-circle'\"></fa></a> -->\n    <a routerLink=\"/solutionsView\" class=\"view-edit card-link\"><fa [name]=\"'eye'\"></fa> / <fa [name]=\"'edit'\"></fa></a>\n  </div>\n</div>\n    <div class=\"card\" style=\"width: 18rem;\">\n  <div class=\"card-body\">\n    <div class=\"card-heading\"><h5 class=\"card-title\">Audit</h5>\n      </div>\n    <hr />\n    <!--<h6 class=\"card-subtitle mb-2 text-muted\">Card subtitle</h6>-->\n    <p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\n    <a href=\"#\" class=\"card-link\"><fa [name]=\"'plus-circle'\"></fa></a>\n    <a href=\"#\" class=\"view-edit card-link\"><fa [name]=\"'eye'\"></fa> / <fa [name]=\"'edit'\"></fa></a>\n  </div>\n</div>\n        </div>\n    <div class=\"second-row\">\n    <div class=\"card\" style=\"width: 18rem;\">\n  <div class=\"card-body\">\n    <div class=\"card-heading\"><h5 class=\"card-title\">Assessment</h5>\n      </div>\n    <hr />\n    <!--<h6 class=\"card-subtitle mb-2 text-muted\">Card subtitle</h6>-->\n    <p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\n    <a href=\"#\" class=\"card-link\"><fa [name]=\"'plus-circle'\"></fa></a>\n    <a href=\"#\" class=\"view-edit card-link\"><fa [name]=\"'eye'\"></fa> / <fa [name]=\"'edit'\"></fa></a>\n  </div>\n</div>\n    <div class=\"card\" style=\"width: 18rem;\">\n  <div class=\"card-body\">\n    <div class=\"card-heading\"><h5 class=\"card-title\">Reports</h5>\n      </div>\n    <hr />\n    <!--<h6 class=\"card-subtitle mb-2 text-muted\">Card subtitle</h6>-->\n    <p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\n    <a href=\"#\" class=\"card-link\"><fa [name]=\"'plus-circle'\"></fa></a>\n    <a href=\"#\" class=\"view-edit card-link\"><fa [name]=\"'eye'\"></fa> / <fa [name]=\"'edit'\"></fa></a>\n  </div>\n</div>\n    <div class=\"card\" style=\"width: 18rem;\">\n  <div class=\"card-body\">\n    <div class=\"card-heading\"><h5 class=\"card-title\">Dashboard</h5>\n      </div>\n    <hr />\n    <!--<h6 class=\"card-subtitle mb-2 text-muted\">Card subtitle</h6>-->\n    <p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\n    <a href=\"#\" class=\"card-link\"><fa [name]=\"'plus-circle'\"></fa></a>\n    <a href=\"#\" class=\"view-edit card-link\"><fa [name]=\"'eye'\"></fa> / <fa [name]=\"'edit'\"></fa></a>\n  </div>\n</div>\n    <div class=\"card\" style=\"width: 18rem;\">\n  <div class=\"card-body\">\n   <div class=\"card-heading\"><h5 class=\"card-title\">Systems</h5>\n      </div>\n    <hr />\n    <!--<h6 class=\"card-subtitle mb-2 text-muted\">Card subtitle</h6>-->\n    <p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\n    <a href=\"#\" class=\"card-link\"><fa [name]=\"'plus-circle'\"></fa></a>\n    <a href=\"#\" class=\"view-edit card-link\"><fa [name]=\"'eye'\"></fa> / <fa [name]=\"'edit'\"></fa></a>\n  </div>\n</div>\n</div>\n        <div class=\"third-row\">\n    <div class=\"card\" style=\"width: 18rem;\">\n  <div class=\"card-body\">\n    <div class=\"card-heading\"><h5 class=\"card-title\">Security Life Cycle</h5>\n      </div>\n    <hr />\n    <!--<h6 class=\"card-subtitle mb-2 text-muted\">Card subtitle</h6>-->\n    <p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\n    <a href=\"#\" class=\"card-link\"><fa [name]=\"'plus-circle'\"></fa></a>\n    <a href=\"#\" class=\"view-edit card-link\"><fa [name]=\"'eye'\"></fa> / <fa [name]=\"'edit'\"></fa></a>\n  </div>\n</div>\n    <div class=\"card\" style=\"width: 18rem;\">\n  <div class=\"card-body\">\n    <div class=\"card-heading\"><h5 class=\"card-title\">Compliance Check</h5>\n      </div>\n    <hr />\n    <!--<h6 class=\"card-subtitle mb-2 text-muted\">Card subtitle</h6>-->\n    <p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\n    <a href=\"#\" class=\"card-link\"><fa [name]=\"'plus-circle'\"></fa></a>\n    <a href=\"#\" class=\"view-edit card-link\"><fa [name]=\"'eye'\"></fa> / <fa [name]=\"'edit'\"></fa></a>\n  </div>\n</div>\n    <div class=\"card\" style=\"width: 18rem;\">\n  <div class=\"card-body\">\n    <div class=\"card-heading\"><h5 class=\"card-title\">Policies</h5>\n      </div>\n    <hr />\n    <!--<h6 class=\"card-subtitle mb-2 text-muted\">Card subtitle</h6>-->\n    <p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\n    <a routerLink=\"/policy\" class=\"card-link\"><fa [name]=\"'plus-circle'\"></fa></a>\n    <a routerLink=\"/policyView\" class=\"view-edit card-link\"><fa [name]=\"'eye'\"></fa> / <fa [name]=\"'edit'\"></fa></a>\n  </div>\n</div>\n    <div class=\"card\" style=\"width: 18rem;\">\n  <div class=\"card-body\">\n   <div class=\"card-heading\"><h5 class=\"card-title\">Systems</h5>\n      </div>\n    <hr />\n    <!--<h6 class=\"card-subtitle mb-2 text-muted\">Card subtitle</h6>-->\n    <p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\n    <a href=\"#\" class=\"card-link\"><fa [name]=\"'plus-circle'\"></fa></a>\n    <a href=\"#\" class=\"view-edit card-link\"><fa [name]=\"'eye'\"></fa> / <fa [name]=\"'edit'\"></fa></a>\n  </div>\n</div>\n        \n        </div>\n        \n        </div>    "

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DashboardComponent = (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-dashboard',
        template: __webpack_require__("../../../../../src/app/dashboard/dashboard.component.html"),
        styles: [__webpack_require__("../../../../../src/app/dashboard/dashboard.component.css")]
    }),
    __metadata("design:paramtypes", [])
], DashboardComponent);

//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ "../../../../../src/app/data_model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Solution; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SystemType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return HostingType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return LabVendors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return Vendor; });
/* unused harmony export Address */
/* unused harmony export VendorContact */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return CertDocDTO; });
/**
 * New typescript file
 */
var Solution = (function () {
    function Solution() {
        this.certDocDTOs = [];
    }
    return Solution;
}());

var SystemType = (function () {
    function SystemType() {
    }
    return SystemType;
}());

var HostingType = (function () {
    function HostingType() {
    }
    return HostingType;
}());

var LabVendors = (function () {
    function LabVendors() {
    }
    return LabVendors;
}());

var Vendor = (function () {
    function Vendor() {
    }
    return Vendor;
}());

var Address = (function () {
    function Address() {
    }
    return Address;
}());

var VendorContact = (function () {
    function VendorContact() {
    }
    return VendorContact;
}());

var CertDocDTO = (function () {
    function CertDocDTO() {
    }
    return CertDocDTO;
}());

//# sourceMappingURL=data_model.js.map

/***/ }),

/***/ "../../../../../src/app/data_modelPolicy.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PolicyGrp; });
/* unused harmony export Policy */
/* unused harmony export Documents */
var PolicyGrp = (function () {
    function PolicyGrp() {
    }
    return PolicyGrp;
}());

var Policy = (function () {
    function Policy() {
    }
    return Policy;
}());

var Documents = (function () {
    function Documents() {
    }
    return Documents;
}());

//# sourceMappingURL=data_modelPolicy.js.map

/***/ }),

/***/ "../../../../../src/app/data_model_locality.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Locality; });
var Locality = (function () {
    function Locality() {
    }
    return Locality;
}());

//# sourceMappingURL=data_model_locality.js.map

/***/ }),

/***/ "../../../../../src/app/edit-navigation/edit-navigation.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".navigate{\n    margin: 15px;\n    padding: 5px;\n}\n\n.sticky-top{\n\theight: 30px;\n\tborder-radius: 5px;\n}\n\n.form-options{\n    margin-right: 15px;\n    margin-top: -15px;\n    padding: 5px;\n}\n\n.home-back{\n\tfloat: left;\n}\n\n.save-edit{\n\tfloat: right;\n}\n.save-times{\n\tfloat: right;\n}\na{\n\ttext-decoration: none;\n}\n\n.icons{\n    vertical-align: middle;\n    font-size: 20px;\n    margin-top: -20px;\n    padding: 2px;\n    margin-left: 5px;\n}\n\n/*.left-icons{\n\tfloat: left;\n}\n\n.icons{\n\tdisplay: inline-block;\n}*/\n\n.home-icon{\n    color: #3A539B;\n}\n\n.home-icon:hover{\n\t\n}\n\n.edit-icon{\n    /*margin-left: 10px;*/\n    color: #3A539B;\n}\n\n.left-icon{\n    /*margin-left: 10px;*/\n    color: #3A539B;\n}\n\n.save-icon{\n    color: #3A539B;\n}\n\n.times-icon{\n\tcolor: #3A539B;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/edit-navigation/edit-navigation.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"navigate sticky-top\" [ngStyle]=\"{'backgroundColor': getColor(), 'opacity': getOpacity()}\">\n            <!-- <div class=\"home\">\n                <i class=\"fas fa-home home-icon icons\"></i>\n                < class=\"fas fa-arrow-left left-icon icons\"></i>\n            </div> -->\n            <div class=\"form-options\">\n                <div class=\"home-back\">\n                \t<a routerLink=\"/\"><fa class=\"left-icons home-icon icons\" data-toggle=\"tooltip\" data-placement=\"right\" title=\"Home\" data-animation=\"true\" data-delay=\"0\" [name]=\"'home'\"></fa></a>\n                \t<a href=\"javascript:void(0)\" (click)=\"backClicked()\"><fa class=\"left-icons left-icon icons\" data-toggle=\"tooltip\" data-placement=\"right\" title=\"Back\" data-animation=\"true\" data-delay=\"0\" [name]=\"'arrow-left'\"></fa></a>\n                </div>\n                <div class=\"save-edit\">\n                \t<fa class=\"edit-icon icons\"   data-toggle=\"tooltip\" data-placement=\"right\" title=\"Save\" data-animation=\"true\" data-delay=\"0\" [name]=\"'edit'\" (click)=\"editClick.emit(true)\"></fa>\n                </div>\n                <div class=\"save-times\">\n                \t<fa class=\"times-icon icons\"   data-toggle=\"tooltip\" data-placement=\"right\" title=\"Save\" data-animation=\"true\" data-delay=\"0\" [name]=\"'times'\" (click)=\"cancelClick.emit(true)\"></fa>\n                </div>\n                <div class=\"save-edit\">\n                \t<fa class=\"save-icon icons\" data-toggle=\"tooltip\" data-placement=\"right\" title=\"Save\" data-animation=\"true\" data-delay=\"0\" [name]=\"'save'\" (click)=\"submitClick.emit()\"></fa>\n                </div>\n                <!-- <fa class=\"edit-icon icons\" [name]=\"'edit'\"></fa> -->\n            </div>\n            \n          </div> \n       \n        \n        "

/***/ }),

/***/ "../../../../../src/app/edit-navigation/edit-navigation.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditNavigationComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EditNavigationComponent = (function () {
    function EditNavigationComponent(_location) {
        this._location = _location;
        this.editClick = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.cancelClick = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.submitClick = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    EditNavigationComponent.prototype.ngOnInit = function () {
    };
    EditNavigationComponent.prototype.onWindowScroll = function () {
        var number = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
        if (number > 100) {
            this.color = 'online';
            console.log('You are 100px from the top to bottom');
        }
        else {
            this.color = 'offline';
            console.log('You are 500px from the top to bottom');
        }
    };
    EditNavigationComponent.prototype.getColor = function () {
        return this.color === 'online' ? '#ffffff' : 'white';
    };
    EditNavigationComponent.prototype.getOpacity = function () {
        return this.color === 'online' ? 0.8 : 1;
    };
    EditNavigationComponent.prototype.backClicked = function () {
        this._location.back();
    };
    return EditNavigationComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], EditNavigationComponent.prototype, "editClick", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], EditNavigationComponent.prototype, "cancelClick", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], EditNavigationComponent.prototype, "submitClick", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('window:scroll', []),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], EditNavigationComponent.prototype, "onWindowScroll", null);
EditNavigationComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-edit-navigation',
        template: __webpack_require__("../../../../../src/app/edit-navigation/edit-navigation.component.html"),
        styles: [__webpack_require__("../../../../../src/app/edit-navigation/edit-navigation.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common__["Location"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common__["Location"]) === "function" && _a || Object])
], EditNavigationComponent);

var _a;
//# sourceMappingURL=edit-navigation.component.js.map

/***/ }),

/***/ "../../../../../src/app/edit-solution/edit-solution-form/edit-solution-form.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "form{\n    padding: 20px;\n    border-radius: 10px;\n    border: 1px solid transparent;\n    margin: 20px;\n    background-color: #EEEEEE;\n    overflow: hidden;\n}\n\n.page-description{\n    text-align: center;\n    /*padding: 2%;*/\n    margin-top: 0px;\n    margin-bottom: 10px;\n}\n\n@keyframes slideInFromCenter {\n  0% {\n    transform: scale(0,1);\n  }\n  100% {\n    transform: scale(1,1);\n  }\n}\n\n.after-heading{\n\twidth: 10%;\n\tmargin: auto;\n\tbackground-color: #3A539B;\n\tanimation: 1s ease-out 0s 1 slideInFromCenter;\n\t/*border-radius: 10px solid #3A539B;*/\n\t/*margin-bottom: 15px;*/\n}\n\n.tip{\n    width: 100%;\n}\n\n.tip-text{\n    background-color: #F8FFAE;\n    padding: 5px;\n    border-radius: 10px;\n    margin-left: 5px;\n    color:  #3A539B;\n}\n\n.light-bulb{\n    margin-right: 3px;\n    padding: 2px;\n    margin-left: 3px;\n    color:  #3A539B;\n}\n\n.buttons{\n\tfloat: right;\n}\n\nh4{\n\tfont-size: 18px;\n\tfont-weight: 500;\n}\n\nlabel{\n\tfont-weight: 300;\n\tfont-size: 15px;\n}\n\n.asterisk{\n\tdisplay: inline;\n\tcolor: red;\n\tmargin-left: 2px;\n}\n\n.asterisk-inline{\n\tfloat: right;\n}\n\n/*select, option{\n\twidth: 120px;\n\theight: 35px;\n\tborder-radius: 4px;\n\tborder: 1px solid rgba(0,0,0,.15);\n\tmargin-left: 5px;\n}\n\n/*.label-form{\n\tmargin-right: 5px;\n}*/\n\n.model-solution-row{\n\tpadding: 1%;\n}\n\n.second-row{\n\tmargin-top: 1px;\n\tpadding: 1%;\n}\n\n.installation{\n\tpadding: 1%;\n}\n\n.hosting-notes{\n\tdisplay: block;\n\t/*margin-top: 20px;*/\n}\n\n.certification-test{\n\tmargin-top: 10px;\n\tpadding: 1%;\n}\n\n.attachments-div{\n\tmargin-top: 25px;\n}\n\n.btn{\n\tbackground-color: #3A539B;\n\tborder-color: #3A539B;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/edit-solution/edit-solution-form/edit-solution-form.component.html":
/***/ (function(module, exports) {

module.exports = "<form #form=\"ngForm\">\n\t\t\t<div class=\"page-description\"><h3>Solutions</h3>\n    \t\t<hr class=\"after-heading\" />\n    \t\t</div>\n        \t<div class=\"tip\"><p class=\"tip-text\"><fa class=\"light-bulb\" [name]=\"'lightbulb-o'\"></fa>Tip:</p></div>\n        \t<h4>General Information</h4>\n            <div class=\"model-solution-row form-row\">\n            \t<div class=\"model form-group col-md-6\">\n            <label class=\"label-form\" for=\"modelSolution\"><b>Model/Solution</b></label>\n              <input type=\"text\" class=\"asterisk form-control\" id=\"modelSolution\" ngModel name=\"modelSolution\" readonly>\n            \t</div>\n            \t<div class=\"version form-group col-md-6\">\n            \t\t<label class=\"label-form\" for=\"version\"><b>Version</b></label>\n\t\t              <input type=\"text\" class=\"asterisk form-control\" id=\"version\" ngModel name=\"version\" readonly>\n            \t</div>\n            \t<div class=\"form-group col-md-6\">\n            <label class=\"label-form\" for=\"systemType\"><b>System Type</b></label>\n              <select class=\"form-control\" id=\"systemType\" ngModel name=\"systemType\" value=\"solutionsInput.systemTypeDTO.name\" readonly>\n                <option selected>Choose...</option>\n                <option value=\"1\">EVS</option>\n                <option value=\"2\">Two</option>\n                <option value=\"3\">Three</option>\n              </select>\n            \t</div>\n            \t<div class=\"form-group col-md-6\">\n            \t\t<label class=\"label-form\" for=\"equipmentType\"><b>Equipment Type</b></label>\n\t\t              <select class=\"form-control\" id=\"equipmentType\" ngModel name=\"equipmentType\" value=\"solutionsInput.solutionTypeName\" readonly>\n\t\t                <option selected>Choose...</option>\n\t\t                <option value=\"1\">Optical/Digital Scan</option>\n\t\t                <option value=\"2\">Two</option>\n\t\t                <option value=\"3\">Three</option>\n\t\t              </select>\n            \t</div>\n            \t<div class=\"form-group col-md-6\">\n            \t\t<label class=\"label-form\" for=\"vendor\"><b>Vendor</b></label>\n\t\t              <select class=\"form-control\" id=\"vendor\" ngModel name=\"vendor\" value=\"solutionsInput.vendor.name\" readonly>\n\t\t                <option selected>Choose...</option>\n\t\t                <option value=\"1\">Dominion Voting</option>\n\t\t                <option value=\"2\">Two</option>\n\t\t                <option value=\"3\">Three</option>\n\t\t              </select>\n            \t\t\n            \t</div>\n            </div>\n        \t<!-- <div class=\"second-row form-row\">\n            \t<div class=\"form-group col-md-6\">\n            <label class=\"label-form\" for=\"systemType\"><b>System Type</b></label><div class=\"asterisk\">*</div>\n              <select class=\"form-control\" id=\"systemType\" required>\n                <option selected>Choose...</option>\n                <option value=\"1\">EVS</option>\n                <option value=\"2\">Two</option>\n                <option value=\"3\">Three</option>\n              </select>\n            \t</div>\n            \t<div class=\"form-group col-md-6\">\n            \t\t<label class=\"label-form\" for=\"equipmentType\"><b>Equipment Type</b></label><div class=\"asterisk\">*</div>\n\t\t              <select class=\"form-control\" id=\"equipmentType\" required>\n\t\t                <option selected>Choose...</option>\n\t\t                <option value=\"1\">Optical/Digital Scan</option>\n\t\t                <option value=\"2\">Two</option>\n\t\t                <option value=\"3\">Three</option>\n\t\t              </select>\n            \t</div>\n            \t<div class=\"form-group col-md-6\">\n            \t\t<label class=\"label-form\" for=\"vendor\"><b>Vendor</b></label><div class=\"asterisk\">*</div>\n\t\t              <select class=\"form-control\" id=\"vendor\" required>\n\t\t                <option selected>Choose...</option>\n\t\t                <option value=\"1\">Dominion Voting</option>\n\t\t                <option value=\"2\">Two</option>\n\t\t                <option value=\"3\">Three</option>\n\t\t              </select>\n            \t\t\n            \t</div>\n            </div> -->\n            <hr />\n           <h4>Installation and Hosting</h4>\n            <div class=\"installation form-group col-md-6\">\n            <label for=\"hostingType\"><b>Hosting Type</b></label>\n            <select class=\"form-control\" id=\"hostingType\" ngModel name=\"hostingType\" readonly>\n\t\t                <option selected>Choose...</option>\n\t\t                <option value=\"1\">Not Applicable</option>\n\t\t                <option value=\"2\">Two</option>\n\t\t                <option value=\"3\">Three</option>\n\t\t              </select>\n            </div>\n            <div class=\"installation form-group\">\n            <label class=\"hosting-notes\" for=\"hostingNotes\"><b>Hosting Notes</b></label><!-- <div class=\"asterisk-inline asterisk\">*</div> -->\n            <textarea cols=\"156\" rows=\"7\" id=\"hostingNotes\" ngModel name=\"hostingNotes\" readonly></textarea>\n          </div>\n            <!-- <p><b>Hosting Notes</b></p>\n            <textarea cols=\"100\" rows=\"7\" id=\"hostingNotes\"></textarea> -->\n            <hr />\n            <h4>Certification Information</h4>\n            <div class=\"certification-test form-row\">\n            <div class=\"form-group col-md-6\">\n                <label for=\"approvedDate\"><b>DoEL Approved Date</b></label>\n                <my-date-picker name=\"myname\" readonly></my-date-picker> \n                <!-- <input type=\"date\" class=\"form-control\" id=\"approvedDate\"> -->\n            </div>\n            <div class=\"form-group col-md-6\">\n                <label for=\"dueDate\"><b>Renewal Due Date</b></label>\n                <my-date-picker name=\"myname\" readonly></my-date-picker> \n                <!-- <input type=\"date\" class=\"form-control\" id=\"dueDate\"> -->\n            </div>\n         </div>\n         <hr />\n          <h4>Voting System Test Laboratory - VSTL</h4>\n          <div class=\"certification-test form-group col-md-6\">\n            <label for=\"label-form labVendor\"><b>Lab Vendor</b></label>\n            <select class=\"form-control\" id=\"labVendor\" ngModel name=\"labVendor\" readonly>\n\t\t                <option selected>Choose...</option>\n\t\t                <option value=\"PROV&V\">PROV&V</option>\n\t\t                <option value=\"SLI\">SLI</option>\n\t\t                <option value=\"Wyle Laboratories/NTS\">Wyle Laboratories/NTS</option>\n\t\t              </select>\n          </div>\n          <div class=\"contact\">\n          \n          //solutionId\n          \t<div class=\"certification-test form-row\">\n            <div class=\"form-group col-md-6\">\n                <label for=\"firstName\"><b>First Name</b></label>\n                <input type=\"text\" class=\"asterisk form-control\" id=\"firstName\" ngModel name=\"firstName\" readonly>\n                <input type=\"hidden\" ngModel name=\"solutionId\">\n            </div>\n            <div class=\"form-group col-md-6\">\n                <label for=\"lastName\"><b>Last Name</b></label>\n                <input type=\"text\" class=\"asterisk form-control\" id=\"lastName\" ngModel name=\"lastName\" readonly>\n            </div>\n            <div class=\"form-group col-md-6\">\n                <label for=\"email\"><b>Email Id</b></label>\n                <input type=\"email\" class=\"asterisk form-control\" id=\"email\" ngModel name=\"email\" readonly>\n            </div>\n            <div class=\"form-group col-md-6\">\n                <label for=\"phone\"><b>Phone Number</b></label>\n                <input type=\"text\" class=\"asterisk form-control\" id=\"phone\" ngModel name=\"phone\" readonly>\n            </div>\n         </div>\n          <!-- <div class=\"certification-test form-row\">\n            <div class=\"form-group col-md-6\">\n                <label for=\"email\"><b>Email Id</b></label><div class=\"asterisk\">*</div>\n                <input type=\"email\" class=\"asterisk form-control\" id=\"email\" required>\n            </div>\n            <div class=\"form-group col-md-6\">\n                <label for=\"phone\"><b>Phone Number</b></label><div class=\"asterisk\">*</div>\n                <input type=\"text\" class=\"asterisk form-control\" id=\"phone\" required>\n            </div>\n         </div> -->\n          </div>\n         <hr />\n         <h4>Attachments</h4>\n        <!--  <div class=\"attachments-div\"><p class=\"attachments\"><b>Attachments</b> --><!-- </p>\n            \t<input type=\"file\">\t\n            </div> -->\n         <div class=\"buttons\">\n         \t<button type=\"cancel\" class=\"cancel btn btn-primary\">Cancel</button>\n        \t<button type=\"submit\" class=\"submit btn btn-primary\" [disabled]=\"!form.valid\">Submit</button>\n        </div>\n</form>"

/***/ }),

/***/ "../../../../../src/app/edit-solution/edit-solution-form/edit-solution-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__apiservice_service__ = __webpack_require__("../../../../../src/app/apiservice.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditSolutionFormComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EditSolutionFormComponent = (function () {
    /*public solutionInput:any;*/
    function EditSolutionFormComponent(_apiservice) {
        this._apiservice = _apiservice;
    }
    EditSolutionFormComponent.prototype.ngOnInit = function () {
        // this.getSolution();
    };
    return EditSolutionFormComponent;
}());
EditSolutionFormComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'app-edit-solution-form',
        template: __webpack_require__("../../../../../src/app/edit-solution/edit-solution-form/edit-solution-form.component.html"),
        styles: [__webpack_require__("../../../../../src/app/edit-solution/edit-solution-form/edit-solution-form.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_0__apiservice_service__["a" /* ApiserviceService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__apiservice_service__["a" /* ApiserviceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__apiservice_service__["a" /* ApiserviceService */]) === "function" && _a || Object])
], EditSolutionFormComponent);

var _a;
//# sourceMappingURL=edit-solution-form.component.js.map

/***/ }),

/***/ "../../../../../src/app/edit-solution/edit-solution.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "form{\n    padding: 20px;\n    border-radius: 10px;\n    border: 1px solid transparent;\n    margin: 20px;\n    background-color: #EEEEEE;\n    overflow: hidden;\n}\n\n.form-control:disabled, .form-control[readonly] {\n    background-color: #ffffff;\n}\n\n\n.page-description{\n    text-align: center;\n    /*padding: 2%;*/\n    margin-top: 0px;\n    margin-bottom: 10px;\n}\n\n@keyframes slideInFromCenter {\n  0% {\n    transform: scale(0,1);\n  }\n  100% {\n    transform: scale(1,1);\n  }\n}\n\n.after-heading{\n\twidth: 10%;\n\tmargin: auto;\n\tbackground-color: #3A539B;\n\tanimation: 1s ease-out 0s 1 slideInFromCenter;\n\t/*border-radius: 10px solid #3A539B;*/\n\t/*margin-bottom: 15px;*/\n}\n\n.tip{\n    width: 100%;\n}\n\n.tip-text{\n    background-color: #F8FFAE;\n    padding: 5px;\n    border-radius: 10px;\n    margin-left: 5px;\n    color:  #3A539B;\n}\n\n.light-bulb{\n    margin-right: 3px;\n    padding: 2px;\n    margin-left: 3px;\n    color:  #3A539B;\n}\n\n.buttons{\n\tfloat: right;\n}\n\nh4{\n\tfont-size: 18px;\n\tfont-weight: 500;\n}\n\nlabel{\n\tfont-weight: 300;\n\tfont-size: 15px;\n}\n\n.asterisk{\n\tdisplay: inline;\n\tcolor: red;\n\tmargin-left: 2px;\n}\n\n.asterisk-inline{\n\tfloat: right;\n}\n\n/*select, option{\n\twidth: 120px;\n\theight: 35px;\n\tborder-radius: 4px;\n\tborder: 1px solid rgba(0,0,0,.15);\n\tmargin-left: 5px;\n}\n\n/*.label-form{\n\tmargin-right: 5px;\n}*/\n\ninput[readonly], select[readonly] {\n\tbackground-color: #ffffff;\n\t}\n\t\n\n.model-solution-row{\n\tpadding: 1%;\n}\n\n.second-row{\n\tmargin-top: 1px;\n\tpadding: 1%;\n}\n\n.installation{\n\tpadding: 1%;\n}\n\n.hosting-notes{\n\tdisplay: block;\n\t/*margin-top: 20px;*/\n}\n\n.certification-test{\n\tmargin-top: 10px;\n\tpadding: 1%;\n}\n\n.attachments-div{\n\tmargin-top: 25px;\n}\n\n.btn{\n\tbackground-color: #3A539B;\n\tborder-color: #3A539B;\n}\n\n.navigate{\n    margin: 15px;\n    padding: 5px;\n}\n\n.sticky-top{\n\theight: 30px;\n\tborder-radius: 5px;\n}\n\n.form-options{\n    margin-right: 15px;\n    margin-top: -15px;\n    padding: 5px;\n}\n\n.home-back{\n\tfloat: left;\n}\n\n.save-edit{\n\tfloat: right;\n}\n\na{\n\ttext-decoration: none;\n}\n\n.icons{\n    vertical-align: middle;\n    font-size: 20px;\n    margin-top: -20px;\n    padding: 2px;\n    margin-left: 5px;\n}\n\n/*.left-icons{\n\tfloat: left;\n}\n\n.icons{\n\tdisplay: inline-block;\n}*/\n\n.home-icon{\n    color: #3A539B;\n}\n\n.home-icon:hover{\n\t\n}\n\n.edit-icon{\n    /*margin-left: 10px;*/\n    color: #3A539B;\n}\n\n.left-icon{\n    /*margin-left: 10px;*/\n    color: #3A539B;\n}\n\n.save-icon{\n    color: #3A539B;\n}\n\n.download-icon{\n\t color: #3A539B;\n}\n\ntable {\n  display: table;\n\n}\n\n.modal-header{\n\tbackground-color: #3A539B;\n\tcolor: #ffffff;\n}\n\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/edit-solution/edit-solution.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navigation-component></app-navigation-component>\n<!-- <app-edit-navigation></app-edit-navigation>\n<button type=\"cancel\" class=\"cancel btn btn-primary\" (click)=\"editorGroup()\">Cancel</button> -->\n<!-- <app-edit-solution-form></app-edit-solution-form> -->\n<div class=\"navigate sticky-top\" [ngStyle]=\"{'backgroundColor': getColor(), 'opacity': getOpacity()}\">\n            <!-- <div class=\"home\">\n                <i class=\"fas fa-home home-icon icons\"></i>\n                < class=\"fas fa-arrow-left left-icon icons\"></i>\n            </div> -->\n            <div class=\"form-options\">\n                <div class=\"home-back\">\n                \t<a routerLink=\"/\"><fa class=\"left-icons home-icon icons\" data-toggle=\"tooltip\" data-placement=\"right\" title=\"Home\" data-animation=\"true\" data-delay=\"0\" [name]=\"'home'\"></fa></a>\n                \t<a href=\"javascript:void(0)\" (click)=\"backClicked()\"><fa class=\"left-icons left-icon icons\" data-toggle=\"tooltip\" data-placement=\"right\" title=\"Back\" data-animation=\"true\" data-delay=\"0\" [name]=\"'arrow-left'\"></fa></a>\n                </div>\n                <div class=\"save-edit\">\n                \t<fa class=\"edit-icon icons\" data-toggle=\"tooltip\" data-placement=\"right\" title=\"Save\" data-animation=\"true\" data-delay=\"0\"  (click)=\"editorGroup()\" [name]=\"'edit'\"></fa>\n                </div>\n                <!-- <fa class=\"edit-icon icons\" [name]=\"'edit'\"></fa> -->\n            </div>\n        </div>\n<ng-template #content let-c=\"close\" let-d=\"dismiss\">\n  <div class=\"modal-header\">\n    <h4 class=\"modal-title\" id=\"modal-basic-title\">Success</h4>\n    <!-- <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button> -->\n  </div>\n  <div class=\"modal-body\">\n    <p>Solution Updated</p>\n  </div>\n  <div class=\"modal-footer\">\n    <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"c('Save click')\">Close</button>\n  </div>\n</ng-template>\n<form  (ngSubmit)=\"createSolution()\" enctype=\"multipart/form-data\" #editForm=\"ngForm\">\n\t\t\t<div class=\"page-description\"><h3>Solutions</h3>\n    \t\t<hr class=\"after-heading\" />\n    \t\t</div>\n        \t<div class=\"tip\"><p class=\"tip-text\"><fa class=\"light-bulb\"></fa>Tip:</p></div>\n        \t<h4>General Information</h4>\n            \t<div class=\"model-solution-row form-row\">\n            \t<div class=\"model form-group col-md-6\">\n            <label class=\"label-form\" for=\"modelSolution\"><b>Model/Solution</b></label>\n              <input type=\"text\" class=\"form-control\" id=\"modelSolution\" ngModel name = \"modelSolution\" [(ngModel)] = \"solution.name\">\n            \t</div>\n            \t<div class=\"version form-group col-md-6\">\n            \t\t<label class=\"label-form\" for=\"version\"><b>Version</b></label>\n\t\t              <input type=\"text\" class=\"form-control\" id=\"version\" ngModel name = \"version\" [(ngModel)] = \"solution.versionNumber\">\n\t\t              \n            \t</div>\n            \t<div class=\"form-group col-md-6\">\n            \t<label class=\"label-form\" for=\"systemType\"><b>System Type</b></label><div class=\"asterisk\">*</div>\n              \t<input type=\"text\" class=\"form-control\" id=\"systemType\" *ngIf=\"editSolution.disabled\" ngModel name = \"systemType\" [(ngModel)] = \"solution.systemTypeDTO.name\" [name]=\"'system_name'\">\n              \t<select class=\"form-control\" id=\"systemType\" ngModel name = \"systemType\" *ngIf=\"!editSolution.disabled\" \n              \t[(ngModel)]=\"solution.systemTypeDTO.systemTypeId\" (change)=\"solution.systemTypeDTO.systemTypeId = $event.target.value\" required>\n\t\t           \n\t\t           <option *ngFor=\"let systemType of systemTypeDTO\" value=\"{{ systemType.systemTypeId }}\">\n\t\t                {{ systemType.name }} \n\t\t                </option> \n\t\t                </select>\n            \t</div>\n            \t<div class=\"form-group col-md-6\">\n            \t\t<label class=\"label-form\" for=\"equipmentType\"><b>Equipment Type</b></label><div class=\"asterisk\">*</div>\n\t\t              <input type=\"text\" class=\"form-control\" id=\"equipmentType\" ngModel name = \"equipmentType\" *ngIf=\"editSolution.disabled\" [(ngModel)] = \"solution.solutionTypeName\" [name] = \"'solution_type'\"> \n\t\t              <select class=\"form-control\" id=\"equipmentType\" ngModel name = \"equipmentType\" *ngIf=\"!editSolution.disabled\"\n\t\t               [(ngModel)] = \"solution.solutionType\" (change)=\"solution.solutionType = $event.target.value\" required>\n\t\t               <option *ngFor=\"let equipmentType of solutionType\" value=\"{{ equipmentType.solutionTypeId }}\">\n\t\t               \t  {{ equipmentType.typeName }}\n\t\t               </option>\n\t\t               <!--  <option *ngFor=\"let sol of solution.solutionTypeName\" value=\"{{solution.solutionType}}\">\n\t\t                \t{{ sol }}\n\t\t                </option> -->\n\t\t              </select>\n            \t</div>\n            \t<div class=\"form-group col-md-6\">\n            \t\t<label class=\"label-form\" for=\"vendor\"><b>Vendor</b></label><div class=\"asterisk\">*</div>\n\t\t              <input type=\"text\" class=\"form-control\" id=\"vendor\" ngModel name = \"vendor\" *ngIf=\"editSolution.disabled\" [(ngModel)] = \"solution.vendor.name\" [name] = \"'vendor_details'\">\n\t\t              <select class=\"form-control\" id=\"vendor\" ngModel name = \"vendor\" *ngIf=\"!editSolution.disabled\" \n\t\t              [(ngModel)]=\"solution.vendorId\" (change)=\"solution.vendorId = $event.target.value\" required>\n\t\t           <option *ngFor=\"let vendor of vendorDTO\" value=\"{{ vendor.vendorId }}\">\n\t\t                {{ vendor.name }}\n\n\t\t                </option>\n\t\t                </select>\n            \t</div>\n            \t</div>\n             <!-- <div class=\"second-row form-row\"> \n     \t\t<div class=\"form-group col-md-6\" formGroupName=\"systemType\"> \n             \t<label class=\"label-form\" for=\"systemType\"><b>System Type</b></label><div class=\"asterisk\">*</div> \n               \t<input type=\"text\" class=\"form-control\" id=\"systemType\" *ngIf=\"editSolution.disabled\">\n               \t<select class=\"form-control\" id=\"systemType\" name=\"systemType\" *ngIf=\"!editSolution.disabled\"  required> \n \t\t          <option>Choose</option> \n \t\t           <option *ngFor=\"let systemType of systemTypeDTO\"> \n \t\t                {{ systemType.name }} \n \t\t                </option>  \n \t\t                </select> \n             \t</div> \n            \t</div>\n            \t -->\n            \t<!-- <div class=\"form-group col-md-6\">\n            \t\t<label class=\"label-form\" for=\"equipmentType\"><b>Equipment Type</b></label><div class=\"asterisk\">*</div>\n\t\t              <input type=\"text\" class=\"form-control\" id=\"equipmentType\" *ngIf=\"editSolution.disabled\" formControlName=\"solutionTypeName\"> \n\t\t              <select class=\"form-control\" id=\"equipmentType\" name=\"equipmentType\" *ngIf=\"!editSolution.disabled\" formControlName=\"solutionTypeName\" required>\n\t\t              \t<option [(ngModel)]=\"solutionTypeName\" selected></option>\n\t\t                <option *ngFor=\"let solution of solutionType\" [ngValue]=\"solution.solutionId\">\n\t\t               \n\t\t                {{ solution.typeName }}\n\t\t              \n\t\t                \n\t\t                </option>\n\t\t                <option>{{ solution.typeName }}</option>\n\t\t                <option>{{ solution.typeName }}</option>\n\t\t                <option>{{ solution.typeName }}</option>\n\t\t                <option>{{ solution.typeName }}</option>\n\t\t              </select>\n            \t</div>\n            \t\t<div class=\"form-group col-md-6\" formGroupName=\"vendor\">\n            \t\t<label class=\"label-form\" for=\"vendor\"><b>Vendor</b></label><div class=\"asterisk\">*</div>\n\t\t              <input type=\"text\" class=\"form-control\" id=\"vendor\" *ngIf=\"editSolution.disabled\" formControlName=\"name\">\n\t\t              <select class=\"form-control\" id=\"vendor\" name=\"vendor\" *ngIf=\"!editSolution.disabled\" [(ngModel)]=\"vendorId\" required>\n\t\t           <option>Choose</option>\n\t\t           <option *ngFor=\"let vendor of vendorDTO\" [ngValue]=\"vendor.id\">\n\t\t                {{ vendor.name }}\n\n\t\t                </option>\n\t\t                </select>\n            \t</div>\n            </div>\n            <hr /> -->\n           <div>\n           \t<h4>Installation and Hosting</h4>\n            \t <div class=\"installation form-group col-md-6\">\n\t            <label for=\"hostingType\"><b>Hosting Type</b></label>\n\t            <input type=\"text\" class=\"form-control\" id=\"hostingType\" ngModel name = \"hostingType\" *ngIf=\"editSolution.disabled\" [(ngModel)] = \"solution.hostingTypeDTO.name\" [name] = \"'hosting_name'\">\n\t             <select class=\"form-control\" id=\"hostingType\" ngModel name = \"hostingType\" *ngIf=\"!editSolution.disabled\"\n\t             \t[(ngModel)] = \"solution.hostingTypeDTO.hostingTypeId\" (change) = \"solution.hostingTypeDTO.hostingTypeId = $event.target.value\" required>\n\t\t           <option *ngFor=\"let hostingType of hostingTypeDTO\" value = \"{{ hostingType.hostingTypeId }}\">\n\t\t                {{ hostingType.name }}\n\n\t\t                </option>\n\t\t                </select>\n            </div>\n            <div class=\"installation form-group\">\n            <label class=\"hosting-notes\" for=\"hostingNotes\"><b>Hosting Notes</b></label>\n            <textarea *ngIf=\"!editSolution.disabled\" cols=\"156\" rows=\"7\" id=\"hostingNotes\"></textarea>\n            <div class=\"attachments-div\"><p class=\"attachments\"><b>Attachments</b></p>\n            <div class=\"display-file\">\n            \t<ul\n\t\t\t\t\t\t\t\t*ngFor=\" let certDocDTO of solution.certDocDTOs \">\n\t\t\t\t\t\t\t\t<li\n\t\t\t\t\t\t\t\t\t*ngIf=\"certDocDTO.section == 'hosting'\">\n\t\t\t\t\t\t\t\t\t<a (click)=\"showFile(certDocDTO.certDocId)\" style=\"cursor:pointer;color:blue;\">{{certDocDTO.fileName}}</a></li>\n\t\t\t\t\t\t\t</ul>\n            </div>\n         \t<input type=\"file\" #fileInput *ngIf=\"!editSolution.disabled\" (change)=\"createCertDTO($event,'hosting')\">\n            </div>\n          </div>\n           </div>\n            <hr />\n           <div>\n            \t<h4>Certification Information</h4>\n            <div class=\"certification-test form-row\">\n            <div class=\"form-group col-md-6\">\n                <label for=\"approvedDate\"><b>DoEL Approved Date</b></label> \n                <my-date-picker name=\"myname\" [(ngModel)]=\"approveDate\" [selDate]=\"selectDate\"></my-date-picker>  \n                <!-- <ngb-datepicker #dp [(ngModel)]=\"certDate\" (navigate)=\"date = $event.next\" [name] = \"'cert_date'\"></ngb-datepicker> -->\n                \n            </div>\n            <div class=\"form-group col-md-6\">\n                <label for=\"dueDate\"><b>Renewal Due Date</b></label>\n                <my-date-picker name=\"myname\"></my-date-picker> \n            </div>\n         </div>\n            </div>\n         <hr /> \n          <div>\n          \t<h4>Voting System Test Laboratory - VSTL</h4>\n          \t<div class=\"certification-test form-group col-md-6\">\n            <label for=\"label-form labVendor\"><b>Lab Vendor</b></label>\n            <input type=\"text\" class=\"form-control\" id=\"labVendor\" ngModel name = \"labVendor\" *ngIf=\"editSolution.disabled\" [(ngModel)] = \"solution.labVendorsDTO.name\" [name] = \"'lab_name'\">\n            <select class=\"form-control\" id=\"labVendor\" ngModel name = \"labVendor\" *ngIf=\"!editSolution.disabled\"\n             [(ngModel)]=\"solution.labVendorsDTO.labVendorId\" (change) = \"solution.labVendorsDTO.labVendorId = $event.target.value\" required>\n\t\t           <option *ngFor=\"let lab of labVendorsDTO\" value = \"{{ lab.labVendorId }}\">\n\t\t                {{ lab.name }}\n\t\t                </option>\n\t\t                </select>\n          </div>\n         <div class=\"contact\">\n          \t<div class=\"certification-test form-row\">\n            <div class=\"form-group col-md-6\">\n                <label for=\"firstName\"><b>First Name</b></label>\n                <input type=\"text\" class=\"form-control\" id=\"firstName\" ngModel name = \"firstName\" [(ngModel)] = \"solution.labVendorsDTO.firstName\" [name] = \"'firstName'\" required>\n            </div>\n            <div class=\"form-group col-md-6\">\n                <label for=\"lastName\"><b>Last Name</b></label>\n                <input type=\"text\" class=\"form-control\" id=\"lastName\" ngModel name = \"lastName\" [(ngModel)] = \"solution.labVendorsDTO.lastName\" [name] = \"'lastName'\" required>\n            </div>\n            <div class=\"form-group col-md-6\">\n                <label for=\"email\"><b>Email Id</b></label>\n                <input type=\"email\" class=\"form-control\" id=\"email\" ngModel name = \"emailId\" [(ngModel)] = \"solution.labVendorsDTO.emailId\" [name] = \"'emailId'\" required>\n            </div>\n            <div class=\"form-group col-md-6\">\n                <label for=\"phone\"><b>Phone Number</b></label>\n                <input type=\"text\" class=\"form-control\" id=\"phone\" ngModel name = \"phoneNumber\" [(ngModel)] = \"solution.labVendorsDTO.phoneNumber\" [name] = \"'phoneNumber'\" required>\n            </div>\n         </div>\n          </div>\n          </div>\n         <hr />\n          <div>\n         \t<h4>Standard</h4>\n         <div class=\"installation form-group\">\n            <label class=\"hosting-notes\" for=\"standard\"><b>Notes</b></label>\n            <textarea *ngIf=\"!editSolution.disabled\" cols=\"156\" rows=\"7\" id=\"standard\"></textarea>\n            <div class=\"attachments-div\"><p class=\"attachments\"><b>Attachments</b></p>\n         <input type=\"file\" #fileInput *ngIf=\"!editSolution.disabled\" (change)=\"createCertDTO($event,'standard')\">\n         <div class=\"display-file\">\n            \t<ul\n\t\t\t\t\t\t\t\t*ngFor=\" let certDocDTO of solution.certDocDTOs \">\n\t\t\t\t\t\t\t\t<li\n\t\t\t\t\t\t\t\t\t*ngIf=\"certDocDTO.section == 'standard'\">\n\t\t\t\t\t\t\t\t\t<a (click)=\"showFile(certDocDTO.certDocId)\" style=\"cursor:pointer;color:blue;\">{{certDocDTO.fileName}}</a></li>\n\t\t\t\t\t\t\t</ul>\n            </div>\n            </div>\n          </div>\n            <hr />\n         <h4>Patches</h4>\n         <div class=\"installation form-group\">\n            <label class=\"hosting-notes\" for=\"patches\"><b>Patches</b></label>\n            <textarea *ngIf=\"!editSolution.disabled\" cols=\"156\" rows=\"7\" id=\"patches\"></textarea>\n            <div class=\"attachments-div\"><p class=\"attachments\"><b>Attachments</b></p>\n            \t<div class=\"display-file\">\n            \t<table>\n            \t\t<tbody>\n            \t\t\t<tr *ngFor=\"let certDocDTO of solution.certDocDTOs\">\n            \t\t\t\t<td *ngIf=\"certDocDTO.section == 'patches'\"><a (click)=\"showFile(certDocDTO.certDocId)\" style=\"cursor:pointer;color:blue;\">{{certDocDTO.fileName}}</a></td>\n            \t\t\t\t<td><fa *ngIf=\"!editSolution.disabled\" class=\"download-icon icons\" [name]=\"'trash'\"></fa></td>\n            \t\t\t</tr>\n            \t\t</tbody>\n            \t</table>\n            \t<!-- <ul\n\t\t\t\t\t\t\t\t*ngFor=\" let certDocDTO of solution.certDocDTOs \">\n\t\t\t\t\t\t\t\t<li\n\t\t\t\t\t\t\t\t\t*ngIf=\"certDocDTO.section == 'patches'\">\n\t\t\t\t\t\t\t\t\t<a href=\"#\">{{certDocDTO.fileName}}</a><fa *ngIf=\"!editSolution.disabled\" class=\"download-icon icons\" [name]=\"'trash'\"></fa></li>\n\t\t\t\t\t\t\t</ul> -->\n            </div>\n         \t\t<input type=\"file\" #fileInput *ngIf=\"!editSolution.disabled\" (change)=\"createCertDTO($event,'patches')\">\n         \t\t<!-- <input type=\"file\" #fileInput *ngIf=\"!editForm.form.disabled\" (change)=\"createCertDTO($event,'patches')\"> -->\n            </div>\n          </div>\n         </div>\n            <hr />\n         <div>\n         \t<h4>Notes</h4>\n         <div class=\"installation form-group\">\n         <div class=\"attachments-div\"><p class=\"attachments\"><b>Attachments</b></p>\n         <div class=\"display-file\">\n            \t<ul\n\t\t\t\t\t\t\t\t*ngFor=\" let certDocDTO of solution.certDocDTOs \">\n\t\t\t\t\t\t\t\t<li\n\t\t\t\t\t\t\t\t\t*ngIf=\"certDocDTO.section == 'solution'\">\n\t\t\t\t\t\t\t\t\t<a (click)=\"showFile(certDocDTO.certDocId)\" style=\"cursor:pointer;color:blue;\">{{certDocDTO.fileName}}</a></li>\n\t\t\t\t\t\t\t</ul>\n            </div>\n         <input type=\"file\" #fileInput *ngIf=\"!editSolution.disabled\" (change)=\"createCertDTO($event,'solution')\"> \n         <!-- <input type=\"file\" #fileInput *ngIf=\"!editForm.form.disabled\" (change)=\"createCertDTO($event,'solution')\"> -->\n            </div>\n          </div>\n         </div>\n            <hr />\n         <!-- <h4>Attachments</h4>\n         <div class=\"attachments-div\"><p class=\"attachments\"><b>Attachments</b></p>\n         <input type=\"file\" #fileInput *ngIf=\"!editSolution.disabled\">\n            </div>  -->\n         <div class=\"buttons\">\n         \t<!-- <button type=\"submit\" (click)=\"open(content)\" [disabled]=\"!editForm.valid\" *ngIf=\"!editForm.disabled\" class=\"submit btn btn-primary\">Submit</button> -->\n         \t<button type=\"submit\" (click)=\"open(content)\" class=\"cancel btn btn-primary\" *ngIf=\"!editSolution.disabled\">Submit</button>\n         \t<button type=\"cancel\" class=\"cancel btn btn-primary\" (click)=\"backClicked()\">Cancel</button>\n        </div>\n</form>"

/***/ }),

/***/ "../../../../../src/app/edit-solution/edit-solution.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__apiservice_service__ = __webpack_require__("../../../../../src/app/apiservice.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_model__ = __webpack_require__("../../../../../src/app/data_model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_config__ = __webpack_require__("../../../../../src/app/app.config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditSolutionComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var EditSolutionComponent = (function () {
    //  public systemTyp:any
    function EditSolutionComponent(activatedRoute, _apiservice, fb, http, _location, modalService) {
        this.activatedRoute = activatedRoute;
        this._apiservice = _apiservice;
        this.fb = fb;
        this.http = http;
        this._location = _location;
        this.modalService = modalService;
        this.files = [];
        this.selectDate = null;
        this.solution = new __WEBPACK_IMPORTED_MODULE_1__data_model__["a" /* Solution */]();
        this.solution.systemTypeDTO = new __WEBPACK_IMPORTED_MODULE_1__data_model__["b" /* SystemType */]();
        this.solution.hostingTypeDTO = new __WEBPACK_IMPORTED_MODULE_1__data_model__["c" /* HostingType */]();
        this.solution.labVendorsDTO = new __WEBPACK_IMPORTED_MODULE_1__data_model__["d" /* LabVendors */]();
        this.solution.vendor = new __WEBPACK_IMPORTED_MODULE_1__data_model__["e" /* Vendor */]();
        this.solution.certDocDTOs = [];
        this.files = [];
        this.editSolution = this.fb.group({
            solutionId: 0,
            name: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required],
            versionNumber: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required],
            solutionTypeName: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required],
            labVendorId: [0, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required],
            solutionType: 0,
            vendorId: 0,
            systemTypeTry: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required],
            systemTypeTry1: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required],
            systemType: this.fb.group({
                name: '',
                systemTypeId: 0
            }),
            hostingType: this.fb.group({
                name: '',
                hostingTypeId: '',
            }),
            labVendors: this.fb.group({
                name: '',
                firstName: '',
                lastName: '',
                middleName: '',
                suffix: '',
                emailId: '',
                streetName: '',
                city: '',
                state: '',
                zipcode: '',
                phoneNumber: '',
            }),
            vendor: this.fb.group({
                vendorId: 0,
                name: '',
                createdBy: '',
                vendorAddress: this.fb.group({
                    addressId: 0,
                    streetName: '',
                    city: '',
                    state: '',
                    zipcode: '',
                }),
                vendorContact: this.fb.group({
                    contactId: 0,
                    firstName: '',
                    lastName: '',
                    middleName: '',
                    suffix: '',
                    emailId: '',
                    phoneNumber: '',
                }),
            }),
        });
    }
    EditSolutionComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.solution.solutionId = params['id'];
            _this.editSolution.disable();
            //this.solutionsForm.form.disabled;
            //if (params['id'] != null)
            //{
            _this.onDisplaySolution();
            //}
            _this.getSolutionsOnload();
        });
    };
    EditSolutionComponent.prototype.createCertDTO = function (fileInput, section) {
        this.certDocDTO = new __WEBPACK_IMPORTED_MODULE_1__data_model__["f" /* CertDocDTO */]();
        this.certDocDTO.fileName = fileInput.target.files[0].name;
        this.certDocDTO.section = section;
        console.log(fileInput.target.files[0]);
        this.files.push(fileInput.target.files[0]);
        console.log(this.solution.certDocDTOs);
        this.solution.certDocDTOs.push(this.certDocDTO);
    };
    EditSolutionComponent.prototype.onDisplaySolution = function () {
        var _this = this;
        this._apiservice.getSolutionExtra(this.solution.solutionId)
            .subscribe(function (data) {
            console.log('data' + JSON.stringify(data));
            // this.editSolution.patchValue(data, {onlySelf: true});
            //        let systemType = JSON.stringify(data.systemTypeDTO.name);
            //        console.log(JSON.stringify(data.systemTypeDTO.name));
            //        console.log(systemType);
            _this.solution = data;
            _this.solution.systemTypeDTO = data.systemTypeDTO;
            _this.solution.hostingTypeDTO = data.hostingTypeDTO;
            _this.solution.labVendorsDTO = data.labVendorsDTO;
            _this.solution.vendor = data.vendor;
            _this.solution.certDocDTOs = data.certDocDTOs;
            var utcSeconds = _this.solution.certDt;
            var dt = new Date(0);
            console.log(dt.setUTCSeconds(utcSeconds));
            var d = new Date(_this.solution.certDt * 1000);
            _this.selectDate = {
                year: d.getFullYear(),
                month: d.getMonth() + 1,
                day: d.getDate()
            };
            console.log(_this.selectDate);
            if (_this.solution.certDocDTOs == null) {
                _this.solution.certDocDTOs = [];
            }
            console.log('data ' + data.systemTypeDTO.name);
            //this.editSolution.controls['name'].setValue(data.name);
            //this.editSolution.controls['versionNumber'].setValue(data.versionNumber);
            // this.editSolution.controls['systemType.systemTypeId'].setValue(data.systemType.systemTypeId);
            console.log(data.systemTypeDTO.systemTypeId);
            //           this.editSolution.controls['systemTypeTry1'].setValue(data.systemTypeDTO.name);
            //this.systemTyp =data.systemTypeDTO.name;
        });
    };
    EditSolutionComponent.prototype.getSolutionsOnload = function () {
        var _this = this;
        this._apiservice.getSolutionsOnload()
            .subscribe(function (data) {
            //console.log(data);
            _this.systemTypeDTO = data.systemTypeDTOs;
            //this.editSolution.controls['systemTypeTry1'].setValue(data.systemTypeDTO.name);
            //        this.systemTyp = data.systemTypeDTO.name;
            // console.log(this.systemTypeDTO);
            _this.solutionType = data.solutionTypeDTOs;
            _this.vendorDTO = data.vendorsDTOs;
            _this.hostingTypeDTO = data.hostingTypeDTOs;
            _this.labVendorsDTO = data.labVendorsDTOs;
        }, function (error) { return console.log(error); });
    };
    EditSolutionComponent.prototype.createSolution = function () {
        var url_update = __WEBPACK_IMPORTED_MODULE_2__app_config__["a" /* APP_CONFIG */].postSolution;
        var url_add = __WEBPACK_IMPORTED_MODULE_2__app_config__["a" /* APP_CONFIG */].addSolutions;
        //value['solutionId'] = this.solution.solutionId;
        //value['vendorId'] = this.vendorDTO.vendorId;
        //value['labVendorId'] = this.labVendorDTO.labVendorId;
        var formData = new FormData();
        var date = this.approveDate.epoc;
        this.solution.certDt = date;
        console.log(JSON.stringify(this.solution));
        formData.append('solution', JSON.stringify(this.solution));
        //formData.append('certDocs', this.files);
        //formData.append('certDocs',files)
        for (var i = 0; i < this.files.length; i++) {
            formData.append('certDocs', this.files[i]);
        }
        //    formData.append('file',files);
        console.log(formData.get('certDocs'));
        console.log(formData.get('solution'));
        //this._apiservice.updateSolution(formData)
        //if(this.solution.solutionId != null)
        //{
        this.http.post(url_update, formData).subscribe(function (data) {
            console.log(data);
        }, function (error) { return console.log(error); });
        //}
        /*else
        {
        //create
        this.http.post(url_add, formData).subscribe((data: any) => {
        console.log(data);
      }, error => console.log(error));
       console.log(this.solutionsForm);
      }*/
        console.log(this.solutionsForm);
    };
    EditSolutionComponent.prototype.backClicked = function () {
        this._location.back();
    };
    EditSolutionComponent.prototype.open = function (content) {
        this.modalService.open(content);
        //this.plus=false;
    };
    EditSolutionComponent.prototype.editorGroup = function () {
        /*if (this.solutionsForm.form.disabled) {
          this.solutionsForm.form.enabled;
        }
        else {
          this.solutionsForm.form.disabled;
        }*/
        if (this.editSolution.disabled) {
            this.editSolution.enable();
        }
        else {
            this.editSolution.disable();
        }
    };
    /*findId(value){
      this.solution.systemTypeDTO.systemTypeId = value;
    }*/
    EditSolutionComponent.prototype.showFile = function (id) {
        console.log(id);
        //    this._apiservice.getSolutionFile(id);
        window.open(__WEBPACK_IMPORTED_MODULE_2__app_config__["a" /* APP_CONFIG */].getSolutionFile + '?' + 'fileID' + '=' + id);
    };
    EditSolutionComponent.prototype.onWindowScroll = function () {
        var number = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
        if (number > 100) {
            this.color = 'online';
            console.log('You are 100px from the top to bottom');
        }
        else {
            this.color = 'offline';
            console.log('You are 500px from the top to bottom');
        }
    };
    EditSolutionComponent.prototype.getColor = function () {
        return this.color === 'online' ? '#ffffff' : 'white';
    };
    EditSolutionComponent.prototype.getOpacity = function () {
        return this.color === 'online' ? 0.8 : 1;
    };
    return EditSolutionComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["ViewChild"])('fileInput'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_core__["ElementRef"]) === "function" && _a || Object)
], EditSolutionComponent.prototype, "inputEl", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["ViewChild"])('editForm'),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* NgForm */]) === "function" && _b || Object)
], EditSolutionComponent.prototype, "solutionsForm", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["HostListener"])('window:scroll', []),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], EditSolutionComponent.prototype, "onWindowScroll", null);
EditSolutionComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({
        selector: 'app-edit-solution',
        template: __webpack_require__("../../../../../src/app/edit-solution/edit-solution.component.html"),
        styles: [__webpack_require__("../../../../../src/app/edit-solution/edit-solution.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_0__apiservice_service__["a" /* ApiserviceService */]]
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__apiservice_service__["a" /* ApiserviceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__apiservice_service__["a" /* ApiserviceService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__angular_forms__["e" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_forms__["e" /* FormBuilder */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_7__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__angular_http__["b" /* Http */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_6__angular_common__["Location"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__angular_common__["Location"]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_8__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */]) === "function" && _h || Object])
], EditSolutionComponent);

var _a, _b, _c, _d, _e, _f, _g, _h;
//# sourceMappingURL=edit-solution.component.js.map

/***/ }),

/***/ "../../../../../src/app/edit-vendor/edit-vendor.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".forms{\n    padding: 20px;\n    border-radius: 10px;\n    border: 1px solid transparent;\n    margin: 20px;\n    background-color: #EEEEEE;\n    overflow: hidden;\n}\n.modal-header{\n\tbackground-color:#3A539B !important;\n\tcolor:white;\n}\n\n\n.save-edit{\n\tfloat:right;\n}\n.navigate{\n    margin: 15px;\n    padding: 5px;\n}\n\n.sticky-top{\n\theight: 30px;\n\tborder-radius: 5px;\n}\n\n\n\n.home-back{\n\tfloat: left;\n}\n\n.save-edit{\n\tfloat: right;\n}\n\na{\n\ttext-decoration: none;\n}\n.home-icon{\n    color: #3A539B;\n}\n.left-icon{\n    /*margin-left: 10px;*/\n    color: #3A539B;\n}\n\n.icons{\n    vertical-align: middle;\n    font-size: 20px;\n    margin-top: -20px;\n    padding: 2px;\n    margin-left: 5px;\n}\n\n\n.page-description{\n    text-align: center;\n    margin-top: 0px;\n    margin-bottom: 10px;\n}\n\n\n@keyframes slideInFromCenter {\n  0% {\n    transform: scale(0,1);\n  }\n  100% {\n    transform: scale(1,1);\n  }\n}\n\n.after-heading{\n\twidth: 10%;\n\tmargin: auto;\n\tbackground-color: #3A539B;\n\tanimation: 1s ease-out 0s 1 slideInFromCenter;\n}\n\n.after-heading:hover{\n\ttransform: scale(1, 1);\n\ttransition: right 0.5s;\n}\n\n.tip{\n    width: 100%;\n}\n\n.tip-text{\n    background-color: #F8FFAE;\n    padding: 5px;\n    border-radius: 10px;\n    margin-left: 5px;\n    color:  #3A539B;\n}\n\n.light-bulb{\n    margin-right: 3px;\n    padding: 2px;\n    margin-left: 3px;\n    color:  #3A539B;\n}\n\n .buttons{\n\tfloat: right;\n}\n\n.asterisk{\n\tdisplay: inline;\n\tcolor: red;\n\tmargin-left: 2px;\n}\n.form-control:disabled, .form-control[readonly] {\n    background-color: #ffffff;\n   \n}\n\n.btn{\n\tmargin-left: 3px;\n\tbackground-color: #3A539B;\n\tborder-color: #3A539B;\n}\n\ninput[disable], select[disable] {\n\tbackground-color: #ffffff;\n\t}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/edit-vendor/edit-vendor.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navigation-component ></app-navigation-component>\n<ng-template #content let-c=\"close\" let-d=\"dismiss\">\n<div class=\"modal-header\">\n  <h4 class=\"modal-title\">Success</h4>\n  <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d()\">\n    <span aria-hidden=\"true\">&times;</span>\n  </button>\n</div>\n<div class=\"modal-body\">\n  <p>The record has been successfully updated{{name}}!</p>\n</div>\n<div class=\"modal-footer\">\n  <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"c()\">Close</button>\n</div>\n</ng-template>\n<app-edit-navigation (editClick)=\"editClicked($event)\" (cancelClick)=\"cancelButton()\" (submitClick)=\"createVendor(editVendorForm.value)\"></app-edit-navigation>\n<div class=\"form-div\" >\n    <form  class=\"forms\" [formGroup]=\"editVendorForm\" (ngSubmit)=\"createVendor(editVendorForm.value)\">\n        <div class=\"page-description\">\n            <h3>Vendors</h3>\n            <hr class=\"after-heading\" />\n        </div>\n        <div class=\"tip\">\n            <p class=\"tip-text\">\n                <fa class=\"light-bulb\" [name]=\"'lightbulb-o'\"></fa>Tip:</p>\n        </div>\n        <div class=\"form-row\">\n            <div class=\"form-group col-12\">\n                <label for=\"vendorName\"><b>Vendor Name</b></label>\n                <div class=\"asterisk\">*</div>\n                <input type=\"text\" class=\"form-control\" id=\"vendorName\" placeholder=\"Vendor Name\" formControlName=\"name\">\n            </div>\n        </div>\n        <hr />\n        <!-- <h3>Contact Information</h3> -->\n        <div formGroupName=\"vendorContact\">\n            <p><b>Contact Person</b></p>\n\n            <div class=\"form-row\">\n                <div class=\"form-group col-md-6\">\n                    <label for=\"firstName\">First Name</label>\n                    <div class=\"asterisk\">*</div>\n                    <input type=\"text\" class=\"form-control\" id=\"firstName\" placeholder=\"First Name\" formControlName=\"firstName\">\n                </div>\n                <div class=\"form-group col-md-6\">\n                    <label for=\"lastName\">Last Name</label>\n                    <div class=\"asterisk\">*</div>\n                    <input type=\"text\" class=\"form-control\" id=\"lastName\" placeholder=\"Last Name\" formControlName=\"lastName\">\n                </div>\n            </div>\n            <div class=\"form-row\">\n                <div class=\"form-group col-md-6\">\n                    <label for=\"email\">Email ID</label>\n                    <div class=\"asterisk\">*</div>\n                    <input type=\"text\" class=\"form-control\"  id=\"email\"  title='Email Id (Format: @example.com)' placeholder=\"Enter your email\" formControlName=\"emailId\">\n                </div>\n                <div class=\"form-group col-md-6\">\n                    <label for=\"phone\">Phone Number</label>\n                    <div class=\"asterisk\">*</div>\n                    <input type=\"tel\" class=\"form-control\"  id=\"phonenum\"  pattern=\"^\\d{3}-\\d{3}-\\d{4}$\" required title='Phone Number (Format: 999-999-9999)' formControlName=\"phoneNumber\">\n                </div>\n            </div> \n        </div> \n        <hr />\n        <div formGroupName=\"vendorAddress\" >\n            <p><b>Address</b></p>\n            <div class=\"form-group\">\n                <label for=\"inputAddress\">Street Name</label>\n                <div class=\"asterisk\">*</div>\n                <input type=\"text\" class=\"form-control\" id=\"inputAddress\" placeholder=\"Street Name\" formControlName=\"streetName\">\n                <label for=\"city\">City</label>\n                <div class=\"asterisk\">*</div>\n                <input type=\"text\" class=\"form-control\" id=\"city\" placeholder=\"City\" formControlName=\"city\">\n            </div>\n            <div class=\"form-row\">\n                <div class=\"form-group col-md-6\">\n                    <label for=\"inputState\">State</label>\n                    <div class=\"asterisk\">*</div>\n                    <select id=\"inputState\" class=\"form-control\">\n            <option selected>Choose...</option>\n            <option value=\"AL\">AL</option>\n\t<option value=\"AK\">AK</option>\n\t<option value=\"AR\">AR</option>\t\n\t<option value=\"AZ\">AZ</option>\n\t<option value=\"CA\">CA</option>\n\t<option value=\"CO\">CO</option>\n\t<option value=\"CT\">CT</option>\n\t<option value=\"DC\">DC</option>\n\t<option value=\"DE\">DE</option>\n\t<option value=\"FL\">FL</option>\n\t<option value=\"GA\">GA</option>\n\t<option value=\"HI\">HI</option>\n\t<option value=\"IA\">IA</option>\t\n\t<option value=\"ID\">ID</option>\n\t<option value=\"IL\">IL</option>\n\t<option value=\"IN\">IN</option>\n\t<option value=\"KS\">KS</option>\n\t<option value=\"KY\">KY</option>\n\t<option value=\"LA\">LA</option>\n\t<option value=\"MA\">MA</option>\n\t<option value=\"MD\">MD</option>\n\t<option value=\"ME\">ME</option>\n\t<option value=\"MI\">MI</option>\n\t<option value=\"MN\">MN</option>\n\t<option value=\"MO\">MO</option>\t\n\t<option value=\"MS\">MS</option>\n\t<option value=\"MT\">MT</option>\n\t<option value=\"NC\">NC</option>\t\n\t<option value=\"NE\">NE</option>\n\t<option value=\"NH\">NH</option>\n\t<option value=\"NJ\">NJ</option>\n\t<option value=\"NM\">NM</option>\t\t\t\n\t<option value=\"NV\">NV</option>\n\t<option value=\"NY\">NY</option>\n\t<option value=\"ND\">ND</option>\n\t<option value=\"OH\">OH</option>\n\t<option value=\"OK\">OK</option>\n\t<option value=\"OR\">OR</option>\n\t<option value=\"PA\">PA</option>\n\t<option value=\"RI\">RI</option>\n\t<option value=\"SC\">SC</option>\n\t<option value=\"SD\">SD</option>\n\t<option value=\"TN\">TN</option>\n\t<option value=\"TX\">TX</option>\n\t<option value=\"UT\">UT</option>\n\t<option value=\"VT\">VT</option>\n\t<option value=\"VA\">VA</option>\n\t<option value=\"WA\">WA</option>\n\t<option value=\"WI\">WI</option>\t\n\t<option value=\"WV\">WV</option>\n\t<option value=\"WY\">WY</option>\n            \n            <option>...</option>\n          </select>\n                </div>\n                <div class=\"form-group col-md-6\">\n                    <label for=\"inputZip\">Zip Code</label>\n                    <div class=\"asterisk\">*</div>\n                    <input type=\"text\" class=\"form-control\"  pattern=\"[0-9]{5}\" title='Zip Code (Format: 00000)'  id=\"inputZip\" formControlName=\"zipcode\">\n                </div>\n            </div>\n        </div>\n        <div class=\"buttons\">\n          <button [disabled]=\"editVendorForm.invalid\" type=\"submit\" class=\"btn btn-primary\"  *ngIf=\"!editVendorForm.disabled\">Submit</button>\n            <button type=\"cancel\" class=\"btn btn-primary\"(click)=\"cancelButton()\" >Cancel</button>\n             \n         \n\n        </div>\n    </form>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/edit-vendor/edit-vendor.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__apiservice_service__ = __webpack_require__("../../../../../src/app/apiservice.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditVendorComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EditVendorComponent = (function () {
    function EditVendorComponent(route, _apiservice, fb, modalService) {
        this.route = route;
        this._apiservice = _apiservice;
        this.fb = fb;
        this.modalService = modalService;
    }
    EditVendorComponent.prototype.editClicked = function (event) {
        console.log(this.editVendorForm.disabled);
        if (this.editVendorForm.disabled) {
            this.editVendorForm.enable();
        }
        else {
            this.editVendorForm.disable();
        }
    };
    EditVendorComponent.prototype.ngOnInit = function () {
        var _this = this;
        /*let  vendorDetails: VendorDetails;
          this.getEditVendors(this.userId);
        console.log(this.vendorDetails);*/
        this.createForm();
        this.route.params.subscribe(function (params) {
            _this.userId = params['id'];
            _this.editVendorForm.disable();
        });
        this.onDisplayVendors();
    };
    EditVendorComponent.prototype.open = function (content) {
        this.modalService.open(content);
    };
    EditVendorComponent.prototype.createForm = function () {
        this.editVendorForm = this.fb.group({
            name: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
            vendorAddress: this.fb.group({
                streetName: '',
                city: '',
                state: '',
                zipcode: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required]
            }),
            vendorContact: this.fb.group({
                firstName: '',
                lastName: '',
                emailId: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].email],
                phoneNumber: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required]
            }),
        });
    };
    EditVendorComponent.prototype.createVendor = function (value) {
        console.log("form value", value);
        value['vendorId'] = this.userId;
        this._apiservice.postVendorData(value)
            .subscribe(function (data) {
            console.log(data);
            open(data.responseString);
        }, function (error) { return console.log(error); });
    };
    EditVendorComponent.prototype.cancelButton = function () {
        this.editVendorForm.disable();
    };
    EditVendorComponent.prototype.onDisplayVendors = function () {
        var _this = this;
        this._apiservice.getVendorExtra(this.userId)
            .subscribe(function (data) {
            console.log(data);
            _this.editVendorForm
                .patchValue(data, { onlySelf: true });
        }, function (error) { return console.log(error); });
    };
    EditVendorComponent.prototype.onWindowScroll = function () {
        var number = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
        if (number > 100) {
            this.color = 'online';
            console.log('You are 100px from the top to bottom');
        }
        else {
            this.color = 'offline';
            console.log('You are 500px from the top to bottom');
        }
    };
    EditVendorComponent.prototype.getColor = function () {
        return this.color === 'online' ? '#ffffff' : 'white';
    };
    EditVendorComponent.prototype.getOpacity = function () {
        return this.color === 'online' ? 0.8 : 1;
    };
    return EditVendorComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["HostListener"])("window:scroll", []),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], EditVendorComponent.prototype, "onWindowScroll", null);
EditVendorComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'app-edit-vendor',
        template: __webpack_require__("../../../../../src/app/edit-vendor/edit-vendor.component.html"),
        styles: [__webpack_require__("../../../../../src/app/edit-vendor/edit-vendor.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_0__apiservice_service__["a" /* ApiserviceService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__apiservice_service__["a" /* ApiserviceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__apiservice_service__["a" /* ApiserviceService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_forms__["e" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_forms__["e" /* FormBuilder */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */]) === "function" && _d || Object])
], EditVendorComponent);

var _a, _b, _c, _d;
/*export interface VendorDetails {
    name: string;
    vendorAddress: VendorAddress;
    vendorContact : VendorContact;
}

  export interface VendorAddress {
      addressId : number;
 streetName : string;
  city : string;
  state : string;
  zipcode : string;
  }

   export interface Ve0ndorContact {
       contactId : number;
  firstName : string;
  lastName : string;
   middleName :string ;
  suffix :string;
  emailId :string;
  phoneNumber :string;
  }*/
//# sourceMappingURL=edit-vendor.component.js.map

/***/ }),

/***/ "../../../../../src/app/forms/forms.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".forms{\n    padding: 20px;\n    border-radius: 10px;\n    border: 1px solid transparent;\n    margin: 20px;\n    background-color: #EEEEEE;\n    overflow: hidden;\n}\n\n.page-description{\n    text-align: center;\n    /*padding: 2%;*/\n    margin-top: 0px;\n    margin-bottom: 10px;\n}\n\n@keyframes slideInFromCenter {\n  0% {\n    transform: scale(0,1);\n  }\n  100% {\n    transform: scale(1,1);\n  }\n}\n\n.after-heading{\n\twidth: 10%;\n\tmargin: auto;\n\tbackground-color: #3A539B;\n\tanimation: 1s ease-out 0s 1 slideInFromCenter;\n}\n\n/*.after-heading:hover{\n\ttransform: scale(1, 1);\n\ttransition: right 0.5s;\n}*/\n\n.tip{\n    width: 100%;\n}\n\n.tip-text{\n    background-color: #F8FFAE;\n    padding: 5px;\n    border-radius: 10px;\n    margin-left: 5px;\n    color:  #3A539B;\n}\n\n.light-bulb{\n    margin-right: 3px;\n    padding: 2px;\n    margin-left: 3px;\n    color:  #3A539B;\n}\n\n.buttons{\n\tfloat: right;\n}\n\n.asterisk{\n\tdisplay: inline;\n\tcolor: red;\n\tmargin-left: 2px;\n}\n\n.btn{\n\tmargin-left: 3px;\n\tbackground-color: #3A539B;\n\tborder-color: #3A539B;\n}\n\n/*hr{\n\tmargin: 30px -20px 20px;\n    border: 0;\n    border-top: 1px solid black;\n}*/", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/forms/forms.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"form-div\" >\n    <form  class=\"forms\" [formGroup]=\"editVendorForm\" (ngSubmit)=\"createVendor(editVendorForm.value)\">\n        <div class=\"page-description\">\n            <h3>Vendors</h3>\n            <hr class=\"after-heading\" />\n        </div>\n        <div class=\"tip\">\n            <p class=\"tip-text\">\n                <fa class=\"light-bulb\" [name]=\"'lightbulb-o'\"></fa>Tip:</p>\n        </div>\n        <div class=\"form-row\">\n            <div class=\"form-group col-12\">\n                <label for=\"vendorName\"><b>Vendor Name</b></label>\n                <div class=\"asterisk\">*</div>\n                <input type=\"text\" class=\"form-control\" id=\"vendorName\" placeholder=\"Vendor Name\" formControlName=\"name\">\n            </div>\n        </div>\n        <hr />\n        <!-- <h3>Contact Information</h3> -->\n        <div formGroupName=\"vendorContact\">\n            <p><b>Contact Person</b></p>\n\n            <div class=\"form-row\">\n                <div class=\"form-group col-md-6\">\n                    <label for=\"firstName\">First Name</label>\n                    <div class=\"asterisk\">*</div>\n                    <input type=\"text\" class=\"form-control\" id=\"firstName\" placeholder=\"First Name\" formControlName=\"firstName\">\n                </div>\n                <div class=\"form-group col-md-6\">\n                    <label for=\"lastName\">Last Name</label>\n                    <div class=\"asterisk\">*</div>\n                    <input type=\"text\" class=\"form-control\" id=\"lastName\" placeholder=\"Last Name\" formControlName=\"lastName\">\n                </div>\n            </div>\n            <div class=\"form-row\">\n                <div class=\"form-group col-md-6\">\n                    <label for=\"email\">Email ID</label>\n                    <div class=\"asterisk\">*</div>\n                    <input type=\"email\" class=\"form-control\"  id=\"email\"  title='Email Id (Format: @example.com)' placeholder=\"Email ID\" formControlName=\"emailId\">\n                </div>\n                <div class=\"form-group col-md-6\">\n                    <label for=\"phone\">Phone Number</label>\n                    <div class=\"asterisk\">*</div>\n                    <input type=\"text\" class=\"form-control\" id=\"phone\" placeholder=\"Phone Number\" pattern=\"^\\d{3}-\\d{3}-\\d{4}$\" required title='Phone Number (Format: 999-999-9999)' formControlName=\"phoneNumber\">\n                </div>\n            </div>\n        </div>\n        <hr />\n        <div formGroupName=\"vendorAddress\" >\n            <p><b>Address</b></p>\n            <div class=\"form-group\">\n                <label for=\"inputAddress\">Street Name</label>\n                <div class=\"asterisk\">*</div>\n                <input type=\"text\" class=\"form-control\" id=\"inputAddress\" placeholder=\"Street Name\" formControlName=\"streetName\">\n                <label for=\"city\">City</label>\n                <div class=\"asterisk\">*</div>\n                <input type=\"text\" class=\"form-control\" id=\"city\" placeholder=\"City\" formControlName=\"city\">\n            </div>\n             <div class=\"form-row\">\n                <div class=\"form-group col-md-6\">\n                    <label for=\"inputState\">State</label>\n                    <div class=\"asterisk\">*</div>\n                    <select id=\"inputState\" class=\"form-control\">\n            <option selected>Choose...</option>\n            <option value=\"AL\">AL</option>\n\t<option value=\"AK\">AK</option>\n\t<option value=\"AR\">AR</option>\t\n\t<option value=\"AZ\">AZ</option>\n\t<option value=\"CA\">CA</option>\n\t<option value=\"CO\">CO</option>\n\t<option value=\"CT\">CT</option>\n\t<option value=\"DC\">DC</option>\n\t<option value=\"DE\">DE</option>\n\t<option value=\"FL\">FL</option>\n\t<option value=\"GA\">GA</option>\n\t<option value=\"HI\">HI</option>\n\t<option value=\"IA\">IA</option>\t\n\t<option value=\"ID\">ID</option>\n\t<option value=\"IL\">IL</option>\n\t<option value=\"IN\">IN</option>\n\t<option value=\"KS\">KS</option>\n\t<option value=\"KY\">KY</option>\n\t<option value=\"LA\">LA</option>\n\t<option value=\"MA\">MA</option>\n\t<option value=\"MD\">MD</option>\n\t<option value=\"ME\">ME</option>\n\t<option value=\"MI\">MI</option>\n\t<option value=\"MN\">MN</option>\n\t<option value=\"MO\">MO</option>\t\n\t<option value=\"MS\">MS</option>\n\t<option value=\"MT\">MT</option>\n\t<option value=\"NC\">NC</option>\t\n\t<option value=\"NE\">NE</option>\n\t<option value=\"NH\">NH</option>\n\t<option value=\"NJ\">NJ</option>\n\t<option value=\"NM\">NM</option>\t\t\t\n\t<option value=\"NV\">NV</option>\n\t<option value=\"NY\">NY</option>\n\t<option value=\"ND\">ND</option>\n\t<option value=\"OH\">OH</option>\n\t<option value=\"OK\">OK</option>\n\t<option value=\"OR\">OR</option>\n\t<option value=\"PA\">PA</option>\n\t<option value=\"RI\">RI</option>\n\t<option value=\"SC\">SC</option>\n\t<option value=\"SD\">SD</option>\n\t<option value=\"TN\">TN</option>\n\t<option value=\"TX\">TX</option>\n\t<option value=\"UT\">UT</option>\n\t<option value=\"VT\">VT</option>\n\t<option value=\"VA\">VA</option>\n\t<option value=\"WA\">WA</option>\n\t<option value=\"WI\">WI</option>\t\n\t<option value=\"WV\">WV</option>\n\t<option value=\"WY\">WY</option>\n            \n            <option>...</option>\n          </select>\n                </div>\n                <div class=\"form-group col-md-6\">\n                    <label for=\"inputZip\">Zip Code</label>\n                    <div class=\"asterisk\">*</div>\n                    <input type=\"text\" class=\"form-control\" pattern=\"[0-9]{5}\" title='Zip Code (Format: 00000)' id=\"inputZip\" formControlName=\"zipcode\">\n                </div>\n            </div>\n        </div>\n        <div class=\"buttons\">\n            <button type=\"cancel\" class=\"btn btn-primary\"(click)=\"cancelButton()\">Cancel</button>\n            <button   type=\"submit\" class=\"btn btn-primary\"  [disabled]=\"editVendorForm.invalid\">Submit</button>\n\n        </div>\n    </form>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/forms/forms.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FormsComponent = (function () {
    function FormsComponent(fb) {
        this.fb = fb;
        this.submitClick = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    FormsComponent.prototype.ngOnInit = function () {
        this.createForm();
    };
    FormsComponent.prototype.createVendor = function (value) {
        console.log(this.editVendorForm.value);
        this.submitClick.emit(value);
        console.log(value);
    };
    FormsComponent.prototype.createForm = function () {
        this.editVendorForm = this.fb.group({
            name: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required],
            vendorAddress: this.fb.group({
                streetName: '',
                city: '',
                state: '',
                zipcode: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required]
            }),
            vendorContact: this.fb.group({
                firstName: '',
                lastName: '',
                emailId: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].email],
                phoneNumber: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required]
            }),
        });
    };
    return FormsComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], FormsComponent.prototype, "submitClick", void 0);
FormsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-forms',
        template: __webpack_require__("../../../../../src/app/forms/forms.component.html"),
        styles: [__webpack_require__("../../../../../src/app/forms/forms.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* FormBuilder */]) === "function" && _a || Object])
], FormsComponent);

var _a;
//# sourceMappingURL=forms.component.js.map

/***/ }),

/***/ "../../../../../src/app/locality-component/locality-add-component/locality-add-component.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".former{\n\n  padding: 20px;\n  border-radius: 10px;\n  border: 1px solid transparent;\n  margin: 20px;\n  background-color: #EEEEEE;\n}\n\n.asterisk{\n  display: inline;\n  color: red;\n  margin-left: 2px;\n}\n\n.btn {\n  float:right;\n  margin-top: 25px;\n  background-color: #3A539B;\n  border-color: #3A539B;\n  color: white;\n  padding: 10px 10px;\n  width: auto;\n  text-align: center;\n  text-decoration: none;\n  display: inline-block;\n  font-size: 16px;\n  margin-left: 3px;\n}\n\n\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/locality-component/locality-add-component/locality-add-component.component.html":
/***/ (function(module, exports) {

module.exports = "<form class=\"former\">\n   \n<img src=\"assets/img/Webp.net-resizeimage.gif\" usemap=\"#image-map\">\n<img src=\"assets/img/virginia-map.jpg\" width=460px height=570px usemap=\"#image-map\">\n<map name=\"image-map\">\n    <area target=\"\" alt=\"Lee\" title=\"Lee\" href=\"Lee\" coords=\"18,493,123,537\" shape=\"rect\">\n    <area target=\"\" alt=\"Scott\" title=\"Scott\" href=\"Scott\" coords=\"128,542,214,500\" shape=\"rect\">\n    <area target=\"\" alt=\"Washington\" title=\"Washington\" href=\"Washington\" coords=\"231,534,314,487\" shape=\"rect\">\n    <area target=\"\" alt=\"Smyth\" title=\"Smyth\" href=\"Smyth\" coords=\"317,472,366,520\" shape=\"rect\">\n    <area target=\"\" alt=\"grayson\" title=\"grayson\" href=\"Grayson\" coords=\"323,521,437,545\" shape=\"rect\">\n    <area target=\"\" alt=\"Caroll\" title=\"Caroll\" href=\"Caroll\" coords=\"443,493,492,543\" shape=\"rect\">\n    <area target=\"\" alt=\"Patrick\" title=\"Patrick\" href=\"Patrick\" coords=\"502,551,568,497\" shape=\"rect\">\n    <area target=\"\" alt=\"Henry\" title=\"Henry\" href=\"Henry\" coords=\"575,513,617,551\" shape=\"rect\">\n    <area target=\"\" alt=\"PittsIvania\" title=\"PittsIvania\" href=\"Pittsivania\" coords=\"634,539,716,456\" shape=\"rect\">\n    <area target=\"\" alt=\"Halifax\" title=\"Halifax\" href=\"Halifax\" coords=\"719,550,776,467\" shape=\"rect\">\n    <area target=\"\" alt=\"Macklenburg\" title=\"Macklenburg\" href=\"Macklenburg\" coords=\"787,555,878,495\" shape=\"rect\">\n    <area target=\"\" alt=\"Brunswick\" title=\"Brunswick\" href=\"Brunswick\" coords=\"889,472,942,538\" shape=\"rect\">\n    <area target=\"\" alt=\"Greenville\" title=\"Greenville\" href=\"Greensville\" coords=\"947,497,982,549\" shape=\"rect\">\n    <area target=\"\" alt=\"SouthHampton\" title=\"SouthHampton\" href=\"Southhampton\" coords=\"993,550,1059,490\" shape=\"rect\">\n    <area target=\"\" alt=\"Wise\" title=\"Wise\" href=\"Wise\" coords=\"105,445,181,489\" shape=\"rect\">\n    <area target=\"\" alt=\"Dickerson\" title=\"Dickerson\" href=\"Dickerson\" coords=\"183,415,232,460\" shape=\"rect\">\n    <area target=\"\" alt=\"Bucharan\" title=\"Bucharan\" href=\"Bucharan\" coords=\"233,367,298,438\" shape=\"rect\">\n    <area target=\"\" alt=\"Tazwell\" title=\"Tazwell\" href=\"Tazwell\" coords=\"290,418,367,459\" shape=\"rect\">\n    <area target=\"\" alt=\"Bland\" title=\"Bland\" href=\"Bland\" coords=\"366,418,432,454\" shape=\"rect\">\n    <area target=\"\" alt=\"Russell\" title=\"Russell\" href=\"Russell\" coords=\"227,486,293,458\" shape=\"rect\">\n    <area target=\"\" alt=\"Wythe\" title=\"Wythe\" href=\"Wythe\" coords=\"373,502,436,462\" shape=\"rect\">\n    <area target=\"\" alt=\"Glles\" title=\"Glles\" href=\"Glles\" coords=\"435,429,497,378\" shape=\"rect\">\n    <area target=\"\" alt=\"Pulaski\" title=\"Pulaski\" href=\"Pulaski\" coords=\"444,436,491,486\" shape=\"rect\">\n    <area target=\"\" alt=\"Montgomery\" title=\"Montgomery\" href=\"Montgomery\" coords=\"497,458,533,403\" shape=\"rect\">\n    <area target=\"\" alt=\"Floyd\" title=\"Floyd\" href=\"Floyd\" coords=\"553,463,496,494\" shape=\"rect\">\n    <area target=\"\" alt=\"Craig\" title=\"Craig\" href=\"Craig\" coords=\"505,400,570,358\" shape=\"rect\">\n    <area target=\"\" alt=\"Franklin\" title=\"Franklin\" href=\"Franklin\" coords=\"565,454,629,498\" shape=\"rect\">\n    <area target=\"\" alt=\"Renoeke\" title=\"Renoeke\" href=\"Renoeke\" coords=\"537,418,592,448\" shape=\"rect\">\n    <area target=\"\" alt=\"Bedford\" title=\"Bedford\" href=\"Bedford\" coords=\"612,455,687,366\" shape=\"rect\">\n    <area target=\"\" alt=\"campbell\" title=\"campbell\" href=\"Campbell\" coords=\"689,393,755,453\" shape=\"rect\">\n    <area target=\"\" alt=\"Charlotte\" title=\"Charlotte\" href=\"Charlotte\" coords=\"760,433,818,473\" shape=\"rect\">\n    <area target=\"\" alt=\"Prince Edward\" title=\"Prince Edward\" href=\"Prince Edward\" coords=\"801,405,856,439\" shape=\"rect\">\n    <area target=\"\" alt=\"Botetourt\" title=\"Botetourt\" href=\"Botetourt\" coords=\"583,389,634,335\" shape=\"rect\">\n    <area target=\"\" alt=\"Amherst\" title=\"Amherst\" href=\"Amherst\" coords=\"680,376,741,332\" shape=\"rect\">\n    <area target=\"\" alt=\"Bukingham\" title=\"Bukingham\" href=\"Bukingham\" coords=\"787,388,836,330\" shape=\"rect\">\n    <area target=\"\" alt=\"Appomatox\" title=\"Appomatox\" href=\"Appomatox\" coords=\"743,366,789,421\" shape=\"rect\">\n    <area target=\"\" alt=\"Nelson\" title=\"Nelson\" href=\"Nelson\" coords=\"713,330,778,299\" shape=\"rect\">\n    <area target=\"\" alt=\"Lunenburg\" title=\"Lunenburg\" href=\"Lunenburg\" coords=\"823,454,879,492\" shape=\"rect\">\n    <area target=\"\" alt=\"Dimwiddle\" title=\"Dimwiddle\" href=\"Dimwiddle\" coords=\"917,426,991,473\" shape=\"rect\">\n    <area target=\"\" alt=\"Sussex\" title=\"Sussex\" href=\"Sussex\" coords=\"980,486,1059,458\" shape=\"rect\">\n    <area target=\"\" alt=\"prince george\" title=\"prince george\" href=\"prince george\" coords=\"995,416,1046,451\" shape=\"rect\">\n    <area target=\"\" alt=\"Surry\" title=\"Surry\" href=\"Surry\" coords=\"1058,425,1096,462\" shape=\"rect\">\n    <area target=\"\" alt=\"Isle of wight\" title=\"Isle of wight\" href=\"Isle of wight\" coords=\"1069,468,1113,513\" shape=\"rect\">\n    <area target=\"\" alt=\"Alleghany\" title=\"Alleghany\" href=\"Alleghany\" coords=\"515,300,575,347\" shape=\"rect\">\n    <area target=\"\" alt=\"Bath\" title=\"Bath\" href=\"Bath\" coords=\"592,236,646,288\" shape=\"rect\">\n    <area target=\"\" alt=\"Rockbridge\" title=\"Rockbridge\" href=\"Rockbridge\" coords=\"633,285,695,343\" shape=\"rect\">\n    <area target=\"\" alt=\"Highland\" title=\"Highland\" href=\"Highland\" coords=\"611,231,675,185\" shape=\"rect\">\n    <area target=\"\" alt=\"Augusta\" title=\"Augusta\" href=\"Augusta\" coords=\"679,281,764,211\" shape=\"rect\">\n    <area target=\"\" alt=\"Rockingham\" title=\"Rockingham\" href=\"Rockingham\" coords=\"690,135,790,207\" shape=\"rect\">\n    <area target=\"\" alt=\"Greene\" title=\"Greene\" href=\"Greene\" coords=\"791,212,838,241\" shape=\"rect\">\n    <area target=\"\" alt=\"Albermarle\" title=\"Albermarle\" href=\"Albermarle\" coords=\"775,295,847,247\" shape=\"rect\">\n    <area target=\"\" alt=\"Ruyama\" title=\"Ruyama\" href=\"Ruyama\" coords=\"823,328,872,298\" shape=\"rect\">\n    <area target=\"\" alt=\"Goochland\" title=\"Goochland\" href=\"Goochland\" coords=\"876,308,945,347\" shape=\"rect\">\n    <area target=\"\" alt=\"Cumberland\" title=\"Cumberland\" href=\"Cumberland\" coords=\"840,398,868,336\" shape=\"rect\">\n    <area target=\"\" alt=\"Powhatan\" title=\"Powhatan\" href=\"Powhatan\" coords=\"875,350,937,378\" shape=\"rect\">\n    <area target=\"\" alt=\"Amelia\" title=\"Amelia\" href=\"Amelia\" coords=\"872,386,939,422\" shape=\"rect\">\n    <area target=\"\" alt=\"Chesterfield\" title=\"Chesterfield\" href=\"Chesterfield\" coords=\"943,373,984,424\" shape=\"rect\">\n    <area target=\"\" alt=\"Shenandoah\" title=\"Shenandoah\" href=\"Shenandoah\" coords=\"760,132,836,85\" shape=\"rect\">\n    <area target=\"\" alt=\"Page\" title=\"Page\" href=\"Page\" coords=\"794,191,835,136\" shape=\"rect\">\n    <area target=\"\" alt=\"Madison\" title=\"Madison\" href=\"Madison\" coords=\"840,169,871,223\" shape=\"rect\">\n    <area target=\"\" alt=\"Orange\" title=\"Orange\" href=\"Orange\" coords=\"853,248,918,226\" shape=\"rect\">\n    <area target=\"\" alt=\"Louisa\" title=\"Louisa\" href=\"Louisa\" coords=\"857,259,934,303\" shape=\"rect\">\n    <area target=\"\" alt=\"Fredrick\" title=\"Fredrick\" href=\"Fredrick\" coords=\"796,74,858,14\" shape=\"rect\">\n    <area target=\"\" alt=\"Warren\" title=\"Warren\" href=\"Warren\" coords=\"841,117,881,83\" shape=\"rect\">\n    <area target=\"\" alt=\"Rappahannock\" title=\"Rappahannock\" href=\"Rappahannock\" coords=\"849,164,887,127\" shape=\"rect\">\n    <area target=\"\" alt=\"Culpeper\" title=\"Culpeper\" href=\"Culpeper\" coords=\"871,168,926,203\" shape=\"rect\">\n    <area target=\"\" alt=\"Clarke\" title=\"Clarke\" href=\"Clarke\" coords=\"882,79,912,48\" shape=\"rect\">\n    <area target=\"\" alt=\"Fauquier\" title=\"Fauquier\" href=\"Fauquier\" coords=\"891,90,953,164\" shape=\"rect\">\n    <area target=\"\" alt=\"Spotsylvania\" title=\"Spotsylvania\" href=\"Spotsylvania\" coords=\"925,255,968,222\" shape=\"rect\">\n    <area target=\"\" alt=\"Caroline\" title=\"Caroline\" href=\"Caroline\" coords=\"974,301,1028,245\" shape=\"rect\">\n    <area target=\"\" alt=\"Hanover\" title=\"Hanover\" href=\"Hanover\" coords=\"948,301,995,329\" shape=\"rect\">\n    <area target=\"\" alt=\"Henrico\" title=\"Henrico\" href=\"Henrico\" coords=\"945,331,994,355\" shape=\"rect\">\n    <area target=\"\" alt=\"New Kent\" title=\"New Kent\" href=\"New Kent\" coords=\"1085,386,1022,355,1311,543\" shape=\"rect\">\n    <area target=\"\" alt=\"Charles City\" title=\"Charles City\" href=\"Charles City\" coords=\"1018,388,1068,413\" shape=\"rect\">\n    <area target=\"\" alt=\"King William\" title=\"King William\" href=\"King William\" coords=\"1006,310,1042,347\" shape=\"rect\">\n    <area target=\"\" alt=\"King and Queen\" title=\"King and Queen\" href=\"King and Queen\" coords=\"1078,351,1046,320\" shape=\"rect\">\n    <area target=\"\" alt=\"Loudoun\" title=\"Loudoun\" href=\"Loudoun\" coords=\"926,88,978,38\" shape=\"rect\">\n    <area target=\"\" alt=\"Prince William\" title=\"Prince William\" href=\"Prince William\" coords=\"959,134,1002,171\" shape=\"rect\">\n    <area target=\"\" alt=\"Fairfax\" title=\"Fairfax\" href=\"Fairfax\" coords=\"976,94,1041,130\" shape=\"rect\">\n    <area target=\"\" alt=\"Stafford\" title=\"Stafford\" href=\"Stafford\" coords=\"955,176,1000,211\" shape=\"rect\">\n    <area target=\"\" alt=\"King George\" title=\"King George\" href=\"King George\" coords=\"1008,212,1052,234\" shape=\"rect\">\n    <area target=\"\" alt=\"Essex\" title=\"Essex\" href=\"Essex\" coords=\"1042,265,1070,307\" shape=\"rect\">\n    <area target=\"\" alt=\"Montross\" title=\"Montross\" href=\"Montross\" coords=\"1053,241,1114,261\" shape=\"rect\">\n    <area target=\"\" alt=\"Henrico\" title=\"Henrico\" href=\"Henrico\" coords=\"1076,272,1116,302\" shape=\"rect\">\n    <area target=\"\" alt=\"Lancaster\" title=\"Lancaster\" href=\"Lancaster\" coords=\"1112,340,1150,312\" shape=\"rect\">\n    <area target=\"\" alt=\"Northumberland\" title=\"Northumberland\" href=\"Northumberland\" coords=\"1121,277,1166,307\" shape=\"rect\">\n    <area target=\"\" alt=\"Saluda\" title=\"Saluda\" href=\"Saluda\" coords=\"1144,362,1097,342\" shape=\"rect\">\n    <area target=\"\" alt=\"Gloucester\" title=\"Gloucester\" href=\"Gloucester\" coords=\"1106,368,1136,407\" shape=\"rect\">\n    <area target=\"\" alt=\"Yorktown\" title=\"Yorktown\" href=\"Yorktown\" coords=\"1105,412,1142,441\" shape=\"rect\">\n    <area target=\"\" alt=\"Accomack\" title=\"Accomack\" href=\"Accomack\" coords=\"1294,272,1235,359\" shape=\"rect\">\n    <area target=\"\" alt=\"Mathews\" title=\"Mathews\" href=\"Mathews\" coords=\"1140,368,1162,393\" shape=\"rect\">\n    <area target=\"\" alt=\"Northampton\" title=\"Northampton\" href=\"Northampton\" coords=\"1237,367,1204,437\" shape=\"rect\">\n    <area target=\"\" alt=\"Nottoway\" title=\"Nottoway\" href=\"Nottoway\" coords=\"862,426,894,451\" shape=\"rect\">\n    <area target=\"\" alt=\"Suffolk\" title=\"Suffolk\" href=\"Suffolk\" coords=\"1072,547,1130,516\" shape=\"rect\">\n    <area target=\"\" alt=\"\" title=\"\" href=\"\" coords=\"\" shape=\"rect\">\n    <area target=\"\" alt=\"Portsmouth\" title=\"Portsmouth\" href=\"Portsmouth\" coords=\"1148,493,1166,506\" shape=\"rect\">\n    <area target=\"\" alt=\"Chesapeake\" title=\"Chesapeake\" href=\"Chesapeake\" coords=\"1137,510,1185,551\" shape=\"rect\">\n    <area target=\"\" alt=\"Norfolk\" title=\"Norfolk\" href=\"Norfolk\" coords=\"1159,475,1177,490\" shape=\"rect\">\n    <area target=\"\" alt=\"Virginia Beach\" title=\"Virginia Beach\" href=\"Virginia Beach\" coords=\"1189,483,1213,544\" shape=\"rect\">\n    <area target=\"\" alt=\"Richmond\" title=\"Richmond\" href=\"Richmond\" coords=\"958,357,992,369\" shape=\"rect\">\n    <area target=\"\" alt=\"Lynchburg\" title=\"Lynchburg\" href=\"Lynchburg\" coords=\"692,379,724,390\" shape=\"rect\">\n    <area target=\"\" alt=\"Roanoke\" title=\"Roanoke\" href=\"Roanoke\" coords=\"565,405,601,415\" shape=\"rect\">\n    <area target=\"\" alt=\"Covington\" title=\"Covington\" href=\"Covington\" coords=\"585,310,578,329\" shape=\"rect\">\n    <area target=\"\" alt=\"Clifton Forge\" title=\"Clifton Forge\" href=\"Clifton Forge\" coords=\"617,301,594,317\" shape=\"rect\">\n    <area target=\"\" alt=\"Danville\" title=\"Danville\" href=\"Danville\" coords=\"643,541,686,553\" shape=\"rect\">\n    <area target=\"\" alt=\"Bristol\" title=\"Bristol\" href=\"Bristol\" coords=\"228,545,264,537\" shape=\"rect\">\n    <area target=\"\" alt=\"Hampton\" title=\"Hampton\" href=\"Hampton\" coords=\"1123,445,1171,462\" shape=\"rect\">\n</map>\n\n</form>\n<form class=\"former\">\n <div class=\"page-description\">\n       \n    </div>\n   \n    <div class=\"form-row\">\n        <div class=\"form-group col-md-6\">\n\n            <label class=\"label\" for=\"modelSolution\"><b>Please Select Your Locality </b></label>\n            <div class=\"asterisk\">*</div>\n            <select class=\"form-control\" id=\"modelSolution\" (change)=\"selectLocal($event.target.value)\">\n          <option selected>Choose...</option>\n          <option  *ngFor=\"let county of counties\">\n          {{ county.county_name}}\n          </option> \n        </select>\n        </div>\n\n    </div>\n\n</form>\n\n\n\n\n<!--<div class=\"form-div\" *ngIf = \"showForm == 'locality2'\">\n    <form class=\"former\">\n      locality2\n\n      <div class=\"form-row\">\n        <div class=\"form-group col-md-6\">\n          <label for=\"inputState\">Country Name</label><div class=\"asterisk\">*</div>\n          <select id=\"inputState\" class=\"form-control\">\n            <option selected>Choose...</option>\n            <option>...</option>\n          </select>\n        </div>\n        <div class=\"form-group col-md-6\">\n          <label for=\"lastName\">City</label>\n          <input type=\"text\" class=\"form-control\" id=\"lastName\" value=\"Value\">\n        </div>\n      </div>\n      <div class=\"form-row\">\n        <div class=\"form-group col-md-6\">\n          <label for=\"email\">Email ID</label><div class=\"asterisk\">*</div>\n          <input type=\"email\" class=\"form-control\" id=\"email\" value=\"Value\">\n        </div>\n        <div class=\"form-group col-md-6\">\n          <label for=\"phone\">Phone Number</label><div class=\"asterisk\">*</div>\n          <input type=\"text\" class=\"form-control\" id=\"phone\" value=\"Value\">\n        </div>\n      </div>\n\n      <p><b>Address</b></p>\n      <div class=\"form-group\">\n        <label for=\"inputAddress\">Street Name</label><div class=\"asterisk\">*</div>\n        <input type=\"text\" class=\"form-control\" id=\"inputAddress\" value=\"Value\" >\n        <label for=\"city\">City</label>\n        <input type=\"text\" class=\"form-control\" id=\"city\" value=\"Value\">\n      </div>\n      <div class=\"form-row\">\n        <div class=\"form-group col-md-6\">\n          <label for=\"inputState\">State</label><div class=\"asterisk\">*</div>\n          <select id=\"inputState\" class=\"form-control\">\n            <option selected>Choose...</option>\n            <option>...</option>\n          </select>\n        </div>\n        <div class=\"form-group col-md-6\">\n          <label for=\"inputZip\">Zip Code</label><div class=\"asterisk\">*</div>\n          <input type=\"text\" class=\"form-control\" id=\"inputZip\" valu=\"00000\">\n\n\n          <div class=\"buttons\">\n            <button type=\"submit\" class=\"btn btn-primary\">Submit</button>\n            <button type=\"cancel\" class=\"btn btn-primary\">Cancel</button>\n          </div>\n        </div>\n      </div>\n    </form>\n  </div>\n\n\n\n  <div class=\"form-div\" *ngIf = \"showForm == 'locality3'\">\n    <form class=\"former\">\n      locality3\n\n      <div class=\"form-row\">\n        <div class=\"form-group col-md-6\">\n          <label for=\"inputState\">Country Name</label>\n          <select id=\"inputState\" class=\"form-control\">\n            <option selected>Choose...</option>\n            <option>...</option>\n          </select>\n        </div>\n\n\n\n\n\n        <div class=\"form-group col-md-6\">\n          <label for=\"lastName\">City</label>\n          <input type=\"text\" class=\"form-control\" id=\"lastName\" value=\"Value\">\n        </div>\n      </div>\n      <div class=\"form-row\">\n        <div class=\"form-group col-md-6\">\n          <label for=\"email\">Email ID</label>\n          <input type=\"email\" class=\"form-control\" id=\"email\" value=\"Value\">\n        </div>\n        <div class=\"form-group col-md-6\">\n          <label for=\"phone\">Phone Number</label>\n          <input type=\"text\" class=\"form-control\" id=\"phone\" value=\"Value\">\n        </div>\n      </div>\n\n      <p><b>Address</b></p>\n      <div class=\"form-group\">\n        <label for=\"inputAddress\">Street Name</label>\n        <input type=\"text\" class=\"form-control\" id=\"inputAddress\" value=\"Value\" >\n        <label for=\"city\">City</label>\n        <input type=\"text\" class=\"form-control\" id=\"city\" value=\"Value\">\n      </div>\n      <div class=\"form-row\">\n        <div class=\"form-group col-md-6\">\n          <label for=\"inputState\">State</label>\n          <select id=\"inputState\" class=\"form-control\">\n            <option selected>Choose...</option>\n            <option>...</option>\n          </select>\n        </div>\n        <div class=\"form-group col-md-6\">\n          <label for=\"inputZip\">Zip Code</label>\n          <input type=\"text\" class=\"form-control\" id=\"inputZip\" valu=\"00000\">\n\n\n          <div class=\"buttons\">\n            <button type=\"submit\" class=\"btn btn-primary\">Submit</button>\n            <button type=\"cancel\" class=\"btn btn-primary\">Cancel</button>\n          </div>\n        </div>\n      </div>\n    </form>\n  </div>-->"

/***/ }),

/***/ "../../../../../src/app/locality-component/locality-add-component/locality-add-component.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocalityAddComponentComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LocalityAddComponentComponent = (function () {
    function LocalityAddComponentComponent(router) {
        this.router = router;
        this.counties = [
            {
                "county_seat": "Accomac",
                "county_code": "1",
                "year_founded": "1663",
                "county_name": "Accomack"
            },
            {
                "county_seat": "Charlottesville",
                "county_code": "3",
                "year_founded": "1744",
                "county_name": "Albemarle"
            },
            {
                "county_seat": "Covington   ",
                "county_code": "5",
                "year_founded": "1822",
                "county_name": "Alleghany"
            },
            {
                "county_seat": "Amelia Court House  ",
                "county_code": "7",
                "year_founded": "1734",
                "county_name": "Amelia"
            },
            {
                "county_seat": "Amherst   ",
                "county_code": "9",
                "year_founded": "1761",
                "county_name": "Amherst"
            },
            {
                "county_seat": "Appomattox   ",
                "county_code": "11",
                "year_founded": "1845",
                "county_name": "Appomattox"
            },
            {
                "county_seat": "Arlington   ",
                "county_code": "13",
                "year_founded": "1801",
                "county_name": "Arlington"
            },
            {
                "county_seat": "Staunton   ",
                "county_code": "15",
                "year_founded": "1745",
                "county_name": "Augusta"
            },
            {
                "county_seat": "Warm Springs   ",
                "county_code": "17",
                "year_founded": "1790",
                "county_name": "Bath"
            },
            {
                "county_seat": "Bedford   ",
                "county_code": "19",
                "year_founded": "1753",
                "county_name": "Bedford"
            },
            {
                "county_seat": "Bland   ",
                "county_code": "21",
                "year_founded": "1861",
                "county_name": "Bland"
            },
            {
                "county_seat": "Fincastle   ",
                "county_code": "23",
                "year_founded": "1796",
                "county_name": "Botetourt"
            },
            {
                "county_seat": "Lawrenceville   ",
                "county_code": "25",
                "year_founded": "1732",
                "county_name": "Brunswick"
            },
            {
                "county_seat": "Grundy   ",
                "county_code": "27",
                "year_founded": "1858",
                "county_name": "Buchanan"
            },
            {
                "county_seat": "Buckingham   ",
                "county_code": "29",
                "year_founded": "1785",
                "county_name": "Buckingham"
            },
            {
                "county_seat": "Rustburg   ",
                "county_code": "31",
                "year_founded": "1782",
                "county_name": "Campbell"
            },
            {
                "county_seat": "Bowling Green   ",
                "county_code": "33",
                "year_founded": "1728",
                "county_name": "Caroline"
            },
            {
                "county_seat": "Hillsville   ",
                "county_code": "35",
                "year_founded": "1842",
                "county_name": "Carroll"
            },
            {
                "county_seat": "Charles City   ",
                "county_code": "36",
                "year_founded": "1634",
                "county_name": "Charles City"
            },
            {
                "county_seat": "Charlotte Court House  ",
                "county_code": "37",
                "year_founded": "1765",
                "county_name": "Charlotte"
            },
            {
                "county_seat": "Chesterfield   ",
                "county_code": "41",
                "year_founded": "1749",
                "county_name": "Chesterfield"
            },
            {
                "county_seat": "Berryville   ",
                "county_code": "43",
                "year_founded": "1836",
                "county_name": "Clarke"
            },
            {
                "county_seat": "New Castle   ",
                "county_code": "45",
                "year_founded": "1851",
                "county_name": "Craig"
            },
            {
                "county_seat": "Culpeper   ",
                "county_code": "47",
                "year_founded": "1748",
                "county_name": "Culpeper"
            },
            {
                "county_seat": "Cumberland   ",
                "county_code": "49",
                "year_founded": "1749",
                "county_name": "Cumberland"
            },
            {
                "county_seat": "Clintwood   ",
                "county_code": "51",
                "year_founded": "1880",
                "county_name": "Dickenson"
            },
            {
                "county_seat": "Dinwiddie   ",
                "county_code": "53",
                "year_founded": "1752",
                "county_name": "Dinwiddie"
            },
            {
                "county_seat": "Tappahannock   ",
                "county_code": "57",
                "year_founded": "1692",
                "county_name": "Essex"
            },
            {
                "county_seat": "Fairfax   ",
                "county_code": "59",
                "year_founded": "1742",
                "county_name": "Fairfax"
            },
            {
                "county_seat": "Warrenton   ",
                "county_code": "61",
                "year_founded": "1759",
                "county_name": "Fauquier"
            },
            {
                "county_seat": "Floyd   ",
                "county_code": "63",
                "year_founded": "1831",
                "county_name": "Floyd"
            },
            {
                "county_seat": "Palmyra   ",
                "county_code": "65",
                "year_founded": "1777",
                "county_name": "Fluvanna"
            },
            {
                "county_seat": "Rocky Mount   ",
                "county_code": "67",
                "year_founded": "1785",
                "county_name": "Franklin"
            },
            {
                "county_seat": "Winchester   ",
                "county_code": "69",
                "year_founded": "1743",
                "county_name": "Frederick"
            },
            {
                "county_seat": "Pearisburg   ",
                "county_code": "71",
                "year_founded": "1806",
                "county_name": "Giles"
            },
            {
                "county_seat": "Gloucester   ",
                "county_code": "73",
                "year_founded": "1651",
                "county_name": "Gloucester"
            },
            {
                "county_seat": "Goochland   ",
                "county_code": "75",
                "year_founded": "1727",
                "county_name": "Goochland"
            },
            {
                "county_seat": "Independence   ",
                "county_code": "77",
                "year_founded": "1793",
                "county_name": "Grayson"
            },
            {
                "county_seat": "Stanardsville   ",
                "county_code": "79",
                "year_founded": "1838",
                "county_name": "Greene"
            },
            {
                "county_seat": "Emporia   ",
                "county_code": "81",
                "year_founded": "1780",
                "county_name": "Greensville"
            },
            {
                "county_seat": "Halifax   ",
                "county_code": "83",
                "year_founded": "1752",
                "county_name": "Halifax"
            },
            {
                "county_seat": "Hanover   ",
                "county_code": "85",
                "year_founded": "1720",
                "county_name": "Hanover"
            },
            {
                "county_seat": "Richmond   ",
                "county_code": "87",
                "year_founded": "1634",
                "county_name": "Henrico"
            },
            {
                "county_seat": "Martinsville  ",
                "county_code": "89",
                "year_founded": "1777",
                "county_name": "Henry"
            },
            {
                "county_seat": "Monterey   ",
                "county_code": "91",
                "year_founded": "1847",
                "county_name": "Highland"
            },
            {
                "county_seat": "Isle Of Wight   ",
                "county_code": "93",
                "year_founded": "1634",
                "county_name": "Isle of Wight"
            },
            {
                "county_seat": "Williamsburg   ",
                "county_code": "95",
                "year_founded": "1634",
                "county_name": "James City"
            },
            {
                "county_seat": "King And Queen Court House  ",
                "county_code": "97",
                "year_founded": "1691",
                "county_name": "King and Queen"
            },
            {
                "county_seat": "King George   ",
                "county_code": "99",
                "year_founded": "1721",
                "county_name": "King George"
            },
            {
                "county_seat": "King William   ",
                "county_code": "101",
                "year_founded": "1702",
                "county_name": "King William"
            },
            {
                "county_seat": "Lancaster   ",
                "county_code": "103",
                "year_founded": "1651",
                "county_name": "Lancaster"
            },
            {
                "county_seat": "Jonesville   ",
                "county_code": "105",
                "year_founded": "1793",
                "county_name": "Lee"
            },
            {
                "county_seat": "Leesburg   ",
                "county_code": "107",
                "year_founded": "1757",
                "county_name": "Loudoun"
            },
            {
                "county_seat": "Louisa   ",
                "county_code": "109",
                "year_founded": "1742",
                "county_name": "Louisa"
            },
            {
                "county_seat": "Lunenburg   ",
                "county_code": "111",
                "year_founded": "1746",
                "county_name": "Lunenburg"
            },
            {
                "county_seat": "Madison   ",
                "county_code": "113",
                "year_founded": "1793",
                "county_name": "Madison"
            },
            {
                "county_seat": "Mathews   ",
                "county_code": "115",
                "year_founded": "1791",
                "county_name": "Mathews"
            },
            {
                "county_seat": "Boydton   ",
                "county_code": "117",
                "year_founded": "1765",
                "county_name": "Mecklenburg"
            },
            {
                "county_seat": "Saluda   ",
                "county_code": "119",
                "year_founded": "1673",
                "county_name": "Middlesex"
            },
            {
                "county_seat": "Christiansburg   ",
                "county_code": "121",
                "year_founded": "1777",
                "county_name": "Montgomery"
            },
            {
                "county_seat": "Lovingston   ",
                "county_code": "125",
                "year_founded": "1808",
                "county_name": "Nelson"
            },
            {
                "county_seat": "New Kent   ",
                "county_code": "127",
                "year_founded": "1654",
                "county_name": "New Kent"
            },
            {
                "county_seat": "Eastville   ",
                "county_code": "131",
                "year_founded": "1634",
                "county_name": "Northampton"
            },
            {
                "county_seat": "Heathsville   ",
                "county_code": "133",
                "year_founded": "1648",
                "county_name": "Northumberland"
            },
            {
                "county_seat": "Nottoway   ",
                "county_code": "135",
                "year_founded": "1789",
                "county_name": "Nottoway"
            },
            {
                "county_seat": "Orange   ",
                "county_code": "137",
                "year_founded": "1734",
                "county_name": "Orange"
            },
            {
                "county_seat": "Luray   ",
                "county_code": "139",
                "year_founded": "1831",
                "county_name": "Page"
            },
            {
                "county_seat": "Stuart   ",
                "county_code": "141",
                "year_founded": "1791",
                "county_name": "Patrick"
            },
            {
                "county_seat": "Chatham   ",
                "county_code": "143",
                "year_founded": "1767",
                "county_name": "Pittsylvania"
            },
            {
                "county_seat": "Powhatan   ",
                "county_code": "145",
                "year_founded": "1777",
                "county_name": "Powhatan"
            },
            {
                "county_seat": "Farmville   ",
                "county_code": "147",
                "year_founded": "1754",
                "county_name": "Prince Edward"
            },
            {
                "county_seat": "Prince George   ",
                "county_code": "149",
                "year_founded": "1703",
                "county_name": "Prince George"
            },
            {
                "county_seat": "Manassas   ",
                "county_code": "153",
                "year_founded": "1731",
                "county_name": "Prince William"
            },
            {
                "county_seat": "Pulaski   ",
                "county_code": "155",
                "year_founded": "1839",
                "county_name": "Pulaski"
            },
            {
                "county_seat": "Washington  ",
                "county_code": "157",
                "year_founded": "1833",
                "county_name": "Rappahannock"
            },
            {
                "county_seat": "Warsaw   ",
                "county_code": "159",
                "year_founded": "1692",
                "county_name": "Richmond"
            },
            {
                "county_seat": "Roanoke   ",
                "county_code": "161",
                "year_founded": "1838",
                "county_name": "Roanoke"
            },
            {
                "county_seat": "Lexington  ",
                "county_code": "163",
                "year_founded": "1778",
                "county_name": "Rockbridge"
            },
            {
                "county_seat": "Harrisonburg   ",
                "county_code": "165",
                "year_founded": "1778",
                "county_name": "Rockingham"
            },
            {
                "county_seat": "Lebanon   ",
                "county_code": "167",
                "year_founded": "1786",
                "county_name": "Russell"
            },
            {
                "county_seat": "Gate City   ",
                "county_code": "169",
                "year_founded": "1814",
                "county_name": "Scott"
            },
            {
                "county_seat": "Woodstock   ",
                "county_code": "171",
                "year_founded": "1772",
                "county_name": "Shenandoah"
            },
            {
                "county_seat": "Marion   ",
                "county_code": "173",
                "year_founded": "1832",
                "county_name": "Smyth"
            },
            {
                "county_seat": "Courtland   ",
                "county_code": "175",
                "year_founded": "1749",
                "county_name": "Southampton"
            },
            {
                "county_seat": "Spotsylvania   ",
                "county_code": "177",
                "year_founded": "1721",
                "county_name": "Spotsylvania"
            },
            {
                "county_seat": "Stafford   ",
                "county_code": "179",
                "year_founded": "1664",
                "county_name": "Stafford"
            },
            {
                "county_seat": "Surry   ",
                "county_code": "181",
                "year_founded": "1652",
                "county_name": "Surry"
            },
            {
                "county_seat": "Sussex   ",
                "county_code": "183",
                "year_founded": "1754",
                "county_name": "Sussex"
            },
            {
                "county_seat": "Tazewell   ",
                "county_code": "185",
                "year_founded": "1800",
                "county_name": "Tazewell"
            },
            {
                "county_seat": "Front Royal   ",
                "county_code": "187",
                "year_founded": "1836",
                "county_name": "Warren"
            },
            {
                "county_seat": "Abingdon   ",
                "county_code": "191",
                "year_founded": "1777",
                "county_name": "Washington"
            },
            {
                "county_seat": "Montross   ",
                "county_code": "193",
                "year_founded": "1653",
                "county_name": "Westmoreland"
            },
            {
                "county_seat": "Wise   ",
                "county_code": "195",
                "year_founded": "1856",
                "county_name": "Wise"
            },
            {
                "county_seat": "Wytheville   ",
                "county_code": "197",
                "year_founded": "1790",
                "county_name": "Wythe"
            },
            {
                "county_seat": "Yorktown   ",
                "county_code": "199",
                "year_founded": "1634",
                "county_name": "York"
            }
        ];
    }
    LocalityAddComponentComponent.prototype.ngOnInit = function () {
    };
    LocalityAddComponentComponent.prototype.selectLocal = function (locality) {
        this.router.navigate(['/locality/tab/info']);
    };
    return LocalityAddComponentComponent;
}());
LocalityAddComponentComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-locality-add-component',
        template: __webpack_require__("../../../../../src/app/locality-component/locality-add-component/locality-add-component.component.html"),
        styles: [__webpack_require__("../../../../../src/app/locality-component/locality-add-component/locality-add-component.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _a || Object])
], LocalityAddComponentComponent);

var _a;
//# sourceMappingURL=locality-add-component.component.js.map

/***/ }),

/***/ "../../../../../src/app/locality-component/locality-component.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/locality-component/locality-component.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navigation-component></app-navigation-component>\n<app-option-list></app-option-list>\n\n<router-outlet></router-outlet>"

/***/ }),

/***/ "../../../../../src/app/locality-component/locality-component.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocalityComponentComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LocalityComponentComponent = (function () {
    function LocalityComponentComponent() {
    }
    LocalityComponentComponent.prototype.ngOnInit = function () {
    };
    return LocalityComponentComponent;
}());
LocalityComponentComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-locality-component',
        template: __webpack_require__("../../../../../src/app/locality-component/locality-component.component.html"),
        styles: [__webpack_require__("../../../../../src/app/locality-component/locality-component.component.css")]
    }),
    __metadata("design:paramtypes", [])
], LocalityComponentComponent);

//# sourceMappingURL=locality-component.component.js.map

/***/ }),

/***/ "../../../../../src/app/locality-component/locality-component.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_routing__ = __webpack_require__("../../../../../src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__navigation_component_navigation_component_module__ = __webpack_require__("../../../../../src/app/navigation-component/navigation-component.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_fontawesome_angular2_fontawesome__ = __webpack_require__("../../../../angular2-fontawesome/angular2-fontawesome.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_fontawesome_angular2_fontawesome___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_angular2_fontawesome_angular2_fontawesome__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__locality_add_component_locality_add_component_component__ = __webpack_require__("../../../../../src/app/locality-component/locality-add-component/locality-add-component.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__locality_tab_locality_tab_component__ = __webpack_require__("../../../../../src/app/locality-component/locality-tab/locality-tab.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__option_list_option_list_module__ = __webpack_require__("../../../../../src/app/option-list/option-list.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__locality_component_component__ = __webpack_require__("../../../../../src/app/locality-component/locality-component.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__locality_tab_locality_details_locality_details_component__ = __webpack_require__("../../../../../src/app/locality-component/locality-tab/locality-details/locality-details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__locality_tab_locality_solutions_locality_solutions_component__ = __webpack_require__("../../../../../src/app/locality-component/locality-tab/locality-solutions/locality-solutions.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__locality_tab_locality_solutions_locality_solutions_link_locality_solutions_link_component__ = __webpack_require__("../../../../../src/app/locality-component/locality-tab/locality-solutions/locality-solutions-link/locality-solutions-link.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__locality_tab_locality_solutionstablelink_locality_solutionstablelink_component__ = __webpack_require__("../../../../../src/app/locality-component/locality-tab/locality-solutionstablelink/locality-solutionstablelink.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__locality_tab_locality_business_locality_business_component__ = __webpack_require__("../../../../../src/app/locality-component/locality-tab/locality-business/locality-business.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__locality_tab_locality_audit_locality_audit_component__ = __webpack_require__("../../../../../src/app/locality-component/locality-tab/locality-audit/locality-audit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__locality_tab_locality_audit_audit_details_audit_details_component__ = __webpack_require__("../../../../../src/app/locality-component/locality-tab/locality-audit/audit-details/audit-details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__locality_tab_locality_audit_audit_findings_audit_findings_component__ = __webpack_require__("../../../../../src/app/locality-component/locality-tab/locality-audit/audit-findings/audit-findings.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__locality_tab_locality_audit_audit_recomendations_audit_recomendations_component__ = __webpack_require__("../../../../../src/app/locality-component/locality-tab/locality-audit/audit-recomendations/audit-recomendations.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__locality_tab_locality_legal_locality_legal_component__ = __webpack_require__("../../../../../src/app/locality-component/locality-tab/locality-legal/locality-legal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__locality_tab_locality_audit_audit_management_audit_management_component__ = __webpack_require__("../../../../../src/app/locality-component/locality-tab/locality-audit/audit-management/audit-management.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocalityComponentModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






















var LocalityComponentModule = (function () {
    function LocalityComponentModule() {
    }
    return LocalityComponentModule;
}());
LocalityComponentModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_5__navigation_component_navigation_component_module__["a" /* NavigationComponentModule */],
            __WEBPACK_IMPORTED_MODULE_6_angular2_fontawesome_angular2_fontawesome__["Angular2FontawesomeModule"],
            __WEBPACK_IMPORTED_MODULE_9__option_list_option_list_module__["a" /* OptionListModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3__app_routing__["a" /* LocalityComponentRoutingModule */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_7__locality_add_component_locality_add_component_component__["a" /* LocalityAddComponentComponent */], __WEBPACK_IMPORTED_MODULE_8__locality_tab_locality_tab_component__["a" /* LocalityTabComponent */], __WEBPACK_IMPORTED_MODULE_10__locality_component_component__["a" /* LocalityComponentComponent */], __WEBPACK_IMPORTED_MODULE_11__locality_tab_locality_details_locality_details_component__["a" /* LocalityDetailsComponent */], __WEBPACK_IMPORTED_MODULE_12__locality_tab_locality_solutions_locality_solutions_component__["a" /* LocalitySolutionsComponent */], __WEBPACK_IMPORTED_MODULE_13__locality_tab_locality_solutions_locality_solutions_link_locality_solutions_link_component__["a" /* LocalitySolutionsLinkComponent */], __WEBPACK_IMPORTED_MODULE_14__locality_tab_locality_solutionstablelink_locality_solutionstablelink_component__["a" /* LocalitySolutionstablelinkComponent */], __WEBPACK_IMPORTED_MODULE_15__locality_tab_locality_business_locality_business_component__["a" /* LocalityBusinessComponent */], __WEBPACK_IMPORTED_MODULE_16__locality_tab_locality_audit_locality_audit_component__["a" /* LocalityAuditComponent */], __WEBPACK_IMPORTED_MODULE_17__locality_tab_locality_audit_audit_details_audit_details_component__["a" /* AuditDetailsComponent */], __WEBPACK_IMPORTED_MODULE_18__locality_tab_locality_audit_audit_findings_audit_findings_component__["a" /* AuditFindingsComponent */], __WEBPACK_IMPORTED_MODULE_19__locality_tab_locality_audit_audit_recomendations_audit_recomendations_component__["a" /* AuditRecomendationsComponent */], __WEBPACK_IMPORTED_MODULE_20__locality_tab_locality_legal_locality_legal_component__["a" /* LocalityLegalComponent */], __WEBPACK_IMPORTED_MODULE_21__locality_tab_locality_audit_audit_management_audit_management_component__["a" /* AuditManagementComponent */]]
    })
], LocalityComponentModule);

//# sourceMappingURL=locality-component.module.js.map

/***/ }),

/***/ "../../../../../src/app/locality-component/locality-tab/locality-audit/audit-details/audit-details.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.pull-right {\n    float: right!important;\n     font-size: 20px;\n    margin-right: 20px;\n    color: #3A539B;\n  \n}\n#middle div.panel-heading {\n    color: #1E252D !important;\n    height: 51px;\n}\n.panel-default>.panel-heading {\n    padding: 15px 15px;\n    background: #fff;\n}\n\ni.fa {\n    text-decoration: none !important;\n    padding: 5px 4px;\n}\n\n.fa {\n    display: inline-block;\n    font: normal normal normal 14px/1 FontAwesome;\n    font-size: inherit;\n    text-rendering: auto;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n}\n\n.htag{\n\tmargin-top:30px;\n}\n\n.modal-header{\n\tbackground-color:#3A539B !important;\n\tcolor:white;\n}\n\n\n\n\n\n\n\n\n\n\n\nth{\n    font-weight: bold;\n    color: black;\n   \n    text-align: left;\n}\n\n\n\n#searchtable table, th, td {\n    border: 1px solid black;\n    border-collapse: collapse;\n}\n\n\n.table>tbody>tr>td, .table>tbody>tr>th, .table>tfoot>tr>td, .table>tfoot>tr>th, .table>thead>tr>td, .table>thead>tr>th {\n    padding: 8px;\n    line-height: 1.42857143;\n    vertical-align: top;\n  \n    color: black;\n}\n\n\n\n.table>caption+thead>tr:first-child>td, .table>caption+thead>tr:first-child>th, .table>colgroup+thead>tr:first-child>td, .table>colgroup+thead>tr:first-child>th, .table>thead:first-child>tr:first-child>td, .table>thead:first-child>tr:first-child>th {\n    border-top: 0;\n}\n\n\n\ntable {\n    border: 1px solid black;\n    width: 100%;\n    max-width: 100%;\n    margin-bottom: 20px;\n    \n}\ntr{\n\tbackground-color:#cecfd5;\n}\ntbody tr:nth-child(even) {\n  background-color:white;\n}\n\n\n.forms{\n  padding: 20px;\n  border-radius: 10px;\n  border: 1px solid transparent;\n  margin: 20px;\n  background-color: #EEEEEE;\n}\n.clear-right {\n\tclear:right;\n\toverflow: hidden;\n}\n.table-striped tbody tr:nth-of-type(odd) {\n    background-color: #EEEEEE !important;\n}\n\ntbody tr:nth-of-type(odd) {\n    background-color: #EEEEEE !important;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/locality-component/locality-tab/locality-audit/audit-details/audit-details.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"form-div\">\n\t<form class=\"former\">\n\t\t<div class=\"form-row\">\n\t\t\t<div class=\"form-group col-md-6\">\n\n\t\t\t\t<label for=\"inputState\">Definitive Source</label>\n\t\t\t\t<div class=\"asterisk\">*</div>\n\t\t\t\t<select id=\"modelSolution\" class=\"form-control\">\n\t\t\t\t\t<option selected></option>\n\t\t\t\t\t<option>---Select---</option>\n\t\t\t\t\t<option>VITA</option>\n\t\t\t\t</select>\n\t\t\t</div>\n\t\t\t<div class=\"form-group col-md-6\">\n\t\t\t\t<label for=\"lastName\">Type/Policy</label>\n\t\t\t\t<div class=\"asterisk\">*</div>\n\t\t\t\t<select id=\"modelSolution\" class=\"form-control\"\n\t\t\t\t(change)=\"selectBox($event.target.value)\">\n\t\t\t\t\t<option selected></option>\n\t\t\t\t\t<option></option>\n\t\t\t\t\t<option>IT Information Security Standard(SEC501-09.1)</option>\n\t\t\t\t</select>\n\t\t\t</div>\n\t\t\t<div class=\"form-group col-md-6\">\n\t\t\t\t<label for=\"lastName\">Audit type</label>\n\t\t\t\t<div class=\"asterisk\">*</div>\n\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"lastName\" value=\"Value\">\n\t\t\t</div>\n\n\t\t\t<div class=\"form-group col-md-6\">\n\t\t\t\t<label for=\"lastName\">Audit Date</label>\n\t\t\t\t<div class=\"asterisk\">*</div>\n\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"lastName\" value=\"Value\">\n\t\t\t</div>\n\n\n\n\n\n\t\t\t<div class=\"form-group col-md-6\">\n\t\t\t\t<label for=\"email\">Next Date</label>\n\t\t\t\t<div class=\"asterisk\">*</div>\n\t\t\t\t<input type=\"email\" class=\"form-control\" id=\"email\" value=\"Value\">\n\t\t\t</div>\n\t\t\t<div class=\"form-group col-md-6\">\n\n\t\t\t\t<label for=\"inputState\">Overall Status</label>\n\t\t\t\t<div class=\"asterisk\">*</div>\n\t\t\t\t<select id=\"modelSolution\" class=\"form-control\">\n\t\t\t\t\t<option selected></option>\n\t\t\t\t\t<option>Open</option>\n\t\t\t\t\t<option>Suspended</option>\n\t\t\t\t\t<option>Close</option>\n\t\t\t\t</select>\n\t\t\t</div>\n\t\t</div>\n\n\n\t</form>\n\t\n\t\n\t\n\t\n\t<ng-template #content let-c=\"close\" let-d=\"dismiss\">\n<div class=\"modal-header\">\n  <h4 class=\"modal-title\">Policy File</h4>\n \n  <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d()\">\n    <span aria-hidden=\"true\">&times;</span>\n  </button>\n</div>\n<div class=\"modal-body\">\n  <div>\n        <div class=\"col-sm-5 col-md-5 col-lg-5\">\n\t\t\t\t\t\t\t<label class=\"input\"> <input type=\"file\" file-model=\"attachment\" data-btn-text=\"Select a File\"  accept=\".pdf,.doc,.docx\">\n\n\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\n        </div>\n</div>\n<div class=\"modal-footer\">\n\n  <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"c()\">Close</button>\n   <button type=\"savebtn\" class=\"btn btn-outline-dark\">Compare</button>\n</div>\n</ng-template>\n\t\n\t<div class=\"show\" *ngIf=\"showSection\">\n\t<form class=\"former\">\n\t<div class=\"form-row\">\n\t\t\t<p><b>POLICIES</b></p>\n\t\t\t</div>\n\t\t\t<div class=\"panel-heading\">\n\n\t\t\t<span class=\"title elipsis pull-right\">\n\t\t\t\t\t\t\t\t\t\t\t\t<a title=\"Compare policies\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-exchange\" aria-hidden=\"true\" style=\"font-size: 24px;\"  (click)=\"open(content)\"></i></a>\n\t\t\t\t\t\t\t\t\t\t\t\t<a title=\"Send notifications\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa  fa-envelope-o\" aria-hidden=\"true\" style=\"font-size: 24px;\"></i></a>\n\t\t\t\t\t\t\t\t\t\t\t\t<a title=\"Download compared policies\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa  fa-download\" aria-hidden=\"true\" style=\"font-size: 24px;\"></i></a>\n\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t</div>\n\t\t<!-- <hr class=htag/> -->\n\t\t<table class=\"table table-striped table-hover table-bordere\">\n\t\t<thead>\n\t\t\t<tr>\n\n\t\t\t\t<th scope=\"col\">Control Number and Description</th>\n\t\t\t\t<th scope=\"col\">Policy Name</th>\n\t\t\t\t<th scope=\"col\">Source Value</th>\n\t\t\t\t<th scope=\"col\">Status</th>\n\t\t\t</tr>\n\t\t</thead>\n\t\t</table>\n\t\t\n\t\t<nav aria-label=\"...\">\n  <ul class=\"pagination\">\n    <li class=\"page-item disabled\">\n      <a class=\"page-link\" tabindex=\"-1\">Previous</a>\n    </li>\n    <li class=\"page-item\"><a class=\"page-link\">1</a></li>\n    <li class=\"page-item active\">\n      <a class=\"page-link\" >2 <span class=\"sr-only\">(current)</span></a>\n    </li>\n    <li class=\"page-item\"><a class=\"page-link\">3</a></li>\n    <li class=\"page-item\">\n      <a class=\"page-link\">Next</a>\n    </li>\n  </ul>\n</nav>\n\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\n\t\n\t</form>\n\t\n\t\t\t\t\t\t\t\t\t\t\t\n\t\t</div>\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\n\t\t"

/***/ }),

/***/ "../../../../../src/app/locality-component/locality-tab/locality-audit/audit-details/audit-details.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuditDetailsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuditDetailsComponent = (function () {
    function AuditDetailsComponent(modalService) {
        this.modalService = modalService;
        this.showSection = false;
    }
    AuditDetailsComponent.prototype.ngOnInit = function () {
    };
    AuditDetailsComponent.prototype.open = function (content) {
        this.modalService.open(content);
    };
    AuditDetailsComponent.prototype.selectBox = function (systemType) {
        this.showSection = true;
    };
    return AuditDetailsComponent;
}());
AuditDetailsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-audit-details',
        template: __webpack_require__("../../../../../src/app/locality-component/locality-tab/locality-audit/audit-details/audit-details.component.html"),
        styles: [__webpack_require__("../../../../../src/app/locality-component/locality-tab/locality-audit/audit-details/audit-details.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */]) === "function" && _a || Object])
], AuditDetailsComponent);

var _a;
//# sourceMappingURL=audit-details.component.js.map

/***/ }),

/***/ "../../../../../src/app/locality-component/locality-tab/locality-audit/audit-findings/audit-findings.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/locality-component/locality-tab/locality-audit/audit-findings/audit-findings.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"form-div\">    <form class=\"former\">    \n        <div class=\"form-row\">\n            <div class=\"form-group col-md-6\">\n\n                <label for=\"inputState\">Type of Finding</label>\n               \n                 <input type=\"text\" class=\"form-control\" id=\"lastName\" value=\"enter here\">\n            </div>\n            <div class=\"form-group col-md-6\">\n                <label for=\"lastName\">Overall risk level</label>\n               <input type=\"text\" class=\"form-control\" id=\"lastName\" value=\"enter here..\">\n            </div>\n            </div>\n            <hr/>\n             <div class=\"form-row\">\n            <div class=\"form-group col-md-6\">\n\n                <label for=\"inputState\">Description</label>\n               \n                 <textarea name=\"\" id=\"\" rows=\"10\" class=\"form-control\"></textarea> \n            </div>\n            \n            </div>\n            <hr/>\n             <div class=\"form-row\">\n            <div class=\"form-group col-md-6\">\n\n                <label for=\"inputState\">Comments</label>\n               \n                 <textarea name=\"\" id=\"\" rows=\"10\" class=\"form-control\"></textarea> \n            </div>\n            \n            </div>\n            <hr/>\n             <div class=\"form-row\">\n            <div class=\"form-group col-md-6\">\n\n                <label for=\"inputState\">Responsible Party</label>\n                <input type=\"text\" class=\"form-control\" id=\"lastName\" value=\"enter here..\">\n                \n            </div>\n            \n            </div>\n            </form>\n            </div>\n"

/***/ }),

/***/ "../../../../../src/app/locality-component/locality-tab/locality-audit/audit-findings/audit-findings.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuditFindingsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AuditFindingsComponent = (function () {
    function AuditFindingsComponent() {
    }
    AuditFindingsComponent.prototype.ngOnInit = function () {
    };
    return AuditFindingsComponent;
}());
AuditFindingsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-audit-findings',
        template: __webpack_require__("../../../../../src/app/locality-component/locality-tab/locality-audit/audit-findings/audit-findings.component.html"),
        styles: [__webpack_require__("../../../../../src/app/locality-component/locality-tab/locality-audit/audit-findings/audit-findings.component.css")]
    }),
    __metadata("design:paramtypes", [])
], AuditFindingsComponent);

//# sourceMappingURL=audit-findings.component.js.map

/***/ }),

/***/ "../../../../../src/app/locality-component/locality-tab/locality-audit/audit-management/audit-management.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".pull-right {\n    float: right!important;\n     font-size: 20px;\n    margin-right: 20px;\n   \n    color: #3A539B;\n  \n}\n#middle div.panel-heading {\n    color: #1E252D !important;\n    height: 51px;\n    \n}\n\n.panel-heading{\n\t\n}\n.panel-default>.panel-heading {\n    padding: 15px 15px;\n    background: #fff;\n}\n\ni.fa {\n    text-decoration: none !important;\n    padding: 5px 4px;\n}\n\n.fa {\n    display: inline-block;\n    font: normal normal normal 14px/1 FontAwesome;\n    font-size: inherit;\n    text-rendering: auto;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n}\n.htag{\n\tmargin-top:50px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/locality-component/locality-tab/locality-audit/audit-management/audit-management.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n</div>\n \n<div class=\"panel-heading\">\n\t\t\t\t\t\t      \t<span class=\" title elipsis pull-right\">\n\t\t\t\t\t\t      \t\t<a title=\"Application audit history\">\n\t\t\t\t\t\t\t\t\t<i class=\"fa fa-history\" aria-hidden=\"true\" style=\"font-size: 24px;\"></i></a>\n\t\t\t\t\t\t      \t</span>\n\t\t\t\t\t\t      \t\n\t\t\t\t\t\t      \t<span class=\" title elipsis pull-right\">\n\t\t\t\t\t\t      \t\t\n\t\t\t\t\t\t\t\t\t<a data-ng-click=\"close()\" title=\"Change to view mode. This reverts the changes\">\n\t\t\t\t\t\t\t\t\t<i class=\"fa fa-times\" aria-hidden=\"true\" style=\"font-size: 24px;\"></i> </a>\n\t\t\t\t\t\t\t\t\t<a data-ng-click=\"goBack()\" title=\"Go back to audit section.\">\n\t\t\t\t\t\t\t\t\t<i class=\"fa fa-arrow-circle-o-left\" aria-hidden=\"true\" style=\"font-size: 24px;\"></i> </a>\n\t\t\t\t\t\t      \t</span>\n\t\t\t\t\t\t      \t\n\t\t\t\t\t\t      \t\n\t\t\t\t\t\t      </div>\n\t\t\t\t\t\t     \n<div class=\"form-div\">    <form class=\"former\">    \n        <div class=\"form-row\">\n            <div class=\"form-group col-md-6\">\n\n                <label for=\"inputState\">Response by</label>\n               \n                 <input type=\"text\" class=\"form-control\" id=\"lastName\" value=\"enter here\">\n            </div>\n            <div class=\"form-group col-md-6\">\n                <label for=\"lastName\">Response date</label>\n               <input type=\"text\" class=\"form-control\" id=\"lastName\" value=\"mm/dd/yyyy\">\n            </div>\n            </div>\n            </form>\n            </div>\n\n"

/***/ }),

/***/ "../../../../../src/app/locality-component/locality-tab/locality-audit/audit-management/audit-management.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuditManagementComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AuditManagementComponent = (function () {
    function AuditManagementComponent() {
    }
    AuditManagementComponent.prototype.ngOnInit = function () {
    };
    return AuditManagementComponent;
}());
AuditManagementComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-audit-management',
        template: __webpack_require__("../../../../../src/app/locality-component/locality-tab/locality-audit/audit-management/audit-management.component.html"),
        styles: [__webpack_require__("../../../../../src/app/locality-component/locality-tab/locality-audit/audit-management/audit-management.component.css")]
    }),
    __metadata("design:paramtypes", [])
], AuditManagementComponent);

//# sourceMappingURL=audit-management.component.js.map

/***/ }),

/***/ "../../../../../src/app/locality-component/locality-tab/locality-audit/audit-recomendations/audit-recomendations.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/locality-component/locality-tab/locality-audit/audit-recomendations/audit-recomendations.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"form-div\">    <form class=\"former\">    \n        <div class=\"form-row\">\n            <div class=\"form-group col-md-6\">\n\n                <label for=\"inputState\">Recomended by</label>\n               \n                 <input type=\"text\" class=\"form-control\" id=\"lastName\" value=\"enter here\">\n            </div>\n            <div class=\"form-group col-md-6\">\n                <label for=\"lastName\">Estimated completion date</label>\n               <input type=\"text\" class=\"form-control\" id=\"lastName\" value=\"mm/dd/yyyy\">\n            </div>\n            </div>\n            </form>\n            </div>\n"

/***/ }),

/***/ "../../../../../src/app/locality-component/locality-tab/locality-audit/audit-recomendations/audit-recomendations.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuditRecomendationsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AuditRecomendationsComponent = (function () {
    function AuditRecomendationsComponent() {
    }
    AuditRecomendationsComponent.prototype.ngOnInit = function () {
    };
    return AuditRecomendationsComponent;
}());
AuditRecomendationsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-audit-recomendations',
        template: __webpack_require__("../../../../../src/app/locality-component/locality-tab/locality-audit/audit-recomendations/audit-recomendations.component.html"),
        styles: [__webpack_require__("../../../../../src/app/locality-component/locality-tab/locality-audit/audit-recomendations/audit-recomendations.component.css")]
    }),
    __metadata("design:paramtypes", [])
], AuditRecomendationsComponent);

//# sourceMappingURL=audit-recomendations.component.js.map

/***/ }),

/***/ "../../../../../src/app/locality-component/locality-tab/locality-audit/locality-audit.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "i.fa {\n    text-decoration: none !important;\n    padding: 5px 4px;\n}\n\n\n.fa {\n    display: inline-block;\n    font: normal normal normal 14px/1 FontAwesome;\n    font-size: inherit;\n    text-rendering: auto;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/locality-component/locality-tab/locality-audit/locality-audit.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"form-div\">\n    <form class=\"former\">\n    \n        <div class=\"form-row\">\n            <div class=\"form-group col-md-6\">\n\n                <label for=\"inputState\">Acronym</label>\n                <div class=\"asterisk\">*</div>\n               <input type=\"text\" class=\"form-control\" id=\"lastName\" value=\"enter here\">\n            </div>\n            <div class=\"form-group col-md-6\">\n                <label for=\"lastName\">Last updated by</label>\n                \n                <input type=\"text\" class=\"form-control\" id=\"lastName\" value=\"enter here\">\n            </div>\n        </div>\n\n\n\n        <div class=\"form-row\">\n             <div class=\"form-group col-md-6\">\n                <label for=\"lastName\">Name</label>\n                <div class=\"asterisk\">*</div>\n                <input type=\"text\" class=\"form-control\" id=\"lastName\" value=\"enter here\">\n            </div>\n            <div class=\"form-group col-md-6\">\n                <label for=\"email\">Updated at</label>\n                    <input type=\"email\" class=\"form-control\" id=\"email\" value=\"enter here\">\n            </div>\n        </div>\n        </form>\n        \n        <div class=\"form-div\">\n    <div class=\"head\">\n        <ul class=\"nav nav-tabs\">\n            <li class=\"nav-item\">\n                <a class=\"nav-link\" routerLink=\"/locality/option/Audit\">Details</a>\n            </li>\n            <li class=\"nav-item\">\n                <a class=\"nav-link hover\" routerLink=\"/locality/option/Audit/find\">Findings</a>\n            </li>\n            <li class=\"nav-item\">\n                <a class=\"nav-link \" routerLink=\"/locality/option/Audit/recomendation\">Recomendations</a>\n            </li>\n            <li class=\"nav-item\">\n                <a class=\"nav-link \" routerLink=\"/locality/option/Audit/management\">Management Response</a>\n            </li>\n            <li class=\"nav-item\">\n                <a class=\"nav-link \" routerLink=\"/locality/option/form2\">Action Plan</a>\n            </li>\n            \n            <li class=\"nav-item\">\n                <a class=\"nav-link \" routerLink=\"/locality/option/form2\">Business Risk</a>\n            </li>\n             <li class=\"nav-item\">\n                <a class=\"nav-link \" routerLink=\"/locality/option/form2\">Security Risk</a>\n            </li>\n             <li class=\"nav-item\">\n                <a class=\"nav-link \" routerLink=\"/locality/option/form2\">Budget</a>\n            </li>\n             <li class=\"nav-item\">\n                <a class=\"nav-link \" routerLink=\"/locality/option/form2\">Attachments</a>\n            </li>\n            <li class=\"nav-item\">\n                <a class=\"nav-link \" routerLink=\"/locality/option/form2\">Lessons Learned</a>\n            </li>\n        </ul>\n    </div>\n   \n</div>\n"

/***/ }),

/***/ "../../../../../src/app/locality-component/locality-tab/locality-audit/locality-audit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocalityAuditComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LocalityAuditComponent = (function () {
    function LocalityAuditComponent() {
    }
    LocalityAuditComponent.prototype.ngOnInit = function () {
    };
    return LocalityAuditComponent;
}());
LocalityAuditComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-locality-audit',
        template: __webpack_require__("../../../../../src/app/locality-component/locality-tab/locality-audit/locality-audit.component.html"),
        styles: [__webpack_require__("../../../../../src/app/locality-component/locality-tab/locality-audit/locality-audit.component.css")]
    }),
    __metadata("design:paramtypes", [])
], LocalityAuditComponent);

//# sourceMappingURL=locality-audit.component.js.map

/***/ }),

/***/ "../../../../../src/app/locality-component/locality-tab/locality-business/locality-business.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".form{\n  padding: 20px;\n  border-radius: 10px;\n  border: 1px solid transparent;\n  margin: 20px;\n  background-color: #EEEEEE;\n}\ni.fa {\n    text-decoration: none !important;\n    padding: 5px 4px;\n}\n.fa {\n    display: inline-block;\n    font: normal normal normal 14px/1 FontAwesome;\n    font-size: inherit;\n    text-rendering: auto;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n}\na {\n    color: #337ab7;\n    text-decoration: none;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/locality-component/locality-tab/locality-business/locality-business.component.html":
/***/ (function(module, exports) {

module.exports = "<form class=\"form\">\n<div class=\"form-row\">\n             <div class=\"form-group col-md-6\">\n                <label for=\"lastName\">Acronym</label>\n                 <div class=\"asterisk\">*</div>\n               <input type=\"text\" class=\"form-control\" id=\"lastName\" value=\"Value\">\n            </div>\n             <div class=\"form-group col-md-6\">\n                <label for=\"lastName\">Last updated by</label>\n                 <input type=\"text\" class=\"form-control\" id=\"lastName\" value=\"Value\">\n            </div>\n             </div>\n             \n             <div class=\"form-row\">\n             <div class=\"form-group col-md-6\">\n                <label for=\"lastName\">Name</label>\n                 <div class=\"asterisk\">*</div>\n               <input type=\"text\" class=\"form-control\" id=\"lastName\" value=\"Value\">\n            </div>\n             <div class=\"form-group col-md-6\">\n                <label for=\"lastName\">Updated at</label>\n               \n               <input type=\"text\" class=\"form-control\" id=\"lastName\" value=\"Value\">\n            </div>\n             </div>\n             <hr/>\n              \n        <p><b>Resources</b></p>\n        <div class=\"form-row\">\n            <div class=\"form-group col-md-6\">\n\n                <label for=\"inputState\">Business Owner</label>\n                \n               <select id=\"modelSolution\" class=\"form-control\">\n            <option selected></option>\n            <option>---Select---</option>\n              <option>Add new name</option>\n          </select>\n            </div>\n            <div class=\"form-group col-md-6\">\n                <label for=\"lastName\">Project Manager</label>\n                 <select id=\"modelSolution\" class=\"form-control\">\n            <option selected></option>\n            <option>---Select---</option>\n              <option>Add new name</option>\n          </select>\n            </div>\n        </div>\n\n\n\n        <div class=\"form-row\">\n             <div class=\"form-group col-md-6\">\n                <label for=\"lastName\">Data Owner</label>\n                <select id=\"modelSolution\" class=\"form-control\">\n            <option selected></option>\n            <option>---Select---</option>\n              <option>Add new name</option>\n          </select>\n            </div>\n            <div class=\"form-group col-md-6\">\n                <label for=\"email\">Information Security Officer</label>\n                  <select id=\"modelSolution\" class=\"form-control\">\n            <option selected></option>\n            <option>---Select---</option>\n              <option>Add new name</option>\n          </select>   \n            </div>\n        </div>\n          <div class=\"form-row\">\n             <div class=\"form-group col-md-6\">\n                <label for=\"lastName\">Hosting System Site Owner</label>\n                <select id=\"modelSolution\" class=\"form-control\">\n            <option selected></option>\n            <option>---Select---</option>\n              <option>Add new name</option>\n          </select>\n            </div>\n            </div>\n    \n             \n            <p><b>Description</b></p>\n             <div></div>\n             <hr/>\n              <p><b>Fiscal and Business Vision</b></p>\n             <div class=\"form-row\">\n             <div class=\"form-group col-md-6\">\n                <label for=\"lastName\">Fiscal Year</label>\n                 <input type=\"text\" class=\"form-control\" id=\"vendorName\" placeholder=\"Year\" formControlName=\"name\">\n                 </div>\n                 </div>\n                 <p><b>Business Owner Vision</b></p>\n                 <div class=\"form-row\">\n             <div class=\"form-group col-md-6\">\n                <label for=\"lastName\">Fiscal Year</label>\n                 <input type=\"text\" class=\"form-control\" id=\"vendorName\" placeholder=\"Year\" formControlName=\"name\">\n                 </div>\n                 </div>\n                  <p><b>Business Owner Vision</b></p>\n                  <div class=\"form-row\">\n             <div class=\"form-group col-md-6\">\n                <label for=\"lastName\">Fiscal Year</label>\n                 <input type=\"text\" class=\"form-control\" id=\"vendorName\" placeholder=\"Year\" formControlName=\"name\">\n                 </div>\n                 </div>\n                 <hr/>\n                  <p><b>Key Decisions</b></p>\n                  <div></div>\n                  <hr/>\n                   <p><b>Level of Effort</b></p>\n                   <div></div>\n                   <div class=\"input-group\"> \n\t\t\t\t\t\t\t\t\t        <span class=\"input-group-addon\">$</span>\n\t\t\t\t\t\t\t\t\t        <input type=\"number\">\n\t\t\t\t\t\t\t\t\t\t</div>\n                   <hr/>\n                   <p><b>Documents</b></p>\n                   <a ng-click=\"openAttachDocument('business')\" title=\"Upload document\"><i class=\"fa fa-upload\"></i> </a>\n             \n             \n             \n             \n             \n</form>"

/***/ }),

/***/ "../../../../../src/app/locality-component/locality-tab/locality-business/locality-business.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocalityBusinessComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LocalityBusinessComponent = (function () {
    function LocalityBusinessComponent() {
    }
    LocalityBusinessComponent.prototype.ngOnInit = function () {
    };
    return LocalityBusinessComponent;
}());
LocalityBusinessComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-locality-business',
        template: __webpack_require__("../../../../../src/app/locality-component/locality-tab/locality-business/locality-business.component.html"),
        styles: [__webpack_require__("../../../../../src/app/locality-component/locality-tab/locality-business/locality-business.component.css")]
    }),
    __metadata("design:paramtypes", [])
], LocalityBusinessComponent);

//# sourceMappingURL=locality-business.component.js.map

/***/ }),

/***/ "../../../../../src/app/locality-component/locality-tab/locality-details/locality-details.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.forms{\n    padding: 20px;\n    border-radius: 10px;\n    border: 1px solid transparent;\n    margin: 20px;\n    background-color: #EEEEEE;\n    overflow: hidden;\n}\n\n\n.clear-right {\n\tclear:right;\n\toverflow: hidden;\n}\n\ntable {\n    border: 1px solid black;\n    width: 100%;\n    max-width: 100%;\n    margin-bottom: 20px;\n    \n}\n\ntbody tr:nth-of-type(odd) {\n    background-color: #EEEEEE !important;\n}\ntbody tr:nth-of-type(even) {\n    background-color: #ffffff !important;\n}\n\n\n.page-description{\n    text-align: center;\n    /*padding: 2%;*/\n    margin-top: 0px;\n    margin-bottom: 10px;\n}\n\n@keyframes slideInFromCenter {\n  0% {\n    transform: scale(0,1);\n  }\n  100% {\n    transform: scale(1,1);\n  }\n}\n\n.after-heading{\n\twidth: 10%;\n\tmargin: auto;\n\tbackground-color: #3A539B;\n\tanimation: 1s ease-out 0s 1 slideInFromCenter;\n}\n\n/*.after-heading:hover{\n\ttransform: scale(1, 1);\n\ttransition: right 0.5s;\n}*/\n\n.tip{\n    width: 100%;\n}\n\n.tip-text{\n    background-color: #F8FFAE;\n    padding: 5px;\n    border-radius: 10px;\n    margin-left: 5px;\n    color:  #3A539B;\n}\n\n.light-bulb{\n    margin-right: 3px;\n    padding: 2px;\n    margin-left: 3px;\n    color:  #3A539B;\n}\n\ntable {\n    border: 1px solid black;\n    width: 100%;\n    max-width: 100%;\n    margin-bottom: 20px;\n    \n}\n\n\n\ntr{\n\tbackground-color:#cecfd5;\n}\n\n\n\n\n\n\nth{\n    font-weight: bold;\n    color: black;\n   \n    text-align: left;\n}\n\n\n\n#searchtable table, th, td {\n    border: 1px solid black;\n    border-collapse: collapse;\n}\n\n\n.table>tbody>tr>td, .table>tbody>tr>th, .table>tfoot>tr>td, .table>tfoot>tr>th, .table>thead>tr>td, .table>thead>tr>th {\n    padding: 8px;\n    line-height: 1.42857143;\n    vertical-align: top;\n  \n    color: black;\n}\n\n\n\n.table>caption+thead>tr:first-child>td, .table>caption+thead>tr:first-child>th, .table>colgroup+thead>tr:first-child>td, .table>colgroup+thead>tr:first-child>th, .table>thead:first-child>tr:first-child>td, .table>thead:first-child>tr:first-child>th {\n    border-top: 0;\n}\n\n\n\n\n\n.asterisk{\n\tdisplay: inline;\n\tcolor: red;\n\tmargin-left: 2px;\n}\n\n.btn{\n\tmargin-left: 3px;\n\tbackground-color: #3A539B;\n\tborder-color: #3A539B;\n}\n\n/*hr{\n\tmargin: 30px -20px 20px;\n    border: 0;\n    border-top: 1px solid black;\n}*/", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/locality-component/locality-tab/locality-details/locality-details.component.html":
/***/ (function(module, exports) {

module.exports = "<form class=\"former clear-right\" (ngSubmit)=\"createSolution()\" enctype=\"multipart/form-data\">\n\n\t\n\n\t\t<div class=\"tip\">\n\t\t\t<p class=\"tip-text\">\n\t\t\t\t<fa class=\"light-bulb\" [name]=\"'lightbulb-o'\"></fa>\n\t\t\t\tTip:\n\t\t\t</p>\n\t\t</div>\n\t\t<p>\n\t\t\t<b>General Information</b>\n\t\t</p>\n\t\t<div class=\"form-row\">\n\t\t\t<div class=\"form-group col-md-6\">\n\n\t\t\t\t<label for=\"inputState\">Last Updated by</label>\n\t\t\t\t<div class=\"asterisk\">*</div>\n\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"lastName\" value=\"enter here\" >\n\t\t\t</div>\n\t\t\t<div class=\"form-group col-md-6\">\n\t\t\t\t<label for=\"lastName\">Updated at</label>\n\t\t\t\t<div class=\"asterisk\">*</div>\n\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"lastName\" value=\"enter here\">\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"form-row\">\n\t\t\t<div class=\"form-group col-md-6\">\n\n\t\t\t\t<label for=\"inputState\">Locality Name</label>\n\t\t\t\t<div class=\"asterisk\">*</div>\n\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"lastName\" value=\"enter here\">\n\t\t\t</div>\n\t\t\t<div class=\"form-group col-md-6\">\n\n\t\t\t\t<label for=\"inputState\">Locality Code</label>\n\t\t\t\t<div class=\"asterisk\">*</div>\n\t\t\t\t<input type=\"text\" class=\"form-control\" name=\"localityCd\" [(ngModel)] = \"locality.localityCd\">\n\t\t\t</div>\n\n\t\t</div>\n\t\t<div class=\"form-row\">\n\n\t\t\t<div class=\"form-group col-md-6\">\n\t\t\t\t<label for=\"lastName\">FIPS Code</label> <input type=\"text\"\n\t\t\t\t\tclass=\"form-control\" name=\"fipsCd\" [(ngModel)] = \"locality.fipsCd\">\n\n\t\t\t</div>\n\t\t</div>\n\t\n\t\t<p>\n\t\t\t<b>Contact Information</b>\n\t\t</p>\n\t\t<div class=\"form-row\">\n\t\t\t<div class=\"form-group col-md-6\">\n\n\t\t\t\t<label for=\"inputState\">First Name</label>\n\t\t\t\t<div class=\"asterisk\">*</div>\n\t\t\t\t<input type=\"text\" class=\"form-control\" name=\"firstName\" [(ngModel)] = \"locality.firstName\">\n\t\t\t</div>\n\t\t\t<div class=\"form-group col-md-6\">\n\t\t\t\t<label for=\"lastName\">Last Name</label>\n\t\t\t\t<div class=\"asterisk\">*</div>\n\t\t\t\t<input type=\"text\" class=\"form-control\" name=\"lastName\" [(ngModel)] = \"locality.lastName\">\n\t\t\t</div>\n\t\t</div>\n\n\n\n\t\t<div class=\"form-row\">\n\t\t\t<div class=\"form-group col-md-6\">\n\t\t\t\t<label for=\"lastName\">Email Id</label>\n\t\t\t\t<div class=\"asterisk\">*</div>\n\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"lastName\" value=\"enter here\">\n\t\t\t</div>\n\t\t\t<div class=\"form-group col-md-6\">\n\n\t\t\t\t<label for=\"email\">Phone No</label>\n\t\t\t\t<div class=\"asterisk\">*</div>\n\t\t\t\t<input type=\"email\" class=\"form-control\" id=\"email\" value=\"enter here\">\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"form-row\">\n\t\t\t<div class=\"form-group col-md-6\">\n\t\t\t\t<label for=\"lastName\">Website Address</label>\n\t\t\t\t<div class=\"asterisk\">*</div>\n\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"lastName\" value=\"enter here\">\n\t\t\t</div>\n\t\t\t<div class=\"form-group col-md-6\">\n\t\t\t\t<label for=\"email\">Veris Id</label>\n\t\t\t\t<div class=\"asterisk\">*</div>\n\t\t\t\t<input type=\"email\" class=\"form-control\" id=\"email\" value=\"enter here\">\n\t\t\t</div>\n\n\t\t</div>\n\t\t<hr />\n\t\t<p>\n\t\t\t<b>Other Information</b>\n\t\t</p>\n\t\t<div class=\"form-row\">\n\t\t\t<div class=\"form-group col-md-6\">\n\t\t\t\t<label for=\"lastName\">Central Absentee Perceived(CAP)</label>\n\t\t\t\t<div class=\"asterisk\">*</div>\n\t\t\t\t<input type=\"radio\" name=\"yes\" value=\"value\">Yes<br>\n\t\t\t\t&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input\n\t\t\t\t\ttype=\"radio\" name=\"no\" value=\"male\"> No\n\t\t\t</div>\n\t\t\t<div class=\"form-group col-md-6\">\n\t\t\t\t<label for=\"email\">Bail out</label>\n\t\t\t\t<div class=\"asterisk\">*</div>\n\t\t\t\t<input type=\"radio\" name=\"yes\" value=\"value\">Yes<br>\n\t\t\t\t&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input\n\t\t\t\t\ttype=\"radio\" name=\"no\" value=\"male\"> No\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"form-row\">\n\t\t\t<div class=\"form-group col-md-6\">\n\t\t\t\t<label for=\"lastName\">Automate COMET/Penality</label>\n\t\t\t\t<div class=\"asterisk\">*</div>\n\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"lastName\" value=\"enter here\">\n\t\t\t</div>\n\n\t\t</div>\n\t\t<hr />\n\n\t\t<div class=\"form-row\">\n\n\t\t\t<div class=\"form-group col-md-6\">\n\n\t\t\t\t<p>\n\t\t\t\t\t<b>Hours of operation</b>\n\t\t\t\t</p>\n\t\t\t\t\n\t\t\t\t <table class=\"table table-striped table-hover table-bordere\">\n        <thead>\n           <tr>\n\t\t\t\t\t\t\t<th scope=\"col\">Day</th>\n\t\t\t\t\t\t\t<th scope=\"col\">Time</th>\n\t\t\t\t\t\t</tr>\n        </thead>\n       <tbody>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<th>Monday</th>\n\t\t\t\t\t\t\t<td><label for=\"appt-time\">Time</label> <input type=\"time\"\n\t\t\t\t\t\t\t\tid=\"appt-time\" name=\"appt-time\" min=\"9:00\" max=\"18:00\" required\n\t\t\t\t\t\t\t\t(input)=\"time = $event.target.value\" /> To <label\n\t\t\t\t\t\t\t\tfor=\"appt-time\"></label> <input type=\"time\" id=\"appt-time\"\n\t\t\t\t\t\t\t\tname=\"appt-time\" min=\"9:00\" max=\"18:00\" required\n\t\t\t\t\t\t\t\t(input)=\"time = $event.target.value\" /></td>\n\n\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<th>Tuesday</th>\n\t\t\t\t\t\t\t<td><label for=\"appt-time\">Time</label> <input type=\"time\"\n\t\t\t\t\t\t\t\tid=\"appt-time\" name=\"appt-time\" min=\"9:00\" max=\"18:00\" required\n\t\t\t\t\t\t\t\t(input)=\"time = $event.target.value\" /> To <label\n\t\t\t\t\t\t\t\tfor=\"appt-time\"></label> <input type=\"time\" id=\"appt-time\"\n\t\t\t\t\t\t\t\tname=\"appt-time\" min=\"9:00\" max=\"18:00\" required\n\t\t\t\t\t\t\t\t(input)=\"time = $event.target.value\" /></td>\n\n\n\n\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<th>Wednesday</th>\n\t\t\t\t\t\t\t<td><label for=\"appt-time\">Time</label> <input type=\"time\"\n\t\t\t\t\t\t\t\tid=\"appt-time\" name=\"appt-time\" min=\"9:00\" max=\"18:00\" required\n\t\t\t\t\t\t\t\t(input)=\"time = $event.target.value\" /> To <label\n\t\t\t\t\t\t\t\tfor=\"appt-time\"></label> <input type=\"time\" id=\"appt-time\"\n\t\t\t\t\t\t\t\tname=\"appt-time\" min=\"9:00\" max=\"18:00\" required\n\t\t\t\t\t\t\t\t(input)=\"time = $event.target.value\" /></td>\n\n\n\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<th>Thursday</th>\n\t\t\t\t\t\t\t<td><label for=\"appt-time\">Time</label> <input type=\"time\"\n\t\t\t\t\t\t\t\tid=\"appt-time\" name=\"appt-time\" min=\"9:00\" max=\"18:00\" required\n\t\t\t\t\t\t\t\t(input)=\"time = $event.target.value\" /> To <label\n\t\t\t\t\t\t\t\tfor=\"appt-time\"></label> <input type=\"time\" id=\"appt-time\"\n\t\t\t\t\t\t\t\tname=\"appt-time\" min=\"9:00\" max=\"18:00\" required\n\t\t\t\t\t\t\t\t(input)=\"time = $event.target.value\" /></td>\n\n\n\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<th>Friday</th>\n\t\t\t\t\t\t\t<td><label for=\"appt-time\">Time</label> <input type=\"time\"\n\t\t\t\t\t\t\t\tid=\"appt-time\" name=\"appt-time\" min=\"9:00\" max=\"18:00\" required\n\t\t\t\t\t\t\t\t(input)=\"time = $event.target.value\" /> To <label\n\t\t\t\t\t\t\t\tfor=\"appt-time\"></label> <input type=\"time\" id=\"appt-time\"\n\t\t\t\t\t\t\t\tname=\"appt-time\" min=\"9:00\" max=\"18:00\" required\n\t\t\t\t\t\t\t\t(input)=\"time = $event.target.value\" /></td>\n\n\n\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<th>Saturday</th>\n\t\t\t\t\t\t\t<td><label for=\"appt-time\">Time</label> <input type=\"time\"\n\t\t\t\t\t\t\t\tid=\"appt-time\" name=\"appt-time\" min=\"9:00\" max=\"18:00\" required\n\t\t\t\t\t\t\t\t(input)=\"time = $event.target.value\" /> To <label\n\t\t\t\t\t\t\t\tfor=\"appt-time\"></label> <input type=\"time\" id=\"appt-time\"\n\t\t\t\t\t\t\t\tname=\"appt-time\" min=\"9:00\" max=\"18:00\" required\n\t\t\t\t\t\t\t\t(input)=\"time = $event.target.value\" /></td>\n\n\n\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<th>Sunday</th>\n\t\t\t\t\t\t\t<td><label for=\"appt-time\">Time</label> <input type=\"time\"\n\t\t\t\t\t\t\t\tid=\"appt-time\" name=\"appt-time\" min=\"9:00\" max=\"18:00\" required\n\t\t\t\t\t\t\t\t(input)=\"time = $event.target.value\" /> To <label\n\t\t\t\t\t\t\t\tfor=\"appt-time\"></label> <input type=\"time\" id=\"appt-time\"\n\t\t\t\t\t\t\t\tname=\"appt-time\" min=\"9:00\" max=\"18:00\" required\n\t\t\t\t\t\t\t\t(input)=\"time = $event.target.value\" /></td>\n\n\n\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</tbody>\n    </table>\n\t\t\t\t<!-- <button type=\"submit\" class=\"btn btn-primary\" (click)=\"setTime()\">Submit</button> -->\n\t\t\t</div>\n\t\t</div>\n\n\n\t\t<hr />\n\t\t<p>\n\t\t\t<b>Region</b>\n\t\t</p>\n\t\t<div class=\"form-row\">\n\n\t\t\t<div class=\"form-group col-md-6\">\n\n\n\t\t\t\t<input type=\"radio\" name=\"yes\" value=\"value\">VEBA region<br>\n\t\t\t\t<input type=\"radio\" name=\"no\" value=\"male\">VRAV region\n\t\t\t</div>\n\n\n\n\t\t</div>\n\t\t<hr />\n\t\t<p>\n\t\t\t<b>PollBook</b>\n\t\t</p>\n\t\t<div class=\"form-row\">\n\t\t\t<div class=\"form-group col-md-6\">\n\t\t\t\t<label for=\"lastName\">Paper PollBook</label>\n\t\t\t\t<div class=\"asterisk\">*</div>\n\t\t\t\t<input type=\"radio\" name=\"yes\" value=\"value\">Yes<br>\n\t\t\t\t&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input\n\t\t\t\t\ttype=\"radio\" name=\"no\" value=\"male\"> No\n\t\t\t</div>\n\t\t\t<div class=\"form-group col-md-6\">\n\t\t\t\t<label for=\"email\">Electronic PollBook</label>\n\t\t\t\t<div class=\"asterisk\">*</div>\n\t\t\t\t<input type=\"radio\" name=\"yes\" value=\"value\">Yes<br>\n\t\t\t\t&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input\n\t\t\t\t\ttype=\"radio\" name=\"no\" value=\"male\"> No\n\t\t\t</div>\n</div>\n\n\t\t\t<hr />\n\t\t\n         <p><b>Notes</b></p>\n         <textarea name=\"\" id=\"\" rows=\"10\" class=\"form-control\"></textarea>\n         <div class=\"buttons\">\n      \n        \t<button type=\"submit\" class=\"submit btn btn-primary\" >Submit</button>\n        \t<button type=\"cancel\" class=\"cancel btn btn-primary\">Cancel</button>\n        </div>\n\t\t\n\n\n\t</form>"

/***/ }),

/***/ "../../../../../src/app/locality-component/locality-tab/locality-details/locality-details.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__data_model__ = __webpack_require__("../../../../../src/app/data_model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_config__ = __webpack_require__("../../../../../src/app/app.config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__data_model_locality__ = __webpack_require__("../../../../../src/app/data_model_locality.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__apiservice_service__ = __webpack_require__("../../../../../src/app/apiservice.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocalityDetailsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var LocalityDetailsComponent = (function () {
    //  public systemTyp:any
    function LocalityDetailsComponent(activatedRoute, _apiservice, fb, http, _location) {
        this.activatedRoute = activatedRoute;
        this._apiservice = _apiservice;
        this.fb = fb;
        this.http = http;
        this._location = _location;
        this.files = [];
        this.solution = new __WEBPACK_IMPORTED_MODULE_0__data_model__["a" /* Solution */]();
        this.locality = new __WEBPACK_IMPORTED_MODULE_5__data_model_locality__["a" /* Locality */]();
        this.solution.systemTypeDTO = new __WEBPACK_IMPORTED_MODULE_0__data_model__["b" /* SystemType */]();
        this.solution.hostingTypeDTO = new __WEBPACK_IMPORTED_MODULE_0__data_model__["c" /* HostingType */]();
        this.solution.labVendorsDTO = new __WEBPACK_IMPORTED_MODULE_0__data_model__["d" /* LabVendors */]();
        this.solution.vendor = new __WEBPACK_IMPORTED_MODULE_0__data_model__["e" /* Vendor */]();
        this.solution.certDocDTOs = [];
        this.files = [];
        this.editSolution = this.fb.group({
            solutionId: 0,
            name: ['', __WEBPACK_IMPORTED_MODULE_7__angular_forms__["f" /* Validators */].required],
            versionNumber: ['', __WEBPACK_IMPORTED_MODULE_7__angular_forms__["f" /* Validators */].required],
            solutionTypeName: ['', __WEBPACK_IMPORTED_MODULE_7__angular_forms__["f" /* Validators */].required],
            labVendorId: [0, __WEBPACK_IMPORTED_MODULE_7__angular_forms__["f" /* Validators */].required],
            solutionType: 0,
            vendorId: 0,
            systemTypeTry: ['', __WEBPACK_IMPORTED_MODULE_7__angular_forms__["f" /* Validators */].required],
            systemTypeTry1: ['', __WEBPACK_IMPORTED_MODULE_7__angular_forms__["f" /* Validators */].required],
            systemType: this.fb.group({
                name: '',
                systemTypeId: 0
            }),
            hostingType: this.fb.group({
                name: '',
                hostingTypeId: '',
            }),
            labVendors: this.fb.group({
                name: '',
                firstName: '',
                lastName: '',
                middleName: '',
                suffix: '',
                emailId: '',
                streetName: '',
                city: '',
                state: '',
                zipcode: '',
                phoneNumber: '',
            }),
            vendor: this.fb.group({
                vendorId: 0,
                name: '',
                createdBy: '',
                vendorAddress: this.fb.group({
                    addressId: 0,
                    streetName: '',
                    city: '',
                    state: '',
                    zipcode: '',
                }),
                vendorContact: this.fb.group({
                    contactId: 0,
                    firstName: '',
                    lastName: '',
                    middleName: '',
                    suffix: '',
                    emailId: '',
                    phoneNumber: '',
                }),
            }),
        });
    }
    LocalityDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.solution.solutionId = params['id'];
            _this.editSolution.disable();
            //if (params['id'] != null)
            //{
            _this.onDisplaySolution();
            //}
            _this.getSolutionsOnload();
        });
    };
    LocalityDetailsComponent.prototype.createCertDTO = function (fileInput, section) {
        this.certDocDTO = new __WEBPACK_IMPORTED_MODULE_0__data_model__["f" /* CertDocDTO */]();
        this.certDocDTO.fileName = fileInput.target.files[0].name;
        this.certDocDTO.section = section;
        console.log(fileInput.target.files[0]);
        this.files.push(fileInput.target.files[0]);
        console.log(this.solution.certDocDTOs);
        this.solution.certDocDTOs.push(this.certDocDTO);
    };
    LocalityDetailsComponent.prototype.onDisplaySolution = function () {
        var _this = this;
        this._apiservice.getSolutionExtra(this.solution.solutionId)
            .subscribe(function (data) {
            console.log('data' + JSON.stringify(data));
            // this.editSolution.patchValue(data, {onlySelf: true});
            //        let systemType = JSON.stringify(data.systemTypeDTO.name);
            //        console.log(JSON.stringify(data.systemTypeDTO.name));
            //        console.log(systemType);
            _this.solution = data;
            _this.solution.systemTypeDTO = data.systemTypeDTO;
            _this.solution.hostingTypeDTO = data.hostingTypeDTO;
            _this.solution.labVendorsDTO = data.labVendorsDTO;
            _this.solution.vendor = data.vendor;
            _this.solution.certDocDTOs = data.certDocDTOs;
            if (_this.solution.certDocDTOs == null) {
                _this.solution.certDocDTOs = [];
            }
            console.log('data ' + data.systemTypeDTO.name);
            //this.editSolution.controls['name'].setValue(data.name);
            //this.editSolution.controls['versionNumber'].setValue(data.versionNumber);
            // this.editSolution.controls['systemType.systemTypeId'].setValue(data.systemType.systemTypeId);
            console.log(data.systemTypeDTO.systemTypeId);
            //           this.editSolution.controls['systemTypeTry1'].setValue(data.systemTypeDTO.name);
            //this.systemTyp =data.systemTypeDTO.name;
        });
    };
    LocalityDetailsComponent.prototype.getSolutionsOnload = function () {
        var _this = this;
        this._apiservice.getSolutionsOnload()
            .subscribe(function (data) {
            //console.log(data);
            _this.systemTypeDTO = data.systemTypeDTOs;
            //this.editSolution.controls['systemTypeTry1'].setValue(data.systemTypeDTO.name);
            //        this.systemTyp = data.systemTypeDTO.name;
            // console.log(this.systemTypeDTO);
            _this.solutionType = data.solutionTypeDTOs;
            _this.vendorDTO = data.vendorsDTOs;
            _this.hostingTypeDTO = data.hostingTypeDTOs;
            _this.labVendorsDTO = data.labVendorsDTOs;
        }, function (error) { return console.log(error); });
    };
    LocalityDetailsComponent.prototype.createSolution = function () {
        console.log(JSON.stringify(this.locality));
    };
    LocalityDetailsComponent.prototype.backClicked = function () {
        this._location.back();
    };
    LocalityDetailsComponent.prototype.editorGroup = function () {
        if (this.editSolution.disabled) {
            this.editSolution.enable();
        }
        else {
            this.editSolution.disable();
        }
    };
    /*findId(value){
      this.solution.systemTypeDTO.systemTypeId = value;
    }*/
    LocalityDetailsComponent.prototype.showFile = function (id) {
        console.log(id);
        //    this._apiservice.getSolutionFile(id);
        window.open(__WEBPACK_IMPORTED_MODULE_1__app_config__["a" /* APP_CONFIG */].getSolutionFile + '?' + 'fileID' + '=' + id);
    };
    LocalityDetailsComponent.prototype.onWindowScroll = function () {
        var number = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
        if (number > 100) {
            this.color = 'online';
        }
        else {
            this.color = 'offline';
        }
    };
    LocalityDetailsComponent.prototype.getColor = function () {
        return this.color === 'online' ? '#ffffff' : 'white';
    };
    LocalityDetailsComponent.prototype.getOpacity = function () {
        return this.color === 'online' ? 0.8 : 1;
    };
    return LocalityDetailsComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_core__["ViewChild"])('fileInput'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_core__["ElementRef"]) === "function" && _a || Object)
], LocalityDetailsComponent.prototype, "inputEl", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_core__["ViewChild"])('editForm'),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_7__angular_forms__["g" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__angular_forms__["g" /* NgForm */]) === "function" && _b || Object)
], LocalityDetailsComponent.prototype, "solutionsForm", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_core__["HostListener"])('window:scroll', []),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], LocalityDetailsComponent.prototype, "onWindowScroll", null);
LocalityDetailsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_core__["Component"])({
        selector: 'app-locality-details',
        template: __webpack_require__("../../../../../src/app/locality-component/locality-tab/locality-details/locality-details.component.html"),
        styles: [__webpack_require__("../../../../../src/app/locality-component/locality-tab/locality-details/locality-details.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_6__apiservice_service__["a" /* ApiserviceService */]]
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_8__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__angular_router__["b" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_6__apiservice_service__["a" /* ApiserviceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__apiservice_service__["a" /* ApiserviceService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_7__angular_forms__["e" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__angular_forms__["e" /* FormBuilder */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common__["Location"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_common__["Location"]) === "function" && _g || Object])
], LocalityDetailsComponent);

var _a, _b, _c, _d, _e, _f, _g;
//# sourceMappingURL=locality-details.component.js.map

/***/ }),

/***/ "../../../../../src/app/locality-component/locality-tab/locality-legal/locality-legal.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".elipsis {\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n}\ni.fa {\n    text-decoration: none !important;\n    padding: 5px 4px;\n}\n.fa {\n    display: inline-block;\n    font: normal normal normal 14px/1 FontAwesome;\n    font-size: inherit;\n    text-rendering: auto;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n}\n.pull-right {\n    float: right!important;\n}\n#middle div.panel-heading {\n    color: #1E252D !important;\n    height: 51px;\n}\n.panel-default>.panel-heading {\n    padding: 15px 15px;\n    background: #fff;\n}\n\n.former{\n\tpadding:5px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/locality-component/locality-tab/locality-legal/locality-legal.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"form-div\">\n    <form class=\"former\">\n      \n        <div class=\"form-row\">\n            <div class=\"form-group col-md-6\">\n\n                <label for=\"inputState\" >Acronym</label>\n                <div class=\"asterisk\">*</div>\n               <input type=\"text\" class=\"form-control\" id=\"lastName\" value=\"enter here\">\n            </div>\n            <div class=\"form-group col-md-6\">\n                <label for=\"lastName\">Last updated by</label>\n                \n                <input type=\"text\" class=\"form-control\" id=\"lastName\" value=\"enter here\">\n            </div>\n        </div>\n\n\n\n        <div class=\"form-row\">\n             <div class=\"form-group col-md-6\">\n                <label for=\"lastName\">Name</label>\n                <div class=\"asterisk\">*</div>\n                <input type=\"text\" class=\"form-control\" id=\"lastName\" value=\"enter here\">\n            </div>\n            <div class=\"form-group col-md-6\">\n                <label for=\"email\">Updated at</label>\n                    <input type=\"email\" class=\"form-control\" id=\"email\" value=\"enter here\">\n            </div>\n        </div>\n        <hr/>\n        <p>\n\t\t<b>Legal Documents</b>\n\t</p>\n        <div class=\"form-row\">\n            <div class=\"form-group col-md-6\">\n               <label for=\"inputState\">Name</label>\n                \n               <input type=\"text\" class=\"form-control\" id=\"lastName\" value=\"enter here\">\n            </div>\n            </div>\n        <div class=\"form-row\">\n            <div class=\"form-group col-md-6\">\n               <label for=\"inputState\">Signed</label>\n              \n               <select id=\"modelSolution\" class=\"form-control\">\n            <option selected>Yes</option>\n            <option>No</option>\n          </select>\n            </div>\n            </div>\n        <div class=\"form-row\">\n            <div class=\"form-group col-md-6\">\n               <label for=\"inputState\">Date of Receipt</label>\n               \n               <input type=\"text\" class=\"form-control\" id=\"lastName\" value=\"mm/dd/yyyy\">\n            </div>\n            </div>\n            <div class=\"form-row\">\n            <div class=\"form-group col-md-6\">\n               <label for=\"inputState\">Recertification Date</label>\n              \n               <input type=\"text\" class=\"form-control\" id=\"lastName\" value=\"mm/dd/yyyy\">\n            </div>\n            </div>\n         <div class=\"panel-heading\">\n\n\t\t\t<span class=\" title elipsis pull-right\"> <a ng-click=\"saveMOU()\" ng-hide=\"MOUForm.$invalid\" title=\"Save MOU\" class=\"ng-hide\"> <i class=\"fa fa-floppy-o\" aria-hidden=\"true\" style=\"font-size: 24px;\"></i></a>\n\t\t\t</span>\n\t\t\t\n\t\t\t<span class=\" title elipsis pull-right\">\n\t\t\t\t\t\t      \t\n\t\t\t\t\t\t\t\t\t<a data-ng-click=\"showMOUList()\" title=\"Go back to audit section.\">\n\t\t\t\t\t\t\t\t\t<i class=\"fa fa-arrow-circle-o-left\" aria-hidden=\"true\" style=\"font-size: 24px;\"></i> </a>\n\t\t\t\t\t\t      \t</span>\n\t\t\t\t\t\t      \t\n\t\t</div>\n        <hr class=\"former\"/>\n        <p><b>MOU Attachments</b></p>\n        <div>\n        <div class=\"col-sm-5 col-md-5 col-lg-5\">\n\t\t\t\t\t\t\t<label class=\"input\"> <input type=\"file\" file-model=\"attachment\" data-btn-text=\"Select a File\"  accept=\".pdf,.doc,.docx\">\n\n\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\n        </div>\n       \n        </form>\n        </div>\n       \n        "

/***/ }),

/***/ "../../../../../src/app/locality-component/locality-tab/locality-legal/locality-legal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocalityLegalComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LocalityLegalComponent = (function () {
    function LocalityLegalComponent() {
    }
    LocalityLegalComponent.prototype.ngOnInit = function () {
    };
    return LocalityLegalComponent;
}());
LocalityLegalComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-locality-legal',
        template: __webpack_require__("../../../../../src/app/locality-component/locality-tab/locality-legal/locality-legal.component.html"),
        styles: [__webpack_require__("../../../../../src/app/locality-component/locality-tab/locality-legal/locality-legal.component.css")]
    }),
    __metadata("design:paramtypes", [])
], LocalityLegalComponent);

//# sourceMappingURL=locality-legal.component.js.map

/***/ }),

/***/ "../../../../../src/app/locality-component/locality-tab/locality-solutions/locality-solutions-link/locality-solutions-link.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/locality-component/locality-tab/locality-solutions/locality-solutions-link/locality-solutions-link.component.html":
/***/ (function(module, exports) {

module.exports = "<p>Hero</p>"

/***/ }),

/***/ "../../../../../src/app/locality-component/locality-tab/locality-solutions/locality-solutions-link/locality-solutions-link.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocalitySolutionsLinkComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LocalitySolutionsLinkComponent = (function () {
    function LocalitySolutionsLinkComponent() {
    }
    LocalitySolutionsLinkComponent.prototype.ngOnInit = function () {
    };
    return LocalitySolutionsLinkComponent;
}());
LocalitySolutionsLinkComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-locality-solutions-link',
        template: __webpack_require__("../../../../../src/app/locality-component/locality-tab/locality-solutions/locality-solutions-link/locality-solutions-link.component.html"),
        styles: [__webpack_require__("../../../../../src/app/locality-component/locality-tab/locality-solutions/locality-solutions-link/locality-solutions-link.component.css")]
    }),
    __metadata("design:paramtypes", [])
], LocalitySolutionsLinkComponent);

//# sourceMappingURL=locality-solutions-link.component.js.map

/***/ }),

/***/ "../../../../../src/app/locality-component/locality-tab/locality-solutions/locality-solutions.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".plus{\n\tfloat:right;\n    font-size: 20px;\n    margin-right: 20px;\n    color: #3A539B;\n}\n.modal-header{\n\tbackground-color:#3A539B !important;\n\tcolor:white;\n}\n\n\ni.fa {\n    text-decoration: none !important;\n    padding: 5px 4px;\n}\n.fa {\n    display: inline-block;\n    font: normal normal normal 14px/1 FontAwesome;\n    font-size: inherit;\n    text-rendering: auto;\n   }\n   \n   .form-control:disabled, .form-control[readonly] {\n    background-color: #ffffff;\n   \n}\n\nth{\n    font-weight: bold;\n    color: black;\n   \n    text-align: left;\n}\n\n\n\n#searchtable table, th, td {\n    border: 1px solid black;\n    border-collapse: collapse;\n}\n\n\n.table>tbody>tr>td, .table>tbody>tr>th, .table>tfoot>tr>td, .table>tfoot>tr>th, .table>thead>tr>td, .table>thead>tr>th {\n    padding: 8px;\n    line-height: 1.42857143;\n    vertical-align: top;\n  \n    color: black;\n}\n\n\n\n.table>caption+thead>tr:first-child>td, .table>caption+thead>tr:first-child>th, .table>colgroup+thead>tr:first-child>td, .table>colgroup+thead>tr:first-child>th, .table>thead:first-child>tr:first-child>td, .table>thead:first-child>tr:first-child>th {\n    border-top: 0;\n}\n\n\n\ntable {\n    border: 1px solid black;\n    width: 100%;\n    max-width: 100%;\n    margin-bottom: 20px;\n    \n}\ntr{\n\tbackground-color:#cecfd5;\n}\ntbody tr:nth-child(even) {\n  background-color:white;\n}\n\n\n.forms{\n  padding: 20px;\n  border-radius: 10px;\n  border: 1px solid transparent;\n  margin: 20px;\n  background-color: #EEEEEE;\n}\n.clear-right {\n\tclear:right;\n\toverflow: hidden;\n}\n.table-striped tbody tr:nth-of-type(odd) {\n    background-color: #EEEEEE !important;\n}\n\ntbody tr:nth-of-type(odd) {\n    background-color: #EEEEEE !important;\n}\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/locality-component/locality-tab/locality-solutions/locality-solutions.component.html":
/***/ (function(module, exports) {

module.exports = "<ng-template #content let-c=\"close\" let-d=\"dismiss\">\n<div class=\"modal-header\">\n\t<h4 class=\"modal-title\">Enter Device Information</h4>\n\t<button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d()\">\n\t\t<span aria-hidden=\"true\">&times;</span>\n\t</button>\n</div>\n<div class=\"modal-body\">\n\t<div class=\"save-edit\" style=\"float: right\">\n\t\t<fa class=\"edit-icon icons\" data-toggle=\"tooltip\"\n\t\t\tdata-placement=\"right\" title=\"Save\" data-animation=\"true\"\n\t\t\tdata-delay=\"0\" [name]=\"'edit'\" (click)=\"editClick()\"></fa>\n\t</div>\n\t<form class=form [formGroup]=\"modalForm\">\n\t\t<div class=\"form-row\">\n\t\t\t<div class=\"form-group col-md-6\">\n\t\t\t\t<label for=\"email\">Model Number</label>\n\n\t\t\t\t<div class=\"asterisk\">*</div>\n\t\t\t\t<input type=\"email\" class=\"form-control\" id=\"name\"\n\t\t\t\t\tplaceholder=\"Equipment Model Number\" formControlName=\"model\">\n\n\t\t\t</div>\n\t\t\t<div class=\"form-group col-md-6\">\n\t\t\t\t<label for=\"phone\">Serial Number</label>\n\t\t\t\t<div class=\"asterisk\">*</div>\n\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"city\"\n\t\t\t\t\tplaceholder=\"Equipment Serial Number\" formControlName=\"serial\">\n\t\t\t</div>\n\t\t</div>\n\t\t<p>\n\t\t\t<b>Physical Address</b>\n\t\t</p>\n\t\t<div class=\"form-row\">\n\t\t\t<div class=\"form-group col-md-6\">\n\t\t\t\t<label for=\"email\">Street Name</label>\n\t\t\t\t<div class=\"asterisk\">*</div>\n\t\t\t\t<input type=\"email\" class=\"form-control\" id=\"email\"\n\t\t\t\t\tplaceholder=\"Enter here\">\n\t\t\t</div>\n\t\t\t<div class=\"form-group col-md-6\">\n\t\t\t\t<label for=\"phone\">City</label>\n\t\t\t\t<div class=\"asterisk\">*</div>\n\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"phone\"\n\t\t\t\t\tplaceholder=\"Enter here\">\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"form-row\">\n\t\t\t<div class=\"form-group col-md-6\">\n\t\t\t\t<label for=\"inputState\">State</label>\n\t\t\t\t<div class=\"asterisk\">*</div>\n\t\t\t\t<select id=\"inputState\" class=\"form-control\">\n\t\t\t\t\t<option selected>Choose...</option>\n\t\t\t\t\t<option value=\"AL\">AL</option>\n\t\t\t\t\t<option value=\"AK\">AK</option>\n\t\t\t\t\t<option value=\"AR\">AR</option>\n\t\t\t\t\t<option value=\"AZ\">AZ</option>\n\t\t\t\t\t<option value=\"CA\">CA</option>\n\t\t\t\t\t<option value=\"CO\">CO</option>\n\t\t\t\t\t<option value=\"CT\">CT</option>\n\t\t\t\t\t<option value=\"DC\">DC</option>\n\t\t\t\t\t<option value=\"DE\">DE</option>\n\t\t\t\t\t<option value=\"FL\">FL</option>\n\t\t\t\t\t<option value=\"GA\">GA</option>\n\t\t\t\t\t<option value=\"HI\">HI</option>\n\t\t\t\t\t<option value=\"IA\">IA</option>\n\t\t\t\t\t<option value=\"ID\">ID</option>\n\t\t\t\t\t<option value=\"IL\">IL</option>\n\t\t\t\t\t<option value=\"IN\">IN</option>\n\t\t\t\t\t<option value=\"KS\">KS</option>\n\t\t\t\t\t<option value=\"KY\">KY</option>\n\t\t\t\t\t<option value=\"LA\">LA</option>\n\t\t\t\t\t<option value=\"MA\">MA</option>\n\t\t\t\t\t<option value=\"MD\">MD</option>\n\t\t\t\t\t<option value=\"ME\">ME</option>\n\t\t\t\t\t<option value=\"MI\">MI</option>\n\t\t\t\t\t<option value=\"MN\">MN</option>\n\t\t\t\t\t<option value=\"MO\">MO</option>\n\t\t\t\t\t<option value=\"MS\">MS</option>\n\t\t\t\t\t<option value=\"MT\">MT</option>\n\t\t\t\t\t<option value=\"NC\">NC</option>\n\t\t\t\t\t<option value=\"NE\">NE</option>\n\t\t\t\t\t<option value=\"NH\">NH</option>\n\t\t\t\t\t<option value=\"NJ\">NJ</option>\n\t\t\t\t\t<option value=\"NM\">NM</option>\n\t\t\t\t\t<option value=\"NV\">NV</option>\n\t\t\t\t\t<option value=\"NY\">NY</option>\n\t\t\t\t\t<option value=\"ND\">ND</option>\n\t\t\t\t\t<option value=\"OH\">OH</option>\n\t\t\t\t\t<option value=\"OK\">OK</option>\n\t\t\t\t\t<option value=\"OR\">OR</option>\n\t\t\t\t\t<option value=\"PA\">PA</option>\n\t\t\t\t\t<option value=\"RI\">RI</option>\n\t\t\t\t\t<option value=\"SC\">SC</option>\n\t\t\t\t\t<option value=\"SD\">SD</option>\n\t\t\t\t\t<option value=\"TN\">TN</option>\n\t\t\t\t\t<option value=\"TX\">TX</option>\n\t\t\t\t\t<option value=\"UT\">UT</option>\n\t\t\t\t\t<option value=\"VT\">VT</option>\n\t\t\t\t\t<option value=\"VA\">VA</option>\n\t\t\t\t\t<option value=\"WA\">WA</option>\n\t\t\t\t\t<option value=\"WI\">WI</option>\n\t\t\t\t\t<option value=\"WV\">WV</option>\n\t\t\t\t\t<option value=\"WY\">WY</option>\n\n\t\t\t\t\t<option>...</option>\n\t\t\t\t</select>\n\t\t\t</div>\n\t\t\t<div class=\"form-group col-md-6\">\n\t\t\t\t<label for=\"inputZip\">Zip Code</label>\n\t\t\t\t<div class=\"asterisk\">*</div>\n\t\t\t\t<input type=\"text\" class=\"form-control\" pattern=\"[0-9]{5}\"\n\t\t\t\t\ttitle='Zip Code (Format: 00000)' id=\"inputZip\">\n\t\t\t</div>\n\t\t</div>\n\t\t<hr />\n\t\t<p>\n\t\t\t<b>Overall Scanning Status</b>\n\t\t</p>\n\t\t<div>\n\t\t\t<select id=\"inputState\" class=\"form-control\">\n\t\t\t\t<option selected>Choose...</option>\n\t\t\t\t<option value=\"AL\">Passed</option>\n\t\t\t\t<option value=\"AL\">Failed</option>\n\t\t\t\t<option value=\"AL\">Pending</option>\n\t\t\t\t\n\t\t\t</select>\n\t\t</div>\n\t\t<hr />\n\t\t<div class=\"form-row\">\n\t\t<div class=\"form-group col-md-6\">\n\t\t\t\t<label for=\"inputZip\">Next Scanning Date</label>\n\t\t\t\t\n\t\t\t\t<input type=\"text\" class=\"form-control\"  id=\"inputZip\" placeholder=\"mm/dd/yyy\">\n\t\t\t</div>\n\t\t\t</div>\n\t\t<hr/>\n\t\t<p>\n\t\t\t<b>Notes</b>\n\t\t</p>\n\t\t<div>\n\t\t\t<textarea name=\"\" id=\"\" rows=\"5\" class=\"form-control\"></textarea>\n\t\t</div>\n\t\t<hr />\n\t\t<p>\n\t\t\t<b>Attachments</b>\n\t\t</p>\n\t\t<div>\n\t\t\t<div class=\"col-sm-5 col-md-5 col-lg-5\">\n\t\t\t\t<label class=\"input\"> <input type=\"file\"\n\t\t\t\t\tfile-model=\"attachment\" data-btn-text=\"Select a File\"\n\t\t\t\t\taccept=\".pdf,.doc,.docx\">\n\n\t\t\t\t</label>\n\t\t\t</div>\n\n\t\t</div>\n\t</form>\n</div>\n\n<div class=\"modal-footer\">\n\t<button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"c()\">Close</button>\n</div>\n</ng-template>\n<div class=\"plus\">\n\n\t<i class=\"fa fa-plus-square-o\" aria-hidden=\"true\"\n\t\tstyle=\"font-size: 24px;\" (click)=\"selectLocality()\"></i>\n\n</div>\n\n<form class=\"former clear-right\" *ngIf=\"showMainTable\">\n\t<table class=\"table table-striped table-hover table-bordere\">\n\t\t<thead>\n\t\t\t<tr>\n\n\t\t\t\t<th scope=\"col\">Solution Name</th>\n\t\t\t\t<th scope=\"col\">Vendor Name</th>\n\t\t\t\t<th scope=\"col\">Equipment Type</th>\n\t\t\t\t<th scope=\"col\">Precient Type</th>\n\t\t\t</tr>\n\t\t</thead>\n\t\t<tbody>\n\t\t\t<tr>\n\t\t\t\t<th><a routerLink=\"/locality/option/link\">Name</a></th>\n\t\t\t\t<td>Mark</td>\n\t\t\t\t<td>Otto</td>\n\t\t\t\t<td>Otto</td>\n\n\t\t\t</tr>\n\t\t\t<tr>\n\t\t\t\t<th><a routerLink=\"/locality/option\">Name</a></th>\n\t\t\t\t<td>Jacob</td>\n\t\t\t\t<td>Thornton</td>\n\t\t\t\t<td>Otto</td>\n\t\t\t</tr>\n\t\t\t<tr>\n\t\t\t\t<th><a routerLink=\"/locality/option\">Name</a></th>\n\t\t\t\t<td>Larry</td>\n\t\t\t\t<td>the Bird</td>\n\t\t\t\t<td>Otto</td>\n\t\t\t</tr>\n\t\t</tbody>\n\t</table>\n</form>\n\n\n<form class=\"forms  clear-right\" *ngIf=\"showTable\"\n\t[formGroup]=\"invoiceForm\">\n\n\t<p>\n\t\t<b>APPLICATION SOLUTIONS</b>\n\t</p>\n\t<div class=\"form-row\">\n\t\t<div class=\"form-group col-md-6\">\n\t\t\t<label for=\"modelSolution\">System Type</label> <select\n\t\t\t\tid=\"modelSolution\" class=\"form-control\"\n\t\t\t\t(change)=\"selectBox($event.target.value)\">\n\t\t\t\t<option selected>Choose...</option>\n\t\t\t\t<option>EVS</option>\n\t\t\t\t<option>EPB</option>\n\t\t\t</select>\n\t\t</div>\n\t</div>\n\t<div>\n\t\t<div class=\"form-row\" *ngIf=\"showSection\">\n\t\t\t\n\t\t\t\t<label for=\"lastName\">Model/Solution</label> <select id=\"inputState\"\n\t\t\t\t\tclass=\"form-control\" (click)=\"equip(content)\" (change)=\"selectForm($event.target.value)\">\n\t\t\t\t\t<option selected>Choose...</option>\n\t\t\t\t\t<option>Model Name</option>\n\t\t\t\t</select>\n\t\t\t</div>\n\t\n<div *ngIf=\"showForm\">\n\n<form class=\"formerx\" [formGroup]=\"modalsForm\">\n<div class=\"form-row\">\n\t\t\t<div class=\"form-group col-md-6\">\n\t\t\t\t<label for=\"lastName\">Model/Solution</label> <input type=\"text\"\n\t\t\t\t\tclass=\"form-control\" id=\"lastName\" placeholder=\"enter here\" formControlName=\"equipment\">\n\t\t\t</div>\n\t\t\n\n\t\t\n\t\t\t<div class=\"form-group col-md-6\">\n\t\t\t\t<label for=\"lastName\">Version</label> <input type=\"text\"\n\t\t\t\t\tclass=\"form-control\" id=\"lastName\" placeholder=\"enter here\" formControlName=\"vendor\">\n\t\t\t</div>\n\t\t\t</div>\n\t\n\t\t<div class=\"form-row\">\n\t\t\t<div class=\"form-group col-md-6\">\n\t\t\t\t<label for=\"lastName\">Equipment Type</label> <input type=\"text\"\n\t\t\t\t\tclass=\"form-control\" id=\"lastName\" placeholder=\"enter here\" formControlName=\"equipment\">\n\t\t\t</div>\n\t\t\n\n\t\t\n\t\t\t<div class=\"form-group col-md-6\">\n\t\t\t\t<label for=\"lastName\">Vendor</label> <input type=\"text\"\n\t\t\t\t\tclass=\"form-control\" id=\"lastName\" placeholder=\"enter here\" formControlName=\"vendor\">\n\t\t\t</div>\n\t\t\t</div>\n\t\n\t\t<hr />\n\t\t<div class=\"form-row\">\n\t\t\t<div class=\"form-group col-md-6\">\n\t\t\t\t<label for=\"lastName\">Hosting Type</label> <input type=\"text\"\n\t\t\t\t\tclass=\"form-control\" id=\"lastName\" placeholder=\"enter here\" formControlName=\"hosting\">\n\t\t\t</div>\n\t\t</div>\n\t\t</form>\n\t\t\n\t\t<div class=\"form-row\">\n\t\t\t<div class=\"form-group col-md-6\">\n\t\t\t\t<label for=\"units\">Add Unit</label>\n\t\t\t\t<div class=\"plus\">\n\n\t\t\t\t<i class=\"fa fa-plus-square-o\" aria-hidden=\"true\"\n\t\t\t\t\tstyle=\"font-size: 24px;\" (click)=\"open(content)\"></i>\n\n\t\t\t</div>\n\t\t\t\t<table class=\"table table-striped table-hover table-bordere\">\n\t\t\t\t\t<thead>\n\t\t\t\t\t\t<tr>\n\n\t\t\t\t\t\t\t<th scope=\"col\">Model #</th>\n\t\t\t\t\t\t\t<th scope=\"col\">Serial #</th>\n\t\t\t\t\t\t\t<th scope=\"col\">Next due date</th>\n\t\t\t\t\t\t\t<th scope=\"col\">Overall status</th>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</thead>\n\t\t\t\t\t<tbody>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<th><a style=\"color: blue\" (click)=\"open(content)\">1</a></th>\n\t\t\t\t\t\t\t<th>1</th>\n\t\t\t\t\t\t\t<th>1</th>\n\t\t\t\t\t\t\t<th>1</th>\n\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t<tr>\n\n\t\t\t\t\t\t\t<th><a style=\"color: blue\" (click)=\"open(content)\">1</a></th>\n\t\t\t\t\t\t\t<th>1</th>\n\t\t\t\t\t\t\t<th>1</th>\n\t\t\t\t\t\t\t<th>1</th>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<th><a style=\"color: blue\" (click)=\"open(content)\">1</a></th>\n\t\t\t\t\t\t\t<th>1</th>\n\t\t\t\t\t\t\t<th>1</th>\n\t\t\t\t\t\t\t<th>1</th>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</tbody>\n\t\t\t\t</table>\n\t\t\t\t</div>\n\n\t\t\t</div>\n\t\t\t\n\n\n\t\t</div>\n\n\t\t<button type=\"submit\" class=\"btn btn-primary\">Submit</button>\n\n\t</div>\n</form>\n\n"

/***/ }),

/***/ "../../../../../src/app/locality-component/locality-tab/locality-solutions/locality-solutions.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocalitySolutionsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LocalitySolutionsComponent = (function () {
    function LocalitySolutionsComponent(_fb, modalService) {
        this._fb = _fb;
        this.modalService = modalService;
        this.showTable = false;
        this.showSection = false;
        this.showForm = false;
        this.showMainTable = true;
    }
    LocalitySolutionsComponent.prototype.ngOnInit = function () {
        this.invoiceForm = this._fb.group({
            itemRows: this._fb.array([])
        });
        this.modalForm = this._fb.group({
            model: [''],
            serial: ['']
        });
        this.modalsForm = this._fb.group({
            equipment: [''],
            vendor: [''],
            hosting: ['']
        });
    };
    LocalitySolutionsComponent.prototype.selectLocality = function (locality) {
        this.showTable = true;
        this.showMainTable = false;
    };
    LocalitySolutionsComponent.prototype.selectBox = function (systemType) {
        this.showSection = true;
    };
    LocalitySolutionsComponent.prototype.selectForm = function (systemType) {
        this.showForm = true;
    };
    LocalitySolutionsComponent.prototype.onUnitsChange = function (value) {
        console.log(value);
        var control = this.invoiceForm.controls['itemRows'];
        if (value < control.length) {
            control.removeAt(control.length - 1);
        }
        else {
            control.push(this.initItemRows());
        }
    };
    LocalitySolutionsComponent.prototype.initItemRows = function () {
        return this._fb.group({
            one: [''],
            two: ['']
        });
    };
    LocalitySolutionsComponent.prototype.onSubmit = function () {
        console.log(this.invoiceForm.value);
    };
    LocalitySolutionsComponent.prototype.editClick = function () {
        console.log(this.modalForm.disabled);
        if (this.modalForm.disabled) {
            this.modalForm.enable();
            this.modalsForm.enable();
        }
        else {
            this.modalForm.disable();
            this.modalsForm.disable();
        }
    };
    LocalitySolutionsComponent.prototype.open = function (content) {
        this.modalForm.disable();
        this.modalForm.get('model').setValue("1");
        this.modalService.open(content);
        this.modalsForm.get('equipment').setValue("value");
    };
    LocalitySolutionsComponent.prototype.equip = function (content) {
        this.modalsForm.disable();
        this.modalsForm.get('equipment').setValue("value");
    };
    return LocalitySolutionsComponent;
}());
LocalitySolutionsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-locality-solutions',
        template: __webpack_require__("../../../../../src/app/locality-component/locality-tab/locality-solutions/locality-solutions.component.html"),
        styles: [__webpack_require__("../../../../../src/app/locality-component/locality-tab/locality-solutions/locality-solutions.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* FormBuilder */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */]) === "function" && _b || Object])
], LocalitySolutionsComponent);

var _a, _b;
//# sourceMappingURL=locality-solutions.component.js.map

/***/ }),

/***/ "../../../../../src/app/locality-component/locality-tab/locality-solutionstablelink/locality-solutionstablelink.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".form{\n  padding: 20px;\n  border-radius: 10px;\n  border: 1px solid transparent;\n  margin: 20px;\n  background-color: #EEEEEE;\n}\ntbody tr:nth-of-type(odd) {\n    background-color: #EEEEEE !important;\n}\n\ntr{\n\tbackground-color:#cecfd5;\n}\ntbody tr:nth-child(even) {\n  background-color:white;\n}\n\n.form-control:disabled, .form-control[readonly] {\n    background-color: #ffffff;\n   \n}\n\n\n.plus{\n\tfloat:right;\n\t vertical-align: middle;\n    font-size: 20px;\n    margin-top: -15px;\n    padding: 10px;\n    margin-left: 50px;\n    color: #3A539B;\n}\n\n\n\ni.fa {\n    text-decoration: none !important;\n    padding: 5px 4px;\n}\n.fa {\n    display: inline-block;\n    font: normal normal normal 14px/1 FontAwesome;\n    font-size: inherit;\n    text-rendering: auto;\n   }\n\n\n\n\n\n#searchtable table, th, td {\n    border: 1px solid black;\n    border-collapse: collapse;\n}\n\n\n.table>tbody>tr>td, .table>tbody>tr>th, .table>tfoot>tr>td, .table>tfoot>tr>th, .table>thead>tr>td, .table>thead>tr>th {\n    padding: 8px;\n    line-height: 1.42857143;\n    vertical-align: top;\n    border-top: 1px solid #ddd;\n    color: black;\n}\n\n.table>thead>tr>th {\n    vertical-align: bottom;\n    border-bottom: 2px solid #ddd;\n}\n\n.table>caption+thead>tr:first-child>td, .table>caption+thead>tr:first-child>th, .table>colgroup+thead>tr:first-child>td, .table>colgroup+thead>tr:first-child>th, .table>thead:first-child>tr:first-child>td, .table>thead:first-child>tr:first-child>th {\n    border-top: 0;\n}\n\ntr {\n    display: table-row;\n    vertical-align: inherit;\n    border-color: inherit;\n}\n\ntable {\n    border: 1px solid black;\n    width: 100%;\n    max-width: 100%;\n    margin-bottom: 20px;\n    \n}\n\n\n.plus{\n\tfloat:right;\n    font-size: 20px;\n    margin-right: 20px;\n    color: #3A539B;\n}\n.modal-header{\n\tbackground-color:#3A539B !important;\n\tcolor:white;\n}\n\n\ni.fa {\n    text-decoration: none !important;\n    padding: 5px 4px;\n}\n.fa {\n    display: inline-block;\n    font: normal normal normal 14px/1 FontAwesome;\n    font-size: inherit;\n    text-rendering: auto;\n   }\n\nth{\n    font-weight: bold;\n    color: black;\n   \n    text-align: left;\n}\n\n\n\n#searchtable table, th, td {\n    border: 1px solid black;\n    border-collapse: collapse;\n}\n\n\n.table>tbody>tr>td, .table>tbody>tr>th, .table>tfoot>tr>td, .table>tfoot>tr>th, .table>thead>tr>td, .table>thead>tr>th {\n    padding: 8px;\n    line-height: 1.42857143;\n    vertical-align: top;\n  \n    color: black;\n}\n\n\n\n.table>caption+thead>tr:first-child>td, .table>caption+thead>tr:first-child>th, .table>colgroup+thead>tr:first-child>td, .table>colgroup+thead>tr:first-child>th, .table>thead:first-child>tr:first-child>td, .table>thead:first-child>tr:first-child>th {\n    border-top: 0;\n}\n\n\n\ntable {\n    border: 1px solid black;\n    width: 100%;\n    max-width: 100%;\n    margin-bottom: 20px;\n    \n}\ntr{\n\tbackground-color:#cecfd5;\n}\ntbody tr:nth-child(even) {\n  background-color:white;\n}\n\n\n.forms{\n  padding: 20px;\n  border-radius: 10px;\n  border: 1px solid transparent;\n  margin: 20px;\n  background-color: #EEEEEE;\n}\n.clear-right {\n\tclear:right;\n\toverflow: hidden;\n}\n.table-striped tbody tr:nth-of-type(odd) {\n    background-color: #EEEEEE !important;\n}\n\ntbody tr:nth-of-type(odd) {\n    background-color: #EEEEEE !important;\n}\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/locality-component/locality-tab/locality-solutionstablelink/locality-solutionstablelink.component.html":
/***/ (function(module, exports) {

module.exports = "<ng-template #content let-c=\"close\" let-d=\"dismiss\">\n<div class=\"modal-header\">\n\t<h4 class=\"modal-title\">Enter Device Information</h4>\n\t<button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d()\">\n\t\t<span aria-hidden=\"true\">&times;</span>\n\t</button>\n</div>\n<div class=\"modal-body\">\n\t<div class=\"save-edit\" style=\"float: right\">\n\t\t<fa class=\"edit-icon icons\" data-toggle=\"tooltip\"\n\t\t\tdata-placement=\"right\" title=\"Save\" data-animation=\"true\"\n\t\t\tdata-delay=\"0\" [name]=\"'edit'\" (click)=\"editClick()\"></fa>\n\t</div>\n\t<form class=form [formGroup]=\"solutionForm\">\n\t\t<div class=\"form-row\">\n\t\t\t<div class=\"form-group col-md-6\">\n\t\t\t\t<label for=\"email\">Model Number</label>\n\n\t\t\t\t<div class=\"asterisk\">*</div>\n\t\t\t\t<input type=\"email\" class=\"form-control\" id=\"name\"\n\t\t\t\t\tplaceholder=\"Equipment Model Number\" formControlName=\"model\">\n\n\t\t\t</div>\n\t\t\t<div class=\"form-group col-md-6\">\n\t\t\t\t<label for=\"phone\">Serial Number</label>\n\t\t\t\t<div class=\"asterisk\">*</div>\n\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"city\"\n\t\t\t\t\tplaceholder=\"Equipment Serial Number\" formControlName=\"serial\">\n\t\t\t</div>\n\t\t</div>\n\t\t<p>\n\t\t\t<b>Physical Address</b>\n\t\t</p>\n\t\t<div class=\"form-row\">\n\t\t\t<div class=\"form-group col-md-6\">\n\t\t\t\t<label for=\"email\">Street Name</label>\n\t\t\t\t<div class=\"asterisk\">*</div>\n\t\t\t\t<input type=\"email\" class=\"form-control\" id=\"email\"\n\t\t\t\t\tplaceholder=\"Enter here\">\n\t\t\t</div>\n\t\t\t<div class=\"form-group col-md-6\">\n\t\t\t\t<label for=\"phone\">City</label>\n\t\t\t\t<div class=\"asterisk\">*</div>\n\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"phone\"\n\t\t\t\t\tplaceholder=\"Enter here\">\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"form-row\">\n\t\t\t<div class=\"form-group col-md-6\">\n\t\t\t\t<label for=\"inputState\">State</label>\n\t\t\t\t<div class=\"asterisk\">*</div>\n\t\t\t\t<select id=\"inputState\" class=\"form-control\">\n\t\t\t\t\t<option selected>Choose...</option>\n\t\t\t\t\t<option value=\"AL\">AL</option>\n\t\t\t\t\t<option value=\"AK\">AK</option>\n\t\t\t\t\t<option value=\"AR\">AR</option>\n\t\t\t\t\t<option value=\"AZ\">AZ</option>\n\t\t\t\t\t<option value=\"CA\">CA</option>\n\t\t\t\t\t<option value=\"CO\">CO</option>\n\t\t\t\t\t<option value=\"CT\">CT</option>\n\t\t\t\t\t<option value=\"DC\">DC</option>\n\t\t\t\t\t<option value=\"DE\">DE</option>\n\t\t\t\t\t<option value=\"FL\">FL</option>\n\t\t\t\t\t<option value=\"GA\">GA</option>\n\t\t\t\t\t<option value=\"HI\">HI</option>\n\t\t\t\t\t<option value=\"IA\">IA</option>\n\t\t\t\t\t<option value=\"ID\">ID</option>\n\t\t\t\t\t<option value=\"IL\">IL</option>\n\t\t\t\t\t<option value=\"IN\">IN</option>\n\t\t\t\t\t<option value=\"KS\">KS</option>\n\t\t\t\t\t<option value=\"KY\">KY</option>\n\t\t\t\t\t<option value=\"LA\">LA</option>\n\t\t\t\t\t<option value=\"MA\">MA</option>\n\t\t\t\t\t<option value=\"MD\">MD</option>\n\t\t\t\t\t<option value=\"ME\">ME</option>\n\t\t\t\t\t<option value=\"MI\">MI</option>\n\t\t\t\t\t<option value=\"MN\">MN</option>\n\t\t\t\t\t<option value=\"MO\">MO</option>\n\t\t\t\t\t<option value=\"MS\">MS</option>\n\t\t\t\t\t<option value=\"MT\">MT</option>\n\t\t\t\t\t<option value=\"NC\">NC</option>\n\t\t\t\t\t<option value=\"NE\">NE</option>\n\t\t\t\t\t<option value=\"NH\">NH</option>\n\t\t\t\t\t<option value=\"NJ\">NJ</option>\n\t\t\t\t\t<option value=\"NM\">NM</option>\n\t\t\t\t\t<option value=\"NV\">NV</option>\n\t\t\t\t\t<option value=\"NY\">NY</option>\n\t\t\t\t\t<option value=\"ND\">ND</option>\n\t\t\t\t\t<option value=\"OH\">OH</option>\n\t\t\t\t\t<option value=\"OK\">OK</option>\n\t\t\t\t\t<option value=\"OR\">OR</option>\n\t\t\t\t\t<option value=\"PA\">PA</option>\n\t\t\t\t\t<option value=\"RI\">RI</option>\n\t\t\t\t\t<option value=\"SC\">SC</option>\n\t\t\t\t\t<option value=\"SD\">SD</option>\n\t\t\t\t\t<option value=\"TN\">TN</option>\n\t\t\t\t\t<option value=\"TX\">TX</option>\n\t\t\t\t\t<option value=\"UT\">UT</option>\n\t\t\t\t\t<option value=\"VT\">VT</option>\n\t\t\t\t\t<option value=\"VA\">VA</option>\n\t\t\t\t\t<option value=\"WA\">WA</option>\n\t\t\t\t\t<option value=\"WI\">WI</option>\n\t\t\t\t\t<option value=\"WV\">WV</option>\n\t\t\t\t\t<option value=\"WY\">WY</option>\n\n\t\t\t\t\t<option>...</option>\n\t\t\t\t</select>\n\t\t\t</div>\n\t\t\t<div class=\"form-group col-md-6\">\n\t\t\t\t<label for=\"inputZip\">Zip Code</label>\n\t\t\t\t<div class=\"asterisk\">*</div>\n\t\t\t\t<input type=\"text\" class=\"form-control\" pattern=\"[0-9]{5}\"\n\t\t\t\t\ttitle='Zip Code (Format: 00000)' id=\"inputZip\">\n\t\t\t</div>\n\t\t</div>\n\t\t<hr />\n\t\t<p>\n\t\t\t<b>Overall Scanning Status</b>\n\t\t</p>\n\t\t<div>\n\t\t\t<select id=\"inputState\" class=\"form-control\">\n\t\t\t\t<option selected>Choose...</option>\n\t\t\t\t<option value=\"AL\">Passed</option>\n\t\t\t\t<option value=\"AL\">Failed</option>\n\t\t\t\t<option value=\"AL\">Pending</option>\n\t\t\t\t\n\t\t\t</select>\n\t\t</div>\n\t\t<hr />\n\t\t<div class=\"form-row\">\n\t\t<div class=\"form-group col-md-6\">\n\t\t\t\t<label for=\"inputZip\">Next Scanning Date</label>\n\t\t\t\t\n\t\t\t\t<input type=\"text\" class=\"form-control\"  id=\"inputZip\" placeholder=\"mm/dd/yyy\">\n\t\t\t</div>\n\t\t\t</div>\n\t\t<hr/>\n\t\t<p>\n\t\t\t<b>Notes</b>\n\t\t</p>\n\t\t<div>\n\t\t\t<textarea name=\"\" id=\"\" rows=\"5\" class=\"form-control\"></textarea>\n\t\t</div>\n\t\t<hr />\n\t\t<p>\n\t\t\t<b>Attachments</b>\n\t\t</p>\n\t\t<div>\n\t\t\t<div class=\"col-sm-5 col-md-5 col-lg-5\">\n\t\t\t\t<label class=\"input\"> <input type=\"file\"\n\t\t\t\t\tfile-model=\"attachment\" data-btn-text=\"Select a File\"\n\t\t\t\t\taccept=\".pdf,.doc,.docx\">\n\n\t\t\t\t</label>\n\t\t\t</div>\n\n\t\t</div>\n\t</form>\n</div>\n\n<div class=\"modal-footer\">\n\t<button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"c()\">Close</button>\n</div>\n</ng-template>\n\n<div class=\"plus\">\n\n\t<i class=\"fa fa-plus-square-o\" aria-hidden=\"true\"\n\t\tstyle=\"font-size: 24px;\" (click)=\"editClick()\"></i>\n\n</div>\n\n<form class=\"forms  clear-right\" [formGroup]=\"solutionForm\">\n\n\t<p>\n\t\t<b>APPLICATION SOLUTIONS</b>\n\t</p>\n\t<div class=\"form-row\">\n\t\t<div class=\"form-group col-md-6\">\n\t\t\t<label for=\"modelSolution\" >System Type</label> <select\n\t\t\t\tid=\"modelSolution\" class=\"form-control\"  formControlName=\"system\">\n\t\t\t\t<option selected>Choose...</option>\n\t\t\t\t<option>EVS</option>\n\t\t\t\t<option>EPB</option>\n\t\t\t</select>\n\t\t</div>\n\t</div>\n\n\t<div>\n\n\t\t<div class=\"form-row\">\n\n\t\t\t<label for=\"lastName\">Model/Solution</label> <select id=\"inputState\"\n\t\t\t\tclass=\"form-control\"  formControlName=\"model\">\n\t\t\t\t<option selected>Choose...</option>\n\t\t\t\t<option>...</option>\n\t\t\t</select>\n\n\n\t\t</div>\n\t\t<div class=\"form-row\">\n\t\t\t<div class=\"form-group col-md-6\">\n\t\t\t\t<label for=\"lastName\">Model/Solution</label> <input type=\"email\"\n\t\t\t\t\tclass=\"form-control\" id=\"name\" placeholder=\"enter here\"  formControlName=\"solution\">\n\t\t\t</div>\n\t\t\t<div class=\"form-group col-md-6\">\n\t\t\t\t<label for=\"lastName\">Version</label> <input type=\"email\"\n\t\t\t\t\tclass=\"form-control\" id=\"name\" placeholder=\"enter here\"  formControlName=\"version\">\n\t\t\t</div>\n\n\t\t</div>\n\n\t\t<div class=\"form-row\">\n\t\t\t<div class=\"form-group col-md-6\">\n\t\t\t\t<label for=\"lastName\">Equipment Type</label> <input type=\"text\"\n\t\t\t\t\tclass=\"form-control\" id=\"lastName\" placeholder=\"enter here\"  formControlName=\"equipment\">\n\t\t\t</div>\n\t\t\t<div class=\"form-group col-md-6\">\n\t\t\t\t<label for=\"lastName\">Vendor</label> <input type=\"text\"\n\t\t\t\t\tclass=\"form-control\" id=\"lastName\" placeholder=\"enter here\"  formControlName=\"vendor\">\n\t\t\t</div>\n\t\t</div>\n\n\n\t\t<hr />\n\t\t<div class=\"form-row\">\n\t\t\t<div class=\"form-group col-md-6\">\n\t\t\t\t<label for=\"lastName\">Hosting Type</label> <input type=\"text\"\n\t\t\t\t\tclass=\"form-control\" id=\"lastName\" placeholder=\"enter here\"  formControlName=\"name\">\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"form-row\">\n\t\t\t<div class=\"form-group col-md-6\">\n\t\t\t\t<label for=\"units\">Add Unit</label>\n\t\t\t\t\t<div class=\"plus\">\n\n\t\t\t\t<i class=\"fa fa-plus-square-o\" aria-hidden=\"true\"\n\t\t\t\t\tstyle=\"font-size: 24px;\" (click)=\"open(content)\" formControlName=\"plus\"></i>\n\n\t\t\t</div>\n\t\t\t\t<table class=\"table table-striped table-hover table-bordere\">\n\t\t\t\t\t<thead>\n\t\t\t\t\t\t<tr>\n\n\t\t\t\t\t\t\t<th scope=\"col\">Model #</th>\n\t\t\t\t\t\t\t<th scope=\"col\">Serial #</th>\n\t\t\t\t\t\t\t<th scope=\"col\">Next due date</th>\n\t\t\t\t\t\t\t<th scope=\"col\">Overall status</th>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</thead>\n\t\t\t\t\t<tbody>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<th><a style=\"color: blue\" (click)=\"open(content)\">1</a></th>\n\t\t\t\t\t\t\t<th>1</th>\n\t\t\t\t\t\t\t<th>1</th>\n\t\t\t\t\t\t\t<th>1</th>\n\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t<tr>\n\n\t\t\t\t\t\t\t<th><a style=\"color: blue\" (click)=\"open(content)\">1</a></th>\n\t\t\t\t\t\t\t<th>1</th>\n\t\t\t\t\t\t\t<th>1</th>\n\t\t\t\t\t\t\t<th>1</th>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<th><a style=\"color: blue\" (click)=\"open(content)\">1</a></th>\n\t\t\t\t\t\t\t<th>1</th>\n\t\t\t\t\t\t\t<th>1</th>\n\t\t\t\t\t\t\t<th>1</th>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</tbody>\n\t\t\t\t</table>\n\n\t\t\t\n\t\t\t</div>\n\n\n\t\t</div>\n\n\t\t<button type=\"submit\" class=\"btn btn-primary\">Submit</button>\n\n\t</div>\n</form>\n\n"

/***/ }),

/***/ "../../../../../src/app/locality-component/locality-tab/locality-solutionstablelink/locality-solutionstablelink.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocalitySolutionstablelinkComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LocalitySolutionstablelinkComponent = (function () {
    function LocalitySolutionstablelinkComponent(_fb, modalService) {
        this._fb = _fb;
        this.modalService = modalService;
    }
    LocalitySolutionstablelinkComponent.prototype.ngOnInit = function () {
        this.solutionForm = this._fb.group({
            system: [''],
            model: [''],
            solution: [''],
            version: [''],
            equipment: [''],
            vendor: [''],
            name: [''],
            plus: ['']
        });
        this.solutionForm.disable();
    };
    LocalitySolutionstablelinkComponent.prototype.open = function (content) {
        this.modalService.open(content);
        this.solutionForm.disable();
    };
    LocalitySolutionstablelinkComponent.prototype.editClick = function () {
        console.log(this.solutionForm.disabled);
        if (this.solutionForm.disabled) {
            this.solutionForm.enable();
            this.solutionForm.enable();
        }
        else {
            this.solutionForm.disable();
            this.solutionForm.disable();
        }
    };
    return LocalitySolutionstablelinkComponent;
}());
LocalitySolutionstablelinkComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-locality-solutionstablelink',
        template: __webpack_require__("../../../../../src/app/locality-component/locality-tab/locality-solutionstablelink/locality-solutionstablelink.component.html"),
        styles: [__webpack_require__("../../../../../src/app/locality-component/locality-tab/locality-solutionstablelink/locality-solutionstablelink.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* FormBuilder */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */]) === "function" && _b || Object])
], LocalitySolutionstablelinkComponent);

var _a, _b;
//# sourceMappingURL=locality-solutionstablelink.component.js.map

/***/ }),

/***/ "../../../../../src/app/locality-component/locality-tab/locality-tab.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "i.fa {\n    text-decoration: none !important;\n    padding: 5px 4px;\n}\n\n\n.fa {\n    display: inline-block;\n    font: normal normal normal 14px/1 FontAwesome;\n    font-size: inherit;\n    text-rendering: auto;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/locality-component/locality-tab/locality-tab.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"form-div\">\n    <div class=\"head\">\n        <ul class=\"nav nav-tabs\">\n            <li class=\"nav-item\">\n                <a class=\"nav-link\" routerLink=\"/locality/option\"> <i class=\"fa fa-info-circle\"></i>Information </a>\n            </li>\n            <li class=\"nav-item\">\n                <a class=\"nav-link hover\" routerLink=\"/locality/map/option/solutions\"><i class=\"fa fa-info-circle\"></i>Solutions</a>\n            </li>\n            <li class=\"nav-item\">\n                <a class=\"nav-link \"  routerLink=\"/locality/map/option/legal\"><i class=\"fa fa-info-circle\"></i>Legal</a>\n            </li>\n            <li class=\"nav-item\">\n                <a class=\"nav-link \" routerLink=\"/locality/option/Audit\"><i class=\"fa fa-bell\"></i>Audit/Compliance</a>\n            </li>\n            <li class=\"nav-item\">\n                <a class=\"nav-link \" routerLink=\"/locality/option/form2\">Assessment</a>\n            </li>\n            \n            <li class=\"nav-item\">\n                <a class=\"nav-link \" routerLink=\"/locality/option/form2\">Security</a>\n            </li>\n             <li class=\"nav-item\">\n                <a class=\"nav-link \" routerLink=\"/locality/option/form2\">Technical</a>\n            </li>\n             <li class=\"nav-item\">\n              <a class=\"nav-link \"  routerLink=\"/locality/option/business\"><i class=\"fa fa-building-o\"></i>Business</a> \n            </li>\n        </ul>\n    </div>\n  <router-outlet></router-outlet>\n</div>"

/***/ }),

/***/ "../../../../../src/app/locality-component/locality-tab/locality-tab.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocalityTabComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LocalityTabComponent = (function () {
    function LocalityTabComponent() {
    }
    LocalityTabComponent.prototype.ngOnInit = function () {
    };
    return LocalityTabComponent;
}());
LocalityTabComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-locality-tab',
        template: __webpack_require__("../../../../../src/app/locality-component/locality-tab/locality-tab.component.html"),
        styles: [__webpack_require__("../../../../../src/app/locality-component/locality-tab/locality-tab.component.css")]
    }),
    __metadata("design:paramtypes", [])
], LocalityTabComponent);

//# sourceMappingURL=locality-tab.component.js.map

/***/ }),

/***/ "../../../../../src/app/locality-view-component/locality-view-component.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/locality-view-component/locality-view-component.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navigation-component></app-navigation-component>\n<app-option-list></app-option-list>\n<!-- <app-view-table></app-view-table> -->"

/***/ }),

/***/ "../../../../../src/app/locality-view-component/locality-view-component.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocalityViewComponentComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LocalityViewComponentComponent = (function () {
    function LocalityViewComponentComponent() {
    }
    LocalityViewComponentComponent.prototype.ngOnInit = function () {
    };
    return LocalityViewComponentComponent;
}());
LocalityViewComponentComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-locality-view-component',
        template: __webpack_require__("../../../../../src/app/locality-view-component/locality-view-component.component.html"),
        styles: [__webpack_require__("../../../../../src/app/locality-view-component/locality-view-component.component.css")]
    }),
    __metadata("design:paramtypes", [])
], LocalityViewComponentComponent);

//# sourceMappingURL=locality-view-component.component.js.map

/***/ }),

/***/ "../../../../../src/app/navigation-component/navigation-component.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".p-4{\n    background-color: #2C3E50;\n    border-top: 1px solid #ECF0F1;\n}\n\nnav{\n    background-color: #3A539B;\n    text-align: center;\n    position: relative;\n}\n\n.sticky-top icons{\n\theight: 10px;\n}\n\n.heading{\n    color: white;\n}\n\nimg{\n    width: 10%;\n}\n\n.user{\n    position: absolute;\n    font-size: 10px;\n    color: white;\n    right: 50px;\n    margin-right: 10px;\n}\n\n.down-icon{\n    font-size: 10px;\n    margin-left: 3px;\n    color: white;\n}\n\n.navigate-toggle{\n    color: white;\n}\n\n.btn{\n    margin-left: 30px;\n}\n\nh1{\n    color: white;\n}\n\n.collapse-div{\n    background-color: #59ABE3;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/navigation-component/navigation-component.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"pos-f-t\">\n          <nav class=\"navbar\">\n            <img src=\"assets/img/logo.png\">\n            <h2 class=\"heading\">Application and Audit Manager</h2>\n            <p class=\"user\">Sunny Singh<fa [name]=\"'chevron-down'\"></fa></p>\n            <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarToggleExternalContent\" aria-controls=\"navbarToggleExternalContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n              <fa class=\"navigate-toggle hg\" [name]=\"'align-justify'\"></fa>\n            </button>\n          </nav>\n          <div class=\"collapse\" id=\"navbarToggleExternalContent\">\n            <div class=\"p-4\">\n              <button type=\"button\" class=\"btn btn-light\">Dashboard (Index)</button>\n              <button type=\"button\" class=\"btn btn-light\">Create an Application</button>\n              <button type=\"button\" class=\"btn btn-light\">Reports (report)</button>\n              <button type=\"button\" class=\"btn btn-light\">Manage Policies</button>\n              <button type=\"button\" class=\"btn btn-light\">Vendors</button>\n              <button type=\"button\" class=\"btn btn-light\">Solutions</button>\n              <button type=\"button\" class=\"btn btn-light\">Add Device</button>\n            </div>\n          </div>\n    </div>"

/***/ }),

/***/ "../../../../../src/app/navigation-component/navigation-component.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavigationComponentComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavigationComponentComponent = (function () {
    function NavigationComponentComponent() {
    }
    NavigationComponentComponent.prototype.ngOnInit = function () {
    };
    return NavigationComponentComponent;
}());
NavigationComponentComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-navigation-component',
        template: __webpack_require__("../../../../../src/app/navigation-component/navigation-component.component.html"),
        styles: [__webpack_require__("../../../../../src/app/navigation-component/navigation-component.component.css")]
    }),
    __metadata("design:paramtypes", [])
], NavigationComponentComponent);

//# sourceMappingURL=navigation-component.component.js.map

/***/ }),

/***/ "../../../../../src/app/navigation-component/navigation-component.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__navigation_component_component__ = __webpack_require__("../../../../../src/app/navigation-component/navigation-component.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_fontawesome_angular2_fontawesome__ = __webpack_require__("../../../../angular2-fontawesome/angular2-fontawesome.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_fontawesome_angular2_fontawesome___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_fontawesome_angular2_fontawesome__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavigationComponentModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var NavigationComponentModule = (function () {
    function NavigationComponentModule() {
    }
    return NavigationComponentModule;
}());
NavigationComponentModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_3_angular2_fontawesome_angular2_fontawesome__["Angular2FontawesomeModule"]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_2__navigation_component_component__["a" /* NavigationComponentComponent */]],
        exports: [__WEBPACK_IMPORTED_MODULE_2__navigation_component_component__["a" /* NavigationComponentComponent */]]
    })
], NavigationComponentModule);

//# sourceMappingURL=navigation-component.module.js.map

/***/ }),

/***/ "../../../../../src/app/option-list/option-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".navigate{\n    margin: 15px;\n    padding: 5px;\n}\n\n.sticky-top{\n\theight: 30px;\n\tborder-radius: 5px;\n}\n\n.form-options{\n    margin-right: 15px;\n    margin-top: -15px;\n    padding: 5px;\n}\n\n.home-back{\n\tfloat: left;\n}\n\n.save-edit{\n\tfloat: right;\n}\n\na{\n\ttext-decoration: none;\n}\n\n.icons{\n    vertical-align: middle;\n    font-size: 20px;\n    margin-top: -20px;\n    padding: 2px;\n    margin-left: 5px;\n}\n\n/*.left-icons{\n\tfloat: left;\n}\n\n.icons{\n\tdisplay: inline-block;\n}*/\n\n.home-icon{\n    color: #3A539B;\n}\n\n.home-icon:hover{\n\t\n}\n\n.edit-icon{\n    /*margin-left: 10px;*/\n    color: #3A539B;\n}\n\n.left-icon{\n    /*margin-left: 10px;*/\n    color: #3A539B;\n}\n\n.save-icon{\n    color: #3A539B;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/option-list/option-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"navigate sticky-top\" [ngStyle]=\"{'backgroundColor': getColor(), 'opacity': getOpacity()}\">\n            <!--<div class=\"home\">\n                <i class=\"fas fa-home home-icon icons\"></i>\n                < class=\"fas fa-arrow-left left-icon icons\"></i>\n            </div>-->\n            <div class=\"form-options\">\n                <div class=\"home-back\">\n                \t<a routerLink=\"/\"><fa class=\"left-icons home-icon icons\" data-toggle=\"tooltip\" data-placement=\"right\" title=\"Home\" data-animation=\"true\" data-delay=\"0\" [name]=\"'home'\"></fa></a>\n                \t<a href=\"javascript:void(0)\" (click)=\"backClicked()\"><fa class=\"left-icons left-icon icons\" data-toggle=\"tooltip\" data-placement=\"right\" title=\"Back\" data-animation=\"true\" data-delay=\"0\" [name]=\"'arrow-left'\"></fa></a>\n                </div>\n                <div class=\"save-edit\">\n                \t<fa class=\"save-icon icons\" data-toggle=\"tooltip\" data-placement=\"right\" title=\"Save\" data-animation=\"true\" data-delay=\"0\" [name]=\"'save'\"></fa>\n                </div>\n               <!--  <fa class=\"edit-icon icons\" [name]=\"'edit'\"></fa> -->\n            </div>\n        </div>"

/***/ }),

/***/ "../../../../../src/app/option-list/option-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OptionListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var OptionListComponent = (function () {
    function OptionListComponent(_location) {
        this._location = _location;
    }
    OptionListComponent.prototype.ngOnInit = function () {
    };
    OptionListComponent.prototype.onWindowScroll = function () {
        var number = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
        if (number > 100) {
            this.color = 'online';
            console.log('You are 100px from the top to bottom');
        }
        else {
            this.color = 'offline';
            console.log('You are 500px from the top to bottom');
        }
    };
    OptionListComponent.prototype.getColor = function () {
        return this.color === 'online' ? '#ffffff' : 'white';
    };
    OptionListComponent.prototype.getOpacity = function () {
        return this.color === 'online' ? 0.8 : 1;
    };
    OptionListComponent.prototype.backClicked = function () {
        this._location.back();
    };
    return OptionListComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])("window:scroll", []),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], OptionListComponent.prototype, "onWindowScroll", null);
OptionListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-option-list',
        template: __webpack_require__("../../../../../src/app/option-list/option-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/option-list/option-list.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common__["Location"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common__["Location"]) === "function" && _a || Object])
], OptionListComponent);

var _a;
//# sourceMappingURL=option-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/option-list/option-list.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__option_list_component__ = __webpack_require__("../../../../../src/app/option-list/option-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_fontawesome_angular2_fontawesome__ = __webpack_require__("../../../../angular2-fontawesome/angular2-fontawesome.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_fontawesome_angular2_fontawesome___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_fontawesome_angular2_fontawesome__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OptionListModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var OptionListModule = (function () {
    function OptionListModule() {
    }
    return OptionListModule;
}());
OptionListModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_3_angular2_fontawesome_angular2_fontawesome__["Angular2FontawesomeModule"],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_2__option_list_component__["a" /* OptionListComponent */]],
        exports: [__WEBPACK_IMPORTED_MODULE_2__option_list_component__["a" /* OptionListComponent */]]
    })
], OptionListModule);

//# sourceMappingURL=option-list.module.js.map

/***/ }),

/***/ "../../../../../src/app/policy-component/policy-component.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.page-description{\n    text-align: center;\n    padding: 2%;\n    text-transform: uppercase;\n}\n\n.after-heading{\n\twidth: 10%;\n\tmargin: auto;\n\tbackground-color: #3A539B;\n\tmargin-top: -15px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/policy-component/policy-component.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navigation-component></app-navigation-component>\n<app-option-list></app-option-list>\n<app-policy-forms></app-policy-forms>"

/***/ }),

/***/ "../../../../../src/app/policy-component/policy-component.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PolicyComponentComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PolicyComponentComponent = (function () {
    function PolicyComponentComponent() {
    }
    PolicyComponentComponent.prototype.ngOnInit = function () {
    };
    return PolicyComponentComponent;
}());
PolicyComponentComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-policy-component',
        template: __webpack_require__("../../../../../src/app/policy-component/policy-component.component.html"),
        styles: [__webpack_require__("../../../../../src/app/policy-component/policy-component.component.css")]
    }),
    __metadata("design:paramtypes", [])
], PolicyComponentComponent);

//# sourceMappingURL=policy-component.component.js.map

/***/ }),

/***/ "../../../../../src/app/policy-component/policy-forms/policy-forms.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".forms{\n    padding: 20px;\n    border-radius: 10px;\n    border: 1px solid transparent;\n    margin: 20px;\n    background-color: #EEEEEE;\n    overflow: hidden;\n}\n\n.asterisk{\n\tdisplay: inline;\n\tcolor: red;\n\tmargin-left: 2px;\n}\n\n.installation{\n\tpadding: 1%;\n}\n\n.buttons{\n\tfloat: right;\n}\n\n.btn{\n\tbackground-color: #3A539B;\n\tborder-color: #3A539B;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/policy-component/policy-forms/policy-forms.component.html":
/***/ (function(module, exports) {

module.exports = "<form class=\"forms\">\n\t<div class=\"form-row\">\n\t\t<div class=\"form-group col-md-6\">\n\t\t\t<label class=\"label-form\" for=\"policyEntity\"><b>Policy Entity</b></label><div class=\"asterisk\">*</div>\n              <select class=\"form-control\" id=\"policyEntity\" required (change)=\"policy($event.target.value)\">\n                <option selected>Choose...</option>\n                <option value=\"VITA\">VITA</option>\n              </select>\n\t\t</div>\n\t</div>\n</form>\n<div class=\"policy-add\" *ngIf=\"policyEntity ==='VITA'\">\n\t<div class=\"forms\">\n\t\t<div class=\"form-row\">\n\t\t\t<div class=\"installation form-group\">\n\t\t\t<label for=\"policyName\"><b>Policy Name</b></label><div class=\"asterisk\">*</div>\n            <input type=\"text\" class=\"asterisk form-control\" id=\"policyName\" required>\n            <label class=\"hosting-notes\" for=\"policyDescription\"><b>Policy Description</b></label><!-- <div class=\"asterisk-inline asterisk\">*</div> -->\n            <textarea cols=\"156\" rows=\"7\" id=\"policyDescription\" required></textarea>\n          </div>\n\t\t</div>\n\t<div class=\"buttons\">\n         \t<button type=\"cancel\" class=\"cancel btn btn-primary\">Cancel</button>\n        \t<button type=\"submit\" class=\"submit btn btn-primary\" ng-disabled=\"form.$invalid\">Submit</button>\n        </div>\n\t</div>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/policy-component/policy-forms/policy-forms.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PolicyFormsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PolicyFormsComponent = (function () {
    function PolicyFormsComponent() {
    }
    PolicyFormsComponent.prototype.ngOnInit = function () {
    };
    PolicyFormsComponent.prototype.policy = function (policyName) {
        this.policyEntity = policyName;
    };
    return PolicyFormsComponent;
}());
PolicyFormsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-policy-forms',
        template: __webpack_require__("../../../../../src/app/policy-component/policy-forms/policy-forms.component.html"),
        styles: [__webpack_require__("../../../../../src/app/policy-component/policy-forms/policy-forms.component.css")]
    }),
    __metadata("design:paramtypes", [])
], PolicyFormsComponent);

//# sourceMappingURL=policy-forms.component.js.map

/***/ }),

/***/ "../../../../../src/app/policy-view-component/policy-view-component.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/policy-view-component/policy-view-component.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navigation-component></app-navigation-component>\n<app-option-list></app-option-list>\n<app-policy-view-forms-component></app-policy-view-forms-component>\n\n"

/***/ }),

/***/ "../../../../../src/app/policy-view-component/policy-view-component.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PolicyViewComponentComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PolicyViewComponentComponent = (function () {
    function PolicyViewComponentComponent() {
        this.featureSelected = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    PolicyViewComponentComponent.prototype.onSelect = function (feature) {
        this.featureSelected.emit(feature);
    };
    PolicyViewComponentComponent.prototype.ngOnInit = function () {
    };
    return PolicyViewComponentComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], PolicyViewComponentComponent.prototype, "featureSelected", void 0);
PolicyViewComponentComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-policy-view-component',
        template: __webpack_require__("../../../../../src/app/policy-view-component/policy-view-component.component.html"),
        styles: [__webpack_require__("../../../../../src/app/policy-view-component/policy-view-component.component.css")]
    }),
    __metadata("design:paramtypes", [])
], PolicyViewComponentComponent);

//# sourceMappingURL=policy-view-component.component.js.map

/***/ }),

/***/ "../../../../../src/app/policy-view-component/policy-view-forms-component/applications/applications.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".asterisk{\n\tdisplay: inline;\n\tcolor: red;\n\tmargin-left: 2px;\n}\n\n.applications{\n\tmargin-top: 15px;\n}\n\ntable{\n\tbackground-color: #ffffff;\n}\n\ntable thead tr th{\n\tfont-weight: 500;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/policy-view-component/policy-view-forms-component/applications/applications.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"applications\">\n\t\t\t\t<span><b>APPLICATIONS</b></span>\n\t\t\t<hr />\n\t\t\t</div>\n<table class=\"table table-bordered table-dark\">\n\t<thead>\n\t\t    <tr>\n\t\t      <th scope=\"col\">Acronym</th>\n\t\t      <th scope=\"col\">Name</th>\n\t\t      <th scope=\"col\">Business Owner</th>\n\t\t      <th scope=\"col\">Project Manager</th>\n\t\t    </tr>\n\t\t  </thead>\n</table>"

/***/ }),

/***/ "../../../../../src/app/policy-view-component/policy-view-forms-component/applications/applications.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApplicationsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ApplicationsComponent = (function () {
    function ApplicationsComponent() {
    }
    ApplicationsComponent.prototype.ngOnInit = function () {
    };
    return ApplicationsComponent;
}());
ApplicationsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-applications',
        template: __webpack_require__("../../../../../src/app/policy-view-component/policy-view-forms-component/applications/applications.component.html"),
        styles: [__webpack_require__("../../../../../src/app/policy-view-component/policy-view-forms-component/applications/applications.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ApplicationsComponent);

//# sourceMappingURL=applications.component.js.map

/***/ }),

/***/ "../../../../../src/app/policy-view-component/policy-view-forms-component/documents/dialog-box/dialog-box.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".model-solution-row{\n\tpadding: 1%;\n}\n\n.asterisk{\n\tdisplay: inline;\n\tcolor: red;\n\tmargin-left: 2px;\n}\n\n.btn{\n\tbackground-color: #3A539B;\n\tborder-color: #3A539B;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/policy-view-component/policy-view-forms-component/documents/dialog-box/dialog-box.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"modal-header\">\n      <h4 class=\"modal-title\">Hi there!</h4>\n      <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"activeModal.dismiss('Cross click')\">\n        <span aria-hidden=\"true\">&times;</span>\n      </button>\n    </div>\n    <div class=\"modal-body\">\n      <p>Hello, {{name}}!</p>\n    </div>\n    <div class=\"modal-footer\">\n      <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"activeModal.close('Close click')\">Close</button>\n    </div> -->"

/***/ }),

/***/ "../../../../../src/app/policy-view-component/policy-view-forms-component/documents/dialog-box/dialog-box.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DialogBoxComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DialogBoxComponent = (function () {
    function DialogBoxComponent() {
    }
    DialogBoxComponent.prototype.ngOnInit = function () {
    };
    return DialogBoxComponent;
}());
DialogBoxComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-dialog-box',
        template: __webpack_require__("../../../../../src/app/policy-view-component/policy-view-forms-component/documents/dialog-box/dialog-box.component.html"),
        styles: [__webpack_require__("../../../../../src/app/policy-view-component/policy-view-forms-component/documents/dialog-box/dialog-box.component.css")]
    }),
    __metadata("design:paramtypes", [])
], DialogBoxComponent);

//# sourceMappingURL=dialog-box.component.js.map

/***/ }),

/***/ "../../../../../src/app/policy-view-component/policy-view-forms-component/documents/documents.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".asterisk{\n\tdisplay: inline;\n\tcolor: red;\n\tmargin-left: 2px;\n}\n\n.documents{\n\tmargin-top: 15px;\n}\n\n.policy-edit{\n\tfloat: right;\n}\n\n.icons{\n    vertical-align: middle;\n    font-size: 20px;\n    margin-top: -20px;\n    padding: 2px;\n    margin-left: 5px;\n}\n\n.edit-icon{\n    /*margin-left: 10px;*/\n    color: #3A539B;\n}\n\n.download-icon{\n\tcolor: #3A539B;\n}\n\n.save-icon{\n\tcolor: #3A539B;\n}\n\n.close-icon{\n\tcolor: #3A539B;\n}\n\n.installation{\n\tpadding: 1%;\n}\n\n.hosting-notes{\n\tdisplay: block;\n\t/*margin-top: 20px;*/\n}\n\n.modal-header{\n\tbackground-color: #3A539B;\n\tcolor: #ffffff;\n}\n\n.btn{\n\tbackground-color: #3A539B;\n\tborder-color: #3A539B;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/policy-view-component/policy-view-forms-component/documents/documents.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"documents\">\n\t\t\t\t<span><b>DOCUMENTS</b></span>\n\t\t\t\t\t<div class=\"policy-edit\"><fa class=\"edit-icon icons\" (click)=\"changeButton()\" *ngIf=\"plus\" data-toggle=\"tooltip\" data-placement=\"right\" title=\"Save\" data-animation=\"true\" data-delay=\"0\" [name]=\"'edit'\"></fa>\n\t\t\t\t\t\t<fa (click)=\"open(content)\" *ngIf=\"!plus\" [name]=\"'download'\" class=\"download-icon icons\"></fa>\n\t\t\t\t\t\t<fa *ngIf=\"!plus\" class=\"save-icon icons\" [name]=\"'save'\"></fa>\n\t\t\t\t\t\t<fa (click)=close() *ngIf=\"!plus\" class=\"close-icon icons\" [name]=\"'times-circle'\"></fa>\n\t\t\t\t\t</div>\n\t\t\t<hr />\n \t\t</div>\n<ng-template #content let-c=\"close\" let-d=\"dismiss\">\n  <div class=\"modal-header\">\n    <h4 class=\"modal-title\" id=\"modal-basic-title\">Policy Documents</h4>\n    <!-- <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button> -->\n  </div>\n  <div class=\"modal-body\">\n    <form>\n    \t<div class=\"form-row\">\n    \t\t<div class=\"form-group col-12\">\n    \t\t\t<label for=\"attachments\"><b>Attachment</b></label>\n    \t\t\t<input id=\"attachments\" class=\"form-control\" type=\"file\" />\n    \t\t</div>\n    \t</div>\n    \t<hr />\n    \t<div class=\"form-row\">\n    \t\t<div class=\"form-group col-12\">\n    \t\t\t<label for=\"fileList\"><b>Attachment</b></label>\n    \t\t</div>\n    \t</div>\n    </form>\n  </div>\n  <div class=\"modal-footer\">\n    <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"c('Save click')\">Cancel</button>\n    <button type=\"button\" class=\"btn btn-outline-dark\">Upload</button>\n  </div>\n</ng-template>\n<div class=\"installation form-group\">\n            <label class=\"hosting-notes\" for=\"policyResources\"><b>Policy Resources</b></label><!-- <div class=\"asterisk-inline asterisk\">*</div> -->\n            <textarea cols=\"156\" rows=\"7\" id=\"Policy Resources\" ngModel name=\"policyResurces\" required></textarea>\n          </div>"

/***/ }),

/***/ "../../../../../src/app/policy-view-component/policy-view-forms-component/documents/documents.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DocumentsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DocumentsComponent = (function () {
    function DocumentsComponent(modalService) {
        this.modalService = modalService;
        this.plus = true;
    }
    DocumentsComponent.prototype.open = function (content) {
        this.modalService.open(content);
    };
    DocumentsComponent.prototype.changeButton = function () {
        this.plus = false;
    };
    DocumentsComponent.prototype.close = function () {
        this.plus = true;
    };
    DocumentsComponent.prototype.ngOnInit = function () {
    };
    return DocumentsComponent;
}());
DocumentsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'app-documents',
        template: __webpack_require__("../../../../../src/app/policy-view-component/policy-view-forms-component/documents/documents.component.html"),
        styles: [__webpack_require__("../../../../../src/app/policy-view-component/policy-view-forms-component/documents/documents.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */]) === "function" && _a || Object])
], DocumentsComponent);

var _a;
//# sourceMappingURL=documents.component.js.map

/***/ }),

/***/ "../../../../../src/app/policy-view-component/policy-view-forms-component/policy-details/policy-details.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".asterisk{\n\tdisplay: inline;\n\tcolor: red;\n\tmargin-left: 2px;\n}\n\n.policies{\n\tmargin-top: 15px;\n}\n\n.policy-edit{\n\tfloat: right;\n}\n\n.icons{\n    vertical-align: middle;\n    font-size: 20px;\n    margin-top: -20px;\n    padding: 2px;\n    margin-left: 5px;\n}\n\n.download-icon{\n\tcolor: #3A539B;\n}\n\n.edit-icon{\n\tcolor: #3A539B;\n}\n\n.upload-icon{\n\tcolor: #3A539B;\n}\n\n.plus-icon{\n\tcolor: #3A539B;\n}\n\n.save-icon{\n\tcolor: #3A539B;\n}\n\n.close-icon{\n\tcolor: #3A539B;\n}\n\ninput[readonly] {\n\tbackground-color: #ffffff;\n\t}\n\ntable{\n\tbackground-color: #ffffff;\n\ttext-align: center;\n}\n\ntable thead tr th{\n\tfont-weight: 500;\n}\n\n.modal-header{\n\tbackground-color: #3A539B;\n\tcolor: #ffffff;\n}\n\n.btn{\n\tbackground-color: #3A539B;\n\tborder-color: #3A539B;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/policy-view-component/policy-view-forms-component/policy-details/policy-details.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"policies\">\n\t\t\t\t<span><b>POLICIES</b></span>\n\t\t\t\t<div class=\"policy-edit\">\n\t\t\t\t<fa *ngIf=\"plus\" [name]=\"'download'\" class=\"download-icon icons\"></fa>\n\t\t\t\t<fa class=\"edit-icon icons\" (click)=\"changeButton()\" *ngIf=\"plus\" data-toggle=\"tooltip\" data-placement=\"right\" title=\"Save\" data-animation=\"true\" data-delay=\"0\" [name]=\"'edit'\"></fa>\n\t\t\t\t\t\t<fa (click)=\"open(content)\" *ngIf=\"!plus\" [name]=\"'upload'\" class=\"upload-icon icons\"></fa>\n\t\t\t\t\t\t<fa *ngIf=\"!plus\" [name]=\"'plus'\" class=\"plus-icon icons\"></fa>\n\t\t\t\t\t\t<fa *ngIf=\"!plus\" class=\"save-icon icons\" [name]=\"'save'\"></fa>\n\t\t\t\t\t\t<fa (click)=\"close()\" *ngIf=\"!plus\" class=\"close-icon icons\" [name]=\"'times-circle'\"></fa>\n\t\t\t\t\t</div>\n\t\t\t<hr />\n\t\t\t</div>\n\t\t\t<ng-template #content let-c=\"close\" let-d=\"dismiss\">\n\t\t\t  <div class=\"modal-header\">\n\t\t\t    <h4 class=\"modal-title\" id=\"modal-basic-title\">Policy File</h4>\n\t\t\t    <!-- <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\n\t\t\t      <span aria-hidden=\"true\">&times;</span>\n\t\t\t    </button> -->\n\t\t\t  </div>\n\t\t\t  <div class=\"modal-body\">\n\t\t\t    <form>\n\t\t\t    \t<div class=\"form-row\">\n\t\t\t    \t\t<div class=\"form-group col-12\">\n\t\t\t    \t\t\t<!-- <label for=\"attachments\"><b>Attachment</b></label> -->\n\t\t\t    \t\t\t<input id=\"attachments\" class=\"form-control\" type=\"file\" />\n\t\t\t    \t\t</div>\n\t\t\t    \t</div>\n\t\t\t    \t<hr />\n\t\t\t    \t<!-- <div class=\"form-row\">\n\t\t\t    \t\t<div class=\"form-group col-12\">\n\t\t\t    \t\t\t<label for=\"fileList\"><b>Attachment</b></label>\n\t\t\t    \t\t</div>\n\t\t\t    \t</div> -->\n\t\t\t    </form>\n\t\t\t  </div>\n\t\t\t  <div class=\"modal-footer\">\n\t\t\t    <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"c('Save click')\">Close</button>\n\t\t\t    <button type=\"button\" class=\"btn btn-outline-dark\">Upload</button>\n\t\t\t  </div>\n</ng-template>\n\t\t\t<!-- <div class=\"model-solution-row form-row\">\n            \t<div class=\"model form-group col-md-6\">\n            <label class=\"label-form\" for=\"definitiveSourceInput\">Definitive Source</label><div class=\"asterisk\">*</div>\n              <input type=\"text\" class=\"form-control\" id=\"definitiveSourceInput\" readonly value=\"VITA\">\n              <!-- <div class=\"hover-icon\"><fa class=\"ban\" [name]=\"'ban'\"></fa></div>\n            \t</div>\n            \t<div class=\"version form-group col-md-6\">\n            \t\t<label class=\"label-form\" for=\"updatedBy\">Updated By</label><div class=\"asterisk\">*</div>\n\t\t              <input type=\"text\" class=\"form-control\" id=\"updatedBy\" readonly value=\"Sunny Singh\">\n            \t</div>\n            \t<div class=\"form-group col-md-6\">\n            <label class=\"label-form\" for=\"Type/Policy\">Type/Policy</label><div class=\"asterisk\">*</div>\n              <input type=\"text\" class=\"form-control\" id=\"Type/Policy\" readonly value=\"IT Information Security Standard (SEC501-09.1)\">\n            \t</div>\n            \t<div class=\"form-group col-md-6\">\n            \t\t<label class=\"label-form\" for=\"updtedAt\">Updated At</label><div class=\"asterisk\">*</div>\n\t\t              <input type=\"text\" class=\"form-control\" id=\"updatedAt\" readonly value=\"14-05-2018\">\n            \t</div>\n            </div> -->\n\t\t<div class=\"description\">\n\t\t\t<h5>DESCRIPTION</h5>\n\t\t\t<div class=\"model-solution-row form-row\">\n            \t<div class=\"model form-group col-md-6\">\n            <label class=\"label-form\" for=\"lastReviewDate\">Last Review Date</label><div class=\"asterisk\">*</div>\n              <input type=\"text\" class=\"edit-disable form-control\" id=\"lastReviewDate\" readonly value=\"17-10-2017\">\n            \t</div>\n            \t<div class=\"version form-group col-md-6\">\n            \t\t<label class=\"label-form\" for=\"nextReviewDate\">Next Review Date</label><div class=\"asterisk\">*</div>\n\t\t              <input type=\"text\" class=\"edit-disable form-control\" id=\"nextReviewDate\" readonly value=\"15-10-2018\">\n            \t</div>\n            \t<div class=\"form-group col-md-6\">\n            <label class=\"label-form\" for=\"owner\">Owner</label><div class=\"asterisk\">*</div>\n              <input type=\"text\" class=\"edit-disable form-control\" id=\"owner\" readonly>\n            \t</div>\n            \t<div class=\"form-group col-md-6\">\n            \t\t<label class=\"label-form\" for=\"policyReviewTeam\">Policy Review Team</label><div class=\"asterisk\">*</div>\n\t\t              <input type=\"text\" class=\"edit-disable form-control\" id=\"policyReviewTeam\" readonly>\n            \t</div>\n            \t<div class=\"form-group col-md-6\">\n            \t\t<label class=\"label-form\" for=\"status\">Status</label><div class=\"asterisk\">*</div>\n\t\t              <input type=\"text\" class=\"form-control\" id=\"status\" readonly value=\"Open\">\n            \t</div>\n            </div>\n\t\t</div>\n\t\t<hr />\n\t\t<h5>CONTROLS</h5>\n\t\t<table class=\"table table-bordered table-dark\">\n\t\t  <thead>\n\t\t    <tr>\n\t\t      <th scope=\"col\">Control Number</th>\n\t\t      <th scope=\"col\">Policy Name</th>\n\t\t      <th scope=\"col\">Priority</th>\n\t\t      <th scope=\"col\">Policy Value</th>\n\t\t      <th scope=\"col\">Assigned To</th>\n\t\t      <th scope=\"col\">Assigned By</th>\n\t\t      <th scope=\"col\">Assigned On</th>\n\t\t      <th scope=\"col\">Target Date</th>\n\t\t      <th scope=\"col\">Status</th>\n\t\t    </tr>\n\t\t  </thead>\n\t\t  <tbody>\n\t\t    <tr *ngFor = \"let policy of policies\">\n\t\t      <td>{{ policy.controlNumber }}</td>\n\t\t      <td>{{ policy.policyName }}</td>\n\t\t      <td>{{ policy.priority }}</td>\n\t\t      <td>{{ policy.policyVal }}</td>\n\t\t      <td></td>\n\t\t      <td></td>\n\t\t      <td></td>\n\t\t      <td></td>\n\t\t      <td>{{ policy.status }}</td>\n\t\t    </tr>\n\t\t  </tbody>\n\t\t   \n\t\t\t</table>"

/***/ }),

/***/ "../../../../../src/app/policy-view-component/policy-view-forms-component/policy-details/policy-details.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_modelPolicy__ = __webpack_require__("../../../../../src/app/data_modelPolicy.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__apiservice_service__ = __webpack_require__("../../../../../src/app/apiservice.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PolicyDetailsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PolicyDetailsComponent = (function () {
    function PolicyDetailsComponent(modalService, _apiservice) {
        this.modalService = modalService;
        this._apiservice = _apiservice;
        this.plus = true;
        this.policyDisplay = new __WEBPACK_IMPORTED_MODULE_2__data_modelPolicy__["a" /* PolicyGrp */]();
        this.policies = [];
    }
    PolicyDetailsComponent.prototype.open = function (content) {
        this.modalService.open(content);
    };
    PolicyDetailsComponent.prototype.changeButton = function () {
        this.plus = false;
    };
    PolicyDetailsComponent.prototype.close = function () {
        this.plus = true;
    };
    PolicyDetailsComponent.prototype.ngOnInit = function () {
        this.fetchPolicies(1);
    };
    PolicyDetailsComponent.prototype.fetchPolicies = function (id) {
        var _this = this;
        this._apiservice.fetchPolicies(id)
            .subscribe(function (data) {
            _this.policyDisplay = data.policyGrpDTO;
            _this.policies = data.policyDTOs;
            console.log(_this.policies);
            console.log(_this.policyDisplay);
            console.log(_this.policyDisplay.updatedBy);
            console.log(_this.policyDisplay.updatedTs);
            var date = _this.policyDisplay.updatedTs;
            /*var dt = new Date(0);
            //console.log(dt.setUTCSeconds(utcSeconds));
               let d = new Date(this.policyDisplay.updatedTs * 1000);
               this.selectDate = {
                  year: d.getFullYear(),
                 month: d.getMonth() + 1,
                 day: d.getDate()
               }*/
        }, function (error) { return console.log(error); });
    };
    return PolicyDetailsComponent;
}());
PolicyDetailsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-policy-details',
        template: __webpack_require__("../../../../../src/app/policy-view-component/policy-view-forms-component/policy-details/policy-details.component.html"),
        styles: [__webpack_require__("../../../../../src/app/policy-view-component/policy-view-forms-component/policy-details/policy-details.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_3__apiservice_service__["a" /* ApiserviceService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__apiservice_service__["a" /* ApiserviceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__apiservice_service__["a" /* ApiserviceService */]) === "function" && _b || Object])
], PolicyDetailsComponent);

var _a, _b;
//# sourceMappingURL=policy-details.component.js.map

/***/ }),

/***/ "../../../../../src/app/policy-view-component/policy-view-forms-component/policy-view-forms-component.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".forms{\n    padding: 20px;\n    border-radius: 10px;\n    border: 1px solid transparent;\n    margin: 20px;\n    background-color: #EEEEEE;\n    overflow: hidden;\n}\n\n.asterisk{\n\tdisplay: inline;\n\tcolor: red;\n\tmargin-left: 2px;\n}\n\n.policies{\n\tmargin-top: 15px;\n}\n\ninput[readonly] {\n\tbackground-color: #ffffff;\n\t}\n\n\n.ban{\n\tcolor: #D91E18;\n}\n\n.hover-icon{\n\tvisibility: hidden;\n}\n\n.hover-icon:hover{\n\tvisbility: visible;\n}\n\n.help{\n\tfont-size: 15px;\n\tcolor: #3A539B;\n}\n\n.nav-link{\n\tcolor: black;\n\tmargin-left: 10px;\n}\n\n.table{\n\t\n}\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/policy-view-component/policy-view-forms-component/policy-view-forms-component.component.html":
/***/ (function(module, exports) {

module.exports = "<form class=\"forms\">\n\t<div class=\"form-row\">\n\t\t<div class=\"form-group col-md-6\">\n\t\t\t<label class=\"label-form\" for=\"definitiveSource\"><b>Definitive Source</b></label><div class=\"asterisk\">*</div>\n              <select class=\"form-control\" id=\"definitiveSource\" required (change)=\"selectDefinitive($event.target.value)\">\n                <option selected>Choose...</option>\n                <option  *ngFor=\"let auditType of auditTypes\" value=\"{{ auditType.auditTypeId }}\">{{ auditType.auditTypeName  }}</option>\n              </select>\n\t\t</div>\n\t\t<div class=\"form-group col-md-6\">\n\t\t\t<label class=\"label-form\" for=\"typePolicy\"><b>Type/Policy</b></label><div class=\"asterisk\">*</div>\n              <select class=\"form-control\" id=\"typePolicy\" required (change)=\"selectType($event.target.value)\">\n                <option selected>Choose...</option>\n                <option *ngFor=\"let policyType of  policyTypes\" value=\"{{ policyType.policyGrpId }}\">{{ policyType.policyGrpName }}</option>\n              </select>\n\t\t</div>\n\t</div>\n\t<div class=\"prepopulated\" *ngIf = \"definitive == true && policy== true \">\n\t\t<div class=\"model-solution-row form-row\">\n            \t<!-- <div class=\"model form-group col-md-6\">\n            <label class=\"label-form\" for=\"definitiveSourceInput\">Definitive Source</label><div class=\"asterisk\">*</div>\n              <input type=\"text\" class=\"edit-disable form-control\" id=\"definitiveSourceInput\" readonly [(ngModel)] = \"policy.definitiveSource\">\n              <div class=\"hover-icon\"><fa class=\"ban\" [name]=\"'ban'\"></fa></div>\n            \t</div> -->\n            \t<div class=\"version form-group col-md-6\">\n            \t\t<label class=\"label-form\" for=\"updatedBy\">Updated By</label><div class=\"asterisk\">*</div>\n\t\t              <input type=\"text\" class=\"edit-disable form-control\" id=\"updatedBy\" readonly [(ngModel)] = \"policyDisplay.updatedBy\" [name] = \"'updated_by'\">\n            \t</div>\n            \t<!-- <div class=\"form-group col-md-6\">\n            <label class=\"label-form\" for=\"Type/Policy\">Type/Policy</label><div class=\"asterisk\">*</div>\n              <input type=\"text\" class=\"edit-disable form-control\" id=\"Type/Policy\" readonly [(ngModel)] = \"policy.description\">\n            \t</div>\n -->            \t<div class=\"form-group col-md-6\">\n            \t\t<label class=\"label-form\" for=\"updtedAt\">Updated At</label><div class=\"asterisk\">*</div>\n\t\t              <input type=\"text\" class=\"edit-disable form-control\" id=\"updatedAt\" readonly [(ngModel)] = \"policyDisplay.updatedTs\" [name] = \"'updated_ts'\">\n\t\t              <!-- <input type=\"text\" class=\"edit-disable form-control\" id=\"updatedAt\" readonly [(ngModel)] = \"policyDisplay.updatedTs\" [selDate] = \"selectDate\"> -->\n            \t</div> \n            </div>\n\t</div>\n</form>\n<div class=\"forms\" *ngIf = \"definitive == true && policy== true \">\n\t<div class=\"policy-section\">\n\t\t<div><ul class=\"nav nav-tabs\">\n\t\t  <li class=\"nav-item\">\n\t\t    <a class=\"nav-link active\" routerLinkActive=\"active\" routerLink=\"policyDetails\" [routerLinkActiveOptions]=\"{exact: true}\"><fa class=\"help\" [name]=\"'info-circle'\"></fa>Policy Details</a>\n\t\t  </li>\n\t\t  <li class=\"nav-item\">\n\t\t    <a class=\"nav-link\" routerLinkActive=\"active\" routerLink=\"review\"><fa class=\"file-signature help\" [name]=\"'info-circle'\"></fa>Review Section</a>\n\t\t  </li>\n\t\t  <li class=\"nav-item\">\n\t\t    <a class=\"nav-link\" routerLinkActive=\"active\" routerLink=\"documents\"><fa class=\"file-alt help\" [name]=\"'info-circle'\"></fa>Documents</a>\n\t\t  </li>\n\t\t  <li class=\"nav-item\">\n\t\t    <a class=\"nav-link\" routerLinkActive=\"active\" routerLink=\"applications\"><fa class=\"mobile-android help\" [name]=\"'info-circle'\"></fa>Applications</a>\n\t\t  </li>\n\t\t</ul>\n\t\t</div>\n\t\t<router-outlet></router-outlet>\n\t</div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/policy-view-component/policy-view-forms-component/policy-view-forms-component.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__apiservice_service__ = __webpack_require__("../../../../../src/app/apiservice.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_modelPolicy__ = __webpack_require__("../../../../../src/app/data_modelPolicy.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PolicyViewFormsComponentComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PolicyViewFormsComponentComponent = (function () {
    //public selectDate: IMyDate = null;
    function PolicyViewFormsComponentComponent(_apiservice) {
        this._apiservice = _apiservice;
        this.policyDisplay = new __WEBPACK_IMPORTED_MODULE_2__data_modelPolicy__["a" /* PolicyGrp */]();
    }
    PolicyViewFormsComponentComponent.prototype.ngOnInit = function () {
        this.fetchPolicies(1);
        this.showDropdown();
    };
    PolicyViewFormsComponentComponent.prototype.selectType = function (policy) {
        if (policy === 'Choose...') {
            this.policy = false;
        }
        else {
            this.policy = true;
        }
    };
    PolicyViewFormsComponentComponent.prototype.showDropdown = function () {
        var _this = this;
        this._apiservice.getAuditTypes()
            .subscribe(function (data) {
            _this.auditTypes = data;
        }, function (error) { console.log(error); });
    };
    PolicyViewFormsComponentComponent.prototype.selectDefinitive = function (auditID) {
        var _this = this;
        if (auditID === 'Choose...') {
            this.definitive = false;
        }
        else {
            this.definitive = true;
        }
        if (this.policyTypes == undefined) {
            this._apiservice.getPolicyGroup(auditID)
                .subscribe(function (data) {
                _this.policyTypes = data;
            }, function (error) { console.log(error); });
        }
    };
    PolicyViewFormsComponentComponent.prototype.fetchPolicies = function (id) {
        var _this = this;
        this._apiservice.fetchPolicies(id)
            .subscribe(function (data) {
            _this.policyDisplay = data.policyGrpDTO;
            //console.log(this.policies);
            console.log(_this.policyDisplay);
            console.log(_this.policyDisplay.updatedBy);
            console.log(_this.policyDisplay.updatedTs);
            var date = _this.policyDisplay.updatedTs;
            /*var dt = new Date(0);
            //console.log(dt.setUTCSeconds(utcSeconds));
               let d = new Date(this.policyDisplay.updatedTs * 1000);
               this.selectDate = {
                  year: d.getFullYear(),
                 month: d.getMonth() + 1,
                 day: d.getDate()
               }*/
        }, function (error) { return console.log(error); });
    };
    return PolicyViewFormsComponentComponent;
}());
PolicyViewFormsComponentComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'app-policy-view-forms-component',
        template: __webpack_require__("../../../../../src/app/policy-view-component/policy-view-forms-component/policy-view-forms-component.component.html"),
        styles: [__webpack_require__("../../../../../src/app/policy-view-component/policy-view-forms-component/policy-view-forms-component.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_0__apiservice_service__["a" /* ApiserviceService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__apiservice_service__["a" /* ApiserviceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__apiservice_service__["a" /* ApiserviceService */]) === "function" && _a || Object])
], PolicyViewFormsComponentComponent);

var _a;
//# sourceMappingURL=policy-view-forms-component.component.js.map

/***/ }),

/***/ "../../../../../src/app/policy-view-component/policy-view-forms-component/review/review.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".asterisk{\n\tdisplay: inline;\n\tcolor: red;\n\tmargin-left: 2px;\n}\n\n.review{\n\tmargin-top: 15px;\n}\n\ntable{\n\tbackground-color: #ffffff;\n}\n\n.policy-edit{\n\tfloat: right;\n}\n\n.icons{\n    vertical-align: middle;\n    font-size: 20px;\n    margin-top: -20px;\n    padding: 2px;\n    margin-left: 5px;\n}\n\n.edit-icon{\n    /*margin-left: 10px;*/\n    color: #3A539B;\n}\n\n.plus-icon{\n\tcolor: #3A539B;\n}\n\ntable thead tr th{\n\tfont-weight: 500;\n}\n\n.add{\n\tmargin-bottom: 10px;\n}\n\n.modal-header{\n\tbackground-color: #3A539B;\n\tcolor: #ffffff;\n}\n\n.btn{\n\tbackground-color: #3A539B;\n\tborder-color: #3A539B;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/policy-view-component/policy-view-forms-component/review/review.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"review\">\n\t\t\t\t<span><b>POLICY REVIEWER(S)</b></span>\n\t\t\t\t<div class=\"policy-edit\"><!-- <fa (click)=\"open(content)\" *ngIf=\"plus\" class=\"edit-icon icons\" data-toggle=\"tooltip\" data-placement=\"right\" title=\"Save\" data-animation=\"true\" data-delay=\"0\" [name]=\"'edit'\"></fa> -->\n\t\t\t\t<fa (click)=\"changeButton()\" *ngIf=\"plus\" class=\"edit-icon icons\" data-toggle=\"tooltip\" data-placement=\"right\" title=\"Save\" data-animation=\"true\" data-delay=\"0\" [name]=\"'edit'\"></fa>\n\t\t\t\t<fa (click)=\"open(content)\" *ngIf=\"!plus\" class=\"plus-icon\" [name]=\"'plus'\"></fa>\n\t\t\t\t</div>\n\t\t\t<hr />\n\t\t\t</div>\n<ng-template #content let-c=\"close\" let-d=\"dismiss\">\n  <div class=\"modal-header\">\n    <h4 class=\"modal-title\" id=\"modal-basic-title\">Adding Policy Reviewer(s)</h4>\n    <!-- <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button> -->\n  </div>\n  <div class=\"modal-body\">\n    <form  #form=\"ngForm\">\n      <div class=\"form-row\">\n            <div class=\"form-group col-12\">\n                <label for=\"searchUser\"><b>Search User</b></label>\n                <div class=\"asterisk\">*</div>\n                <input type=\"text\" class=\"form-control\" id=\"searchUser\" ngModel name=\"searchUser\" placeholder=\"Search Users\" required>\n            </div>\n            <div class=\"form-group col-12\">\n                <label for=\"dueDate\"><b>Due Date</b></label>\n                <my-date-picker name=\"myname\"></my-date-picker>\n            </div>\n        </div>\n        <button type=\"submit\" class=\"add btn btn-primary\" [disabled]=\"!form.valid\">Add</button>\n    </form>\n    <hr />\n    <table class=\"table table-bordered table-dark\">\n\t<thead>\n\t\t    <tr>\n\t\t      <th scope=\"col\">Assign To</th>\n\t\t      <th scope=\"col\">Due Date</th>\n\t\t    </tr>\n\t\t  </thead>\n</table>\n  </div>\n  <div class=\"modal-footer\">\n    <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"c('Save click')\">Close</button>\n    <button type=\"button\" class=\"btn btn-outline-dark\">Assign</button>\n  </div>\n</ng-template>\n<table class=\"table table-bordered table-dark\">\n\t<thead>\n\t\t    <tr>\n\t\t      <th scope=\"col\">Policy Name</th>\n\t\t      <th scope=\"col\">Assigned To</th>\n\t\t      <th scope=\"col\">Assigned On</th>\n\t\t      <th scope=\"col\">Due Date</th>\n\t\t      <th scope=\"col\">Status</th>\n\t\t      <th scope=\"col\">Notify</th>\n\t\t    </tr>\n\t\t  </thead>\n</table>"

/***/ }),

/***/ "../../../../../src/app/policy-view-component/policy-view-forms-component/review/review.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReviewComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ReviewComponent = (function () {
    function ReviewComponent(modalService) {
        this.modalService = modalService;
        this.plus = true;
    }
    ReviewComponent.prototype.ngOnInit = function () {
    };
    ReviewComponent.prototype.open = function (content) {
        this.modalService.open(content);
        //this.plus=false;
    };
    ReviewComponent.prototype.changeButton = function () {
        this.plus = false;
    };
    ReviewComponent.prototype.onSubmit = function () {
        console.log(this.popUpForm);
    };
    return ReviewComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('form'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* NgForm */]) === "function" && _a || Object)
], ReviewComponent.prototype, "popUpForm", void 0);
ReviewComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-review',
        template: __webpack_require__("../../../../../src/app/policy-view-component/policy-view-forms-component/review/review.component.html"),
        styles: [__webpack_require__("../../../../../src/app/policy-view-component/policy-view-forms-component/review/review.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */]) === "function" && _b || Object])
], ReviewComponent);

var _a, _b;
//# sourceMappingURL=review.component.js.map

/***/ }),

/***/ "../../../../../src/app/services/register.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col-lg-12\">\n            <table border=\"2px\" style=\"width:100%;\">\n                <thead style=\"background-color: gray\">\n                    <th>name</th>\n                    <th>capital</th>\n                    <th>flag</th>\n                </thead>\n                <tbody>\n                \t<tr *ngFor=\"let x of data\">\n                \t\t<td>x.vendorsDTOs.name</td>\n                </tbody>\n                </table>\n               \n        \n       "

/***/ }),

/***/ "../../../../../src/app/services/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__register_service__ = __webpack_require__("../../../../../src/app/services/register.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RegisterComponent = (function () {
    function RegisterComponent(_service) {
        this._service = _service;
    }
    RegisterComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._service.registerVendor().subscribe(function (res) {
            _this.data = res;
            _this.totalRec = _this.data.length;
            console.log(_this.totalRec);
            (function (err) { return console.log(err); });
        });
    };
    return RegisterComponent;
}());
RegisterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-register',
        template: __webpack_require__("../../../../../src/app/services/register.component.html"),
        providers: [__WEBPACK_IMPORTED_MODULE_1__register_service__["a" /* RegisterService */]]
    })
    /**
     * New typescript file
     */
    ,
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__register_service__["a" /* RegisterService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__register_service__["a" /* RegisterService */]) === "function" && _a || Object])
], RegisterComponent);

var _a;
//# sourceMappingURL=register.component.js.map

/***/ }),

/***/ "../../../../../src/app/services/register.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RegisterService = (function () {
    function RegisterService(http) {
        this.http = http;
    }
    RegisterService.prototype.registerVendor = function () {
        return this.http.get('http://localhost:8080/ApplicationPortfolioManager/services/getVendors')
            .map(function (res) {
            return res.json();
            //    .subscribe(data => {
            //    console.log(data);
            //    },error => console.log(error));
        });
    };
    return RegisterService;
}());
RegisterService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], RegisterService);

var _a;
//# sourceMappingURL=register.service.js.map

/***/ }),

/***/ "../../../../../src/app/solution-view-component/solution-table/solution-table.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "table {\n  display: table;\n\n}\n\n\nth {\n  font-weight: bold;\n  color: black;\n  background-color: #cecfd5;\n  text-align: left;\n \n\n}\ntbody tr:nth-child(even) {\n  background-color: #ffffff; \n  \n}\ntd {\n  text-align: left;\n  border-bottom: 1px solid #cecfd5;\n  border-right: 1px solid #cecfd5;\n}\ntd:first-child {\n  border-left: 1px solid #cecfd5;\n}\n\n\n\n.forms{\n  padding: 20px;\n  border-radius: 10px;\n  border: 1px solid transparent;\n  margin: 20px;\n  background-color: #EEEEEE;\n}\n\ntable-fixed thead {\n  width: 97%;\n}\n.table-fixed tbody {\n  height: 230px;\n  overflow-y: auto;\n  width: 100%;\n}\n.table-fixed thead, .table-fixed tbody, .table-fixed tr, .table-fixed td, .table-fixed th {\n  display: block;\n}\n.table-fixed tbody td, .table-fixed thead > tr> th {\n  float: left;\n  border-bottom-width: 0;\n}\n\n\n\n\n\n\n\n\n\n\n\n\n.rTable {\n  display: table;\n  width: 100%;\n  margin-left:50%;\n\n}\n.rTableRow {\n  display: table-row;\n\n}\n\n\n\n\n.rTableHeading {\n  display: table-header-group;\n\n}\n.rTableCell, .rTableHead {\n  display: table-cell;\n  padding: 10px 10px;\n  border: 1px solid ;\n\n}\n.rTableHead{\n\n  font-weight: bold;\n\n}\n\n.rTableHeading {\n  display: table-header-group;\n  /*background-color: white;*/\n  font-weight: bold;\n}\n.rTableFoot {\n  display: table-footer-group;\n  font-weight: bold;\n\n}\n.rTableBody {\n  display: table-row-group;\n}\n\n*{\n  box-sizing: border-box;\n  margin: 0;\n  /* padding: 0;*/\n}\n\n.navigate{\n  margin: 15px;\n  padding: 5px;\n}\n\n.form-options{\n  float: left;\n  margin-right: 15px;\n  margin-top: -15px;\n  padding: 5px;\n}\n\n.icons{\n  vertical-align: middle;\n  font-size: 20px;\n  margin-top: -20px;\n  padding: 2px;\n  margin-left: 5px;\n}\n\n.home-icon{\n  color: #3A539B;\n}\n\n.edit-icon{\n  /*margin-left: 10px;*/\n  color: #3A539B;\n}\n\n.left-icon{\n  /*margin-left: 10px;*/\n  color: #3A539B;\n}\n\n.save-icon{\n  color: #3A539B;\n}\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.p-4{\n  background-color: #2C3E50;\n  border-top: 1px solid #ECF0F1;\n}\n\nnav{\n  background-color: #3A539B;\n  text-align: center;\n  position: relative;\n}\n\n.heading{\n  color: white;\n}\n\nimg{\n  width: 10%;\n\n}\n\n.user{\n  position: absolute;\n  font-size: 10px;\n  color: white;\n  right: 50px;\n  margin-right: 10px;\n}\n\n.down-icon{\n  font-size: 10px;\n  margin-left: 3px;\n  color: white;\n}\n\n.navigate-toggle{\n  color: white;\n}\n\n.btn{\n  margin-left: 30px;\n}\n\nh1{\n  color: white;\n}\n\nspan{\n  color: white;\n}\n\n.collapse-div{\n  background-color: #59ABE3;\n}\n\n.first-row{\n  position: absolute;\n  top: 20%;\n  left: 5%;\n}\n\n\n.card-heading{\n  background-color: #3A539B;\n  border-radius: 6%;\n}\n\n.card-title{\n  padding: 4%;\n  color: white;\n}\n\n\n\n\n.card-link:hover{\n  color: white;\n  background-color: #00B16A;\n}\n\n.second-row{\n  position: absolute;\n  top: 60%;\n  left: 5%;\n}\n\n\n\n\n.table-fixed thead {\n  width: 97%;\n}\n.table-fixed tbody {\n  height: 230px;\n  overflow-y: auto;\n  width: 100%;\n}\n.table-fixed thead, .table-fixed tbody, .table-fixed tr, .table-fixed td, .table-fixed th {\n  display: block;\n}\n.table-fixed tbody td, .table-fixed thead > tr> th {\n  float: left;\n  border-bottom-width: 0;\n}\n\n\n\n\n\n.fixed_header tbody{\n  display:block;\n  width: 100%;\n  overflow: auto;\n  height: 300px;\n}\n\n.fixed_header thead tr {\n  display: block;\n}\n\n.fixed_header thead {\n  background: black;\n  color:#fff;\n}\n\n.fixed_header th, .fixed_header td {\n  padding: 5px;\n  text-align: left;\n  width: 500px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/solution-view-component/solution-table/solution-table.component.html":
/***/ (function(module, exports) {

module.exports = "<form class=\"forms\">\n  <table class=\"fixed_header\">\n    <thead>\n    <tr>\n      <th>Solution/Modal</th>\n      <th>Vendor</th>\n      <th>Equipment Type</th>\n      <th>System Type</th>\n      <th>Certificate Date</th>\n      <th>Due Date</th> \n\n\n    </tr>\n    </thead>\n    <tbody>\n    <tr *ngFor=\"let solution of solutions\">\n                         <td><a routerLink=\"/editSolutions/{{ solution.solutionId }}\">{{ solution.name }}</a></td>\n                         <td>{{ solution.vendor.name }}</td>\n                         <td>{{solution.solutionTypeName }}</td>\n                         <td>{{ solution.systemTypeDTO.name }}</td>\n                         <td>{{ solution.certDt }}</td>\n                         <td>{{ solution.certDt | filter  }}</td> \n                         <td>{{ solution.certRenewalDueDt }}</td>\n                    </tr>\n    </tbody>\n  </table>\n</form>\n"

/***/ }),

/***/ "../../../../../src/app/solution-view-component/solution-table/solution-table.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__apiservice_service__ = __webpack_require__("../../../../../src/app/apiservice.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SolutionTableComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SolutionTableComponent = (function () {
    function SolutionTableComponent(_apiservice) {
        this._apiservice = _apiservice;
    }
    SolutionTableComponent.prototype.ngOnInit = function () {
        this.getSolutions();
        console.log('SolutionTable');
    };
    SolutionTableComponent.prototype.getSolutions = function () {
        var _this = this;
        this._apiservice.getSolutions()
            .subscribe(function (data) {
            _this.solutions = data.solutionsDTOs;
            console.log(_this.solutions);
            console.log(data);
        }, function (error) { return console.log(error); });
    };
    return SolutionTableComponent;
}());
SolutionTableComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'app-solution-table',
        template: __webpack_require__("../../../../../src/app/solution-view-component/solution-table/solution-table.component.html"),
        styles: [__webpack_require__("../../../../../src/app/solution-view-component/solution-table/solution-table.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_0__apiservice_service__["a" /* ApiserviceService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__apiservice_service__["a" /* ApiserviceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__apiservice_service__["a" /* ApiserviceService */]) === "function" && _a || Object])
], SolutionTableComponent);

var _a;
//# sourceMappingURL=solution-table.component.js.map

/***/ }),

/***/ "../../../../../src/app/solution-view-component/solution-view-component.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".forms{\n  padding: 20px;\n  border-radius: 10px;\n  border: 1px solid transparent;\n  margin: 20px;\n  background-color: #EEEEEE;\n\n\n\n}\n\n\n.table-fixed thead {\n  width: 97%;\n}\n.table-fixed tbody {\n  height: 230px;\n  overflow-y: auto;\n  width: 100%;\n}\n.table-fixed thead, .table-fixed tbody, .table-fixed tr, .table-fixed td, .table-fixed th {\n  display: block;\n}\n.table-fixed tbody td, .table-fixed thead > tr> th {\n  float: left;\n  border-bottom-width: 0;\n}\n\n\n\n\n\n.fixed_header tbody{\n  display:block;\n  width: 100%;\n  overflow: auto;\n  height: 300px;\n}\ntbody tr:nth-child(even) {\n  background: #eeeeee; /* Old browsers */ /* FF3.6-15 */ /* Chrome10-25,Safari5.1-6 */\n  background: linear-gradient(to bottom, #eeeeee 0%,#cccccc 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */\n  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#eeeeee', endColorstr='#cccccc',GradientType=0 ); /* IE6-9 */\n}\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/solution-view-component/solution-view-component.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navigation-component></app-navigation-component>\n<app-option-list></app-option-list>\n<app-solution-table></app-solution-table>\n<!-- <form class=\"forms\">\n<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col-lg-12\">\n            <table class=\"fixed_header\">\n                <thead style=\"background-color: gray\">\n                    <th>Vendor Name</th>\n                    <th>Email Id</th>\n                    <th>Phone Number</th>\n                    \n                   \n                </thead>\n                <tbody>\n                    <tr *ngFor=\"let vendor of vendors\">\n                         <td><a routerLink=\"/vendors\">{{ vendor.name }}</a></td>\n                         <td>{{ vendor.vendorContact.emailId }}</td>\n                          <td>{{ vendor.vendorContact.phoneNumber }}</td>\n                         \n                    </tr>\n                </tbody>\n         </table>\n        </div>\n    </div>\n</div>\n</form> -->"

/***/ }),

/***/ "../../../../../src/app/solution-view-component/solution-view-component.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__apiservice_service__ = __webpack_require__("../../../../../src/app/apiservice.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SolutionViewComponentComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SolutionViewComponentComponent = (function () {
    /*public vendors:any;
    public vendorsContact:any;*/
    function SolutionViewComponentComponent(_apiservice) {
        this._apiservice = _apiservice;
    }
    SolutionViewComponentComponent.prototype.ngOnInit = function () {
        //this.getVendors();
    };
    return SolutionViewComponentComponent;
}());
SolutionViewComponentComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'app-solution-view-component',
        template: __webpack_require__("../../../../../src/app/solution-view-component/solution-view-component.component.html"),
        styles: [__webpack_require__("../../../../../src/app/solution-view-component/solution-view-component.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_0__apiservice_service__["a" /* ApiserviceService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__apiservice_service__["a" /* ApiserviceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__apiservice_service__["a" /* ApiserviceService */]) === "function" && _a || Object])
], SolutionViewComponentComponent);

var _a;
//# sourceMappingURL=solution-view-component.component.js.map

/***/ }),

/***/ "../../../../../src/app/solutions/solutions-forms-component/contact-component/contact-component.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/solutions/solutions-forms-component/contact-component/contact-component.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  contact-component works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/solutions/solutions-forms-component/contact-component/contact-component.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactComponentComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContactComponentComponent = (function () {
    function ContactComponentComponent() {
    }
    ContactComponentComponent.prototype.ngOnInit = function () {
    };
    return ContactComponentComponent;
}());
ContactComponentComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-contact-component',
        template: __webpack_require__("../../../../../src/app/solutions/solutions-forms-component/contact-component/contact-component.component.html"),
        styles: [__webpack_require__("../../../../../src/app/solutions/solutions-forms-component/contact-component/contact-component.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ContactComponentComponent);

//# sourceMappingURL=contact-component.component.js.map

/***/ }),

/***/ "../../../../../src/app/solutions/solutions-forms-component/solutions-forms-component.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "form{\n    padding: 20px;\n    border-radius: 10px;\n    border: 1px solid transparent;\n    margin: 20px;\n    background-color: #EEEEEE;\n    overflow: hidden;\n}\n\n.page-description{\n    text-align: center;\n    /*padding: 2%;*/\n    margin-top: 0px;\n    margin-bottom: 10px;\n}\n\n@keyframes slideInFromCenter {\n  0% {\n    transform: scale(0,1);\n  }\n  100% {\n    transform: scale(1,1);\n  }\n}\n\n.after-heading{\n\twidth: 10%;\n\tmargin: auto;\n\tbackground-color: #3A539B;\n\tanimation: 1s ease-out 0s 1 slideInFromCenter;\n\t/*border-radius: 10px solid #3A539B;*/\n\t/*margin-bottom: 15px;*/\n}\n\n.tip{\n    width: 100%;\n}\n\n.tip-text{\n    background-color: #F8FFAE;\n    padding: 5px;\n    border-radius: 10px;\n    margin-left: 5px;\n    color:  #3A539B;\n}\n\n.light-bulb{\n    margin-right: 3px;\n    padding: 2px;\n    margin-left: 3px;\n    color:  #3A539B;\n}\n\n.buttons{\n\tfloat: right;\n}\n\nh4{\n\tfont-size: 18px;\n\tfont-weight: 500;\n}\n\nlabel{\n\tfont-weight: 300;\n\tfont-size: 15px;\n}\n\n.asterisk{\n\tdisplay: inline;\n\tcolor: red;\n\tmargin-left: 2px;\n}\n\n.asterisk-inline{\n\tfloat: right;\n}\n\n/*select, option{\n\twidth: 120px;\n\theight: 35px;\n\tborder-radius: 4px;\n\tborder: 1px solid rgba(0,0,0,.15);\n\tmargin-left: 5px;\n}\n\n/*.label-form{\n\tmargin-right: 5px;\n}*/\n\n.model-solution-row{\n\tpadding: 1%;\n}\n\n.second-row{\n\tmargin-top: 1px;\n\tpadding: 1%;\n}\n\n.installation{\n\tpadding: 1%;\n}\n\n.hosting-notes{\n\tdisplay: block;\n\t/*margin-top: 20px;*/\n}\n\n.certification-test{\n\tmargin-top: 10px;\n\tpadding: 1%;\n}\n\n.attachments-div{\n\tmargin-top: 25px;\n}\n\n.btn{\n\tbackground-color: #3A539B;\n\tborder-color: #3A539B;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/solutions/solutions-forms-component/solutions-forms-component.component.html":
/***/ (function(module, exports) {

module.exports = "<form (ngSubmit)=\"onSubmit()\" #form=\"ngForm\">\n\t\t\t<div class=\"page-description\"><h3>Solutions</h3>\n    \t\t<hr class=\"after-heading\" />\n    \t\t</div>\n        \t<div class=\"tip\"><p class=\"tip-text\"><fa class=\"light-bulb\" [name]=\"'lightbulb-o'\"></fa>Tip:</p></div>\n        \t<h4>General Information</h4>\n            <div class=\"model-solution-row form-row\">\n            \t<div class=\"model form-group col-md-6\">\n            <label class=\"label-form\" for=\"modelSolution\"><b>Model/Solution</b></label><div class=\"asterisk\">*</div>\n              <input type=\"text\" class=\"asterisk form-control\" id=\"modelSolution\" ngModel name=\"modelSolution\" required>\n            \t</div>\n            \t<div class=\"version form-group col-md-6\">\n            \t\t<label class=\"label-form\" for=\"version\"><b>Version</b></label><div class=\"asterisk\">*</div>\n\t\t              <input type=\"text\" class=\"asterisk form-control\" id=\"version\" ngModel name=\"version\" required>\n            \t</div>\n            \t<div class=\"form-group col-md-6\">\n            <label class=\"label-form\" for=\"systemType\"><b>System Type</b></label><div class=\"asterisk\">*</div>\n              <select class=\"form-control\" id=\"systemType\" ngModel name=\"systemType\" required>\n                <option selected>Choose...</option>\n                <option value=\"1\">EVS</option>\n                <option value=\"2\">Two</option>\n                <option value=\"3\">Three</option>\n              </select>\n            \t</div>\n            \t<div class=\"form-group col-md-6\">\n            \t\t<label class=\"label-form\" for=\"equipmentType\"><b>Equipment Type</b></label><div class=\"asterisk\">*</div>\n\t\t              <select class=\"form-control\" id=\"equipmentType\" ngModel name=\"equipmentType\" required>\n\t\t                <option selected>Choose...</option>\n\t\t                <option value=\"1\">Optical/Digital Scan</option>\n\t\t                <option value=\"2\">Two</option>\n\t\t                <option value=\"3\">Three</option>\n\t\t              </select>\n            \t</div>\n            \t<div class=\"form-group col-md-6\">\n            \t\t<label class=\"label-form\" for=\"vendor\"><b>Vendor</b></label><div class=\"asterisk\">*</div>\n\t\t              <select class=\"form-control\" id=\"vendor\" ngModel name=\"vendor\" required>\n\t\t                <option selected>Choose...</option>\n\t\t                <option value=\"1\">Dominion Voting</option>\n\t\t                <option value=\"2\">Two</option>\n\t\t                <option value=\"3\">Three</option>\n\t\t              </select>\n            \t\t\n            \t</div>\n            </div>\n        \t<!-- <div class=\"second-row form-row\">\n            \t<div class=\"form-group col-md-6\">\n            <label class=\"label-form\" for=\"systemType\"><b>System Type</b></label><div class=\"asterisk\">*</div>\n              <select class=\"form-control\" id=\"systemType\" required>\n                <option selected>Choose...</option>\n                <option value=\"1\">EVS</option>\n                <option value=\"2\">Two</option>\n                <option value=\"3\">Three</option>\n              </select>\n            \t</div>\n            \t<div class=\"form-group col-md-6\">\n            \t\t<label class=\"label-form\" for=\"equipmentType\"><b>Equipment Type</b></label><div class=\"asterisk\">*</div>\n\t\t              <select class=\"form-control\" id=\"equipmentType\" required>\n\t\t                <option selected>Choose...</option>\n\t\t                <option value=\"1\">Optical/Digital Scan</option>\n\t\t                <option value=\"2\">Two</option>\n\t\t                <option value=\"3\">Three</option>\n\t\t              </select>\n            \t</div>\n            \t<div class=\"form-group col-md-6\">\n            \t\t<label class=\"label-form\" for=\"vendor\"><b>Vendor</b></label><div class=\"asterisk\">*</div>\n\t\t              <select class=\"form-control\" id=\"vendor\" required>\n\t\t                <option selected>Choose...</option>\n\t\t                <option value=\"1\">Dominion Voting</option>\n\t\t                <option value=\"2\">Two</option>\n\t\t                <option value=\"3\">Three</option>\n\t\t              </select>\n            \t\t\n            \t</div>\n            </div> -->\n            <hr />\n           <h4>Installation and Hosting</h4>\n            <div class=\"installation form-group col-md-6\">\n            <label for=\"hostingType\"><b>Hosting Type</b></label><div class=\"asterisk\">*</div>\n            <select class=\"form-control\" id=\"hostingType\" ngModel name=\"hostingType\" required>\n\t\t                <option selected>Choose...</option>\n\t\t                <option value=\"1\">Not Applicable</option>\n\t\t                <option value=\"2\">Two</option>\n\t\t                <option value=\"3\">Three</option>\n\t\t              </select>\n            </div>\n            <div class=\"installation form-group\">\n            <label class=\"hosting-notes\" for=\"hostingNotes\"><b>Hosting Notes</b></label><!-- <div class=\"asterisk-inline asterisk\">*</div> -->\n            <textarea cols=\"156\" rows=\"7\" id=\"hostingNotes\" ngModel name=\"hostingNotes\" required></textarea>\n          </div>\n            <!-- <p><b>Hosting Notes</b></p>\n            <textarea cols=\"100\" rows=\"7\" id=\"hostingNotes\"></textarea> -->\n            <hr />\n            <h4>Certification Information</h4>\n            <div class=\"certification-test form-row\">\n            <div class=\"form-group col-md-6\">\n                <label for=\"approvedDate\"><b>DoEL Approved Date</b></label>\n                <my-date-picker name=\"myname\"></my-date-picker> \n                <!-- <input type=\"date\" class=\"form-control\" id=\"approvedDate\"> -->\n            </div>\n            <div class=\"form-group col-md-6\">\n                <label for=\"dueDate\"><b>Renewal Due Date</b></label>\n                <my-date-picker name=\"myname\"></my-date-picker> \n                <!-- <input type=\"date\" class=\"form-control\" id=\"dueDate\"> -->\n            </div>\n         </div>\n         <hr />\n          <h4>Voting System Test Laboratory - VSTL</h4>\n          <div class=\"certification-test form-group col-md-6\">\n            <label for=\"label-form labVendor\"><b>Lab Vendor</b></label>\n            <select class=\"form-control\" id=\"labVendor\" ngModel name=\"labVendor\" (change)=\"labContact($event.target.value)\">\n\t\t                <option selected>Choose...</option>\n\t\t                <option value=\"PROV&V\">PROV&V</option>\n\t\t                <option value=\"SLI\">SLI</option>\n\t\t                <option value=\"Wyle Laboratories/NTS\">Wyle Laboratories/NTS</option>\n\t\t              </select>\n          </div>\n          <div class=\"contact\" *ngIf=\"labForm ==='PROV&V'\">\n          \t<div class=\"certification-test form-row\">\n            <div class=\"form-group col-md-6\">\n                <label for=\"firstName\"><b>First Name</b></label><div class=\"asterisk\">*</div>\n                <input type=\"text\" class=\"asterisk form-control\" id=\"firstName\" ngModel name=\"firstName\" required>\n            </div>\n            <div class=\"form-group col-md-6\">\n                <label for=\"lastName\"><b>Last Name</b></label><div class=\"asterisk\">*</div>\n                <input type=\"text\" class=\"asterisk form-control\" id=\"lastName\" ngModel name=\"lastName\" required>\n            </div>\n            <div class=\"form-group col-md-6\">\n                <label for=\"email\"><b>Email Id</b></label><div class=\"asterisk\">*</div>\n                <input type=\"email\" class=\"asterisk form-control\" id=\"email\" ngModel name=\"email\" required>\n            </div>\n            <div class=\"form-group col-md-6\">\n                <label for=\"phone\"><b>Phone Number</b></label><div class=\"asterisk\">*</div>\n                <input type=\"text\" class=\"asterisk form-control\" id=\"phone\" ngModel name=\"phone\" required>\n            </div>\n         </div>\n          <!-- <div class=\"certification-test form-row\">\n            <div class=\"form-group col-md-6\">\n                <label for=\"email\"><b>Email Id</b></label><div class=\"asterisk\">*</div>\n                <input type=\"email\" class=\"asterisk form-control\" id=\"email\" required>\n            </div>\n            <div class=\"form-group col-md-6\">\n                <label for=\"phone\"><b>Phone Number</b></label><div class=\"asterisk\">*</div>\n                <input type=\"text\" class=\"asterisk form-control\" id=\"phone\" required>\n            </div>\n         </div> -->\n          </div>\n         <hr />\n         <h4>Attachments</h4>\n         <div class=\"attachments-div\"><!-- <p class=\"attachments\"><b>Attachments</b> --><!-- </p> -->\n            \t<input type=\"file\">\t\n            </div>\n         <div class=\"buttons\">\n         \t<button type=\"cancel\" class=\"cancel btn btn-primary\">Cancel</button>\n        \t<button type=\"submit\" class=\"submit btn btn-primary\" [disabled]=\"!form.valid\">Submit</button>\n        </div>\n</form>"

/***/ }),

/***/ "../../../../../src/app/solutions/solutions-forms-component/solutions-forms-component.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SolutionsFormsComponentComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SolutionsFormsComponentComponent = (function () {
    function SolutionsFormsComponentComponent() {
        this.date = new Date();
        this.settings = {
            bigBanner: true,
            timePicker: false,
            format: 'dd-MM-yyyy',
            defaultOpen: true
        };
    }
    SolutionsFormsComponentComponent.prototype.ngOnInit = function () {
    };
    SolutionsFormsComponentComponent.prototype.labContact = function (lab) {
        this.labForm = lab;
    };
    SolutionsFormsComponentComponent.prototype.onSubmit = function () {
        console.log(this.solutionsForm);
    };
    return SolutionsFormsComponentComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('form'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* NgForm */]) === "function" && _a || Object)
], SolutionsFormsComponentComponent.prototype, "solutionsForm", void 0);
SolutionsFormsComponentComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-solutions-forms-component',
        template: __webpack_require__("../../../../../src/app/solutions/solutions-forms-component/solutions-forms-component.component.html"),
        styles: [__webpack_require__("../../../../../src/app/solutions/solutions-forms-component/solutions-forms-component.component.css")]
    }),
    __metadata("design:paramtypes", [])
], SolutionsFormsComponentComponent);

var _a;
//# sourceMappingURL=solutions-forms-component.component.js.map

/***/ }),

/***/ "../../../../../src/app/solutions/solutions.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "form{\n    padding: 20px;\n    border-radius: 10px;\n    border: 1px solid transparent;\n    margin: 20px;\n    background-color: #EEEEEE;\n    overflow: hidden;\n}\n\n.page-description{\n    text-align: center;\n    /*padding: 2%;*/\n    margin-top: 0px;\n    margin-bottom: 10px;\n}\n\n@keyframes slideInFromCenter {\n  0% {\n    transform: scale(0,1);\n  }\n  100% {\n    transform: scale(1,1);\n  }\n}\n\n.after-heading{\n\twidth: 10%;\n\tmargin: auto;\n\tbackground-color: #3A539B;\n\tanimation: 1s ease-out 0s 1 slideInFromCenter;\n\t/*border-radius: 10px solid #3A539B;*/\n\t/*margin-bottom: 15px;*/\n}\n\n.tip{\n    width: 100%;\n}\n\n.tip-text{\n    background-color: #F8FFAE;\n    padding: 5px;\n    border-radius: 10px;\n    margin-left: 5px;\n    color:  #3A539B;\n}\n\n.light-bulb{\n    margin-right: 3px;\n    padding: 2px;\n    margin-left: 3px;\n    color:  #3A539B;\n}\n\n.buttons{\n\tfloat: right;\n}\n\nh4{\n\tfont-size: 18px;\n\tfont-weight: 500;\n}\n\nlabel{\n\tfont-weight: 300;\n\tfont-size: 15px;\n}\n\n.asterisk{\n\tdisplay: inline;\n\tcolor: red;\n\tmargin-left: 2px;\n}\n\n.asterisk-inline{\n\tfloat: right;\n}\n\n/*select, option{\n\twidth: 120px;\n\theight: 35px;\n\tborder-radius: 4px;\n\tborder: 1px solid rgba(0,0,0,.15);\n\tmargin-left: 5px;\n}\n\n/*.label-form{\n\tmargin-right: 5px;\n}*/\n\n.model-solution-row{\n\tpadding: 1%;\n}\n\n.second-row{\n\tmargin-top: 1px;\n\tpadding: 1%;\n}\n\n.installation{\n\tpadding: 1%;\n}\n\n.hosting-notes{\n\tdisplay: block;\n\t/*margin-top: 20px;*/\n}\n\n.certification-test{\n\tmargin-top: 10px;\n\tpadding: 1%;\n}\n\n.attachments-div{\n\tmargin-top: 25px;\n}\n\n.btn{\n\tbackground-color: #3A539B;\n\tborder-color: #3A539B;\n}\n\n.modal-header{\n\tbackground-color: #3A539B;\n\tcolor: #ffffff;\n}\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/solutions/solutions.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navigation-component></app-navigation-component>\n    <app-option-list></app-option-list>\n    <!--<div class=\"first-div\">\n        <div class=\"model\"><p><b>Model/Solution: Democracy Suite</b></p></div>\n        <div class=\"version\"><p><b>Version: D-Suite 4.14-E System</b></p></div>\n        </div>\n        <hr />-->\n   <!--  <app-solutions-forms-component></app-solutions-forms-component> -->\n   <ng-template #content let-c=\"close\" let-d=\"dismiss\">\n  <div class=\"modal-header\">\n    <h4 class=\"modal-title\" id=\"modal-basic-title\">Success</h4>\n    <!-- <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button> -->\n  </div>\n  <div class=\"modal-body\">\n    <p>Solution Added</p>\n  </div>\n  <div class=\"modal-footer\">\n    <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"c('Save click')\">Close</button>\n  </div>\n</ng-template>\n   <form (ngSubmit)=\"createSolution()\" enctype=\"multipart/form-data\" #f=\"ngForm\">\n\t\t\t<div class=\"page-description\"><h3>Solutions</h3>\n    \t\t<hr class=\"after-heading\" />\n    \t\t</div>\n        \t<div class=\"tip\"><p class=\"tip-text\"><fa class=\"light-bulb\" [name]=\"'lightbulb-o'\"></fa>Tip:</p></div>\n        \t<h4>General Information</h4>\n            <div class=\"model-solution-row form-row\">\n            \t<div class=\"model form-group col-md-6\">\n            <label class=\"label-form\" for=\"modelSolution\"><b>Model/Solution</b></label><div class=\"asterisk\">*</div>\n              <input type=\"text\" class=\"form-control\" id=\"modelSolution\" ngModel name=\"modelSolution\" (change)=\"solution.name = $event.target.value\" required>\n            \t</div>\n            \t<div class=\"version form-group col-md-6\">\n            \t\t<label class=\"label-form\" for=\"version\"><b>Version</b></label><div class=\"asterisk\">*</div>\n\t\t              <input type=\"text\" class=\"form-control\" name=\"versionNumber\" id=\"version\" ngModel name=\"version\" (change)=\"solution.versionNumber = $event.target.value\" required>\n            \t</div>\n            \t<div class=\"form-group col-md-6\">\n            <label class=\"label-form\" for=\"systemType\"><b>System Type</b></label><div class=\"asterisk\">*</div>\n              <select class=\"form-control\" id=\"systemType\" ngModel name=\"systemType\" (change)=\"solution.systemTypeDTO.systemTypeId = $event.target.value\"  required>\n              \t <option></option>\n               <option *ngFor=\"let systemType of systemTypeDTO\" value=\"{{ systemType.systemTypeId }}\">\n\t\t                {{ systemType.name }} \n\t\t                </option> \n              </select>\n            \t</div>\n            \t<div class=\"form-group col-md-6\">\n            \t\t<label class=\"label-form\" for=\"equipmentType\"><b>Equipment Type</b></label><div class=\"asterisk\">*</div>\n\t\t              <select class=\"form-control\" id=\"equipmentType\" ngModel name=\"equipmentType\" (change)=\"solution.solutionType = $event.target.value\" required>\n\t\t              \t <option></option>\n\t\t                <option *ngFor=\"let equipmentType of solutionType\" value=\"{{ equipmentType.solutionTypeId }}\">\n\t\t               \t  {{ equipmentType.typeName }}\n\t\t              </select>\n            \t</div>\n            \t<div class=\"form-group col-md-6\">\n            \t\t<label class=\"label-form\" for=\"vendor\"><b>Vendor</b></label><div class=\"asterisk\">*</div>\n\t\t              <select class=\"form-control\" id=\"vendor\" ngModel name=\"vendor\" (change)=\"solution.vendorId = $event.target.value\" required>\n\t\t               <option></option>\n\t\t           <option *ngFor=\"let vendor of vendorDTO\" value=\"{{ vendor.vendorId }}\">\n\t\t                {{ vendor.name }}\n\n\t\t                </option>\n\t\t                </select>\n            \t\t\n            \t</div>\n            </div>\n        \t<!-- <div class=\"second-row form-row\">\n            \t<div class=\"form-group col-md-6\">\n            <label class=\"label-form\" for=\"systemType\"><b>System Type</b></label><div class=\"asterisk\">*</div>\n              <select class=\"form-control\" id=\"systemType\" required>\n                <option selected>Choose...</option>\n                <option value=\"1\">EVS</option>\n                <option value=\"2\">Two</option>\n                <option value=\"3\">Three</option>\n              </select>\n            \t</div>\n            \t<div class=\"form-group col-md-6\">\n            \t\t<label class=\"label-form\" for=\"equipmentType\"><b>Equipment Type</b></label><div class=\"asterisk\">*</div>\n\t\t              <select class=\"form-control\" id=\"equipmentType\" required>\n\t\t                <option selected>Choose...</option>\n\t\t                <option value=\"1\">Optical/Digital Scan</option>\n\t\t                <option value=\"2\">Two</option>\n\t\t                <option value=\"3\">Three</option>\n\t\t              </select>\n            \t</div>\n            \t<div class=\"form-group col-md-6\">\n            \t\t<label class=\"label-form\" for=\"vendor\"><b>Vendor</b></label><div class=\"asterisk\">*</div>\n\t\t              <select class=\"form-control\" id=\"vendor\" required>\n\t\t                <option selected>Choose...</option>\n\t\t                <option value=\"1\">Dominion Voting</option>\n\t\t                <option value=\"2\">Two</option>\n\t\t                <option value=\"3\">Three</option>\n\t\t              </select>\n            \t\t\n            \t</div>\n            </div> -->\n            <hr />\n           <h4>Installation and Hosting</h4>\n            <div class=\"installation form-group col-md-6\">\n            <label for=\"hostingType\"><b>Hosting Type</b></label><div class=\"asterisk\">*</div>\n            <select class=\"form-control\" id=\"hostingType\" ngModel name=\"hostingType\" (change) = \"solution.hostingTypeDTO.hostingTypeId = $event.target.value\" required>\n            \t <option>Choose</option>\n\t\t                <option *ngFor=\"let hostingType of hostingTypeDTO\" value = \"{{ hostingType.hostingTypeId }}\">\n\t\t                {{ hostingType.name }}\n\t\t                </option>\n\t\t              </select>\n            </div>\n            <div class=\"installation form-group\">\n            <label class=\"hosting-notes\" for=\"hostingNotes\"><b>Hosting Notes</b></label><!-- <div class=\"asterisk-inline asterisk\">*</div> -->\n            <textarea cols=\"156\" rows=\"7\" id=\"hostingNotes\" ngModel name=\"hostingNotes\" required></textarea>\n            <div class=\"attachments-div\"><p class=\"attachments\"><b>Attachments</b></p>\n            \t<input type=\"file\" #fileInput (change)=\"createCertDTO($event,'hosting')\">\n            </div>\n          </div>\n            <!-- <p><b>Hosting Notes</b></p>\n            <textarea cols=\"100\" rows=\"7\" id=\"hostingNotes\"></textarea> -->\n            <hr />\n            <h4>Certification Information</h4>\n            <div class=\"certification-test form-row\">\n            <div class=\"form-group col-md-6\">\n                <label for=\"approvedDate\"><b>DoEL Approved Date</b></label>\n                <my-date-picker name=\"myname\" [(ngModel)]=\"approveDate\"></my-date-picker> \n                <!-- <input type=\"date\" class=\"form-control\" id=\"approvedDate\"> -->\n            </div>\n            <div class=\"form-group col-md-6\">\n                <label for=\"dueDate\"><b>Renewal Due Date</b></label>\n                <my-date-picker name=\"myname\"></my-date-picker> \n                <!-- <input type=\"date\" class=\"form-control\" id=\"dueDate\"> -->\n            </div>\n         </div>\n         <hr />\n         <h4>Voting System Test Laboratory - VSTL</h4>\n          <div class=\"certification-test form-group col-md-6\">\n            <label for=\"label-form labVendor\"><b>Lab Vendor</b></label>\n<!--             <select class=\"form-control\" id=\"labVendor\" (change) = \"solution.labVendorsDTO.labVendorId = $event.target.value\"> -->\n <select class=\"form-control\" id=\"labVendor\" (change) = \"showLabVendor($event.target.value)\">\n            <option>Choose</option>\n\t\t                <option *ngFor=\"let lab of labVendorsDTO\" value = \"{{ lab.labVendorId }}\">\n\t\t                {{ lab.name }}\n\t\t                </option>\n\t\t              </select>\n          </div> \n        <div class=\"contact\" *ngIf=\"labForm\">\n        <!--  <div class=\"contact\"> -->\n          \t<div class=\"certification-test form-row\">\n            <div class=\"form-group col-md-6\">\n                <label for=\"firstName\"><b>First Name</b></label><div class=\"asterisk\">*</div>\n                <input type=\"text\" class=\"form-control\" id=\"firstName\" ngModel name=\"firstName\" [(ngModel)] =\"labVendorsfirstName\" [name] = \"'firstName'\" required>\n            </div>\n            <div class=\"form-group col-md-6\">\n                <label for=\"lastName\"><b>Last Name</b></label><div class=\"asterisk\">*</div>\n                <input type=\"text\" class=\"form-control\" id=\"lastName\" ngModel name=\"lastName\" [(ngModel)] =\"labVendorslastName\" [name] = \"'lastName'\" required>\n            </div>\n            <div class=\"form-group col-md-6\">\n                <label for=\"email\"><b>Email Id</b></label><div class=\"asterisk\">*</div>\n                <input type=\"email\" class=\"form-control\" id=\"email\" ngModel name=\"email\" required>\n            </div>\n            <div class=\"form-group col-md-6\">\n                <label for=\"phone\"><b>Phone Number</b></label><div class=\"asterisk\">*</div>\n                <input type=\"text\" class=\"form-control\" id=\"phone\" ngModel name=\"phone\" [(ngModel)]=\"labVendorsphoneNumber\" [name] = \"'phoneNumber'\" required>\n            </div>\n         </div>  \n          <!-- <div class=\"certification-test form-row\">\n            <div class=\"form-group col-md-6\">\n                <label for=\"email\"><b>Email Id</b></label><div class=\"asterisk\">*</div>\n                <input type=\"email\" class=\"asterisk form-control\" id=\"email\" required>\n            </div>\n            <div class=\"form-group col-md-6\">\n                <label for=\"phone\"><b>Phone Number</b></label><div class=\"asterisk\">*</div>\n                <input type=\"text\" class=\"asterisk form-control\" id=\"phone\" required>\n            </div>\n         </div> -->\n          </div> \n         <hr />\n         <h4>Standard</h4>\n         <div class=\"installation form-group\">\n            <label class=\"hosting-notes\" for=\"standard\"><b>Notes</b></label>\n            <textarea cols=\"156\" rows=\"7\" id=\"standard\" ngModel name=\"standard\" required></textarea>\n            <div class=\"attachments-div\"><p class=\"attachments\"><b>Attachments</b></p>\n         <input type=\"file\" #fileInput (change)=\"createCertDTO($event,'standard')\">\n            </div>\n          </div>\n            <hr />\n        <h4>Patches</h4>\n         <div class=\"installation form-group\">\n            <label class=\"hosting-notes\" for=\"patches\"><b>Patches</b></label>\n            <textarea cols=\"156\" rows=\"7\" id=\"patches\" ngModel name=\"patches\" required></textarea>\n            <div class=\"attachments-div\"><p class=\"attachments\"><b>Attachments</b></p>\n         \t\t<input type=\"file\" #fileInput (change)=\"createCertDTO($event,'patches')\">\n            </div>\n          </div>\n            <hr />\n         <div>\n         \t<h4>Notes</h4>\n         <div class=\"installation form-group\">\n         <div class=\"attachments-div\"><p class=\"attachments\"><b>Attachments</b></p>\n         <input type=\"file\" #fileInput (change)=\"createCertDTO($event,'solution')\">\n            </div>\n          </div>\n         </div>\n            <hr />\n         <div class=\"buttons\">\n         \t<!-- <button type=\"submit\" (click)=\"open(content)\" [disabled]=\"!f.valid\" class=\"submit btn btn-primary\">Submit</button> -->\n         \t<button type=\"submit\" (click)=\"open(content)\" class=\"submit btn btn-primary\">Submit</button>\n         \t<button type=\"cancel\" class=\"cancel btn btn-primary\">Cancel</button>\n        \t<!-- <button type=\"submit\" class=\"submit btn btn-primary\" [disabled]=\"!form.valid\">Submit</button> -->\n        </div>\n</form>"

/***/ }),

/***/ "../../../../../src/app/solutions/solutions.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_model__ = __webpack_require__("../../../../../src/app/data_model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__apiservice_service__ = __webpack_require__("../../../../../src/app/apiservice.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_config__ = __webpack_require__("../../../../../src/app/app.config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SolutionsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var SolutionsComponent = (function () {
    function SolutionsComponent(activatedRoute, _apiservice, http, modalService) {
        this.activatedRoute = activatedRoute;
        this._apiservice = _apiservice;
        this.http = http;
        this.modalService = modalService;
        this.files = [];
        //public labForm: string;
        this.labForm = false;
        this.date = new Date();
        this.settings = {
            bigBanner: true,
            timePicker: false,
            format: 'dd-MM-yyyy',
            defaultOpen: true
        };
        this.solution = new __WEBPACK_IMPORTED_MODULE_2__data_model__["a" /* Solution */]();
        this.solution.systemTypeDTO = new __WEBPACK_IMPORTED_MODULE_2__data_model__["b" /* SystemType */]();
        this.solution.hostingTypeDTO = new __WEBPACK_IMPORTED_MODULE_2__data_model__["c" /* HostingType */]();
        this.solution.labVendorsDTO = new __WEBPACK_IMPORTED_MODULE_2__data_model__["d" /* LabVendors */]();
        this.solution.vendor = new __WEBPACK_IMPORTED_MODULE_2__data_model__["e" /* Vendor */]();
        this.solution.certDocDTOs = [];
        this.files = [];
    }
    SolutionsComponent.prototype.ngOnInit = function () {
        this.getSolutionsOnload();
        var date = new Date(1531886000);
        console.log(date);
    };
    SolutionsComponent.prototype.createCertDTO = function (fileInput, section) {
        this.certDocDTO = new __WEBPACK_IMPORTED_MODULE_2__data_model__["f" /* CertDocDTO */]();
        this.certDocDTO.fileName = fileInput.target.files[0].name;
        this.certDocDTO.section = section;
        console.log(fileInput.target.files[0]);
        this.files.push(fileInput.target.files[0]);
        console.log(this.solution.certDocDTOs);
        this.solution.certDocDTOs.push(this.certDocDTO);
    };
    //  labContact(lab) {
    //      this.labForm = lab;
    //
    //}
    SolutionsComponent.prototype.showLabVendor = function (id) {
        this.solution.labVendorsDTO.labVendorId = id;
        if (id === 'Choose') {
            this.labForm = false;
        }
        else {
            this.labForm = true;
            var details = this.labVendorsDTO;
            console.log(details);
            this.labDetails = details.filter(function (item) { return item.labVendorId == id; });
            this.labVendorsfirstName = this.labDetails[0].firstName;
            this.labVendorslastName = this.labDetails[0].lastName;
            this.labVendorsphoneNumber = this.labDetails[0].phoneNumber;
            //      
            //      console.log(this.labVendorsfirstName);
            //      console.log(this.labVendorslastName);
            //      console.log(this.labVendorsphoneNumber);
        }
        //this.getLabId(id);
    };
    /*getLabId(id){
      if(id===1){
        this.labVendorsfirstName=this.solution.labVendorsDTO.firstName;
        this.labVendorslastName=this.solution.labVendorsDTO.lastName;
        this.labVendorsphoneNumber=this.solution.labVendorsDTO.phoneNumber;
      }
    }*/
    SolutionsComponent.prototype.getSolutionsOnload = function () {
        var _this = this;
        this._apiservice.getSolutionsOnload()
            .subscribe(function (data) {
            // console.log(data);
            _this.systemTypeDTO = data.systemTypeDTOs;
            // this.editSolution.controls['systemTypeTry1'].setValue(data.systemTypeDTO.name);
            //        this.systemTyp = data.systemTypeDTO.name;
            // console.log(this.systemTypeDTO);
            _this.solutionType = data.solutionTypeDTOs;
            _this.vendorDTO = data.vendorsDTOs;
            _this.hostingTypeDTO = data.hostingTypeDTOs;
            _this.labVendorsDTO = data.labVendorsDTOs;
            console.log(_this.labVendorsDTO);
        }, function (error) { return console.log(error); });
    };
    SolutionsComponent.prototype.createSolution = function () {
        var url = __WEBPACK_IMPORTED_MODULE_6__app_config__["a" /* APP_CONFIG */].addSolutions;
        //value['solutionId'] = this.solution.solutionId;
        //value['vendorId'] = this.vendorDTO.vendorId;
        //value['labVendorId'] = this.labVendorDTO.labVendorId;
        var formData = new FormData();
        console.log(this.approveDate);
        var date = this.approveDate.epoc;
        //var certificationDate = new Date(date);
        this.solution.certDt = date;
        //this.solution.certDt = certificationDate;
        formData.append('solution', JSON.stringify(this.solution));
        //formData.append('certDocs', this.files);
        //formData.append('certDocs',files)
        for (var i = 0; i < this.files.length; i++) {
            formData.append('certDocs', this.files[i]);
        }
        //    formData.append('file',files);
        console.log(formData.get('certDocs'));
        console.log(formData.get('solution'));
        //this._apiservice.updateSolution(formData)
        this.http.post(url, formData).subscribe(function (data) {
            console.log(data);
        }, function (error) { return console.log(error); });
        console.log(this.solutionsForm);
    };
    SolutionsComponent.prototype.open = function (content) {
        this.modalService.open(content);
        //this.plus=false;
    };
    SolutionsComponent.prototype.onSubmit = function () {
        console.log(this.solutionsForm);
    };
    return SolutionsComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('fileInput'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object)
], SolutionsComponent.prototype, "inputEl", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('f'),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* NgForm */]) === "function" && _b || Object)
], SolutionsComponent.prototype, "solutionsForm", void 0);
SolutionsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-solutions',
        template: __webpack_require__("../../../../../src/app/solutions/solutions.component.html"),
        styles: [__webpack_require__("../../../../../src/app/solutions/solutions.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_5__apiservice_service__["a" /* ApiserviceService */]],
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__apiservice_service__["a" /* ApiserviceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__apiservice_service__["a" /* ApiserviceService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_7__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */]) === "function" && _f || Object])
], SolutionsComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=solutions.component.js.map

/***/ }),

/***/ "../../../../../src/app/vendors-component/vendors-component.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*.page-description{\n    text-align: center;\n    padding: 2%;\n    text-transform: uppercase;\n}\n\n.after-heading{\n\twidth: 10%;\n\tmargin: auto;\n\tbackground-color: #3A539B;\n\tmargin-top: -15px;\n}*/\n\n.modal-header{\n\tbackground-color:#3A539B !important;\n\tcolor:white;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/vendors-component/vendors-component.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navigation-component></app-navigation-component>\n<!--  <div class=\"page-description\"><h1>Vendors</h1></div>\n    <hr class=\"after-heading\" />-->\n<app-option-list></app-option-list>\n<ng-template #content let-c=\"close\" let-d=\"dismiss\">\n<div class=\"modal-header\">\n  <h4 class=\"modal-title\">Success</h4>\n  <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d()\">\n    <span aria-hidden=\"true\">&times;</span>\n  </button>\n</div>\n<div class=\"modal-body\">\n  <p>The Vendor has been successfully added {{name}}!</p>\n</div>\n<div class=\"modal-footer\">\n  <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"c();goToPage()\">Close</button>\n</div>\n</ng-template>\n<app-forms (submitClick) = \"submitClicked($event)\"></app-forms>\n\n"

/***/ }),

/***/ "../../../../../src/app/vendors-component/vendors-component.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__apiservice_service__ = __webpack_require__("../../../../../src/app/apiservice.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VendorsComponentComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var VendorsComponentComponent = (function () {
    function VendorsComponentComponent(_apiservice, modalService, router) {
        this._apiservice = _apiservice;
        this.modalService = modalService;
        this.router = router;
    }
    VendorsComponentComponent.prototype.ngOnInit = function () {
    };
    VendorsComponentComponent.prototype.submitClicked = function (value) {
        var _this = this;
        console.log(value);
        //this.modalService.open(this.content);
        this._apiservice.postVendorData(value)
            .subscribe(function (data) {
            console.log(data);
            _this.modalService.open(_this.content);
            open(data.responseString);
        }, function (error) { return console.log(error); });
    };
    VendorsComponentComponent.prototype.goToPage = function () {
        this.router.navigate(['/vendorsView']);
        console.log("333333333333333333333333333");
    };
    return VendorsComponentComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('content'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["TemplateRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["TemplateRef"]) === "function" && _a || Object)
], VendorsComponentComponent.prototype, "content", void 0);
VendorsComponentComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-vendors-component',
        template: __webpack_require__("../../../../../src/app/vendors-component/vendors-component.component.html"),
        styles: [__webpack_require__("../../../../../src/app/vendors-component/vendors-component.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_1__apiservice_service__["a" /* ApiserviceService */]]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__apiservice_service__["a" /* ApiserviceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__apiservice_service__["a" /* ApiserviceService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */]) === "function" && _d || Object])
], VendorsComponentComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=vendors-component.component.js.map

/***/ }),

/***/ "../../../../../src/app/vendors-view/vendors-view.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "table {\n  display: table;\n\n}\n\n\nth {\n  font-weight: bold;\n  color: black;\n  background-color: #cecfd5;\n  text-align: left;\n  border:1px solid;\n \n\n}\n\n\n\ntbody tr:nth-child(even) {\n  background-color: #ffffff; \n  \n}\ntd {\n  text-align: left;\n  border-bottom: 1px solid #cecfd5;\n  border-right: 1px solid #cecfd5;\n}\ntd:first-child {\n  border-left: 1px solid #cecfd5;\n}\n\n\n\n.forms{\n  padding: 20px;\n  border-radius: 10px;\n  border: 1px solid transparent;\n  margin: 20px;\n  background-color: #EEEEEE;\n}\n\ntable-fixed thead {\n  width: 97%;\n}\n.table-fixed tbody {\n  height: 230px;\n  overflow-y: auto;\n  width: 100%;\n}\n.table-fixed thead, .table-fixed tbody, .table-fixed tr, .table-fixed td, .table-fixed th {\n  display: block;\n}\n.table-fixed tbody td, .table-fixed thead > tr> th {\n  float: left;\n  border-bottom-width: 0;\n}\n\n\n\n\n\n\n\n\n\n\n\n\n.rTable {\n  display: table;\n  width: 100%;\n  margin-left:50%;\n\n}\n.rTableRow {\n  display: table-row;\n\n}\n\n\n\n\n.rTableHeading {\n  display: table-header-group;\n\n}\n.rTableCell, .rTableHead {\n  display: table-cell;\n  padding: 10px 10px;\n  border: 1px solid ;\n\n}\n.rTableHead{\n\n  font-weight: bold;\n\n}\n\n.rTableHeading {\n  display: table-header-group;\n  /*background-color: white;*/\n  font-weight: bold;\n}\n.rTableFoot {\n  display: table-footer-group;\n  font-weight: bold;\n\n}\n.rTableBody {\n  display: table-row-group;\n}\n\n*{\n  box-sizing: border-box;\n  margin: 0;\n  /* padding: 0;*/\n}\n\n.navigate{\n  margin: 15px;\n  padding: 5px;\n}\n\n.form-options{\n  float: left;\n  margin-right: 15px;\n  margin-top: -15px;\n  padding: 5px;\n}\n\n.icons{\n  vertical-align: middle;\n  font-size: 20px;\n  margin-top: -20px;\n  padding: 2px;\n  margin-left: 5px;\n}\n\n.home-icon{\n  color: #3A539B;\n}\n\n.edit-icon{\n  /*margin-left: 10px;*/\n  color: #3A539B;\n}\n\n.left-icon{\n  /*margin-left: 10px;*/\n  color: #3A539B;\n}\n\n.save-icon{\n  color: #3A539B;\n}\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.p-4{\n  background-color: #2C3E50;\n  border-top: 1px solid #ECF0F1;\n}\n\nnav{\n  background-color: #3A539B;\n  text-align: center;\n  position: relative;\n}\n\n.heading{\n  color: white;\n}\n\nimg{\n  width: 10%;\n\n}\n\n.user{\n  position: absolute;\n  font-size: 10px;\n  color: white;\n  right: 50px;\n  margin-right: 10px;\n}\n\n.down-icon{\n  font-size: 10px;\n  margin-left: 3px;\n  color: white;\n}\n\n.navigate-toggle{\n  color: white;\n}\n\n.btn{\n  margin-left: 30px;\n}\n\nh1{\n  color: white;\n}\n\nspan{\n  color: white;\n}\n\n.collapse-div{\n  background-color: #59ABE3;\n}\n\n.first-row{\n  position: absolute;\n  top: 20%;\n  left: 5%;\n}\n\n\n.card-heading{\n  background-color: #3A539B;\n  border-radius: 6%;\n}\n\n.card-title{\n  padding: 4%;\n  color: white;\n}\n\n\n\n\n.card-link:hover{\n  color: white;\n  background-color: #00B16A;\n}\n\n.second-row{\n  position: absolute;\n  top: 60%;\n  left: 5%;\n}\n\n\n\n\n.table-fixed thead {\n  width: 97%;\n}\n.table-fixed tbody {\n  height: 230px;\n  overflow-y: auto;\n  width: 100%;\n}\n.table-fixed thead, .table-fixed tbody, .table-fixed tr, .table-fixed td, .table-fixed th {\n  display: block;\n}\n.table-fixed tbody td, .table-fixed thead > tr> th {\n  float: left;\n  border-bottom-width: 0;\n}\n\n\n\n\n\n.fixed_header tbody{\n  display:block;\n  width: 100%;\n  overflow: auto;\n  height: 300px;\n}\n\n.fixed_header thead tr {\n  display: block;\n}\n\n.fixed_header thead {\n  background: black;\n  color:#fff;\n}\n\n.fixed_header th, .fixed_header td {\n  padding: 5px;\n  text-align: left;\n  width: 500px;\n}\ntable {\n  display: table;\n\n}\n\n\nth {\n  font-weight: bold;\n  color: black;\n  background-color: #cecfd5;\n  text-align: left;\n \n\n}\ntbody tr:nth-child(even) {\n  background-color: #ffffff; \n  \n}\ntd {\n  text-align: left;\n  border-bottom: 1px solid #cecfd5;\n  border-right: 1px solid #cecfd5;\n}\ntd:first-child {\n  border-left: 1px solid #cecfd5;\n}\n\n\n\n.forms{\n  padding: 20px;\n  border-radius: 10px;\n  border: 1px solid transparent;\n  margin: 20px;\n  background-color: #EEEEEE;\n}\n\ntable-fixed thead {\n  width: 97%;\n}\n.table-fixed tbody {\n  height: 230px;\n  overflow-y: auto;\n  width: 100%;\n}\n.table-fixed thead, .table-fixed tbody, .table-fixed tr, .table-fixed td, .table-fixed th {\n  display: block;\n}\n.table-fixed tbody td, .table-fixed thead > tr> th {\n  float: left;\n  border-bottom-width: 0;\n}\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/vendors-view/vendors-view.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navigation-component></app-navigation-component>\n<app-option-list></app-option-list>\n<form class=\"forms\">\n  <table class=\"fixed_header\">\n    <thead>\n    <tr>\n      <th>Vendor Name</th>\n      <th>Contact Name</th>\n      <th>Email Id</th>\n      <th>Phone Number</th>\n\n\n    </tr>\n    </thead>\n    <tbody>\n    <tr *ngFor=\"let vendor of vendors\">\n                       <td><a routerLink=\"/editVendors/{{ vendor.vendorId }}\">{{ vendor.name }}</a></td>\n                         <td>{{ vendor.vendorContact.firstName +\" \"+ vendor.vendorContact.lastName }}\n                         <td>{{ vendor.vendorContact.emailId }}</td>\n                          <td>{{ vendor.vendorContact.phoneNumber }}</td>\n                          \n                         \n                    </tr>\n    </tbody>\n  </table>\n  <!-- <a (click)=\"openVendorEdit(10)\">click here...........</a> -->\n</form>\n"

/***/ }),

/***/ "../../../../../src/app/vendors-view/vendors-view.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__apiservice_service__ = __webpack_require__("../../../../../src/app/apiservice.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VendorsViewComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var VendorsViewComponent = (function () {
    function VendorsViewComponent(_apiservice, router) {
        this._apiservice = _apiservice;
        this.router = router;
    }
    VendorsViewComponent.prototype.ngOnInit = function () {
        this.getVendors();
    };
    VendorsViewComponent.prototype.getVendors = function () {
        var _this = this;
        this._apiservice.getVendors()
            .subscribe(function (data) {
            _this.vendors = data.vendorsDTOs.sort(function (val1, val2) {
                return val1.name > val2.name;
            });
            _this.vendorsContact = data.vendorsDTOs.vendorContact;
            console.log("this.vendors", _this.vendors);
        }, function (error) { return console.log(error); });
    };
    return VendorsViewComponent;
}());
VendorsViewComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'app-vendors-view',
        template: __webpack_require__("../../../../../src/app/vendors-view/vendors-view.component.html"),
        styles: [__webpack_require__("../../../../../src/app/vendors-view/vendors-view.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_0__apiservice_service__["a" /* ApiserviceService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__apiservice_service__["a" /* ApiserviceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__apiservice_service__["a" /* ApiserviceService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === "function" && _b || Object])
], VendorsViewComponent);

var _a, _b;
//# sourceMappingURL=vendors-view.component.js.map

/***/ }),

/***/ "../../../../../src/app/vendors-view/view-table/view-table.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "table {\n  display: table;\n\n}\n\n\nth {\n  font-weight: bold;\n  color: black;\n  background-color: #cecfd5;\n  text-align: left;\n \n\n}\ntbody tr:nth-child(even) {\n  background-color: #ffffff; \n  \n}\ntd {\n  text-align: left;\n  border-bottom: 1px solid #cecfd5;\n  border-right: 1px solid #cecfd5;\n}\ntd:first-child {\n  border-left: 1px solid #cecfd5;\n}\n\n\n\n.forms{\n  padding: 20px;\n  border-radius: 10px;\n  border: 1px solid transparent;\n  margin: 20px;\n  background-color: #EEEEEE;\n}\n\ntable-fixed thead {\n  width: 97%;\n}\n.table-fixed tbody {\n  height: 230px;\n  overflow-y: auto;\n  width: 100%;\n}\n.table-fixed thead, .table-fixed tbody, .table-fixed tr, .table-fixed td, .table-fixed th {\n  display: block;\n}\n.table-fixed tbody td, .table-fixed thead > tr> th {\n  float: left;\n  border-bottom-width: 0;\n}\n\n\n\n\n\n\n\n\n\n\n\n\n.rTable {\n  display: table;\n  width: 100%;\n  margin-left:50%;\n\n}\n.rTableRow {\n  display: table-row;\n\n}\n\n\n\n\n.rTableHeading {\n  display: table-header-group;\n\n}\n.rTableCell, .rTableHead {\n  display: table-cell;\n  padding: 10px 10px;\n  border: 1px solid ;\n\n}\n.rTableHead{\n\n  font-weight: bold;\n\n}\n\n.rTableHeading {\n  display: table-header-group;\n  /*background-color: white;*/\n  font-weight: bold;\n}\n.rTableFoot {\n  display: table-footer-group;\n  font-weight: bold;\n\n}\n.rTableBody {\n  display: table-row-group;\n}\n\n*{\n  box-sizing: border-box;\n  margin: 0;\n  /* padding: 0;*/\n}\n\n.navigate{\n  margin: 15px;\n  padding: 5px;\n}\n\n.form-options{\n  float: left;\n  margin-right: 15px;\n  margin-top: -15px;\n  padding: 5px;\n}\n\n.icons{\n  vertical-align: middle;\n  font-size: 20px;\n  margin-top: -20px;\n  padding: 2px;\n  margin-left: 5px;\n}\n\n.home-icon{\n  color: #3A539B;\n}\n\n.edit-icon{\n  /*margin-left: 10px;*/\n  color: #3A539B;\n}\n\n.left-icon{\n  /*margin-left: 10px;*/\n  color: #3A539B;\n}\n\n.save-icon{\n  color: #3A539B;\n}\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.p-4{\n  background-color: #2C3E50;\n  border-top: 1px solid #ECF0F1;\n}\n\nnav{\n  background-color: #3A539B;\n  text-align: center;\n  position: relative;\n}\n\n.heading{\n  color: white;\n}\n\nimg{\n  width: 10%;\n\n}\n\n.user{\n  position: absolute;\n  font-size: 10px;\n  color: white;\n  right: 50px;\n  margin-right: 10px;\n}\n\n.down-icon{\n  font-size: 10px;\n  margin-left: 3px;\n  color: white;\n}\n\n.navigate-toggle{\n  color: white;\n}\n\n.btn{\n  margin-left: 30px;\n}\n\nh1{\n  color: white;\n}\n\nspan{\n  color: white;\n}\n\n.collapse-div{\n  background-color: #59ABE3;\n}\n\n.first-row{\n  position: absolute;\n  top: 20%;\n  left: 5%;\n}\n\n\n.card-heading{\n  background-color: #3A539B;\n  border-radius: 6%;\n}\n\n.card-title{\n  padding: 4%;\n  color: white;\n}\n\n\n\n\n.card-link:hover{\n  color: white;\n  background-color: #00B16A;\n}\n\n.second-row{\n  position: absolute;\n  top: 60%;\n  left: 5%;\n}\n\n\n\n\n.table-fixed thead {\n  width: 97%;\n}\n.table-fixed tbody {\n  height: 230px;\n  overflow-y: auto;\n  width: 100%;\n}\n.table-fixed thead, .table-fixed tbody, .table-fixed tr, .table-fixed td, .table-fixed th {\n  display: block;\n}\n.table-fixed tbody td, .table-fixed thead > tr> th {\n  float: left;\n  border-bottom-width: 0;\n}\n\n\n\n\n\n.fixed_header tbody{\n  display:block;\n  width: 100%;\n  overflow: auto;\n  height: 300px;\n}\n\n.fixed_header thead tr {\n  display: block;\n}\n\n.fixed_header thead {\n  background: black;\n  color:#fff;\n}\n\n.fixed_header th, .fixed_header td {\n  padding: 5px;\n  text-align: left;\n  width: 500px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/vendors-view/view-table/view-table.component.html":
/***/ (function(module, exports) {

module.exports = "<form class=\"forms\">\n  <table class=\"fixed_header\">\n    <thead>\n    <tr>\n      <th>Vendor Name</th>\n      <th>Contact Name</th>\n      <th>Email Id</th>\n      <th>Phone Number</th>\n\n\n    </tr>\n    </thead>\n    <tbody>\n    <tr *ngFor=\"let vendor of vendors\">\n                       <td>{{ vendor.name }}</td>\n                         <td>{{vendor.vendorId}}</td>\n                         <td>{{ vendor.vendorContact.firstName +\" \"+ vendor.vendorContact.lastName }}\n                         <td>{{ vendor.vendorContact.emailId }}</td>\n                          <td>{{ vendor.vendorContact.phoneNumber }}</td>\n                          <td><a [routerLink]=\"['/editVendors/8']\">please click here....</a></td>\n                         \n                    </tr>\n    </tbody>\n  </table>\n</form>\n"

/***/ }),

/***/ "../../../../../src/app/vendors-view/view-table/view-table.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__apiservice_service__ = __webpack_require__("../../../../../src/app/apiservice.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewTableComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ViewTableComponent = (function () {
    function ViewTableComponent(_apiservice) {
        this._apiservice = _apiservice;
    }
    ViewTableComponent.prototype.ngOnInit = function () {
        //    this.getVendors();
    };
    ViewTableComponent.prototype.getVendors = function () {
        var _this = this;
        this._apiservice.getVendors()
            .subscribe(function (data) {
            _this.vendors = data.vendorsDTOs;
            _this.vendorsContact = data.vendorsDTOs.vendorContact;
            console.log(data);
        }, function (error) { return console.log(error); });
    };
    return ViewTableComponent;
}());
ViewTableComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'app-view-table',
        template: __webpack_require__("../../../../../src/app/vendors-view/view-table/view-table.component.html"),
        styles: [__webpack_require__("../../../../../src/app/vendors-view/view-table/view-table.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_0__apiservice_service__["a" /* ApiserviceService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__apiservice_service__["a" /* ApiserviceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__apiservice_service__["a" /* ApiserviceService */]) === "function" && _a || Object])
], ViewTableComponent);

var _a;
//# sourceMappingURL=view-table.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[1]);
//# sourceMappingURL=main.bundle.js.map