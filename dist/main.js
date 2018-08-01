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

module.exports = ".container {\n  margin-top: 5%;\n}\n"

/***/ }),

/***/ "./src/app/admin-dashboard/admin-dashboard.component.html":
/*!****************************************************************!*\
  !*** ./src/app/admin-dashboard/admin-dashboard.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n <app-header></app-header>\n        \n   <link href=\"//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/css/bootstrap.min.css\" rel=\"stylesheet\" id=\"bootstrap-css\">\n<script src=\"//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/js/bootstrap.min.js\"></script>\n<script src=\"//code.jquery.com/jquery-1.11.1.min.js\"></script>\n<!------ Include the above in your HEAD tag ---------->\n\n<link href=\"https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css\" rel=\"stylesheet\">\n<div class=\"container\">\n\t<div class=\"row\">\n      <div class=\"col-lg-3\">\n        <div class=\"panel panel-info\">\n          <div class=\"panel-heading\">\n            <div class=\"row\">\n              <div class=\"col-xs-6\">\n                <i class=\"fa fa-address-card-o fa-5x\"></i>\n              </div>\n              <div class=\"col-xs-6 text-right\">\n                <p class=\"announcement-heading\">Admin</p>\n                <p class=\"announcement-text\">{{user.first_name}} {{user.last_name}}</p>\n              </div>\n            </div>\n          </div>\n         \n        </div>\n      </div>\n  \n      <div class=\"col-lg-3\">\n        <div class=\"panel panel-danger\">\n          <div class=\"panel-heading\">\n            <div class=\"row\">\n              <div class=\"col-xs-6\">\n                <i class=\"fa fa-users fa-5x\"></i>\n              </div>\n              <div class=\"col-xs-6 text-right\">\n                <p class=\"announcement-heading\">{{membersArray.length}}</p>\n                <p class=\"announcement-text\">Membres</p>\n              </div>\n            </div>\n          </div>\n          <a href=\"#\">\n            <div class=\"panel-footer announcement-bottom\">\n              <div class=\"row\">\n                <div class=\"col-xs-6\">\n                  Expand\n                </div>\n                <div class=\"col-xs-6 text-right\">\n                  <i class=\"fa fa-arrow-circle-right\"></i>\n                </div>\n              </div>\n            </div>\n          </a>\n        </div>\n      </div>\n      <div class=\"col-lg-3\">\n        <div class=\"panel panel-success\">\n          <div class=\"panel-heading\">\n            <div class=\"row\">\n              <div class=\"col-xs-6\">\n                <i class=\"fa fa-comments fa-5x\"></i>\n              </div>\n              <div class=\"col-xs-6 text-right\">\n                <p class=\"announcement-heading\">{{commentsArray.length}}</p>\n                <p class=\"announcement-text\"> Nombre de posts</p>\n              </div>\n            </div>\n          </div>\n          <a href=\"#\">\n            <div class=\"panel-footer announcement-bottom\">\n              <div class=\"row\">\n                <div class=\"col-xs-6\">\n                  Expand\n                </div>\n                <div class=\"col-xs-6 text-right\">\n                  <i class=\"fa fa-arrow-circle-right\"></i>\n                </div>\n              </div>\n            </div>\n          </a>\n        </div>\n      </div>\n    </div><!-- /.row -->\n    </div>\n\n    <app-stats></app-stats>"

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
/* harmony import */ var _comment_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../comment.service */ "./src/app/comment.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
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
    function AdminDashboardComponent(authService, commentService, _router) {
        var _this = this;
        this.authService = authService;
        this.commentService = commentService;
        this._router = _router;
        this.commentsArray = [];
        this.membersArray = [];
        this.user = {
            _id: '',
            first_name: '',
            last_name: '',
            pseudo: '',
            email: '',
            admin: false,
            online: false,
            dateNaissance: new Date,
            gender: '',
            password: '',
            friendsList: [
                { status: "", friendId: "" }
            ],
            picture: ''
        };
        this.authService.getData().subscribe(function (res) { return _this.user = res.user; });
        this.authService.onOnlineEvent().subscribe(function (online) { return console.log(online.pseudo); });
        this.commentService.onBegin().subscribe(function (online2) { return console.log('ki est online', online2); });
    }
    ;
    AdminDashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getAllMembers().subscribe(function (res) {
            //console.log(res)
            _this.membersArray = res;
        });
        this.authService.getData().subscribe(function (res) {
            _this.currentUser = res.user;
            console.log(_this.currentUser);
        });
        this.commentService.getComments().subscribe(function (res) {
            _this.commentsArray = res.comments;
            console.log('stats', _this.commentsArray);
        });
        this.commentService.isConnected().subscribe(function (res) { return console.log('le rest', res); });
    };
    AdminDashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'admin-dashboard',
            template: __webpack_require__(/*! ./admin-dashboard.component.html */ "./src/app/admin-dashboard/admin-dashboard.component.html"),
            styles: [__webpack_require__(/*! ./admin-dashboard.component.css */ "./src/app/admin-dashboard/admin-dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"], _comment_service__WEBPACK_IMPORTED_MODULE_2__["CommentService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
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
    }
    AdminGuard.prototype.getData = function () {
        this._authService.getData().subscribe(function (res) {
            console.log("console de chez adminguard ", res);
        });
    };
    AdminGuard.prototype.canActivate = function () {
        if (this._authService.loggedIn() && this._authService.isAdmin) {
            console.log(this._authService.isAdmin);
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
/* harmony import */ var _member_space_member_space_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./member-space/member-space.component */ "./src/app/member-space/member-space.component.ts");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "./src/app/page-not-found/page-not-found.component.ts");
/* harmony import */ var _chat_window_chat_window_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./chat-window/chat-window.component */ "./src/app/chat-window/chat-window.component.ts");
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
    { path: 'notFound', component: _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_14__["PageNotFoundComponent"] },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: 'register', component: _register_register_component__WEBPACK_IMPORTED_MODULE_4__["RegisterComponent"] },
    { path: 'lostpwd', component: _lost_password_lost_password_component__WEBPACK_IMPORTED_MODULE_7__["LostPasswordComponent"] },
    { path: 'passCode/:id', component: _new_password_new_password_component__WEBPACK_IMPORTED_MODULE_12__["NewPasswordComponent"] },
    { path: 'member_space/:pseudo', component: _member_space_member_space_component__WEBPACK_IMPORTED_MODULE_13__["MemberSpaceComponent"],
        children: [
            { path: 'chat_window', component: _chat_window_chat_window_component__WEBPACK_IMPORTED_MODULE_15__["ChatWindowComponent"] }
        ] },
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

