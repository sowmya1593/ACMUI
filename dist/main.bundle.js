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
exports.push([module.i, "*{\r\n\tbox-sizing: border-box;\r\n\tmargin: 0;\r\n\tpadding: 0;\r\n}", ""]);

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
    getSolutionFile: apiBaseUrl + 'getSolutionFile'
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__locality_component_locality_component_module__ = __webpack_require__("../../../../../src/app/locality-component/locality-component.module.ts");
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
            __WEBPACK_IMPORTED_MODULE_37__edit_navigation_edit_navigation_component__["a" /* EditNavigationComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_6_angular2_fontawesome_angular2_fontawesome__["Angular2FontawesomeModule"],
            __WEBPACK_IMPORTED_MODULE_7_mydatepicker__["MyDatePickerModule"],
            __WEBPACK_IMPORTED_MODULE_9__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_5__core_core_module__["a" /* CoreModule */],
            __WEBPACK_IMPORTED_MODULE_11__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_10__app_routing__["a" /* LocalityComponentRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_39__locality_component_locality_component_module__["a" /* LocalityComponentModule */],
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
exports.push([module.i, ".p-4{\r\n    background-color: #2C3E50;\r\n    border-top: 1px solid #ECF0F1;\r\n}\r\n\r\nnav{\r\n    background-color: #3A539B;\r\n    text-align: center;\r\n    position: relative;\r\n}\r\n\r\n.heading{\r\n    color: white;\r\n    text-align: center;\r\n}\r\n\r\nimg{\r\n    width: 10%;\r\n}\r\n\r\n.login{\r\n\tcolor: white;\r\n\tfont-size: 10px;\r\n\tmargin-top: 15px;\r\n\tmargin-right: 8px;\r\n}\r\n\r\nh1{\r\n    color: white;\r\n}\r\n\r\n.dashboard{\r\n    width: 100%;\r\n    margin-top: 50px;\r\n    margin-left: 5%;\r\n    /*position: absolute;\r\n    top: 25%;\r\n    left: 5%;*/\r\n}\r\n\r\n.card{\r\n    float: left;\r\n    margin-left: 5px;\r\n    margin-bottom: 15px;\r\n}\r\n\r\n.card-heading{\r\n    background-color: #3A539B;\r\n    border-radius: 6%;\r\n}\r\n\r\n.card-title{\r\n    padding: 4%;\r\n    color: white;\r\n}\r\n\r\n.card-body{\r\n    background-color: #ECF0F1;\r\n}\r\n\r\n.card-link{\r\n    color: black;\r\n}\r\n\r\n.card-link:hover{\r\n    color: white;\r\n    background-color: #00B16A;\r\n    padding: 3%;\r\n}\r\n\r\n.view-edit{\r\n    margin-left: 20px;\r\n}\r\n\r\n/*.second-row{\r\n    margin-top: 20px;\r\n}\r\n\r\n.third-row{\r\n    \r\n}*/", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"pos-f-t\">\r\n          <nav class=\"navbar\">\r\n            <img src=\"assets/img/logo.png\">\r\n            <h2 class=\"heading\">Application and Audit Manager</h2>\r\n            <div class=\"login\"><p class=\"user\">Sunny Singh<fa class=\"down-icon\" [name]=\"'chevron-down'\"></fa></p></div>\r\n          </nav>\r\n    </div>\r\n    <div class=\"dashboard\">\r\n         <div class=\"first-row\">\r\n        <div class=\"card\" style=\"width: 18rem;\">\r\n  <div class=\"card-body\">\r\n    <div class=\"card-heading\"><h5 class=\"card-title\">Locality</h5>\r\n      </div>\r\n    <hr />\r\n    <!--<h6 class=\"card-subtitle mb-2 text-muted\">Card subtitle</h6>-->\r\n    <p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\r\n    <a routerLink=\"/locality/map\" class=\"card-link\"><fa [name]=\"'plus-circle'\"></fa></a>\r\n    <a routerLink=\"/localityView\" class=\"view-edit card-link\"><fa [name]=\"'eye'\"></fa> / <fa [name]=\"'edit'\"></fa></a>\r\n  </div>\r\n</div>\r\n    <div class=\"card\" style=\"width: 18rem;\">\r\n  <div class=\"card-body\">\r\n    <div class=\"card-heading\"><h5 class=\"card-title\">Vendors</h5>\r\n      </div>\r\n    <hr />\r\n    <!--<h6 class=\"card-subtitle mb-2 text-muted\">Card subtitle</h6>-->\r\n    <p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\r\n    <a routerLink=\"/vendors\" class=\"card-link\"><fa [name]=\"'plus-circle'\"></fa></a>\r\n    <a [routerLink]=\"['/vendorsView']\" class=\"view-edit card-link\"><fa [name]=\"'eye'\"></fa>/ <fa [name]=\"'edit'\"></fa></a>\r\n  </div>\r\n</div>\r\n    <div class=\"card\" style=\"width: 18rem;\">\r\n  <div class=\"card-body\">\r\n    <div class=\"card-heading\"><h5 class=\"card-title\">Solutions</h5>\r\n      </div>\r\n    <hr />\r\n    <!--<h6 class=\"card-subtitle mb-2 text-muted\">Card subtitle</h6>-->\r\n    <p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\r\n    <a routerLink=\"/solutions\" class=\"card-link\"><fa [name]=\"'plus-circle'\"></fa></a>\r\n    <!-- <a routerLink=\"/solutionsView\" class=\"card-link\"><fa [name]=\"'plus-circle'\"></fa></a> -->\r\n    <a routerLink=\"/solutionsView\" class=\"view-edit card-link\"><fa [name]=\"'eye'\"></fa> / <fa [name]=\"'edit'\"></fa></a>\r\n  </div>\r\n</div>\r\n    <div class=\"card\" style=\"width: 18rem;\">\r\n  <div class=\"card-body\">\r\n    <div class=\"card-heading\"><h5 class=\"card-title\">Audit</h5>\r\n      </div>\r\n    <hr />\r\n    <!--<h6 class=\"card-subtitle mb-2 text-muted\">Card subtitle</h6>-->\r\n    <p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\r\n    <a href=\"#\" class=\"card-link\"><fa [name]=\"'plus-circle'\"></fa></a>\r\n    <a href=\"#\" class=\"view-edit card-link\"><fa [name]=\"'eye'\"></fa> / <fa [name]=\"'edit'\"></fa></a>\r\n  </div>\r\n</div>\r\n        </div>\r\n    <div class=\"second-row\">\r\n    <div class=\"card\" style=\"width: 18rem;\">\r\n  <div class=\"card-body\">\r\n    <div class=\"card-heading\"><h5 class=\"card-title\">Assessment</h5>\r\n      </div>\r\n    <hr />\r\n    <!--<h6 class=\"card-subtitle mb-2 text-muted\">Card subtitle</h6>-->\r\n    <p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\r\n    <a href=\"#\" class=\"card-link\"><fa [name]=\"'plus-circle'\"></fa></a>\r\n    <a href=\"#\" class=\"view-edit card-link\"><fa [name]=\"'eye'\"></fa> / <fa [name]=\"'edit'\"></fa></a>\r\n  </div>\r\n</div>\r\n    <div class=\"card\" style=\"width: 18rem;\">\r\n  <div class=\"card-body\">\r\n    <div class=\"card-heading\"><h5 class=\"card-title\">Reports</h5>\r\n      </div>\r\n    <hr />\r\n    <!--<h6 class=\"card-subtitle mb-2 text-muted\">Card subtitle</h6>-->\r\n    <p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\r\n    <a href=\"#\" class=\"card-link\"><fa [name]=\"'plus-circle'\"></fa></a>\r\n    <a href=\"#\" class=\"view-edit card-link\"><fa [name]=\"'eye'\"></fa> / <fa [name]=\"'edit'\"></fa></a>\r\n  </div>\r\n</div>\r\n    <div class=\"card\" style=\"width: 18rem;\">\r\n  <div class=\"card-body\">\r\n    <div class=\"card-heading\"><h5 class=\"card-title\">Dashboard</h5>\r\n      </div>\r\n    <hr />\r\n    <!--<h6 class=\"card-subtitle mb-2 text-muted\">Card subtitle</h6>-->\r\n    <p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\r\n    <a href=\"#\" class=\"card-link\"><fa [name]=\"'plus-circle'\"></fa></a>\r\n    <a href=\"#\" class=\"view-edit card-link\"><fa [name]=\"'eye'\"></fa> / <fa [name]=\"'edit'\"></fa></a>\r\n  </div>\r\n</div>\r\n    <div class=\"card\" style=\"width: 18rem;\">\r\n  <div class=\"card-body\">\r\n   <div class=\"card-heading\"><h5 class=\"card-title\">Systems</h5>\r\n      </div>\r\n    <hr />\r\n    <!--<h6 class=\"card-subtitle mb-2 text-muted\">Card subtitle</h6>-->\r\n    <p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\r\n    <a href=\"#\" class=\"card-link\"><fa [name]=\"'plus-circle'\"></fa></a>\r\n    <a href=\"#\" class=\"view-edit card-link\"><fa [name]=\"'eye'\"></fa> / <fa [name]=\"'edit'\"></fa></a>\r\n  </div>\r\n</div>\r\n</div>\r\n        <div class=\"third-row\">\r\n    <div class=\"card\" style=\"width: 18rem;\">\r\n  <div class=\"card-body\">\r\n    <div class=\"card-heading\"><h5 class=\"card-title\">Security Life Cycle</h5>\r\n      </div>\r\n    <hr />\r\n    <!--<h6 class=\"card-subtitle mb-2 text-muted\">Card subtitle</h6>-->\r\n    <p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\r\n    <a href=\"#\" class=\"card-link\"><fa [name]=\"'plus-circle'\"></fa></a>\r\n    <a href=\"#\" class=\"view-edit card-link\"><fa [name]=\"'eye'\"></fa> / <fa [name]=\"'edit'\"></fa></a>\r\n  </div>\r\n</div>\r\n    <div class=\"card\" style=\"width: 18rem;\">\r\n  <div class=\"card-body\">\r\n    <div class=\"card-heading\"><h5 class=\"card-title\">Compliance Check</h5>\r\n      </div>\r\n    <hr />\r\n    <!--<h6 class=\"card-subtitle mb-2 text-muted\">Card subtitle</h6>-->\r\n    <p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\r\n    <a href=\"#\" class=\"card-link\"><fa [name]=\"'plus-circle'\"></fa></a>\r\n    <a href=\"#\" class=\"view-edit card-link\"><fa [name]=\"'eye'\"></fa> / <fa [name]=\"'edit'\"></fa></a>\r\n  </div>\r\n</div>\r\n    <div class=\"card\" style=\"width: 18rem;\">\r\n  <div class=\"card-body\">\r\n    <div class=\"card-heading\"><h5 class=\"card-title\">Policy</h5>\r\n      </div>\r\n    <hr />\r\n    <!--<h6 class=\"card-subtitle mb-2 text-muted\">Card subtitle</h6>-->\r\n    <p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\r\n    <a routerLink=\"/policy\" class=\"card-link\"><fa [name]=\"'plus-circle'\"></fa></a>\r\n    <a routerLink=\"/policyView\" class=\"view-edit card-link\"><fa [name]=\"'eye'\"></fa> / <fa [name]=\"'edit'\"></fa></a>\r\n  </div>\r\n</div>\r\n    <div class=\"card\" style=\"width: 18rem;\">\r\n  <div class=\"card-body\">\r\n   <div class=\"card-heading\"><h5 class=\"card-title\">Systems</h5>\r\n      </div>\r\n    <hr />\r\n    <!--<h6 class=\"card-subtitle mb-2 text-muted\">Card subtitle</h6>-->\r\n    <p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\r\n    <a href=\"#\" class=\"card-link\"><fa [name]=\"'plus-circle'\"></fa></a>\r\n    <a href=\"#\" class=\"view-edit card-link\"><fa [name]=\"'eye'\"></fa> / <fa [name]=\"'edit'\"></fa></a>\r\n  </div>\r\n</div>\r\n        \r\n        </div>\r\n        \r\n        </div>    "

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
exports.push([module.i, ".navigate{\r\n    margin: 15px;\r\n    padding: 5px;\r\n}\r\n\r\n.sticky-top{\r\n\theight: 30px;\r\n\tborder-radius: 5px;\r\n}\r\n\r\n.form-options{\r\n    margin-right: 15px;\r\n    margin-top: -15px;\r\n    padding: 5px;\r\n}\r\n\r\n.home-back{\r\n\tfloat: left;\r\n}\r\n\r\n.save-edit{\r\n\tfloat: right;\r\n}\r\n.save-times{\r\n\tfloat: right;\r\n}\r\na{\r\n\ttext-decoration: none;\r\n}\r\n\r\n.icons{\r\n    vertical-align: middle;\r\n    font-size: 20px;\r\n    margin-top: -20px;\r\n    padding: 2px;\r\n    margin-left: 5px;\r\n}\r\n\r\n/*.left-icons{\r\n\tfloat: left;\r\n}\r\n\r\n.icons{\r\n\tdisplay: inline-block;\r\n}*/\r\n\r\n.home-icon{\r\n    color: #3A539B;\r\n}\r\n\r\n.home-icon:hover{\r\n\t\r\n}\r\n\r\n.edit-icon{\r\n    /*margin-left: 10px;*/\r\n    color: #3A539B;\r\n}\r\n\r\n.left-icon{\r\n    /*margin-left: 10px;*/\r\n    color: #3A539B;\r\n}\r\n\r\n.save-icon{\r\n    color: #3A539B;\r\n}\r\n\r\n.times-icon{\r\n\tcolor: #3A539B;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/edit-navigation/edit-navigation.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"navigate sticky-top\" [ngStyle]=\"{'backgroundColor': getColor(), 'opacity': getOpacity()}\">\r\n            <!-- <div class=\"home\">\r\n                <i class=\"fas fa-home home-icon icons\"></i>\r\n                < class=\"fas fa-arrow-left left-icon icons\"></i>\r\n            </div> -->\r\n            <div class=\"form-options\">\r\n                <div class=\"home-back\">\r\n                \t<a routerLink=\"/\"><fa class=\"left-icons home-icon icons\" data-toggle=\"tooltip\" data-placement=\"right\" title=\"Home\" data-animation=\"true\" data-delay=\"0\" [name]=\"'home'\"></fa></a>\r\n                \t<a href=\"javascript:void(0)\" (click)=\"backClicked()\"><fa class=\"left-icons left-icon icons\" data-toggle=\"tooltip\" data-placement=\"right\" title=\"Back\" data-animation=\"true\" data-delay=\"0\" [name]=\"'arrow-left'\"></fa></a>\r\n                </div>\r\n                <div class=\"save-edit\">\r\n                \t<fa class=\"edit-icon icons\"   data-toggle=\"tooltip\" data-placement=\"right\" title=\"Save\" data-animation=\"true\" data-delay=\"0\" [name]=\"'edit'\" (click)=\"editClick.emit(true)\"></fa>\r\n                </div>\r\n                <div class=\"save-times\">\r\n                \t<fa class=\"times-icon icons\"   data-toggle=\"tooltip\" data-placement=\"right\" title=\"Save\" data-animation=\"true\" data-delay=\"0\" [name]=\"'times'\" (click)=\"cancelClick.emit(true)\"></fa>\r\n                </div>\r\n                <div class=\"save-edit\">\r\n                \t<fa class=\"save-icon icons\" data-toggle=\"tooltip\" data-placement=\"right\" title=\"Save\" data-animation=\"true\" data-delay=\"0\" [name]=\"'save'\" (click)=\"submitClick.emit()\"></fa>\r\n                </div>\r\n                <!-- <fa class=\"edit-icon icons\" [name]=\"'edit'\"></fa> -->\r\n            </div>\r\n            \r\n          </div> \r\n       \r\n        \r\n        "

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
exports.push([module.i, "form{\r\n    padding: 20px;\r\n    border-radius: 10px;\r\n    border: 1px solid transparent;\r\n    margin: 20px;\r\n    background-color: #EEEEEE;\r\n    overflow: hidden;\r\n}\r\n\r\n.page-description{\r\n    text-align: center;\r\n    /*padding: 2%;*/\r\n    margin-top: 0px;\r\n    margin-bottom: 10px;\r\n}\r\n\r\n@keyframes slideInFromCenter {\r\n  0% {\r\n    transform: scale(0,1);\r\n  }\r\n  100% {\r\n    transform: scale(1,1);\r\n  }\r\n}\r\n\r\n.after-heading{\r\n\twidth: 10%;\r\n\tmargin: auto;\r\n\tbackground-color: #3A539B;\r\n\tanimation: 1s ease-out 0s 1 slideInFromCenter;\r\n\t/*border-radius: 10px solid #3A539B;*/\r\n\t/*margin-bottom: 15px;*/\r\n}\r\n\r\n.tip{\r\n    width: 100%;\r\n}\r\n\r\n.tip-text{\r\n    background-color: #F8FFAE;\r\n    padding: 5px;\r\n    border-radius: 10px;\r\n    margin-left: 5px;\r\n    color:  #3A539B;\r\n}\r\n\r\n.light-bulb{\r\n    margin-right: 3px;\r\n    padding: 2px;\r\n    margin-left: 3px;\r\n    color:  #3A539B;\r\n}\r\n\r\n.buttons{\r\n\tfloat: right;\r\n}\r\n\r\nh4{\r\n\tfont-size: 18px;\r\n\tfont-weight: 500;\r\n}\r\n\r\nlabel{\r\n\tfont-weight: 300;\r\n\tfont-size: 15px;\r\n}\r\n\r\n.asterisk{\r\n\tdisplay: inline;\r\n\tcolor: red;\r\n\tmargin-left: 2px;\r\n}\r\n\r\n.asterisk-inline{\r\n\tfloat: right;\r\n}\r\n\r\n/*select, option{\r\n\twidth: 120px;\r\n\theight: 35px;\r\n\tborder-radius: 4px;\r\n\tborder: 1px solid rgba(0,0,0,.15);\r\n\tmargin-left: 5px;\r\n}\r\n\r\n/*.label-form{\r\n\tmargin-right: 5px;\r\n}*/\r\n\r\n.model-solution-row{\r\n\tpadding: 1%;\r\n}\r\n\r\n.second-row{\r\n\tmargin-top: 1px;\r\n\tpadding: 1%;\r\n}\r\n\r\n.installation{\r\n\tpadding: 1%;\r\n}\r\n\r\n.hosting-notes{\r\n\tdisplay: block;\r\n\t/*margin-top: 20px;*/\r\n}\r\n\r\n.certification-test{\r\n\tmargin-top: 10px;\r\n\tpadding: 1%;\r\n}\r\n\r\n.attachments-div{\r\n\tmargin-top: 25px;\r\n}\r\n\r\n.btn{\r\n\tbackground-color: #3A539B;\r\n\tborder-color: #3A539B;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/edit-solution/edit-solution-form/edit-solution-form.component.html":
/***/ (function(module, exports) {

module.exports = "<form #form=\"ngForm\">\r\n\t\t\t<div class=\"page-description\"><h3>Solutions</h3>\r\n    \t\t<hr class=\"after-heading\" />\r\n    \t\t</div>\r\n        \t<div class=\"tip\"><p class=\"tip-text\"><fa class=\"light-bulb\" [name]=\"'lightbulb-o'\"></fa>Tip:</p></div>\r\n        \t<h4>General Information</h4>\r\n            <div class=\"model-solution-row form-row\">\r\n            \t<div class=\"model form-group col-md-6\">\r\n            <label class=\"label-form\" for=\"modelSolution\"><b>Model/Solution</b></label>\r\n              <input type=\"text\" class=\"asterisk form-control\" id=\"modelSolution\" ngModel name=\"modelSolution\" readonly>\r\n            \t</div>\r\n            \t<div class=\"version form-group col-md-6\">\r\n            \t\t<label class=\"label-form\" for=\"version\"><b>Version</b></label>\r\n\t\t              <input type=\"text\" class=\"asterisk form-control\" id=\"version\" ngModel name=\"version\" readonly>\r\n            \t</div>\r\n            \t<div class=\"form-group col-md-6\">\r\n            <label class=\"label-form\" for=\"systemType\"><b>System Type</b></label>\r\n              <select class=\"form-control\" id=\"systemType\" ngModel name=\"systemType\" value=\"solutionsInput.systemTypeDTO.name\" readonly>\r\n                <option selected>Choose...</option>\r\n                <option value=\"1\">EVS</option>\r\n                <option value=\"2\">Two</option>\r\n                <option value=\"3\">Three</option>\r\n              </select>\r\n            \t</div>\r\n            \t<div class=\"form-group col-md-6\">\r\n            \t\t<label class=\"label-form\" for=\"equipmentType\"><b>Equipment Type</b></label>\r\n\t\t              <select class=\"form-control\" id=\"equipmentType\" ngModel name=\"equipmentType\" value=\"solutionsInput.solutionTypeName\" readonly>\r\n\t\t                <option selected>Choose...</option>\r\n\t\t                <option value=\"1\">Optical/Digital Scan</option>\r\n\t\t                <option value=\"2\">Two</option>\r\n\t\t                <option value=\"3\">Three</option>\r\n\t\t              </select>\r\n            \t</div>\r\n            \t<div class=\"form-group col-md-6\">\r\n            \t\t<label class=\"label-form\" for=\"vendor\"><b>Vendor</b></label>\r\n\t\t              <select class=\"form-control\" id=\"vendor\" ngModel name=\"vendor\" value=\"solutionsInput.vendor.name\" readonly>\r\n\t\t                <option selected>Choose...</option>\r\n\t\t                <option value=\"1\">Dominion Voting</option>\r\n\t\t                <option value=\"2\">Two</option>\r\n\t\t                <option value=\"3\">Three</option>\r\n\t\t              </select>\r\n            \t\t\r\n            \t</div>\r\n            </div>\r\n        \t<!-- <div class=\"second-row form-row\">\r\n            \t<div class=\"form-group col-md-6\">\r\n            <label class=\"label-form\" for=\"systemType\"><b>System Type</b></label><div class=\"asterisk\">*</div>\r\n              <select class=\"form-control\" id=\"systemType\" required>\r\n                <option selected>Choose...</option>\r\n                <option value=\"1\">EVS</option>\r\n                <option value=\"2\">Two</option>\r\n                <option value=\"3\">Three</option>\r\n              </select>\r\n            \t</div>\r\n            \t<div class=\"form-group col-md-6\">\r\n            \t\t<label class=\"label-form\" for=\"equipmentType\"><b>Equipment Type</b></label><div class=\"asterisk\">*</div>\r\n\t\t              <select class=\"form-control\" id=\"equipmentType\" required>\r\n\t\t                <option selected>Choose...</option>\r\n\t\t                <option value=\"1\">Optical/Digital Scan</option>\r\n\t\t                <option value=\"2\">Two</option>\r\n\t\t                <option value=\"3\">Three</option>\r\n\t\t              </select>\r\n            \t</div>\r\n            \t<div class=\"form-group col-md-6\">\r\n            \t\t<label class=\"label-form\" for=\"vendor\"><b>Vendor</b></label><div class=\"asterisk\">*</div>\r\n\t\t              <select class=\"form-control\" id=\"vendor\" required>\r\n\t\t                <option selected>Choose...</option>\r\n\t\t                <option value=\"1\">Dominion Voting</option>\r\n\t\t                <option value=\"2\">Two</option>\r\n\t\t                <option value=\"3\">Three</option>\r\n\t\t              </select>\r\n            \t\t\r\n            \t</div>\r\n            </div> -->\r\n            <hr />\r\n           <h4>Installation and Hosting</h4>\r\n            <div class=\"installation form-group col-md-6\">\r\n            <label for=\"hostingType\"><b>Hosting Type</b></label>\r\n            <select class=\"form-control\" id=\"hostingType\" ngModel name=\"hostingType\" readonly>\r\n\t\t                <option selected>Choose...</option>\r\n\t\t                <option value=\"1\">Not Applicable</option>\r\n\t\t                <option value=\"2\">Two</option>\r\n\t\t                <option value=\"3\">Three</option>\r\n\t\t              </select>\r\n            </div>\r\n            <div class=\"installation form-group\">\r\n            <label class=\"hosting-notes\" for=\"hostingNotes\"><b>Hosting Notes</b></label><!-- <div class=\"asterisk-inline asterisk\">*</div> -->\r\n            <textarea cols=\"156\" rows=\"7\" id=\"hostingNotes\" ngModel name=\"hostingNotes\" readonly></textarea>\r\n          </div>\r\n            <!-- <p><b>Hosting Notes</b></p>\r\n            <textarea cols=\"100\" rows=\"7\" id=\"hostingNotes\"></textarea> -->\r\n            <hr />\r\n            <h4>Certification Information</h4>\r\n            <div class=\"certification-test form-row\">\r\n            <div class=\"form-group col-md-6\">\r\n                <label for=\"approvedDate\"><b>DoEL Approved Date</b></label>\r\n                <my-date-picker name=\"myname\" readonly></my-date-picker> \r\n                <!-- <input type=\"date\" class=\"form-control\" id=\"approvedDate\"> -->\r\n            </div>\r\n            <div class=\"form-group col-md-6\">\r\n                <label for=\"dueDate\"><b>Renewal Due Date</b></label>\r\n                <my-date-picker name=\"myname\" readonly></my-date-picker> \r\n                <!-- <input type=\"date\" class=\"form-control\" id=\"dueDate\"> -->\r\n            </div>\r\n         </div>\r\n         <hr />\r\n          <h4>Voting System Test Laboratory - VSTL</h4>\r\n          <div class=\"certification-test form-group col-md-6\">\r\n            <label for=\"label-form labVendor\"><b>Lab Vendor</b></label>\r\n            <select class=\"form-control\" id=\"labVendor\" ngModel name=\"labVendor\" readonly>\r\n\t\t                <option selected>Choose...</option>\r\n\t\t                <option value=\"PROV&V\">PROV&V</option>\r\n\t\t                <option value=\"SLI\">SLI</option>\r\n\t\t                <option value=\"Wyle Laboratories/NTS\">Wyle Laboratories/NTS</option>\r\n\t\t              </select>\r\n          </div>\r\n          <div class=\"contact\">\r\n          \r\n          //solutionId\r\n          \t<div class=\"certification-test form-row\">\r\n            <div class=\"form-group col-md-6\">\r\n                <label for=\"firstName\"><b>First Name</b></label>\r\n                <input type=\"text\" class=\"asterisk form-control\" id=\"firstName\" ngModel name=\"firstName\" readonly>\r\n                <input type=\"hidden\" ngModel name=\"solutionId\">\r\n            </div>\r\n            <div class=\"form-group col-md-6\">\r\n                <label for=\"lastName\"><b>Last Name</b></label>\r\n                <input type=\"text\" class=\"asterisk form-control\" id=\"lastName\" ngModel name=\"lastName\" readonly>\r\n            </div>\r\n            <div class=\"form-group col-md-6\">\r\n                <label for=\"email\"><b>Email Id</b></label>\r\n                <input type=\"email\" class=\"asterisk form-control\" id=\"email\" ngModel name=\"email\" readonly>\r\n            </div>\r\n            <div class=\"form-group col-md-6\">\r\n                <label for=\"phone\"><b>Phone Number</b></label>\r\n                <input type=\"text\" class=\"asterisk form-control\" id=\"phone\" ngModel name=\"phone\" readonly>\r\n            </div>\r\n         </div>\r\n          <!-- <div class=\"certification-test form-row\">\r\n            <div class=\"form-group col-md-6\">\r\n                <label for=\"email\"><b>Email Id</b></label><div class=\"asterisk\">*</div>\r\n                <input type=\"email\" class=\"asterisk form-control\" id=\"email\" required>\r\n            </div>\r\n            <div class=\"form-group col-md-6\">\r\n                <label for=\"phone\"><b>Phone Number</b></label><div class=\"asterisk\">*</div>\r\n                <input type=\"text\" class=\"asterisk form-control\" id=\"phone\" required>\r\n            </div>\r\n         </div> -->\r\n          </div>\r\n         <hr />\r\n         <h4>Attachments</h4>\r\n        <!--  <div class=\"attachments-div\"><p class=\"attachments\"><b>Attachments</b> --><!-- </p>\r\n            \t<input type=\"file\">\t\r\n            </div> -->\r\n         <div class=\"buttons\">\r\n         \t<button type=\"cancel\" class=\"cancel btn btn-primary\">Cancel</button>\r\n        \t<button type=\"submit\" class=\"submit btn btn-primary\" [disabled]=\"!form.valid\">Submit</button>\r\n        </div>\r\n</form>"

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
exports.push([module.i, "form{\r\n    padding: 20px;\r\n    border-radius: 10px;\r\n    border: 1px solid transparent;\r\n    margin: 20px;\r\n    background-color: #EEEEEE;\r\n    overflow: hidden;\r\n}\r\n\r\n.form-control:disabled, .form-control[readonly] {\r\n    background-color: #ffffff;\r\n}\r\n\r\n\r\n.page-description{\r\n    text-align: center;\r\n    /*padding: 2%;*/\r\n    margin-top: 0px;\r\n    margin-bottom: 10px;\r\n}\r\n\r\n@keyframes slideInFromCenter {\r\n  0% {\r\n    transform: scale(0,1);\r\n  }\r\n  100% {\r\n    transform: scale(1,1);\r\n  }\r\n}\r\n\r\n.after-heading{\r\n\twidth: 10%;\r\n\tmargin: auto;\r\n\tbackground-color: #3A539B;\r\n\tanimation: 1s ease-out 0s 1 slideInFromCenter;\r\n\t/*border-radius: 10px solid #3A539B;*/\r\n\t/*margin-bottom: 15px;*/\r\n}\r\n\r\n.tip{\r\n    width: 100%;\r\n}\r\n\r\n.tip-text{\r\n    background-color: #F8FFAE;\r\n    padding: 5px;\r\n    border-radius: 10px;\r\n    margin-left: 5px;\r\n    color:  #3A539B;\r\n}\r\n\r\n.light-bulb{\r\n    margin-right: 3px;\r\n    padding: 2px;\r\n    margin-left: 3px;\r\n    color:  #3A539B;\r\n}\r\n\r\n.buttons{\r\n\tfloat: right;\r\n}\r\n\r\nh4{\r\n\tfont-size: 18px;\r\n\tfont-weight: 500;\r\n}\r\n\r\nlabel{\r\n\tfont-weight: 300;\r\n\tfont-size: 15px;\r\n}\r\n\r\n.asterisk{\r\n\tdisplay: inline;\r\n\tcolor: red;\r\n\tmargin-left: 2px;\r\n}\r\n\r\n.asterisk-inline{\r\n\tfloat: right;\r\n}\r\n\r\n/*select, option{\r\n\twidth: 120px;\r\n\theight: 35px;\r\n\tborder-radius: 4px;\r\n\tborder: 1px solid rgba(0,0,0,.15);\r\n\tmargin-left: 5px;\r\n}\r\n\r\n/*.label-form{\r\n\tmargin-right: 5px;\r\n}*/\r\n\r\ninput[readonly], select[readonly] {\r\n\tbackground-color: #ffffff;\r\n\t}\r\n\t\r\n\r\n.model-solution-row{\r\n\tpadding: 1%;\r\n}\r\n\r\n.second-row{\r\n\tmargin-top: 1px;\r\n\tpadding: 1%;\r\n}\r\n\r\n.installation{\r\n\tpadding: 1%;\r\n}\r\n\r\n.hosting-notes{\r\n\tdisplay: block;\r\n\t/*margin-top: 20px;*/\r\n}\r\n\r\n.certification-test{\r\n\tmargin-top: 10px;\r\n\tpadding: 1%;\r\n}\r\n\r\n.attachments-div{\r\n\tmargin-top: 25px;\r\n}\r\n\r\n.btn{\r\n\tbackground-color: #3A539B;\r\n\tborder-color: #3A539B;\r\n}\r\n\r\n.navigate{\r\n    margin: 15px;\r\n    padding: 5px;\r\n}\r\n\r\n.sticky-top{\r\n\theight: 30px;\r\n\tborder-radius: 5px;\r\n}\r\n\r\n.form-options{\r\n    margin-right: 15px;\r\n    margin-top: -15px;\r\n    padding: 5px;\r\n}\r\n\r\n.home-back{\r\n\tfloat: left;\r\n}\r\n\r\n.save-edit{\r\n\tfloat: right;\r\n}\r\n\r\na{\r\n\ttext-decoration: none;\r\n}\r\n\r\n.icons{\r\n    vertical-align: middle;\r\n    font-size: 20px;\r\n    margin-top: -20px;\r\n    padding: 2px;\r\n    margin-left: 5px;\r\n}\r\n\r\n/*.left-icons{\r\n\tfloat: left;\r\n}\r\n\r\n.icons{\r\n\tdisplay: inline-block;\r\n}*/\r\n\r\n.home-icon{\r\n    color: #3A539B;\r\n}\r\n\r\n.home-icon:hover{\r\n\t\r\n}\r\n\r\n.edit-icon{\r\n    /*margin-left: 10px;*/\r\n    color: #3A539B;\r\n}\r\n\r\n.left-icon{\r\n    /*margin-left: 10px;*/\r\n    color: #3A539B;\r\n}\r\n\r\n.save-icon{\r\n    color: #3A539B;\r\n}\r\n\r\n.download-icon{\r\n\t color: #3A539B;\r\n}\r\n\r\ntable {\r\n  display: table;\r\n\r\n}\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/edit-solution/edit-solution.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navigation-component></app-navigation-component>\r\n<!-- <app-edit-navigation></app-edit-navigation>\r\n<button type=\"cancel\" class=\"cancel btn btn-primary\" (click)=\"editorGroup()\">Cancel</button> -->\r\n<!-- <app-edit-solution-form></app-edit-solution-form> -->\r\n<div class=\"navigate sticky-top\" [ngStyle]=\"{'backgroundColor': getColor(), 'opacity': getOpacity()}\">\r\n            <!-- <div class=\"home\">\r\n                <i class=\"fas fa-home home-icon icons\"></i>\r\n                < class=\"fas fa-arrow-left left-icon icons\"></i>\r\n            </div> -->\r\n            <div class=\"form-options\">\r\n                <div class=\"home-back\">\r\n                \t<a routerLink=\"/\"><fa class=\"left-icons home-icon icons\" data-toggle=\"tooltip\" data-placement=\"right\" title=\"Home\" data-animation=\"true\" data-delay=\"0\" [name]=\"'home'\"></fa></a>\r\n                \t<a href=\"javascript:void(0)\" (click)=\"backClicked()\"><fa class=\"left-icons left-icon icons\" data-toggle=\"tooltip\" data-placement=\"right\" title=\"Back\" data-animation=\"true\" data-delay=\"0\" [name]=\"'arrow-left'\"></fa></a>\r\n                </div>\r\n                <div class=\"save-edit\">\r\n                \t<fa class=\"edit-icon icons\" data-toggle=\"tooltip\" data-placement=\"right\" title=\"Save\" data-animation=\"true\" data-delay=\"0\"  (click)=\"editorGroup()\" [name]=\"'edit'\"></fa>\r\n                </div>\r\n                <!-- <fa class=\"edit-icon icons\" [name]=\"'edit'\"></fa> -->\r\n            </div>\r\n        </div> \r\n<form  (ngSubmit)=\"createSolution()\" enctype=\"multipart/form-data\">\r\n\t\t\t<div class=\"page-description\"><h3>Solutions</h3>\r\n    \t\t<hr class=\"after-heading\" />\r\n    \t\t</div>\r\n        \t<div class=\"tip\"><p class=\"tip-text\"><fa class=\"light-bulb\"></fa>Tip:</p></div>\r\n        \t<h4>General Information</h4>\r\n            \t<div class=\"model-solution-row form-row\">\r\n            \t<div class=\"model form-group col-md-6\">\r\n            <label class=\"label-form\" for=\"modelSolution\"><b>Model/Solution</b></label>\r\n              <input type=\"text\" class=\"form-control\" name=\"solutionName\" [(ngModel)] = \"solution.name\">\r\n            \t</div>\r\n            \t<div class=\"version form-group col-md-6\">\r\n            \t\t<label class=\"label-form\" for=\"version\"><b>Version</b></label>\r\n\t\t              <input type=\"text\" class=\"form-control\" id=\"version\" name=\"versionNumber\" [(ngModel)] = \"solution.versionNumber\">\r\n\t\t              \r\n            \t</div>\r\n            \t<div class=\"form-group col-md-6\">\r\n            \t<label class=\"label-form\" for=\"systemType\"><b>System Type</b></label><div class=\"asterisk\">*</div>\r\n              \t<input type=\"text\" class=\"form-control\" id=\"systemType\" *ngIf=\"editSolution.disabled\" [(ngModel)] = \"solution.systemTypeDTO.name\" [name]=\"'system_name'\">\r\n              \t<select class=\"form-control\" id=\"systemType\" name=\"systemType\" *ngIf=\"!editSolution.disabled\" \r\n              \t[(ngModel)]=\"solution.systemTypeDTO.systemTypeId\" (change)=\"solution.systemTypeDTO.systemTypeId = $event.target.value\" required>\r\n\t\t           \r\n\t\t           <option *ngFor=\"let systemType of systemTypeDTO\" value=\"{{ systemType.systemTypeId }}\">\r\n\t\t                {{ systemType.name }} \r\n\t\t                </option> \r\n\t\t                </select>\r\n            \t</div>\r\n            \t<div class=\"form-group col-md-6\">\r\n            \t\t<label class=\"label-form\" for=\"equipmentType\"><b>Equipment Type</b></label><div class=\"asterisk\">*</div>\r\n\t\t              <input type=\"text\" class=\"form-control\" id=\"equipmentType\" *ngIf=\"editSolution.disabled\" [(ngModel)] = \"solution.solutionTypeName\" [name] = \"'solution_type'\"> \r\n\t\t              <select class=\"form-control\" id=\"equipmentType\" name=\"equipmentType\" *ngIf=\"!editSolution.disabled\"\r\n\t\t               [(ngModel)] = \"solution.solutionType\" (change)=\"solution.solutionType = $event.target.value\" required>\r\n\t\t               <option *ngFor=\"let equipmentType of solutionType\" value=\"{{ equipmentType.solutionTypeId }}\">\r\n\t\t               \t  {{ equipmentType.typeName }}\r\n\t\t               </option>\r\n\t\t               <!--  <option *ngFor=\"let sol of solution.solutionTypeName\" value=\"{{solution.solutionType}}\">\r\n\t\t                \t{{ sol }}\r\n\t\t                </option> -->\r\n\t\t              </select>\r\n            \t</div>\r\n            \t<div class=\"form-group col-md-6\">\r\n            \t\t<label class=\"label-form\" for=\"vendor\"><b>Vendor</b></label><div class=\"asterisk\">*</div>\r\n\t\t              <input type=\"text\" class=\"form-control\" id=\"vendor\" *ngIf=\"editSolution.disabled\" [(ngModel)] = \"solution.vendor.name\" [name] = \"'vendor_details'\">\r\n\t\t              <select class=\"form-control\" id=\"vendor\" name=\"vendor\" *ngIf=\"!editSolution.disabled\" \r\n\t\t              [(ngModel)]=\"solution.vendorId\" (change)=\"solution.vendorId = $event.target.value\" required>\r\n\t\t           <option *ngFor=\"let vendor of vendorDTO\" value=\"{{ vendor.vendorId }}\">\r\n\t\t                {{ vendor.name }}\r\n\r\n\t\t                </option>\r\n\t\t                </select>\r\n            \t</div>\r\n            \t</div>\r\n             <!-- <div class=\"second-row form-row\"> \r\n     \t\t<div class=\"form-group col-md-6\" formGroupName=\"systemType\"> \r\n             \t<label class=\"label-form\" for=\"systemType\"><b>System Type</b></label><div class=\"asterisk\">*</div> \r\n               \t<input type=\"text\" class=\"form-control\" id=\"systemType\" *ngIf=\"editSolution.disabled\">\r\n               \t<select class=\"form-control\" id=\"systemType\" name=\"systemType\" *ngIf=\"!editSolution.disabled\"  required> \r\n \t\t          <option>Choose</option> \r\n \t\t           <option *ngFor=\"let systemType of systemTypeDTO\"> \r\n \t\t                {{ systemType.name }} \r\n \t\t                </option>  \r\n \t\t                </select> \r\n             \t</div> \r\n            \t</div>\r\n            \t -->\r\n            \t<!-- <div class=\"form-group col-md-6\">\r\n            \t\t<label class=\"label-form\" for=\"equipmentType\"><b>Equipment Type</b></label><div class=\"asterisk\">*</div>\r\n\t\t              <input type=\"text\" class=\"form-control\" id=\"equipmentType\" *ngIf=\"editSolution.disabled\" formControlName=\"solutionTypeName\"> \r\n\t\t              <select class=\"form-control\" id=\"equipmentType\" name=\"equipmentType\" *ngIf=\"!editSolution.disabled\" formControlName=\"solutionTypeName\" required>\r\n\t\t              \t<option [(ngModel)]=\"solutionTypeName\" selected></option>\r\n\t\t                <option *ngFor=\"let solution of solutionType\" [ngValue]=\"solution.solutionId\">\r\n\t\t               \r\n\t\t                {{ solution.typeName }}\r\n\t\t              \r\n\t\t                \r\n\t\t                </option>\r\n\t\t                <option>{{ solution.typeName }}</option>\r\n\t\t                <option>{{ solution.typeName }}</option>\r\n\t\t                <option>{{ solution.typeName }}</option>\r\n\t\t                <option>{{ solution.typeName }}</option>\r\n\t\t              </select>\r\n            \t</div>\r\n            \t\t<div class=\"form-group col-md-6\" formGroupName=\"vendor\">\r\n            \t\t<label class=\"label-form\" for=\"vendor\"><b>Vendor</b></label><div class=\"asterisk\">*</div>\r\n\t\t              <input type=\"text\" class=\"form-control\" id=\"vendor\" *ngIf=\"editSolution.disabled\" formControlName=\"name\">\r\n\t\t              <select class=\"form-control\" id=\"vendor\" name=\"vendor\" *ngIf=\"!editSolution.disabled\" [(ngModel)]=\"vendorId\" required>\r\n\t\t           <option>Choose</option>\r\n\t\t           <option *ngFor=\"let vendor of vendorDTO\" [ngValue]=\"vendor.id\">\r\n\t\t                {{ vendor.name }}\r\n\r\n\t\t                </option>\r\n\t\t                </select>\r\n            \t</div>\r\n            </div>\r\n            <hr /> -->\r\n           <div>\r\n           \t<h4>Installation and Hosting</h4>\r\n            \t <div class=\"installation form-group col-md-6\">\r\n\t            <label for=\"hostingType\"><b>Hosting Type</b></label>\r\n\t            <input type=\"text\" class=\"form-control\" id=\"hostingType\" *ngIf=\"editSolution.disabled\" [(ngModel)] = \"solution.hostingTypeDTO.name\" [name] = \"'hosting_name'\">\r\n\t             <select class=\"form-control\" id=\"hostingType\" name=\"hostingType\" *ngIf=\"!editSolution.disabled\"\r\n\t             \t[(ngModel)] = \"solution.hostingTypeDTO.hostingTypeId\" (change) = \"solution.hostingTypeDTO.hostingTypeId = $event.target.value\" required>\r\n\t\t           <option *ngFor=\"let hostingType of hostingTypeDTO\" value = \"{{ hostingType.hostingTypeId }}\">\r\n\t\t                {{ hostingType.name }}\r\n\r\n\t\t                </option>\r\n\t\t                </select>\r\n            </div>\r\n            <div class=\"installation form-group\">\r\n            <label class=\"hosting-notes\" for=\"hostingNotes\"><b>Hosting Notes</b></label>\r\n            <textarea *ngIf=\"!editSolution.disabled\" cols=\"156\" rows=\"7\" id=\"hostingNotes\" required></textarea>\r\n            <div class=\"attachments-div\"><p class=\"attachments\"><b>Attachments</b></p>\r\n            <div class=\"display-file\">\r\n            \t<ul\r\n\t\t\t\t\t\t\t\t*ngFor=\" let certDocDTO of solution.certDocDTOs \">\r\n\t\t\t\t\t\t\t\t<li\r\n\t\t\t\t\t\t\t\t\t*ngIf=\"certDocDTO.section == 'hosting'\">\r\n\t\t\t\t\t\t\t\t\t<a (click)=\"showFile(certDocDTO.certDocId)\">{{certDocDTO.fileName}}</a></li>\r\n\t\t\t\t\t\t\t</ul>\r\n            </div>\r\n         \t<input type=\"file\" #fileInput *ngIf=\"!editSolution.disabled\" (change)=\"createCertDTO($event,'hosting')\">\r\n            </div>\r\n          </div>\r\n           </div>\r\n            <hr />\r\n           <div>\r\n            \t<h4>Certification Information</h4>\r\n            <div class=\"certification-test form-row\">\r\n            <div class=\"form-group col-md-6\">\r\n                <label for=\"approvedDate\"><b>DoEL Approved Date</b></label>\r\n                <my-date-picker name=\"myname\" readonly></my-date-picker> \r\n            </div>\r\n            <div class=\"form-group col-md-6\">\r\n                <label for=\"dueDate\"><b>Renewal Due Date</b></label>\r\n                <my-date-picker name=\"myname\"></my-date-picker> \r\n            </div>\r\n         </div>\r\n            </div>\r\n         <hr /> \r\n          <div>\r\n          \t<h4>Voting System Test Laboratory - VSTL</h4>\r\n          \t<div class=\"certification-test form-group col-md-6\">\r\n            <label for=\"label-form labVendor\"><b>Lab Vendor</b></label>\r\n            <input type=\"text\" class=\"form-control\" id=\"labVendor\" *ngIf=\"editSolution.disabled\" [(ngModel)] = \"solution.labVendorsDTO.name\" [name] = \"'lab_name'\">\r\n            <select class=\"form-control\" id=\"labVendor\" name=\"labVendor\" *ngIf=\"!editSolution.disabled\"\r\n             [(ngModel)]=\"solution.labVendorsDTO.labVendorId\" (change) = \"solution.labVendorsDTO.labVendorId = $event.target.value\" required>\r\n\t\t           <option *ngFor=\"let lab of labVendorsDTO\" value = \"{{ lab.labVendorId }}\">\r\n\t\t                {{ lab.name }}\r\n\t\t                </option>\r\n\t\t                </select>\r\n          </div>\r\n         <div class=\"contact\">\r\n          \t<div class=\"certification-test form-row\">\r\n            <div class=\"form-group col-md-6\">\r\n                <label for=\"firstName\"><b>First Name</b></label>\r\n                <input type=\"text\" class=\"form-control\" id=\"firstName\" [(ngModel)] = \"solution.labVendorsDTO.firstName\" [name] = \"'firstName'\">\r\n            </div>\r\n            <div class=\"form-group col-md-6\">\r\n                <label for=\"lastName\"><b>Last Name</b></label>\r\n                <input type=\"text\" class=\"form-control\" id=\"lastName\" [(ngModel)] = \"solution.labVendorsDTO.lastName\" [name] = \"'lastName'\">\r\n            </div>\r\n            <div class=\"form-group col-md-6\">\r\n                <label for=\"email\"><b>Email Id</b></label>\r\n                <input type=\"email\" class=\"form-control\" id=\"email\" [(ngModel)] = \"solution.labVendorsDTO.emailId\" [name] = \"'emailId'\">\r\n            </div>\r\n            <div class=\"form-group col-md-6\">\r\n                <label for=\"phone\"><b>Phone Number</b></label>\r\n                <input type=\"text\" class=\"form-control\" id=\"phone\" [(ngModel)] = \"solution.labVendorsDTO.phoneNumber\" [name] = \"'phoneNumber'\">\r\n            </div>\r\n         </div>\r\n          </div>\r\n          </div>\r\n         <hr />\r\n          <div>\r\n         \t<h4>Standard</h4>\r\n         <div class=\"installation form-group\">\r\n            <label class=\"hosting-notes\" for=\"standard\"><b>Notes</b></label>\r\n            <textarea *ngIf=\"!editSolution.disabled\" cols=\"156\" rows=\"7\" id=\"standard\" required></textarea>\r\n            <div class=\"attachments-div\"><p class=\"attachments\"><b>Attachments</b></p>\r\n         <input type=\"file\" #fileInput *ngIf=\"!editSolution.disabled\" (change)=\"createCertDTO($event,'standard')\">\r\n         <div class=\"display-file\">\r\n            \t<ul\r\n\t\t\t\t\t\t\t\t*ngFor=\" let certDocDTO of solution.certDocDTOs \">\r\n\t\t\t\t\t\t\t\t<li\r\n\t\t\t\t\t\t\t\t\t*ngIf=\"certDocDTO.section == 'standard'\">\r\n\t\t\t\t\t\t\t\t\t<a href=\"#\">{{certDocDTO.fileName}}</a></li>\r\n\t\t\t\t\t\t\t</ul>\r\n            </div>\r\n            </div>\r\n          </div>\r\n            <hr />\r\n         <h4>Patches</h4>\r\n         <div class=\"installation form-group\">\r\n            <label class=\"hosting-notes\" for=\"patches\"><b>Patches</b></label>\r\n            <textarea *ngIf=\"!editSolution.disabled\" cols=\"156\" rows=\"7\" id=\"patches\" required></textarea>\r\n            <div class=\"attachments-div\"><p class=\"attachments\"><b>Attachments</b></p>\r\n            \t<div class=\"display-file\">\r\n            \t<table>\r\n            \t\t<tbody>\r\n            \t\t\t<tr *ngFor=\"let certDocDTO of solution.certDocDTOs\">\r\n            \t\t\t\t<td *ngIf=\"certDocDTO.section == 'patches'\"><a (click)=\"showFile(certDocDTO.certDocId)\" style=\"cursor:pointer;\">{{certDocDTO.fileName}}</a></td>\r\n            \t\t\t\t<td><fa *ngIf=\"!editSolution.disabled\" class=\"download-icon icons\" [name]=\"'trash'\"></fa></td>\r\n            \t\t\t</tr>\r\n            \t\t</tbody>\r\n            \t</table>\r\n            \t<!-- <ul\r\n\t\t\t\t\t\t\t\t*ngFor=\" let certDocDTO of solution.certDocDTOs \">\r\n\t\t\t\t\t\t\t\t<li\r\n\t\t\t\t\t\t\t\t\t*ngIf=\"certDocDTO.section == 'patches'\">\r\n\t\t\t\t\t\t\t\t\t<a href=\"#\">{{certDocDTO.fileName}}</a><fa *ngIf=\"!editSolution.disabled\" class=\"download-icon icons\" [name]=\"'trash'\"></fa></li>\r\n\t\t\t\t\t\t\t</ul> -->\r\n            </div>\r\n         \t\t<input type=\"file\" #fileInput *ngIf=\"!editSolution.disabled\" (change)=\"createCertDTO($event,'patches')\">\r\n            </div>\r\n          </div>\r\n         </div>\r\n            <hr />\r\n         <div>\r\n         \t<h4>Notes</h4>\r\n         <div class=\"installation form-group\">\r\n         <div class=\"attachments-div\"><p class=\"attachments\"><b>Attachments</b></p>\r\n         <div class=\"display-file\">\r\n            \t<ul\r\n\t\t\t\t\t\t\t\t*ngFor=\" let certDocDTO of solution.certDocDTOs \">\r\n\t\t\t\t\t\t\t\t<li\r\n\t\t\t\t\t\t\t\t\t*ngIf=\"certDocDTO.section == 'solution'\">\r\n\t\t\t\t\t\t\t\t\t<a (click)=\"openFile(certDocDTO.certDocId)\">{{certDocDTO.fileName}}</a></li>\r\n\t\t\t\t\t\t\t</ul>\r\n            </div>\r\n         <input type=\"file\" #fileInput *ngIf=\"!editSolution.disabled\" (change)=\"createCertDTO($event,'solution')\">\r\n            </div>\r\n          </div>\r\n         </div>\r\n            <hr />\r\n         <!-- <h4>Attachments</h4>\r\n         <div class=\"attachments-div\"><p class=\"attachments\"><b>Attachments</b></p>\r\n         <input type=\"file\" #fileInput *ngIf=\"!editSolution.disabled\">\r\n            </div>  -->\r\n         <div class=\"buttons\">\r\n         \t<button type=\"cancel\" class=\"cancel btn btn-primary\">Cancel</button>\r\n         \t<button type=\"submit\" class=\"cancel btn btn-primary\" *ngIf=\"!editSolution.disabled\">Submit</button>\r\n        </div>\r\n</form>"

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
    function EditSolutionComponent(activatedRoute, _apiservice, fb, http, _location) {
        this.activatedRoute = activatedRoute;
        this._apiservice = _apiservice;
        this.fb = fb;
        this.http = http;
        this._location = _location;
        this.files = [];
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
    EditSolutionComponent.prototype.editorGroup = function () {
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
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__apiservice_service__["a" /* ApiserviceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__apiservice_service__["a" /* ApiserviceService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__angular_forms__["e" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_forms__["e" /* FormBuilder */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_7__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__angular_http__["b" /* Http */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_6__angular_common__["Location"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__angular_common__["Location"]) === "function" && _g || Object])
], EditSolutionComponent);

var _a, _b, _c, _d, _e, _f, _g;
//# sourceMappingURL=edit-solution.component.js.map

/***/ }),

/***/ "../../../../../src/app/edit-vendor/edit-vendor.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".forms{\r\n    padding: 20px;\r\n    border-radius: 10px;\r\n    border: 1px solid transparent;\r\n    margin: 20px;\r\n    background-color: #EEEEEE;\r\n    overflow: hidden;\r\n}\r\n.modal-header{\r\n\tbackground-color:#3A539B !important;\r\n\tcolor:white;\r\n}\r\n\r\n\r\n.save-edit{\r\n\tfloat:right;\r\n}\r\n.navigate{\r\n    margin: 15px;\r\n    padding: 5px;\r\n}\r\n\r\n.sticky-top{\r\n\theight: 30px;\r\n\tborder-radius: 5px;\r\n}\r\n\r\n\r\n\r\n.home-back{\r\n\tfloat: left;\r\n}\r\n\r\n.save-edit{\r\n\tfloat: right;\r\n}\r\n\r\na{\r\n\ttext-decoration: none;\r\n}\r\n.home-icon{\r\n    color: #3A539B;\r\n}\r\n.left-icon{\r\n    /*margin-left: 10px;*/\r\n    color: #3A539B;\r\n}\r\n\r\n.icons{\r\n    vertical-align: middle;\r\n    font-size: 20px;\r\n    margin-top: -20px;\r\n    padding: 2px;\r\n    margin-left: 5px;\r\n}\r\n\r\n\r\n.page-description{\r\n    text-align: center;\r\n    margin-top: 0px;\r\n    margin-bottom: 10px;\r\n}\r\n\r\n\r\n@keyframes slideInFromCenter {\r\n  0% {\r\n    transform: scale(0,1);\r\n  }\r\n  100% {\r\n    transform: scale(1,1);\r\n  }\r\n}\r\n\r\n.after-heading{\r\n\twidth: 10%;\r\n\tmargin: auto;\r\n\tbackground-color: #3A539B;\r\n\tanimation: 1s ease-out 0s 1 slideInFromCenter;\r\n}\r\n\r\n.after-heading:hover{\r\n\ttransform: scale(1, 1);\r\n\ttransition: right 0.5s;\r\n}\r\n\r\n.tip{\r\n    width: 100%;\r\n}\r\n\r\n.tip-text{\r\n    background-color: #F8FFAE;\r\n    padding: 5px;\r\n    border-radius: 10px;\r\n    margin-left: 5px;\r\n    color:  #3A539B;\r\n}\r\n\r\n.light-bulb{\r\n    margin-right: 3px;\r\n    padding: 2px;\r\n    margin-left: 3px;\r\n    color:  #3A539B;\r\n}\r\n\r\n .buttons{\r\n\tfloat: right;\r\n}\r\n\r\n.asterisk{\r\n\tdisplay: inline;\r\n\tcolor: red;\r\n\tmargin-left: 2px;\r\n}\r\n.form-control:disabled, .form-control[readonly] {\r\n    background-color: #ffffff;\r\n   \r\n}\r\n\r\n.btn{\r\n\tmargin-left: 3px;\r\n\tbackground-color: #3A539B;\r\n\tborder-color: #3A539B;\r\n}\r\n\r\ninput[disable], select[disable] {\r\n\tbackground-color: #ffffff;\r\n\t}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/edit-vendor/edit-vendor.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navigation-component ></app-navigation-component>\r\n<ng-template #content let-c=\"close\" let-d=\"dismiss\">\r\n<div class=\"modal-header\">\r\n  <h4 class=\"modal-title\">Success</h4>\r\n  <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d()\">\r\n    <span aria-hidden=\"true\">&times;</span>\r\n  </button>\r\n</div>\r\n<div class=\"modal-body\">\r\n  <p>The record has been successfully updated{{name}}!</p>\r\n</div>\r\n<div class=\"modal-footer\">\r\n  <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"c()\">Close</button>\r\n</div>\r\n</ng-template>\r\n<app-edit-navigation (editClick)=\"editClicked($event)\" (cancelClick)=\"cancelButton()\" (submitClick)=\"createVendor(editVendorForm.value)\"></app-edit-navigation>\r\n<div class=\"form-div\" >\r\n    <form  class=\"forms\" [formGroup]=\"editVendorForm\" (ngSubmit)=\"createVendor(editVendorForm.value)\">\r\n        <div class=\"page-description\">\r\n            <h3>Vendors</h3>\r\n            <hr class=\"after-heading\" />\r\n        </div>\r\n        <div class=\"tip\">\r\n            <p class=\"tip-text\">\r\n                <fa class=\"light-bulb\" [name]=\"'lightbulb-o'\"></fa>Tip:</p>\r\n        </div>\r\n        <div class=\"form-row\">\r\n            <div class=\"form-group col-12\">\r\n                <label for=\"vendorName\"><b>Vendor Name</b></label>\r\n                <div class=\"asterisk\">*</div>\r\n                <input type=\"text\" class=\"form-control\" id=\"vendorName\" placeholder=\"Vendor Name\" formControlName=\"name\">\r\n            </div>\r\n        </div>\r\n        <hr />\r\n        <!-- <h3>Contact Information</h3> -->\r\n        <div formGroupName=\"vendorContact\">\r\n            <p><b>Contact Person</b></p>\r\n\r\n            <div class=\"form-row\">\r\n                <div class=\"form-group col-md-6\">\r\n                    <label for=\"firstName\">First Name</label>\r\n                    <div class=\"asterisk\">*</div>\r\n                    <input type=\"text\" class=\"form-control\" id=\"firstName\" placeholder=\"First Name\" formControlName=\"firstName\">\r\n                </div>\r\n                <div class=\"form-group col-md-6\">\r\n                    <label for=\"lastName\">Last Name</label>\r\n                    <div class=\"asterisk\">*</div>\r\n                    <input type=\"text\" class=\"form-control\" id=\"lastName\" placeholder=\"Last Name\" formControlName=\"lastName\">\r\n                </div>\r\n            </div>\r\n            <div class=\"form-row\">\r\n                <div class=\"form-group col-md-6\">\r\n                    <label for=\"email\">Email ID</label>\r\n                    <div class=\"asterisk\">*</div>\r\n                    <input type=\"text\" class=\"form-control\"  id=\"email\"  title='Email Id (Format: @example.com)' placeholder=\"Enter your email\" formControlName=\"emailId\">\r\n                </div>\r\n                <div class=\"form-group col-md-6\">\r\n                    <label for=\"phone\">Phone Number</label>\r\n                    <div class=\"asterisk\">*</div>\r\n                    <input type=\"tel\" class=\"form-control\"  id=\"phonenum\"  pattern=\"^\\d{3}-\\d{3}-\\d{4}$\" required title='Phone Number (Format: 999-999-9999)' formControlName=\"phoneNumber\">\r\n                </div>\r\n            </div> \r\n        </div> \r\n        <hr />\r\n        <div formGroupName=\"vendorAddress\" >\r\n            <p><b>Address</b></p>\r\n            <div class=\"form-group\">\r\n                <label for=\"inputAddress\">Street Name</label>\r\n                <div class=\"asterisk\">*</div>\r\n                <input type=\"text\" class=\"form-control\" id=\"inputAddress\" placeholder=\"Street Name\" formControlName=\"streetName\">\r\n                <label for=\"city\">City</label>\r\n                <div class=\"asterisk\">*</div>\r\n                <input type=\"text\" class=\"form-control\" id=\"city\" placeholder=\"City\" formControlName=\"city\">\r\n            </div>\r\n            <div class=\"form-row\">\r\n                <div class=\"form-group col-md-6\">\r\n                    <label for=\"inputState\">State</label>\r\n                    <div class=\"asterisk\">*</div>\r\n                    <select id=\"inputState\" class=\"form-control\">\r\n            <option selected>Choose...</option>\r\n            <option value=\"AL\">AL</option>\r\n\t<option value=\"AK\">AK</option>\r\n\t<option value=\"AR\">AR</option>\t\r\n\t<option value=\"AZ\">AZ</option>\r\n\t<option value=\"CA\">CA</option>\r\n\t<option value=\"CO\">CO</option>\r\n\t<option value=\"CT\">CT</option>\r\n\t<option value=\"DC\">DC</option>\r\n\t<option value=\"DE\">DE</option>\r\n\t<option value=\"FL\">FL</option>\r\n\t<option value=\"GA\">GA</option>\r\n\t<option value=\"HI\">HI</option>\r\n\t<option value=\"IA\">IA</option>\t\r\n\t<option value=\"ID\">ID</option>\r\n\t<option value=\"IL\">IL</option>\r\n\t<option value=\"IN\">IN</option>\r\n\t<option value=\"KS\">KS</option>\r\n\t<option value=\"KY\">KY</option>\r\n\t<option value=\"LA\">LA</option>\r\n\t<option value=\"MA\">MA</option>\r\n\t<option value=\"MD\">MD</option>\r\n\t<option value=\"ME\">ME</option>\r\n\t<option value=\"MI\">MI</option>\r\n\t<option value=\"MN\">MN</option>\r\n\t<option value=\"MO\">MO</option>\t\r\n\t<option value=\"MS\">MS</option>\r\n\t<option value=\"MT\">MT</option>\r\n\t<option value=\"NC\">NC</option>\t\r\n\t<option value=\"NE\">NE</option>\r\n\t<option value=\"NH\">NH</option>\r\n\t<option value=\"NJ\">NJ</option>\r\n\t<option value=\"NM\">NM</option>\t\t\t\r\n\t<option value=\"NV\">NV</option>\r\n\t<option value=\"NY\">NY</option>\r\n\t<option value=\"ND\">ND</option>\r\n\t<option value=\"OH\">OH</option>\r\n\t<option value=\"OK\">OK</option>\r\n\t<option value=\"OR\">OR</option>\r\n\t<option value=\"PA\">PA</option>\r\n\t<option value=\"RI\">RI</option>\r\n\t<option value=\"SC\">SC</option>\r\n\t<option value=\"SD\">SD</option>\r\n\t<option value=\"TN\">TN</option>\r\n\t<option value=\"TX\">TX</option>\r\n\t<option value=\"UT\">UT</option>\r\n\t<option value=\"VT\">VT</option>\r\n\t<option value=\"VA\">VA</option>\r\n\t<option value=\"WA\">WA</option>\r\n\t<option value=\"WI\">WI</option>\t\r\n\t<option value=\"WV\">WV</option>\r\n\t<option value=\"WY\">WY</option>\r\n            \r\n            <option>...</option>\r\n          </select>\r\n                </div>\r\n                <div class=\"form-group col-md-6\">\r\n                    <label for=\"inputZip\">Zip Code</label>\r\n                    <div class=\"asterisk\">*</div>\r\n                    <input type=\"text\" class=\"form-control\"  pattern=\"[0-9]{5}\" title='Zip Code (Format: 00000)'  id=\"inputZip\" formControlName=\"zipcode\">\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"buttons\">\r\n          <button [disabled]=\"editVendorForm.invalid\" type=\"submit\" class=\"btn btn-primary\"  *ngIf=\"!editVendorForm.disabled\">Submit</button>\r\n            <button type=\"cancel\" class=\"btn btn-primary\"(click)=\"cancelButton()\" >Cancel</button>\r\n             \r\n         \r\n\r\n        </div>\r\n    </form>\r\n</div>\r\n"

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
exports.push([module.i, ".forms{\r\n    padding: 20px;\r\n    border-radius: 10px;\r\n    border: 1px solid transparent;\r\n    margin: 20px;\r\n    background-color: #EEEEEE;\r\n    overflow: hidden;\r\n}\r\n\r\n.page-description{\r\n    text-align: center;\r\n    /*padding: 2%;*/\r\n    margin-top: 0px;\r\n    margin-bottom: 10px;\r\n}\r\n\r\n@keyframes slideInFromCenter {\r\n  0% {\r\n    transform: scale(0,1);\r\n  }\r\n  100% {\r\n    transform: scale(1,1);\r\n  }\r\n}\r\n\r\n.after-heading{\r\n\twidth: 10%;\r\n\tmargin: auto;\r\n\tbackground-color: #3A539B;\r\n\tanimation: 1s ease-out 0s 1 slideInFromCenter;\r\n}\r\n\r\n/*.after-heading:hover{\r\n\ttransform: scale(1, 1);\r\n\ttransition: right 0.5s;\r\n}*/\r\n\r\n.tip{\r\n    width: 100%;\r\n}\r\n\r\n.tip-text{\r\n    background-color: #F8FFAE;\r\n    padding: 5px;\r\n    border-radius: 10px;\r\n    margin-left: 5px;\r\n    color:  #3A539B;\r\n}\r\n\r\n.light-bulb{\r\n    margin-right: 3px;\r\n    padding: 2px;\r\n    margin-left: 3px;\r\n    color:  #3A539B;\r\n}\r\n\r\n.buttons{\r\n\tfloat: right;\r\n}\r\n\r\n.asterisk{\r\n\tdisplay: inline;\r\n\tcolor: red;\r\n\tmargin-left: 2px;\r\n}\r\n\r\n.btn{\r\n\tmargin-left: 3px;\r\n\tbackground-color: #3A539B;\r\n\tborder-color: #3A539B;\r\n}\r\n\r\n/*hr{\r\n\tmargin: 30px -20px 20px;\r\n    border: 0;\r\n    border-top: 1px solid black;\r\n}*/", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/forms/forms.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"form-div\" >\r\n    <form  class=\"forms\" [formGroup]=\"editVendorForm\" (ngSubmit)=\"createVendor(editVendorForm.value)\">\r\n        <div class=\"page-description\">\r\n            <h3>Vendors</h3>\r\n            <hr class=\"after-heading\" />\r\n        </div>\r\n        <div class=\"tip\">\r\n            <p class=\"tip-text\">\r\n                <fa class=\"light-bulb\" [name]=\"'lightbulb-o'\"></fa>Tip:</p>\r\n        </div>\r\n        <div class=\"form-row\">\r\n            <div class=\"form-group col-12\">\r\n                <label for=\"vendorName\"><b>Vendor Name</b></label>\r\n                <div class=\"asterisk\">*</div>\r\n                <input type=\"text\" class=\"form-control\" id=\"vendorName\" placeholder=\"Vendor Name\" formControlName=\"name\">\r\n            </div>\r\n        </div>\r\n        <hr />\r\n        <!-- <h3>Contact Information</h3> -->\r\n        <div formGroupName=\"vendorContact\">\r\n            <p><b>Contact Person</b></p>\r\n\r\n            <div class=\"form-row\">\r\n                <div class=\"form-group col-md-6\">\r\n                    <label for=\"firstName\">First Name</label>\r\n                    <div class=\"asterisk\">*</div>\r\n                    <input type=\"text\" class=\"form-control\" id=\"firstName\" placeholder=\"First Name\" formControlName=\"firstName\">\r\n                </div>\r\n                <div class=\"form-group col-md-6\">\r\n                    <label for=\"lastName\">Last Name</label>\r\n                    <div class=\"asterisk\">*</div>\r\n                    <input type=\"text\" class=\"form-control\" id=\"lastName\" placeholder=\"Last Name\" formControlName=\"lastName\">\r\n                </div>\r\n            </div>\r\n            <div class=\"form-row\">\r\n                <div class=\"form-group col-md-6\">\r\n                    <label for=\"email\">Email ID</label>\r\n                    <div class=\"asterisk\">*</div>\r\n                    <input type=\"email\" class=\"form-control\"  id=\"email\"  title='Email Id (Format: @example.com)' placeholder=\"Email ID\" formControlName=\"emailId\">\r\n                </div>\r\n                <div class=\"form-group col-md-6\">\r\n                    <label for=\"phone\">Phone Number</label>\r\n                    <div class=\"asterisk\">*</div>\r\n                    <input type=\"text\" class=\"form-control\" id=\"phone\" placeholder=\"Phone Number\" pattern=\"^\\d{3}-\\d{3}-\\d{4}$\" required title='Phone Number (Format: 999-999-9999)' formControlName=\"phoneNumber\">\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <hr />\r\n        <div formGroupName=\"vendorAddress\" >\r\n            <p><b>Address</b></p>\r\n            <div class=\"form-group\">\r\n                <label for=\"inputAddress\">Street Name</label>\r\n                <div class=\"asterisk\">*</div>\r\n                <input type=\"text\" class=\"form-control\" id=\"inputAddress\" placeholder=\"Street Name\" formControlName=\"streetName\">\r\n                <label for=\"city\">City</label>\r\n                <div class=\"asterisk\">*</div>\r\n                <input type=\"text\" class=\"form-control\" id=\"city\" placeholder=\"City\" formControlName=\"city\">\r\n            </div>\r\n             <div class=\"form-row\">\r\n                <div class=\"form-group col-md-6\">\r\n                    <label for=\"inputState\">State</label>\r\n                    <div class=\"asterisk\">*</div>\r\n                    <select id=\"inputState\" class=\"form-control\">\r\n            <option selected>Choose...</option>\r\n            <option value=\"AL\">AL</option>\r\n\t<option value=\"AK\">AK</option>\r\n\t<option value=\"AR\">AR</option>\t\r\n\t<option value=\"AZ\">AZ</option>\r\n\t<option value=\"CA\">CA</option>\r\n\t<option value=\"CO\">CO</option>\r\n\t<option value=\"CT\">CT</option>\r\n\t<option value=\"DC\">DC</option>\r\n\t<option value=\"DE\">DE</option>\r\n\t<option value=\"FL\">FL</option>\r\n\t<option value=\"GA\">GA</option>\r\n\t<option value=\"HI\">HI</option>\r\n\t<option value=\"IA\">IA</option>\t\r\n\t<option value=\"ID\">ID</option>\r\n\t<option value=\"IL\">IL</option>\r\n\t<option value=\"IN\">IN</option>\r\n\t<option value=\"KS\">KS</option>\r\n\t<option value=\"KY\">KY</option>\r\n\t<option value=\"LA\">LA</option>\r\n\t<option value=\"MA\">MA</option>\r\n\t<option value=\"MD\">MD</option>\r\n\t<option value=\"ME\">ME</option>\r\n\t<option value=\"MI\">MI</option>\r\n\t<option value=\"MN\">MN</option>\r\n\t<option value=\"MO\">MO</option>\t\r\n\t<option value=\"MS\">MS</option>\r\n\t<option value=\"MT\">MT</option>\r\n\t<option value=\"NC\">NC</option>\t\r\n\t<option value=\"NE\">NE</option>\r\n\t<option value=\"NH\">NH</option>\r\n\t<option value=\"NJ\">NJ</option>\r\n\t<option value=\"NM\">NM</option>\t\t\t\r\n\t<option value=\"NV\">NV</option>\r\n\t<option value=\"NY\">NY</option>\r\n\t<option value=\"ND\">ND</option>\r\n\t<option value=\"OH\">OH</option>\r\n\t<option value=\"OK\">OK</option>\r\n\t<option value=\"OR\">OR</option>\r\n\t<option value=\"PA\">PA</option>\r\n\t<option value=\"RI\">RI</option>\r\n\t<option value=\"SC\">SC</option>\r\n\t<option value=\"SD\">SD</option>\r\n\t<option value=\"TN\">TN</option>\r\n\t<option value=\"TX\">TX</option>\r\n\t<option value=\"UT\">UT</option>\r\n\t<option value=\"VT\">VT</option>\r\n\t<option value=\"VA\">VA</option>\r\n\t<option value=\"WA\">WA</option>\r\n\t<option value=\"WI\">WI</option>\t\r\n\t<option value=\"WV\">WV</option>\r\n\t<option value=\"WY\">WY</option>\r\n            \r\n            <option>...</option>\r\n          </select>\r\n                </div>\r\n                <div class=\"form-group col-md-6\">\r\n                    <label for=\"inputZip\">Zip Code</label>\r\n                    <div class=\"asterisk\">*</div>\r\n                    <input type=\"text\" class=\"form-control\" pattern=\"[0-9]{5}\" title='Zip Code (Format: 00000)' id=\"inputZip\" formControlName=\"zipcode\">\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"buttons\">\r\n            <button type=\"cancel\" class=\"btn btn-primary\"(click)=\"cancelButton()\">Cancel</button>\r\n            <button   type=\"submit\" class=\"btn btn-primary\"  [disabled]=\"editVendorForm.invalid\">Submit</button>\r\n\r\n        </div>\r\n    </form>\r\n</div>\r\n"

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
exports.push([module.i, ".former{\r\n\r\n  padding: 20px;\r\n  border-radius: 10px;\r\n  border: 1px solid transparent;\r\n  margin: 20px;\r\n  background-color: #EEEEEE;\r\n}\r\n\r\n.asterisk{\r\n  display: inline;\r\n  color: red;\r\n  margin-left: 2px;\r\n}\r\n\r\n.btn {\r\n  float:right;\r\n  margin-top: 25px;\r\n  background-color: #3A539B;\r\n  border-color: #3A539B;\r\n  color: white;\r\n  padding: 10px 10px;\r\n  width: auto;\r\n  text-align: center;\r\n  text-decoration: none;\r\n  display: inline-block;\r\n  font-size: 16px;\r\n  margin-left: 3px;\r\n}\r\n\r\n\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/locality-component/locality-add-component/locality-add-component.component.html":
/***/ (function(module, exports) {

module.exports = "<form class=\"former\">\r\n   \r\n<img src=\"assets/img/Webp.net-resizeimage.gif\" usemap=\"#image-map\">\r\n<img src=\"assets/img/virginia-map.jpg\" width=460px height=570px usemap=\"#image-map\">\r\n<map name=\"image-map\">\r\n    <area target=\"\" alt=\"Lee\" title=\"Lee\" href=\"Lee\" coords=\"18,493,123,537\" shape=\"rect\">\r\n    <area target=\"\" alt=\"Scott\" title=\"Scott\" href=\"Scott\" coords=\"128,542,214,500\" shape=\"rect\">\r\n    <area target=\"\" alt=\"Washington\" title=\"Washington\" href=\"Washington\" coords=\"231,534,314,487\" shape=\"rect\">\r\n    <area target=\"\" alt=\"Smyth\" title=\"Smyth\" href=\"Smyth\" coords=\"317,472,366,520\" shape=\"rect\">\r\n    <area target=\"\" alt=\"grayson\" title=\"grayson\" href=\"Grayson\" coords=\"323,521,437,545\" shape=\"rect\">\r\n    <area target=\"\" alt=\"Caroll\" title=\"Caroll\" href=\"Caroll\" coords=\"443,493,492,543\" shape=\"rect\">\r\n    <area target=\"\" alt=\"Patrick\" title=\"Patrick\" href=\"Patrick\" coords=\"502,551,568,497\" shape=\"rect\">\r\n    <area target=\"\" alt=\"Henry\" title=\"Henry\" href=\"Henry\" coords=\"575,513,617,551\" shape=\"rect\">\r\n    <area target=\"\" alt=\"PittsIvania\" title=\"PittsIvania\" href=\"Pittsivania\" coords=\"634,539,716,456\" shape=\"rect\">\r\n    <area target=\"\" alt=\"Halifax\" title=\"Halifax\" href=\"Halifax\" coords=\"719,550,776,467\" shape=\"rect\">\r\n    <area target=\"\" alt=\"Macklenburg\" title=\"Macklenburg\" href=\"Macklenburg\" coords=\"787,555,878,495\" shape=\"rect\">\r\n    <area target=\"\" alt=\"Brunswick\" title=\"Brunswick\" href=\"Brunswick\" coords=\"889,472,942,538\" shape=\"rect\">\r\n    <area target=\"\" alt=\"Greenville\" title=\"Greenville\" href=\"Greensville\" coords=\"947,497,982,549\" shape=\"rect\">\r\n    <area target=\"\" alt=\"SouthHampton\" title=\"SouthHampton\" href=\"Southhampton\" coords=\"993,550,1059,490\" shape=\"rect\">\r\n    <area target=\"\" alt=\"Wise\" title=\"Wise\" href=\"Wise\" coords=\"105,445,181,489\" shape=\"rect\">\r\n    <area target=\"\" alt=\"Dickerson\" title=\"Dickerson\" href=\"Dickerson\" coords=\"183,415,232,460\" shape=\"rect\">\r\n    <area target=\"\" alt=\"Bucharan\" title=\"Bucharan\" href=\"Bucharan\" coords=\"233,367,298,438\" shape=\"rect\">\r\n    <area target=\"\" alt=\"Tazwell\" title=\"Tazwell\" href=\"Tazwell\" coords=\"290,418,367,459\" shape=\"rect\">\r\n    <area target=\"\" alt=\"Bland\" title=\"Bland\" href=\"Bland\" coords=\"366,418,432,454\" shape=\"rect\">\r\n    <area target=\"\" alt=\"Russell\" title=\"Russell\" href=\"Russell\" coords=\"227,486,293,458\" shape=\"rect\">\r\n    <area target=\"\" alt=\"Wythe\" title=\"Wythe\" href=\"Wythe\" coords=\"373,502,436,462\" shape=\"rect\">\r\n    <area target=\"\" alt=\"Glles\" title=\"Glles\" href=\"Glles\" coords=\"435,429,497,378\" shape=\"rect\">\r\n    <area target=\"\" alt=\"Pulaski\" title=\"Pulaski\" href=\"Pulaski\" coords=\"444,436,491,486\" shape=\"rect\">\r\n    <area target=\"\" alt=\"Montgomery\" title=\"Montgomery\" href=\"Montgomery\" coords=\"497,458,533,403\" shape=\"rect\">\r\n    <area target=\"\" alt=\"Floyd\" title=\"Floyd\" href=\"Floyd\" coords=\"553,463,496,494\" shape=\"rect\">\r\n    <area target=\"\" alt=\"Craig\" title=\"Craig\" href=\"Craig\" coords=\"505,400,570,358\" shape=\"rect\">\r\n    <area target=\"\" alt=\"Franklin\" title=\"Franklin\" href=\"Franklin\" coords=\"565,454,629,498\" shape=\"rect\">\r\n    <area target=\"\" alt=\"Renoeke\" title=\"Renoeke\" href=\"Renoeke\" coords=\"537,418,592,448\" shape=\"rect\">\r\n    <area target=\"\" alt=\"Bedford\" title=\"Bedford\" href=\"Bedford\" coords=\"612,455,687,366\" shape=\"rect\">\r\n    <area target=\"\" alt=\"campbell\" title=\"campbell\" href=\"Campbell\" coords=\"689,393,755,453\" shape=\"rect\">\r\n    <area target=\"\" alt=\"Charlotte\" title=\"Charlotte\" href=\"Charlotte\" coords=\"760,433,818,473\" shape=\"rect\">\r\n    <area target=\"\" alt=\"Prince Edward\" title=\"Prince Edward\" href=\"Prince Edward\" coords=\"801,405,856,439\" shape=\"rect\">\r\n    <area target=\"\" alt=\"Botetourt\" title=\"Botetourt\" href=\"Botetourt\" coords=\"583,389,634,335\" shape=\"rect\">\r\n    <area target=\"\" alt=\"Amherst\" title=\"Amherst\" href=\"Amherst\" coords=\"680,376,741,332\" shape=\"rect\">\r\n    <area target=\"\" alt=\"Bukingham\" title=\"Bukingham\" href=\"Bukingham\" coords=\"787,388,836,330\" shape=\"rect\">\r\n    <area target=\"\" alt=\"Appomatox\" title=\"Appomatox\" href=\"Appomatox\" coords=\"743,366,789,421\" shape=\"rect\">\r\n    <area target=\"\" alt=\"Nelson\" title=\"Nelson\" href=\"Nelson\" coords=\"713,330,778,299\" shape=\"rect\">\r\n    <area target=\"\" alt=\"Lunenburg\" title=\"Lunenburg\" href=\"Lunenburg\" coords=\"823,454,879,492\" shape=\"rect\">\r\n    <area target=\"\" alt=\"Dimwiddle\" title=\"Dimwiddle\" href=\"Dimwiddle\" coords=\"917,426,991,473\" shape=\"rect\">\r\n    <area target=\"\" alt=\"Sussex\" title=\"Sussex\" href=\"Sussex\" coords=\"980,486,1059,458\" shape=\"rect\">\r\n    <area target=\"\" alt=\"prince george\" title=\"prince george\" href=\"prince george\" coords=\"995,416,1046,451\" shape=\"rect\">\r\n    <area target=\"\" alt=\"Surry\" title=\"Surry\" href=\"Surry\" coords=\"1058,425,1096,462\" shape=\"rect\">\r\n    <area target=\"\" alt=\"Isle of wight\" title=\"Isle of wight\" href=\"Isle of wight\" coords=\"1069,468,1113,513\" shape=\"rect\">\r\n    <area target=\"\" alt=\"Alleghany\" title=\"Alleghany\" href=\"Alleghany\" coords=\"515,300,575,347\" shape=\"rect\">\r\n    <area target=\"\" alt=\"Bath\" title=\"Bath\" href=\"Bath\" coords=\"592,236,646,288\" shape=\"rect\">\r\n    <area target=\"\" alt=\"Rockbridge\" title=\"Rockbridge\" href=\"Rockbridge\" coords=\"633,285,695,343\" shape=\"rect\">\r\n    <area target=\"\" alt=\"Highland\" title=\"Highland\" href=\"Highland\" coords=\"611,231,675,185\" shape=\"rect\">\r\n    <area target=\"\" alt=\"Augusta\" title=\"Augusta\" href=\"Augusta\" coords=\"679,281,764,211\" shape=\"rect\">\r\n    <area target=\"\" alt=\"Rockingham\" title=\"Rockingham\" href=\"Rockingham\" coords=\"690,135,790,207\" shape=\"rect\">\r\n    <area target=\"\" alt=\"Greene\" title=\"Greene\" href=\"Greene\" coords=\"791,212,838,241\" shape=\"rect\">\r\n    <area target=\"\" alt=\"Albermarle\" title=\"Albermarle\" href=\"Albermarle\" coords=\"775,295,847,247\" shape=\"rect\">\r\n    <area target=\"\" alt=\"Ruyama\" title=\"Ruyama\" href=\"Ruyama\" coords=\"823,328,872,298\" shape=\"rect\">\r\n    <area target=\"\" alt=\"Goochland\" title=\"Goochland\" href=\"Goochland\" coords=\"876,308,945,347\" shape=\"rect\">\r\n    <area target=\"\" alt=\"Cumberland\" title=\"Cumberland\" href=\"Cumberland\" coords=\"840,398,868,336\" shape=\"rect\">\r\n    <area target=\"\" alt=\"Powhatan\" title=\"Powhatan\" href=\"Powhatan\" coords=\"875,350,937,378\" shape=\"rect\">\r\n    <area target=\"\" alt=\"Amelia\" title=\"Amelia\" href=\"Amelia\" coords=\"872,386,939,422\" shape=\"rect\">\r\n    <area target=\"\" alt=\"Chesterfield\" title=\"Chesterfield\" href=\"Chesterfield\" coords=\"943,373,984,424\" shape=\"rect\">\r\n    <area target=\"\" alt=\"Shenandoah\" title=\"Shenandoah\" href=\"Shenandoah\" coords=\"760,132,836,85\" shape=\"rect\">\r\n    <area target=\"\" alt=\"Page\" title=\"Page\" href=\"Page\" coords=\"794,191,835,136\" shape=\"rect\">\r\n    <area target=\"\" alt=\"Madison\" title=\"Madison\" href=\"Madison\" coords=\"840,169,871,223\" shape=\"rect\">\r\n    <area target=\"\" alt=\"Orange\" title=\"Orange\" href=\"Orange\" coords=\"853,248,918,226\" shape=\"rect\">\r\n    <area target=\"\" alt=\"Louisa\" title=\"Louisa\" href=\"Louisa\" coords=\"857,259,934,303\" shape=\"rect\">\r\n    <area target=\"\" alt=\"Fredrick\" title=\"Fredrick\" href=\"Fredrick\" coords=\"796,74,858,14\" shape=\"rect\">\r\n    <area target=\"\" alt=\"Warren\" title=\"Warren\" href=\"Warren\" coords=\"841,117,881,83\" shape=\"rect\">\r\n    <area target=\"\" alt=\"Rappahannock\" title=\"Rappahannock\" href=\"Rappahannock\" coords=\"849,164,887,127\" shape=\"rect\">\r\n    <area target=\"\" alt=\"Culpeper\" title=\"Culpeper\" href=\"Culpeper\" coords=\"871,168,926,203\" shape=\"rect\">\r\n    <area target=\"\" alt=\"Clarke\" title=\"Clarke\" href=\"Clarke\" coords=\"882,79,912,48\" shape=\"rect\">\r\n    <area target=\"\" alt=\"Fauquier\" title=\"Fauquier\" href=\"Fauquier\" coords=\"891,90,953,164\" shape=\"rect\">\r\n    <area target=\"\" alt=\"Spotsylvania\" title=\"Spotsylvania\" href=\"Spotsylvania\" coords=\"925,255,968,222\" shape=\"rect\">\r\n    <area target=\"\" alt=\"Caroline\" title=\"Caroline\" href=\"Caroline\" coords=\"974,301,1028,245\" shape=\"rect\">\r\n    <area target=\"\" alt=\"Hanover\" title=\"Hanover\" href=\"Hanover\" coords=\"948,301,995,329\" shape=\"rect\">\r\n    <area target=\"\" alt=\"Henrico\" title=\"Henrico\" href=\"Henrico\" coords=\"945,331,994,355\" shape=\"rect\">\r\n    <area target=\"\" alt=\"New Kent\" title=\"New Kent\" href=\"New Kent\" coords=\"1085,386,1022,355,1311,543\" shape=\"rect\">\r\n    <area target=\"\" alt=\"Charles City\" title=\"Charles City\" href=\"Charles City\" coords=\"1018,388,1068,413\" shape=\"rect\">\r\n    <area target=\"\" alt=\"King William\" title=\"King William\" href=\"King William\" coords=\"1006,310,1042,347\" shape=\"rect\">\r\n    <area target=\"\" alt=\"King and Queen\" title=\"King and Queen\" href=\"King and Queen\" coords=\"1078,351,1046,320\" shape=\"rect\">\r\n    <area target=\"\" alt=\"Loudoun\" title=\"Loudoun\" href=\"Loudoun\" coords=\"926,88,978,38\" shape=\"rect\">\r\n    <area target=\"\" alt=\"Prince William\" title=\"Prince William\" href=\"Prince William\" coords=\"959,134,1002,171\" shape=\"rect\">\r\n    <area target=\"\" alt=\"Fairfax\" title=\"Fairfax\" href=\"Fairfax\" coords=\"976,94,1041,130\" shape=\"rect\">\r\n    <area target=\"\" alt=\"Stafford\" title=\"Stafford\" href=\"Stafford\" coords=\"955,176,1000,211\" shape=\"rect\">\r\n    <area target=\"\" alt=\"King George\" title=\"King George\" href=\"King George\" coords=\"1008,212,1052,234\" shape=\"rect\">\r\n    <area target=\"\" alt=\"Essex\" title=\"Essex\" href=\"Essex\" coords=\"1042,265,1070,307\" shape=\"rect\">\r\n    <area target=\"\" alt=\"Montross\" title=\"Montross\" href=\"Montross\" coords=\"1053,241,1114,261\" shape=\"rect\">\r\n    <area target=\"\" alt=\"Henrico\" title=\"Henrico\" href=\"Henrico\" coords=\"1076,272,1116,302\" shape=\"rect\">\r\n    <area target=\"\" alt=\"Lancaster\" title=\"Lancaster\" href=\"Lancaster\" coords=\"1112,340,1150,312\" shape=\"rect\">\r\n    <area target=\"\" alt=\"Northumberland\" title=\"Northumberland\" href=\"Northumberland\" coords=\"1121,277,1166,307\" shape=\"rect\">\r\n    <area target=\"\" alt=\"Saluda\" title=\"Saluda\" href=\"Saluda\" coords=\"1144,362,1097,342\" shape=\"rect\">\r\n    <area target=\"\" alt=\"Gloucester\" title=\"Gloucester\" href=\"Gloucester\" coords=\"1106,368,1136,407\" shape=\"rect\">\r\n    <area target=\"\" alt=\"Yorktown\" title=\"Yorktown\" href=\"Yorktown\" coords=\"1105,412,1142,441\" shape=\"rect\">\r\n    <area target=\"\" alt=\"Accomack\" title=\"Accomack\" href=\"Accomack\" coords=\"1294,272,1235,359\" shape=\"rect\">\r\n    <area target=\"\" alt=\"Mathews\" title=\"Mathews\" href=\"Mathews\" coords=\"1140,368,1162,393\" shape=\"rect\">\r\n    <area target=\"\" alt=\"Northampton\" title=\"Northampton\" href=\"Northampton\" coords=\"1237,367,1204,437\" shape=\"rect\">\r\n    <area target=\"\" alt=\"Nottoway\" title=\"Nottoway\" href=\"Nottoway\" coords=\"862,426,894,451\" shape=\"rect\">\r\n    <area target=\"\" alt=\"Suffolk\" title=\"Suffolk\" href=\"Suffolk\" coords=\"1072,547,1130,516\" shape=\"rect\">\r\n    <area target=\"\" alt=\"\" title=\"\" href=\"\" coords=\"\" shape=\"rect\">\r\n    <area target=\"\" alt=\"Portsmouth\" title=\"Portsmouth\" href=\"Portsmouth\" coords=\"1148,493,1166,506\" shape=\"rect\">\r\n    <area target=\"\" alt=\"Chesapeake\" title=\"Chesapeake\" href=\"Chesapeake\" coords=\"1137,510,1185,551\" shape=\"rect\">\r\n    <area target=\"\" alt=\"Norfolk\" title=\"Norfolk\" href=\"Norfolk\" coords=\"1159,475,1177,490\" shape=\"rect\">\r\n    <area target=\"\" alt=\"Virginia Beach\" title=\"Virginia Beach\" href=\"Virginia Beach\" coords=\"1189,483,1213,544\" shape=\"rect\">\r\n    <area target=\"\" alt=\"Richmond\" title=\"Richmond\" href=\"Richmond\" coords=\"958,357,992,369\" shape=\"rect\">\r\n    <area target=\"\" alt=\"Lynchburg\" title=\"Lynchburg\" href=\"Lynchburg\" coords=\"692,379,724,390\" shape=\"rect\">\r\n    <area target=\"\" alt=\"Roanoke\" title=\"Roanoke\" href=\"Roanoke\" coords=\"565,405,601,415\" shape=\"rect\">\r\n    <area target=\"\" alt=\"Covington\" title=\"Covington\" href=\"Covington\" coords=\"585,310,578,329\" shape=\"rect\">\r\n    <area target=\"\" alt=\"Clifton Forge\" title=\"Clifton Forge\" href=\"Clifton Forge\" coords=\"617,301,594,317\" shape=\"rect\">\r\n    <area target=\"\" alt=\"Danville\" title=\"Danville\" href=\"Danville\" coords=\"643,541,686,553\" shape=\"rect\">\r\n    <area target=\"\" alt=\"Bristol\" title=\"Bristol\" href=\"Bristol\" coords=\"228,545,264,537\" shape=\"rect\">\r\n    <area target=\"\" alt=\"Hampton\" title=\"Hampton\" href=\"Hampton\" coords=\"1123,445,1171,462\" shape=\"rect\">\r\n</map>\r\n\r\n</form>\r\n<form class=\"former\">\r\n <div class=\"page-description\">\r\n       \r\n    </div>\r\n   \r\n    <div class=\"form-row\">\r\n        <div class=\"form-group col-md-6\">\r\n\r\n            <label class=\"label\" for=\"modelSolution\"><b>Please Select Your Locality </b></label>\r\n            <div class=\"asterisk\">*</div>\r\n            <select class=\"form-control\" id=\"modelSolution\" (change)=\"selectLocal($event.target.value)\">\r\n          <option selected>Choose...</option>\r\n          <option  *ngFor=\"let county of counties\">\r\n          {{ county.county_name}}\r\n          </option> \r\n        </select>\r\n        </div>\r\n\r\n    </div>\r\n\r\n</form>\r\n\r\n\r\n\r\n\r\n<!--<div class=\"form-div\" *ngIf = \"showForm == 'locality2'\">\r\n    <form class=\"former\">\r\n      locality2\r\n\r\n      <div class=\"form-row\">\r\n        <div class=\"form-group col-md-6\">\r\n          <label for=\"inputState\">Country Name</label><div class=\"asterisk\">*</div>\r\n          <select id=\"inputState\" class=\"form-control\">\r\n            <option selected>Choose...</option>\r\n            <option>...</option>\r\n          </select>\r\n        </div>\r\n        <div class=\"form-group col-md-6\">\r\n          <label for=\"lastName\">City</label>\r\n          <input type=\"text\" class=\"form-control\" id=\"lastName\" value=\"Value\">\r\n        </div>\r\n      </div>\r\n      <div class=\"form-row\">\r\n        <div class=\"form-group col-md-6\">\r\n          <label for=\"email\">Email ID</label><div class=\"asterisk\">*</div>\r\n          <input type=\"email\" class=\"form-control\" id=\"email\" value=\"Value\">\r\n        </div>\r\n        <div class=\"form-group col-md-6\">\r\n          <label for=\"phone\">Phone Number</label><div class=\"asterisk\">*</div>\r\n          <input type=\"text\" class=\"form-control\" id=\"phone\" value=\"Value\">\r\n        </div>\r\n      </div>\r\n\r\n      <p><b>Address</b></p>\r\n      <div class=\"form-group\">\r\n        <label for=\"inputAddress\">Street Name</label><div class=\"asterisk\">*</div>\r\n        <input type=\"text\" class=\"form-control\" id=\"inputAddress\" value=\"Value\" >\r\n        <label for=\"city\">City</label>\r\n        <input type=\"text\" class=\"form-control\" id=\"city\" value=\"Value\">\r\n      </div>\r\n      <div class=\"form-row\">\r\n        <div class=\"form-group col-md-6\">\r\n          <label for=\"inputState\">State</label><div class=\"asterisk\">*</div>\r\n          <select id=\"inputState\" class=\"form-control\">\r\n            <option selected>Choose...</option>\r\n            <option>...</option>\r\n          </select>\r\n        </div>\r\n        <div class=\"form-group col-md-6\">\r\n          <label for=\"inputZip\">Zip Code</label><div class=\"asterisk\">*</div>\r\n          <input type=\"text\" class=\"form-control\" id=\"inputZip\" valu=\"00000\">\r\n\r\n\r\n          <div class=\"buttons\">\r\n            <button type=\"submit\" class=\"btn btn-primary\">Submit</button>\r\n            <button type=\"cancel\" class=\"btn btn-primary\">Cancel</button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </div>\r\n\r\n\r\n\r\n  <div class=\"form-div\" *ngIf = \"showForm == 'locality3'\">\r\n    <form class=\"former\">\r\n      locality3\r\n\r\n      <div class=\"form-row\">\r\n        <div class=\"form-group col-md-6\">\r\n          <label for=\"inputState\">Country Name</label>\r\n          <select id=\"inputState\" class=\"form-control\">\r\n            <option selected>Choose...</option>\r\n            <option>...</option>\r\n          </select>\r\n        </div>\r\n\r\n\r\n\r\n\r\n\r\n        <div class=\"form-group col-md-6\">\r\n          <label for=\"lastName\">City</label>\r\n          <input type=\"text\" class=\"form-control\" id=\"lastName\" value=\"Value\">\r\n        </div>\r\n      </div>\r\n      <div class=\"form-row\">\r\n        <div class=\"form-group col-md-6\">\r\n          <label for=\"email\">Email ID</label>\r\n          <input type=\"email\" class=\"form-control\" id=\"email\" value=\"Value\">\r\n        </div>\r\n        <div class=\"form-group col-md-6\">\r\n          <label for=\"phone\">Phone Number</label>\r\n          <input type=\"text\" class=\"form-control\" id=\"phone\" value=\"Value\">\r\n        </div>\r\n      </div>\r\n\r\n      <p><b>Address</b></p>\r\n      <div class=\"form-group\">\r\n        <label for=\"inputAddress\">Street Name</label>\r\n        <input type=\"text\" class=\"form-control\" id=\"inputAddress\" value=\"Value\" >\r\n        <label for=\"city\">City</label>\r\n        <input type=\"text\" class=\"form-control\" id=\"city\" value=\"Value\">\r\n      </div>\r\n      <div class=\"form-row\">\r\n        <div class=\"form-group col-md-6\">\r\n          <label for=\"inputState\">State</label>\r\n          <select id=\"inputState\" class=\"form-control\">\r\n            <option selected>Choose...</option>\r\n            <option>...</option>\r\n          </select>\r\n        </div>\r\n        <div class=\"form-group col-md-6\">\r\n          <label for=\"inputZip\">Zip Code</label>\r\n          <input type=\"text\" class=\"form-control\" id=\"inputZip\" valu=\"00000\">\r\n\r\n\r\n          <div class=\"buttons\">\r\n            <button type=\"submit\" class=\"btn btn-primary\">Submit</button>\r\n            <button type=\"cancel\" class=\"btn btn-primary\">Cancel</button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </div>-->"

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

module.exports = "<app-navigation-component></app-navigation-component>\r\n<app-option-list></app-option-list>\r\n\r\n<router-outlet></router-outlet>"

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
exports.push([module.i, "\r\n.pull-right {\r\n    float: right!important;\r\n     font-size: 20px;\r\n    margin-right: 20px;\r\n    color: #3A539B;\r\n  \r\n}\r\n#middle div.panel-heading {\r\n    color: #1E252D !important;\r\n    height: 51px;\r\n}\r\n.panel-default>.panel-heading {\r\n    padding: 15px 15px;\r\n    background: #fff;\r\n}\r\n\r\ni.fa {\r\n    text-decoration: none !important;\r\n    padding: 5px 4px;\r\n}\r\n\r\n.fa {\r\n    display: inline-block;\r\n    font: normal normal normal 14px/1 FontAwesome;\r\n    font-size: inherit;\r\n    text-rendering: auto;\r\n    -webkit-font-smoothing: antialiased;\r\n    -moz-osx-font-smoothing: grayscale;\r\n}\r\n\r\n.htag{\r\n\tmargin-top:30px;\r\n}\r\n\r\n.modal-header{\r\n\tbackground-color:#3A539B !important;\r\n\tcolor:white;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nth{\r\n    font-weight: bold;\r\n    color: black;\r\n   \r\n    text-align: left;\r\n}\r\n\r\n\r\n\r\n#searchtable table, th, td {\r\n    border: 1px solid black;\r\n    border-collapse: collapse;\r\n}\r\n\r\n\r\n.table>tbody>tr>td, .table>tbody>tr>th, .table>tfoot>tr>td, .table>tfoot>tr>th, .table>thead>tr>td, .table>thead>tr>th {\r\n    padding: 8px;\r\n    line-height: 1.42857143;\r\n    vertical-align: top;\r\n  \r\n    color: black;\r\n}\r\n\r\n\r\n\r\n.table>caption+thead>tr:first-child>td, .table>caption+thead>tr:first-child>th, .table>colgroup+thead>tr:first-child>td, .table>colgroup+thead>tr:first-child>th, .table>thead:first-child>tr:first-child>td, .table>thead:first-child>tr:first-child>th {\r\n    border-top: 0;\r\n}\r\n\r\n\r\n\r\ntable {\r\n    border: 1px solid black;\r\n    width: 100%;\r\n    max-width: 100%;\r\n    margin-bottom: 20px;\r\n    \r\n}\r\ntr{\r\n\tbackground-color:#cecfd5;\r\n}\r\ntbody tr:nth-child(even) {\r\n  background-color:white;\r\n}\r\n\r\n\r\n.forms{\r\n  padding: 20px;\r\n  border-radius: 10px;\r\n  border: 1px solid transparent;\r\n  margin: 20px;\r\n  background-color: #EEEEEE;\r\n}\r\n.clear-right {\r\n\tclear:right;\r\n\toverflow: hidden;\r\n}\r\n.table-striped tbody tr:nth-of-type(odd) {\r\n    background-color: #EEEEEE !important;\r\n}\r\n\r\ntbody tr:nth-of-type(odd) {\r\n    background-color: #EEEEEE !important;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/locality-component/locality-tab/locality-audit/audit-details/audit-details.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"form-div\">\r\n\t<form class=\"former\">\r\n\t\t<div class=\"form-row\">\r\n\t\t\t<div class=\"form-group col-md-6\">\r\n\r\n\t\t\t\t<label for=\"inputState\">Definitive Source</label>\r\n\t\t\t\t<div class=\"asterisk\">*</div>\r\n\t\t\t\t<select id=\"modelSolution\" class=\"form-control\">\r\n\t\t\t\t\t<option selected></option>\r\n\t\t\t\t\t<option>---Select---</option>\r\n\t\t\t\t\t<option>VITA</option>\r\n\t\t\t\t</select>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"form-group col-md-6\">\r\n\t\t\t\t<label for=\"lastName\">Type/Policy</label>\r\n\t\t\t\t<div class=\"asterisk\">*</div>\r\n\t\t\t\t<select id=\"modelSolution\" class=\"form-control\"\r\n\t\t\t\t(change)=\"selectBox($event.target.value)\">\r\n\t\t\t\t\t<option selected></option>\r\n\t\t\t\t\t<option></option>\r\n\t\t\t\t\t<option>IT Information Security Standard(SEC501-09.1)</option>\r\n\t\t\t\t</select>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"form-group col-md-6\">\r\n\t\t\t\t<label for=\"lastName\">Audit type</label>\r\n\t\t\t\t<div class=\"asterisk\">*</div>\r\n\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"lastName\" value=\"Value\">\r\n\t\t\t</div>\r\n\r\n\t\t\t<div class=\"form-group col-md-6\">\r\n\t\t\t\t<label for=\"lastName\">Audit Date</label>\r\n\t\t\t\t<div class=\"asterisk\">*</div>\r\n\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"lastName\" value=\"Value\">\r\n\t\t\t</div>\r\n\r\n\r\n\r\n\r\n\r\n\t\t\t<div class=\"form-group col-md-6\">\r\n\t\t\t\t<label for=\"email\">Next Date</label>\r\n\t\t\t\t<div class=\"asterisk\">*</div>\r\n\t\t\t\t<input type=\"email\" class=\"form-control\" id=\"email\" value=\"Value\">\r\n\t\t\t</div>\r\n\t\t\t<div class=\"form-group col-md-6\">\r\n\r\n\t\t\t\t<label for=\"inputState\">Overall Status</label>\r\n\t\t\t\t<div class=\"asterisk\">*</div>\r\n\t\t\t\t<select id=\"modelSolution\" class=\"form-control\">\r\n\t\t\t\t\t<option selected></option>\r\n\t\t\t\t\t<option>Open</option>\r\n\t\t\t\t\t<option>Suspended</option>\r\n\t\t\t\t\t<option>Close</option>\r\n\t\t\t\t</select>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\r\n\r\n\t</form>\r\n\t\r\n\t\r\n\t\r\n\t\r\n\t<ng-template #content let-c=\"close\" let-d=\"dismiss\">\r\n<div class=\"modal-header\">\r\n  <h4 class=\"modal-title\">Policy File</h4>\r\n \r\n  <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d()\">\r\n    <span aria-hidden=\"true\">&times;</span>\r\n  </button>\r\n</div>\r\n<div class=\"modal-body\">\r\n  <div>\r\n        <div class=\"col-sm-5 col-md-5 col-lg-5\">\r\n\t\t\t\t\t\t\t<label class=\"input\"> <input type=\"file\" file-model=\"attachment\" data-btn-text=\"Select a File\"  accept=\".pdf,.doc,.docx\">\r\n\r\n\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\r\n        </div>\r\n</div>\r\n<div class=\"modal-footer\">\r\n\r\n  <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"c()\">Close</button>\r\n   <button type=\"savebtn\" class=\"btn btn-outline-dark\">Compare</button>\r\n</div>\r\n</ng-template>\r\n\t\r\n\t<div class=\"show\" *ngIf=\"showSection\">\r\n\t<form class=\"former\">\r\n\t<div class=\"form-row\">\r\n\t\t\t<p><b>POLICIES</b></p>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"panel-heading\">\r\n\r\n\t\t\t<span class=\"title elipsis pull-right\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<a title=\"Compare policies\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-exchange\" aria-hidden=\"true\" style=\"font-size: 24px;\"  (click)=\"open(content)\"></i></a>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<a title=\"Send notifications\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa  fa-envelope-o\" aria-hidden=\"true\" style=\"font-size: 24px;\"></i></a>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<a title=\"Download compared policies\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa  fa-download\" aria-hidden=\"true\" style=\"font-size: 24px;\"></i></a>\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t</div>\r\n\t\t<!-- <hr class=htag/> -->\r\n\t\t<table class=\"table table-striped table-hover table-bordere\">\r\n\t\t<thead>\r\n\t\t\t<tr>\r\n\r\n\t\t\t\t<th scope=\"col\">Control Number and Description</th>\r\n\t\t\t\t<th scope=\"col\">Policy Name</th>\r\n\t\t\t\t<th scope=\"col\">Source Value</th>\r\n\t\t\t\t<th scope=\"col\">Status</th>\r\n\t\t\t</tr>\r\n\t\t</thead>\r\n\t\t</table>\r\n\t\t\r\n\t\t<nav aria-label=\"...\">\r\n  <ul class=\"pagination\">\r\n    <li class=\"page-item disabled\">\r\n      <a class=\"page-link\" tabindex=\"-1\">Previous</a>\r\n    </li>\r\n    <li class=\"page-item\"><a class=\"page-link\">1</a></li>\r\n    <li class=\"page-item active\">\r\n      <a class=\"page-link\" >2 <span class=\"sr-only\">(current)</span></a>\r\n    </li>\r\n    <li class=\"page-item\"><a class=\"page-link\">3</a></li>\r\n    <li class=\"page-item\">\r\n      <a class=\"page-link\">Next</a>\r\n    </li>\r\n  </ul>\r\n</nav>\r\n\t\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\t\t\r\n\t\r\n\t</form>\r\n\t\r\n\t\t\t\t\t\t\t\t\t\t\t\r\n\t\t</div>\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\t\t\r\n\t\t"

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
exports.push([module.i, ".pull-right {\r\n    float: right!important;\r\n     font-size: 20px;\r\n    margin-right: 20px;\r\n   \r\n    color: #3A539B;\r\n  \r\n}\r\n#middle div.panel-heading {\r\n    color: #1E252D !important;\r\n    height: 51px;\r\n    \r\n}\r\n\r\n.panel-heading{\r\n\t\r\n}\r\n.panel-default>.panel-heading {\r\n    padding: 15px 15px;\r\n    background: #fff;\r\n}\r\n\r\ni.fa {\r\n    text-decoration: none !important;\r\n    padding: 5px 4px;\r\n}\r\n\r\n.fa {\r\n    display: inline-block;\r\n    font: normal normal normal 14px/1 FontAwesome;\r\n    font-size: inherit;\r\n    text-rendering: auto;\r\n    -webkit-font-smoothing: antialiased;\r\n    -moz-osx-font-smoothing: grayscale;\r\n}\r\n.htag{\r\n\tmargin-top:50px;\r\n}", ""]);

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
exports.push([module.i, "i.fa {\r\n    text-decoration: none !important;\r\n    padding: 5px 4px;\r\n}\r\n\r\n\r\n.fa {\r\n    display: inline-block;\r\n    font: normal normal normal 14px/1 FontAwesome;\r\n    font-size: inherit;\r\n    text-rendering: auto;\r\n    -webkit-font-smoothing: antialiased;\r\n    -moz-osx-font-smoothing: grayscale;\r\n}", ""]);

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
exports.push([module.i, ".form{\r\n  padding: 20px;\r\n  border-radius: 10px;\r\n  border: 1px solid transparent;\r\n  margin: 20px;\r\n  background-color: #EEEEEE;\r\n}\r\ni.fa {\r\n    text-decoration: none !important;\r\n    padding: 5px 4px;\r\n}\r\n.fa {\r\n    display: inline-block;\r\n    font: normal normal normal 14px/1 FontAwesome;\r\n    font-size: inherit;\r\n    text-rendering: auto;\r\n    -webkit-font-smoothing: antialiased;\r\n    -moz-osx-font-smoothing: grayscale;\r\n}\r\na {\r\n    color: #337ab7;\r\n    text-decoration: none;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/locality-component/locality-tab/locality-business/locality-business.component.html":
/***/ (function(module, exports) {

module.exports = "<form class=\"form\">\r\n<div class=\"form-row\">\r\n             <div class=\"form-group col-md-6\">\r\n                <label for=\"lastName\">Acronym</label>\r\n                 <div class=\"asterisk\">*</div>\r\n               <input type=\"text\" class=\"form-control\" id=\"lastName\" value=\"Value\">\r\n            </div>\r\n             <div class=\"form-group col-md-6\">\r\n                <label for=\"lastName\">Last updated by</label>\r\n                 <input type=\"text\" class=\"form-control\" id=\"lastName\" value=\"Value\">\r\n            </div>\r\n             </div>\r\n             \r\n             <div class=\"form-row\">\r\n             <div class=\"form-group col-md-6\">\r\n                <label for=\"lastName\">Name</label>\r\n                 <div class=\"asterisk\">*</div>\r\n               <input type=\"text\" class=\"form-control\" id=\"lastName\" value=\"Value\">\r\n            </div>\r\n             <div class=\"form-group col-md-6\">\r\n                <label for=\"lastName\">Updated at</label>\r\n               \r\n               <input type=\"text\" class=\"form-control\" id=\"lastName\" value=\"Value\">\r\n            </div>\r\n             </div>\r\n             <hr/>\r\n              \r\n        <p><b>Resources</b></p>\r\n        <div class=\"form-row\">\r\n            <div class=\"form-group col-md-6\">\r\n\r\n                <label for=\"inputState\">Business Owner</label>\r\n                \r\n               <select id=\"modelSolution\" class=\"form-control\">\r\n            <option selected></option>\r\n            <option>---Select---</option>\r\n              <option>Add new name</option>\r\n          </select>\r\n            </div>\r\n            <div class=\"form-group col-md-6\">\r\n                <label for=\"lastName\">Project Manager</label>\r\n                 <select id=\"modelSolution\" class=\"form-control\">\r\n            <option selected></option>\r\n            <option>---Select---</option>\r\n              <option>Add new name</option>\r\n          </select>\r\n            </div>\r\n        </div>\r\n\r\n\r\n\r\n        <div class=\"form-row\">\r\n             <div class=\"form-group col-md-6\">\r\n                <label for=\"lastName\">Data Owner</label>\r\n                <select id=\"modelSolution\" class=\"form-control\">\r\n            <option selected></option>\r\n            <option>---Select---</option>\r\n              <option>Add new name</option>\r\n          </select>\r\n            </div>\r\n            <div class=\"form-group col-md-6\">\r\n                <label for=\"email\">Information Security Officer</label>\r\n                  <select id=\"modelSolution\" class=\"form-control\">\r\n            <option selected></option>\r\n            <option>---Select---</option>\r\n              <option>Add new name</option>\r\n          </select>   \r\n            </div>\r\n        </div>\r\n          <div class=\"form-row\">\r\n             <div class=\"form-group col-md-6\">\r\n                <label for=\"lastName\">Hosting System Site Owner</label>\r\n                <select id=\"modelSolution\" class=\"form-control\">\r\n            <option selected></option>\r\n            <option>---Select---</option>\r\n              <option>Add new name</option>\r\n          </select>\r\n            </div>\r\n            </div>\r\n    \r\n             \r\n            <p><b>Description</b></p>\r\n             <div></div>\r\n             <hr/>\r\n              <p><b>Fiscal and Business Vision</b></p>\r\n             <div class=\"form-row\">\r\n             <div class=\"form-group col-md-6\">\r\n                <label for=\"lastName\">Fiscal Year</label>\r\n                 <input type=\"text\" class=\"form-control\" id=\"vendorName\" placeholder=\"Year\" formControlName=\"name\">\r\n                 </div>\r\n                 </div>\r\n                 <p><b>Business Owner Vision</b></p>\r\n                 <div class=\"form-row\">\r\n             <div class=\"form-group col-md-6\">\r\n                <label for=\"lastName\">Fiscal Year</label>\r\n                 <input type=\"text\" class=\"form-control\" id=\"vendorName\" placeholder=\"Year\" formControlName=\"name\">\r\n                 </div>\r\n                 </div>\r\n                  <p><b>Business Owner Vision</b></p>\r\n                  <div class=\"form-row\">\r\n             <div class=\"form-group col-md-6\">\r\n                <label for=\"lastName\">Fiscal Year</label>\r\n                 <input type=\"text\" class=\"form-control\" id=\"vendorName\" placeholder=\"Year\" formControlName=\"name\">\r\n                 </div>\r\n                 </div>\r\n                 <hr/>\r\n                  <p><b>Key Decisions</b></p>\r\n                  <div></div>\r\n                  <hr/>\r\n                   <p><b>Level of Effort</b></p>\r\n                   <div></div>\r\n                   <div class=\"input-group\"> \r\n\t\t\t\t\t\t\t\t\t        <span class=\"input-group-addon\">$</span>\r\n\t\t\t\t\t\t\t\t\t        <input type=\"number\">\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n                   <hr/>\r\n                   <p><b>Documents</b></p>\r\n                   <a ng-click=\"openAttachDocument('business')\" title=\"Upload document\"><i class=\"fa fa-upload\"></i> </a>\r\n             \r\n             \r\n             \r\n             \r\n             \r\n</form>"

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
exports.push([module.i, "\r\n.forms{\r\n    padding: 20px;\r\n    border-radius: 10px;\r\n    border: 1px solid transparent;\r\n    margin: 20px;\r\n    background-color: #EEEEEE;\r\n    overflow: hidden;\r\n}\r\n\r\n\r\n.clear-right {\r\n\tclear:right;\r\n\toverflow: hidden;\r\n}\r\n\r\ntable {\r\n    border: 1px solid black;\r\n    width: 100%;\r\n    max-width: 100%;\r\n    margin-bottom: 20px;\r\n    \r\n}\r\n\r\ntbody tr:nth-of-type(odd) {\r\n    background-color: #EEEEEE !important;\r\n}\r\ntbody tr:nth-of-type(even) {\r\n    background-color: #ffffff !important;\r\n}\r\n\r\n\r\n.page-description{\r\n    text-align: center;\r\n    /*padding: 2%;*/\r\n    margin-top: 0px;\r\n    margin-bottom: 10px;\r\n}\r\n\r\n@keyframes slideInFromCenter {\r\n  0% {\r\n    transform: scale(0,1);\r\n  }\r\n  100% {\r\n    transform: scale(1,1);\r\n  }\r\n}\r\n\r\n.after-heading{\r\n\twidth: 10%;\r\n\tmargin: auto;\r\n\tbackground-color: #3A539B;\r\n\tanimation: 1s ease-out 0s 1 slideInFromCenter;\r\n}\r\n\r\n/*.after-heading:hover{\r\n\ttransform: scale(1, 1);\r\n\ttransition: right 0.5s;\r\n}*/\r\n\r\n.tip{\r\n    width: 100%;\r\n}\r\n\r\n.tip-text{\r\n    background-color: #F8FFAE;\r\n    padding: 5px;\r\n    border-radius: 10px;\r\n    margin-left: 5px;\r\n    color:  #3A539B;\r\n}\r\n\r\n.light-bulb{\r\n    margin-right: 3px;\r\n    padding: 2px;\r\n    margin-left: 3px;\r\n    color:  #3A539B;\r\n}\r\n\r\ntable {\r\n    border: 1px solid black;\r\n    width: 100%;\r\n    max-width: 100%;\r\n    margin-bottom: 20px;\r\n    \r\n}\r\n\r\n\r\n\r\ntr{\r\n\tbackground-color:#cecfd5;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\nth{\r\n    font-weight: bold;\r\n    color: black;\r\n   \r\n    text-align: left;\r\n}\r\n\r\n\r\n\r\n#searchtable table, th, td {\r\n    border: 1px solid black;\r\n    border-collapse: collapse;\r\n}\r\n\r\n\r\n.table>tbody>tr>td, .table>tbody>tr>th, .table>tfoot>tr>td, .table>tfoot>tr>th, .table>thead>tr>td, .table>thead>tr>th {\r\n    padding: 8px;\r\n    line-height: 1.42857143;\r\n    vertical-align: top;\r\n  \r\n    color: black;\r\n}\r\n\r\n\r\n\r\n.table>caption+thead>tr:first-child>td, .table>caption+thead>tr:first-child>th, .table>colgroup+thead>tr:first-child>td, .table>colgroup+thead>tr:first-child>th, .table>thead:first-child>tr:first-child>td, .table>thead:first-child>tr:first-child>th {\r\n    border-top: 0;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n.asterisk{\r\n\tdisplay: inline;\r\n\tcolor: red;\r\n\tmargin-left: 2px;\r\n}\r\n\r\n.btn{\r\n\tmargin-left: 3px;\r\n\tbackground-color: #3A539B;\r\n\tborder-color: #3A539B;\r\n}\r\n\r\n/*hr{\r\n\tmargin: 30px -20px 20px;\r\n    border: 0;\r\n    border-top: 1px solid black;\r\n}*/", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/locality-component/locality-tab/locality-details/locality-details.component.html":
/***/ (function(module, exports) {

module.exports = "<form class=\"former clear-right\" (ngSubmit)=\"createSolution()\" enctype=\"multipart/form-data\">\r\n\r\n\t\r\n\r\n\t\t<div class=\"tip\">\r\n\t\t\t<p class=\"tip-text\">\r\n\t\t\t\t<fa class=\"light-bulb\" [name]=\"'lightbulb-o'\"></fa>\r\n\t\t\t\tTip:\r\n\t\t\t</p>\r\n\t\t</div>\r\n\t\t<p>\r\n\t\t\t<b>General Information</b>\r\n\t\t</p>\r\n\t\t<div class=\"form-row\">\r\n\t\t\t<div class=\"form-group col-md-6\">\r\n\r\n\t\t\t\t<label for=\"inputState\">Last Updated by</label>\r\n\t\t\t\t<div class=\"asterisk\">*</div>\r\n\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"lastName\" value=\"enter here\" >\r\n\t\t\t</div>\r\n\t\t\t<div class=\"form-group col-md-6\">\r\n\t\t\t\t<label for=\"lastName\">Updated at</label>\r\n\t\t\t\t<div class=\"asterisk\">*</div>\r\n\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"lastName\" value=\"enter here\">\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"form-row\">\r\n\t\t\t<div class=\"form-group col-md-6\">\r\n\r\n\t\t\t\t<label for=\"inputState\">Locality Name</label>\r\n\t\t\t\t<div class=\"asterisk\">*</div>\r\n\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"lastName\" value=\"enter here\">\r\n\t\t\t</div>\r\n\t\t\t<div class=\"form-group col-md-6\">\r\n\r\n\t\t\t\t<label for=\"inputState\">Locality Code</label>\r\n\t\t\t\t<div class=\"asterisk\">*</div>\r\n\t\t\t\t<input type=\"text\" class=\"form-control\" name=\"localityCd\" [(ngModel)] = \"locality.localityCd\">\r\n\t\t\t</div>\r\n\r\n\t\t</div>\r\n\t\t<div class=\"form-row\">\r\n\r\n\t\t\t<div class=\"form-group col-md-6\">\r\n\t\t\t\t<label for=\"lastName\">FIPS Code</label> <input type=\"text\"\r\n\t\t\t\t\tclass=\"form-control\" name=\"fipsCd\" [(ngModel)] = \"locality.fipsCd\">\r\n\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\r\n\t\t<p>\r\n\t\t\t<b>Contact Information</b>\r\n\t\t</p>\r\n\t\t<div class=\"form-row\">\r\n\t\t\t<div class=\"form-group col-md-6\">\r\n\r\n\t\t\t\t<label for=\"inputState\">First Name</label>\r\n\t\t\t\t<div class=\"asterisk\">*</div>\r\n\t\t\t\t<input type=\"text\" class=\"form-control\" name=\"firstName\" [(ngModel)] = \"locality.firstName\">\r\n\t\t\t</div>\r\n\t\t\t<div class=\"form-group col-md-6\">\r\n\t\t\t\t<label for=\"lastName\">Last Name</label>\r\n\t\t\t\t<div class=\"asterisk\">*</div>\r\n\t\t\t\t<input type=\"text\" class=\"form-control\" name=\"lastName\" [(ngModel)] = \"locality.lastName\">\r\n\t\t\t</div>\r\n\t\t</div>\r\n\r\n\r\n\r\n\t\t<div class=\"form-row\">\r\n\t\t\t<div class=\"form-group col-md-6\">\r\n\t\t\t\t<label for=\"lastName\">Email Id</label>\r\n\t\t\t\t<div class=\"asterisk\">*</div>\r\n\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"lastName\" value=\"enter here\">\r\n\t\t\t</div>\r\n\t\t\t<div class=\"form-group col-md-6\">\r\n\r\n\t\t\t\t<label for=\"email\">Phone No</label>\r\n\t\t\t\t<div class=\"asterisk\">*</div>\r\n\t\t\t\t<input type=\"email\" class=\"form-control\" id=\"email\" value=\"enter here\">\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"form-row\">\r\n\t\t\t<div class=\"form-group col-md-6\">\r\n\t\t\t\t<label for=\"lastName\">Website Address</label>\r\n\t\t\t\t<div class=\"asterisk\">*</div>\r\n\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"lastName\" value=\"enter here\">\r\n\t\t\t</div>\r\n\t\t\t<div class=\"form-group col-md-6\">\r\n\t\t\t\t<label for=\"email\">Veris Id</label>\r\n\t\t\t\t<div class=\"asterisk\">*</div>\r\n\t\t\t\t<input type=\"email\" class=\"form-control\" id=\"email\" value=\"enter here\">\r\n\t\t\t</div>\r\n\r\n\t\t</div>\r\n\t\t<hr />\r\n\t\t<p>\r\n\t\t\t<b>Other Information</b>\r\n\t\t</p>\r\n\t\t<div class=\"form-row\">\r\n\t\t\t<div class=\"form-group col-md-6\">\r\n\t\t\t\t<label for=\"lastName\">Central Absentee Perceived(CAP)</label>\r\n\t\t\t\t<div class=\"asterisk\">*</div>\r\n\t\t\t\t<input type=\"radio\" name=\"yes\" value=\"value\">Yes<br>\r\n\t\t\t\t&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input\r\n\t\t\t\t\ttype=\"radio\" name=\"no\" value=\"male\"> No\r\n\t\t\t</div>\r\n\t\t\t<div class=\"form-group col-md-6\">\r\n\t\t\t\t<label for=\"email\">Bail out</label>\r\n\t\t\t\t<div class=\"asterisk\">*</div>\r\n\t\t\t\t<input type=\"radio\" name=\"yes\" value=\"value\">Yes<br>\r\n\t\t\t\t&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input\r\n\t\t\t\t\ttype=\"radio\" name=\"no\" value=\"male\"> No\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"form-row\">\r\n\t\t\t<div class=\"form-group col-md-6\">\r\n\t\t\t\t<label for=\"lastName\">Automate COMET/Penality</label>\r\n\t\t\t\t<div class=\"asterisk\">*</div>\r\n\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"lastName\" value=\"enter here\">\r\n\t\t\t</div>\r\n\r\n\t\t</div>\r\n\t\t<hr />\r\n\r\n\t\t<div class=\"form-row\">\r\n\r\n\t\t\t<div class=\"form-group col-md-6\">\r\n\r\n\t\t\t\t<p>\r\n\t\t\t\t\t<b>Hours of operation</b>\r\n\t\t\t\t</p>\r\n\t\t\t\t\r\n\t\t\t\t <table class=\"table table-striped table-hover table-bordere\">\r\n        <thead>\r\n           <tr>\r\n\t\t\t\t\t\t\t<th scope=\"col\">Day</th>\r\n\t\t\t\t\t\t\t<th scope=\"col\">Time</th>\r\n\t\t\t\t\t\t</tr>\r\n        </thead>\r\n       <tbody>\r\n\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t<th>Monday</th>\r\n\t\t\t\t\t\t\t<td><label for=\"appt-time\">Time</label> <input type=\"time\"\r\n\t\t\t\t\t\t\t\tid=\"appt-time\" name=\"appt-time\" min=\"9:00\" max=\"18:00\" required\r\n\t\t\t\t\t\t\t\t(input)=\"time = $event.target.value\" /> To <label\r\n\t\t\t\t\t\t\t\tfor=\"appt-time\"></label> <input type=\"time\" id=\"appt-time\"\r\n\t\t\t\t\t\t\t\tname=\"appt-time\" min=\"9:00\" max=\"18:00\" required\r\n\t\t\t\t\t\t\t\t(input)=\"time = $event.target.value\" /></td>\r\n\r\n\r\n\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t<th>Tuesday</th>\r\n\t\t\t\t\t\t\t<td><label for=\"appt-time\">Time</label> <input type=\"time\"\r\n\t\t\t\t\t\t\t\tid=\"appt-time\" name=\"appt-time\" min=\"9:00\" max=\"18:00\" required\r\n\t\t\t\t\t\t\t\t(input)=\"time = $event.target.value\" /> To <label\r\n\t\t\t\t\t\t\t\tfor=\"appt-time\"></label> <input type=\"time\" id=\"appt-time\"\r\n\t\t\t\t\t\t\t\tname=\"appt-time\" min=\"9:00\" max=\"18:00\" required\r\n\t\t\t\t\t\t\t\t(input)=\"time = $event.target.value\" /></td>\r\n\r\n\r\n\r\n\r\n\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t<th>Wednesday</th>\r\n\t\t\t\t\t\t\t<td><label for=\"appt-time\">Time</label> <input type=\"time\"\r\n\t\t\t\t\t\t\t\tid=\"appt-time\" name=\"appt-time\" min=\"9:00\" max=\"18:00\" required\r\n\t\t\t\t\t\t\t\t(input)=\"time = $event.target.value\" /> To <label\r\n\t\t\t\t\t\t\t\tfor=\"appt-time\"></label> <input type=\"time\" id=\"appt-time\"\r\n\t\t\t\t\t\t\t\tname=\"appt-time\" min=\"9:00\" max=\"18:00\" required\r\n\t\t\t\t\t\t\t\t(input)=\"time = $event.target.value\" /></td>\r\n\r\n\r\n\r\n\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t<th>Thursday</th>\r\n\t\t\t\t\t\t\t<td><label for=\"appt-time\">Time</label> <input type=\"time\"\r\n\t\t\t\t\t\t\t\tid=\"appt-time\" name=\"appt-time\" min=\"9:00\" max=\"18:00\" required\r\n\t\t\t\t\t\t\t\t(input)=\"time = $event.target.value\" /> To <label\r\n\t\t\t\t\t\t\t\tfor=\"appt-time\"></label> <input type=\"time\" id=\"appt-time\"\r\n\t\t\t\t\t\t\t\tname=\"appt-time\" min=\"9:00\" max=\"18:00\" required\r\n\t\t\t\t\t\t\t\t(input)=\"time = $event.target.value\" /></td>\r\n\r\n\r\n\r\n\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t<th>Friday</th>\r\n\t\t\t\t\t\t\t<td><label for=\"appt-time\">Time</label> <input type=\"time\"\r\n\t\t\t\t\t\t\t\tid=\"appt-time\" name=\"appt-time\" min=\"9:00\" max=\"18:00\" required\r\n\t\t\t\t\t\t\t\t(input)=\"time = $event.target.value\" /> To <label\r\n\t\t\t\t\t\t\t\tfor=\"appt-time\"></label> <input type=\"time\" id=\"appt-time\"\r\n\t\t\t\t\t\t\t\tname=\"appt-time\" min=\"9:00\" max=\"18:00\" required\r\n\t\t\t\t\t\t\t\t(input)=\"time = $event.target.value\" /></td>\r\n\r\n\r\n\r\n\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t<th>Saturday</th>\r\n\t\t\t\t\t\t\t<td><label for=\"appt-time\">Time</label> <input type=\"time\"\r\n\t\t\t\t\t\t\t\tid=\"appt-time\" name=\"appt-time\" min=\"9:00\" max=\"18:00\" required\r\n\t\t\t\t\t\t\t\t(input)=\"time = $event.target.value\" /> To <label\r\n\t\t\t\t\t\t\t\tfor=\"appt-time\"></label> <input type=\"time\" id=\"appt-time\"\r\n\t\t\t\t\t\t\t\tname=\"appt-time\" min=\"9:00\" max=\"18:00\" required\r\n\t\t\t\t\t\t\t\t(input)=\"time = $event.target.value\" /></td>\r\n\r\n\r\n\r\n\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t<th>Sunday</th>\r\n\t\t\t\t\t\t\t<td><label for=\"appt-time\">Time</label> <input type=\"time\"\r\n\t\t\t\t\t\t\t\tid=\"appt-time\" name=\"appt-time\" min=\"9:00\" max=\"18:00\" required\r\n\t\t\t\t\t\t\t\t(input)=\"time = $event.target.value\" /> To <label\r\n\t\t\t\t\t\t\t\tfor=\"appt-time\"></label> <input type=\"time\" id=\"appt-time\"\r\n\t\t\t\t\t\t\t\tname=\"appt-time\" min=\"9:00\" max=\"18:00\" required\r\n\t\t\t\t\t\t\t\t(input)=\"time = $event.target.value\" /></td>\r\n\r\n\r\n\r\n\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t</tbody>\r\n    </table>\r\n\t\t\t\t<!-- <button type=\"submit\" class=\"btn btn-primary\" (click)=\"setTime()\">Submit</button> -->\r\n\t\t\t</div>\r\n\t\t</div>\r\n\r\n\r\n\t\t<hr />\r\n\t\t<p>\r\n\t\t\t<b>Region</b>\r\n\t\t</p>\r\n\t\t<div class=\"form-row\">\r\n\r\n\t\t\t<div class=\"form-group col-md-6\">\r\n\r\n\r\n\t\t\t\t<input type=\"radio\" name=\"yes\" value=\"value\">VEBA region<br>\r\n\t\t\t\t<input type=\"radio\" name=\"no\" value=\"male\">VRAV region\r\n\t\t\t</div>\r\n\r\n\r\n\r\n\t\t</div>\r\n\t\t<hr />\r\n\t\t<p>\r\n\t\t\t<b>PollBook</b>\r\n\t\t</p>\r\n\t\t<div class=\"form-row\">\r\n\t\t\t<div class=\"form-group col-md-6\">\r\n\t\t\t\t<label for=\"lastName\">Paper PollBook</label>\r\n\t\t\t\t<div class=\"asterisk\">*</div>\r\n\t\t\t\t<input type=\"radio\" name=\"yes\" value=\"value\">Yes<br>\r\n\t\t\t\t&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input\r\n\t\t\t\t\ttype=\"radio\" name=\"no\" value=\"male\"> No\r\n\t\t\t</div>\r\n\t\t\t<div class=\"form-group col-md-6\">\r\n\t\t\t\t<label for=\"email\">Electronic PollBook</label>\r\n\t\t\t\t<div class=\"asterisk\">*</div>\r\n\t\t\t\t<input type=\"radio\" name=\"yes\" value=\"value\">Yes<br>\r\n\t\t\t\t&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input\r\n\t\t\t\t\ttype=\"radio\" name=\"no\" value=\"male\"> No\r\n\t\t\t</div>\r\n</div>\r\n\r\n\t\t\t<hr />\r\n\t\t\r\n         <p><b>Notes</b></p>\r\n         <textarea name=\"\" id=\"\" rows=\"10\" class=\"form-control\"></textarea>\r\n         <div class=\"buttons\">\r\n      \r\n        \t<button type=\"submit\" class=\"submit btn btn-primary\" >Submit</button>\r\n        \t<button type=\"cancel\" class=\"cancel btn btn-primary\">Cancel</button>\r\n        </div>\r\n\t\t\r\n\r\n\r\n\t</form>"

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
exports.push([module.i, ".elipsis {\r\n    overflow: hidden;\r\n    text-overflow: ellipsis;\r\n    white-space: nowrap;\r\n}\r\ni.fa {\r\n    text-decoration: none !important;\r\n    padding: 5px 4px;\r\n}\r\n.fa {\r\n    display: inline-block;\r\n    font: normal normal normal 14px/1 FontAwesome;\r\n    font-size: inherit;\r\n    text-rendering: auto;\r\n    -webkit-font-smoothing: antialiased;\r\n    -moz-osx-font-smoothing: grayscale;\r\n}\r\n.pull-right {\r\n    float: right!important;\r\n}\r\n#middle div.panel-heading {\r\n    color: #1E252D !important;\r\n    height: 51px;\r\n}\r\n.panel-default>.panel-heading {\r\n    padding: 15px 15px;\r\n    background: #fff;\r\n}\r\n\r\n.former{\r\n\tpadding:5px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/locality-component/locality-tab/locality-legal/locality-legal.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"form-div\">\r\n    <form class=\"former\">\r\n      \r\n        <div class=\"form-row\">\r\n            <div class=\"form-group col-md-6\">\r\n\r\n                <label for=\"inputState\" >Acronym</label>\r\n                <div class=\"asterisk\">*</div>\r\n               <input type=\"text\" class=\"form-control\" id=\"lastName\" value=\"enter here\">\r\n            </div>\r\n            <div class=\"form-group col-md-6\">\r\n                <label for=\"lastName\">Last updated by</label>\r\n                \r\n                <input type=\"text\" class=\"form-control\" id=\"lastName\" value=\"enter here\">\r\n            </div>\r\n        </div>\r\n\r\n\r\n\r\n        <div class=\"form-row\">\r\n             <div class=\"form-group col-md-6\">\r\n                <label for=\"lastName\">Name</label>\r\n                <div class=\"asterisk\">*</div>\r\n                <input type=\"text\" class=\"form-control\" id=\"lastName\" value=\"enter here\">\r\n            </div>\r\n            <div class=\"form-group col-md-6\">\r\n                <label for=\"email\">Updated at</label>\r\n                    <input type=\"email\" class=\"form-control\" id=\"email\" value=\"enter here\">\r\n            </div>\r\n        </div>\r\n        <hr/>\r\n        <p>\r\n\t\t<b>Legal Documents</b>\r\n\t</p>\r\n        <div class=\"form-row\">\r\n            <div class=\"form-group col-md-6\">\r\n               <label for=\"inputState\">Name</label>\r\n                \r\n               <input type=\"text\" class=\"form-control\" id=\"lastName\" value=\"enter here\">\r\n            </div>\r\n            </div>\r\n        <div class=\"form-row\">\r\n            <div class=\"form-group col-md-6\">\r\n               <label for=\"inputState\">Signed</label>\r\n              \r\n               <select id=\"modelSolution\" class=\"form-control\">\r\n            <option selected>Yes</option>\r\n            <option>No</option>\r\n          </select>\r\n            </div>\r\n            </div>\r\n        <div class=\"form-row\">\r\n            <div class=\"form-group col-md-6\">\r\n               <label for=\"inputState\">Date of Receipt</label>\r\n               \r\n               <input type=\"text\" class=\"form-control\" id=\"lastName\" value=\"mm/dd/yyyy\">\r\n            </div>\r\n            </div>\r\n            <div class=\"form-row\">\r\n            <div class=\"form-group col-md-6\">\r\n               <label for=\"inputState\">Recertification Date</label>\r\n              \r\n               <input type=\"text\" class=\"form-control\" id=\"lastName\" value=\"mm/dd/yyyy\">\r\n            </div>\r\n            </div>\r\n         <div class=\"panel-heading\">\r\n\r\n\t\t\t<span class=\" title elipsis pull-right\"> <a ng-click=\"saveMOU()\" ng-hide=\"MOUForm.$invalid\" title=\"Save MOU\" class=\"ng-hide\"> <i class=\"fa fa-floppy-o\" aria-hidden=\"true\" style=\"font-size: 24px;\"></i></a>\r\n\t\t\t</span>\r\n\t\t\t\r\n\t\t\t<span class=\" title elipsis pull-right\">\r\n\t\t\t\t\t\t      \t\r\n\t\t\t\t\t\t\t\t\t<a data-ng-click=\"showMOUList()\" title=\"Go back to audit section.\">\r\n\t\t\t\t\t\t\t\t\t<i class=\"fa fa-arrow-circle-o-left\" aria-hidden=\"true\" style=\"font-size: 24px;\"></i> </a>\r\n\t\t\t\t\t\t      \t</span>\r\n\t\t\t\t\t\t      \t\r\n\t\t</div>\r\n        <hr class=\"former\"/>\r\n        <p><b>MOU Attachments</b></p>\r\n        <div>\r\n        <div class=\"col-sm-5 col-md-5 col-lg-5\">\r\n\t\t\t\t\t\t\t<label class=\"input\"> <input type=\"file\" file-model=\"attachment\" data-btn-text=\"Select a File\"  accept=\".pdf,.doc,.docx\">\r\n\r\n\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\r\n        </div>\r\n       \r\n        </form>\r\n        </div>\r\n       \r\n        "

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
exports.push([module.i, ".plus{\r\n\tfloat:right;\r\n    font-size: 20px;\r\n    margin-right: 20px;\r\n    color: #3A539B;\r\n}\r\n.modal-header{\r\n\tbackground-color:#3A539B !important;\r\n\tcolor:white;\r\n}\r\n\r\n\r\ni.fa {\r\n    text-decoration: none !important;\r\n    padding: 5px 4px;\r\n}\r\n.fa {\r\n    display: inline-block;\r\n    font: normal normal normal 14px/1 FontAwesome;\r\n    font-size: inherit;\r\n    text-rendering: auto;\r\n   }\r\n   \r\n   .form-control:disabled, .form-control[readonly] {\r\n    background-color: #ffffff;\r\n   \r\n}\r\n\r\nth{\r\n    font-weight: bold;\r\n    color: black;\r\n   \r\n    text-align: left;\r\n}\r\n\r\n\r\n\r\n#searchtable table, th, td {\r\n    border: 1px solid black;\r\n    border-collapse: collapse;\r\n}\r\n\r\n\r\n.table>tbody>tr>td, .table>tbody>tr>th, .table>tfoot>tr>td, .table>tfoot>tr>th, .table>thead>tr>td, .table>thead>tr>th {\r\n    padding: 8px;\r\n    line-height: 1.42857143;\r\n    vertical-align: top;\r\n  \r\n    color: black;\r\n}\r\n\r\n\r\n\r\n.table>caption+thead>tr:first-child>td, .table>caption+thead>tr:first-child>th, .table>colgroup+thead>tr:first-child>td, .table>colgroup+thead>tr:first-child>th, .table>thead:first-child>tr:first-child>td, .table>thead:first-child>tr:first-child>th {\r\n    border-top: 0;\r\n}\r\n\r\n\r\n\r\ntable {\r\n    border: 1px solid black;\r\n    width: 100%;\r\n    max-width: 100%;\r\n    margin-bottom: 20px;\r\n    \r\n}\r\ntr{\r\n\tbackground-color:#cecfd5;\r\n}\r\ntbody tr:nth-child(even) {\r\n  background-color:white;\r\n}\r\n\r\n\r\n.forms{\r\n  padding: 20px;\r\n  border-radius: 10px;\r\n  border: 1px solid transparent;\r\n  margin: 20px;\r\n  background-color: #EEEEEE;\r\n}\r\n.clear-right {\r\n\tclear:right;\r\n\toverflow: hidden;\r\n}\r\n.table-striped tbody tr:nth-of-type(odd) {\r\n    background-color: #EEEEEE !important;\r\n}\r\n\r\ntbody tr:nth-of-type(odd) {\r\n    background-color: #EEEEEE !important;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/locality-component/locality-tab/locality-solutions/locality-solutions.component.html":
/***/ (function(module, exports) {

module.exports = "<ng-template #content let-c=\"close\" let-d=\"dismiss\">\r\n<div class=\"modal-header\">\r\n\t<h4 class=\"modal-title\">Enter Device Information</h4>\r\n\t<button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d()\">\r\n\t\t<span aria-hidden=\"true\">&times;</span>\r\n\t</button>\r\n</div>\r\n<div class=\"modal-body\">\r\n\t<div class=\"save-edit\" style=\"float: right\">\r\n\t\t<fa class=\"edit-icon icons\" data-toggle=\"tooltip\"\r\n\t\t\tdata-placement=\"right\" title=\"Save\" data-animation=\"true\"\r\n\t\t\tdata-delay=\"0\" [name]=\"'edit'\" (click)=\"editClick()\"></fa>\r\n\t</div>\r\n\t<form class=form [formGroup]=\"modalForm\">\r\n\t\t<div class=\"form-row\">\r\n\t\t\t<div class=\"form-group col-md-6\">\r\n\t\t\t\t<label for=\"email\">Model Number</label>\r\n\r\n\t\t\t\t<div class=\"asterisk\">*</div>\r\n\t\t\t\t<input type=\"email\" class=\"form-control\" id=\"name\"\r\n\t\t\t\t\tplaceholder=\"Equipment Model Number\" formControlName=\"model\">\r\n\r\n\t\t\t</div>\r\n\t\t\t<div class=\"form-group col-md-6\">\r\n\t\t\t\t<label for=\"phone\">Serial Number</label>\r\n\t\t\t\t<div class=\"asterisk\">*</div>\r\n\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"city\"\r\n\t\t\t\t\tplaceholder=\"Equipment Serial Number\" formControlName=\"serial\">\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<p>\r\n\t\t\t<b>Physical Address</b>\r\n\t\t</p>\r\n\t\t<div class=\"form-row\">\r\n\t\t\t<div class=\"form-group col-md-6\">\r\n\t\t\t\t<label for=\"email\">Street Name</label>\r\n\t\t\t\t<div class=\"asterisk\">*</div>\r\n\t\t\t\t<input type=\"email\" class=\"form-control\" id=\"email\"\r\n\t\t\t\t\tplaceholder=\"Enter here\">\r\n\t\t\t</div>\r\n\t\t\t<div class=\"form-group col-md-6\">\r\n\t\t\t\t<label for=\"phone\">City</label>\r\n\t\t\t\t<div class=\"asterisk\">*</div>\r\n\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"phone\"\r\n\t\t\t\t\tplaceholder=\"Enter here\">\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"form-row\">\r\n\t\t\t<div class=\"form-group col-md-6\">\r\n\t\t\t\t<label for=\"inputState\">State</label>\r\n\t\t\t\t<div class=\"asterisk\">*</div>\r\n\t\t\t\t<select id=\"inputState\" class=\"form-control\">\r\n\t\t\t\t\t<option selected>Choose...</option>\r\n\t\t\t\t\t<option value=\"AL\">AL</option>\r\n\t\t\t\t\t<option value=\"AK\">AK</option>\r\n\t\t\t\t\t<option value=\"AR\">AR</option>\r\n\t\t\t\t\t<option value=\"AZ\">AZ</option>\r\n\t\t\t\t\t<option value=\"CA\">CA</option>\r\n\t\t\t\t\t<option value=\"CO\">CO</option>\r\n\t\t\t\t\t<option value=\"CT\">CT</option>\r\n\t\t\t\t\t<option value=\"DC\">DC</option>\r\n\t\t\t\t\t<option value=\"DE\">DE</option>\r\n\t\t\t\t\t<option value=\"FL\">FL</option>\r\n\t\t\t\t\t<option value=\"GA\">GA</option>\r\n\t\t\t\t\t<option value=\"HI\">HI</option>\r\n\t\t\t\t\t<option value=\"IA\">IA</option>\r\n\t\t\t\t\t<option value=\"ID\">ID</option>\r\n\t\t\t\t\t<option value=\"IL\">IL</option>\r\n\t\t\t\t\t<option value=\"IN\">IN</option>\r\n\t\t\t\t\t<option value=\"KS\">KS</option>\r\n\t\t\t\t\t<option value=\"KY\">KY</option>\r\n\t\t\t\t\t<option value=\"LA\">LA</option>\r\n\t\t\t\t\t<option value=\"MA\">MA</option>\r\n\t\t\t\t\t<option value=\"MD\">MD</option>\r\n\t\t\t\t\t<option value=\"ME\">ME</option>\r\n\t\t\t\t\t<option value=\"MI\">MI</option>\r\n\t\t\t\t\t<option value=\"MN\">MN</option>\r\n\t\t\t\t\t<option value=\"MO\">MO</option>\r\n\t\t\t\t\t<option value=\"MS\">MS</option>\r\n\t\t\t\t\t<option value=\"MT\">MT</option>\r\n\t\t\t\t\t<option value=\"NC\">NC</option>\r\n\t\t\t\t\t<option value=\"NE\">NE</option>\r\n\t\t\t\t\t<option value=\"NH\">NH</option>\r\n\t\t\t\t\t<option value=\"NJ\">NJ</option>\r\n\t\t\t\t\t<option value=\"NM\">NM</option>\r\n\t\t\t\t\t<option value=\"NV\">NV</option>\r\n\t\t\t\t\t<option value=\"NY\">NY</option>\r\n\t\t\t\t\t<option value=\"ND\">ND</option>\r\n\t\t\t\t\t<option value=\"OH\">OH</option>\r\n\t\t\t\t\t<option value=\"OK\">OK</option>\r\n\t\t\t\t\t<option value=\"OR\">OR</option>\r\n\t\t\t\t\t<option value=\"PA\">PA</option>\r\n\t\t\t\t\t<option value=\"RI\">RI</option>\r\n\t\t\t\t\t<option value=\"SC\">SC</option>\r\n\t\t\t\t\t<option value=\"SD\">SD</option>\r\n\t\t\t\t\t<option value=\"TN\">TN</option>\r\n\t\t\t\t\t<option value=\"TX\">TX</option>\r\n\t\t\t\t\t<option value=\"UT\">UT</option>\r\n\t\t\t\t\t<option value=\"VT\">VT</option>\r\n\t\t\t\t\t<option value=\"VA\">VA</option>\r\n\t\t\t\t\t<option value=\"WA\">WA</option>\r\n\t\t\t\t\t<option value=\"WI\">WI</option>\r\n\t\t\t\t\t<option value=\"WV\">WV</option>\r\n\t\t\t\t\t<option value=\"WY\">WY</option>\r\n\r\n\t\t\t\t\t<option>...</option>\r\n\t\t\t\t</select>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"form-group col-md-6\">\r\n\t\t\t\t<label for=\"inputZip\">Zip Code</label>\r\n\t\t\t\t<div class=\"asterisk\">*</div>\r\n\t\t\t\t<input type=\"text\" class=\"form-control\" pattern=\"[0-9]{5}\"\r\n\t\t\t\t\ttitle='Zip Code (Format: 00000)' id=\"inputZip\">\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<hr />\r\n\t\t<p>\r\n\t\t\t<b>Overall Scanning Status</b>\r\n\t\t</p>\r\n\t\t<div>\r\n\t\t\t<select id=\"inputState\" class=\"form-control\">\r\n\t\t\t\t<option selected>Choose...</option>\r\n\t\t\t\t<option value=\"AL\">Passed</option>\r\n\t\t\t\t<option value=\"AL\">Failed</option>\r\n\t\t\t\t<option value=\"AL\">Pending</option>\r\n\t\t\t\t\r\n\t\t\t</select>\r\n\t\t</div>\r\n\t\t<hr />\r\n\t\t<div class=\"form-row\">\r\n\t\t<div class=\"form-group col-md-6\">\r\n\t\t\t\t<label for=\"inputZip\">Next Scanning Date</label>\r\n\t\t\t\t\r\n\t\t\t\t<input type=\"text\" class=\"form-control\"  id=\"inputZip\" placeholder=\"mm/dd/yyy\">\r\n\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t<hr/>\r\n\t\t<p>\r\n\t\t\t<b>Notes</b>\r\n\t\t</p>\r\n\t\t<div>\r\n\t\t\t<textarea name=\"\" id=\"\" rows=\"5\" class=\"form-control\"></textarea>\r\n\t\t</div>\r\n\t\t<hr />\r\n\t\t<p>\r\n\t\t\t<b>Attachments</b>\r\n\t\t</p>\r\n\t\t<div>\r\n\t\t\t<div class=\"col-sm-5 col-md-5 col-lg-5\">\r\n\t\t\t\t<label class=\"input\"> <input type=\"file\"\r\n\t\t\t\t\tfile-model=\"attachment\" data-btn-text=\"Select a File\"\r\n\t\t\t\t\taccept=\".pdf,.doc,.docx\">\r\n\r\n\t\t\t\t</label>\r\n\t\t\t</div>\r\n\r\n\t\t</div>\r\n\t</form>\r\n</div>\r\n\r\n<div class=\"modal-footer\">\r\n\t<button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"c()\">Close</button>\r\n</div>\r\n</ng-template>\r\n<div class=\"plus\">\r\n\r\n\t<i class=\"fa fa-plus-square-o\" aria-hidden=\"true\"\r\n\t\tstyle=\"font-size: 24px;\" (click)=\"selectLocality()\"></i>\r\n\r\n</div>\r\n\r\n<form class=\"former clear-right\" *ngIf=\"showMainTable\">\r\n\t<table class=\"table table-striped table-hover table-bordere\">\r\n\t\t<thead>\r\n\t\t\t<tr>\r\n\r\n\t\t\t\t<th scope=\"col\">Solution Name</th>\r\n\t\t\t\t<th scope=\"col\">Vendor Name</th>\r\n\t\t\t\t<th scope=\"col\">Equipment Type</th>\r\n\t\t\t\t<th scope=\"col\">Precient Type</th>\r\n\t\t\t</tr>\r\n\t\t</thead>\r\n\t\t<tbody>\r\n\t\t\t<tr>\r\n\t\t\t\t<th><a routerLink=\"/locality/option/link\">Name</a></th>\r\n\t\t\t\t<td>Mark</td>\r\n\t\t\t\t<td>Otto</td>\r\n\t\t\t\t<td>Otto</td>\r\n\r\n\t\t\t</tr>\r\n\t\t\t<tr>\r\n\t\t\t\t<th><a routerLink=\"/locality/option\">Name</a></th>\r\n\t\t\t\t<td>Jacob</td>\r\n\t\t\t\t<td>Thornton</td>\r\n\t\t\t\t<td>Otto</td>\r\n\t\t\t</tr>\r\n\t\t\t<tr>\r\n\t\t\t\t<th><a routerLink=\"/locality/option\">Name</a></th>\r\n\t\t\t\t<td>Larry</td>\r\n\t\t\t\t<td>the Bird</td>\r\n\t\t\t\t<td>Otto</td>\r\n\t\t\t</tr>\r\n\t\t</tbody>\r\n\t</table>\r\n</form>\r\n\r\n\r\n<form class=\"forms  clear-right\" *ngIf=\"showTable\"\r\n\t[formGroup]=\"invoiceForm\">\r\n\r\n\t<p>\r\n\t\t<b>APPLICATION SOLUTIONS</b>\r\n\t</p>\r\n\t<div class=\"form-row\">\r\n\t\t<div class=\"form-group col-md-6\">\r\n\t\t\t<label for=\"modelSolution\">System Type</label> <select\r\n\t\t\t\tid=\"modelSolution\" class=\"form-control\"\r\n\t\t\t\t(change)=\"selectBox($event.target.value)\">\r\n\t\t\t\t<option selected>Choose...</option>\r\n\t\t\t\t<option>EVS</option>\r\n\t\t\t\t<option>EPB</option>\r\n\t\t\t</select>\r\n\t\t</div>\r\n\t</div>\r\n\t<div>\r\n\t\t<div class=\"form-row\" *ngIf=\"showSection\">\r\n\t\t\t\r\n\t\t\t\t<label for=\"lastName\">Model/Solution</label> <select id=\"inputState\"\r\n\t\t\t\t\tclass=\"form-control\" (click)=\"equip(content)\" (change)=\"selectForm($event.target.value)\">\r\n\t\t\t\t\t<option selected>Choose...</option>\r\n\t\t\t\t\t<option>Model Name</option>\r\n\t\t\t\t</select>\r\n\t\t\t</div>\r\n\t\r\n<div *ngIf=\"showForm\">\r\n\r\n<form class=\"formerx\" [formGroup]=\"modalsForm\">\r\n<div class=\"form-row\">\r\n\t\t\t<div class=\"form-group col-md-6\">\r\n\t\t\t\t<label for=\"lastName\">Model/Solution</label> <input type=\"text\"\r\n\t\t\t\t\tclass=\"form-control\" id=\"lastName\" placeholder=\"enter here\" formControlName=\"equipment\">\r\n\t\t\t</div>\r\n\t\t\r\n\r\n\t\t\r\n\t\t\t<div class=\"form-group col-md-6\">\r\n\t\t\t\t<label for=\"lastName\">Version</label> <input type=\"text\"\r\n\t\t\t\t\tclass=\"form-control\" id=\"lastName\" placeholder=\"enter here\" formControlName=\"vendor\">\r\n\t\t\t</div>\r\n\t\t\t</div>\r\n\t\r\n\t\t<div class=\"form-row\">\r\n\t\t\t<div class=\"form-group col-md-6\">\r\n\t\t\t\t<label for=\"lastName\">Equipment Type</label> <input type=\"text\"\r\n\t\t\t\t\tclass=\"form-control\" id=\"lastName\" placeholder=\"enter here\" formControlName=\"equipment\">\r\n\t\t\t</div>\r\n\t\t\r\n\r\n\t\t\r\n\t\t\t<div class=\"form-group col-md-6\">\r\n\t\t\t\t<label for=\"lastName\">Vendor</label> <input type=\"text\"\r\n\t\t\t\t\tclass=\"form-control\" id=\"lastName\" placeholder=\"enter here\" formControlName=\"vendor\">\r\n\t\t\t</div>\r\n\t\t\t</div>\r\n\t\r\n\t\t<hr />\r\n\t\t<div class=\"form-row\">\r\n\t\t\t<div class=\"form-group col-md-6\">\r\n\t\t\t\t<label for=\"lastName\">Hosting Type</label> <input type=\"text\"\r\n\t\t\t\t\tclass=\"form-control\" id=\"lastName\" placeholder=\"enter here\" formControlName=\"hosting\">\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t</form>\r\n\t\t\r\n\t\t<div class=\"form-row\">\r\n\t\t\t<div class=\"form-group col-md-6\">\r\n\t\t\t\t<label for=\"units\">Add Unit</label>\r\n\t\t\t\t<div class=\"plus\">\r\n\r\n\t\t\t\t<i class=\"fa fa-plus-square-o\" aria-hidden=\"true\"\r\n\t\t\t\t\tstyle=\"font-size: 24px;\" (click)=\"open(content)\"></i>\r\n\r\n\t\t\t</div>\r\n\t\t\t\t<table class=\"table table-striped table-hover table-bordere\">\r\n\t\t\t\t\t<thead>\r\n\t\t\t\t\t\t<tr>\r\n\r\n\t\t\t\t\t\t\t<th scope=\"col\">Model #</th>\r\n\t\t\t\t\t\t\t<th scope=\"col\">Serial #</th>\r\n\t\t\t\t\t\t\t<th scope=\"col\">Next due date</th>\r\n\t\t\t\t\t\t\t<th scope=\"col\">Overall status</th>\r\n\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t</thead>\r\n\t\t\t\t\t<tbody>\r\n\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t<th><a style=\"color: blue\" (click)=\"open(content)\">1</a></th>\r\n\t\t\t\t\t\t\t<th>1</th>\r\n\t\t\t\t\t\t\t<th>1</th>\r\n\t\t\t\t\t\t\t<th>1</th>\r\n\r\n\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t<tr>\r\n\r\n\t\t\t\t\t\t\t<th><a style=\"color: blue\" (click)=\"open(content)\">1</a></th>\r\n\t\t\t\t\t\t\t<th>1</th>\r\n\t\t\t\t\t\t\t<th>1</th>\r\n\t\t\t\t\t\t\t<th>1</th>\r\n\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t<th><a style=\"color: blue\" (click)=\"open(content)\">1</a></th>\r\n\t\t\t\t\t\t\t<th>1</th>\r\n\t\t\t\t\t\t\t<th>1</th>\r\n\t\t\t\t\t\t\t<th>1</th>\r\n\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t</tbody>\r\n\t\t\t\t</table>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t</div>\r\n\t\t\t\r\n\r\n\r\n\t\t</div>\r\n\r\n\t\t<button type=\"submit\" class=\"btn btn-primary\">Submit</button>\r\n\r\n\t</div>\r\n</form>\r\n\r\n"

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
exports.push([module.i, ".form{\r\n  padding: 20px;\r\n  border-radius: 10px;\r\n  border: 1px solid transparent;\r\n  margin: 20px;\r\n  background-color: #EEEEEE;\r\n}\r\ntbody tr:nth-of-type(odd) {\r\n    background-color: #EEEEEE !important;\r\n}\r\n\r\ntr{\r\n\tbackground-color:#cecfd5;\r\n}\r\ntbody tr:nth-child(even) {\r\n  background-color:white;\r\n}\r\n\r\n.form-control:disabled, .form-control[readonly] {\r\n    background-color: #ffffff;\r\n   \r\n}\r\n\r\n\r\n.plus{\r\n\tfloat:right;\r\n\t vertical-align: middle;\r\n    font-size: 20px;\r\n    margin-top: -15px;\r\n    padding: 10px;\r\n    margin-left: 50px;\r\n    color: #3A539B;\r\n}\r\n\r\n\r\n\r\ni.fa {\r\n    text-decoration: none !important;\r\n    padding: 5px 4px;\r\n}\r\n.fa {\r\n    display: inline-block;\r\n    font: normal normal normal 14px/1 FontAwesome;\r\n    font-size: inherit;\r\n    text-rendering: auto;\r\n   }\r\n\r\n\r\n\r\n\r\n\r\n#searchtable table, th, td {\r\n    border: 1px solid black;\r\n    border-collapse: collapse;\r\n}\r\n\r\n\r\n.table>tbody>tr>td, .table>tbody>tr>th, .table>tfoot>tr>td, .table>tfoot>tr>th, .table>thead>tr>td, .table>thead>tr>th {\r\n    padding: 8px;\r\n    line-height: 1.42857143;\r\n    vertical-align: top;\r\n    border-top: 1px solid #ddd;\r\n    color: black;\r\n}\r\n\r\n.table>thead>tr>th {\r\n    vertical-align: bottom;\r\n    border-bottom: 2px solid #ddd;\r\n}\r\n\r\n.table>caption+thead>tr:first-child>td, .table>caption+thead>tr:first-child>th, .table>colgroup+thead>tr:first-child>td, .table>colgroup+thead>tr:first-child>th, .table>thead:first-child>tr:first-child>td, .table>thead:first-child>tr:first-child>th {\r\n    border-top: 0;\r\n}\r\n\r\ntr {\r\n    display: table-row;\r\n    vertical-align: inherit;\r\n    border-color: inherit;\r\n}\r\n\r\ntable {\r\n    border: 1px solid black;\r\n    width: 100%;\r\n    max-width: 100%;\r\n    margin-bottom: 20px;\r\n    \r\n}\r\n\r\n\r\n.plus{\r\n\tfloat:right;\r\n    font-size: 20px;\r\n    margin-right: 20px;\r\n    color: #3A539B;\r\n}\r\n.modal-header{\r\n\tbackground-color:#3A539B !important;\r\n\tcolor:white;\r\n}\r\n\r\n\r\ni.fa {\r\n    text-decoration: none !important;\r\n    padding: 5px 4px;\r\n}\r\n.fa {\r\n    display: inline-block;\r\n    font: normal normal normal 14px/1 FontAwesome;\r\n    font-size: inherit;\r\n    text-rendering: auto;\r\n   }\r\n\r\nth{\r\n    font-weight: bold;\r\n    color: black;\r\n   \r\n    text-align: left;\r\n}\r\n\r\n\r\n\r\n#searchtable table, th, td {\r\n    border: 1px solid black;\r\n    border-collapse: collapse;\r\n}\r\n\r\n\r\n.table>tbody>tr>td, .table>tbody>tr>th, .table>tfoot>tr>td, .table>tfoot>tr>th, .table>thead>tr>td, .table>thead>tr>th {\r\n    padding: 8px;\r\n    line-height: 1.42857143;\r\n    vertical-align: top;\r\n  \r\n    color: black;\r\n}\r\n\r\n\r\n\r\n.table>caption+thead>tr:first-child>td, .table>caption+thead>tr:first-child>th, .table>colgroup+thead>tr:first-child>td, .table>colgroup+thead>tr:first-child>th, .table>thead:first-child>tr:first-child>td, .table>thead:first-child>tr:first-child>th {\r\n    border-top: 0;\r\n}\r\n\r\n\r\n\r\ntable {\r\n    border: 1px solid black;\r\n    width: 100%;\r\n    max-width: 100%;\r\n    margin-bottom: 20px;\r\n    \r\n}\r\ntr{\r\n\tbackground-color:#cecfd5;\r\n}\r\ntbody tr:nth-child(even) {\r\n  background-color:white;\r\n}\r\n\r\n\r\n.forms{\r\n  padding: 20px;\r\n  border-radius: 10px;\r\n  border: 1px solid transparent;\r\n  margin: 20px;\r\n  background-color: #EEEEEE;\r\n}\r\n.clear-right {\r\n\tclear:right;\r\n\toverflow: hidden;\r\n}\r\n.table-striped tbody tr:nth-of-type(odd) {\r\n    background-color: #EEEEEE !important;\r\n}\r\n\r\ntbody tr:nth-of-type(odd) {\r\n    background-color: #EEEEEE !important;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/locality-component/locality-tab/locality-solutionstablelink/locality-solutionstablelink.component.html":
/***/ (function(module, exports) {

module.exports = "<ng-template #content let-c=\"close\" let-d=\"dismiss\">\r\n<div class=\"modal-header\">\r\n\t<h4 class=\"modal-title\">Enter Device Information</h4>\r\n\t<button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d()\">\r\n\t\t<span aria-hidden=\"true\">&times;</span>\r\n\t</button>\r\n</div>\r\n<div class=\"modal-body\">\r\n\t<div class=\"save-edit\" style=\"float: right\">\r\n\t\t<fa class=\"edit-icon icons\" data-toggle=\"tooltip\"\r\n\t\t\tdata-placement=\"right\" title=\"Save\" data-animation=\"true\"\r\n\t\t\tdata-delay=\"0\" [name]=\"'edit'\" (click)=\"editClick()\"></fa>\r\n\t</div>\r\n\t<form class=form [formGroup]=\"solutionForm\">\r\n\t\t<div class=\"form-row\">\r\n\t\t\t<div class=\"form-group col-md-6\">\r\n\t\t\t\t<label for=\"email\">Model Number</label>\r\n\r\n\t\t\t\t<div class=\"asterisk\">*</div>\r\n\t\t\t\t<input type=\"email\" class=\"form-control\" id=\"name\"\r\n\t\t\t\t\tplaceholder=\"Equipment Model Number\" formControlName=\"model\">\r\n\r\n\t\t\t</div>\r\n\t\t\t<div class=\"form-group col-md-6\">\r\n\t\t\t\t<label for=\"phone\">Serial Number</label>\r\n\t\t\t\t<div class=\"asterisk\">*</div>\r\n\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"city\"\r\n\t\t\t\t\tplaceholder=\"Equipment Serial Number\" formControlName=\"serial\">\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<p>\r\n\t\t\t<b>Physical Address</b>\r\n\t\t</p>\r\n\t\t<div class=\"form-row\">\r\n\t\t\t<div class=\"form-group col-md-6\">\r\n\t\t\t\t<label for=\"email\">Street Name</label>\r\n\t\t\t\t<div class=\"asterisk\">*</div>\r\n\t\t\t\t<input type=\"email\" class=\"form-control\" id=\"email\"\r\n\t\t\t\t\tplaceholder=\"Enter here\">\r\n\t\t\t</div>\r\n\t\t\t<div class=\"form-group col-md-6\">\r\n\t\t\t\t<label for=\"phone\">City</label>\r\n\t\t\t\t<div class=\"asterisk\">*</div>\r\n\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"phone\"\r\n\t\t\t\t\tplaceholder=\"Enter here\">\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"form-row\">\r\n\t\t\t<div class=\"form-group col-md-6\">\r\n\t\t\t\t<label for=\"inputState\">State</label>\r\n\t\t\t\t<div class=\"asterisk\">*</div>\r\n\t\t\t\t<select id=\"inputState\" class=\"form-control\">\r\n\t\t\t\t\t<option selected>Choose...</option>\r\n\t\t\t\t\t<option value=\"AL\">AL</option>\r\n\t\t\t\t\t<option value=\"AK\">AK</option>\r\n\t\t\t\t\t<option value=\"AR\">AR</option>\r\n\t\t\t\t\t<option value=\"AZ\">AZ</option>\r\n\t\t\t\t\t<option value=\"CA\">CA</option>\r\n\t\t\t\t\t<option value=\"CO\">CO</option>\r\n\t\t\t\t\t<option value=\"CT\">CT</option>\r\n\t\t\t\t\t<option value=\"DC\">DC</option>\r\n\t\t\t\t\t<option value=\"DE\">DE</option>\r\n\t\t\t\t\t<option value=\"FL\">FL</option>\r\n\t\t\t\t\t<option value=\"GA\">GA</option>\r\n\t\t\t\t\t<option value=\"HI\">HI</option>\r\n\t\t\t\t\t<option value=\"IA\">IA</option>\r\n\t\t\t\t\t<option value=\"ID\">ID</option>\r\n\t\t\t\t\t<option value=\"IL\">IL</option>\r\n\t\t\t\t\t<option value=\"IN\">IN</option>\r\n\t\t\t\t\t<option value=\"KS\">KS</option>\r\n\t\t\t\t\t<option value=\"KY\">KY</option>\r\n\t\t\t\t\t<option value=\"LA\">LA</option>\r\n\t\t\t\t\t<option value=\"MA\">MA</option>\r\n\t\t\t\t\t<option value=\"MD\">MD</option>\r\n\t\t\t\t\t<option value=\"ME\">ME</option>\r\n\t\t\t\t\t<option value=\"MI\">MI</option>\r\n\t\t\t\t\t<option value=\"MN\">MN</option>\r\n\t\t\t\t\t<option value=\"MO\">MO</option>\r\n\t\t\t\t\t<option value=\"MS\">MS</option>\r\n\t\t\t\t\t<option value=\"MT\">MT</option>\r\n\t\t\t\t\t<option value=\"NC\">NC</option>\r\n\t\t\t\t\t<option value=\"NE\">NE</option>\r\n\t\t\t\t\t<option value=\"NH\">NH</option>\r\n\t\t\t\t\t<option value=\"NJ\">NJ</option>\r\n\t\t\t\t\t<option value=\"NM\">NM</option>\r\n\t\t\t\t\t<option value=\"NV\">NV</option>\r\n\t\t\t\t\t<option value=\"NY\">NY</option>\r\n\t\t\t\t\t<option value=\"ND\">ND</option>\r\n\t\t\t\t\t<option value=\"OH\">OH</option>\r\n\t\t\t\t\t<option value=\"OK\">OK</option>\r\n\t\t\t\t\t<option value=\"OR\">OR</option>\r\n\t\t\t\t\t<option value=\"PA\">PA</option>\r\n\t\t\t\t\t<option value=\"RI\">RI</option>\r\n\t\t\t\t\t<option value=\"SC\">SC</option>\r\n\t\t\t\t\t<option value=\"SD\">SD</option>\r\n\t\t\t\t\t<option value=\"TN\">TN</option>\r\n\t\t\t\t\t<option value=\"TX\">TX</option>\r\n\t\t\t\t\t<option value=\"UT\">UT</option>\r\n\t\t\t\t\t<option value=\"VT\">VT</option>\r\n\t\t\t\t\t<option value=\"VA\">VA</option>\r\n\t\t\t\t\t<option value=\"WA\">WA</option>\r\n\t\t\t\t\t<option value=\"WI\">WI</option>\r\n\t\t\t\t\t<option value=\"WV\">WV</option>\r\n\t\t\t\t\t<option value=\"WY\">WY</option>\r\n\r\n\t\t\t\t\t<option>...</option>\r\n\t\t\t\t</select>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"form-group col-md-6\">\r\n\t\t\t\t<label for=\"inputZip\">Zip Code</label>\r\n\t\t\t\t<div class=\"asterisk\">*</div>\r\n\t\t\t\t<input type=\"text\" class=\"form-control\" pattern=\"[0-9]{5}\"\r\n\t\t\t\t\ttitle='Zip Code (Format: 00000)' id=\"inputZip\">\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<hr />\r\n\t\t<p>\r\n\t\t\t<b>Overall Scanning Status</b>\r\n\t\t</p>\r\n\t\t<div>\r\n\t\t\t<select id=\"inputState\" class=\"form-control\">\r\n\t\t\t\t<option selected>Choose...</option>\r\n\t\t\t\t<option value=\"AL\">Passed</option>\r\n\t\t\t\t<option value=\"AL\">Failed</option>\r\n\t\t\t\t<option value=\"AL\">Pending</option>\r\n\t\t\t\t\r\n\t\t\t</select>\r\n\t\t</div>\r\n\t\t<hr />\r\n\t\t<div class=\"form-row\">\r\n\t\t<div class=\"form-group col-md-6\">\r\n\t\t\t\t<label for=\"inputZip\">Next Scanning Date</label>\r\n\t\t\t\t\r\n\t\t\t\t<input type=\"text\" class=\"form-control\"  id=\"inputZip\" placeholder=\"mm/dd/yyy\">\r\n\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t<hr/>\r\n\t\t<p>\r\n\t\t\t<b>Notes</b>\r\n\t\t</p>\r\n\t\t<div>\r\n\t\t\t<textarea name=\"\" id=\"\" rows=\"5\" class=\"form-control\"></textarea>\r\n\t\t</div>\r\n\t\t<hr />\r\n\t\t<p>\r\n\t\t\t<b>Attachments</b>\r\n\t\t</p>\r\n\t\t<div>\r\n\t\t\t<div class=\"col-sm-5 col-md-5 col-lg-5\">\r\n\t\t\t\t<label class=\"input\"> <input type=\"file\"\r\n\t\t\t\t\tfile-model=\"attachment\" data-btn-text=\"Select a File\"\r\n\t\t\t\t\taccept=\".pdf,.doc,.docx\">\r\n\r\n\t\t\t\t</label>\r\n\t\t\t</div>\r\n\r\n\t\t</div>\r\n\t</form>\r\n</div>\r\n\r\n<div class=\"modal-footer\">\r\n\t<button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"c()\">Close</button>\r\n</div>\r\n</ng-template>\r\n\r\n<div class=\"plus\">\r\n\r\n\t<i class=\"fa fa-plus-square-o\" aria-hidden=\"true\"\r\n\t\tstyle=\"font-size: 24px;\" (click)=\"editClick()\"></i>\r\n\r\n</div>\r\n\r\n<form class=\"forms  clear-right\" [formGroup]=\"solutionForm\">\r\n\r\n\t<p>\r\n\t\t<b>APPLICATION SOLUTIONS</b>\r\n\t</p>\r\n\t<div class=\"form-row\">\r\n\t\t<div class=\"form-group col-md-6\">\r\n\t\t\t<label for=\"modelSolution\" >System Type</label> <select\r\n\t\t\t\tid=\"modelSolution\" class=\"form-control\"  formControlName=\"system\">\r\n\t\t\t\t<option selected>Choose...</option>\r\n\t\t\t\t<option>EVS</option>\r\n\t\t\t\t<option>EPB</option>\r\n\t\t\t</select>\r\n\t\t</div>\r\n\t</div>\r\n\r\n\t<div>\r\n\r\n\t\t<div class=\"form-row\">\r\n\r\n\t\t\t<label for=\"lastName\">Model/Solution</label> <select id=\"inputState\"\r\n\t\t\t\tclass=\"form-control\"  formControlName=\"model\">\r\n\t\t\t\t<option selected>Choose...</option>\r\n\t\t\t\t<option>...</option>\r\n\t\t\t</select>\r\n\r\n\r\n\t\t</div>\r\n\t\t<div class=\"form-row\">\r\n\t\t\t<div class=\"form-group col-md-6\">\r\n\t\t\t\t<label for=\"lastName\">Model/Solution</label> <input type=\"email\"\r\n\t\t\t\t\tclass=\"form-control\" id=\"name\" placeholder=\"enter here\"  formControlName=\"solution\">\r\n\t\t\t</div>\r\n\t\t\t<div class=\"form-group col-md-6\">\r\n\t\t\t\t<label for=\"lastName\">Version</label> <input type=\"email\"\r\n\t\t\t\t\tclass=\"form-control\" id=\"name\" placeholder=\"enter here\"  formControlName=\"version\">\r\n\t\t\t</div>\r\n\r\n\t\t</div>\r\n\r\n\t\t<div class=\"form-row\">\r\n\t\t\t<div class=\"form-group col-md-6\">\r\n\t\t\t\t<label for=\"lastName\">Equipment Type</label> <input type=\"text\"\r\n\t\t\t\t\tclass=\"form-control\" id=\"lastName\" placeholder=\"enter here\"  formControlName=\"equipment\">\r\n\t\t\t</div>\r\n\t\t\t<div class=\"form-group col-md-6\">\r\n\t\t\t\t<label for=\"lastName\">Vendor</label> <input type=\"text\"\r\n\t\t\t\t\tclass=\"form-control\" id=\"lastName\" placeholder=\"enter here\"  formControlName=\"vendor\">\r\n\t\t\t</div>\r\n\t\t</div>\r\n\r\n\r\n\t\t<hr />\r\n\t\t<div class=\"form-row\">\r\n\t\t\t<div class=\"form-group col-md-6\">\r\n\t\t\t\t<label for=\"lastName\">Hosting Type</label> <input type=\"text\"\r\n\t\t\t\t\tclass=\"form-control\" id=\"lastName\" placeholder=\"enter here\"  formControlName=\"name\">\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"form-row\">\r\n\t\t\t<div class=\"form-group col-md-6\">\r\n\t\t\t\t<label for=\"units\">Add Unit</label>\r\n\t\t\t\t\t<div class=\"plus\">\r\n\r\n\t\t\t\t<i class=\"fa fa-plus-square-o\" aria-hidden=\"true\"\r\n\t\t\t\t\tstyle=\"font-size: 24px;\" (click)=\"open(content)\" formControlName=\"plus\"></i>\r\n\r\n\t\t\t</div>\r\n\t\t\t\t<table class=\"table table-striped table-hover table-bordere\">\r\n\t\t\t\t\t<thead>\r\n\t\t\t\t\t\t<tr>\r\n\r\n\t\t\t\t\t\t\t<th scope=\"col\">Model #</th>\r\n\t\t\t\t\t\t\t<th scope=\"col\">Serial #</th>\r\n\t\t\t\t\t\t\t<th scope=\"col\">Next due date</th>\r\n\t\t\t\t\t\t\t<th scope=\"col\">Overall status</th>\r\n\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t</thead>\r\n\t\t\t\t\t<tbody>\r\n\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t<th><a style=\"color: blue\" (click)=\"open(content)\">1</a></th>\r\n\t\t\t\t\t\t\t<th>1</th>\r\n\t\t\t\t\t\t\t<th>1</th>\r\n\t\t\t\t\t\t\t<th>1</th>\r\n\r\n\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t<tr>\r\n\r\n\t\t\t\t\t\t\t<th><a style=\"color: blue\" (click)=\"open(content)\">1</a></th>\r\n\t\t\t\t\t\t\t<th>1</th>\r\n\t\t\t\t\t\t\t<th>1</th>\r\n\t\t\t\t\t\t\t<th>1</th>\r\n\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t<th><a style=\"color: blue\" (click)=\"open(content)\">1</a></th>\r\n\t\t\t\t\t\t\t<th>1</th>\r\n\t\t\t\t\t\t\t<th>1</th>\r\n\t\t\t\t\t\t\t<th>1</th>\r\n\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t</tbody>\r\n\t\t\t\t</table>\r\n\r\n\t\t\t\r\n\t\t\t</div>\r\n\r\n\r\n\t\t</div>\r\n\r\n\t\t<button type=\"submit\" class=\"btn btn-primary\">Submit</button>\r\n\r\n\t</div>\r\n</form>\r\n\r\n"

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
exports.push([module.i, "i.fa {\r\n    text-decoration: none !important;\r\n    padding: 5px 4px;\r\n}\r\n\r\n\r\n.fa {\r\n    display: inline-block;\r\n    font: normal normal normal 14px/1 FontAwesome;\r\n    font-size: inherit;\r\n    text-rendering: auto;\r\n    -webkit-font-smoothing: antialiased;\r\n    -moz-osx-font-smoothing: grayscale;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/locality-component/locality-tab/locality-tab.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"form-div\">\r\n    <div class=\"head\">\r\n        <ul class=\"nav nav-tabs\">\r\n            <li class=\"nav-item\">\r\n                <a class=\"nav-link\" routerLink=\"/locality/option\"> <i class=\"fa fa-info-circle\"></i>Information </a>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n                <a class=\"nav-link hover\" routerLink=\"/locality/map/option/solutions\"><i class=\"fa fa-info-circle\"></i>Solutions</a>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n                <a class=\"nav-link \"  routerLink=\"/locality/map/option/legal\"><i class=\"fa fa-info-circle\"></i>Legal</a>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n                <a class=\"nav-link \" routerLink=\"/locality/option/Audit\"><i class=\"fa fa-bell\"></i>Audit/Compliance</a>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n                <a class=\"nav-link \" routerLink=\"/locality/option/form2\">Assessment</a>\r\n            </li>\r\n            \r\n            <li class=\"nav-item\">\r\n                <a class=\"nav-link \" routerLink=\"/locality/option/form2\">Security</a>\r\n            </li>\r\n             <li class=\"nav-item\">\r\n                <a class=\"nav-link \" routerLink=\"/locality/option/form2\">Technical</a>\r\n            </li>\r\n             <li class=\"nav-item\">\r\n              <a class=\"nav-link \"  routerLink=\"/locality/option/business\"><i class=\"fa fa-building-o\"></i>Business</a> \r\n            </li>\r\n        </ul>\r\n    </div>\r\n  <router-outlet></router-outlet>\r\n</div>"

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

module.exports = "<app-navigation-component></app-navigation-component>\r\n<app-option-list></app-option-list>\r\n<!-- <app-view-table></app-view-table> -->"

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
exports.push([module.i, ".p-4{\r\n    background-color: #2C3E50;\r\n    border-top: 1px solid #ECF0F1;\r\n}\r\n\r\nnav{\r\n    background-color: #3A539B;\r\n    text-align: center;\r\n    position: relative;\r\n}\r\n\r\n.sticky-top icons{\r\n\theight: 10px;\r\n}\r\n\r\n.heading{\r\n    color: white;\r\n}\r\n\r\nimg{\r\n    width: 10%;\r\n}\r\n\r\n.user{\r\n    position: absolute;\r\n    font-size: 10px;\r\n    color: white;\r\n    right: 50px;\r\n    margin-right: 10px;\r\n}\r\n\r\n.down-icon{\r\n    font-size: 10px;\r\n    margin-left: 3px;\r\n    color: white;\r\n}\r\n\r\n.navigate-toggle{\r\n    color: white;\r\n}\r\n\r\n.btn{\r\n    margin-left: 30px;\r\n}\r\n\r\nh1{\r\n    color: white;\r\n}\r\n\r\n.collapse-div{\r\n    background-color: #59ABE3;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/navigation-component/navigation-component.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"pos-f-t\">\r\n          <nav class=\"navbar\">\r\n            <img src=\"assets/img/logo.png\">\r\n            <h2 class=\"heading\">Application and Audit Manager</h2>\r\n            <p class=\"user\">Sunny Singh<fa [name]=\"'chevron-down'\"></fa></p>\r\n            <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarToggleExternalContent\" aria-controls=\"navbarToggleExternalContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n              <fa class=\"navigate-toggle hg\" [name]=\"'align-justify'\"></fa>\r\n            </button>\r\n          </nav>\r\n          <div class=\"collapse\" id=\"navbarToggleExternalContent\">\r\n            <div class=\"p-4\">\r\n              <button type=\"button\" class=\"btn btn-light\">Dashboard (Index)</button>\r\n              <button type=\"button\" class=\"btn btn-light\">Create an Application</button>\r\n              <button type=\"button\" class=\"btn btn-light\">Reports (report)</button>\r\n              <button type=\"button\" class=\"btn btn-light\">Manage Policies</button>\r\n              <button type=\"button\" class=\"btn btn-light\">Vendors</button>\r\n              <button type=\"button\" class=\"btn btn-light\">Solutions</button>\r\n              <button type=\"button\" class=\"btn btn-light\">Add Device</button>\r\n            </div>\r\n          </div>\r\n    </div>"

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
exports.push([module.i, ".navigate{\r\n    margin: 15px;\r\n    padding: 5px;\r\n}\r\n\r\n.sticky-top{\r\n\theight: 30px;\r\n\tborder-radius: 5px;\r\n}\r\n\r\n.form-options{\r\n    margin-right: 15px;\r\n    margin-top: -15px;\r\n    padding: 5px;\r\n}\r\n\r\n.home-back{\r\n\tfloat: left;\r\n}\r\n\r\n.save-edit{\r\n\tfloat: right;\r\n}\r\n\r\na{\r\n\ttext-decoration: none;\r\n}\r\n\r\n.icons{\r\n    vertical-align: middle;\r\n    font-size: 20px;\r\n    margin-top: -20px;\r\n    padding: 2px;\r\n    margin-left: 5px;\r\n}\r\n\r\n/*.left-icons{\r\n\tfloat: left;\r\n}\r\n\r\n.icons{\r\n\tdisplay: inline-block;\r\n}*/\r\n\r\n.home-icon{\r\n    color: #3A539B;\r\n}\r\n\r\n.home-icon:hover{\r\n\t\r\n}\r\n\r\n.edit-icon{\r\n    /*margin-left: 10px;*/\r\n    color: #3A539B;\r\n}\r\n\r\n.left-icon{\r\n    /*margin-left: 10px;*/\r\n    color: #3A539B;\r\n}\r\n\r\n.save-icon{\r\n    color: #3A539B;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/option-list/option-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"navigate sticky-top\" [ngStyle]=\"{'backgroundColor': getColor(), 'opacity': getOpacity()}\">\r\n            <!--<div class=\"home\">\r\n                <i class=\"fas fa-home home-icon icons\"></i>\r\n                < class=\"fas fa-arrow-left left-icon icons\"></i>\r\n            </div>-->\r\n            <div class=\"form-options\">\r\n                <div class=\"home-back\">\r\n                \t<a routerLink=\"/\"><fa class=\"left-icons home-icon icons\" data-toggle=\"tooltip\" data-placement=\"right\" title=\"Home\" data-animation=\"true\" data-delay=\"0\" [name]=\"'home'\"></fa></a>\r\n                \t<a href=\"javascript:void(0)\" (click)=\"backClicked()\"><fa class=\"left-icons left-icon icons\" data-toggle=\"tooltip\" data-placement=\"right\" title=\"Back\" data-animation=\"true\" data-delay=\"0\" [name]=\"'arrow-left'\"></fa></a>\r\n                </div>\r\n                <div class=\"save-edit\">\r\n                \t<fa class=\"save-icon icons\" data-toggle=\"tooltip\" data-placement=\"right\" title=\"Save\" data-animation=\"true\" data-delay=\"0\" [name]=\"'save'\"></fa>\r\n                </div>\r\n               <!--  <fa class=\"edit-icon icons\" [name]=\"'edit'\"></fa> -->\r\n            </div>\r\n        </div>"

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
exports.push([module.i, "\r\n.page-description{\r\n    text-align: center;\r\n    padding: 2%;\r\n    text-transform: uppercase;\r\n}\r\n\r\n.after-heading{\r\n\twidth: 10%;\r\n\tmargin: auto;\r\n\tbackground-color: #3A539B;\r\n\tmargin-top: -15px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/policy-component/policy-component.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navigation-component></app-navigation-component>\r\n<app-option-list></app-option-list>\r\n<app-policy-forms></app-policy-forms>"

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
exports.push([module.i, ".forms{\r\n    padding: 20px;\r\n    border-radius: 10px;\r\n    border: 1px solid transparent;\r\n    margin: 20px;\r\n    background-color: #EEEEEE;\r\n    overflow: hidden;\r\n}\r\n\r\n.asterisk{\r\n\tdisplay: inline;\r\n\tcolor: red;\r\n\tmargin-left: 2px;\r\n}\r\n\r\n.installation{\r\n\tpadding: 1%;\r\n}\r\n\r\n.buttons{\r\n\tfloat: right;\r\n}\r\n\r\n.btn{\r\n\tbackground-color: #3A539B;\r\n\tborder-color: #3A539B;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/policy-component/policy-forms/policy-forms.component.html":
/***/ (function(module, exports) {

module.exports = "<form class=\"forms\">\r\n\t<div class=\"form-row\">\r\n\t\t<div class=\"form-group col-md-6\">\r\n\t\t\t<label class=\"label-form\" for=\"policyEntity\"><b>Policy Entity</b></label><div class=\"asterisk\">*</div>\r\n              <select class=\"form-control\" id=\"policyEntity\" required (change)=\"policy($event.target.value)\">\r\n                <option selected>Choose...</option>\r\n                <option value=\"VITA\">VITA</option>\r\n              </select>\r\n\t\t</div>\r\n\t</div>\r\n</form>\r\n<div class=\"policy-add\" *ngIf=\"policyEntity ==='VITA'\">\r\n\t<div class=\"forms\">\r\n\t\t<div class=\"form-row\">\r\n\t\t\t<div class=\"installation form-group\">\r\n\t\t\t<label for=\"policyName\"><b>Policy Name</b></label><div class=\"asterisk\">*</div>\r\n            <input type=\"text\" class=\"asterisk form-control\" id=\"policyName\" required>\r\n            <label class=\"hosting-notes\" for=\"policyDescription\"><b>Policy Description</b></label><!-- <div class=\"asterisk-inline asterisk\">*</div> -->\r\n            <textarea cols=\"156\" rows=\"7\" id=\"policyDescription\" required></textarea>\r\n          </div>\r\n\t\t</div>\r\n\t<div class=\"buttons\">\r\n         \t<button type=\"cancel\" class=\"cancel btn btn-primary\">Cancel</button>\r\n        \t<button type=\"submit\" class=\"submit btn btn-primary\" ng-disabled=\"form.$invalid\">Submit</button>\r\n        </div>\r\n\t</div>\r\n</div>\r\n\r\n"

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
exports.push([module.i, "\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/policy-view-component/policy-view-component.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navigation-component></app-navigation-component>\r\n<app-option-list></app-option-list>\r\n<app-policy-view-forms-component></app-policy-view-forms-component>\r\n\r\n"

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
exports.push([module.i, ".asterisk{\r\n\tdisplay: inline;\r\n\tcolor: red;\r\n\tmargin-left: 2px;\r\n}\r\n\r\n.applications{\r\n\tmargin-top: 15px;\r\n}\r\n\r\ntable{\r\n\tbackground-color: #ffffff;\r\n}\r\n\r\ntable thead tr th{\r\n\tfont-weight: 500;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/policy-view-component/policy-view-forms-component/applications/applications.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"applications\">\r\n\t\t\t\t<span><b>APPLICATIONS</b></span>\r\n\t\t\t<hr />\r\n\t\t\t</div>\r\n<table class=\"table table-bordered table-dark\">\r\n\t<thead>\r\n\t\t    <tr>\r\n\t\t      <th scope=\"col\">Acronym</th>\r\n\t\t      <th scope=\"col\">Name</th>\r\n\t\t      <th scope=\"col\">Business Owner</th>\r\n\t\t      <th scope=\"col\">Project Manager</th>\r\n\t\t    </tr>\r\n\t\t  </thead>\r\n</table>"

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
exports.push([module.i, ".model-solution-row{\r\n\tpadding: 1%;\r\n}\r\n\r\n.asterisk{\r\n\tdisplay: inline;\r\n\tcolor: red;\r\n\tmargin-left: 2px;\r\n}\r\n\r\n.btn{\r\n\tbackground-color: #3A539B;\r\n\tborder-color: #3A539B;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/policy-view-component/policy-view-forms-component/documents/dialog-box/dialog-box.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"modal-header\">\r\n      <h4 class=\"modal-title\">Hi there!</h4>\r\n      <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"activeModal.dismiss('Cross click')\">\r\n        <span aria-hidden=\"true\">&times;</span>\r\n      </button>\r\n    </div>\r\n    <div class=\"modal-body\">\r\n      <p>Hello, {{name}}!</p>\r\n    </div>\r\n    <div class=\"modal-footer\">\r\n      <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"activeModal.close('Close click')\">Close</button>\r\n    </div> -->"

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
exports.push([module.i, ".asterisk{\r\n\tdisplay: inline;\r\n\tcolor: red;\r\n\tmargin-left: 2px;\r\n}\r\n\r\n.documents{\r\n\tmargin-top: 15px;\r\n}\r\n\r\n.policy-edit{\r\n\tfloat: right;\r\n}\r\n\r\n.icons{\r\n    vertical-align: middle;\r\n    font-size: 20px;\r\n    margin-top: -20px;\r\n    padding: 2px;\r\n    margin-left: 5px;\r\n}\r\n\r\n.edit-icon{\r\n    /*margin-left: 10px;*/\r\n    color: #3A539B;\r\n}\r\n\r\n.download-icon{\r\n\tcolor: #3A539B;\r\n}\r\n\r\n.save-icon{\r\n\tcolor: #3A539B;\r\n}\r\n\r\n.close-icon{\r\n\tcolor: #3A539B;\r\n}\r\n\r\n.installation{\r\n\tpadding: 1%;\r\n}\r\n\r\n.hosting-notes{\r\n\tdisplay: block;\r\n\t/*margin-top: 20px;*/\r\n}\r\n\r\n.modal-header{\r\n\tbackground-color: #3A539B;\r\n\tcolor: #ffffff;\r\n}\r\n\r\n.btn{\r\n\tbackground-color: #3A539B;\r\n\tborder-color: #3A539B;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/policy-view-component/policy-view-forms-component/documents/documents.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"documents\">\r\n\t\t\t\t<span><b>DOCUMENTS</b></span>\r\n\t\t\t\t\t<div class=\"policy-edit\"><fa class=\"edit-icon icons\" (click)=\"changeButton()\" *ngIf=\"plus\" data-toggle=\"tooltip\" data-placement=\"right\" title=\"Save\" data-animation=\"true\" data-delay=\"0\" [name]=\"'edit'\"></fa>\r\n\t\t\t\t\t\t<fa (click)=\"open(content)\" *ngIf=\"!plus\" [name]=\"'download'\" class=\"download-icon icons\"></fa>\r\n\t\t\t\t\t\t<fa *ngIf=\"!plus\" class=\"save-icon icons\" [name]=\"'save'\"></fa>\r\n\t\t\t\t\t\t<fa (click)=close() *ngIf=\"!plus\" class=\"close-icon icons\" [name]=\"'times-circle'\"></fa>\r\n\t\t\t\t\t</div>\r\n\t\t\t<hr />\r\n \t\t</div>\r\n<ng-template #content let-c=\"close\" let-d=\"dismiss\">\r\n  <div class=\"modal-header\">\r\n    <h4 class=\"modal-title\" id=\"modal-basic-title\">Policy Documents</h4>\r\n    <!-- <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button> -->\r\n  </div>\r\n  <div class=\"modal-body\">\r\n    <form>\r\n    \t<div class=\"form-row\">\r\n    \t\t<div class=\"form-group col-12\">\r\n    \t\t\t<label for=\"attachments\"><b>Attachment</b></label>\r\n    \t\t\t<input id=\"attachments\" class=\"form-control\" type=\"file\" />\r\n    \t\t</div>\r\n    \t</div>\r\n    \t<hr />\r\n    \t<div class=\"form-row\">\r\n    \t\t<div class=\"form-group col-12\">\r\n    \t\t\t<label for=\"fileList\"><b>Attachment</b></label>\r\n    \t\t</div>\r\n    \t</div>\r\n    </form>\r\n  </div>\r\n  <div class=\"modal-footer\">\r\n    <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"c('Save click')\">Cancel</button>\r\n    <button type=\"button\" class=\"btn btn-outline-dark\">Upload</button>\r\n  </div>\r\n</ng-template>\r\n<div class=\"installation form-group\">\r\n            <label class=\"hosting-notes\" for=\"policyResources\"><b>Policy Resources</b></label><!-- <div class=\"asterisk-inline asterisk\">*</div> -->\r\n            <textarea cols=\"156\" rows=\"7\" id=\"Policy Resources\" ngModel name=\"policyResurces\" required></textarea>\r\n          </div>"

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
exports.push([module.i, ".asterisk{\r\n\tdisplay: inline;\r\n\tcolor: red;\r\n\tmargin-left: 2px;\r\n}\r\n\r\n.policies{\r\n\tmargin-top: 15px;\r\n}\r\n\r\n.policy-edit{\r\n\tfloat: right;\r\n}\r\n\r\n.icons{\r\n    vertical-align: middle;\r\n    font-size: 20px;\r\n    margin-top: -20px;\r\n    padding: 2px;\r\n    margin-left: 5px;\r\n}\r\n\r\n.download-icon{\r\n\tcolor: #3A539B;\r\n}\r\n\r\n.edit-icon{\r\n\tcolor: #3A539B;\r\n}\r\n\r\n.upload-icon{\r\n\tcolor: #3A539B;\r\n}\r\n\r\n.plus-icon{\r\n\tcolor: #3A539B;\r\n}\r\n\r\n.save-icon{\r\n\tcolor: #3A539B;\r\n}\r\n\r\n.close-icon{\r\n\tcolor: #3A539B;\r\n}\r\n\r\ninput[readonly] {\r\n\tbackground-color: #ffffff;\r\n\t}\r\n\r\ntable{\r\n\tbackground-color: #ffffff;\r\n\ttext-align: center;\r\n}\r\n\r\ntable thead tr th{\r\n\tfont-weight: 500;\r\n}\r\n\r\n.modal-header{\r\n\tbackground-color: #3A539B;\r\n\tcolor: #ffffff;\r\n}\r\n\r\n.btn{\r\n\tbackground-color: #3A539B;\r\n\tborder-color: #3A539B;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/policy-view-component/policy-view-forms-component/policy-details/policy-details.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"policies\">\r\n\t\t\t\t<span><b>POLICIES</b></span>\r\n\t\t\t\t<div class=\"policy-edit\">\r\n\t\t\t\t<fa *ngIf=\"plus\" [name]=\"'download'\" class=\"download-icon icons\"></fa>\r\n\t\t\t\t<fa class=\"edit-icon icons\" (click)=\"changeButton()\" *ngIf=\"plus\" data-toggle=\"tooltip\" data-placement=\"right\" title=\"Save\" data-animation=\"true\" data-delay=\"0\" [name]=\"'edit'\"></fa>\r\n\t\t\t\t\t\t<fa (click)=\"open(content)\" *ngIf=\"!plus\" [name]=\"'upload'\" class=\"upload-icon icons\"></fa>\r\n\t\t\t\t\t\t<fa *ngIf=\"!plus\" [name]=\"'plus'\" class=\"plus-icon icons\"></fa>\r\n\t\t\t\t\t\t<fa *ngIf=\"!plus\" class=\"save-icon icons\" [name]=\"'save'\"></fa>\r\n\t\t\t\t\t\t<fa (click)=\"close()\" *ngIf=\"!plus\" class=\"close-icon icons\" [name]=\"'times-circle'\"></fa>\r\n\t\t\t\t\t</div>\r\n\t\t\t<hr />\r\n\t\t\t</div>\r\n\t\t\t<ng-template #content let-c=\"close\" let-d=\"dismiss\">\r\n\t\t\t  <div class=\"modal-header\">\r\n\t\t\t    <h4 class=\"modal-title\" id=\"modal-basic-title\">Policy File</h4>\r\n\t\t\t    <!-- <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\r\n\t\t\t      <span aria-hidden=\"true\">&times;</span>\r\n\t\t\t    </button> -->\r\n\t\t\t  </div>\r\n\t\t\t  <div class=\"modal-body\">\r\n\t\t\t    <form>\r\n\t\t\t    \t<div class=\"form-row\">\r\n\t\t\t    \t\t<div class=\"form-group col-12\">\r\n\t\t\t    \t\t\t<!-- <label for=\"attachments\"><b>Attachment</b></label> -->\r\n\t\t\t    \t\t\t<input id=\"attachments\" class=\"form-control\" type=\"file\" />\r\n\t\t\t    \t\t</div>\r\n\t\t\t    \t</div>\r\n\t\t\t    \t<hr />\r\n\t\t\t    \t<!-- <div class=\"form-row\">\r\n\t\t\t    \t\t<div class=\"form-group col-12\">\r\n\t\t\t    \t\t\t<label for=\"fileList\"><b>Attachment</b></label>\r\n\t\t\t    \t\t</div>\r\n\t\t\t    \t</div> -->\r\n\t\t\t    </form>\r\n\t\t\t  </div>\r\n\t\t\t  <div class=\"modal-footer\">\r\n\t\t\t    <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"c('Save click')\">Close</button>\r\n\t\t\t    <button type=\"button\" class=\"btn btn-outline-dark\">Upload</button>\r\n\t\t\t  </div>\r\n</ng-template>\r\n\t\t\t<!-- <div class=\"model-solution-row form-row\">\r\n            \t<div class=\"model form-group col-md-6\">\r\n            <label class=\"label-form\" for=\"definitiveSourceInput\">Definitive Source</label><div class=\"asterisk\">*</div>\r\n              <input type=\"text\" class=\"form-control\" id=\"definitiveSourceInput\" readonly value=\"VITA\">\r\n              <!-- <div class=\"hover-icon\"><fa class=\"ban\" [name]=\"'ban'\"></fa></div>\r\n            \t</div>\r\n            \t<div class=\"version form-group col-md-6\">\r\n            \t\t<label class=\"label-form\" for=\"updatedBy\">Updated By</label><div class=\"asterisk\">*</div>\r\n\t\t              <input type=\"text\" class=\"form-control\" id=\"updatedBy\" readonly value=\"Sunny Singh\">\r\n            \t</div>\r\n            \t<div class=\"form-group col-md-6\">\r\n            <label class=\"label-form\" for=\"Type/Policy\">Type/Policy</label><div class=\"asterisk\">*</div>\r\n              <input type=\"text\" class=\"form-control\" id=\"Type/Policy\" readonly value=\"IT Information Security Standard (SEC501-09.1)\">\r\n            \t</div>\r\n            \t<div class=\"form-group col-md-6\">\r\n            \t\t<label class=\"label-form\" for=\"updtedAt\">Updated At</label><div class=\"asterisk\">*</div>\r\n\t\t              <input type=\"text\" class=\"form-control\" id=\"updatedAt\" readonly value=\"14-05-2018\">\r\n            \t</div>\r\n            </div> -->\r\n\t\t<div class=\"description\">\r\n\t\t\t<h5>DESCRIPTION</h5>\r\n\t\t\t<div class=\"model-solution-row form-row\">\r\n            \t<div class=\"model form-group col-md-6\">\r\n            <label class=\"label-form\" for=\"lastReviewDate\">Last Review Date</label><div class=\"asterisk\">*</div>\r\n              <input type=\"text\" class=\"edit-disable form-control\" id=\"lastReviewDate\" readonly value=\"17-10-2017\">\r\n            \t</div>\r\n            \t<div class=\"version form-group col-md-6\">\r\n            \t\t<label class=\"label-form\" for=\"nextReviewDate\">Next Review Date</label><div class=\"asterisk\">*</div>\r\n\t\t              <input type=\"text\" class=\"edit-disable form-control\" id=\"nextReviewDate\" readonly value=\"15-10-2018\">\r\n            \t</div>\r\n            \t<div class=\"form-group col-md-6\">\r\n            <label class=\"label-form\" for=\"owner\">Owner</label><div class=\"asterisk\">*</div>\r\n              <input type=\"text\" class=\"edit-disable form-control\" id=\"owner\" readonly>\r\n            \t</div>\r\n            \t<div class=\"form-group col-md-6\">\r\n            \t\t<label class=\"label-form\" for=\"policyReviewTeam\">Policy Review Team</label><div class=\"asterisk\">*</div>\r\n\t\t              <input type=\"text\" class=\"edit-disable form-control\" id=\"policyReviewTeam\" readonly>\r\n            \t</div>\r\n            \t<div class=\"form-group col-md-6\">\r\n            \t\t<label class=\"label-form\" for=\"status\">Status</label><div class=\"asterisk\">*</div>\r\n\t\t              <input type=\"text\" class=\"form-control\" id=\"status\" readonly value=\"Open\">\r\n            \t</div>\r\n            </div>\r\n\t\t</div>\r\n\t\t<hr />\r\n\t\t<h5>CONTROLS</h5>\r\n\t\t<table class=\"table table-bordered table-dark\">\r\n\t\t  <thead>\r\n\t\t    <tr>\r\n\t\t      <th scope=\"col\">Control Number</th>\r\n\t\t      <th scope=\"col\">Policy Name</th>\r\n\t\t      <th scope=\"col\">Priority</th>\r\n\t\t      <th scope=\"col\">Policy Value</th>\r\n\t\t      <th scope=\"col\">Assigned To</th>\r\n\t\t      <th scope=\"col\">Assigned By</th>\r\n\t\t      <th scope=\"col\">Assigned On</th>\r\n\t\t      <th scope=\"col\">Target Date</th>\r\n\t\t      <th scope=\"col\">Status</th>\r\n\t\t    </tr>\r\n\t\t  </thead>\r\n\t\t  <!--   <tbody>\r\n\t\t    <tr>\r\n\t\t      <th scope=\"row\">1</th>\r\n\t\t      <td></td>\r\n\t\t      <td></td>\r\n\t\t      <td></td>\r\n\t\t      <td></td>\r\n\t\t      <td></td>\r\n\t\t      <td></td>\r\n\t\t      <td></td>\r\n\t\t      <td></td>\r\n\t\t      <td></td>\r\n\t\t    </tr>\r\n\t\t    <tr>\r\n\t\t      <th scope=\"row\">2</th>\r\n\t\t      <td></td>\r\n\t\t      <td></td>\r\n\t\t      <td></td>\r\n\t\t      <td></td>\r\n\t\t      <td></td>\r\n\t\t      <td></td>\r\n\t\t      <td></td>\r\n\t\t      <td></td>\r\n\t\t    </tr>\r\n\t\t    <tr>\r\n\t\t      <th scope=\"row\">3</th>\r\n\t\t      <td></td>\r\n\t\t      <td></td>\r\n\t\t      <td></td>\r\n\t\t      <td></td>\r\n\t\t      <td></td>\r\n\t\t      <td></td>\r\n\t\t      <td></td>\r\n\t\t      <td></td>\r\n\t\t      <td></td>\r\n\t\t    </tr>\r\n\t\t  </tbody>\r\n\t\t   -->\r\n\t\t\t</table>"

/***/ }),

/***/ "../../../../../src/app/policy-view-component/policy-view-forms-component/policy-details/policy-details.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
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
    function PolicyDetailsComponent(modalService) {
        this.modalService = modalService;
        this.plus = true;
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
    };
    return PolicyDetailsComponent;
}());
PolicyDetailsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-policy-details',
        template: __webpack_require__("../../../../../src/app/policy-view-component/policy-view-forms-component/policy-details/policy-details.component.html"),
        styles: [__webpack_require__("../../../../../src/app/policy-view-component/policy-view-forms-component/policy-details/policy-details.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */]) === "function" && _a || Object])
], PolicyDetailsComponent);

var _a;
//# sourceMappingURL=policy-details.component.js.map

/***/ }),

/***/ "../../../../../src/app/policy-view-component/policy-view-forms-component/policy-view-forms-component.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".forms{\r\n    padding: 20px;\r\n    border-radius: 10px;\r\n    border: 1px solid transparent;\r\n    margin: 20px;\r\n    background-color: #EEEEEE;\r\n    overflow: hidden;\r\n}\r\n\r\n.asterisk{\r\n\tdisplay: inline;\r\n\tcolor: red;\r\n\tmargin-left: 2px;\r\n}\r\n\r\n.policies{\r\n\tmargin-top: 15px;\r\n}\r\n\r\ninput[readonly] {\r\n\tbackground-color: #ffffff;\r\n\t}\r\n\r\n\r\n.ban{\r\n\tcolor: #D91E18;\r\n}\r\n\r\n.hover-icon{\r\n\tvisibility: hidden;\r\n}\r\n\r\n.hover-icon:hover{\r\n\tvisbility: visible;\r\n}\r\n\r\n.help{\r\n\tfont-size: 15px;\r\n\tcolor: #3A539B;\r\n}\r\n\r\n.nav-link{\r\n\tcolor: black;\r\n\tmargin-left: 10px;\r\n}\r\n\r\n.table{\r\n\t\r\n}\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/policy-view-component/policy-view-forms-component/policy-view-forms-component.component.html":
/***/ (function(module, exports) {

module.exports = "<form class=\"forms\">\r\n\t<div class=\"form-row\">\r\n\t\t<div class=\"form-group col-md-6\">\r\n\t\t\t<label class=\"label-form\" for=\"definitiveSource\"><b>Definitive Source</b></label><div class=\"asterisk\">*</div>\r\n              <select class=\"form-control\" id=\"definitiveSource\" required (change)=\"selectDefinitive($event.target.value)\">\r\n                <option selected>Choose...</option>\r\n                <option value=\"VITA\">VITA</option>\r\n              </select>\r\n\t\t</div>\r\n\t\t<div class=\"form-group col-md-6\">\r\n\t\t\t<label class=\"label-form\" for=\"typePolicy\"><b>Type/Policy</b></label><div class=\"asterisk\">*</div>\r\n              <select class=\"form-control\" id=\"typePolicy\" required (change)=\"selectType($event.target.value)\">\r\n                <option selected>Choose...</option>\r\n                <option value=\"IT Information Security Standard (SEC501-09.1)\">IT Information Security Standard (SEC501-09.1)</option>\r\n              </select>\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"prepopulated\" *ngIf = \"definitive == 'VITA' && policy== true \">\r\n\t\t<div class=\"model-solution-row form-row\">\r\n            \t<div class=\"model form-group col-md-6\">\r\n            <label class=\"label-form\" for=\"definitiveSourceInput\">Definitive Source</label><div class=\"asterisk\">*</div>\r\n              <input type=\"text\" class=\"edit-disable form-control\" id=\"definitiveSourceInput\" readonly value=\"VITA\">\r\n              <!-- <div class=\"hover-icon\"><fa class=\"ban\" [name]=\"'ban'\"></fa></div>-->\r\n            \t</div>\r\n            \t<div class=\"version form-group col-md-6\">\r\n            \t\t<label class=\"label-form\" for=\"updatedBy\">Updated By</label><div class=\"asterisk\">*</div>\r\n\t\t              <input type=\"text\" class=\"edit-disable form-control\" id=\"updatedBy\" readonly value=\"Sunny Singh\">\r\n            \t</div>\r\n            \t<div class=\"form-group col-md-6\">\r\n            <label class=\"label-form\" for=\"Type/Policy\">Type/Policy</label><div class=\"asterisk\">*</div>\r\n              <input type=\"text\" class=\"edit-disable form-control\" id=\"Type/Policy\" readonly value=\"IT Information Security Standard (SEC501-09.1)\">\r\n            \t</div>\r\n            \t<div class=\"form-group col-md-6\">\r\n            \t\t<label class=\"label-form\" for=\"updtedAt\">Updated At</label><div class=\"asterisk\">*</div>\r\n\t\t              <input type=\"text\" class=\"edit-disable form-control\" id=\"updatedAt\" readonly value=\"14-05-2018\">\r\n            \t</div>\r\n            </div>\r\n\t</div>\r\n</form>\r\n<div class=\"forms\" *ngIf = \"definitive == 'VITA' && policy== true \">\r\n\t<div class=\"policy-section\">\r\n\t\t<div><ul class=\"nav nav-tabs\">\r\n\t\t  <li class=\"nav-item\">\r\n\t\t    <a class=\"nav-link active\" routerLinkActive=\"active\" routerLink=\"policyDetails\" [routerLinkActiveOptions]=\"{exact: true}\"><fa class=\"help\" [name]=\"'info-circle'\"></fa>Policy Details</a>\r\n\t\t  </li>\r\n\t\t  <li class=\"nav-item\">\r\n\t\t    <a class=\"nav-link\" routerLinkActive=\"active\" routerLink=\"review\"><fa class=\"help\" [name]=\"'info-circle'\"></fa>Review Section</a>\r\n\t\t  </li>\r\n\t\t  <li class=\"nav-item\">\r\n\t\t    <a class=\"nav-link\" routerLinkActive=\"active\" routerLink=\"documents\"><fa class=\"help\" [name]=\"'info-circle'\"></fa>Documents</a>\r\n\t\t  </li>\r\n\t\t  <li class=\"nav-item\">\r\n\t\t    <a class=\"nav-link\" routerLinkActive=\"active\" routerLink=\"applications\"><fa class=\"help\" [name]=\"'info-circle'\"></fa>Applications</a>\r\n\t\t  </li>\r\n\t\t</ul>\r\n\t\t</div>\r\n\t\t<router-outlet></router-outlet>\r\n\t</div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/policy-view-component/policy-view-forms-component/policy-view-forms-component.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
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
    function PolicyViewFormsComponentComponent() {
        this.policy = false;
    }
    PolicyViewFormsComponentComponent.prototype.ngOnInit = function () {
    };
    PolicyViewFormsComponentComponent.prototype.selectDefinitive = function (definitive) {
        this.definitive = definitive;
    };
    PolicyViewFormsComponentComponent.prototype.selectType = function (policy) {
        this.policy = true;
    };
    return PolicyViewFormsComponentComponent;
}());
PolicyViewFormsComponentComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-policy-view-forms-component',
        template: __webpack_require__("../../../../../src/app/policy-view-component/policy-view-forms-component/policy-view-forms-component.component.html"),
        styles: [__webpack_require__("../../../../../src/app/policy-view-component/policy-view-forms-component/policy-view-forms-component.component.css")]
    }),
    __metadata("design:paramtypes", [])
], PolicyViewFormsComponentComponent);

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

module.exports = "<div class=\"container\">\r\n    <div class=\"row\">\r\n        <div class=\"col-lg-12\">\r\n            <table border=\"2px\" style=\"width:100%;\">\r\n                <thead style=\"background-color: gray\">\r\n                    <th>name</th>\r\n                    <th>capital</th>\r\n                    <th>flag</th>\r\n                </thead>\r\n                <tbody>\r\n                \t<tr *ngFor=\"let x of data\">\r\n                \t\t<td>x.vendorsDTOs.name</td>\r\n                </tbody>\r\n                </table>\r\n               \r\n        \r\n       "

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
exports.push([module.i, "table {\r\n  display: table;\r\n\r\n}\r\n\r\n\r\nth {\r\n  font-weight: bold;\r\n  color: black;\r\n  background-color: #cecfd5;\r\n  text-align: left;\r\n \r\n\r\n}\r\ntbody tr:nth-child(even) {\r\n  background-color: #ffffff; \r\n  \r\n}\r\ntd {\r\n  text-align: left;\r\n  border-bottom: 1px solid #cecfd5;\r\n  border-right: 1px solid #cecfd5;\r\n}\r\ntd:first-child {\r\n  border-left: 1px solid #cecfd5;\r\n}\r\n\r\n\r\n\r\n.forms{\r\n  padding: 20px;\r\n  border-radius: 10px;\r\n  border: 1px solid transparent;\r\n  margin: 20px;\r\n  background-color: #EEEEEE;\r\n}\r\n\r\ntable-fixed thead {\r\n  width: 97%;\r\n}\r\n.table-fixed tbody {\r\n  height: 230px;\r\n  overflow-y: auto;\r\n  width: 100%;\r\n}\r\n.table-fixed thead, .table-fixed tbody, .table-fixed tr, .table-fixed td, .table-fixed th {\r\n  display: block;\r\n}\r\n.table-fixed tbody td, .table-fixed thead > tr> th {\r\n  float: left;\r\n  border-bottom-width: 0;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n.rTable {\r\n  display: table;\r\n  width: 100%;\r\n  margin-left:50%;\r\n\r\n}\r\n.rTableRow {\r\n  display: table-row;\r\n\r\n}\r\n\r\n\r\n\r\n\r\n.rTableHeading {\r\n  display: table-header-group;\r\n\r\n}\r\n.rTableCell, .rTableHead {\r\n  display: table-cell;\r\n  padding: 10px 10px;\r\n  border: 1px solid ;\r\n\r\n}\r\n.rTableHead{\r\n\r\n  font-weight: bold;\r\n\r\n}\r\n\r\n.rTableHeading {\r\n  display: table-header-group;\r\n  /*background-color: white;*/\r\n  font-weight: bold;\r\n}\r\n.rTableFoot {\r\n  display: table-footer-group;\r\n  font-weight: bold;\r\n\r\n}\r\n.rTableBody {\r\n  display: table-row-group;\r\n}\r\n\r\n*{\r\n  box-sizing: border-box;\r\n  margin: 0;\r\n  /* padding: 0;*/\r\n}\r\n\r\n.navigate{\r\n  margin: 15px;\r\n  padding: 5px;\r\n}\r\n\r\n.form-options{\r\n  float: left;\r\n  margin-right: 15px;\r\n  margin-top: -15px;\r\n  padding: 5px;\r\n}\r\n\r\n.icons{\r\n  vertical-align: middle;\r\n  font-size: 20px;\r\n  margin-top: -20px;\r\n  padding: 2px;\r\n  margin-left: 5px;\r\n}\r\n\r\n.home-icon{\r\n  color: #3A539B;\r\n}\r\n\r\n.edit-icon{\r\n  /*margin-left: 10px;*/\r\n  color: #3A539B;\r\n}\r\n\r\n.left-icon{\r\n  /*margin-left: 10px;*/\r\n  color: #3A539B;\r\n}\r\n\r\n.save-icon{\r\n  color: #3A539B;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n.p-4{\r\n  background-color: #2C3E50;\r\n  border-top: 1px solid #ECF0F1;\r\n}\r\n\r\nnav{\r\n  background-color: #3A539B;\r\n  text-align: center;\r\n  position: relative;\r\n}\r\n\r\n.heading{\r\n  color: white;\r\n}\r\n\r\nimg{\r\n  width: 10%;\r\n\r\n}\r\n\r\n.user{\r\n  position: absolute;\r\n  font-size: 10px;\r\n  color: white;\r\n  right: 50px;\r\n  margin-right: 10px;\r\n}\r\n\r\n.down-icon{\r\n  font-size: 10px;\r\n  margin-left: 3px;\r\n  color: white;\r\n}\r\n\r\n.navigate-toggle{\r\n  color: white;\r\n}\r\n\r\n.btn{\r\n  margin-left: 30px;\r\n}\r\n\r\nh1{\r\n  color: white;\r\n}\r\n\r\nspan{\r\n  color: white;\r\n}\r\n\r\n.collapse-div{\r\n  background-color: #59ABE3;\r\n}\r\n\r\n.first-row{\r\n  position: absolute;\r\n  top: 20%;\r\n  left: 5%;\r\n}\r\n\r\n\r\n.card-heading{\r\n  background-color: #3A539B;\r\n  border-radius: 6%;\r\n}\r\n\r\n.card-title{\r\n  padding: 4%;\r\n  color: white;\r\n}\r\n\r\n\r\n\r\n\r\n.card-link:hover{\r\n  color: white;\r\n  background-color: #00B16A;\r\n}\r\n\r\n.second-row{\r\n  position: absolute;\r\n  top: 60%;\r\n  left: 5%;\r\n}\r\n\r\n\r\n\r\n\r\n.table-fixed thead {\r\n  width: 97%;\r\n}\r\n.table-fixed tbody {\r\n  height: 230px;\r\n  overflow-y: auto;\r\n  width: 100%;\r\n}\r\n.table-fixed thead, .table-fixed tbody, .table-fixed tr, .table-fixed td, .table-fixed th {\r\n  display: block;\r\n}\r\n.table-fixed tbody td, .table-fixed thead > tr> th {\r\n  float: left;\r\n  border-bottom-width: 0;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n.fixed_header tbody{\r\n  display:block;\r\n  width: 100%;\r\n  overflow: auto;\r\n  height: 300px;\r\n}\r\n\r\n.fixed_header thead tr {\r\n  display: block;\r\n}\r\n\r\n.fixed_header thead {\r\n  background: black;\r\n  color:#fff;\r\n}\r\n\r\n.fixed_header th, .fixed_header td {\r\n  padding: 5px;\r\n  text-align: left;\r\n  width: 500px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/solution-view-component/solution-table/solution-table.component.html":
/***/ (function(module, exports) {

module.exports = "<form class=\"forms\">\r\n  <table class=\"fixed_header\">\r\n    <thead>\r\n    <tr>\r\n      <th>Solution/Modal</th>\r\n      <th>Vendor</th>\r\n      <th>Equipment Type</th>\r\n      <th>System Type</th>\r\n      <th>Certificate Date</th>\r\n      <th>Due Date</th> \r\n\r\n\r\n    </tr>\r\n    </thead>\r\n    <tbody>\r\n    <tr *ngFor=\"let solution of solutions\">\r\n                         <td><a routerLink=\"/editSolutions/{{ solution.solutionId }}\">{{ solution.name }}</a></td>\r\n                         <td>{{ solution.vendor.name }}</td>\r\n                         <td>{{solution.solutionTypeName }}</td>\r\n                         <td>{{ solution.systemTypeDTO.name }}</td>\r\n                         <td>{{ solution.certDt }}</td>\r\n                         <td>{{ solution.certRenewalDueDt }}</td>\r\n                    </tr>\r\n    </tbody>\r\n  </table>\r\n</form>\r\n"

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
exports.push([module.i, ".forms{\r\n  padding: 20px;\r\n  border-radius: 10px;\r\n  border: 1px solid transparent;\r\n  margin: 20px;\r\n  background-color: #EEEEEE;\r\n\r\n\r\n\r\n}\r\n\r\n\r\n.table-fixed thead {\r\n  width: 97%;\r\n}\r\n.table-fixed tbody {\r\n  height: 230px;\r\n  overflow-y: auto;\r\n  width: 100%;\r\n}\r\n.table-fixed thead, .table-fixed tbody, .table-fixed tr, .table-fixed td, .table-fixed th {\r\n  display: block;\r\n}\r\n.table-fixed tbody td, .table-fixed thead > tr> th {\r\n  float: left;\r\n  border-bottom-width: 0;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n.fixed_header tbody{\r\n  display:block;\r\n  width: 100%;\r\n  overflow: auto;\r\n  height: 300px;\r\n}\r\ntbody tr:nth-child(even) {\r\n  background: #eeeeee; /* Old browsers */ /* FF3.6-15 */ /* Chrome10-25,Safari5.1-6 */\r\n  background: linear-gradient(to bottom, #eeeeee 0%,#cccccc 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */\r\n  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#eeeeee', endColorstr='#cccccc',GradientType=0 ); /* IE6-9 */\r\n}\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/solution-view-component/solution-view-component.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navigation-component></app-navigation-component>\r\n<app-option-list></app-option-list>\r\n<app-solution-table></app-solution-table>\r\n<!-- <form class=\"forms\">\r\n<div class=\"container\">\r\n    <div class=\"row\">\r\n        <div class=\"col-lg-12\">\r\n            <table class=\"fixed_header\">\r\n                <thead style=\"background-color: gray\">\r\n                    <th>Vendor Name</th>\r\n                    <th>Email Id</th>\r\n                    <th>Phone Number</th>\r\n                    \r\n                   \r\n                </thead>\r\n                <tbody>\r\n                    <tr *ngFor=\"let vendor of vendors\">\r\n                         <td><a routerLink=\"/vendors\">{{ vendor.name }}</a></td>\r\n                         <td>{{ vendor.vendorContact.emailId }}</td>\r\n                          <td>{{ vendor.vendorContact.phoneNumber }}</td>\r\n                         \r\n                    </tr>\r\n                </tbody>\r\n         </table>\r\n        </div>\r\n    </div>\r\n</div>\r\n</form> -->"

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

module.exports = "<p>\r\n  contact-component works!\r\n</p>\r\n"

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
exports.push([module.i, "form{\r\n    padding: 20px;\r\n    border-radius: 10px;\r\n    border: 1px solid transparent;\r\n    margin: 20px;\r\n    background-color: #EEEEEE;\r\n    overflow: hidden;\r\n}\r\n\r\n.page-description{\r\n    text-align: center;\r\n    /*padding: 2%;*/\r\n    margin-top: 0px;\r\n    margin-bottom: 10px;\r\n}\r\n\r\n@keyframes slideInFromCenter {\r\n  0% {\r\n    transform: scale(0,1);\r\n  }\r\n  100% {\r\n    transform: scale(1,1);\r\n  }\r\n}\r\n\r\n.after-heading{\r\n\twidth: 10%;\r\n\tmargin: auto;\r\n\tbackground-color: #3A539B;\r\n\tanimation: 1s ease-out 0s 1 slideInFromCenter;\r\n\t/*border-radius: 10px solid #3A539B;*/\r\n\t/*margin-bottom: 15px;*/\r\n}\r\n\r\n.tip{\r\n    width: 100%;\r\n}\r\n\r\n.tip-text{\r\n    background-color: #F8FFAE;\r\n    padding: 5px;\r\n    border-radius: 10px;\r\n    margin-left: 5px;\r\n    color:  #3A539B;\r\n}\r\n\r\n.light-bulb{\r\n    margin-right: 3px;\r\n    padding: 2px;\r\n    margin-left: 3px;\r\n    color:  #3A539B;\r\n}\r\n\r\n.buttons{\r\n\tfloat: right;\r\n}\r\n\r\nh4{\r\n\tfont-size: 18px;\r\n\tfont-weight: 500;\r\n}\r\n\r\nlabel{\r\n\tfont-weight: 300;\r\n\tfont-size: 15px;\r\n}\r\n\r\n.asterisk{\r\n\tdisplay: inline;\r\n\tcolor: red;\r\n\tmargin-left: 2px;\r\n}\r\n\r\n.asterisk-inline{\r\n\tfloat: right;\r\n}\r\n\r\n/*select, option{\r\n\twidth: 120px;\r\n\theight: 35px;\r\n\tborder-radius: 4px;\r\n\tborder: 1px solid rgba(0,0,0,.15);\r\n\tmargin-left: 5px;\r\n}\r\n\r\n/*.label-form{\r\n\tmargin-right: 5px;\r\n}*/\r\n\r\n.model-solution-row{\r\n\tpadding: 1%;\r\n}\r\n\r\n.second-row{\r\n\tmargin-top: 1px;\r\n\tpadding: 1%;\r\n}\r\n\r\n.installation{\r\n\tpadding: 1%;\r\n}\r\n\r\n.hosting-notes{\r\n\tdisplay: block;\r\n\t/*margin-top: 20px;*/\r\n}\r\n\r\n.certification-test{\r\n\tmargin-top: 10px;\r\n\tpadding: 1%;\r\n}\r\n\r\n.attachments-div{\r\n\tmargin-top: 25px;\r\n}\r\n\r\n.btn{\r\n\tbackground-color: #3A539B;\r\n\tborder-color: #3A539B;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/solutions/solutions-forms-component/solutions-forms-component.component.html":
/***/ (function(module, exports) {

module.exports = "<form (ngSubmit)=\"onSubmit()\" #form=\"ngForm\">\r\n\t\t\t<div class=\"page-description\"><h3>Solutions</h3>\r\n    \t\t<hr class=\"after-heading\" />\r\n    \t\t</div>\r\n        \t<div class=\"tip\"><p class=\"tip-text\"><fa class=\"light-bulb\" [name]=\"'lightbulb-o'\"></fa>Tip:</p></div>\r\n        \t<h4>General Information</h4>\r\n            <div class=\"model-solution-row form-row\">\r\n            \t<div class=\"model form-group col-md-6\">\r\n            <label class=\"label-form\" for=\"modelSolution\"><b>Model/Solution</b></label><div class=\"asterisk\">*</div>\r\n              <input type=\"text\" class=\"asterisk form-control\" id=\"modelSolution\" ngModel name=\"modelSolution\" required>\r\n            \t</div>\r\n            \t<div class=\"version form-group col-md-6\">\r\n            \t\t<label class=\"label-form\" for=\"version\"><b>Version</b></label><div class=\"asterisk\">*</div>\r\n\t\t              <input type=\"text\" class=\"asterisk form-control\" id=\"version\" ngModel name=\"version\" required>\r\n            \t</div>\r\n            \t<div class=\"form-group col-md-6\">\r\n            <label class=\"label-form\" for=\"systemType\"><b>System Type</b></label><div class=\"asterisk\">*</div>\r\n              <select class=\"form-control\" id=\"systemType\" ngModel name=\"systemType\" required>\r\n                <option selected>Choose...</option>\r\n                <option value=\"1\">EVS</option>\r\n                <option value=\"2\">Two</option>\r\n                <option value=\"3\">Three</option>\r\n              </select>\r\n            \t</div>\r\n            \t<div class=\"form-group col-md-6\">\r\n            \t\t<label class=\"label-form\" for=\"equipmentType\"><b>Equipment Type</b></label><div class=\"asterisk\">*</div>\r\n\t\t              <select class=\"form-control\" id=\"equipmentType\" ngModel name=\"equipmentType\" required>\r\n\t\t                <option selected>Choose...</option>\r\n\t\t                <option value=\"1\">Optical/Digital Scan</option>\r\n\t\t                <option value=\"2\">Two</option>\r\n\t\t                <option value=\"3\">Three</option>\r\n\t\t              </select>\r\n            \t</div>\r\n            \t<div class=\"form-group col-md-6\">\r\n            \t\t<label class=\"label-form\" for=\"vendor\"><b>Vendor</b></label><div class=\"asterisk\">*</div>\r\n\t\t              <select class=\"form-control\" id=\"vendor\" ngModel name=\"vendor\" required>\r\n\t\t                <option selected>Choose...</option>\r\n\t\t                <option value=\"1\">Dominion Voting</option>\r\n\t\t                <option value=\"2\">Two</option>\r\n\t\t                <option value=\"3\">Three</option>\r\n\t\t              </select>\r\n            \t\t\r\n            \t</div>\r\n            </div>\r\n        \t<!-- <div class=\"second-row form-row\">\r\n            \t<div class=\"form-group col-md-6\">\r\n            <label class=\"label-form\" for=\"systemType\"><b>System Type</b></label><div class=\"asterisk\">*</div>\r\n              <select class=\"form-control\" id=\"systemType\" required>\r\n                <option selected>Choose...</option>\r\n                <option value=\"1\">EVS</option>\r\n                <option value=\"2\">Two</option>\r\n                <option value=\"3\">Three</option>\r\n              </select>\r\n            \t</div>\r\n            \t<div class=\"form-group col-md-6\">\r\n            \t\t<label class=\"label-form\" for=\"equipmentType\"><b>Equipment Type</b></label><div class=\"asterisk\">*</div>\r\n\t\t              <select class=\"form-control\" id=\"equipmentType\" required>\r\n\t\t                <option selected>Choose...</option>\r\n\t\t                <option value=\"1\">Optical/Digital Scan</option>\r\n\t\t                <option value=\"2\">Two</option>\r\n\t\t                <option value=\"3\">Three</option>\r\n\t\t              </select>\r\n            \t</div>\r\n            \t<div class=\"form-group col-md-6\">\r\n            \t\t<label class=\"label-form\" for=\"vendor\"><b>Vendor</b></label><div class=\"asterisk\">*</div>\r\n\t\t              <select class=\"form-control\" id=\"vendor\" required>\r\n\t\t                <option selected>Choose...</option>\r\n\t\t                <option value=\"1\">Dominion Voting</option>\r\n\t\t                <option value=\"2\">Two</option>\r\n\t\t                <option value=\"3\">Three</option>\r\n\t\t              </select>\r\n            \t\t\r\n            \t</div>\r\n            </div> -->\r\n            <hr />\r\n           <h4>Installation and Hosting</h4>\r\n            <div class=\"installation form-group col-md-6\">\r\n            <label for=\"hostingType\"><b>Hosting Type</b></label><div class=\"asterisk\">*</div>\r\n            <select class=\"form-control\" id=\"hostingType\" ngModel name=\"hostingType\" required>\r\n\t\t                <option selected>Choose...</option>\r\n\t\t                <option value=\"1\">Not Applicable</option>\r\n\t\t                <option value=\"2\">Two</option>\r\n\t\t                <option value=\"3\">Three</option>\r\n\t\t              </select>\r\n            </div>\r\n            <div class=\"installation form-group\">\r\n            <label class=\"hosting-notes\" for=\"hostingNotes\"><b>Hosting Notes</b></label><!-- <div class=\"asterisk-inline asterisk\">*</div> -->\r\n            <textarea cols=\"156\" rows=\"7\" id=\"hostingNotes\" ngModel name=\"hostingNotes\" required></textarea>\r\n          </div>\r\n            <!-- <p><b>Hosting Notes</b></p>\r\n            <textarea cols=\"100\" rows=\"7\" id=\"hostingNotes\"></textarea> -->\r\n            <hr />\r\n            <h4>Certification Information</h4>\r\n            <div class=\"certification-test form-row\">\r\n            <div class=\"form-group col-md-6\">\r\n                <label for=\"approvedDate\"><b>DoEL Approved Date</b></label>\r\n                <my-date-picker name=\"myname\"></my-date-picker> \r\n                <!-- <input type=\"date\" class=\"form-control\" id=\"approvedDate\"> -->\r\n            </div>\r\n            <div class=\"form-group col-md-6\">\r\n                <label for=\"dueDate\"><b>Renewal Due Date</b></label>\r\n                <my-date-picker name=\"myname\"></my-date-picker> \r\n                <!-- <input type=\"date\" class=\"form-control\" id=\"dueDate\"> -->\r\n            </div>\r\n         </div>\r\n         <hr />\r\n          <h4>Voting System Test Laboratory - VSTL</h4>\r\n          <div class=\"certification-test form-group col-md-6\">\r\n            <label for=\"label-form labVendor\"><b>Lab Vendor</b></label>\r\n            <select class=\"form-control\" id=\"labVendor\" ngModel name=\"labVendor\" (change)=\"labContact($event.target.value)\">\r\n\t\t                <option selected>Choose...</option>\r\n\t\t                <option value=\"PROV&V\">PROV&V</option>\r\n\t\t                <option value=\"SLI\">SLI</option>\r\n\t\t                <option value=\"Wyle Laboratories/NTS\">Wyle Laboratories/NTS</option>\r\n\t\t              </select>\r\n          </div>\r\n          <div class=\"contact\" *ngIf=\"labForm ==='PROV&V'\">\r\n          \t<div class=\"certification-test form-row\">\r\n            <div class=\"form-group col-md-6\">\r\n                <label for=\"firstName\"><b>First Name</b></label><div class=\"asterisk\">*</div>\r\n                <input type=\"text\" class=\"asterisk form-control\" id=\"firstName\" ngModel name=\"firstName\" required>\r\n            </div>\r\n            <div class=\"form-group col-md-6\">\r\n                <label for=\"lastName\"><b>Last Name</b></label><div class=\"asterisk\">*</div>\r\n                <input type=\"text\" class=\"asterisk form-control\" id=\"lastName\" ngModel name=\"lastName\" required>\r\n            </div>\r\n            <div class=\"form-group col-md-6\">\r\n                <label for=\"email\"><b>Email Id</b></label><div class=\"asterisk\">*</div>\r\n                <input type=\"email\" class=\"asterisk form-control\" id=\"email\" ngModel name=\"email\" required>\r\n            </div>\r\n            <div class=\"form-group col-md-6\">\r\n                <label for=\"phone\"><b>Phone Number</b></label><div class=\"asterisk\">*</div>\r\n                <input type=\"text\" class=\"asterisk form-control\" id=\"phone\" ngModel name=\"phone\" required>\r\n            </div>\r\n         </div>\r\n          <!-- <div class=\"certification-test form-row\">\r\n            <div class=\"form-group col-md-6\">\r\n                <label for=\"email\"><b>Email Id</b></label><div class=\"asterisk\">*</div>\r\n                <input type=\"email\" class=\"asterisk form-control\" id=\"email\" required>\r\n            </div>\r\n            <div class=\"form-group col-md-6\">\r\n                <label for=\"phone\"><b>Phone Number</b></label><div class=\"asterisk\">*</div>\r\n                <input type=\"text\" class=\"asterisk form-control\" id=\"phone\" required>\r\n            </div>\r\n         </div> -->\r\n          </div>\r\n         <hr />\r\n         <h4>Attachments</h4>\r\n         <div class=\"attachments-div\"><!-- <p class=\"attachments\"><b>Attachments</b> --><!-- </p> -->\r\n            \t<input type=\"file\">\t\r\n            </div>\r\n         <div class=\"buttons\">\r\n         \t<button type=\"cancel\" class=\"cancel btn btn-primary\">Cancel</button>\r\n        \t<button type=\"submit\" class=\"submit btn btn-primary\" [disabled]=\"!form.valid\">Submit</button>\r\n        </div>\r\n</form>"

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
exports.push([module.i, "form{\r\n    padding: 20px;\r\n    border-radius: 10px;\r\n    border: 1px solid transparent;\r\n    margin: 20px;\r\n    background-color: #EEEEEE;\r\n    overflow: hidden;\r\n}\r\n\r\n.page-description{\r\n    text-align: center;\r\n    /*padding: 2%;*/\r\n    margin-top: 0px;\r\n    margin-bottom: 10px;\r\n}\r\n\r\n@keyframes slideInFromCenter {\r\n  0% {\r\n    transform: scale(0,1);\r\n  }\r\n  100% {\r\n    transform: scale(1,1);\r\n  }\r\n}\r\n\r\n.after-heading{\r\n\twidth: 10%;\r\n\tmargin: auto;\r\n\tbackground-color: #3A539B;\r\n\tanimation: 1s ease-out 0s 1 slideInFromCenter;\r\n\t/*border-radius: 10px solid #3A539B;*/\r\n\t/*margin-bottom: 15px;*/\r\n}\r\n\r\n.tip{\r\n    width: 100%;\r\n}\r\n\r\n.tip-text{\r\n    background-color: #F8FFAE;\r\n    padding: 5px;\r\n    border-radius: 10px;\r\n    margin-left: 5px;\r\n    color:  #3A539B;\r\n}\r\n\r\n.light-bulb{\r\n    margin-right: 3px;\r\n    padding: 2px;\r\n    margin-left: 3px;\r\n    color:  #3A539B;\r\n}\r\n\r\n.buttons{\r\n\tfloat: right;\r\n}\r\n\r\nh4{\r\n\tfont-size: 18px;\r\n\tfont-weight: 500;\r\n}\r\n\r\nlabel{\r\n\tfont-weight: 300;\r\n\tfont-size: 15px;\r\n}\r\n\r\n.asterisk{\r\n\tdisplay: inline;\r\n\tcolor: red;\r\n\tmargin-left: 2px;\r\n}\r\n\r\n.asterisk-inline{\r\n\tfloat: right;\r\n}\r\n\r\n/*select, option{\r\n\twidth: 120px;\r\n\theight: 35px;\r\n\tborder-radius: 4px;\r\n\tborder: 1px solid rgba(0,0,0,.15);\r\n\tmargin-left: 5px;\r\n}\r\n\r\n/*.label-form{\r\n\tmargin-right: 5px;\r\n}*/\r\n\r\n.model-solution-row{\r\n\tpadding: 1%;\r\n}\r\n\r\n.second-row{\r\n\tmargin-top: 1px;\r\n\tpadding: 1%;\r\n}\r\n\r\n.installation{\r\n\tpadding: 1%;\r\n}\r\n\r\n.hosting-notes{\r\n\tdisplay: block;\r\n\t/*margin-top: 20px;*/\r\n}\r\n\r\n.certification-test{\r\n\tmargin-top: 10px;\r\n\tpadding: 1%;\r\n}\r\n\r\n.attachments-div{\r\n\tmargin-top: 25px;\r\n}\r\n\r\n.btn{\r\n\tbackground-color: #3A539B;\r\n\tborder-color: #3A539B;\r\n}\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/solutions/solutions.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navigation-component></app-navigation-component>\r\n    <app-option-list></app-option-list>\r\n    <!--<div class=\"first-div\">\r\n        <div class=\"model\"><p><b>Model/Solution: Democracy Suite</b></p></div>\r\n        <div class=\"version\"><p><b>Version: D-Suite 4.14-E System</b></p></div>\r\n        </div>\r\n        <hr />-->\r\n   <!--  <app-solutions-forms-component></app-solutions-forms-component> -->\r\n   <form (ngSubmit)=\"createSolution()\" enctype=\"multipart/form-data\" #form=\"ngForm\">\r\n\t\t\t<div class=\"page-description\"><h3>Solutions</h3>\r\n    \t\t<hr class=\"after-heading\" />\r\n    \t\t</div>\r\n        \t<div class=\"tip\"><p class=\"tip-text\"><fa class=\"light-bulb\" [name]=\"'lightbulb-o'\"></fa>Tip:</p></div>\r\n        \t<h4>General Information</h4>\r\n            <div class=\"model-solution-row form-row\">\r\n            \t<div class=\"model form-group col-md-6\">\r\n            <label class=\"label-form\" for=\"modelSolution\"><b>Model/Solution</b></label><div class=\"asterisk\">*</div>\r\n              <input type=\"text\" class=\"form-control\" name=\"solutionName\" id=\"modelSolution\" (change)=\"solution.name = $event.target.value\" required>\r\n            \t</div>\r\n            \t<div class=\"version form-group col-md-6\">\r\n            \t\t<label class=\"label-form\" for=\"version\"><b>Version</b></label><div class=\"asterisk\">*</div>\r\n\t\t              <input type=\"text\" class=\"form-control\" name=\"versionNumber\" id=\"version\" (change)=\"solution.versionNumber = $event.target.value\" required>\r\n            \t</div>\r\n            \t<div class=\"form-group col-md-6\">\r\n            <label class=\"label-form\" for=\"systemType\"><b>System Type</b></label><div class=\"asterisk\">*</div>\r\n              <select class=\"form-control\" id=\"systemType\" (change)=\"solution.systemTypeDTO.systemTypeId = $event.target.value\"  required>\r\n               <option *ngFor=\"let systemType of systemTypeDTO\" value=\"{{ systemType.systemTypeId }}\">\r\n\t\t                {{ systemType.name }} \r\n\t\t                </option> \r\n              </select>\r\n            \t</div>\r\n            \t<div class=\"form-group col-md-6\">\r\n            \t\t<label class=\"label-form\" for=\"equipmentType\"><b>Equipment Type</b></label><div class=\"asterisk\">*</div>\r\n\t\t              <select class=\"form-control\" id=\"equipmentType\" (change)=\"solution.solutionType = $event.target.value\" required>\r\n\t\t                <option *ngFor=\"let equipmentType of solutionType\" value=\"{{ equipmentType.solutionTypeId }}\">\r\n\t\t               \t  {{ equipmentType.typeName }}\r\n\t\t              </select>\r\n            \t</div>\r\n            \t<div class=\"form-group col-md-6\">\r\n            \t\t<label class=\"label-form\" for=\"vendor\"><b>Vendor</b></label><div class=\"asterisk\">*</div>\r\n\t\t              <select class=\"form-control\" id=\"vendor\" (change)=\"solution.vendorId = $event.target.value\" required>\r\n\t\t           <option *ngFor=\"let vendor of vendorDTO\" value=\"{{ vendor.vendorId }}\">\r\n\t\t                {{ vendor.name }}\r\n\r\n\t\t                </option>\r\n\t\t                </select>\r\n            \t\t\r\n            \t</div>\r\n            </div>\r\n        \t<!-- <div class=\"second-row form-row\">\r\n            \t<div class=\"form-group col-md-6\">\r\n            <label class=\"label-form\" for=\"systemType\"><b>System Type</b></label><div class=\"asterisk\">*</div>\r\n              <select class=\"form-control\" id=\"systemType\" required>\r\n                <option selected>Choose...</option>\r\n                <option value=\"1\">EVS</option>\r\n                <option value=\"2\">Two</option>\r\n                <option value=\"3\">Three</option>\r\n              </select>\r\n            \t</div>\r\n            \t<div class=\"form-group col-md-6\">\r\n            \t\t<label class=\"label-form\" for=\"equipmentType\"><b>Equipment Type</b></label><div class=\"asterisk\">*</div>\r\n\t\t              <select class=\"form-control\" id=\"equipmentType\" required>\r\n\t\t                <option selected>Choose...</option>\r\n\t\t                <option value=\"1\">Optical/Digital Scan</option>\r\n\t\t                <option value=\"2\">Two</option>\r\n\t\t                <option value=\"3\">Three</option>\r\n\t\t              </select>\r\n            \t</div>\r\n            \t<div class=\"form-group col-md-6\">\r\n            \t\t<label class=\"label-form\" for=\"vendor\"><b>Vendor</b></label><div class=\"asterisk\">*</div>\r\n\t\t              <select class=\"form-control\" id=\"vendor\" required>\r\n\t\t                <option selected>Choose...</option>\r\n\t\t                <option value=\"1\">Dominion Voting</option>\r\n\t\t                <option value=\"2\">Two</option>\r\n\t\t                <option value=\"3\">Three</option>\r\n\t\t              </select>\r\n            \t\t\r\n            \t</div>\r\n            </div> -->\r\n            <hr />\r\n           <h4>Installation and Hosting</h4>\r\n            <div class=\"installation form-group col-md-6\">\r\n            <label for=\"hostingType\"><b>Hosting Type</b></label><div class=\"asterisk\">*</div>\r\n            <select class=\"form-control\" id=\"hostingType\" (change) = \"solution.hostingTypeDTO.hostingTypeId = $event.target.value\" required>\r\n\t\t                <option *ngFor=\"let hostingType of hostingTypeDTO\" value = \"{{ hostingType.hostingTypeId }}\">\r\n\t\t                {{ hostingType.name }}\r\n\t\t                </option>\r\n\t\t              </select>\r\n            </div>\r\n            <div class=\"installation form-group\">\r\n            <label class=\"hosting-notes\" for=\"hostingNotes\"><b>Hosting Notes</b></label><!-- <div class=\"asterisk-inline asterisk\">*</div> -->\r\n            <textarea cols=\"156\" rows=\"7\" id=\"hostingNotes\" required></textarea>\r\n            <div class=\"attachments-div\"><p class=\"attachments\"><b>Attachments</b></p>\r\n            \t<input type=\"file\" #fileInput (change)=\"createCertDTO($event,'hosting')\">\r\n            </div>\r\n          </div>\r\n            <!-- <p><b>Hosting Notes</b></p>\r\n            <textarea cols=\"100\" rows=\"7\" id=\"hostingNotes\"></textarea> -->\r\n            <hr />\r\n            <h4>Certification Information</h4>\r\n            <div class=\"certification-test form-row\">\r\n            <div class=\"form-group col-md-6\">\r\n                <label for=\"approvedDate\"><b>DoEL Approved Date</b></label>\r\n                <my-date-picker name=\"myname\"></my-date-picker> \r\n                <!-- <input type=\"date\" class=\"form-control\" id=\"approvedDate\"> -->\r\n            </div>\r\n            <div class=\"form-group col-md-6\">\r\n                <label for=\"dueDate\"><b>Renewal Due Date</b></label>\r\n                <my-date-picker name=\"myname\"></my-date-picker> \r\n                <!-- <input type=\"date\" class=\"form-control\" id=\"dueDate\"> -->\r\n            </div>\r\n         </div>\r\n         <hr />\r\n         <h4>Voting System Test Laboratory - VSTL</h4>\r\n          <div class=\"certification-test form-group col-md-6\">\r\n            <label for=\"label-form labVendor\"><b>Lab Vendor</b></label>\r\n            <select class=\"form-control\" id=\"labVendor\" (change) = \"solution.labVendorsDTO.labVendorId = $event.target.value\">\r\n\t\t                <option *ngFor=\"let lab of labVendorsDTO\" value = \"{{ lab.labVendorId }}\">\r\n\t\t                {{ lab.name }}\r\n\t\t                </option>\r\n\t\t              </select>\r\n          </div> \r\n        <div class=\"contact\" *ngIf=\"labForm =='PROV&V' || 'SLI' || 'Wyle Laboratories/NTS'\">\r\n        <!--  <div class=\"contact\"> -->\r\n          \t<div class=\"certification-test form-row\">\r\n            <div class=\"form-group col-md-6\">\r\n                <label for=\"firstName\"><b>First Name</b></label><div class=\"asterisk\">*</div>\r\n                <input type=\"text\" class=\"asterisk form-control\" id=\"firstName\" required>\r\n            </div>\r\n            <div class=\"form-group col-md-6\">\r\n                <label for=\"lastName\"><b>Last Name</b></label><div class=\"asterisk\">*</div>\r\n                <input type=\"text\" class=\"asterisk form-control\" id=\"lastName\" required>\r\n            </div>\r\n            <div class=\"form-group col-md-6\">\r\n                <label for=\"email\"><b>Email Id</b></label><div class=\"asterisk\">*</div>\r\n                <input type=\"email\" class=\"asterisk form-control\" id=\"email\" required>\r\n            </div>\r\n            <div class=\"form-group col-md-6\">\r\n                <label for=\"phone\"><b>Phone Number</b></label><div class=\"asterisk\">*</div>\r\n                <input type=\"text\" class=\"asterisk form-control\" id=\"phone\" required>\r\n            </div>\r\n         </div>  \r\n          <!-- <div class=\"certification-test form-row\">\r\n            <div class=\"form-group col-md-6\">\r\n                <label for=\"email\"><b>Email Id</b></label><div class=\"asterisk\">*</div>\r\n                <input type=\"email\" class=\"asterisk form-control\" id=\"email\" required>\r\n            </div>\r\n            <div class=\"form-group col-md-6\">\r\n                <label for=\"phone\"><b>Phone Number</b></label><div class=\"asterisk\">*</div>\r\n                <input type=\"text\" class=\"asterisk form-control\" id=\"phone\" required>\r\n            </div>\r\n         </div> -->\r\n          </div> \r\n         <hr />\r\n         <h4>Standard</h4>\r\n         <div class=\"installation form-group\">\r\n            <label class=\"hosting-notes\" for=\"standard\"><b>Notes</b></label>\r\n            <textarea cols=\"156\" rows=\"7\" id=\"standard\" required></textarea>\r\n            <div class=\"attachments-div\"><p class=\"attachments\"><b>Attachments</b></p>\r\n         <input type=\"file\" #fileInput (change)=\"createCertDTO($event,'standard')\">\r\n            </div>\r\n          </div>\r\n            <hr />\r\n        <h4>Patches</h4>\r\n         <div class=\"installation form-group\">\r\n            <label class=\"hosting-notes\" for=\"patches\"><b>Patches</b></label>\r\n            <textarea cols=\"156\" rows=\"7\" id=\"patches\" required></textarea>\r\n            <div class=\"attachments-div\"><p class=\"attachments\"><b>Attachments</b></p>\r\n         \t\t<input type=\"file\" #fileInput (change)=\"createCertDTO($event,'patches')\">\r\n            </div>\r\n          </div>\r\n            <hr />\r\n         <div>\r\n         \t<h4>Notes</h4>\r\n         <div class=\"installation form-group\">\r\n         <div class=\"attachments-div\"><p class=\"attachments\"><b>Attachments</b></p>\r\n         <input type=\"file\" #fileInput (change)=\"createCertDTO($event,'solution')\">\r\n            </div>\r\n          </div>\r\n         </div>\r\n            <hr />\r\n         <div class=\"buttons\">\r\n         \t<button type=\"cancel\" class=\"cancel btn btn-primary\">Cancel</button>\r\n        \t<!-- <button type=\"submit\" class=\"submit btn btn-primary\" [disabled]=\"!form.valid\">Submit</button> -->\r\n        \t<button type=\"submit\" class=\"submit btn btn-primary\">Submit</button>\r\n        </div>\r\n</form>"

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
    function SolutionsComponent(activatedRoute, _apiservice, http) {
        this.activatedRoute = activatedRoute;
        this._apiservice = _apiservice;
        this.http = http;
        this.files = [];
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
    SolutionsComponent.prototype.labContact = function (lab) {
        this.labForm = lab;
    };
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
        }, function (error) { return console.log(error); });
    };
    SolutionsComponent.prototype.createSolution = function () {
        var url = __WEBPACK_IMPORTED_MODULE_6__app_config__["a" /* APP_CONFIG */].addSolutions;
        //value['solutionId'] = this.solution.solutionId;
        //value['vendorId'] = this.vendorDTO.vendorId;
        //value['labVendorId'] = this.labVendorDTO.labVendorId;
        var formData = new FormData();
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
        this.http.post(url, formData).subscribe(function (data) {
            console.log(data);
        }, function (error) { return console.log(error); });
        console.log(this.solutionsForm);
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('form'),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* NgForm */]) === "function" && _b || Object)
], SolutionsComponent.prototype, "solutionsForm", void 0);
SolutionsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-solutions',
        template: __webpack_require__("../../../../../src/app/solutions/solutions.component.html"),
        styles: [__webpack_require__("../../../../../src/app/solutions/solutions.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_5__apiservice_service__["a" /* ApiserviceService */]],
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__apiservice_service__["a" /* ApiserviceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__apiservice_service__["a" /* ApiserviceService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */]) === "function" && _e || Object])
], SolutionsComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=solutions.component.js.map

/***/ }),

/***/ "../../../../../src/app/vendors-component/vendors-component.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*.page-description{\r\n    text-align: center;\r\n    padding: 2%;\r\n    text-transform: uppercase;\r\n}\r\n\r\n.after-heading{\r\n\twidth: 10%;\r\n\tmargin: auto;\r\n\tbackground-color: #3A539B;\r\n\tmargin-top: -15px;\r\n}*/\r\n\r\n.modal-header{\r\n\tbackground-color:#3A539B !important;\r\n\tcolor:white;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/vendors-component/vendors-component.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navigation-component></app-navigation-component>\r\n<!--  <div class=\"page-description\"><h1>Vendors</h1></div>\r\n    <hr class=\"after-heading\" />-->\r\n<app-option-list></app-option-list>\r\n<ng-template #content let-c=\"close\" let-d=\"dismiss\">\r\n<div class=\"modal-header\">\r\n  <h4 class=\"modal-title\">Success</h4>\r\n  <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d()\">\r\n    <span aria-hidden=\"true\">&times;</span>\r\n  </button>\r\n</div>\r\n<div class=\"modal-body\">\r\n  <p>The Vendor has been successfully added {{name}}!</p>\r\n</div>\r\n<div class=\"modal-footer\">\r\n  <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"c();goToPage()\">Close</button>\r\n</div>\r\n</ng-template>\r\n<app-forms (submitClick) = \"submitClicked($event)\"></app-forms>\r\n\r\n"

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
exports.push([module.i, "table {\r\n  display: table;\r\n\r\n}\r\n\r\n\r\nth {\r\n  font-weight: bold;\r\n  color: black;\r\n  background-color: #cecfd5;\r\n  text-align: left;\r\n  border:1px solid;\r\n \r\n\r\n}\r\n\r\n\r\n\r\ntbody tr:nth-child(even) {\r\n  background-color: #ffffff; \r\n  \r\n}\r\ntd {\r\n  text-align: left;\r\n  border-bottom: 1px solid #cecfd5;\r\n  border-right: 1px solid #cecfd5;\r\n}\r\ntd:first-child {\r\n  border-left: 1px solid #cecfd5;\r\n}\r\n\r\n\r\n\r\n.forms{\r\n  padding: 20px;\r\n  border-radius: 10px;\r\n  border: 1px solid transparent;\r\n  margin: 20px;\r\n  background-color: #EEEEEE;\r\n}\r\n\r\ntable-fixed thead {\r\n  width: 97%;\r\n}\r\n.table-fixed tbody {\r\n  height: 230px;\r\n  overflow-y: auto;\r\n  width: 100%;\r\n}\r\n.table-fixed thead, .table-fixed tbody, .table-fixed tr, .table-fixed td, .table-fixed th {\r\n  display: block;\r\n}\r\n.table-fixed tbody td, .table-fixed thead > tr> th {\r\n  float: left;\r\n  border-bottom-width: 0;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n.rTable {\r\n  display: table;\r\n  width: 100%;\r\n  margin-left:50%;\r\n\r\n}\r\n.rTableRow {\r\n  display: table-row;\r\n\r\n}\r\n\r\n\r\n\r\n\r\n.rTableHeading {\r\n  display: table-header-group;\r\n\r\n}\r\n.rTableCell, .rTableHead {\r\n  display: table-cell;\r\n  padding: 10px 10px;\r\n  border: 1px solid ;\r\n\r\n}\r\n.rTableHead{\r\n\r\n  font-weight: bold;\r\n\r\n}\r\n\r\n.rTableHeading {\r\n  display: table-header-group;\r\n  /*background-color: white;*/\r\n  font-weight: bold;\r\n}\r\n.rTableFoot {\r\n  display: table-footer-group;\r\n  font-weight: bold;\r\n\r\n}\r\n.rTableBody {\r\n  display: table-row-group;\r\n}\r\n\r\n*{\r\n  box-sizing: border-box;\r\n  margin: 0;\r\n  /* padding: 0;*/\r\n}\r\n\r\n.navigate{\r\n  margin: 15px;\r\n  padding: 5px;\r\n}\r\n\r\n.form-options{\r\n  float: left;\r\n  margin-right: 15px;\r\n  margin-top: -15px;\r\n  padding: 5px;\r\n}\r\n\r\n.icons{\r\n  vertical-align: middle;\r\n  font-size: 20px;\r\n  margin-top: -20px;\r\n  padding: 2px;\r\n  margin-left: 5px;\r\n}\r\n\r\n.home-icon{\r\n  color: #3A539B;\r\n}\r\n\r\n.edit-icon{\r\n  /*margin-left: 10px;*/\r\n  color: #3A539B;\r\n}\r\n\r\n.left-icon{\r\n  /*margin-left: 10px;*/\r\n  color: #3A539B;\r\n}\r\n\r\n.save-icon{\r\n  color: #3A539B;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n.p-4{\r\n  background-color: #2C3E50;\r\n  border-top: 1px solid #ECF0F1;\r\n}\r\n\r\nnav{\r\n  background-color: #3A539B;\r\n  text-align: center;\r\n  position: relative;\r\n}\r\n\r\n.heading{\r\n  color: white;\r\n}\r\n\r\nimg{\r\n  width: 10%;\r\n\r\n}\r\n\r\n.user{\r\n  position: absolute;\r\n  font-size: 10px;\r\n  color: white;\r\n  right: 50px;\r\n  margin-right: 10px;\r\n}\r\n\r\n.down-icon{\r\n  font-size: 10px;\r\n  margin-left: 3px;\r\n  color: white;\r\n}\r\n\r\n.navigate-toggle{\r\n  color: white;\r\n}\r\n\r\n.btn{\r\n  margin-left: 30px;\r\n}\r\n\r\nh1{\r\n  color: white;\r\n}\r\n\r\nspan{\r\n  color: white;\r\n}\r\n\r\n.collapse-div{\r\n  background-color: #59ABE3;\r\n}\r\n\r\n.first-row{\r\n  position: absolute;\r\n  top: 20%;\r\n  left: 5%;\r\n}\r\n\r\n\r\n.card-heading{\r\n  background-color: #3A539B;\r\n  border-radius: 6%;\r\n}\r\n\r\n.card-title{\r\n  padding: 4%;\r\n  color: white;\r\n}\r\n\r\n\r\n\r\n\r\n.card-link:hover{\r\n  color: white;\r\n  background-color: #00B16A;\r\n}\r\n\r\n.second-row{\r\n  position: absolute;\r\n  top: 60%;\r\n  left: 5%;\r\n}\r\n\r\n\r\n\r\n\r\n.table-fixed thead {\r\n  width: 97%;\r\n}\r\n.table-fixed tbody {\r\n  height: 230px;\r\n  overflow-y: auto;\r\n  width: 100%;\r\n}\r\n.table-fixed thead, .table-fixed tbody, .table-fixed tr, .table-fixed td, .table-fixed th {\r\n  display: block;\r\n}\r\n.table-fixed tbody td, .table-fixed thead > tr> th {\r\n  float: left;\r\n  border-bottom-width: 0;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n.fixed_header tbody{\r\n  display:block;\r\n  width: 100%;\r\n  overflow: auto;\r\n  height: 300px;\r\n}\r\n\r\n.fixed_header thead tr {\r\n  display: block;\r\n}\r\n\r\n.fixed_header thead {\r\n  background: black;\r\n  color:#fff;\r\n}\r\n\r\n.fixed_header th, .fixed_header td {\r\n  padding: 5px;\r\n  text-align: left;\r\n  width: 500px;\r\n}\r\ntable {\r\n  display: table;\r\n\r\n}\r\n\r\n\r\nth {\r\n  font-weight: bold;\r\n  color: black;\r\n  background-color: #cecfd5;\r\n  text-align: left;\r\n \r\n\r\n}\r\ntbody tr:nth-child(even) {\r\n  background-color: #ffffff; \r\n  \r\n}\r\ntd {\r\n  text-align: left;\r\n  border-bottom: 1px solid #cecfd5;\r\n  border-right: 1px solid #cecfd5;\r\n}\r\ntd:first-child {\r\n  border-left: 1px solid #cecfd5;\r\n}\r\n\r\n\r\n\r\n.forms{\r\n  padding: 20px;\r\n  border-radius: 10px;\r\n  border: 1px solid transparent;\r\n  margin: 20px;\r\n  background-color: #EEEEEE;\r\n}\r\n\r\ntable-fixed thead {\r\n  width: 97%;\r\n}\r\n.table-fixed tbody {\r\n  height: 230px;\r\n  overflow-y: auto;\r\n  width: 100%;\r\n}\r\n.table-fixed thead, .table-fixed tbody, .table-fixed tr, .table-fixed td, .table-fixed th {\r\n  display: block;\r\n}\r\n.table-fixed tbody td, .table-fixed thead > tr> th {\r\n  float: left;\r\n  border-bottom-width: 0;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/vendors-view/vendors-view.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navigation-component></app-navigation-component>\r\n<app-option-list></app-option-list>\r\n<form class=\"forms\">\r\n  <table class=\"fixed_header\">\r\n    <thead>\r\n    <tr>\r\n      <th>Vendor Name</th>\r\n      <th>Contact Name</th>\r\n      <th>Email Id</th>\r\n      <th>Phone Number</th>\r\n\r\n\r\n    </tr>\r\n    </thead>\r\n    <tbody>\r\n    <tr *ngFor=\"let vendor of vendors\">\r\n                       <td><a routerLink=\"/editVendors/{{ vendor.vendorId }}\">{{ vendor.name }}</a></td>\r\n                         <td>{{ vendor.vendorContact.firstName +\" \"+ vendor.vendorContact.lastName }}\r\n                         <td>{{ vendor.vendorContact.emailId }}</td>\r\n                          <td>{{ vendor.vendorContact.phoneNumber }}</td>\r\n                          \r\n                         \r\n                    </tr>\r\n    </tbody>\r\n  </table>\r\n  <!-- <a (click)=\"openVendorEdit(10)\">click here...........</a> -->\r\n</form>\r\n"

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
exports.push([module.i, "table {\r\n  display: table;\r\n\r\n}\r\n\r\n\r\nth {\r\n  font-weight: bold;\r\n  color: black;\r\n  background-color: #cecfd5;\r\n  text-align: left;\r\n \r\n\r\n}\r\ntbody tr:nth-child(even) {\r\n  background-color: #ffffff; \r\n  \r\n}\r\ntd {\r\n  text-align: left;\r\n  border-bottom: 1px solid #cecfd5;\r\n  border-right: 1px solid #cecfd5;\r\n}\r\ntd:first-child {\r\n  border-left: 1px solid #cecfd5;\r\n}\r\n\r\n\r\n\r\n.forms{\r\n  padding: 20px;\r\n  border-radius: 10px;\r\n  border: 1px solid transparent;\r\n  margin: 20px;\r\n  background-color: #EEEEEE;\r\n}\r\n\r\ntable-fixed thead {\r\n  width: 97%;\r\n}\r\n.table-fixed tbody {\r\n  height: 230px;\r\n  overflow-y: auto;\r\n  width: 100%;\r\n}\r\n.table-fixed thead, .table-fixed tbody, .table-fixed tr, .table-fixed td, .table-fixed th {\r\n  display: block;\r\n}\r\n.table-fixed tbody td, .table-fixed thead > tr> th {\r\n  float: left;\r\n  border-bottom-width: 0;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n.rTable {\r\n  display: table;\r\n  width: 100%;\r\n  margin-left:50%;\r\n\r\n}\r\n.rTableRow {\r\n  display: table-row;\r\n\r\n}\r\n\r\n\r\n\r\n\r\n.rTableHeading {\r\n  display: table-header-group;\r\n\r\n}\r\n.rTableCell, .rTableHead {\r\n  display: table-cell;\r\n  padding: 10px 10px;\r\n  border: 1px solid ;\r\n\r\n}\r\n.rTableHead{\r\n\r\n  font-weight: bold;\r\n\r\n}\r\n\r\n.rTableHeading {\r\n  display: table-header-group;\r\n  /*background-color: white;*/\r\n  font-weight: bold;\r\n}\r\n.rTableFoot {\r\n  display: table-footer-group;\r\n  font-weight: bold;\r\n\r\n}\r\n.rTableBody {\r\n  display: table-row-group;\r\n}\r\n\r\n*{\r\n  box-sizing: border-box;\r\n  margin: 0;\r\n  /* padding: 0;*/\r\n}\r\n\r\n.navigate{\r\n  margin: 15px;\r\n  padding: 5px;\r\n}\r\n\r\n.form-options{\r\n  float: left;\r\n  margin-right: 15px;\r\n  margin-top: -15px;\r\n  padding: 5px;\r\n}\r\n\r\n.icons{\r\n  vertical-align: middle;\r\n  font-size: 20px;\r\n  margin-top: -20px;\r\n  padding: 2px;\r\n  margin-left: 5px;\r\n}\r\n\r\n.home-icon{\r\n  color: #3A539B;\r\n}\r\n\r\n.edit-icon{\r\n  /*margin-left: 10px;*/\r\n  color: #3A539B;\r\n}\r\n\r\n.left-icon{\r\n  /*margin-left: 10px;*/\r\n  color: #3A539B;\r\n}\r\n\r\n.save-icon{\r\n  color: #3A539B;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n.p-4{\r\n  background-color: #2C3E50;\r\n  border-top: 1px solid #ECF0F1;\r\n}\r\n\r\nnav{\r\n  background-color: #3A539B;\r\n  text-align: center;\r\n  position: relative;\r\n}\r\n\r\n.heading{\r\n  color: white;\r\n}\r\n\r\nimg{\r\n  width: 10%;\r\n\r\n}\r\n\r\n.user{\r\n  position: absolute;\r\n  font-size: 10px;\r\n  color: white;\r\n  right: 50px;\r\n  margin-right: 10px;\r\n}\r\n\r\n.down-icon{\r\n  font-size: 10px;\r\n  margin-left: 3px;\r\n  color: white;\r\n}\r\n\r\n.navigate-toggle{\r\n  color: white;\r\n}\r\n\r\n.btn{\r\n  margin-left: 30px;\r\n}\r\n\r\nh1{\r\n  color: white;\r\n}\r\n\r\nspan{\r\n  color: white;\r\n}\r\n\r\n.collapse-div{\r\n  background-color: #59ABE3;\r\n}\r\n\r\n.first-row{\r\n  position: absolute;\r\n  top: 20%;\r\n  left: 5%;\r\n}\r\n\r\n\r\n.card-heading{\r\n  background-color: #3A539B;\r\n  border-radius: 6%;\r\n}\r\n\r\n.card-title{\r\n  padding: 4%;\r\n  color: white;\r\n}\r\n\r\n\r\n\r\n\r\n.card-link:hover{\r\n  color: white;\r\n  background-color: #00B16A;\r\n}\r\n\r\n.second-row{\r\n  position: absolute;\r\n  top: 60%;\r\n  left: 5%;\r\n}\r\n\r\n\r\n\r\n\r\n.table-fixed thead {\r\n  width: 97%;\r\n}\r\n.table-fixed tbody {\r\n  height: 230px;\r\n  overflow-y: auto;\r\n  width: 100%;\r\n}\r\n.table-fixed thead, .table-fixed tbody, .table-fixed tr, .table-fixed td, .table-fixed th {\r\n  display: block;\r\n}\r\n.table-fixed tbody td, .table-fixed thead > tr> th {\r\n  float: left;\r\n  border-bottom-width: 0;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n.fixed_header tbody{\r\n  display:block;\r\n  width: 100%;\r\n  overflow: auto;\r\n  height: 300px;\r\n}\r\n\r\n.fixed_header thead tr {\r\n  display: block;\r\n}\r\n\r\n.fixed_header thead {\r\n  background: black;\r\n  color:#fff;\r\n}\r\n\r\n.fixed_header th, .fixed_header td {\r\n  padding: 5px;\r\n  text-align: left;\r\n  width: 500px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/vendors-view/view-table/view-table.component.html":
/***/ (function(module, exports) {

module.exports = "<form class=\"forms\">\r\n  <table class=\"fixed_header\">\r\n    <thead>\r\n    <tr>\r\n      <th>Vendor Name</th>\r\n      <th>Contact Name</th>\r\n      <th>Email Id</th>\r\n      <th>Phone Number</th>\r\n\r\n\r\n    </tr>\r\n    </thead>\r\n    <tbody>\r\n    <tr *ngFor=\"let vendor of vendors\">\r\n                       <td>{{ vendor.name }}</td>\r\n                         <td>{{vendor.vendorId}}</td>\r\n                         <td>{{ vendor.vendorContact.firstName +\" \"+ vendor.vendorContact.lastName }}\r\n                         <td>{{ vendor.vendorContact.emailId }}</td>\r\n                          <td>{{ vendor.vendorContact.phoneNumber }}</td>\r\n                          <td><a [routerLink]=\"['/editVendors/8']\">please click here....</a></td>\r\n                         \r\n                    </tr>\r\n    </tbody>\r\n  </table>\r\n</form>\r\n"

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