(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/admin-dashboard/admin-dashboard.component.css":
/*!***************************************************************!*\
  !*** ./src/app/admin-dashboard/admin-dashboard.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".grid-container {\n  margin: 20px;\n}\n\n.dashboard-card {\n  position: absolute;\n  top: 15px;\n  left: 15px;\n  right: 15px;\n  bottom: 15px;\n}\n\n.more-button {\n  position: absolute;\n  top: 5px;\n  right: 10px;\n}\n\n.dashboard-card-content {\n  text-align: center;\n}"

/***/ }),

/***/ "./src/app/admin-dashboard/admin-dashboard.component.html":
/*!****************************************************************!*\
  !*** ./src/app/admin-dashboard/admin-dashboard.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"grid-container\">\n  <h1 class=\"mat-h1\">Dashboard</h1>\n  <mat-grid-list cols=\"1\" rowHeight=\"350px\">\n    <mat-grid-tile [colspan]=\"1\" [rowspan]=\"1\">\n      <mat-card class=\"dashboard-card\">\n        <mat-card-header>\n          <mat-card-title>\n           \n            <button mat-icon-button class=\"more-button\" [matMenuTriggerFor]=\"menu\" aria-label=\"Toggle menu\">\n              <mat-icon>more_vert</mat-icon>\n            </button>\n            <mat-menu #menu=\"matMenu\" xPosition=\"before\">\n              <button mat-menu-item>Expand</button>\n              <button mat-menu-item>Remove</button>\n            </mat-menu>\n          </mat-card-title>\n        </mat-card-header>\n        <mat-card-content class=\"dashboard-card-content\">\n          <app-stats></app-stats>\n        </mat-card-content>\n      </mat-card>\n    </mat-grid-tile>\n  </mat-grid-list>\n</div>"

/***/ }),

/***/ "./src/app/admin-dashboard/admin-dashboard.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/admin-dashboard/admin-dashboard.component.ts ***!
  \**************************************************************/
/*! exports provided: AdminDashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminDashboardComponent", function() { return AdminDashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AdminDashboardComponent = /** @class */ (function () {
    function AdminDashboardComponent(authService) {
        this.authService = authService;
    }
    AdminDashboardComponent.prototype.ngOnInit = function () {
        this.authService.getData().subscribe(function (res) { return console.log(res); });
    };
    AdminDashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'admin-dashboard',
            template: __webpack_require__(/*! ./admin-dashboard.component.html */ "./src/app/admin-dashboard/admin-dashboard.component.html"),
            styles: [__webpack_require__(/*! ./admin-dashboard.component.css */ "./src/app/admin-dashboard/admin-dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], AdminDashboardComponent);
    return AdminDashboardComponent;
}());



/***/ }),

/***/ "./src/app/admin.guard.ts":
/*!********************************!*\
  !*** ./src/app/admin.guard.ts ***!
  \********************************/
/*! exports provided: AdminGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminGuard", function() { return AdminGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AdminGuard = /** @class */ (function () {
    function AdminGuard(_authService, _router) {
        this._authService = _authService;
        this._router = _router;
        this.admin = true;
    }
    AdminGuard.prototype.getData = function () {
        this._authService.getData().subscribe(function (res) {
            console.log(res);
        });
    };
    AdminGuard.prototype.canActivate = function () {
        if (this._authService.loggedIn() && this.admin) {
            return true;
        }
        else {
            this._router.navigate(['/home']);
            return false;
        }
    };
    AdminGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AdminGuard);
    return AdminGuard;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _userdata_userdata_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./userdata/userdata.component */ "./src/app/userdata/userdata.component.ts");
/* harmony import */ var _lost_password_lost_password_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./lost-password/lost-password.component */ "./src/app/lost-password/lost-password.component.ts");
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./auth.guard */ "./src/app/auth.guard.ts");
/* harmony import */ var _user_settings_user_settings_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./user-settings/user-settings.component */ "./src/app/user-settings/user-settings.component.ts");
/* harmony import */ var _admin_dashboard_admin_dashboard_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./admin-dashboard/admin-dashboard.component */ "./src/app/admin-dashboard/admin-dashboard.component.ts");
/* harmony import */ var _admin_guard__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./admin.guard */ "./src/app/admin.guard.ts");
/* harmony import */ var _new_password_new_password_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./new-password/new-password.component */ "./src/app/new-password/new-password.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var routes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: 'register', component: _register_register_component__WEBPACK_IMPORTED_MODULE_4__["RegisterComponent"] },
    { path: 'lostpwd', component: _lost_password_lost_password_component__WEBPACK_IMPORTED_MODULE_7__["LostPasswordComponent"] },
    { path: 'passCode/:id', component: _new_password_new_password_component__WEBPACK_IMPORTED_MODULE_12__["NewPasswordComponent"] },
    { path: 'userdata', component: _userdata_userdata_component__WEBPACK_IMPORTED_MODULE_6__["UserdataComponent"],
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]] },
    { path: 'user-settings', component: _user_settings_user_settings_component__WEBPACK_IMPORTED_MODULE_9__["UserSettingsComponent"],
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]] },
    { path: 'admin', component: _admin_dashboard_admin_dashboard_component__WEBPACK_IMPORTED_MODULE_10__["AdminDashboardComponent"],
        canActivate: [_admin_guard__WEBPACK_IMPORTED_MODULE_11__["AdminGuard"]] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n\n.wrapper{\n    display: flex;\n    flex-direction: column;            \n    height: 100vh;\n    overflow: hidden;\n  }\n  \n  .header{\n    flex: 0 0 auto;  \n    background: #aaa;\n  }\n  \n  .content{\n    flex: 1 1 auto;     \n    overflow-y: auto;     \n  }\n  \n  *{\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n  }\n  \n  *:after,\n  *:before{\n    box-sizing: border-box;\n  }"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <navigation></navigation> -->\n<div class=\"wrapper\">\n\n<div class=\"header\">\n    <app-header></app-header>\n</div>\n<div class=\"content\">\n    <router-outlet></router-outlet>\n</div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")],
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _userdata_userdata_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./userdata/userdata.component */ "./src/app/userdata/userdata.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ng2_dragula__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng2-dragula */ "./node_modules/ng2-dragula/index.js");
/* harmony import */ var ng2_dragula__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(ng2_dragula__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm5/tabs.es5.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm5/select.es5.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/badge */ "./node_modules/@angular/material/esm5/badge.es5.js");
/* harmony import */ var _token_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./token.service */ "./src/app/token.service.ts");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _lost_password_lost_password_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./lost-password/lost-password.component */ "./src/app/lost-password/lost-password.component.ts");
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./auth.guard */ "./src/app/auth.guard.ts");
/* harmony import */ var _comments_comments_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./comments/comments.component */ "./src/app/comments/comments.component.ts");
/* harmony import */ var _comment_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./comment.service */ "./src/app/comment.service.ts");
/* harmony import */ var _uploader_uploader_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./uploader/uploader.component */ "./src/app/uploader/uploader.component.ts");
/* harmony import */ var _user_settings_user_settings_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./user-settings/user-settings.component */ "./src/app/user-settings/user-settings.component.ts");
/* harmony import */ var _websocket_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./websocket.service */ "./src/app/websocket.service.ts");
/* harmony import */ var _stats_stats_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./stats/stats.component */ "./src/app/stats/stats.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _member_search_member_search_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./member-search/member-search.component */ "./src/app/member-search/member-search.component.ts");
/* harmony import */ var _member_action_service__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./member-action.service */ "./src/app/member-action.service.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./main/main.component */ "./src/app/main/main.component.ts");
/* harmony import */ var _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./navigation/navigation.component */ "./src/app/navigation/navigation.component.ts");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/esm5/tooltip.es5.js");
/* harmony import */ var _admin_dashboard_admin_dashboard_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./admin-dashboard/admin-dashboard.component */ "./src/app/admin-dashboard/admin-dashboard.component.ts");
/* harmony import */ var _admin_guard__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./admin.guard */ "./src/app/admin.guard.ts");
/* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! angularfire2 */ "./node_modules/angularfire2/index.js");
/* harmony import */ var angularfire2_storage__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! angularfire2/storage */ "./node_modules/angularfire2/storage/index.js");
/* harmony import */ var _new_password_new_password_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./new-password/new-password.component */ "./src/app/new-password/new-password.component.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm5/snack-bar.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