module.exports = "<!-- <navigation></navigation> -->\n<div class=\"wrapper\">\n\n<div class=\"header\">\n    \n</div>\n<div class=\"content\">\n    <router-outlet></router-outlet>\n</div>\n\n</div>\n"

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
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/esm5/expansion.es5.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var angular2_image_upload__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! angular2-image-upload */ "./node_modules/angular2-image-upload/index.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/esm5/divider.es5.js");
/* harmony import */ var _livechat_angular_widget__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @livechat/angular-widget */ "./node_modules/@livechat/angular-widget/index.js");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/button-toggle */ "./node_modules/@angular/material/esm5/button-toggle.es5.js");
/* harmony import */ var _token_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./token.service */ "./src/app/token.service.ts");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _lost_password_lost_password_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./lost-password/lost-password.component */ "./src/app/lost-password/lost-password.component.ts");
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./auth.guard */ "./src/app/auth.guard.ts");
/* harmony import */ var _comments_comments_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./comments/comments.component */ "./src/app/comments/comments.component.ts");
/* harmony import */ var _comment_service__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./comment.service */ "./src/app/comment.service.ts");
/* harmony import */ var _uploader_uploader_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./uploader/uploader.component */ "./src/app/uploader/uploader.component.ts");
/* harmony import */ var _user_settings_user_settings_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./user-settings/user-settings.component */ "./src/app/user-settings/user-settings.component.ts");
/* harmony import */ var _websocket_service__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./websocket.service */ "./src/app/websocket.service.ts");
/* harmony import */ var _stats_stats_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./stats/stats.component */ "./src/app/stats/stats.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _member_search_member_search_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./member-search/member-search.component */ "./src/app/member-search/member-search.component.ts");
/* harmony import */ var _member_action_service__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./member-action.service */ "./src/app/member-action.service.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./main/main.component */ "./src/app/main/main.component.ts");
/* harmony import */ var _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./navigation/navigation.component */ "./src/app/navigation/navigation.component.ts");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/esm5/tooltip.es5.js");
/* harmony import */ var _admin_dashboard_admin_dashboard_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./admin-dashboard/admin-dashboard.component */ "./src/app/admin-dashboard/admin-dashboard.component.ts");
/* harmony import */ var _admin_guard__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./admin.guard */ "./src/app/admin.guard.ts");
/* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! angularfire2 */ "./node_modules/angularfire2/index.js");
/* harmony import */ var angularfire2_storage__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! angularfire2/storage */ "./node_modules/angularfire2/storage/index.js");
/* harmony import */ var _new_password_new_password_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./new-password/new-password.component */ "./src/app/new-password/new-password.component.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm5/snack-bar.es5.js");
/* harmony import */ var _friendslist_friendslist_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./friendslist/friendslist.component */ "./src/app/friendslist/friendslist.component.ts");
/* harmony import */ var _members_list_members_list_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./members-list/members-list.component */ "./src/app/members-list/members-list.component.ts");
/* harmony import */ var _member_space_member_space_component__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./member-space/member-space.component */ "./src/app/member-space/member-space.component.ts");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "./src/app/page-not-found/page-not-found.component.ts");
/* harmony import */ var _chat_window_chat_window_component__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./chat-window/chat-window.component */ "./src/app/chat-window/chat-window.component.ts");
/* harmony import */ var _invitation_request_invitation_request_component__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./invitation-request/invitation-request.component */ "./src/app/invitation-request/invitation-request.component.ts");
/* harmony import */ var _app_services_chat_service__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ../app/services/chat.service */ "./src/app/services/chat.service.ts");
/* harmony import */ var _services_pusher_service__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ./services/pusher.service */ "./src/app/services/pusher.service.ts");
/* harmony import */ var _notifications_notifications_component__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ./notifications/notifications.component */ "./src/app/notifications/notifications.component.ts");
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
                _lost_password_lost_password_component__WEBPACK_IMPORTED_MODULE_24__["LostPasswordComponent"],
                _comments_comments_component__WEBPACK_IMPORTED_MODULE_26__["CommentsComponent"],
                _uploader_uploader_component__WEBPACK_IMPORTED_MODULE_28__["UploaderComponent"],
                _user_settings_user_settings_component__WEBPACK_IMPORTED_MODULE_29__["UserSettingsComponent"],
                _stats_stats_component__WEBPACK_IMPORTED_MODULE_31__["StatsComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_32__["HeaderComponent"],
                _member_search_member_search_component__WEBPACK_IMPORTED_MODULE_33__["MemberSearchComponent"],
                _main_main_component__WEBPACK_IMPORTED_MODULE_36__["MainComponent"],
                _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_37__["NavigationComponent"],
                _admin_dashboard_admin_dashboard_component__WEBPACK_IMPORTED_MODULE_39__["AdminDashboardComponent"],
                _new_password_new_password_component__WEBPACK_IMPORTED_MODULE_43__["NewPasswordComponent"],
                _friendslist_friendslist_component__WEBPACK_IMPORTED_MODULE_46__["FriendslistComponent"],
                _members_list_members_list_component__WEBPACK_IMPORTED_MODULE_47__["MembersListComponent"],
                _member_space_member_space_component__WEBPACK_IMPORTED_MODULE_48__["MemberSpaceComponent"],
                _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_49__["PageNotFoundComponent"],
                _chat_window_chat_window_component__WEBPACK_IMPORTED_MODULE_50__["ChatWindowComponent"],
                _invitation_request_invitation_request_component__WEBPACK_IMPORTED_MODULE_51__["InvitationRequestComponent"],
                _notifications_notifications_component__WEBPACK_IMPORTED_MODULE_54__["NotificationsComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_17__["FlexLayoutModule"],
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
                _angular_material_dialog__WEBPACK_IMPORTED_MODULE_44__["MatDialogModule"],
                _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_45__["MatSnackBarModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_35__["BrowserAnimationsModule"],
                _angular_material_expansion__WEBPACK_IMPORTED_MODULE_16__["MatExpansionModule"],
                _angular_material_badge__WEBPACK_IMPORTED_MODULE_15__["MatBadgeModule"],
                _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_38__["MatTooltipModule"],
                _angular_material_divider__WEBPACK_IMPORTED_MODULE_19__["MatDividerModule"],
                _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_21__["MatButtonToggleModule"],
                _livechat_angular_widget__WEBPACK_IMPORTED_MODULE_20__["LivechatWidgetModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatNativeDateModule"],
                angular2_image_upload__WEBPACK_IMPORTED_MODULE_18__["ImageUploadModule"].forRoot(),
                angularfire2__WEBPACK_IMPORTED_MODULE_41__["AngularFireModule"].initializeApp({
                    apiKey: "AIzaSyAlSqMwKKhmxwcaV2yV0JakW1Z3FC-8d3Q",
                    authDomain: "reseau-social-c1b9a.firebaseapp.com",
                    databaseURL: "https://reseau-social-c1b9a.firebaseio.com",
                    projectId: "reseau-social-c1b9a",
                    storageBucket: "reseau-social-c1b9a.appspot.com",
                    messagingSenderId: "217716745845"
                }),
                angularfire2_storage__WEBPACK_IMPORTED_MODULE_42__["AngularFireStorageModule"]
            ],
            providers: [_auth_service__WEBPACK_IMPORTED_MODULE_23__["AuthService"], _admin_guard__WEBPACK_IMPORTED_MODULE_40__["AdminGuard"], _auth_guard__WEBPACK_IMPORTED_MODULE_25__["AuthGuard"], _websocket_service__WEBPACK_IMPORTED_MODULE_30__["WebsocketService"], _app_services_chat_service__WEBPACK_IMPORTED_MODULE_52__["ChatService"], _services_pusher_service__WEBPACK_IMPORTED_MODULE_53__["PusherService"], _comment_service__WEBPACK_IMPORTED_MODULE_27__["CommentService"], _member_action_service__WEBPACK_IMPORTED_MODULE_34__["MemberActionService"],
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HTTP_INTERCEPTORS"],
                    useClass: _token_service__WEBPACK_IMPORTED_MODULE_22__["TokenService"],
                    multi: true
                }],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
            entryComponents: [_chat_window_chat_window_component__WEBPACK_IMPORTED_MODULE_50__["ChatWindowComponent"]]
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
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_5__);
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
            _id: '',
            email: '',
            pseudo: '',
            password: '',
            admin: false,
            online: false,
        };
        this.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_5__(_config__WEBPACK_IMPORTED_MODULE_3__["Config"].SOCKET_HOST);
        this.url = _config__WEBPACK_IMPORTED_MODULE_3__["Config"].SOCKET_HOST || "http://localhost";
        this._registerURL = this.url + '/api/register';
        this._checkPseudoURL = this.url + '/api/checkPseudo';
        this._checkEmailURL = this.url + '/api/checkEmail';
        this._loginURL = this.url + '/api/login';
        this._userdataURL = this.url + '/api/userdata';
        this._lostPassword = this.url + '/api/lostpwd';
        this._home = this.url + '/api/';
        this._admin = this.url + '/api/admin';
        this._updateUser = this.url + '/api/update';
        this._updateUserSatus = this.url + '/api/updatestatut';
        this._getAllMembers = this.url + '/api/getAllMembers';
        this._memberUrl = this.url + '/api/member_space';
        this.connected = 0;
    }
    AuthService.prototype.onOnlineEvent = function () {
        var _this = this;
        var observable = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"](function (observer) {
            _this.socket.on('iamOnline:res', function (data) {
                observer.next(data);
            });
            return function () { _this.socket.disconnect(); };
        });
        return observable;
    };
    AuthService.prototype.onOfflineEvent = function () {
        var _this = this;
        var observable = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"](function (observer) {
            _this.socket.on('iamOffline:res', function (data) {
                observer.next(data);
            });
            return function () { _this.socket.disconnect(); };
        });
        return observable;
    };
    AuthService.prototype.checkPseudo = function (user) {
        return this.http.post(this._checkPseudoURL, user);
    };
    AuthService.prototype.checkEmail = function (user) {
        return this.http.post(this._checkEmailURL, user);
    };
    AuthService.prototype.registerUser = function (user) {
        return this.http.post(this._registerURL, user);
    };
    AuthService.prototype.updateUserStatus = function (user) {
        return this.http.put(this._updateUserSatus, user);
    };
    AuthService.prototype.updateUser = function (user) {
        return this.http.put(this._updateUser, user);
    };
    AuthService.prototype.loginUser = function (user) {
        return this.http.post(this._loginURL, user);
    };
    AuthService.prototype.getToken = function () {
        return localStorage.getItem('token');
    };
    AuthService.prototype.iamOnline = function (user) {
        this.socket.emit('iamOnline', user);
        //this.postComment(data).subscribe();
    };
    AuthService.prototype.iamOffline = function (user) {
        this.socket.emit('iamOffline', user);
    };
    AuthService.prototype.onLeave = function (user) {
        user.online = false;
        this.updateUser(user);
    };
    AuthService.prototype.logoutUser = function () {
        localStorage.removeItem('token');
        //this._router.navigate(['/home']);
    };
    AuthService.prototype.loggedIn = function () {
        return !!localStorage.getItem('token');
    };
    AuthService.prototype.lostPassword = function (_email) {
        return this.http.post(this._lostPassword, _email);
    };
    AuthService.prototype.isAdmin = function () {
        return true;
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
    AuthService.prototype.getAllMembers = function () {
        return this.http.get(this._getAllMembers);
    };
    AuthService.prototype.memberSpace = function (pseudo) {
        return this.http.get(this._memberUrl + '/' + pseudo, { params: pseudo });
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/chat-window/chat-window.component.css":
/*!*******************************************************!*\
  !*** ./src/app/chat-window/chat-window.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\nbody{\n  height:400px;\n  position: fixed;\n  bottom: 0;\n}\n.col-md-2, .col-md-10{\n  padding:0;\n}\n.panel{\n  margin-bottom: 0px;\n}\n.chat-window{\n  bottom:0;\n  position:fixed;\n  float:right;\n  margin-left:10px;\n}\n.chat-window > div > .panel{\n  border-radius: 5px 5px 0 0;\n}\n.icon_minim{\n  padding:2px 10px;\n}\n.msg_container_base{\nbackground: #e5e5e5;\nmargin: 0;\npadding: 0 10px 10px;\nmax-height:300px;\noverflow-x:hidden;\n}\n.top-bar {\nbackground: #666;\ncolor: white;\npadding: 10px;\nposition: relative;\noverflow: hidden;\n}\n.msg_receive{\n  padding-left:0;\n  margin-left:0;\n}\n.msg_sent{\n  padding-bottom:20px !important;\n  margin-right:0;\n}\n.messages {\nbackground: white;\npadding: 10px;\nborder-radius: 2px;\nbox-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);\nmax-width:100%;\n}\n.messages > p {\n  font-size: 13px;\n  margin: 0 0 0.2rem 0;\n}\n.messages > time {\n  font-size: 11px;\n  color: #ccc;\n}\n.msg_container {\n  padding: 10px;\n  overflow: hidden;\n  display: flex;\n}\nimg {\n  display: block;\n  \n}\n.avatar {\n  position: relative;\n}\n.base_receive > .avatar:after {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  right: 0;\n  width: 0;\n  height: 0;\n  border: 5px solid #FFF;\n  border-left-color: rgba(0, 0, 0, 0);\n  border-bottom-color: rgba(0, 0, 0, 0);\n}\n.base_sent {\njustify-content: flex-end;\nalign-items: flex-end;\n}\n.base_sent > .avatar:after {\n  content: \"\";\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 0;\n  height: 0;\n  border: 5px solid white;\n  border-right-color: transparent;\n  border-top-color: transparent;\n  box-shadow: 1px 1px 2px rgba(black, 0.2); \n}\n.msg_sent > time{\n  float: right;\n}\n.msg_container_base::-webkit-scrollbar-track\n{\n  -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);\n  background-color: #F5F5F5;\n}\n.msg_container_base::-webkit-scrollbar\n{\n  width: 12px;\n  background-color: #F5F5F5;\n}\n.msg_container_base::-webkit-scrollbar-thumb\n{\n  -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);\n  background-color: #555;\n}\n.btn-group.dropup{\n  position:fixed;\n  left:0px;\n  bottom:0;\n}"

/***/ }),

/***/ "./src/app/chat-window/chat-window.component.html":
/*!********************************************************!*\
  !*** ./src/app/chat-window/chat-window.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<link href=\"//netdna.bootstrapcdn.com/bootstrap/3.1.0/css/bootstrap.min.css\" rel=\"stylesheet\" id=\"bootstrap-css\">\n<script src=\"//netdna.bootstrapcdn.com/bootstrap/3.1.0/js/bootstrap.min.js\"></script>\n<script src=\"//code.jquery.com/jquery-1.11.1.min.js\"></script>\n<!------ Include the above in your HEAD tag ---------->\n\n<!-- <div class=\"chatbox\">\n<form #chat=\"ngForm\">\n\n    <div class=\"message\" *ngFor=\"let message of commentsArray \">\n\n   \n   <strong> <img src=\"{{message.authorPicture}}\" class=\"rounded\" width=\"48px\" alt=\"\"> {{message.author}}:</strong>\n    <br>\n    {{message.text}}\n\n\n    </div>\n\n\n\n    <input type=\"text\" name=\"message\" [(ngModel)]=\"message.text\" required >\n    <button class=\"btn btn-primary\" [disabled]=\"!chat.form.valid \"  type=\"submit\" (click)=\"sent()\">Envoyer</button>\n\n</form>\n\n</div> -->\n\n\n\n<div class=\"container\">\n    <div class=\"row chat-window \" id=\"chat_window_1\" style=\"margin-left:10px;\">\n        <div class=\"col-xs-12 col-md-12\">\n        \t<div class=\"panel panel-default\">\n                <div class=\"panel-heading top-bar\">\n                    <div class=\"col-md-12 col-xs-12\">\n                        <h3 class=\"panel-title\"><span class=\"glyphicon glyphicon-comment\"></span> Chat</h3>\n                    </div>\n                    <div class=\"col-md-4 col-xs-4\" style=\"text-align: right;\">\n                        <a href=\"\"><span id=\"minim_chat_window\" class=\"glyphicon glyphicon-minus icon_minim\"></span></a>\n                        <a href=\"\"><span class=\"glyphicon glyphicon-remove icon_close\" data-id=\"chat_window_1\"></span></a>\n                    </div>\n                </div>\n                <form #chat=\"ngForm\">\n\n                    <div class=\"message\" *ngFor=\"let message of commentsArray \">\n                \n                   \n                   <strong> <img src=\"{{message.authorPicture}}\" class=\"rounded\" width=\"48px\" alt=\"\"> {{message.author}}</strong>\n                    <br>\n                    {{message.text}}\n                \n                \n                    </div>\n                \n                \n                \n                    <input type=\"text\" name=\"message\" [(ngModel)]=\"message.text\" required >\n                    <button class=\"btn btn-primary\" [disabled]=\"!chat.form.valid \"  type=\"submit\" (click)=\"sent()\">Envoyer</button>\n                \n                </form>\n                \n                </div>\n                \n    \t\t</div>\n        </div>\n    \n    \n    <div class=\"btn-group dropup\">\n<!--         <button type=\"button\" class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\">\n            <span class=\"glyphicon glyphicon-cog\"></span>\n            <span class=\"sr-only\">Toggle Dropdown</span>\n        </button> -->\n<!--         <ul class=\"dropdown-menu\" role=\"menu\">\n            <li><a href=\"#\" id=\"new_chat\"><span class=\"glyphicon glyphicon-plus\"></span> Novo</a></li>\n            <li><a href=\"#\"><span class=\"glyphicon glyphicon-list\"></span> Ver outras</a></li>\n            <li><a href=\"#\"><span class=\"glyphicon glyphicon-remove\"></span> Fechar Tudo</a></li>\n            <li class=\"divider\"></li>\n            <li><a href=\"#\"><span class=\"glyphicon glyphicon-eye-close\"></span> Invisivel</a></li>\n        </ul> -->\n    </div>\n</div>\n\n\n\n\n\n\n\n<script>\n\n    $(document).on('click', '.panel-heading span.icon_minim', function (e) {\n    var $this = $(this);\n    if (!$this.hasClass('panel-collapsed')) {\n        $this.parents('.panel').find('.panel-body').slideUp();\n        $this.addClass('panel-collapsed');\n        $this.removeClass('glyphicon-minus').addClass('glyphicon-plus');\n    } else {\n        $this.parents('.panel').find('.panel-body').slideDown();\n        $this.removeClass('panel-collapsed');\n        $this.removeClass('glyphicon-plus').addClass('glyphicon-minus');\n    }\n});\n$(document).on('focus', '.panel-footer input.chat_input', function (e) {\n    var $this = $(this);\n    if ($('#minim_chat_window').hasClass('panel-collapsed')) {\n        $this.parents('.panel').find('.panel-body').slideDown();\n        $('#minim_chat_window').removeClass('panel-collapsed');\n        $('#minim_chat_window').removeClass('glyphicon-plus').addClass('glyphicon-minus');\n    }\n});\n$(document).on('click', '#new_chat', function (e) {\n    var size = $( \".chat-window:last-child\" ).css(\"margin-left\");\n     size_total = parseInt(size) + 400;\n    alert(size_total);\n    var clone = $( \"#chat_window_1\" ).clone().appendTo( \".container\" );\n    clone.css(\"margin-left\", size_total);\n});\n$(document).on('click', '.icon_close', function (e) {\n    //$(this).parent().parent().parent().parent().remove();\n    $( \"#chat_window_1\" ).remove();\n});\n</script>"

/***/ }),