// services
























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"],
                _register_register_component__WEBPACK_IMPORTED_MODULE_5__["RegisterComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"],
                _userdata_userdata_component__WEBPACK_IMPORTED_MODULE_7__["UserdataComponent"],
                _lost_password_lost_password_component__WEBPACK_IMPORTED_MODULE_18__["LostPasswordComponent"],
                _comments_comments_component__WEBPACK_IMPORTED_MODULE_20__["CommentsComponent"],
                _uploader_uploader_component__WEBPACK_IMPORTED_MODULE_22__["UploaderComponent"],
                _user_settings_user_settings_component__WEBPACK_IMPORTED_MODULE_23__["UserSettingsComponent"],
                _stats_stats_component__WEBPACK_IMPORTED_MODULE_25__["StatsComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_26__["HeaderComponent"],
                _member_search_member_search_component__WEBPACK_IMPORTED_MODULE_27__["MemberSearchComponent"],
                _main_main_component__WEBPACK_IMPORTED_MODULE_30__["MainComponent"],
                _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_31__["NavigationComponent"],
                _admin_dashboard_admin_dashboard_component__WEBPACK_IMPORTED_MODULE_33__["AdminDashboardComponent"],
                _new_password_new_password_component__WEBPACK_IMPORTED_MODULE_37__["NewPasswordComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
                ng2_dragula__WEBPACK_IMPORTED_MODULE_10__["DragulaModule"],
                _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_14__["LayoutModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatFormFieldModule"],
                _angular_material_tabs__WEBPACK_IMPORTED_MODULE_12__["MatTabsModule"],
                _angular_material_select__WEBPACK_IMPORTED_MODULE_13__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatCheckboxModule"],
                _angular_material_dialog__WEBPACK_IMPORTED_MODULE_38__["MatDialogModule"],
                _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_39__["MatSnackBarModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_29__["BrowserAnimationsModule"],
                _angular_material_badge__WEBPACK_IMPORTED_MODULE_15__["MatBadgeModule"],
                _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_32__["MatTooltipModule"],
                angularfire2__WEBPACK_IMPORTED_MODULE_35__["AngularFireModule"].initializeApp({
                    apiKey: "AIzaSyAlSqMwKKhmxwcaV2yV0JakW1Z3FC-8d3Q",
                    authDomain: "reseau-social-c1b9a.firebaseapp.com",
                    databaseURL: "https://reseau-social-c1b9a.firebaseio.com",
                    projectId: "reseau-social-c1b9a",
                    storageBucket: "reseau-social-c1b9a.appspot.com",
                    messagingSenderId: "217716745845"
                }),
                angularfire2_storage__WEBPACK_IMPORTED_MODULE_36__["AngularFireStorageModule"]
            ],
            providers: [_auth_service__WEBPACK_IMPORTED_MODULE_17__["AuthService"], _admin_guard__WEBPACK_IMPORTED_MODULE_34__["AdminGuard"], _auth_guard__WEBPACK_IMPORTED_MODULE_19__["AuthGuard"], _websocket_service__WEBPACK_IMPORTED_MODULE_24__["WebsocketService"], _comment_service__WEBPACK_IMPORTED_MODULE_21__["CommentService"], _member_action_service__WEBPACK_IMPORTED_MODULE_28__["MemberActionService"],
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HTTP_INTERCEPTORS"],
                    useClass: _token_service__WEBPACK_IMPORTED_MODULE_16__["TokenService"],
                    multi: true
                }],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth.guard.ts":
/*!*******************************!*\
  !*** ./src/app/auth.guard.ts ***!
  \*******************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = /** @class */ (function () {
    function AuthGuard(_authService, _router) {
        this._authService = _authService;
        this._router = _router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this._authService.loggedIn()) {
            return true;
        }
        else {
            this._router.navigate(['/login']);
            return false;
        }
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/auth.service.ts":
/*!*********************************!*\
  !*** ./src/app/auth.service.ts ***!
  \*********************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./config */ "./src/app/config.ts");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_4__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AuthService = /** @class */ (function () {
    function AuthService(http, _router) {
        this.http = http;
        this._router = _router;
        this.user = {
            email: '',
            password: ''
        };
        this.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_4__(_config__WEBPACK_IMPORTED_MODULE_3__["Config"].SOCKET_HOST);
        this.userConnected = 0;
        this.url = _config__WEBPACK_IMPORTED_MODULE_3__["Config"].SOCKET_HOST || "http://localhost";
        this._registerURL = this.url + '/api/register';
        this._loginURL = this.url + '/api/login';
        this._userdataURL = this.url + '/api/userdata';
        this._lostPassword = this.url + '/api/lostpwd';
        this._home = this.url + '/api/';
        this._admin = this.url + '/api/admin';
        this._updateUser = this.url + '/api/update';
        this.connected = 0;
    }
    AuthService.prototype.registerUser = function (user) {
        return this.http.post(this._registerURL, user);
    };
    AuthService.prototype.updateUser = function (user) {
        return this.http.post(this._updateUser, user);
    };
    AuthService.prototype.loginUser = function (user) {
        return this.http.post(this._loginURL, user);
    };
    AuthService.prototype.getToken = function () {
        return localStorage.getItem('token');
    };
    AuthService.prototype.logoutUser = function () {
        localStorage.removeItem('token');
        //this._router.navigate(['/home']);
    };
    AuthService.prototype.loggedIn = function () {
        this.connected++;
        return !!localStorage.getItem('token');
    };
    AuthService.prototype.lostPassword = function (_email) {
        return this.http.post(this._lostPassword, _email);
    };
    AuthService.prototype.getData = function () {
        return this.http.get(this._userdataURL);
    };
    AuthService.prototype.admin = function () {
        return this.http.get(this._admin);
    };
    AuthService.prototype.home = function () {
        return this.http.get(this._home);
    };
    AuthService.prototype.getConnectedUser = function () {
        return this.userConnected;
    };
    AuthService.prototype.onLeave = function () {
        this.socket.emit('disconnect');
        console.log(this.socket.id);
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/comment.service.ts":
/*!************************************!*\
  !*** ./src/app/comment.service.ts ***!
  \************************************/
/*! exports provided: CommentService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentService", function() { return CommentService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../app/config */ "./src/app/config.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CommentService = /** @class */ (function () {
    function CommentService(http, _router) {
        this.http = http;
        this._router = _router;
        this.url = _app_config__WEBPACK_IMPORTED_MODULE_5__["Config"].SOCKET_HOST || "http://localhost";
        this._postCommentUrl = this.url + '/api/post_comment';
        this._getUserCommentsUrl = this.url + '/api/comments';
        this.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_3__(_app_config__WEBPACK_IMPORTED_MODULE_5__["Config"].SOCKET_HOST);
    }
    ;
    CommentService.prototype.onBegin = function () {
        var _this = this;
        var observable = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"](function (observer) {
            _this.socket.on('user join', function (data) {
                observer.next(data);
            });
            return function () { _this.socket.disconnect(); };
        });
        return observable;
    };
    CommentService.prototype.onPosted = function () {
        var _this = this;
        var observable = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"](function (observer) {
            _this.socket.on('message', function (data) {
                observer.next(data);
            });
            return function () { _this.socket.disconnect(); };
        });
        return observable;
    };
    CommentService.prototype.postMessage = function (data) {
        this.socket.emit('posted', data);
        this.postComment(data).subscribe();
    };
    CommentService.prototype.postComment = function (comment) {
        return this.http.post(this._postCommentUrl, comment);
    };
    CommentService.prototype.getComments = function () {
        return this.http.get(this._getUserCommentsUrl);
    };
    CommentService.prototype.comments = function () {
    };
    CommentService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], CommentService);
    return CommentService;
}());