/***/ "./src/app/chat-window/chat-window.component.ts":
/*!******************************************************!*\
  !*** ./src/app/chat-window/chat-window.component.ts ***!
  \******************************************************/
/*! exports provided: ChatWindowComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatWindowComponent", function() { return ChatWindowComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _chat_chat_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../chat/chat.service */ "./src/app/chat/chat.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ChatWindowComponent = /** @class */ (function () {
    function ChatWindowComponent(authService, chatService) {
        var _this = this;
        this.authService = authService;
        this.chatService = chatService;
        this.message = {
            id: '',
            sentAt: new Date,
            author: '',
            text: '',
            authorPicture: ''
        };
        this.commentsArray = [];
        this.authService.getData().subscribe(function (res) { return _this.user = res.user; });
        this.chatService.messageSent().subscribe(function (res) { return _this.commentsArray.push(res); });
    }
    ChatWindowComponent.prototype.ngOnInit = function () {
    };
    ChatWindowComponent.prototype.sent = function () {
        this.message.id = this.user._id;
        this.message.author = this.user.pseudo;
        this.message.authorPicture = this.user.picture;
        this.chatService.sendMessage(this.message);
        this.message.text = '';
    };
    ChatWindowComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-chat-window',
            template: __webpack_require__(/*! ./chat-window.component.html */ "./src/app/chat-window/chat-window.component.html"),
            styles: [__webpack_require__(/*! ./chat-window.component.css */ "./src/app/chat-window/chat-window.component.css")]
        }),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"], _chat_chat_service__WEBPACK_IMPORTED_MODULE_2__["ChatService"]])
    ], ChatWindowComponent);
    return ChatWindowComponent;
}());



/***/ }),

/***/ "./src/app/chat/chat.service.ts":
/*!**************************************!*\
  !*** ./src/app/chat/chat.service.ts ***!
  \**************************************/
/*! exports provided: ChatService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatService", function() { return ChatService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../app/config */ "./src/app/config.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ChatService = /** @class */ (function () {
    function ChatService() {
        this.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_1__(_app_config__WEBPACK_IMPORTED_MODULE_3__["Config"].SOCKET_HOST);
    }
    //Chat message sent observable 
    ChatService.prototype.messageSent = function () {
        var _this = this;
        var observable = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
            _this.socket.on('message:sent', function (data) {
                observer.next(data);
            });
            return function () { _this.socket.disconnect(); };
        });
        return observable;
    };
    ChatService.prototype.messageSentToRoom = function () {
        var _this = this;
        var observable = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
            _this.socket.on('message:sent', function (data) {
                observer.next(data);
            });
            return function () { _this.socket.disconnect(); };
        });
        return observable;
    };
    ChatService.prototype.onInvitationChatRequest = function () {
        var _this = this;
        var observable = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
            _this.socket.on('chat:request', function (data) {
                observer.next(data);
            });
            return function () { _this.socket.disconnect(); };
        });
        return observable;
    };
    ChatService.prototype.sendMessage = function (data) {
        this.socket.emit('sent', data);
    };
    ChatService.prototype.sendChatInvitation = function (data) {
        this.socket.emit('chat:invitationRequest', data);
    };
    ChatService.prototype.sentRoom = function (data, room) {
    };
    ChatService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], ChatService);
    return ChatService;
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
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./config */ "./src/app/config.ts");
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
        this.url = _config__WEBPACK_IMPORTED_MODULE_5__["Config"].SOCKET_HOST || "http://localhost";
        this._postCommentUrl = this.url + '/api/post_comment';
        //For each member's space
        this._getCommentPostedUrl = this.url + '/api/get_member_comments';
        //Admin & stats
        this._getAllUserCommentsUrl = this.url + '/api/comments';
        this._chatUrl = this.url + '/api/chat';
        this.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_3__(_config__WEBPACK_IMPORTED_MODULE_5__["Config"].SOCKET_HOST);
    }
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
    CommentService.prototype.isConnected = function () {
        var _this = this;
        var observable = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"](function (observer) {
            _this.socket.on('isconnected', function (data) {
                observer.next(data);
            });
            return function () { _this.socket.disconnect(); };
        });
        return observable;
    };
    CommentService.prototype.onLogin = function (data) {
        this.socket.emit('login', data);
    };
    CommentService.prototype.getMemberComments = function (pseudo) {
        return this.http.get(this._getCommentPostedUrl + '/' + pseudo, { params: pseudo });
    };
    CommentService.prototype.postMessage = function (data) {
        this.socket.emit('posted', data);
        this.postComment(data).subscribe();
    };
    CommentService.prototype.getAllMember = function () {
        var _this = this;
        var observable = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"](function (observer) {
            _this.socket.on('allmember', function (data) {
                observer.next(data);
            });
            return function () { _this.socket.disconnect(); };
        });
        return observable;
    };
    CommentService.prototype.postComment = function (comment) {
        return this.http.post(this._postCommentUrl, comment);
    };
    CommentService.prototype.getComments = function () {
        return this.http.get(this._getAllUserCommentsUrl);
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
        /*   URL = "localhost"
          public static  get SOCKET_HOST(): string {
            return "http://localhost:5000" || 'https://dry-fortress-71234.herokuapp.com';
          } */
    }
    Object.defineProperty(Config, "SOCKET_HOST", {
        get: function () {
            return "https://dry-fortress-71234.herokuapp.com";
        },
        enumerable: true,
        configurable: true
    });
    return Config;
}());



/***/ }),

/***/ "./src/app/friendslist/friendslist.component.css":
/*!*******************************************************!*\
  !*** ./src/app/friendslist/friendslist.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/friendslist/friendslist.component.html":
/*!********************************************************!*\
  !*** ./src/app/friendslist/friendslist.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  friendslist works!\n</p>\n"

/***/ }),

/***/ "./src/app/friendslist/friendslist.component.ts":
/*!******************************************************!*\
  !*** ./src/app/friendslist/friendslist.component.ts ***!
  \******************************************************/
/*! exports provided: FriendslistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FriendslistComponent", function() { return FriendslistComponent; });
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


var FriendslistComponent = /** @class */ (function () {
    function FriendslistComponent(authService) {
        this.authService = authService;
    }
    FriendslistComponent.prototype.ngOnInit = function () {
    };
    FriendslistComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-friendslist',
            template: __webpack_require__(/*! ./friendslist.component.html */ "./src/app/friendslist/friendslist.component.html"),
            styles: [__webpack_require__(/*! ./friendslist.component.css */ "./src/app/friendslist/friendslist.component.css")]
        }),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], FriendslistComponent);
    return FriendslistComponent;
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

module.exports = "\n<mat-toolbar color=\"primary\">\n   <mat-toolbar-row>\n        <span>Réseau Social</span>\n        <span class=\"example-spacer\"></span>\n        \n             <a routerLink=\"/\" routerLinkActive=\"active\"><i class=\"material-icons\" matTooltip=\"Page d'accueil\">\n            home\n            </i></a> \n        <span class=\"example-spacer\"></span>\n        <div class=\"infos\">\n            <div>\n                <a routerLink=\"/member_space/{{user.pseudo}}\" matTooltip=\"Mon espace \"><img src=\"{{user.picture}}\"  alt=\"\"></a>            \n            </div>\n            <div>\n                {{user.first_name}} {{user.last_name}} \n            </div>\n           </div>\n           <span class=\"example-spacer\"></span>\n           <span><a *ngIf=\"user.admin\" routerLink=\"/admin\" routerLinkActive=\"active\">  <i class=\"material-icons\" matTooltip=\"Admin\">\n            supervised_user_circle\n      </i></a></span>\n      <span class=\"example-spacer\"></span>\n      <span><a *ngIf=\"!getUserState()\"  routerLink=\"/login\" routerLinkActive=\"active\"><i class=\"user outline icon\"></i></a></span>\n      <span class=\"example-spacer\"></span>\n      <span><a *ngIf=\"getUserState()\" routerLink=\"/user-settings\" routerLinkActive=\"active\">  <i class=\"material-icons\" matTooltip=\"Paramettres du compte\">\n            settings\n            </i></a></span>\n            <span class=\"example-spacer\"></span>\n            <span class=\"example-spacer\"></span>\n\n     \n\n      <span class=\"example-spacer\"></span>\n      <!-- <span><a *ngIf=\"getUserState()\"  routerLink=\"/userdata\" routerLinkActive=\"active\"><i class=\"fas fa-user-circle\"></i></a></span> -->\n      \n      <a *ngIf=\"!getUserState()\" class=\"item\" routerLink=\"/login\" routerLinkActive=\"active\"><i class=\"material-icons\" matTooltip=\"Membre - Se connecter\">\n            account_circle\n            </i></a>\n      <span><a *ngIf=\"getUserState()\"  (click)=\"logoutUser()\" href=\"/home\"><i class=\"material-icons\"  matTooltip=\"Se deconnecter\"\n        >\n            input\n            </i></a></span>\n      \n    </mat-toolbar-row>\n  </mat-toolbar>\n  "

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
        var _this = this;
        this.authService = authService;
        this.isAuth = false;
        this.title = 'app';
        this.user = {
            first_name: '',
            last_name: '',
            pseudo: '',
            email: '',
            picture: '',
            admin: false,
            online: false,
        };
        this.membersOnlines = [];
        this.getUserState();
        console.log(this.isAuth);
        if (this.isAuth) {
            this.authService.getData()
                .subscribe(function (res) {
                _this.user = res.user;
                _this.userid = res.user._id;
                _this.user.online = true;
                _this.authService.iamOnline(_this.user);
                _this.authService.updateUserStatus(_this.user);
                _this.authService.onOnlineEvent().subscribe(function (online) {
                    _this.membersOnlines.push(online);
                });
            });
        }
        this.authService.onOfflineEvent().subscribe(function (offline) { return console.log('offline: => ', offline); });
    }
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getUserState();
        //console.log(this.isAuth)
        if (this.isAuth) {
            this.authService.getData()
                .subscribe(function (res) {
                _this.user = res.user;
                _this.userid = res.user._id;
            });
        }
    };
    HeaderComponent.prototype.getUserState = function () {
        this.isAuth = !!this.authService.getToken();
        return this.isAuth;
    };
    HeaderComponent.prototype.logoutUser = function () {
        this.authService.logoutUser();
        this.authService.iamOffline(this.user);
        this.isAuth = false;
        this.user.online = false;
        this.authService.updateUserStatus(this.user);
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

module.exports = "\n<app-header></app-header>\n\n\n<div class=\"container\">\n             \n   <div class=\"card\">\n     <p style=\"width: 40px;height: 5px;\">\n        <span class=\"test\" matBadgePosition=\"above after\" matBadge=\"{{commentsArray.length}}\">Posts</span>\n     </p>\n    \n   </div>           \n\n\n\n <div class=\"col s6\" *ngIf=!isMember>\n   <p>Visiteurs : <a routerLink=\"/login\">Creer un compte</a>  pour poster des messages et discuter avec vos amis</p>\n </div>\n     \n    <mat-card class=\"example-card\" *ngIf=isMember>\n      <article >\n        <form class=\"example-form\" #commentF=\"ngForm\" (submit)=\"posted();commentF.reset()\" >\n      <mat-form-field>\n        <input matInput placeholder=\"titre \" name=\"title\" id=\"titre\" [(ngModel)]=\"comment.title\" required >\n      </mat-form-field>\n       <br>\n      <mat-form-field class=\"example-full-width\">\n        <textarea matInput placeholder=\"Poster un commentaire......\" name=\"comment\" [(ngModel)]=\"comment.content\"></textarea>\n      </mat-form-field>\n       <br>\n           \n      <button type=\"submit\" mat-fab color=\"accent\" [disabled]=\"!commentF.form.valid\">Poster\n       \n      </button>\n\n  </form>\n        \n    </article>\n    </mat-card>\n</div>\n\n<div class=\"container\">\n  \n\n  <mat-card class=\"example-card\" *ngFor=\"let comment of commentsArray\">\n    <mat-card-header>\n      <div mat-card-avatar class=\"example-header-image\">\n        <img src=\"{{comment.authorPicture}}\" style=\"width: 46px;\" alt=\"\">\n      </div>\n      <mat-card-title>{{comment.author }} </mat-card-title>\n      <mat-card-subtitle> Posté le  {{ comment.date| date:'dd-MM-yyyy à HH:mm' }}</mat-card-subtitle>\n    </mat-card-header>\n    <h4> {{comment.title}}</h4>\n   \n    <mat-card-content>\n      <p>\n        {{comment.content}}\n      </p>\n    </mat-card-content>\n   \n  </mat-card>\n</div>\n\n"

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
            .subscribe(function (res) { return console.log('???', res); });
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
            //console.log('Les commentaires en base',this.commentsArray);
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

/***/ "./src/app/invitation-request/invitation-request.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/invitation-request/invitation-request.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/invitation-request/invitation-request.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/invitation-request/invitation-request.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  invitation-request works!\n</p>\n"

/***/ }),

/***/ "./src/app/invitation-request/invitation-request.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/invitation-request/invitation-request.component.ts ***!
  \********************************************************************/
/*! exports provided: InvitationRequestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvitationRequestComponent", function() { return InvitationRequestComponent; });
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

var InvitationRequestComponent = /** @class */ (function () {
    function InvitationRequestComponent() {
    }
    InvitationRequestComponent.prototype.ngOnInit = function () {
    };
    InvitationRequestComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-invitation-request',
            template: __webpack_require__(/*! ./invitation-request.component.html */ "./src/app/invitation-request/invitation-request.component.html"),
            styles: [__webpack_require__(/*! ./invitation-request.component.css */ "./src/app/invitation-request/invitation-request.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], InvitationRequestComponent);
    return InvitationRequestComponent;
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

module.exports = "\n\n<app-header></app-header>\n<mat-tab-group>\n  \n    <mat-tab label=\"Connexion\"> \n        <form #loginF=\"ngForm\"  >\n        <div class=\"example-container\">\n            <mat-form-field>\n                <input matInput placeholder=\"pseudo\" [(ngModel)]=\"userData.pseudo\" required name=\"pseudo\">\n                \n              </mat-form-field>\n <!--            <mat-form-field>\n              <input matInput placeholder=\"Email\" [(ngModel)]=\"userData.email\" name=\"email\"  [formControl]=\"email\" \n              pattern=\"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,3}$\"\n              >\n              <mat-error *ngIf=\"email.invalid\">{{getErrorMessage()}}</mat-error>\n            </mat-form-field> -->\n            <br>\n            <mat-form-field>\n                <input matInput placeholder=\"Mot de passe\" [(ngModel)]=\"userData.password\" required name=\"password\"  [type]=\"hide ? 'password' : 'text'\">\n                <mat-icon matSuffix (click)=\"hide = !hide\">{{hide ? 'visibility' : 'visibility_off'}}</mat-icon>\n              </mat-form-field>\n              <br>\n              <button  mat-button color=\"primary\" [disabled]=\"!loginF.form.valid \" (click)=\"onLogin();loginF.reset()\">Se connecter</button>\n              <mat-error>{{errorMessage}}</mat-error> \n              <button mat-button color=\"primary\" routerLink=\"/lostpwd\" >Informations de compte oubliées ? </button>\n          </div>\n        </form>\n    </mat-tab>\n    <mat-tab label=\"Inscription\"> \n      <app-register></app-register>\n    </mat-tab>\n    \n  </mat-tab-group>\n  \n\n\n\n  "

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
/* harmony import */ var _comment_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../comment.service */ "./src/app/comment.service.ts");
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
    function LoginComponent(authService, _router, commentService) {
        this.authService = authService;
        this._router = _router;
        this.commentService = commentService;
        /*   userData = {
            _id:'',
            email:'',
            pseudo:'',
            password:'',
            admin:false,
            online:false,
          }; */
        this.userData = {
            _id: '',
            first_name: '',
            last_name: '',
            pseudo: '',
            email: '',
            admin: false,
            online: false,
            dateNaissance: new Date,
            gender: '',
            password: '',
            friendsList: [
                { status: "", friendId: "" }
            ],
            picture: ''
        };
        this.email = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email]);
        this.errorMessage = '';
        this.hide = true;
    }
    LoginComponent.prototype.ngOnInit = function () {
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
                _this.userData.pseudo = null;
                _this.userData.password = null;
            }
            else {
                _this.commentService.onLogin(_this.userData.pseudo);
                localStorage.setItem('token', res.token);
                _this.authService.getData().subscribe(function (res) {
                    _this.userData = res.user;
                    console.log('**/***/***/', _this.userData._id);
                    if (_this.userData.admin) {
                        _this._router.navigate(['/admin']);
                    }
                    else {
                        _this.userData.online = true;
                        _this.authService.updateUser(_this.userData);
                        _this._router.navigate(['/member_space', _this.userData.pseudo]);
                    }
                });
            }
        });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _comment_service__WEBPACK_IMPORTED_MODULE_4__["CommentService"]])
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

module.exports = "\n<app-header></app-header>\n\n<mat-card class=\"example-card\">\n    <form #password=\"ngForm\">\n<p> Veuillez indiquer votre adresse Email pour envoi  du mot de passe.  </p>\n\n<mat-form-field>\n    <input matInput placeholder=\"Email\" [(ngModel)]=\"userData.email\" name=\"email\"  [formControl]=\"email\" required>\n    <mat-error *ngIf=\"email.invalid\">{{getErrorMessage()}} {{message}}</mat-error>\n</mat-form-field>\n<br>\n <button mat-raised-button [disabled]=\"!email.valid\"  (click)=\"passwordRetrival()\">Envoyer</button>\n</form>\n</mat-card>\n"

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
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
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





var MemberActionService = /** @class */ (function () {
    function MemberActionService(http) {
        this.http = http;
        this.member = {
            _id: '',
            email: '',
            password: ''
        };
        this.url = _config__WEBPACK_IMPORTED_MODULE_3__["Config"].SOCKET_HOST || "http://localhost";
        this._findMember = this.url + '/api/member';
        this._getMemberById = this.url + '/api/memberbyid';
        this._addFriendUrl = this.url + '/api/addfriend';
        this._acceptInvitationUrl = this.url + '/api/acceptInvitation';
        this._updateInvitationUrl = this.url + '/api/updateInvitation';
        this._cancelRequestUrl = this.url + '/api/cancelRequest';
        this.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_4__(_config__WEBPACK_IMPORTED_MODULE_3__["Config"].SOCKET_HOST);
    }
    MemberActionService.prototype.searchResult = function (keyword) {
        return this.http.post(this._findMember, keyword);
    };
    MemberActionService.prototype.add_friend = function (member, user) {
        return this.http.post(this._addFriendUrl, { member: member, user: user });
    };
    MemberActionService.prototype.onRequestInvitation = function () {
        var _this = this;
        var observable = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
            _this.socket.on('invitation:res', function (data) {
                observer.next(data);
            });
            return function () { _this.socket.disconnect(); };
        });
        return observable;
    };
    MemberActionService.prototype.onRequestInvitationCancel = function () {
        var _this = this;
        var observable = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
            _this.socket.on('invitation:ko', function (data) {
                observer.next(data);
            });
            return function () { _this.socket.disconnect(); };
        });
        return observable;
    };
    MemberActionService.prototype.requestInvitation = function (data) {
        this.socket.emit('invitation:send', data);
    };
    MemberActionService.prototype.acceptInv = function (data) {
        this.socket.emit('invitation:ok', data);
    };
    MemberActionService.prototype.cancelInvitation = function (data) {
        this.socket.emit('invitation:cancel', data);
    };
    MemberActionService.prototype.cancelInvitationrequest = function (member, user) {
        this.cancelInvitation({ member: member, user: user });
        return this.http.post(this._cancelRequestUrl, { member: member, user: user });
    };
    MemberActionService.prototype.acceptInvitation = function (member, user) {
        this.acceptInv(member);
        return this.http.post(this._acceptInvitationUrl, { member: member, user: user });
    };
    MemberActionService.prototype.updateInvitation = function (member, user) {
        return this.http.post(this._updateInvitationUrl, { member: member, user: user });
    };
    MemberActionService.prototype.getMemberById = function (id) {
        return this.http.post(this._getMemberById, id);
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

/***/ "./src/app/member-space/member-space.component.css":
/*!*********************************************************!*\
  !*** ./src/app/member-space/member-space.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* \n.member {\n\n  position: absolute;\n  display: flex;\n  flex-flow: row;\n  \n}\n */\n\n.picture img{\n  border-radius: 50%\n}\n\n.mat-panel-description{\n  margin: 10px;\n}\n\n/* .friends{\n  position: absolute;\n padding-left:70%;\n max-width: 400px;\nmargin-right: 50px;\n} */\n\n/*  .container-fixe {\n   \n      margin-top: 2%;\n      display:flex;\n      flex-flow: row wrap;\n      justify-content: space-around;\n  } */\n\n.example-headers-align .mat-expansion-panel-header-title, \n.example-headers-align .mat-expansion-panel-header-description {\n  flex-basis: 0;\n}\n\n.example-headers-align .mat-expansion-panel-header-description {\n  justify-content: space-between;\n  align-items: center;\n}\n\nmat-list-item  img {\n  width: 46px;\n  border-radius: 50%;\n  padding-right: 10px;\n}\n\n.example-card {\n\n  width: 400px;\n  padding-bottom: 100px;\n  margin-bottom: 20px;\n  \n}\n\n.card{\n  padding-bottom: 20px;\n}\n\n/* .container {\n  display: flex;\n  flex-flow: column wrap;\n align-items: center;\n justify-content: space-between;\n\n  margin-bottom: 2%;\n  \n\n} */\n\n/* chat ------*/\n\n/* .wrapper{\n  display: flex;\n  flex-direction: column;            \n  height: 100vh;\n  overflow: hidden;\n}\n\n.header{\n  flex: 0 0 auto;  \n  background: #aaa;\n}\n.content{\n  flex: 1 1 auto;     \n  overflow-y: auto;     \n}\n\n*{\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n*:after,\n*:before{\n  box-sizing: border-box;\n} */"

/***/ }),