/***/ }),

/***/ "./src/app/comments/comments.component.css":
/*!*************************************************!*\
  !*** ./src/app/comments/comments.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n.example-form {\n    min-width: 150px;\n    max-width: 500px;\n    width: 100%;\n  }\n  \n  .example-full-width {\n    width: 100%;\n  }"

/***/ }),

/***/ "./src/app/comments/comments.component.html":
/*!**************************************************!*\
  !*** ./src/app/comments/comments.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"example-card\">\n    <article >\n      <form class=\"example-form\" #commentF=\"ngForm\" (submit)=\"posted();commentF.reset()\" >\n    <mat-form-field>\n      <input matInput placeholder=\"titre du message\" name=\"title\" id=\"titre\" [(ngModel)]=\"comment.title\" required >\n    </mat-form-field>\n     <br>\n    <mat-form-field class=\"example-full-width\">\n      <textarea matInput placeholder=\"Poster un commentaire......\" name=\"comment\" [(ngModel)]=\"comment.content\"></textarea>\n    </mat-form-field>\n     <br>\n         \n    <button type=\"submit\" mat-fab color=\"accent\" [disabled]=\"!commentF.form.valid\">Poster\n     \n    </button>\n\n</form>\n      \n  </article>\n  </mat-card>"

/***/ }),

/***/ "./src/app/comments/comments.component.ts":
/*!************************************************!*\
  !*** ./src/app/comments/comments.component.ts ***!
  \************************************************/
/*! exports provided: CommentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentsComponent", function() { return CommentsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _comment_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../comment.service */ "./src/app/comment.service.ts");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CommentsComponent = /** @class */ (function () {
    function CommentsComponent(auth, commentService) {
        var _this = this;
        this.auth = auth;
        this.commentService = commentService;
        this.commentsArray = [];
        this.comment = {
            title: '',
            author: '',
            content: '',
            date: null,
            authorId: '',
            authorPicture: '',
            explicit: false
        };
        // this.commentService.onBegin().subscribe();
        this.commentService.onPosted()
            .subscribe(function (data) { return _this.commentsArray.splice(0, 0, data); });
    }
    CommentsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.auth.getData().subscribe(function (res) {
            _this.comment.authorId = res.user._id;
            _this.comment.author = res.user.first_name + ' ' + res.user.last_name;
            _this.comment.authorPicture = res.user.picture;
            console.log(_this.comment);
        });
        this.commentService.getComments().subscribe(function (res) {
            _this.commentsArray = res.comments;
            console.log('Les commentaires en base', _this.commentsArray);
        });
    };
    CommentsComponent.prototype.posted = function () {
        this.comment.date = new Date();
        this.commentService.postMessage(this.comment);
    };
    CommentsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-comments',
            template: __webpack_require__(/*! ./comments.component.html */ "./src/app/comments/comments.component.html"),
            styles: [__webpack_require__(/*! ./comments.component.css */ "./src/app/comments/comments.component.css")]
        }),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _comment_service__WEBPACK_IMPORTED_MODULE_1__["CommentService"]])
    ], CommentsComponent);
    return CommentsComponent;
}());



/***/ }),

/***/ "./src/app/config.ts":
/*!***************************!*\
  !*** ./src/app/config.ts ***!
  \***************************/