/***/ "./src/app/member-space/member-space.component.html":
/*!**********************************************************!*\
  !*** ./src/app/member-space/member-space.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n <app-header></app-header>\n\n   \n  <div class=\"d-flex justify-content-between flex-row bd-highlight mb-4\">\n  <div class=\"member p-2 bd-highlight\">\n    <mat-card class=\"card\">\n        <mat-card-header>\n            <img src=\" {{user.picture}}\" class=\"rounded\" alt=\"\">\n          <mat-card-title>\n            {{user.first_name}}\n            {{user.last_name}}\n                </mat-card-title>\n          <mat-card-subtitle>\n            {{user.pseudo}}\n           \n          </mat-card-subtitle>\n        </mat-card-header>\n        <mat-card-content>\n        </mat-card-content>\n      </mat-card>\n\n</div>\n<div class=\"chat\">\n   \n</div>\n\n\n<div class=\" member p-2 bd-highlight\" >\n    <mat-card  class=\"example-card border border-primary\">\n       \n        <mat-card-content >\n           <form class=\"example-form\" #commentF=\"ngForm\" (submit)=\"posted();commentF.reset()\" >\n               <mat-form-field>\n                 <input matInput placeholder=\"titre du message\" name=\"title\" id=\"titre\" [(ngModel)]=\"comment.title\" required >\n               </mat-form-field>\n                <br>\n               <mat-form-field class=\"example-full-width\">\n                 <textarea matInput placeholder=\"Poster un commentaire......\" name=\"comment\" [(ngModel)]=\"comment.content\"></textarea>\n               </mat-form-field>\n                <br>\n               <button type=\"submit\" mat-mini-fab color=\"accent\" [disabled]=\"!commentF.form.valid\">Poster\n               </button>\n           </form>\n        </mat-card-content>\n    </mat-card>\n      \n\n\n    <div class=\"card\" style=\"width:400px;\" *ngFor=\"let comment of userComment\">\n        <div class=\"card-header\">\n            <img src=\"{{comment.authorPicture}}\" width=\"48px\" alt=\"Card image cap\">\n            {{comment.author }}\n          </div>\n        \n        <div class=\"card-body\">\n          <h5 class=\"card-title\">{{comment.title}}</h5>\n          <p class=\"card-text\">\n             \n              {{comment.content}}\n          <a href=\"#\" class=\"btn btn-primary\">partager</a>\n        </div>\n        <div class=\"card-footer text-muted\">\n            Posté le  {{ comment.date| date:'dd-MM-yyyy à HH:mm' }}\n          </div>\n        \n      </div>\n\n\n </div>\n \n\n\n\n<div class=\" p-2 bd-highlight\" *ngIf=\"!visitor || isAdmin\" >\n\n  <div>\n      <button type=\"button\" class=\"btn btn-primary\">\n          Notifications <span class=\"badge badge-light\">4</span>\n          \n        </button>\n        <ul>\n\n          <li *ngFor=\"let notif of notifications\"></li>\n        </ul>\n  </div>\n\n    <div class=\"request\">\n        <form class=\"example-form\" #search=\"ngForm\" >\n        \n            <mat-form-field>\n              <input matInput placeholder=\"nom, prenom ou pseudo\" name=\"name\" [(ngModel)]=\"keyword.name\" >\n            </mat-form-field>\n            <button type=\"submit\" mat-button color=\"primary\" (click)=\"searchfriend()\" >OK</button>\n\n            <mat-list *ngFor=\"let member of resultList\">\n              \n                <mat-list-item> \n                 <form class=\"example-form\" >\n                    <img src=\" {{member.picture}}\" alt=\"\"> {{member.pseudo}} \n                    \n                    <button matTooltip=\"Ajouter\" type=\"submit\" mat-button (click)=\"sendInvitationrequest(member)\" ><i class=\"material-icons\">\n                        \n                        </i></button>\n                  </form>\n                 </mat-list-item>\n      \n               </mat-list>\n        \n              </form>\n          \n \n\n\n         <table class=\"table table-striped\">\n            <thead>\n            Membres\n            </thead>\n            <tbody>\n              <tr *ngFor=\"let member of membersNotFriends\">\n                <a (click)=\"sendInvitationrequest(member)\" >\n                <td><img src=\"{{member.picture}}\" alt=\"\" width=\"48px\"></td>\n                <td>{{member.pseudo}} </td>\n              </a>\n                <td><button *ngIf=\"!visitor || isAdmin\" matTooltip=\"Ajouter\" type=\"submit\" mat-button (click)=\"sendInvitationrequest(member)\" ><i class=\"material-icons\">\n                    person_add\n                    </i></button></td>\n              </tr>\n              \n            </tbody>\n          </table>\n\n          \n          \n            \n                   \n                    <h4>Ami(e)s</h4>\n                   \n                     <mat-button-toggle-group name=\"status\" aria-label=\"Font Style\">\n                        <mat-button-toggle (click)=\"all()\"  matTooltip=\"Tous les status\" value=\"demande\">\n                            <i  class=\"material-icons\">\n                                clear_all\n                                </i></mat-button-toggle>\n\n                        <mat-button-toggle  (click)=\"confirm()\"     matTooltip=\"Confirmé\" value=\"confirme\"><i    class=\"material-icons\" >done</i></mat-button-toggle>\n                        <mat-button-toggle (click)=\"waiting()\"  matTooltip=\"En attente de confirmation\" value=\"attente\"><i  class=\"material-icons\" >arrow_left</i></mat-button-toggle>\n                        <mat-button-toggle  (click)=\"send()\"  matTooltip=\"Demande d'ami envoyée\" value=\"demande\"><i   class=\"material-icons\" >arrow_right</i></mat-button-toggle>\n                      </mat-button-toggle-group>\n                      <p>\n                      </p>\n                      \n              <table>\n                  <thead>\n                      \n                  </thead>\n                  <tbody>\n                    <tr  *ngFor=\"let friend of friends\"  >\n                      <td><img class=\"picture\" (click)=\"onSelect(friend.members)\" src=\"{{friend.members.picture}}\" alt=\"\" style=\"width: 36px;\" alt=\"\"></td>\n                      <td>{{friend.members.pseudo}} </td>\n                      \n                      <td *ngIf=\"friend.status=='confirmer' && isOnline \" (click)=\"invitetoChat(friend)\" routerLink=\"chat_window\">\n                        <i  matTooltip=\"chat\" class=\"material-icons\" >chat_bubble_outline</i>\n                      </td>\n                      <button routerLink=\"chat_window\">chat</button>\n\n                      <div  *ngIf=\"friend.status=='en attente de confirmation'\">\n                          <td>\n                              <i  (click)=\"acceptRequestInvitation(friend)\" class=\"material-icons\"> group_add</i>\n                              \n                          </td>\n                          <td>\n                              <i (click)=\"cancelInvitation(friend)\" matTooltip=\"Annuler la demande\"  class=\"material-icons\">\n                                  cancel\n                                  </i>\n                          </td>\n\n                      </div>\n                     \n\n                    </tr>\n\n\n                  </tbody>\n\n              </table>\n              \n                \n      \n      </div>\n\n<!-- <div class=\"chat\">\n  <h6 class=\"pb-2 mb-0\">Group Chat <button class=\"btn btn-sm btn-primary\" >invite others</button></h6>\n  <div class=\"chats\">\n    <div class=\"chatbox\">\n      <div *ngFor=\"let chat of chats\">\n        <div class=\"message sent\" *ngIf=\"chat.type!=='joined' && chat.isMe\">\n          {{chat.message}}\n          <span class=\"metadata\">\n            <span class=\"time\">{{chat.createdAt | date: 'HH:mm aaa'}}</span>\n          </span>\n        </div>\n        <div class=\"message received\"  *ngIf=\"chat.type!=='joined' && !chat.isMe\">\n          <strong>{{chat.displayName}}</strong> <br>\n          {{chat.message}}\n          <span class=\"metadata\">\n            <span class=\"time\">{{chat.createdAt | date: 'HH:mm aaa'}}</span>\n          </span>\n        </div>\n        <p align=\"center\" class=\"joined\"  *ngIf=\"chat.type==='joined'\">\n        <span class=\"rounded bg-primary text-white\">{{chat.displayName}} Joined</span>\n        </p>\n      </div>\n    </div>\n  \n    <div class=\"d-flex flex-row\">\n      <input [(ngModel)]=\"message\" type=\"text\" class=\"form-control\" placeholder=\"Enter message\" style=\"margin-right: 10px\">\n      <button [disabled]=\"!message || sending\" (click)=\"sendMessage(message)\" class=\"btn btn-primary\"> {{sending ? 'Sending' : 'Send'}}</button>\n    </div>\n  </div>\n  \n  </div>\n</div> -->\n\n</div>\n\n</div>\n\n<div>\n\n</div>\n\n\n\n<router-outlet></router-outlet> \n"

/***/ }),

/***/ "./src/app/member-space/member-space.component.ts":
/*!********************************************************!*\
  !*** ./src/app/member-space/member-space.component.ts ***!
  \********************************************************/