/*! exports provided: Config */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Config", function() { return Config; });
var Config = /** @class */ (function () {
    function Config() {
        this.URL = "http://localhost:5000";
    }
    Object.defineProperty(Config, "SOCKET_HOST", {
        get: function () {
            return "http://localhost:5000" || 'https://dry-fortress-71234.herokuapp.com';
        },
        enumerable: true,
        configurable: true
    });
    return Config;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n.example-icon {\n  padding: 0 14px;\n}\n\n.example-spacer {\n  flex: 1 1 auto;\n  width: 40px;\n}\n\na{\n  color: white;\n}\n\n.infos {\n  display:flex;\n  flex-flow: row nowrap;\n  justify-content:space-between;\n  align-items: center;\n\n\n}\n\nimg {\n  width: 46px;\n  border-radius: 50%;\n  padding-right: 10px;\n}"

/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<mat-toolbar color=\"primary\">\n   <mat-toolbar-row>\n        <span>Réseau Social</span>\n        <span class=\"example-spacer\"></span>\n        \n             <a routerLink=\"/\" routerLinkActive=\"active\"><i class=\"material-icons\" matTooltip=\"Page d'accueil\">\n            home\n            </i></a> \n        <span class=\"example-spacer\"></span>\n        <div class=\"infos\">\n            <div>\n                <a routerLink=\"userdata\" matTooltip=\"Mon espace \"><img src=\"{{user.picture}}\"  alt=\"\"></a>            \n            </div>\n            <div>\n                {{user.first_name}} {{user.last_name}} \n            </div>\n           </div>\n           <span class=\"example-spacer\"></span>\n      \n      <span class=\"example-spacer\"></span>\n      <span><a *ngIf=\"!getUserState()\"  routerLink=\"/login\" routerLinkActive=\"active\"><i class=\"user outline icon\"></i></a></span>\n      <span class=\"example-spacer\"></span>\n      <span><a *ngIf=\"getUserState()\" routerLink=\"/user-settings\" routerLinkActive=\"active\">  <i class=\"material-icons\" matTooltip=\"Paramettres du compte\">\n            settings\n            </i></a></span>\n      <span class=\"example-spacer\"></span>\n      <!-- <span><a *ngIf=\"getUserState()\"  routerLink=\"/userdata\" routerLinkActive=\"active\"><i class=\"fas fa-user-circle\"></i></a></span> -->\n      \n      <a *ngIf=\"!getUserState()\" class=\"item\" routerLink=\"/login\" routerLinkActive=\"active\"><i class=\"material-icons\" matTooltip=\"Membre - Se connecter\">\n            account_circle\n            </i></a>\n      <span><a *ngIf=\"getUserState()\"  (click)=\"logoutUser()\" href=\"/home\"><i class=\"material-icons\"  matTooltip=\"Se deconnecter\"\n        >\n            input\n            </i></a></span>\n      \n    </mat-toolbar-row>\n  </mat-toolbar>\n  "

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(authService) {
        this.authService = authService;
        this.isAuth = false;
        this.title = 'app';
        this.user = {
            first_name: '',
            last_name: '',
            email: '',
            picture: ''
        };
    }
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getUserState();
        console.log(this.isAuth);
        if (this.isAuth) {
            this.authService.getData()
                .subscribe(function (res) {
                console.log(res);
                _this.user = res.user;
            });
        }
    };
    HeaderComponent.prototype.getUserState = function () {
        this.isAuth = !!this.authService.getToken();
        return this.isAuth;
    };
    HeaderComponent.prototype.logoutUser = function () {
        this.authService.onLeave();
        this.authService.logoutUser();
        this.isAuth = false;
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card-image > img  {\n    width: 128px;\n  height: 128px;\n}\n\n#stats{\n  padding-top: 30px;\n  position: fixed;\n  max-width: 400px;\n left: 70%;\n}\n\n.example-card {\n  max-width: 400px;\n  height: 100%;\n  margin-bottom: 40px;\n  padding-bottom: 40px;\n  background-color: ivory\n}\n\n.example-header-image {\n\n  background-size: cover;\n}\n\n.mat-card-actions {\n  margin-bottom: 30px;\n}\n\n.container {\n  padding-left: 25%\n}\n\nspan {\n  padding: 25px;\n  \n}\n\n.example-form {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n\n.example-full-width {\n  width: 100%;\n}\n\nmat-toolbar{\n  position: fixed;\n  height: 30px;\n}\n\n.card {\n  position: absolute;\n  margin-left: 60%;\n  top:15%\n}\n\n.test{\n  padding: 10px\n}"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container\">\n             \n   <div class=\"card\">\n     <p style=\"width: 40px;height: 5px;\">\n        <span class=\"test\" matBadgePosition=\"above after\" matBadge=\"{{commentsArray.length}}\">Posts</span>\n     </p>\n    \n   </div>           \n\n\n\n <div class=\"col s6\" *ngIf=!isMember>\n   <p>Visiteurs : Creer un compte pour poster des messages et discuter avec vos amis</p>\n </div>\n \n\n <div class=\"col s6\" *ngIf=isMember>\n    <app-member-search></app-member-search>  \n   </div>\n  \n  \n    <mat-card class=\"example-card\" *ngIf=isMember>\n      <article >\n        <form class=\"example-form\" #commentF=\"ngForm\" (submit)=\"posted();commentF.reset()\" >\n      <mat-form-field>\n        <input matInput placeholder=\"titre du message\" name=\"title\" id=\"titre\" [(ngModel)]=\"comment.title\" required >\n      </mat-form-field>\n       <br>\n      <mat-form-field class=\"example-full-width\">\n        <textarea matInput placeholder=\"Poster un commentaire......\" name=\"comment\" [(ngModel)]=\"comment.content\"></textarea>\n      </mat-form-field>\n       <br>\n           \n      <button type=\"submit\" mat-fab color=\"accent\" [disabled]=\"!commentF.form.valid\">Poster\n       \n      </button>\n\n  </form>\n        \n    </article>\n    </mat-card>\n</div>\n\n<div class=\"container\">\n  \n\n  <mat-card class=\"example-card\" *ngFor=\"let comment of commentsArray\">\n    <mat-card-header>\n      <div mat-card-avatar class=\"example-header-image\">\n        <img src=\"{{comment.authorPicture}}\" style=\"width: 46px;\" alt=\"\">\n      </div>\n      <mat-card-title>{{comment.author }} </mat-card-title>\n      <mat-card-subtitle> Posté le  {{ comment.date| date:'dd-MM-yyyy à HH:mm' }}</mat-card-subtitle>\n    </mat-card-header>\n    <h4> {{comment.title}}</h4>\n   \n    <mat-card-content>\n      <p>\n        {{comment.content}}\n      </p>\n    </mat-card-content>\n   \n  </mat-card>\n</div>\n\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _comment_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../comment.service */ "./src/app/comment.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeComponent = /** @class */ (function () {
    function HomeComponent(auth, commentService) {
        var _this = this;
        this.auth = auth;
        this.commentService = commentService;
        this.isMember = false;
        this.currentDate = new Date();
        this.comment = {
            title: '',
            author: '',
            content: '',
            date: null,
            authorId: '',
            authorPicture: '',
            explicit: false
        };
        this.commentsArray = [];
        this.commentService.onBegin()
            .subscribe(function (res) { return console.log(res); });
        this.commentService.onPosted()
            .subscribe(function (data) {
            _this.commentsArray.splice(0, 0, data);
            console.log("Apres ajout", _this.commentsArray);
        });
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.auth.loggedIn()) {
            this.isMember = true;
            //this.userdata()
            this.auth.getData().subscribe(function (res) {
                _this.comment.authorId = res.user._id;
                _this.comment.author = res.user.first_name + ' ' + res.user.last_name;
                _this.comment.authorPicture = res.user.picture;
                //console.log(this.comment )
            });
        }
        this.commentService.getComments().subscribe(function (res) {
            _this.commentsArray = res.comments;
            console.log('Les commentaires en base', _this.commentsArray);
        });
    };
    HomeComponent.prototype.posted = function () {
        this.comment.date = new Date();
        this.commentService.postMessage(this.comment);
    };
    HomeComponent.prototype.getMessages = function () {
        var _this = this;
        this.commentService.onBegin()
            .subscribe(function (data) {
            _this.message;
            console.log(data);
        });
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"], _comment_service__WEBPACK_IMPORTED_MODULE_2__["CommentService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n.mat-tab-group {\n  margin-left: 33%;\n  margin-top: 5%;\n  padding-bottom: 20px;\n  color: black;\n  height: 100%;\n}\n\nform{\n  padding-bottom: 20px;\n  align-items: center;\n}\n"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-tab-group>\n  \n    <mat-tab label=\"Connexion\"> \n        <form #loginF=\"ngForm\"  >\n        <div class=\"example-container\">\n            <mat-form-field>\n              <input matInput placeholder=\"Email\" [(ngModel)]=\"userData.email\" name=\"email\"  [formControl]=\"email\" \n              pattern=\"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,3}$\"\n              >\n              <mat-error *ngIf=\"email.invalid\">{{getErrorMessage()}}</mat-error>\n            </mat-form-field>\n            <br>\n            <mat-form-field>\n                <input matInput placeholder=\"Mot de passe\" [(ngModel)]=\"userData.password\" required name=\"password\"  [type]=\"hide ? 'password' : 'text'\">\n                <mat-icon matSuffix (click)=\"hide = !hide\">{{hide ? 'visibility' : 'visibility_off'}}</mat-icon>\n              </mat-form-field>\n              <br>\n              <button  mat-button color=\"primary\" [disabled]=\"!loginF.form.valid || email.invalid\" (click)=\"onLogin();loginF.reset()\">Se connecter</button>\n              <mat-error>{{errorMessage}}</mat-error> \n              <button mat-button color=\"primary\" routerLink=\"/lostpwd\" >Informations de compte oubliées ? </button>\n          </div>\n        </form>\n    </mat-tab>\n    <mat-tab label=\"Inscription\"> \n      <app-register></app-register>\n    </mat-tab>\n    \n  </mat-tab-group>\n  \n\n\n\n  "

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService, _router) {
        this.authService = authService;
        this._router = _router;
        this.userData = {
            email: '',
            password: ''
        };
        this.email = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email]);
        this.errorMessage = '';
        this.hide = true;
    }
    LoginComponent.prototype.ngOnInit = function () {
        if (this.authService.getToken()) {
            this._router.navigate(['/home']);
        }
    };
    LoginComponent.prototype.getErrorMessage = function () {
        return this.email.hasError('required') ? 'Le champs doit etre rempli' :
            this.email.hasError('email') ? "Le format de l'adresse Email est invalide" :
                '';
    };
    LoginComponent.prototype.onLogin = function () {
        var _this = this;
        this.authService.loginUser(this.userData)
            .subscribe(function (res) {
            if (res.message || res.err) {
                if (res.message === undefined)
                    _this.errorMessage = res.err;
                if (res.err === undefined)
                    _this.errorMessage = res.message;
                _this.userData.email = null;
                _this.userData.password = null;
            }
            else {
                localStorage.setItem('token', res.token);
                _this._router.navigate(['/userdata']);
            }
        });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/lost-password/lost-password.component.css":
/*!***********************************************************!*\
  !*** ./src/app/lost-password/lost-password.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-card {\n    margin-left: 25%;\n    \n    max-width: 400px;\n  }\n  "

/***/ }),

/***/ "./src/app/lost-password/lost-password.component.html":
/*!************************************************************!*\
  !*** ./src/app/lost-password/lost-password.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<mat-card class=\"example-card\">\n    <form #password=\"ngForm\">\n<p> Veuillez indiquer votre adresse Email pour envoi  du mot de passe.  </p>\n\n<mat-form-field>\n    <input matInput placeholder=\"Email\" [(ngModel)]=\"userData.email\" name=\"email\"  [formControl]=\"email\" required>\n    <mat-error *ngIf=\"email.invalid\">{{getErrorMessage()}} {{message}}</mat-error>\n</mat-form-field>\n<br>\n <button mat-raised-button [disabled]=\"!email.valid\"  (click)=\"passwordRetrival()\">Envoyer</button>\n</form>\n</mat-card>\n"

/***/ }),

/***/ "./src/app/lost-password/lost-password.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/lost-password/lost-password.component.ts ***!
  \**********************************************************/
/*! exports provided: LostPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LostPasswordComponent", function() { return LostPasswordComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _new_password_new_password_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../new-password/new-password.component */ "./src/app/new-password/new-password.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LostPasswordComponent = /** @class */ (function () {
    function LostPasswordComponent(authService, _router, dialog) {
        this.authService = authService;
        this._router = _router;
        this.dialog = dialog;
        this.userData = {
            email: ''
        };
        this.email = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email]);
    }
    LostPasswordComponent.prototype.ngOnInit = function () {
    };
    LostPasswordComponent.prototype.passwordRetrival = function () {
        var _this = this;
        console.log(this.userData);
        this.authService.lostPassword(this.userData)
            .subscribe(function (res) {
            if (res.success) {
                var dialog = _this.dialog.open(_new_password_new_password_component__WEBPACK_IMPORTED_MODULE_5__["NewPasswordComponent"], {
                    width: '400px',
                    data: res.success
                });
                console.log(res);
                dialog.afterClosed().
                    subscribe(function (res) { return _this._router.navigate(['/login']); });
            }
            else {
                _this.message = res.error;
                _this.userData.email = '';
            }
        });
    };
    LostPasswordComponent.prototype.getErrorMessage = function () {
        return this.email.hasError('required') ? 'Le champs doit etre rempli' :
            this.email.hasError('email') ? "Le format de l'adresse Email est invalide" :
                '';
    };
    LostPasswordComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-lost-password',
            template: __webpack_require__(/*! ./lost-password.component.html */ "./src/app/lost-password/lost-password.component.html"),
            styles: [__webpack_require__(/*! ./lost-password.component.css */ "./src/app/lost-password/lost-password.component.css")]
        }),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]])
    ], LostPasswordComponent);
    return LostPasswordComponent;
}());



/***/ }),

/***/ "./src/app/main/main.component.css":
/*!*****************************************!*\
  !*** ./src/app/main/main.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sidenav-container {\n  height: 100%;\n}\n\n.sidenav {\n  width: 200px;\n}\n\n.mat-toolbar.mat-primary {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n}\n"

/***/ }),

/***/ "./src/app/main/main.component.html":
/*!******************************************!*\
  !*** ./src/app/main/main.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-sidenav-container class=\"sidenav-container\">\n  <mat-sidenav\n    #drawer\n    class=\"sidenav\"\n    fixedInViewport=\"true\"\n    [attr.role]=\"(isHandset$ | async) ? 'dialog' : 'navigation'\"\n    [mode]=\"(isHandset$ | async) ? 'over' : 'side'\"\n    [opened]=\"!(isHandset$ | async)\">\n    <mat-toolbar color=\"primary\">Menu</mat-toolbar>\n    <mat-nav-list>\n      <a mat-list-item href=\"#\">Link 1</a>\n      <a mat-list-item href=\"#\">Link 2</a>\n      <a mat-list-item href=\"#\">Link 3</a>\n    </mat-nav-list>\n  </mat-sidenav>\n  <mat-sidenav-content>\n    <mat-toolbar color=\"primary\">\n      <button\n        type=\"button\"\n        aria-label=\"Toggle sidenav\"\n        mat-icon-button\n        (click)=\"drawer.toggle()\"\n        *ngIf=\"isHandset$ | async\">\n        <mat-icon aria-label=\"Side nav toggle icon\">menu</mat-icon>\n      </button>\n      <span>reseau-social-e2e</span>\n    </mat-toolbar>\n    <!-- Add Content Here -->\n  </mat-sidenav-content>\n</mat-sidenav-container>\n"

/***/ }),

/***/ "./src/app/main/main.component.ts":
/*!****************************************!*\
  !*** ./src/app/main/main.component.ts ***!
  \****************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MainComponent = /** @class */ (function () {
    function MainComponent(breakpointObserver) {
        this.breakpointObserver = breakpointObserver;
        this.isHandset$ = this.breakpointObserver.observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].Handset)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (result) { return result.matches; }));
    }
    MainComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'main',
            template: __webpack_require__(/*! ./main.component.html */ "./src/app/main/main.component.html"),
            styles: [__webpack_require__(/*! ./main.component.css */ "./src/app/main/main.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["BreakpointObserver"]])
    ], MainComponent);
    return MainComponent;
}());



/***/ }),

/***/ "./src/app/member-action.service.ts":
/*!******************************************!*\
  !*** ./src/app/member-action.service.ts ***!
  \******************************************/
/*! exports provided: MemberActionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MemberActionService", function() { return MemberActionService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./config */ "./src/app/config.ts");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MemberActionService = /** @class */ (function () {
    function MemberActionService(http) {
        this.http = http;
        this._findMember = 'http://localhost:5000/api/member';
        this.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_3__(_config__WEBPACK_IMPORTED_MODULE_2__["Config"].SOCKET_HOST);
    }
    /*   onSearch(){
        let observable= new Observable<any>
        (observer => {
          this.socket.on('find',(data)=> {
            observer.next(data);
          });
          return () => {
            this.socket.disconnect();
          }
         
        })
        return observable;
      } */
    MemberActionService.prototype.searchResult = function (keyword) {
        return this.http.post(this._findMember, keyword);
    };
    MemberActionService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], MemberActionService);
    return MemberActionService;
}());



/***/ }),

/***/ "./src/app/member-search/member-search.component.css":
/*!***********************************************************!*\
  !*** ./src/app/member-search/member-search.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#search{\n    width: 30%;\n  }\n\n  .example-form {\n    min-width: 150px;\n    max-width: 500px;\n    width: 100%;\n  }\n\n  .example-full-width {\n    width: 100%;\n  }"

/***/ }),