/*! exports provided: MemberSpaceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MemberSpaceComponent", function() { return MemberSpaceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _comment_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../comment.service */ "./src/app/comment.service.ts");
/* harmony import */ var _member_action_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../member-action.service */ "./src/app/member-action.service.ts");
/* harmony import */ var _chat_chat_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../chat/chat.service */ "./src/app/chat/chat.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MemberSpaceComponent = /** @class */ (function () {
    function MemberSpaceComponent(activatedRouter, commentService, router, authService, memberActionService, chatService) {
        var _this = this;
        this.activatedRouter = activatedRouter;
        this.commentService = commentService;
        this.router = router;
        this.authService = authService;
        this.memberActionService = memberActionService;
        this.chatService = chatService;
        this.step = 0;
        this.keyword = {
            name: ''
        };
        this.comment = {
            title: '',
            author: '',
            content: '',
            date: null,
            authorId: '',
            authorPicture: '',
            explicit: false
        };
        //allMembers =[];
        this.user = {
            _id: '',
            first_name: '',
            last_name: '',
            pseudo: '',
            email: '',
            admin: false,
            online: false,
            dateNaissance: new Date,
            gender: '',
            password: '',
            friendsList: [
                { status: "", friendId: "" }
            ],
            picture: ''
        };
        this.membersNotFriends = [];
        this.friends = [];
        this.chats = [];
        this.authService.getData().subscribe(function (res) {
            _this.user = res.user;
            //this.authService.onConnected(this.user);
        });
        this.chatService.onInvitationChatRequest().subscribe(function (res) {
            if (res.myFriend === _this.user.pseudo) {
                _this.router.navigate(['/member_space/' + _this.user.pseudo + '/chat_window']);
                alert('invitation au chat de' + res.me);
            }
        });
        /*     this.authService.updateUserStatus(this.user).subscribe(
              res => {
                console.log(res)
              }
            ) */
        //this.authService.onConnected(this.user);
        this.commentService.onPosted()
            .subscribe(function (data) {
            _this.userComment.splice(0, 0, data);
            //console.log("Apres ajout",this.userComment)
        });
        this.memberActionService.onRequestInvitation().subscribe(function (invitation) {
            console.log(invitation);
            _this.message = invitation;
        });
        this.memberActionService.onRequestInvitationCancel()
            .subscribe(function (data) {
            console.log("Annulation", data);
            if (data.member.members._id == _this.user._id) {
                alert(data.user.pseudo + " n'a pas donné suite a votre demande d'amis");
                console.log('Ma liste amis', _this.user.friendsList);
                var finder = _this.user.friendsList.findIndex(function (user) { return user.friendId === data.user._id; });
                console.log(finder);
                _this.user.friendsList.splice(_this.user.friendsList.findIndex(function (user) { return user.friendId === data.user._id; }), 1);
                console.log(_this.user.friendsList);
                _this.authService.updateUser(_this.user);
            }
        });
    }
    MemberSpaceComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRouter.paramMap.subscribe(function (params) {
            _this.member_pseudo = params.get('pseudo');
            _this.friends = [];
            _this.membersNotFriends = [];
            _this.authService.getData().subscribe(function (res) {
                _this.user = res.user;
                _this.isAdmin = _this.user.admin;
                //console.log('Moi user',this.user)
                // this.onSubmit()
                var myFriends = _this.user.friendsList.filter(function (element) { return element.status == 'confirmer'; });
                // console.log(myFriends);
                myFriends.forEach(function (element) {
                    //console.log(element)
                    _this.memberActionService.getMemberById(element).subscribe(function (res) {
                        _this.friends.push(res);
                        //console.log(res
                    });
                });
                /*             this.chatService.getChannel().bind('chat',data => {
                              //console.log(data)
                              if(data.email === this.chatService.user.email){
                                data.isMe= true;
                              }
                              this.chats.push(data)
                            })
                 */
                _this.commentService.getMemberComments(_this.member_pseudo)
                    .subscribe(function (res) {
                    // console.log('Les commentaires de ki ???',res)
                    _this.userComment = res.comments;
                });
                console.log("Mes amis", _this.friends);
                //console.log('le user est  connecté :',res.user._id, res.user.last_name)
                if (_this.member_pseudo === _this.user.pseudo) {
                    _this.visitor = false;
                }
                else {
                    _this.visitor = true;
                    //console.log('Amis ou membre qui visite ma page',false)
                }
            });
            _this.authService.getAllMembers()
                .subscribe(function (members) {
                _this.membersNotFriends = members;
                //console.log('Liste de tous les membres avant traitement',this.membersNotFriends)
                //On se supprime de la liste des membre a l'affichage le mebre loggé
                _this.membersNotFriends.splice(_this.membersNotFriends.findIndex(function (user) { return user.pseudo === _this.member_pseudo; }), 1);
                _this.authService.memberSpace(_this.member_pseudo).subscribe(function (res) {
                    //console.log("le res est comment ??",res)
                    if (res === null || res === undefined) {
                        _this.router.navigate(['/notFound']);
                    }
                    else {
                        _this.user = res;
                    }
                    // console.log('liste amis', this.user.friendsList)
                    // On enleve de la lsite les 
                    //console.log('Liste de tous les membres ', this.membersNotFriends)
                    _this.user.friendsList.forEach(function (element) {
                        // console.log('element bi !!!',element.status)
                        _this.membersNotFriends.splice(_this.membersNotFriends.findIndex(function (user) { return user._id === element.friendId; }), 1);
                    });
                });
            });
            //On recupere les info du user connecté
            _this.authService.getData().
                subscribe(function (res) {
                _this.currentUser = res;
                _this.comment.author = res.user.first_name + ' ' + res.user.last_name;
                //console.log('ki est tu pseudo ??',this.member_pseudo)
                if (res.user.pseudo != _this.member_pseudo) {
                    _this.comment.authorId = _this.member_pseudo;
                }
                else {
                    _this.comment.authorId = res.user.pseudo;
                }
                _this.comment.authorPicture = res.user.picture;
            });
        });
    };
    MemberSpaceComponent.prototype.chatRequest = function (friend) {
        var pseudo = friend.members.pseudo;
        this.memberActionService.requestInvitation(pseudo);
    };
    /*
      onSubmit() {
        const params= {email:this.user.email, displayName:this.user.pseudo}
        this.chatService.join(params).subscribe(
          res => {
            console.log(res)
          },
          error => {
            console.error(error)
          }
        )
        //this.chatService.openChatRoom({user:this.user, friend:friend.members})
        
    
      } */
    /*
      sendMessage(message: string) {
        this.sending = true;
        this.chatService.sendMessage(message)
          .subscribe(resp => {
            console.log(resp)
            this.message = undefined;
            this.sending = false;
          }, err => {
            this.sending = false;
          } );
      } */
    MemberSpaceComponent.prototype.remove = function (array, element) {
        var index = array.indexOf(element);
        array.splice(index, 1);
    };
    MemberSpaceComponent.prototype.updateFriendList = function (member) {
        this.friends.push(member);
    };
    MemberSpaceComponent.prototype.updateMemberList = function (member) {
        this.membersNotFriends.splice(this.membersNotFriends.findIndex(function (user) { return user === member; }), 1);
    };
    MemberSpaceComponent.prototype.setStep = function (index) {
        this.step = index;
    };
    MemberSpaceComponent.prototype.nextStep = function () {
        this.step++;
    };
    MemberSpaceComponent.prototype.prevStep = function () {
        this.step--;
    };
    MemberSpaceComponent.prototype.posted = function () {
        this.comment.date = new Date();
        this.commentService.postMessage(this.comment);
    };
    /*
      openDialog(friend) {
        const dialogConfig = new MatDialogConfig();
    
        dialogConfig.disableClose = false;
        dialogConfig.autoFocus = true;
    
        dialogConfig.data = {
        me:  this.user,
        myfriend:friend
        }
        
    
        this.dialog.open(ChatWindowComponent, dialogConfig);
    } */
    MemberSpaceComponent.prototype.all = function () {
        var _this = this;
        this.friends = [];
        this.user.friendsList.forEach(function (element) {
            //console.log(element)
            _this.memberActionService.getMemberById(element).subscribe(function (res) {
                _this.friends.push(res);
                // console.log(this.friends)
            });
        });
        //console.log('de alll',this.friends)
    };
    MemberSpaceComponent.prototype.confirm = function () {
        var _this = this;
        this.friends = [];
        var conf = this.user.friendsList.filter(function (element) { return element.status == 'confirmer'; });
        //console.log('conf est egala a ',conf)
        conf.forEach(function (element) {
            //console.log(element)
            _this.memberActionService.getMemberById(element).subscribe(function (res) {
                _this.friends.push(res);
                //console.log(this.friends)
            });
        });
        //console.log('Confirme',this.friends)
        //console.log(this.user.friendsList)
    };
    MemberSpaceComponent.prototype.send = function () {
        var _this = this;
        this.friends = [];
        var send = this.user.friendsList.filter(function (element) { return element.status == 'invitation en cours '; });
        send.forEach(function (element) {
            //console.log(element)
            _this.memberActionService.getMemberById(element).subscribe(function (res) {
                _this.friends.push(res);
                //console.log('envoyées',this.friends)
            });
        });
        //  console.log('pour send',send)
        //  console.log('envoyées',this.friends)
    };
    MemberSpaceComponent.prototype.waiting = function () {
        var _this = this;
        this.friends = [];
        var wainting = this.user.friendsList.filter(function (element) { return element.status == 'en attente de confirmation'; });
        wainting.forEach(function (element) {
            //console.log(element)
            _this.memberActionService.getMemberById(element).subscribe(function (res) {
                _this.friends.push(res);
                //console.log(res
            });
        });
        //console.log('En attente',this.friends)
    };
    MemberSpaceComponent.prototype.searchfriend = function () {
        console.log(this.authService.getAllMembers().subscribe(function (res) {
            //console.log('Tous les members',res);
        }));
    };
    MemberSpaceComponent.prototype.onSelect = function (member) {
        this.router.navigate(['/member_space', member.pseudo]);
    };
    MemberSpaceComponent.prototype.sendInviation = function (member) {
        this.memberActionService.requestInvitation(member);
    };
    MemberSpaceComponent.prototype.cancelInvitation = function (member) {
        console.log(member);
        this.membersNotFriends.push(member.members);
        var finder = this.user.friendsList.findIndex(function (user) { return user.friendId === member.members._id; });
        this.user.friendsList.splice(this.user.friendsList.findIndex(function (user) { return user.friendId === member.members._id; }), 1);
        console.log(finder);
        console.log(this.user.friendsList.length);
        this.memberActionService.cancelInvitationrequest(member, this.user);
        this.authService.updateUser(this.user).subscribe(function (resp) { return console.log('Mise a jour ok ???', resp); });
    };
    MemberSpaceComponent.prototype.acceptRequestInvitation = function (member) {
        var _this = this;
        this.user.friendsList.forEach(function (element) {
            if (element.friendId == member.members._id && element.status == "en attente de confirmation") {
                element.status = "confirmé";
            }
        });
        this.memberActionService.acceptInvitation(member, this.user).subscribe(function (res) {
            if (res == 1) {
                // On fait la meme chose de l'autre coté 
                _this.memberActionService.updateInvitation(member, _this.user).subscribe(function (res2) { return console.log(res2); });
                _this.authService.getData().subscribe(function (res) {
                    _this.user = res.user;
                });
                console.log('update ok');
            }
            else {
                console.log('update non effectué');
            }
        });
    };
    MemberSpaceComponent.prototype.acceptInvitation = function (friendId) {
        console.log(friendId.members._id);
        console.log(this.user.friendsList);
        this.user.friendsList.forEach(function (element) {
            if (element.friendId == friendId.members._id && element.status == "en attente de confirmation") {
                element.status = "confirmé";
            }
        });
        console.log('aprés modif', this.user.friendsList);
        this.authService.updateUser(this.user).subscribe(function (res) { return console.log(res); });
    };
    MemberSpaceComponent.prototype.sendInvitationrequest = function (member) {
        var _this = this;
        console.log('Id a inviter ', member);
        console.log(' Liste vide ? ??????', this.user.friendsList);
        var test;
        if (this.user.friendsList.length != 0 && this.member_pseudo != member.pseudo) {
            test = this.user.friendsList.find(function (element) {
                return element.friendId == member._id;
            });
        }
        console.log(test);
        if (test === undefined || this.user.friendsList.length == 0) {
            // console.log('On rajoute a la liste de demande amis',id)
            // console.log('On continu et on ajoute  la liste')
            //console.log("Le membre est comment ?",id)
            console.log('//////', member);
            console.log('les amis du user en cour', this.friends);
            this.memberActionService.add_friend(member, this.user)
                .subscribe(function (res) {
                if (res) {
                    _this.updateMemberList(member);
                    _this.user.friendsList.push({ status: "invitation en cours ", friendId: member._id });
                    _this.memberActionService.getMemberById({ status: "invitation en cours ", friendId: member._id }).subscribe(function (res) {
                        _this.friends.push(res);
                        //console.log(res
                    });
                    console.log(member._id);
                    _this.authService.updateUser(_this.user).
                        subscribe(function (res) {
                        console.log('Apres update la reponse API', res.data);
                        //this.updateFriendList(member);
                    });
                }
            });
        }
        else {
            alert('Invitation deja envoyée ou Membre deja amis');
        }
    };
    MemberSpaceComponent.prototype.invitetoChat = function (member) {
        this.chatService.sendChatInvitation({ me: this.user.pseudo, myFriend: member.members.pseudo });
    };
    MemberSpaceComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-member-space',
            template: __webpack_require__(/*! ./member-space.component.html */ "./src/app/member-space/member-space.component.html"),
            styles: [__webpack_require__(/*! ./member-space.component.css */ "./src/app/member-space/member-space.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _comment_service__WEBPACK_IMPORTED_MODULE_3__["CommentService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _member_action_service__WEBPACK_IMPORTED_MODULE_4__["MemberActionService"],
            _chat_chat_service__WEBPACK_IMPORTED_MODULE_5__["ChatService"]])
    ], MemberSpaceComponent);
    return MemberSpaceComponent;
}());

/* @Component({
  selector: 'chat',
  templateUrl: '../../app/templates/chat.html',
})
export class InvitationRequest {
  constructor(public dialogRef: MatDialogRef<InvitationRequest>, ) { }

  onNoClick(): void {
    this.dialogRef.close();
  }
} */ 


/***/ }),

/***/ "./src/app/members-list/members-list.component.css":
/*!*********************************************************!*\
  !*** ./src/app/members-list/members-list.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/members-list/members-list.component.html":
/*!**********************************************************!*\
  !*** ./src/app/members-list/members-list.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-list>\n        <mat-list-item *ngFor=\"let message of messages\">\n          <img matListAvatar src=\"...\" alt=\"...\">\n          <h3 matLine> {{message.from}} </h3>\n          <p matLine>\n            <span> {{message.subject}} </span>\n            <span class=\"demo-2\"> -- {{message.content}} </span>\n          </p>\n        </mat-list-item>\n      </mat-list>"

/***/ }),

/***/ "./src/app/members-list/members-list.component.ts":
/*!********************************************************!*\
  !*** ./src/app/members-list/members-list.component.ts ***!
  \********************************************************/
/*! exports provided: MembersListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MembersListComponent", function() { return MembersListComponent; });
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



var MembersListComponent = /** @class */ (function () {
    function MembersListComponent(authService, commentServie) {
        this.authService = authService;
        this.commentServie = commentServie;
    }
    MembersListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getData().subscribe(function (res) {
            _this.member = res.user;
            console.log(_this.member);
        });
        this.commentServie.isConnected()
            .subscribe(function (res) {
            console.log('les infos membre connecté', res);
        });
    };
    MembersListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-members-list',
            template: __webpack_require__(/*! ./members-list.component.html */ "./src/app/members-list/members-list.component.html"),
            styles: [__webpack_require__(/*! ./members-list.component.css */ "./src/app/members-list/members-list.component.css")]
        }),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"], _comment_service__WEBPACK_IMPORTED_MODULE_2__["CommentService"]])
    ], MembersListComponent);
    return MembersListComponent;
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
        this._id = user._id;
        this.first_name = user.first_name;
        this.last_name = user.last_name;
        this.pseudo = user.pseudo;
        this.email = user.last_name;
        this.dateNaissance = user.dateNaissance;
        this.password = user.password;
        this.gender = user.gender;
        this.admin = user.admin = false;
        this.picture = user.picture;
        this.friendsList = user.friendsList;
        this.online = user.online;
    }
    User._id = function (arg0) {
        throw new Error("Method not implemented.");
    };
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