/***/ "./src/app/member-search/member-search.component.html":
/*!************************************************************!*\
  !*** ./src/app/member-search/member-search.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n <form class=\"example-form\" #search=\"ngForm\" (submit)=\"searchMember();search.reset()\">\n    <mat-form-field class=\"example-full-width\">\n        \n      <input matInput placeholder=\"Email\" type=\"text\" name=\"name\" id=\"search\" [(ngModel)]=\"keyword.name\" required>\n      <i class=\"material-icons\">\n          search\n          </i>\n    </mat-form-field>\n\n</form> "

/***/ }),

/***/ "./src/app/member-search/member-search.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/member-search/member-search.component.ts ***!
  \**********************************************************/
/*! exports provided: MemberSearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MemberSearchComponent", function() { return MemberSearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _member_action_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../member-action.service */ "./src/app/member-action.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MemberSearchComponent = /** @class */ (function () {
    function MemberSearchComponent(memberActionService) {
        this.memberActionService = memberActionService;
        this.keyword = {
            name: ''
        };
    }
    MemberSearchComponent.prototype.ngOnInit = function () {
    };
    MemberSearchComponent.prototype.searchMember = function () {
        console.log(this.keyword);
        this.memberActionService.searchResult(this.keyword)
            .subscribe(function (res) {
            console.log('', res);
        });
        //console.log(this.keyword);
    };
    MemberSearchComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-member-search',
            template: __webpack_require__(/*! ./member-search.component.html */ "./src/app/member-search/member-search.component.html"),
            styles: [__webpack_require__(/*! ./member-search.component.css */ "./src/app/member-search/member-search.component.css")]
        }),
        __metadata("design:paramtypes", [_member_action_service__WEBPACK_IMPORTED_MODULE_1__["MemberActionService"]])
    ], MemberSearchComponent);
    return MemberSearchComponent;
}());



/***/ }),

/***/ "./src/app/models/user.ts":
/*!********************************!*\
  !*** ./src/app/models/user.ts ***!
  \********************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
var User = /** @class */ (function () {
    function User(user) {
        this.first_name = user.first_name;
        this.last_name = user.last_name;
        this.pseudo = user.pseudo;
        this.email = user.last_name;
        this.dateNaissance = user.dateNaissance;
        this.password = user.password;
        this.gender = user.gender;
        this.roleAdmin = false;
        this.picture = user.picture;
        this.friendList = user.friendsList;
    }
    return User;
}());



/***/ }),

/***/ "./src/app/navigation/navigation.component.css":
/*!*****************************************************!*\
  !*** ./src/app/navigation/navigation.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sidenav-container {\n  height: 100%;\n \n}\n\n.sidenav {\n  width: 200px;\n  box-shadow: 3px 0 6px rgba(0,0,0,.24);\n  height: 100%;\n}\n\n\n"

/***/ }),

/***/ "./src/app/navigation/navigation.component.html":
/*!******************************************************!*\
  !*** ./src/app/navigation/navigation.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<mat-sidenav-container class=\"sidenav-container\" >\n  <mat-sidenav #sidenav [mode]=\"over\" color=\"primary\">\n    \n    <mat-toolbar color=\"primary\">\n        <p><button *ngIf=\"getUserState()\" mat-button (click)=\"sidenav.toggle()\">Mon espace</button></p>\n      </mat-toolbar>\n  </mat-sidenav>\n  <mat-toolbar color=\"primary\">\n     \n  </mat-toolbar>\n  <mat-sidenav-content color=\"primary\">\n      <mat-toolbar color=\"primary\">\n          <button *ngIf=\"getUserState()\" mat-button (click)=\"sidenav.toggle()\">Menu</button>\n          \n      </mat-toolbar>\n  </mat-sidenav-content>\n</mat-sidenav-container>\n\n\n"

/***/ }),

/***/ "./src/app/navigation/navigation.component.ts":
/*!****************************************************!*\
  !*** ./src/app/navigation/navigation.component.ts ***!
  \****************************************************/
/*! exports provided: NavigationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationComponent", function() { return NavigationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NavigationComponent = /** @class */ (function () {
    function NavigationComponent(breakpointObserver, authService) {
        this.breakpointObserver = breakpointObserver;
        this.authService = authService;
        this.isAuth = false;
        this.title = 'app';
        this.isHandset$ = this.breakpointObserver.observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].Handset)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (result) { return result.matches; }));
    }
    NavigationComponent.prototype.ngOnInit = function () {
    };
    NavigationComponent.prototype.getUserState = function () {
        this.isAuth = !!this.authService.getToken();
        return this.isAuth;
    };
    NavigationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'navigation',
            template: __webpack_require__(/*! ./navigation.component.html */ "./src/app/navigation/navigation.component.html"),
            styles: [__webpack_require__(/*! ./navigation.component.css */ "./src/app/navigation/navigation.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["BreakpointObserver"], _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], NavigationComponent);
    return NavigationComponent;
}());



/***/ }),

/***/ "./src/app/new-password/new-password.component.css":
/*!*********************************************************!*\
  !*** ./src/app/new-password/new-password.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/new-password/new-password.component.html":
/*!**********************************************************!*\
  !*** ./src/app/new-password/new-password.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<p>\n\n  Un nouveau mot de passe a été envoyé a votre adresse email, Merci de verifier votre boite aux lettres ainsi que le dossier spam !\n  \n</p>\n"

/***/ }),

/***/ "./src/app/new-password/new-password.component.ts":
/*!********************************************************!*\
  !*** ./src/app/new-password/new-password.component.ts ***!
  \********************************************************/
/*! exports provided: NewPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewPasswordComponent", function() { return NewPasswordComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NewPasswordComponent = /** @class */ (function () {
    function NewPasswordComponent(dialogRef) {
        this.dialogRef = dialogRef;
    }
    NewPasswordComponent.prototype.ngOnInit = function () {
    };
    NewPasswordComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-new-password',
            template: __webpack_require__(/*! ./new-password.component.html */ "./src/app/new-password/new-password.component.html"),
            styles: [__webpack_require__(/*! ./new-password.component.css */ "./src/app/new-password/new-password.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]])
    ], NewPasswordComponent);
    return NewPasswordComponent;
}());



/***/ }),

/***/ "./src/app/register/register.component.html":
/*!**************************************************!*\
  !*** ./src/app/register/register.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n  <form #register=\"ngForm\"class=\"example-form\">\n    \n    \n      <table class=\"example-full-width\" cellspacing=\"20\">\n        <tr>\n        <td><mat-form-field class=\"example-full-width\">\n          <input matInput [(ngModel)]='user.first_name' name=\"first_name\"  required  placeholder=\"Prénom\">\n        </mat-form-field></td>\n        <td><mat-form-field class=\"example-full-width\">\n          <input matInput [(ngModel)]='user.last_name' name=\"last_name\"  required  placeholder=\"Nom\">\n        </mat-form-field></td>\n      </tr>\n    \n      <tr>\n        <td>\n            <mat-form-field>\n                <input matInput placeholder=\"Email\" [(ngModel)]=\"user.email\" name=\"email\"  [formControl]=\"email\" \n                pattern=\"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,3}$\"\n                required>\n                <mat-error *ngIf=\"email.invalid\">{{getErrorMessage()}}</mat-error>\n              </mat-form-field>\n        </td>\n        <td>\n            <mat-form-field>\n                <input  #password minlength=\"6\" matInput placeholder=\"Choix du mot de passe\" [(ngModel)]=\"user.password\" required name=\"password\"  [type]=\"hide ? 'password' : 'text'\">\n                <mat-hint align=\"end\">{{password.value.length}} / 6</mat-hint>\n                <mat-icon matSuffix (click)=\"hide = !hide\">{{hide ? 'visibility' : 'visibility_off'}}</mat-icon>\n         </mat-form-field>\n        </td>\n      </tr>\n  \n       <tr>\n         <td>\n            <mat-form-field>\n                <mat-select classe=\"example-form\" placeholder=\"Genre\" [(ngModel)]=\"user.gender\" name=\"genre\" value=\"user.gender\" required>\n                    <mat-option selected value=\"femme\">Femme</mat-option>\n                    <mat-option value=\"homme\">Homme</mat-option>\n                  </mat-select>\n            </mat-form-field>\n         </td>\n          \n         <td>\n            <mat-form-field>\n                <input matInput placeholder=\"Choix du pseudo\" [(ngModel)]=\"user.pseudo\" required name=\"pseudo\">\n                \n         </mat-form-field>\n\n         </td>\n\n\n       </tr>\n        \n       \n    \n  \n     <tr>\n        <td><mat-form-field class=\"example-full-width\">\n          <input type=\"date\" matInput placeholder=\"Date de Naissance\" required>\n        </mat-form-field></td>\n    \n      </tr>\n    </table>\n      \n      <button mat-raised-button color=\"primary\" [disabled]=\"!register.form.valid ||email.invalid \"  (click)=\"registerUser()\" routerLink=\"userdata\">S'enregistrer</button>\n\n    </form>\n    \n"

/***/ }),

/***/ "./src/app/register/register.component.ts":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/user */ "./src/app/models/user.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(authService, _router) {
        this.authService = authService;
        this._router = _router;
        this.photoUpload = null;
        this.email = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].email]);
        this.hide = true;
        this.user = new _models_user__WEBPACK_IMPORTED_MODULE_1__["User"]({ first_name: '',
            last_name: '',
            email: '',
            gender: '',
            password: '',
            pseudo: '',
            dateNaissance: '',
            roleAdmin: false,
            friendsList: [],
            pictures: '',
        });
    }
    RegisterComponent.prototype.getErrorMessage = function () {
        return this.email.hasError('required') ? 'Le champs doit etre rempli' :
            this.email.hasError('email') ? "Le format de l'adresse Email est invalide" : '';
    };
    RegisterComponent.prototype.ngOnInit = function () {
        if (this.authService.getToken()) {
            this._router.navigate(['/userdata']);
        }
    };
    RegisterComponent.prototype.registerUser = function () {
        var _this = this;
        this.authService.registerUser(this.user)
            .subscribe(function (res) {
            localStorage.setItem('token', res.token);
            _this._router.navigate(['/userdata']);
        });
    };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/register/register.component.html"),
            styles: [__webpack_require__(/*! ../login/login.component.css */ "./src/app/login/login.component.css")],
        }),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/stats/stats.component.css":
/*!*******************************************!*\
  !*** ./src/app/stats/stats.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n.example-spacer {\n    flex: 1 1 auto;\n    width: 100px;\n  }\n\n  .stats{\n      width: 200px;\n      display: flex;\n      flex-flow: row wrap;\n      justify-content: space-around;\n  }"

/***/ }),

/***/ "./src/app/stats/stats.component.html":
/*!********************************************!*\
  !*** ./src/app/stats/stats.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"stats\">\n    <div matBadge=\"{{nbComments}}\" matBadgeOverlap=\"false\" matBadgeColor=\"warn\">Posts</div>\n    \n    <div matBadge=\"{{nbConnected}}\" matBadgeOverlap=\"false\" matBadgeColor=\"warn\">Connectés</div>\n\n</div>"

/***/ }),

/***/ "./src/app/stats/stats.component.ts":
/*!******************************************!*\
  !*** ./src/app/stats/stats.component.ts ***!
  \******************************************/
/*! exports provided: StatsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatsComponent", function() { return StatsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _comment_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../comment.service */ "./src/app/comment.service.ts");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var StatsComponent = /** @class */ (function () {
    function StatsComponent(commentService, authService) {
        this.commentService = commentService;
        this.authService = authService;
    }
    StatsComponent.prototype.ngOnInit = function () {
    };
    StatsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-stats',
            template: __webpack_require__(/*! ./stats.component.html */ "./src/app/stats/stats.component.html"),
            styles: [__webpack_require__(/*! ./stats.component.css */ "./src/app/stats/stats.component.css")]
        }),
        __metadata("design:paramtypes", [_comment_service__WEBPACK_IMPORTED_MODULE_1__["CommentService"], _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], StatsComponent);
    return StatsComponent;
}());



/***/ }),

/***/ "./src/app/token.service.ts":
/*!**********************************!*\
  !*** ./src/app/token.service.ts ***!
  \**********************************/
/*! exports provided: TokenService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenService", function() { return TokenService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TokenService = /** @class */ (function () {
    function TokenService(injector) {
        this.injector = injector;
    }
    TokenService.prototype.intercept = function (req, next) {
        var authService = this.injector.get(_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]);
        var tokenizedReq = req.clone({
            headers: req.headers.set('Authorization', 'bearer ' + authService.getToken())
        });
        return next.handle(tokenizedReq);
    };
    TokenService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]])
    ], TokenService);
    return TokenService;
}());



/***/ }),

/***/ "./src/app/uploader/uploader.component.css":
/*!*************************************************!*\
  !*** ./src/app/uploader/uploader.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/uploader/uploader.component.html":
/*!**************************************************!*\
  !*** ./src/app/uploader/uploader.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n"

/***/ }),

/***/ "./src/app/uploader/uploader.component.ts":
/*!************************************************!*\
  !*** ./src/app/uploader/uploader.component.ts ***!
  \************************************************/
/*! exports provided: UploaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploaderComponent", function() { return UploaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UploaderComponent = /** @class */ (function () {
    function UploaderComponent() {
    }
    UploaderComponent.prototype.ngOnInit = function () {
    };
    UploaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-uploader',
            template: __webpack_require__(/*! ./uploader.component.html */ "./src/app/uploader/uploader.component.html"),
            styles: [__webpack_require__(/*! ./uploader.component.css */ "./src/app/uploader/uploader.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], UploaderComponent);
    return UploaderComponent;
}());



/***/ }),

/***/ "./src/app/user-settings/user-settings.component.css":
/*!***********************************************************!*\
  !*** ./src/app/user-settings/user-settings.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-form {\n    min-width: 150px;\n    max-width: 300px;\n    width: 100%;\n  }\n  \n  .example-full-width {\n    width: 100%;\n  }\n  \n  .container {\n      padding-left: 20%;\n  }"

/***/ }),