/***/ "./src/app/notifications/notifications.component.css":
/*!***********************************************************!*\
  !*** ./src/app/notifications/notifications.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/notifications/notifications.component.html":
/*!************************************************************!*\
  !*** ./src/app/notifications/notifications.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/notifications/notifications.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/notifications/notifications.component.ts ***!
  \**********************************************************/
/*! exports provided: NotificationsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationsComponent", function() { return NotificationsComponent; });
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

var NotificationsComponent = /** @class */ (function () {
    function NotificationsComponent() {
    }
    NotificationsComponent.prototype.ngOnInit = function () {
    };
    NotificationsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-notifications',
            template: __webpack_require__(/*! ./notifications.component.html */ "./src/app/notifications/notifications.component.html"),
            styles: [__webpack_require__(/*! ./notifications.component.css */ "./src/app/notifications/notifications.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NotificationsComponent);
    return NotificationsComponent;
}());



/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.css":
/*!*************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.html":
/*!**************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n\n<h1>404 PAGE NOT FOUND</h1>\n\n<img src=\"../../assets/images/404 is not found.jpg\" alt=\"\">\n\n\n<a routerLink=\"/home\"><i></i></a>\n"

/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.ts":
/*!************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.ts ***!
  \************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
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

var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    PageNotFoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-page-not-found',
            template: __webpack_require__(/*! ./page-not-found.component.html */ "./src/app/page-not-found/page-not-found.component.html"),
            styles: [__webpack_require__(/*! ./page-not-found.component.css */ "./src/app/page-not-found/page-not-found.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());



/***/ }),

/***/ "./src/app/register/register.component.html":
/*!**************************************************!*\
  !*** ./src/app/register/register.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n  <form #register=\"ngForm\"class=\"example-form\">\n    \n    \n      <table class=\"example-full-width\" cellspacing=\"20\">\n        <tr>\n        <td><mat-form-field class=\"example-full-width\">\n          <input matInput [(ngModel)]='user.first_name' name=\"first_name\"  required  placeholder=\"Prénom\">\n        </mat-form-field></td>\n        <td><mat-form-field class=\"example-full-width\">\n          <input matInput [(ngModel)]='user.last_name' name=\"last_name\"  required  placeholder=\"Nom\">\n        </mat-form-field></td>\n      </tr>\n    \n      <tr>\n        <td>\n            <mat-form-field>\n                <input matInput placeholder=\"Email\" [(ngModel)]=\"user.email\" name=\"email\"  [formControl]=\"email\" \n                pattern=\"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,3}$\"\n                required  (keyup)=\"checkEmail()\">\n                <mat-error *ngIf=\"email.invalid\">{{getErrorMessage()}}</mat-error>\n                <mat-hint *ngIf=\"!email.invalid\"><span style=\"color: red\">{{emailAvailable}}</span></mat-hint>\n                \n              </mat-form-field>\n              \n\n        </td>\n        <td>\n            <mat-form-field>\n                <input  #password minlength=\"6\" matInput placeholder=\"Choix du mot de passe\" [(ngModel)]=\"user.password\" required name=\"password\"  [type]=\"hide ? 'password' : 'text'\">\n                <mat-hint align=\"end\">{{password.value.length}} / 6</mat-hint>\n                <mat-icon matSuffix (click)=\"hide = !hide\">{{hide ? 'visibility' : 'visibility_off'}}</mat-icon>\n         </mat-form-field>\n        </td>\n      </tr>\n  \n       <tr>\n         <td>\n            <mat-form-field>\n                <mat-select classe=\"example-form\" placeholder=\"Genre\" [(ngModel)]=\"user.gender\" name=\"genre\" value=\"user.gender\" required>\n                    <mat-option selected value=\"femme\">Femme</mat-option>\n                    <mat-option value=\"homme\">Homme</mat-option>\n                  </mat-select>\n            </mat-form-field>\n         </td>\n          \n         <td>\n            <mat-form-field>\n                <input type=\"text\" matInput #pseudo minlength=\"5\" maxlength=\"10\" placeholder=\"Choix du pseudo\" [(ngModel)]=\"user.pseudo\" (change)=\"checkPseudo()\" required name=\"pseudo\">\n                <mat-hint align=\"end\">{{pseudo.value.length}} / 5  -\n                  \n                   <span style=\"color:green\"> {{pseudoEnable}}   </span>\n                    <span style=\"color: red\">{{pseudoNotEnable}}</span>\n                  \n                   </mat-hint>\n                \n         </mat-form-field>\n         \n\n         </td>\n\n\n       </tr>\n        \n       \n    \n  \n     <tr>\n        <td>\n            <mat-form-field class=\"example-full-width\">\n                <input matInput [min]=\"minDate\" [max]=\"maxDate\" name=\"dateNaissance\" [(ngModel)]=\"user.dateNaissance\"  [matDatepicker]=\"picker\" placeholder=\"Date de Naissance\" required>\n                <mat-datepicker-toggle matSuffix   [for]=\"picker\"></mat-datepicker-toggle>\n                <mat-datepicker #picker></mat-datepicker>\n              </mat-form-field> \n          \n          \n          \n          \n         <!--  <mat-form-field class=\"example-full-width\">\n          <input type=\"date\" [min]=\"minDate\" [max]=\"maxDate\" matInput placeholder=\"Date de Naissance\" required>\n        </mat-form-field> --></td>\n    \n      </tr>\n    </table>\n      \n      <button mat-raised-button color=\"primary\" [disabled]=\"!register.form.valid ||email.invalid || pseudoNotEnable || emailAvailable\"  (click)=\"registerUser()\" routerLink=\"/member_space/{{user.pseudo}}\">S'enregistrer</button>\n\n    </form>\n    \n"

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
        this.minDate = new Date(1920, 0, 1);
        this.maxDate = new Date(2005, 0, 1);
        this.user = new _models_user__WEBPACK_IMPORTED_MODULE_1__["User"]({ first_name: '',
            last_name: '',
            email: '',
            gender: '',
            password: '',
            pseudo: '',
            dateNaissance: '',
            admin: false,
            friendsList: [],
            pictures: '',
            online: false
        });
    }
    RegisterComponent.prototype.getErrorMessage = function () {
        return this.email.hasError('required') ? 'Le champs doit etre rempli' :
            this.email.hasError('email') ? "Le format de l'adresse Email est invalide" : '';
    };
    RegisterComponent.prototype.ngOnInit = function () {
        if (this.authService.getToken()) {
            this._router.navigate(['/member_space', this.user.pseudo]);
        }
    };
    RegisterComponent.prototype.checkEmail = function () {
        var _this = this;
        this.authService.checkEmail(this.user)
            .subscribe(function (res) {
            if (res.message) {
                _this.emailAvailable = res.message;
            }
            else {
                _this.emailAvailable = res.error;
            }
        });
    };
    RegisterComponent.prototype.checkPseudo = function () {
        var _this = this;
        this.authService.checkPseudo(this.user)
            .subscribe(function (res) {
            if (res.message) {
                _this.pseudoEnable = res.message;
                _this.pseudoNotEnable = null;
            }
            else {
                _this.pseudoNotEnable = res.error;
                _this.pseudoEnable = null;
            }
        });
    };
    RegisterComponent.prototype.registerUser = function () {
        var _this = this;
        this.authService.registerUser(this.user)
            .subscribe(function (res) {
            if (res.message) {
                _this.errormessage = res.message;
                //alert(this.errormessage);
                _this.user.email = "";
            }
            else {
                localStorage.setItem('token', res.token);
                _this._router.navigate(['/member_space', _this.user.pseudo]);
            }
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

/***/ "./src/app/services/chat.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/chat.service.ts ***!
  \******************************************/
/*! exports provided: ChatService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatService", function() { return ChatService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _pusher_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pusher.service */ "./src/app/services/pusher.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ChatService = /** @class */ (function () {
    function ChatService(_pusherService, _http) {
        this._pusherService = _pusherService;
        this._http = _http;
        this._endPoint = 'http://localhost:5000/api'; // normally you use environment.ts
        this._channel = this._pusherService.getPusher().subscribe('chat-group');
    }
    ChatService.prototype.join = function (param) {
        var _this = this;
        return this._http.post(this._endPoint + "/join", param)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (data) {
            _this.user = param;
        }));
    };
    ChatService.prototype.sendMessage = function (message) {
        var param = __assign({ message: message, type: 'human' }, this.user);
        return this._http.post(this._endPoint + "/message", param);
    };
    ChatService.prototype.getChannel = function () {
        return this._channel;
    };
    ChatService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_pusher_service__WEBPACK_IMPORTED_MODULE_1__["PusherService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ChatService);
    return ChatService;
}());



/***/ }),

/***/ "./src/app/services/pusher.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/pusher.service.ts ***!
  \********************************************/
/*! exports provided: PusherService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PusherService", function() { return PusherService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var pusher_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! pusher-js */ "./node_modules/pusher-js/dist/web/pusher.js");
/* harmony import */ var pusher_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(pusher_js__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PusherService = /** @class */ (function () {
    function PusherService() {
        this._pusher = new pusher_js__WEBPACK_IMPORTED_MODULE_1__('521f11269cd19399247e', {
            cluster: 'eu',
            encrypted: true
        });
    }
    PusherService.prototype.getPusher = function () {
        return this._pusher;
    };
    PusherService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], PusherService);
    return PusherService;
}());



/***/ }),

/***/ "./src/app/stats/stats.component.css":
/*!*******************************************!*\
  !*** ./src/app/stats/stats.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n.example-spacer {\n    flex: 1 1 auto;\n    width: 100px;\n  }\n\n  .stats{\n      width: 200px;\n      display: flex;\n      flex-flow: row wrap;\n      justify-content: space-around;\n      \n  }"

/***/ }),

/***/ "./src/app/stats/stats.component.html":
/*!********************************************!*\
  !*** ./src/app/stats/stats.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<table class=\"table\">\n                <thead>\n                  <tr>\n                     <th scope=\"col\">*</th>\n                    <th scope=\"col\">Pseudo</th>\n                    <th scope=\"col\">Prenom</th>\n                    <th scope=\"col\">Nom</th>\n                    <th scope=\"col\">Status</th>\n                  </tr>\n                </thead>\n                <tbody>\n                  <tr *ngFor=\"let member of membersArray\">\n                    \n                    <td><img src=\"{{member.picture}}\" width=\"64px\" alt=\"\"></td>\n                    <td>{{member.pseudo}}</td>\n                    <td>@{{member.first_name}}</td>\n                    <td>{{member.last_name}}</td>\n                    <td>{{member.online}}</td>\n                  </tr>\n               \n                </tbody>\n  </table>\n               "

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
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
    function StatsComponent(commentService, authService, router) {
        var _this = this;
        this.commentService = commentService;
        this.authService = authService;
        this.router = router;
        this.commentsArray = [];
        this.membersArray = [];
        this.commentService.onBegin()
            .subscribe(function (res) { return console.log(res.message); });
        this.commentService.onPosted()
            .subscribe(function (data) {
            _this.commentsArray.splice(0, 0, data);
            // console.log("Apres ajout",this.commentsArray)
        });
    }
    StatsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getAllMembers().subscribe(function (res) {
            //console.log(res)
            _this.membersArray = res;
        });
        this.authService.getData().subscribe(function (res) {
            _this.currentUser = res.user;
            console.log(_this.currentUser);
        });
        this.commentService.getComments().subscribe(function (res) {
            _this.commentsArray = res.comments;
            console.log('stats', _this.commentsArray);
        });
    };
    StatsComponent.prototype.onSelect = function (member) {
        this.router.navigate(['/member_space', member.pseudo]);
    };
    StatsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-stats',
            template: __webpack_require__(/*! ./stats.component.html */ "./src/app/stats/stats.component.html"),
            styles: [__webpack_require__(/*! ./stats.component.css */ "./src/app/stats/stats.component.css")]
        }),
        __metadata("design:paramtypes", [_comment_service__WEBPACK_IMPORTED_MODULE_1__["CommentService"], _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
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

module.exports = "<app-header></app-header>\n<div class=\"container\">\n<mat-tab-group>\n    <mat-tab label=\"Information du compte\"> \n\n      <form class=\"example-form\" form #info=\"ngForm\">\n        <mat-form-field class=\"example-full-width\">\n          <input matInput placeholder=\"Prenom\"  disabled value=\"{{user.first_name}}\">\n        </mat-form-field>\n        <mat-form-field class=\"example-full-width\">\n          <input matInput placeholder=\"Nom\"  disabled value=\"{{user.last_name}}\" >\n        </mat-form-field>\n        <mat-form-field class=\"example-full-width\">\n          <input matInput name=\"email\" [(ngModel)]=\"user.email\" placeholder=\"Email\" \n           [formControl]=\"email\" \n           pattern=\"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,3}$\"\n           (keyup)=\"checkEmail()\"\n           required >\n          <mat-error *ngIf=\"email.invalid\">{{getErrorMessage()}}</mat-error>\n          <mat-hint *ngIf=\"!email.invalid\"><span style=\"color: red\">{{emailAvailable}}</span></mat-hint>\n\n        </mat-form-field>\n        <mat-form-field class=\"example-full-width\">\n          <input matInput #pseudo minlength=\"5\" maxlength=\"10\" name=\"pseudo\" [(ngModel)]=\"user.pseudo\" placeholder=\"Pseudo\" (change)=\"checkPseudo()\"\n           required>\n           <mat-hint align=\"end\">{{pseudo.value.length}} / 5  -\n                  \n              <span style=\"color:green\"> {{pseudoEnable}}   </span>\n               <span style=\"color: red\">{{pseudoNotEnable}}</span>\n             \n              </mat-hint>\n        </mat-form-field>\n        <button mat-button color=\"primary\" [disabled]=\"!info.form.valid || email.invalid\" (click)=\"update()\" >Mettre à jour </button>\n    \n      </form>\n    \n</mat-tab>\n\n    <mat-tab label=\"Mot de passe\">\n        <form class=\"example-form\" form #passF=\"ngForm\">\n        <mat-form-field>\n            <input  matInput placeholder=\"Nouveau mot de passe\" [(ngModel)]=\"password\" required name=\"password\"  [type]=\"hide ? 'password' : 'text'\">\n            <mat-icon matSuffix (click)=\"!hide = hide\">{{hide ? 'visibility' : 'visibility_off'}}</mat-icon>\n          </mat-form-field>\n          <br>\n          <mat-form-field>\n              <input matInput placeholder=\"Confirmez le mot de passe\" [(ngModel)]=\"retype_password\" required name=\"retype_password\"  [type]=\"hide ? 'password' : 'text'\">\n              <mat-icon matSuffix (click)=\"!hide = hide\">{{hide ? 'visibility' : 'visibility_off'}}</mat-icon>\n            </mat-form-field>\n            <mat-error>\n              {{error}}\n            </mat-error>\n            <button mat-button color=\"primary\" [disabled]=\"!passF.form.valid\" (click)=\"passwordUpdate();passF.reset()\" >Mettre à jour </button>\n\n          </form>\n    </mat-tab>\n   \n    <mat-tab label=\"Photo\"> Content 3 \n     mettre a jour votre photo de profil\n      <image-upload></image-upload>\n\n\n    </mat-tab>\n  </mat-tab-group>\n\n</div>"

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
    UserSettingsComponent.prototype.checkEmail = function () {
        var _this = this;
        this.authService.checkEmail(this.user)
            .subscribe(function (res) {
            if (res.message) {
                _this.emailAvailable = res.message;
            }
            else {
                _this.emailAvailable = res.error;
            }
        });
    };
    UserSettingsComponent.prototype.checkPseudo = function () {
        var _this = this;
        this.authService.checkPseudo(this.user)
            .subscribe(function (res) {
            if (res.message) {
                _this.pseudoEnable = res.message;
                _this.pseudoNotEnable = null;
            }
            else {
                _this.pseudoNotEnable = res.error;
                _this.pseudoEnable = null;
            }
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

module.exports = ".card {\n    width: 200px;\n  }\n\n  .container-fixe {\n   \n      margin-top: 2%;\n      display:flex;\n      flex-flow: row wrap;\n      justify-content: space-around;\n  }\n\n  .example-headers-align .mat-expansion-panel-header-title, \n.example-headers-align .mat-expansion-panel-header-description {\n  flex-basis: 0;\n}\n\n  .example-headers-align .mat-expansion-panel-header-description {\n  justify-content: space-between;\n  align-items: center;\n}\n\n  mat-list-item  img {\n  width: 46px;\n  border-radius: 50%;\n  padding-right: 10px;\n}\n\n  .example-card {\n  width: 300px;\n  height: 100%;\n  margin-bottom: 40px;\n  padding-bottom: 40px;\n  background-color: ivory\n}\n\n  .container {\n  display: flex;\n  flex-flow: column wrap;\n  justify-items: center;\n  padding-left: 25%;\n\n}"

/***/ }),

/***/ "./src/app/userdata/userdata.component.html":
/*!**************************************************!*\
  !*** ./src/app/userdata/userdata.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fixe\">\n    <div>\n        <mat-card class=\"card\">\n            <mat-card-header>\n              <mat-card-title>\n                {{userData.first_name}}\n                {{userData.last_name}}\n                    </mat-card-title>\n              <mat-card-subtitle>\n                {{userData.pseudo}}\n                <img src=\" {{userData.picture}}\" alt=\"\">\n              </mat-card-subtitle>\n            </mat-card-header>\n            <mat-card-content>\n            </mat-card-content>\n          </mat-card>\n    </div>\n    \n    <mat-card class=\"example-card\">\n        <article >\n          <form class=\"example-form\" #commentF=\"ngForm\" (submit)=\"posted();commentF.reset()\" >\n        <mat-form-field>\n          <input matInput placeholder=\"titre du message\" name=\"title\" id=\"titre\" [(ngModel)]=\"comment.title\" required >\n        </mat-form-field>\n         <br>\n        <mat-form-field class=\"example-full-width\">\n          <textarea matInput placeholder=\"Poster un commentaire......\" name=\"comment\" [(ngModel)]=\"comment.content\"></textarea>\n        </mat-form-field>\n         <br>\n        <button type=\"submit\" mat-fab color=\"accent\" [disabled]=\"!commentF.form.valid\">Poster\n     \n        </button>\n  \n    </form>\n          \n      </article>\n      </mat-card>\n\n      <div class=\"request\">\n        <form class=\"example-form\" #search=\"ngForm\" >\n        <mat-accordion class=\"example-headers-align\">\n          <mat-expansion-panel [expanded]=\"step === 0\" (opened)=\"setStep(0)\" hideToggle>\n            <mat-expansion-panel-header>\n              <mat-panel-title>\n                recherche de membre\n              </mat-panel-title>\n              <mat-panel-description>\n          \n                <mat-icon>account_circle</mat-icon>\n              </mat-panel-description>\n            </mat-expansion-panel-header>\n        \n            <mat-form-field>\n              <input matInput placeholder=\"nom, prenom ou pseudo\" name=\"name\" [(ngModel)]=\"keyword.name\" \n              >\n              \n            </mat-form-field>\n            <button type=\"submit\" mat-button color=\"primary\" (click)=\"searchfriend()\" >OK</button>\n\n            <mat-list *ngFor=\"let member of resultList\">\n              \n                <mat-list-item> \n                 <form class=\"example-form\" >\n                    <mat-form-field>\n                      <input matInput name=\"_id\" [ngModel]=\"member._id\">\n                    </mat-form-field>\n                    <img src=\" {{userData.picture}}\" alt=\"\"> {{member.first_name}} {{member.pseudo}} \n                    \n                    <button type=\"submit\" mat-button (click)=\"sendInvitationrequest(member)\" >value</button>\n                  </form>\n                 </mat-list-item>\n      \n               </mat-list>\n            \n        \n            <mat-action-row>\n              <button mat-button color=\"primary\" (click)=\"nextStep()\">Next</button>\n            </mat-action-row>\n          </mat-expansion-panel>\n        \n          <mat-expansion-panel [expanded]=\"step === 1\" (opened)=\"setStep(1)\" hideToggle>\n            <mat-expansion-panel-header>\n              <mat-panel-title>\n                Demandes d'ajout\n              </mat-panel-title>\n              <mat-panel-description>\n                Liste des demandes d'ajout\n                <mat-icon>map</mat-icon>\n              </mat-panel-description>\n            </mat-expansion-panel-header>\n        \n            <mat-form-field>\n              <input matInput placeholder=\"Country\">\n            </mat-form-field>\n        \n            <mat-action-row>\n              <button mat-button color=\"warn\" (click)=\"prevStep()\">Previous</button>\n            </mat-action-row>\n          </mat-expansion-panel>\n        \n        \n        \n        </mat-accordion>\n      </form>\n      </div>\n      \n     \n\n\n    </div>\n\n\n\n\n<div class=\"container\">\n  \n    <mat-card class=\"example-card\" *ngFor=\"let comment of comments\">\n      <mat-card-header>\n        <div mat-card-avatar class=\"example-header-image\">\n          <img src=\"{{comment.authorPicture}}\" style=\"width: 46px;\" alt=\"\">\n        </div>\n        <mat-card-title>{{comment.author }} </mat-card-title>\n        <mat-card-subtitle> Posté le  {{ comment.date| date:'dd-MM-yyyy à HH:mm' }}</mat-card-subtitle>\n      </mat-card-header>\n      <h4> {{comment.title}}</h4>\n     \n      <mat-card-content>\n        <p>\n          {{comment.content}}\n        </p>\n      </mat-card-content>\n     \n    </mat-card>\n  </div>\n\n\n<!-- <app-comments></app-comments> -->\n"

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
        var _this = this;
        this.commentService = commentService;
        this.auth = auth;
        this.afStorage = afStorage;
        this.userData = _models_user__WEBPACK_IMPORTED_MODULE_1__["User"];
        this.step = 0;
        this.keyword = {
            name: ''
        };
        this.comment = {
            title: '',
            author: '',
            content: '',
            date: null,
            authorId: '',
            authorPicture: '',
            explicit: false
        };
        this.comments = [];
        this.member = {
            first_name: '',
            pseudo: '',
            _id: '',
        };
        this.commentService.onPosted()
            .subscribe(function (data) {
            _this.comments.splice(0, 0, data);
            console.log("Apres ajout", _this.comments);
        });
    }
    UserdataComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.auth.getData()
            .subscribe(function (data) {
            data.user.online = true;
            _this.userData = data.user;
            console.log('*--**--*', data.user);
            _this.auth.isAdmin = data.user.admin;
            console.log('mes infos', _this.userData);
            _this.currentUser_id = data.user._id;
            _this.comment.author = data.user.first_name + ' ' + data.user.last_name;
            _this.comment.authorId = _this.currentUser_id;
            _this.comment.authorPicture = data.user.picture;
        });
        this.commentService.getMemberComments(this.currentUser_id)
            .subscribe(function (res) {
            _this.comments = res.comments;
        });
    };
    /*   upload(event) {
        this.afStorage.upload('/', event.target.files[0]);
        console.log('fait')
      } */
    UserdataComponent.prototype.setStep = function (index) {
        this.step = index;
    };
    UserdataComponent.prototype.nextStep = function () {
        this.step++;
    };
    UserdataComponent.prototype.prevStep = function () {
        this.step--;
    };
    // Post copmment on space or friend space
    UserdataComponent.prototype.posted = function () {
        this.comment.date = new Date();
        this.commentService.postMessage(this.comment);
    };
    UserdataComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-userdata',
            template: __webpack_require__(/*! ./userdata.component.html */ "./src/app/userdata/userdata.component.html"),
            styles: [__webpack_require__(/*! ./userdata.component.css */ "./src/app/userdata/userdata.component.css")]
        }),
        __metadata("design:paramtypes", [_comment_service__WEBPACK_IMPORTED_MODULE_3__["CommentService"],
            _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            angularfire2_storage__WEBPACK_IMPORTED_MODULE_4__["AngularFireStorage"]])
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