/***/ "./src/app/user-settings/user-settings.component.html":
/*!************************************************************!*\
  !*** ./src/app/user-settings/user-settings.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container\">\n<mat-tab-group>\n    <mat-tab label=\"Information du compte\"> \n\n      <form class=\"example-form\" form #info=\"ngForm\">\n        <mat-form-field class=\"example-full-width\">\n          <input matInput placeholder=\"Prenom\"  disabled value=\"{{user.first_name}}\">\n        </mat-form-field>\n        <mat-form-field class=\"example-full-width\">\n          <input matInput placeholder=\"Nom\"  disabled value=\"{{user.last_name}}\" >\n        </mat-form-field>\n        <mat-form-field class=\"example-full-width\">\n          <input matInput name=\"email\" [(ngModel)]=\"user.email\" placeholder=\"Email\" \n           [formControl]=\"email\" \n           pattern=\"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,3}$\"\n           required >\n          <mat-error *ngIf=\"email.invalid\">{{getErrorMessage()}}</mat-error>\n        </mat-form-field>\n        <mat-form-field class=\"example-full-width\">\n          <input matInput name=\"pseudo\" [(ngModel)]=\"user.pseudo\" placeholder=\"Pseudo\"\n           required>\n        </mat-form-field>\n        <button mat-button color=\"primary\" [disabled]=\"!info.form.valid || email.invalid\" (click)=\"update()\" >Mettre à jour </button>\n    \n      </form>\n    \n</mat-tab>\n\n    <mat-tab label=\"Mot de passe\">\n        <form class=\"example-form\" form #passF=\"ngForm\">\n        <mat-form-field>\n            <input  matInput placeholder=\"Nouveau mot de passe\" [(ngModel)]=\"password\" required name=\"password\"  [type]=\"hide ? 'password' : 'text'\">\n            <mat-icon matSuffix (click)=\"!hide = hide\">{{hide ? 'visibility' : 'visibility_off'}}</mat-icon>\n          </mat-form-field>\n          <br>\n          <mat-form-field>\n              <input matInput placeholder=\"Confirmez le mot de passe\" [(ngModel)]=\"retype_password\" required name=\"retype_password\"  [type]=\"hide ? 'password' : 'text'\">\n              <mat-icon matSuffix (click)=\"!hide = hide\">{{hide ? 'visibility' : 'visibility_off'}}</mat-icon>\n            </mat-form-field>\n            <mat-error>\n              {{error}}\n            </mat-error>\n            <button mat-button color=\"primary\" [disabled]=\"!passF.form.valid\" (click)=\"passwordUpdate();passF.reset()\" >Mettre à jour </button>\n\n          </form>\n    </mat-tab>\n   \n    <mat-tab label=\"Photo\"> Content 3 </mat-tab>\n  </mat-tab-group>\n\n</div>"

/***/ }),

/***/ "./src/app/user-settings/user-settings.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/user-settings/user-settings.component.ts ***!
  \**********************************************************/
/*! exports provided: UserSettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserSettingsComponent", function() { return UserSettingsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserSettingsComponent = /** @class */ (function () {
    function UserSettingsComponent(authService, snackBar) {
        this.authService = authService;
        this.snackBar = snackBar;
        this.email = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]);
        this.hide = true;
    }
    UserSettingsComponent.prototype.ngOnInit = function () {
        this.userSettings();
    };
    UserSettingsComponent.prototype.getErrorMessage = function () {
        return this.email.hasError('required') ? 'Le champs doit etre rempli' :
            this.email.hasError('email') ? "Le format de l'adresse Email est invalide" :
                '';
    };
    UserSettingsComponent.prototype.userSettings = function () {
        var _this = this;
        this.user = this.authService.getData().subscribe(function (res) {
            _this.user = res.user;
            console.log(_this.user);
        });
    };
    UserSettingsComponent.prototype.openSnackBar = function (message, action) {
        this.snackBar.open(message, action, {
            duration: 3000,
        });
    };
    UserSettingsComponent.prototype.update = function () {
        var _this = this;
        this.authService.updateUser(this.user)
            .subscribe(function (response) {
            console.log(response);
            _this.messageFromSpace = response;
            _this.openSnackBar(_this.messageFromSpace, null);
        });
    };
    UserSettingsComponent.prototype.passwordUpdate = function () {
        if (this.retype_password === this.password) {
            console.log('password match !!');
        }
        else {
            this.error = "Les mots de passe ne sont pas identiques";
            console.log('password does not match !!');
        }
    };
    UserSettingsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-settings',
            template: __webpack_require__(/*! ./user-settings.component.html */ "./src/app/user-settings/user-settings.component.html"),
            styles: [__webpack_require__(/*! ./user-settings.component.css */ "./src/app/user-settings/user-settings.component.css")]
        }),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"]])
    ], UserSettingsComponent);
    return UserSettingsComponent;
}());



/***/ }),

/***/ "./src/app/userdata/userdata.component.css":
/*!*************************************************!*\
  !*** ./src/app/userdata/userdata.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card {\n    width: 400px;\n  }\n\n  .container {\n      width: 800px;\n      display:flex;\n      flex-flow: row wrap;\n  }"

/***/ }),

/***/ "./src/app/userdata/userdata.component.html":
/*!**************************************************!*\
  !*** ./src/app/userdata/userdata.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <mat-card class=\"card\">\n        <mat-card-header>\n          <mat-card-title>\n            {{userData.first_name}}\n            {{userData.last_name}}\n                </mat-card-title>\n          <mat-card-subtitle>\n            {{userData.pseudo}}\n            <img src=\" {{userData.picture}}\" alt=\"\">\n          </mat-card-subtitle>\n        </mat-card-header>\n        <mat-card-content>\n        </mat-card-content>\n      </mat-card>\n</div>\n\n<app-comments></app-comments>\n"

/***/ }),

/***/ "./src/app/userdata/userdata.component.ts":
/*!************************************************!*\
  !*** ./src/app/userdata/userdata.component.ts ***!
  \************************************************/
/*! exports provided: UserdataComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserdataComponent", function() { return UserdataComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/user */ "./src/app/models/user.ts");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _comment_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../comment.service */ "./src/app/comment.service.ts");
/* harmony import */ var angularfire2_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angularfire2/storage */ "./node_modules/angularfire2/storage/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UserdataComponent = /** @class */ (function () {
    function UserdataComponent(commentService, auth, afStorage) {
        this.commentService = commentService;
        this.auth = auth;
        this.afStorage = afStorage;
        this.userData = _models_user__WEBPACK_IMPORTED_MODULE_1__["User"];
    }
    UserdataComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.auth.getData()
            .subscribe(function (data) {
            _this.userData = data.user;
            console.log(_this.userData);
        });
    };
    UserdataComponent.prototype.upload = function (event) {
        this.afStorage.upload('/', event.target.files[0]);
        console.log('fait');
    };
    UserdataComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-userdata',
            template: __webpack_require__(/*! ./userdata.component.html */ "./src/app/userdata/userdata.component.html"),
            styles: [__webpack_require__(/*! ./userdata.component.css */ "./src/app/userdata/userdata.component.css")]
        }),
        __metadata("design:paramtypes", [_comment_service__WEBPACK_IMPORTED_MODULE_3__["CommentService"], _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], angularfire2_storage__WEBPACK_IMPORTED_MODULE_4__["AngularFireStorage"]])
    ], UserdataComponent);
    return UserdataComponent;
}());



/***/ }),

/***/ "./src/app/websocket.service.ts":
/*!**************************************!*\
  !*** ./src/app/websocket.service.ts ***!
  \**************************************/
/*! exports provided: WebsocketService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebsocketService", function() { return WebsocketService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WebsocketService = /** @class */ (function () {
    function WebsocketService() {
    }
    WebsocketService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], WebsocketService);
    return WebsocketService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    firebase: {
        apiKey: "AIzaSyAlSqMwKKhmxwcaV2yV0JakW1Z3FC-8d3Q",
        authDomain: "reseau-social-c1b9a.firebaseapp.com",
        databaseURL: "https://reseau-social-c1b9a.firebaseio.com",
        projectId: "reseau-social-c1b9a",
        storageBucket: "reseau-social-c1b9a.appspot.com",
        messagingSenderId: "217716745845"
    }
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/fallou/projets/reseau_social/src/main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** ws (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map