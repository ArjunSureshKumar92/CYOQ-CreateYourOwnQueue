(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/end-user/enduser-ticketdetail/enduser-ticketdetail.component.html":
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/end-user/enduser-ticketdetail/enduser-ticketdetail.component.html ***!
  \************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>enduser-ticketdetail works!</p>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modal/modal.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modal/modal.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"modal\" tabindex=\"-1\" role=\"dialog\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\"><p [(ngModel)]=\"data.title\"></p></h5>\n        <button\n          type=\"button\"\n          class=\"close\"\n          data-dismiss=\"modal\"\n          aria-label=\"Close\"\n          (click)=\"onCloseClick()\"\n        >\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <p [(ngModel)]=\"data.message\"></p>\n      </div>\n      <div class=\"modal-footer\">\n        <button\n          type=\"button\"\n          class=\"btn btn-secondary\"\n          data-dismiss=\"modal\"\n          (click)=\"onCloseClick()\"\n        >\n          Close\n        </button>\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _components_admin_admin_home_admin_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/admin/admin-home/admin-home.component */ "./src/app/components/admin/admin-home/admin-home.component.ts");
/* harmony import */ var _components_admin_create_queue_create_queue_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/admin/create-queue/create-queue.component */ "./src/app/components/admin/create-queue/create-queue.component.ts");
/* harmony import */ var _components_admin_create_moderator_create_moderator_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/admin/create-moderator/create-moderator.component */ "./src/app/components/admin/create-moderator/create-moderator.component.ts");
/* harmony import */ var _components_admin_moderator_list_moderator_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/admin/moderator-list/moderator-list.component */ "./src/app/components/admin/moderator-list/moderator-list.component.ts");
/* harmony import */ var _components_admin_company_details_company_details_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/admin/company-details/company-details.component */ "./src/app/components/admin/company-details/company-details.component.ts");
/* harmony import */ var _components_moderator_moderator_queue_list_moderator_queue_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/moderator/moderator-queue-list/moderator-queue-list.component */ "./src/app/components/moderator/moderator-queue-list/moderator-queue-list.component.ts");
/* harmony import */ var _components_end_user_enduser_home_enduser_home_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/end-user/enduser-home/enduser-home.component */ "./src/app/components/end-user/enduser-home/enduser-home.component.ts");
/* harmony import */ var _components_moderator_moderator_queue_moderator_queue_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/moderator/moderator-queue/moderator-queue.component */ "./src/app/components/moderator/moderator-queue/moderator-queue.component.ts");
/* harmony import */ var _components_end_user_register_queue_register_queue_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/end-user/register-queue/register-queue.component */ "./src/app/components/end-user/register-queue/register-queue.component.ts");
/* harmony import */ var _components_admin_moderator_details_moderator_details_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/admin/moderator-details/moderator-details.component */ "./src/app/components/admin/moderator-details/moderator-details.component.ts");
/* harmony import */ var _components_admin_queue_details_queue_details_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/admin/queue-details/queue-details.component */ "./src/app/components/admin/queue-details/queue-details.component.ts");
/* harmony import */ var _components_moderator_end_user_list_end_user_list_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/moderator/end-user-list/end-user-list.component */ "./src/app/components/moderator/end-user-list/end-user-list.component.ts");
/* harmony import */ var _components_moderator_ticket_details_ticket_details_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/moderator/ticket-details/ticket-details.component */ "./src/app/components/moderator/ticket-details/ticket-details.component.ts");
















const routes = [
    {
        path: '',
        redirectTo: '/admin/queue/list',
        pathMatch: 'full'
    },
    {
        path: 'admin',
        children: [
            {
                path: 'queue',
                children: [
                    {
                        path: 'list',
                        component: _components_admin_admin_home_admin_home_component__WEBPACK_IMPORTED_MODULE_3__["AdminHomeComponent"]
                    },
                    {
                        path: 'create',
                        component: _components_admin_create_queue_create_queue_component__WEBPACK_IMPORTED_MODULE_4__["CreateQueueComponent"]
                    },
                    {
                        path: 'view/:companyId/:queueId',
                        component: _components_admin_queue_details_queue_details_component__WEBPACK_IMPORTED_MODULE_13__["QueueDetailsComponent"]
                    }
                ]
            },
            {
                path: 'moderator',
                children: [
                    {
                        path: 'create',
                        component: _components_admin_create_moderator_create_moderator_component__WEBPACK_IMPORTED_MODULE_5__["CreateModeratorComponent"]
                    },
                    {
                        path: 'list',
                        component: _components_admin_moderator_list_moderator_list_component__WEBPACK_IMPORTED_MODULE_6__["ModeratorListComponent"]
                    },
                    {
                        path: 'view/:companyId/:moderatorId',
                        component: _components_admin_moderator_details_moderator_details_component__WEBPACK_IMPORTED_MODULE_12__["ModeratorDetailsComponent"]
                    }
                ]
            },
            {
                path: 'company',
                component: _components_admin_company_details_company_details_component__WEBPACK_IMPORTED_MODULE_7__["CompanyDetailsComponent"]
            }
        ]
    },
    {
        path: 'user',
        children: [
            {
                path: ':company/:queue/register',
                component: _components_end_user_register_queue_register_queue_component__WEBPACK_IMPORTED_MODULE_11__["RegisterQueueComponent"]
            },
            {
                path: 'view/:userId',
                component: _components_end_user_enduser_home_enduser_home_component__WEBPACK_IMPORTED_MODULE_9__["EndUserHomeComponent"]
            }
        ]
    },
    {
        path: 'moderator',
        children: [
            {
                path: 'queue',
                children: [
                    {
                        path: 'list',
                        component: _components_moderator_moderator_queue_list_moderator_queue_list_component__WEBPACK_IMPORTED_MODULE_8__["ModeratorQueueListComponent"]
                    },
                    {
                        path: 'get/:companyId/:queueId',
                        children: [
                            {
                                path: '',
                                component: _components_moderator_moderator_queue_moderator_queue_component__WEBPACK_IMPORTED_MODULE_10__["ModeratorQueueComponent"]
                            },
                            {
                                path: 'tickets',
                                component: _components_moderator_end_user_list_end_user_list_component__WEBPACK_IMPORTED_MODULE_14__["EndUserListComponent"]
                            },
                            {
                                path: 'ticket/:ticketId',
                                component: _components_moderator_ticket_details_ticket_details_component__WEBPACK_IMPORTED_MODULE_15__["TicketDetailsComponent"]
                            }
                        ]
                    }
                ]
            }
        ]
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'cyoq';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: `
  <div class="header">
    <app-header></app-header>
  </div>
  <main class="container-fluid scrollbar">
    <router-outlet></router-outlet>
  </main>
  `,
        styles: ["\n    main {\n        padding: 1rem;\n        height: 80%;\n        width: 65%;\n        overflow-y: scroll;\n    }\n  "]
    })
], AppComponent);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_admin_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/admin/navbar/navbar.component */ "./src/app/components/admin/navbar/navbar.component.ts");
/* harmony import */ var _components_admin_admin_home_admin_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/admin/admin-home/admin-home.component */ "./src/app/components/admin/admin-home/admin-home.component.ts");
/* harmony import */ var _components_shared_header_header_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/shared/header/header.component */ "./src/app/components/shared/header/header.component.ts");
/* harmony import */ var _components_admin_create_queue_create_queue_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/admin/create-queue/create-queue.component */ "./src/app/components/admin/create-queue/create-queue.component.ts");
/* harmony import */ var _components_admin_create_moderator_create_moderator_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/admin/create-moderator/create-moderator.component */ "./src/app/components/admin/create-moderator/create-moderator.component.ts");
/* harmony import */ var _components_admin_moderator_list_moderator_list_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/admin/moderator-list/moderator-list.component */ "./src/app/components/admin/moderator-list/moderator-list.component.ts");
/* harmony import */ var _components_admin_moderator_item_moderator_item_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/admin/moderator-item/moderator-item.component */ "./src/app/components/admin/moderator-item/moderator-item.component.ts");
/* harmony import */ var _components_admin_company_details_company_details_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/admin/company-details/company-details.component */ "./src/app/components/admin/company-details/company-details.component.ts");
/* harmony import */ var _components_admin_queue_list_queue_list_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/admin/queue-list/queue-list.component */ "./src/app/components/admin/queue-list/queue-list.component.ts");
/* harmony import */ var _components_admin_queue_item_queue_item_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/admin/queue-item/queue-item.component */ "./src/app/components/admin/queue-item/queue-item.component.ts");
/* harmony import */ var _filter_pipe__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./filter.pipe */ "./src/app/filter.pipe.ts");
/* harmony import */ var _components_end_user_enduser_home_enduser_home_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/end-user/enduser-home/enduser-home.component */ "./src/app/components/end-user/enduser-home/enduser-home.component.ts");
/* harmony import */ var _components_moderator_moderator_home_moderator_home_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/moderator/moderator-home/moderator-home.component */ "./src/app/components/moderator/moderator-home/moderator-home.component.ts");
/* harmony import */ var _components_moderator_end_user_list_end_user_list_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/moderator/end-user-list/end-user-list.component */ "./src/app/components/moderator/end-user-list/end-user-list.component.ts");
/* harmony import */ var _components_moderator_ticket_item_ticket_item_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/moderator/ticket-item/ticket-item.component */ "./src/app/components/moderator/ticket-item/ticket-item.component.ts");
/* harmony import */ var _components_moderator_moderator_queue_list_moderator_queue_list_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/moderator/moderator-queue-list/moderator-queue-list.component */ "./src/app/components/moderator/moderator-queue-list/moderator-queue-list.component.ts");
/* harmony import */ var _components_moderator_moderator_queue_moderator_queue_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/moderator/moderator-queue/moderator-queue.component */ "./src/app/components/moderator/moderator-queue/moderator-queue.component.ts");
/* harmony import */ var _components_moderator_moderator_queue_item_moderator_queue_item_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/moderator/moderator-queue-item/moderator-queue-item.component */ "./src/app/components/moderator/moderator-queue-item/moderator-queue-item.component.ts");
/* harmony import */ var _components_end_user_register_queue_register_queue_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/end-user/register-queue/register-queue.component */ "./src/app/components/end-user/register-queue/register-queue.component.ts");
/* harmony import */ var _components_admin_moderator_details_moderator_details_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/admin/moderator-details/moderator-details.component */ "./src/app/components/admin/moderator-details/moderator-details.component.ts");
/* harmony import */ var _components_moderator_moderator_navbar_moderator_navbar_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/moderator/moderator-navbar/moderator-navbar.component */ "./src/app/components/moderator/moderator-navbar/moderator-navbar.component.ts");
/* harmony import */ var _components_admin_queue_details_queue_details_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./components/admin/queue-details/queue-details.component */ "./src/app/components/admin/queue-details/queue-details.component.ts");
/* harmony import */ var _components_moderator_ticket_details_ticket_details_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./components/moderator/ticket-details/ticket-details.component */ "./src/app/components/moderator/ticket-details/ticket-details.component.ts");
/* harmony import */ var _components_end_user_enduser_ticketdetail_enduser_ticketdetail_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./components/end-user/enduser-ticketdetail/enduser-ticketdetail.component */ "./src/app/components/end-user/enduser-ticketdetail/enduser-ticketdetail.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _modal_modal_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./modal/modal.component */ "./src/app/modal/modal.component.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");


































let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
            _components_admin_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__["NavbarComponent"],
            _components_admin_admin_home_admin_home_component__WEBPACK_IMPORTED_MODULE_8__["AdminHomeComponent"],
            _components_shared_header_header_component__WEBPACK_IMPORTED_MODULE_9__["HeaderComponent"],
            _components_admin_create_queue_create_queue_component__WEBPACK_IMPORTED_MODULE_10__["CreateQueueComponent"],
            _components_admin_create_moderator_create_moderator_component__WEBPACK_IMPORTED_MODULE_11__["CreateModeratorComponent"],
            _components_admin_moderator_list_moderator_list_component__WEBPACK_IMPORTED_MODULE_12__["ModeratorListComponent"],
            _components_admin_company_details_company_details_component__WEBPACK_IMPORTED_MODULE_14__["CompanyDetailsComponent"],
            _components_admin_queue_list_queue_list_component__WEBPACK_IMPORTED_MODULE_15__["QueueListComponent"],
            _components_admin_queue_item_queue_item_component__WEBPACK_IMPORTED_MODULE_16__["QueueItemComponent"],
            _components_admin_moderator_item_moderator_item_component__WEBPACK_IMPORTED_MODULE_13__["ModeratorItemComponent"],
            _filter_pipe__WEBPACK_IMPORTED_MODULE_17__["FilterPipe"],
            _components_end_user_enduser_home_enduser_home_component__WEBPACK_IMPORTED_MODULE_18__["EndUserHomeComponent"],
            _components_moderator_moderator_home_moderator_home_component__WEBPACK_IMPORTED_MODULE_19__["ModeratorHomeComponent"],
            _components_moderator_end_user_list_end_user_list_component__WEBPACK_IMPORTED_MODULE_20__["EndUserListComponent"],
            _components_moderator_ticket_item_ticket_item_component__WEBPACK_IMPORTED_MODULE_21__["TicketItemComponent"],
            _components_moderator_moderator_queue_list_moderator_queue_list_component__WEBPACK_IMPORTED_MODULE_22__["ModeratorQueueListComponent"],
            _components_moderator_moderator_queue_moderator_queue_component__WEBPACK_IMPORTED_MODULE_23__["ModeratorQueueComponent"],
            _components_moderator_moderator_queue_item_moderator_queue_item_component__WEBPACK_IMPORTED_MODULE_24__["ModeratorQueueItemComponent"],
            _components_end_user_register_queue_register_queue_component__WEBPACK_IMPORTED_MODULE_25__["RegisterQueueComponent"],
            _components_admin_moderator_details_moderator_details_component__WEBPACK_IMPORTED_MODULE_26__["ModeratorDetailsComponent"],
            _components_moderator_moderator_navbar_moderator_navbar_component__WEBPACK_IMPORTED_MODULE_27__["ModeratorNavbarComponent"],
            _components_admin_queue_details_queue_details_component__WEBPACK_IMPORTED_MODULE_28__["QueueDetailsComponent"],
            _components_moderator_ticket_details_ticket_details_component__WEBPACK_IMPORTED_MODULE_29__["TicketDetailsComponent"],
            _components_end_user_enduser_ticketdetail_enduser_ticketdetail_component__WEBPACK_IMPORTED_MODULE_30__["EnduserTicketdetailComponent"],
            _modal_modal_component__WEBPACK_IMPORTED_MODULE_32__["ModalComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_31__["BrowserAnimationsModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_33__["MatDialogModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/components/admin/admin-home/admin-home.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/admin/admin-home/admin-home.component.ts ***!
  \*********************************************************************/
/*! exports provided: AdminHomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminHomeComponent", function() { return AdminHomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_queue_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/queue.service */ "./src/app/services/queue.service.ts");



let AdminHomeComponent = class AdminHomeComponent {
    constructor(qs) {
        this.qs = qs;
    }
    ngOnInit() {
    }
};
AdminHomeComponent.ctorParameters = () => [
    { type: src_app_services_queue_service__WEBPACK_IMPORTED_MODULE_2__["QueueService"] }
];
AdminHomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-admin-home',
        template: `
  <div>
    <app-navbar></app-navbar>
  </div>
  <h1 class="text-center">Queues</h1>
  <div class="text-right">
    <a routerLink="/admin/queue/create" class="btn btn-primary">+ Add Queue</a>
  </div>
  <app-queue-list></app-queue-list>
  `
    })
], AdminHomeComponent);



/***/ }),

/***/ "./src/app/components/admin/company-details/company-details.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/components/admin/company-details/company-details.component.ts ***!
  \*******************************************************************************/
/*! exports provided: CompanyDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyDetailsComponent", function() { return CompanyDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var src_app_services_queue_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/queue.service */ "./src/app/services/queue.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");





let CompanyDetailsComponent = class CompanyDetailsComponent {
    constructor(fb, qs, location) {
        this.fb = fb;
        this.qs = qs;
        this.location = location;
        this.companyId = '';
        this.adminId = '';
        this.company = [];
        this.companyId = this.qs.companyId;
        this.adminId = this.qs.adminId;
        this.createForm();
        this.getCompany();
    }
    createForm() {
        this.angForm = this.fb.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            address: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            phone: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
        });
    }
    getCompany() {
        this.qs.getCompany(this.companyId).subscribe(res => {
            this.company = res['response'];
            this.setValues();
        }, err => { console.log(err); }, () => { console.log('Retrieved company details.'); });
    }
    setValues() {
        this.angForm.get('name').setValue(this.company.name);
        this.angForm.get('email').setValue(this.company.email);
        this.angForm.get('phone').setValue(this.company.phone);
        this.angForm.get('address').setValue(this.company.address);
    }
    onSubmit() {
        const data = {
            'name': this.angForm.get('name').value,
            'address': this.angForm.get('address').value,
            'phone': this.angForm.get('phone').value,
            'email': this.angForm.get('email').value,
            'companyId': this.companyId
        };
        this.qs.updateCompany(data).subscribe(res => {
            this.location.back();
            console.log('Company updated.');
        }, err => { console.log(err); });
    }
    ngOnInit() {
    }
};
CompanyDetailsComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: src_app_services_queue_service__WEBPACK_IMPORTED_MODULE_3__["QueueService"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"] }
];
CompanyDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-company-details',
        template: `
  <div>
    <app-navbar></app-navbar>
  </div>
  <h1 class="text-center">Company Profile</h1>
  <form [formGroup]="angForm" (ngSubmit)="onSubmit()" #form>
    <div class="container-fluid">
        <div class="form-group">
            <label for="name">Company name</label>
            <input type="text" class="form-control form-control-lg" formControlName="name" id="name" name="name" />
        </div>
        <div class="form-group">
            <label for="name">Address</label>
            <input type="text" class="form-control" formControlName="address" id="address" name="address" />
        </div>
        <div class="form-group">
            <label for="name">Phone</label>
            <input type="text" class="form-control" formControlName="phone" id="phone" name="phone" />
        </div>
        <div class="form-group">
            <label for="name">Email</label>
            <input type="text" class="form-control" formControlName="email" id="email" name="email" />
        </div>
        <div hidden>
            <input type="text" class="form-control" id="companyId" name="companyId" value="{{companyId}}" />
        </div>
        <input type="submit" class="btn btn-primary btn-block btn-lg" [disabled]="angForm.pristine || angForm.invalid" value="Save" />
    </div>
  </form>
  `
    })
], CompanyDetailsComponent);



/***/ }),

/***/ "./src/app/components/admin/create-moderator/create-moderator.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/components/admin/create-moderator/create-moderator.component.ts ***!
  \*********************************************************************************/
/*! exports provided: CreateModeratorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateModeratorComponent", function() { return CreateModeratorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_services_queue_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/queue.service */ "./src/app/services/queue.service.ts");





let CreateModeratorComponent = class CreateModeratorComponent {
    constructor(location, fb, qs) {
        this.location = location;
        this.fb = fb;
        this.qs = qs;
        this.companyId = '';
        this.adminId = '';
        this.createForm();
        this.companyId = this.qs.companyId;
        this.adminId = this.qs.adminId;
    }
    ngOnInit() {
    }
    close() {
        this.location.back();
    }
    createForm() {
        this.modForm = this.fb.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
    }
    onSubmit() {
        const data = {
            'name': this.modForm.get('name').value,
            'email': this.modForm.get('email').value,
            'companyId': this.companyId,
        };
        this.qs.createModerator(data).subscribe(res => {
            this.location.back();
            console.log('Moderator created.');
        }, err => { console.log(err); });
    }
};
CreateModeratorComponent.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: src_app_services_queue_service__WEBPACK_IMPORTED_MODULE_4__["QueueService"] }
];
CreateModeratorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-create-moderator',
        template: `
  <div>
    <app-navbar></app-navbar>
  </div>
  <form [formGroup]="modForm" (ngSubmit)="onSubmit()" #form>
    <button type="button" (click)="close()" class="close" aria-label="Close">
      <span aria-hidden="true">&times;</span>
    </button>
    <div class="form-group">
        <label for="name">Name</label>
        <input type="text" class="form-control form-control-lg" formControlName="name" name="name" id="name" placeholder="Full name" />
    </div>
    <div class="form-group">
        <label for="email">Email address</label>
        <input type="text" class="form-control" formControlName="email" name="email" id="email" placeholder="mail@email.com" />
    </div>
    <div hidden>
        <input type="text" class="form-control" id="companyId" name="companyId" value="{{companyId}}" />
    </div>
    <input type="submit" class="btn btn-primary btn-block btn-lg" [disabled]="modForm.pristine || modForm.invalid" value="Create Moderator" />
  </form>
  `
    })
], CreateModeratorComponent);



/***/ }),

/***/ "./src/app/components/admin/create-queue/create-queue.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/admin/create-queue/create-queue.component.ts ***!
  \*************************************************************************/
/*! exports provided: CreateQueueComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateQueueComponent", function() { return CreateQueueComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_services_queue_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/queue.service */ "./src/app/services/queue.service.ts");





let CreateQueueComponent = class CreateQueueComponent {
    constructor(location, fb, qs) {
        this.location = location;
        this.fb = fb;
        this.qs = qs;
        this.startTime = new Date();
        this.closeTime = new Date();
        this.companyId = '';
        this.adminId = '';
        this.selectedModerators = [];
        this.startTime.setHours(9, 0, 0, 0);
        this.closeTime.setHours(17, 0, 0, 0);
        this.companyId = this.qs.companyId;
        this.adminId = this.qs.adminId;
        this.createForm();
        this.getModerators();
    }
    ngOnInit() { }
    close() {
        this.location.back();
    }
    createForm() {
        this.angForm = this.fb.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            startTime: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            closeTime: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
        this.angForm.get('startTime').setValue('09:00');
        this.angForm.get('closeTime').setValue('17:00');
    }
    getModerators() {
        this.qs.getModerators().subscribe(res => {
            this.moderators = res['response'];
            this.setValues();
        }, err => { console.log(err); }, () => { console.log('Retrieved moderators'); });
    }
    setValues() {
        this.angForm.addControl('moderator', new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormArray"](this.moderators.map(mod => new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](false))));
    }
    submit() {
        var arrayControl = this.angForm.get('moderator');
        for (let i = 0; i < arrayControl.controls.length; i++) {
            console.log(arrayControl.controls[i].value);
            if (arrayControl.controls[i].value === true) {
                console.log("added");
                this.selectedModerators.push(this.moderators[i].moderatorId);
            }
        }
        console.log(this.selectedModerators);
        const data = {
            'name': this.angForm.get('name').value,
            'description': this.angForm.get('description').value,
            'startTime': this.angForm.get('startTime').value,
            'closeTime': this.angForm.get('closeTime').value,
            'moderator': this.selectedModerators,
            'companyId': this.companyId
        };
        this.qs.createQueue(data).subscribe(res => {
            this.location.back();
            console.log('Queue created.');
        }, err => { console.log(err); });
    }
    onChangeCategory(event, mod) {
    }
};
CreateQueueComponent.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: src_app_services_queue_service__WEBPACK_IMPORTED_MODULE_4__["QueueService"] }
];
CreateQueueComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-create-queue',
        template: `
    <div>
        <app-navbar></app-navbar>
    </div>
    <form [formGroup]="angForm" (ngSubmit)="submit()" #form>
        <button (click)="close()" type="button" class="close" aria-label="Close">
            <span aria-hidden="true">&times;</span>
        </button>
        <div class="form-group">
            <label for="name">Queue name</label>
            <input type="text" class="form-control form-control-lg" formControlName="name" id="name" name="name" />
        </div>
        <div class="form-group">
            <label for="name">Description</label>
            <input type="text" class="form-control" formControlName="description" id="description" name="description" />
        </div>
        <div class="form-group row justify-content-center">
            <div class="col-xs">
                <label for="startTime">Start time</label><br>
                <input type="time" formControlName="startTime" name="time" id="time" />
            </div>
            <div class="col-xs offset-md-3">
                <label for="closeTime">Closing time</label><br>
                <input type="time" formControlName="closeTime" name="time" id="time" />
            </div>
        </div>

        <label>Moderators</label>
        <div formArrayName="moderator" *ngFor="let mod of moderators; let i = index">
            <input type="checkbox" [formControlName]="i" name="moderator" value="{{moderators[i].moderatorId}}" (change)="onChangeCategory($event, mod)" /> {{moderators[i].name}}
        </div>

        <div hidden>
            <input type="text" class="form-control" id="companyId" name="companyId" value="{{companyId}}" />
        </div>
        <input type="submit" class="btn btn-primary btn-block btn-lg" [disabled]="angForm.pristine || angForm.invalid" value="Create Queue" />
    </form> `
    })
], CreateQueueComponent);



/***/ }),

/***/ "./src/app/components/admin/moderator-details/moderator-details.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/components/admin/moderator-details/moderator-details.component.ts ***!
  \***********************************************************************************/
/*! exports provided: ModeratorDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModeratorDetailsComponent", function() { return ModeratorDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_services_queue_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/queue.service */ "./src/app/services/queue.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");






let ModeratorDetailsComponent = class ModeratorDetailsComponent {
    constructor(location, fb, qs, router) {
        this.location = location;
        this.fb = fb;
        this.qs = qs;
        this.router = router;
        this.adminId = '';
        this.companyId = '';
        this.moderatorId = '';
        let url = this.router.url.split('/');
        this.moderatorId = url[url.length - 1];
        this.companyId = url[url.length - 2];
        this.adminId = this.qs.adminId;
        this.createForm();
        this.getModerator();
    }
    ngOnInit() {
    }
    close() {
        this.location.back();
    }
    createForm() {
        this.angForm = this.fb.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
    }
    getModerator() {
        this.qs.getModerator(this.moderatorId).subscribe(res => {
            this.moderator = res['response'];
            this.setValues();
        }, err => { console.log(err); });
    }
    setValues() {
        this.angForm.get('name').setValue(this.moderator.name);
        this.angForm.get('email').setValue(this.moderator.email);
    }
    submit() {
        let data = {
            name: this.angForm.get('name').value,
            email: this.angForm.get('email').value,
            companyId: this.companyId,
            moderatorId: this.moderatorId
        };
        this.qs.updateModerator(data).subscribe(res => {
            this.router.navigate(['']);
        }, err => {
            console.log(err);
        }, () => {
            console.log('Updated moderator.');
        });
    }
    delete() {
        let data = {
            name: this.angForm.get('name').value,
            email: this.angForm.get('email').value,
            companyId: this.companyId,
            moderatorId: this.moderatorId
        };
        this.qs.deleteModerator(data).subscribe(res => {
            this.router.navigate(['']);
        }, err => {
            console.log(err);
        }, () => {
            console.log('Deleted moderator');
        });
    }
};
ModeratorDetailsComponent.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: src_app_services_queue_service__WEBPACK_IMPORTED_MODULE_4__["QueueService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
ModeratorDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-moderator-details',
        template: `
  <div>
    <app-navbar></app-navbar>
  </div>
  <form [formGroup]="angForm" (ngSubmit)="submit()" #form>
    <div class="form-group">
        <label for="name">Moderator name</label>
        <input type="text" class="form-control form-control-lg" formControlName="name" id="name" name="name" />
    </div>
    <div class="form-group">
        <label for="name">Email</label>
        <input type="text" class="form-control" formControlName="email" id="email" name="email" />
    </div>
    <div hidden>
        <input type="text" class="form-control" id="companyId" name="companyId" value="{{companyId}}"  />
    </div>
    <div hidden>
        <input type="text" class="form-control" id="moderatorId" name="moderatorId" value="{{moderatorId}}" />
    </div>
    <input type="submit" class="btn btn-primary btn-block btn-lg" [disabled]="angForm.pristine || angForm.invalid" value="Save Changes" />
    <input type="button" (click)="delete()" class="btn btn-danger btn-block btn-lg" name="delete" id="delete" value="Delete Moderator" />
  </form>
  `
    })
], ModeratorDetailsComponent);



/***/ }),

/***/ "./src/app/components/admin/moderator-item/moderator-item.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/components/admin/moderator-item/moderator-item.component.ts ***!
  \*****************************************************************************/
/*! exports provided: ModeratorItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModeratorItemComponent", function() { return ModeratorItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ModeratorItemComponent = class ModeratorItemComponent {
    constructor() {
        this.name = '';
        this.moderatorId = '';
        this.companyId = '';
    }
    ngOnInit() {
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ModeratorItemComponent.prototype, "name", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ModeratorItemComponent.prototype, "moderatorId", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ModeratorItemComponent.prototype, "companyId", void 0);
ModeratorItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-moderator-item',
        template: `
  <div class="container-fluid clickable row">
    <h5 class="d-inline col">{{name}}</h5>
    <a routerLink="/admin/moderator/view/{{companyId}}/{{moderatorId}}" class="divLink"></a>
  </div>
  `,
        styles: ["\n  .container-fluid {\n    background: rgb(255,255,255);\n    margin: 0.5em;\n    padding: 1em 1.5em;\n  }\n  "]
    })
], ModeratorItemComponent);



/***/ }),

/***/ "./src/app/components/admin/moderator-list/moderator-list.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/components/admin/moderator-list/moderator-list.component.ts ***!
  \*****************************************************************************/
/*! exports provided: ModeratorListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModeratorListComponent", function() { return ModeratorListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_queue_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/queue.service */ "./src/app/services/queue.service.ts");



let ModeratorListComponent = class ModeratorListComponent {
    constructor(qs) {
        this.qs = qs;
        this.adminId = '';
        this.companyId = '';
        this.moderators = [];
        this.getModerator();
        this.adminId = this.qs.adminId;
        this.companyId = this.qs.companyId;
    }
    getModerator() {
        this.qs.getModerators().subscribe(res => {
            this.moderators = res['response'];
        }, err => {
            console.log(err);
        }, () => {
            console.log('Retrieved moderators');
        });
    }
    ngOnInit() {
        console.log("Onb Init Called");
        this.getModerator();
    }
};
ModeratorListComponent.ctorParameters = () => [
    { type: src_app_services_queue_service__WEBPACK_IMPORTED_MODULE_2__["QueueService"] }
];
ModeratorListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-moderator-list',
        template: `
  <div>
    <app-navbar></app-navbar>
  </div>
  <h1 class="text-center">Moderators</h1>
  <div class="text-right">
    <a routerLink="/admin/moderator/create" class="btn btn-primary">+ Add Moderator</a>
  </div>
  <div class="container-fluid">
    <app-moderator-item *ngFor="let m of moderators" name="{{m.name}}" moderatorId="{{m.moderatorId}}" companyId="{{companyId}}"></app-moderator-item>
  </div>
  `,
        styles: ["\n  .container-fluid {\n    background: rgb(240,240,240);\n    margin: 0.5em auto;\n    padding: 1em;\n  }\n  "]
    })
], ModeratorListComponent);



/***/ }),

/***/ "./src/app/components/admin/navbar/navbar.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/admin/navbar/navbar.component.ts ***!
  \*************************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let NavbarComponent = class NavbarComponent {
};
NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-navbar',
        template: `
    <div class="container">
      <nav class="navbar navbar-fixed-top justify-content-center nav-fill">
        <div id="navbar">
          <ul class="list-inline nav">
            <li class="list-inline-item nav-item">
              <a routerLink="/admin/queue/list" class="nav-link" routerLinkActive="active">Queues</a>
            </li>
            <li class="list-inline-item nav-item">
              <a routerLink="/admin/moderator/list" class="nav-link" routerLinkActive="active">Moderators</a>
            </li>
            <li class="list-inline-item nav-item">
              <a routerLink="/admin/company" class="nav-link" routerLinkActive="active">Company</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  `
    })
], NavbarComponent);



/***/ }),

/***/ "./src/app/components/admin/queue-details/queue-details.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/admin/queue-details/queue-details.component.ts ***!
  \***************************************************************************/
/*! exports provided: QueueDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QueueDetailsComponent", function() { return QueueDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_services_queue_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/queue.service */ "./src/app/services/queue.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");






let QueueDetailsComponent = class QueueDetailsComponent {
    constructor(location, fb, qs, router) {
        this.location = location;
        this.fb = fb;
        this.qs = qs;
        this.router = router;
        this.adminId = '';
        this.companyId = '';
        this.queueId = '';
        let url = this.router.url.split('/');
        this.queueId = url[url.length - 1];
        this.companyId = url[url.length - 2];
        this.adminId = this.qs.adminId;
        this.createForm();
        this.getQueue();
    }
    ngOnInit() {
    }
    close() {
        this.location.back();
    }
    createForm() {
        this.angForm = this.fb.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            description: [''],
            startTime: [0],
            closeTime: [0],
        });
    }
    getQueue() {
        this.qs.getQueue(function (val, instance) {
            instance.queue = val;
            instance.setValues();
        }, this, this.queueId);
    }
    setValues() {
        this.angForm.get('name').setValue(this.queue.name);
        this.angForm.get('description').setValue(this.queue.description);
        this.angForm.get('startTime').setValue(this.queue.startTime);
        this.angForm.get('closeTime').setValue(this.queue.closeTime);
    }
    submit() {
        let data = {
            name: this.angForm.get('name').value,
            queueId: this.queueId,
            companyId: this.companyId,
            description: this.angForm.get('description').value,
            startTime: this.angForm.get('startTime').value,
            closeTime: this.angForm.get('closeTime').value
        };
        this.qs.updateQueue(data).subscribe(res => {
            this.router.navigate(['']);
        }, err => {
            console.log(err);
        }, () => {
            console.log('Updated queue.');
        });
    }
    delete() {
        let data = {
            queueId: this.queueId,
            companyId: this.companyId
        };
        this.qs.deleteQueue(data).subscribe(res => {
            this.router.navigate(['']);
        }, err => {
            console.log(err);
        }, () => {
            console.log('Deleted queue');
        });
    }
};
QueueDetailsComponent.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: src_app_services_queue_service__WEBPACK_IMPORTED_MODULE_4__["QueueService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
QueueDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-queue-details',
        template: `
  <div>
    <app-navbar></app-navbar>
  </div>
  <form [formGroup]="angForm" (ngSubmit)="submit()" #form>
    <div class="form-group">
        <label for="name">Queue name</label>
        <input type="text" class="form-control form-control-lg" formControlName="name" id="name" name="name" />
    </div>
    <div class="form-group">
        <label for="name">Description</label>
        <input type="text" class="form-control" formControlName="description" id="description" name="description" />
    </div>
    <div class="form-group row justify-content-center">
        <div class="col-xs">
            <label for="startTime">Start time</label><br>
            <input type="time" formControlName="startTime" name="time" id="time" />
        </div>
        <div class="col-xs offset-md-3">
            <label for="closeTime">Closing time</label><br>
            <input type="time" formControlName="closeTime" name="time" id="time" />
        </div>
    </div>
    <div hidden>
        <input type="text" class="form-control" id="companyId" name="companyId" value="{{companyId}}"  />
    </div>
    <div hidden>
        <input type="text" class="form-control" id="queueId" name="queueId" value="{{queueId}}" />
    </div>
    <input type="submit" class="btn btn-primary btn-block btn-lg" [disabled]="angForm.pristine || angForm.invalid" value="Save Changes" />
    <input type="button" (click)="delete()" class="btn btn-danger btn-block btn-lg" name="delete" id="delete" value="Delete Queue" />
  </form>
  `
    })
], QueueDetailsComponent);



/***/ }),

/***/ "./src/app/components/admin/queue-item/queue-item.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/admin/queue-item/queue-item.component.ts ***!
  \*********************************************************************/
/*! exports provided: QueueItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QueueItemComponent", function() { return QueueItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let QueueItemComponent = class QueueItemComponent {
    constructor() {
        this.name = '';
        this.queueId = '';
        this.companyId = '';
    }
    ngOnInit() {
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], QueueItemComponent.prototype, "name", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], QueueItemComponent.prototype, "queueId", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], QueueItemComponent.prototype, "companyId", void 0);
QueueItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-queue-item',
        template: `
  <div class="container-fluid clickable row">
    <h5 class="d-inline col">{{name}}</h5>
    <a routerLink="/admin/queue/view/{{companyId}}/{{queueId}}" class="divLink"></a>
  </div>
  `,
        styles: ["\n  .container-fluid {\n    background: rgb(255,255,255);\n    margin: 0.5em;\n    padding: 1em 1.5em;\n  }\n  "]
    })
], QueueItemComponent);



/***/ }),

/***/ "./src/app/components/admin/queue-list/queue-list.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/admin/queue-list/queue-list.component.ts ***!
  \*********************************************************************/
/*! exports provided: QueueListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QueueListComponent", function() { return QueueListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_queue_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/queue.service */ "./src/app/services/queue.service.ts");



let QueueListComponent = class QueueListComponent {
    constructor(qs) {
        this.qs = qs;
        this.queues = [];
        this.getQueues();
        this.companyId = this.qs.companyId;
    }
    getQueues() {
        this.qs.getQueues(this.getCallback, this);
    }
    getCallback(val, instance) {
        console.log("val" + val[0].name);
        instance.queues = val;
    }
    ngOnInit() {
    }
};
QueueListComponent.ctorParameters = () => [
    { type: _services_queue_service__WEBPACK_IMPORTED_MODULE_2__["QueueService"] }
];
QueueListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-queue-list',
        template: `
  <div class="input-group">
    <input [(ngModel)]="searchText" class="form-control" />
    <div class="input-group-append">
        <button class="btn btn-primary">Search</button>
    </div>
  </div>
  <div class="container-fluid">
    <app-queue-item *ngFor="let q of queues | filter : searchText" name="{{q.name}}" queueId="{{q.queueId}}" companyId="{{companyId}}"></app-queue-item>
  </div>
  `,
        styles: ["\n  .container-fluid {\n    background: rgb(240,240,240);\n    margin: 0.5em auto;\n    padding: 1em;\n  }\n\n  .input-group {\n    margin: 2em 0 0 0;\n  }\n  "]
    })
], QueueListComponent);



/***/ }),

/***/ "./src/app/components/end-user/enduser-home/enduser-home.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/components/end-user/enduser-home/enduser-home.component.ts ***!
  \****************************************************************************/
/*! exports provided: EndUserHomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EndUserHomeComponent", function() { return EndUserHomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_queue_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/queue.service */ "./src/app/services/queue.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _modal_modal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../modal/modal.component */ "./src/app/modal/modal.component.ts");






let EndUserHomeComponent = class EndUserHomeComponent {
    constructor(qs, router, dialog) {
        this.qs = qs;
        this.router = router;
        this.dialog = dialog;
        this.place = '(Loading)';
        this.queueId = '';
        this.userId = '';
        this.ticketId = '';
        let url = this.router.url.split('/');
        console.log(url);
        this.userId = url[url.length - 1];
        this.getTickets();
        // this.ticketId = url[url.length - 2];
        //this.queueId = url[url.length - 3];
        // this.qs.getTicketPriority(this.queueId, this.ticketId).subscribe(
        //   res => {
        //     console.log(res);
        //     //this.place = res;
        //   },
        //   err => { },
        //   () => { }
        // );
    }
    getTickets() {
        this.qs.getTickets(this.getCallback, this, this.userId);
    }
    getCallback(val, instance) {
        console.log(val);
        instance.tickets = val;
    }
    updateTicketsCallback() {
        this.getTickets();
    }
    cancelTicket(ticketId, queueId) {
        console.log('cancel ticket called for ${this.ticketId}');
        console.log(ticketId);
        const data = {
            'companyId': this.qs.companyId,
            'ticketId': ticketId
        };
        this.qs.deleteTicket(ticketId, this.userId, this.updateTicketsCallback);
    }
    getPositionClick(ticketId, queueId) {
        this.qs.getTicketPriority(this.userId, queueId, ticketId, this.getPositionCallBack);
    }
    getPositionCallBack(status) {
        const dialogRef = this.dialog.open(_modal_modal_component__WEBPACK_IMPORTED_MODULE_5__["ModalComponent"], {
            width: '250px',
            data: { title: 'Title Test', message: status }
        });
        dialogRef.afterClosed().subscribe(result => {
            console.log("Dialog box Closed");
        });
    }
    ngOnInit() {
    }
};
EndUserHomeComponent.ctorParameters = () => [
    { type: src_app_services_queue_service__WEBPACK_IMPORTED_MODULE_2__["QueueService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] }
];
EndUserHomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-enduser-home',
        template: `
  <div>
  <table class="table">
  <thead class="thead-dark">
    <tr>
      <th scope="col">Ticket ID</th>
      <th scope="col">Name</th>
      <th scope="col">Queue Name</th>
      <th scope="col">Status</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
   <tr *ngFor="let ticket of tickets">
      <td scope="row">{{ticket.ticketId}}</td>
      <td>{{ticket.name}}</td>
      <td>{{ticket.queueName}}</td>
      <td>{{ticket.status}}</td>
      <td><button class="btn btn-danger" (click)="cancelTicket(ticket.ticketId)">Cancel Ticket</button></td>
      <td><button class="btn btn-danger" (click)="getPositionClick(ticket.queueId)">Get Ticket Position</button></td>
      </tr>
  </tbody>
  </table>
  </div>
  `
    })
], EndUserHomeComponent);



/***/ }),

/***/ "./src/app/components/end-user/enduser-ticketdetail/enduser-ticketdetail.component.css":
/*!*********************************************************************************************!*\
  !*** ./src/app/components/end-user/enduser-ticketdetail/enduser-ticketdetail.component.css ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZW5kLXVzZXIvZW5kdXNlci10aWNrZXRkZXRhaWwvZW5kdXNlci10aWNrZXRkZXRhaWwuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/components/end-user/enduser-ticketdetail/enduser-ticketdetail.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/components/end-user/enduser-ticketdetail/enduser-ticketdetail.component.ts ***!
  \********************************************************************************************/
/*! exports provided: EnduserTicketdetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnduserTicketdetailComponent", function() { return EnduserTicketdetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let EnduserTicketdetailComponent = class EnduserTicketdetailComponent {
    constructor() { }
    ngOnInit() {
    }
};
EnduserTicketdetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-enduser-ticketdetail',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./enduser-ticketdetail.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/end-user/enduser-ticketdetail/enduser-ticketdetail.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./enduser-ticketdetail.component.css */ "./src/app/components/end-user/enduser-ticketdetail/enduser-ticketdetail.component.css")).default]
    })
], EnduserTicketdetailComponent);



/***/ }),

/***/ "./src/app/components/end-user/register-queue/register-queue.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/components/end-user/register-queue/register-queue.component.ts ***!
  \********************************************************************************/
/*! exports provided: RegisterQueueComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterQueueComponent", function() { return RegisterQueueComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_services_queue_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/queue.service */ "./src/app/services/queue.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let RegisterQueueComponent = class RegisterQueueComponent {
    constructor(fb, qs, router) {
        this.fb = fb;
        this.qs = qs;
        this.router = router;
        this.companyId = '';
        this.queueId = '';
        let url = this.router.url.split('/');
        this.queueId = url[url.length - 2];
        this.companyId = this.qs.companyId;
        this.getQueue();
        this.createForm();
    }
    ngOnInit() {
    }
    createForm() {
        this.regForm = this.fb.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    }
    getQueue() {
        this.qs.getQueueAdmin(this.companyId, this.queueId).subscribe(res => {
            console.log(res);
            this.queue = res['response'];
        }, err => { console.log(err); }, () => { console.log('Retrieved queue info.'); });
    }
    submit() {
        console.log("register user for queue called");
        let data = {
            'name': this.regForm.get('name').value,
            'email': this.regForm.get('email').value,
            'companyId': this.companyId,
            'queueId': this.queueId
        };
        this.qs.createTicket(data).subscribe(res => {
            console.log("Response received from server");
            console.log(res.toString());
            this.router.navigateByUrl(`/user/view/${this.regForm.get('email').value}`);
        }, err => { console.log(err); }, () => { console.log('Registered for queue.'); });
    }
};
RegisterQueueComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: src_app_services_queue_service__WEBPACK_IMPORTED_MODULE_3__["QueueService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
RegisterQueueComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-register-queue',
        template: `
    <form [formGroup]="regForm" (ngSubmit)="submit()" #form>
        <div class="form-group">
            <label>You are registering for:</label>
            <h3>{{queue.name}}</h3>
        </div>
        <div class="form-group">
            <label>Description</label>
            <p>{{queue.description}}</p>
        </div>
        <div class="form-group">
            <label for="name">Name</label>
            <input type="text" class="form-control" formControlName="name" id="name" name="name" placeholder="e.g. Bob Ross" />
        </div>
        <div class="form-group">
            <label for="email">Email address</label>
            <input type="text" class="form-control" formControlName="email" id="email" name="email" placeholder="e.g. test123@email.com" />
        </div>
        <div hidden>
            <input type="text" class="form-control" id="companyId" name="companyId" value="{{companyId}}" />
        </div>
        <div hidden>
            <input type="text" class="form-control" id="queueId" name="queueId" value="{{queueId}}" />
        </div>
        <input type="submit" class="btn btn-primary btn-block btn-lg" [disabled]="regForm.pristine || regForm.invalid" value="Register" />
    </form>
    `
    })
], RegisterQueueComponent);



/***/ }),

/***/ "./src/app/components/moderator/end-user-list/end-user-list.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/components/moderator/end-user-list/end-user-list.component.ts ***!
  \*******************************************************************************/
/*! exports provided: EndUserListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EndUserListComponent", function() { return EndUserListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_queue_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/queue.service */ "./src/app/services/queue.service.ts");



let EndUserListComponent = class EndUserListComponent {
    constructor(qs) {
        this.qs = qs;
        this.tickets = [];
        this.getTickets();
    }
    ngOnInit() {
    }
    getTickets() {
        this.qs.getTickets(this.getCallback, this, this.queueId);
    }
    getCallback(val, instance) {
        console.log("val" + val[0].name);
        instance.tickets = val;
    }
};
EndUserListComponent.ctorParameters = () => [
    { type: src_app_services_queue_service__WEBPACK_IMPORTED_MODULE_2__["QueueService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], EndUserListComponent.prototype, "queueId", void 0);
EndUserListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-end-user-list',
        template: `
  <div class="container-fluid">
    <app-ticket-item *ngFor="let t of tickets" name="{{t.name}}" ticketId="{{t.ticketId}}" queueId="{{queueId}}"></app-ticket-item>
  </div>
  `,
        styles: ["\n  .container-fluid {\n    background: rgb(240,240,240);\n    margin: 0.5em auto;\n    padding: 1em;\n  }\n  "]
    })
], EndUserListComponent);



/***/ }),

/***/ "./src/app/components/moderator/moderator-home/moderator-home.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/components/moderator/moderator-home/moderator-home.component.ts ***!
  \*********************************************************************************/
/*! exports provided: ModeratorHomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModeratorHomeComponent", function() { return ModeratorHomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ModeratorHomeComponent = class ModeratorHomeComponent {
    constructor() { }
    ngOnInit() {
    }
};
ModeratorHomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-moderator-home',
        template: `
  <h1 class="text-center">Your Queues</h1>
  <app-moderator-queue-list></app-moderator-queue-list>
  `
    })
], ModeratorHomeComponent);



/***/ }),

/***/ "./src/app/components/moderator/moderator-navbar/moderator-navbar.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/components/moderator/moderator-navbar/moderator-navbar.component.ts ***!
  \*************************************************************************************/
/*! exports provided: ModeratorNavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModeratorNavbarComponent", function() { return ModeratorNavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ModeratorNavbarComponent = class ModeratorNavbarComponent {
};
ModeratorNavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-moderator-navbar',
        template: `
    <div class="container">
      <nav class="navbar navbar-fixed-top justify-content-center nav-fill">
        <div id="navbar">
          <ul class="list-inline nav">
            <li class="list-inline-item nav-item">
              <a routerLink="/moderator/queue/list" class="nav-link" routerLinkActive="active">Queues</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  `
    })
], ModeratorNavbarComponent);



/***/ }),

/***/ "./src/app/components/moderator/moderator-queue-item/moderator-queue-item.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/components/moderator/moderator-queue-item/moderator-queue-item.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: ModeratorQueueItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModeratorQueueItemComponent", function() { return ModeratorQueueItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_queue_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/queue.service */ "./src/app/services/queue.service.ts");



let ModeratorQueueItemComponent = class ModeratorQueueItemComponent {
    constructor(qs) {
        this.qs = qs;
        this.name = '';
        this.queueId = '';
        this.companyId = '';
        this.companyId = this.qs.companyId;
    }
    ngOnInit() {
    }
};
ModeratorQueueItemComponent.ctorParameters = () => [
    { type: src_app_services_queue_service__WEBPACK_IMPORTED_MODULE_2__["QueueService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ModeratorQueueItemComponent.prototype, "name", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ModeratorQueueItemComponent.prototype, "queueId", void 0);
ModeratorQueueItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-moderator-queue-item',
        template: `
    <div class="container-fluid clickable row">
        <h5 class="d-inline col">{{name}}</h5>
        <a href="{{this.qs.baseUri}}/moderator/queue/get/{{companyId}}/{{queueId}}" class="divLink"></a>
    </div>
    `,
        styles: ["\n    .container-fluid {\n        background: rgb(255,255,255);\n        margin: 0.5em;\n        padding: 1em 1.5em;\n    }\n    "]
    })
], ModeratorQueueItemComponent);



/***/ }),

/***/ "./src/app/components/moderator/moderator-queue-list/moderator-queue-list.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/components/moderator/moderator-queue-list/moderator-queue-list.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: ModeratorQueueListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModeratorQueueListComponent", function() { return ModeratorQueueListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_queue_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/queue.service */ "./src/app/services/queue.service.ts");



let ModeratorQueueListComponent = class ModeratorQueueListComponent {
    constructor(qs) {
        this.qs = qs;
        this.queues = [];
        this.getQueues();
    }
    getQueues() {
        this.qs.getQueues(this.getCallback, this, this.qs.getModeratorId());
    }
    getCallback(val, instance) {
        console.log("val" + val[0].name);
        instance.queues = val;
    }
    ngOnInit() {
    }
};
ModeratorQueueListComponent.ctorParameters = () => [
    { type: _services_queue_service__WEBPACK_IMPORTED_MODULE_2__["QueueService"] }
];
ModeratorQueueListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-moderator-queue-list',
        template: `
  <div class="input-group">
    <input [(ngModel)]="searchText" class="form-control" />
    <div class="input-group-append">
        <button class="btn btn-primary">Search</button>
    </div>
  </div>
  <div class="container-fluid">
    <app-moderator-queue-item *ngFor="let q of queues | filter : searchText" name="{{q.name}}" queueId="{{q.queueId}}"></app-moderator-queue-item>
  </div>
  `,
        styles: ["\n  .container-fluid {\n    background: rgb(240,240,240);\n    margin: 0.5em auto;\n    padding: 1em;\n  }\n\n  .input-group {\n    margin: 2em 0 0 0;\n  }\n  "]
    })
], ModeratorQueueListComponent);



/***/ }),

/***/ "./src/app/components/moderator/moderator-queue/moderator-queue.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/components/moderator/moderator-queue/moderator-queue.component.ts ***!
  \***********************************************************************************/
/*! exports provided: ModeratorQueueComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModeratorQueueComponent", function() { return ModeratorQueueComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_queue_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/queue.service */ "./src/app/services/queue.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");





let ModeratorQueueComponent = class ModeratorQueueComponent {
    constructor(location, qs, router) {
        this.location = location;
        this.qs = qs;
        this.router = router;
        this.companyId = '';
        this.moderatorId = '';
        this.queueId = '';
        let url = this.router.url.split('/');
        this.queueId = url[url.length - 1];
        this.companyId = url[url.length - 2];
        this.moderatorId = this.qs.moderatorId;
    }
    ngOnInit() {
    }
    submit() {
        let data = {
            companyId: this.companyId,
            queueId: this.queueId
        };
        this.qs.callTicket(data, this.moderatorId).subscribe(res => {
            this.router.navigateByUrl(this.router.url);
        }, err => { console.log(err); }, () => { console.log('Called next ticket.'); });
    }
    closeRegistration() {
        let data = {
            companyId: this.companyId,
            queueId: this.queueId
        };
    }
};
ModeratorQueueComponent.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"] },
    { type: src_app_services_queue_service__WEBPACK_IMPORTED_MODULE_2__["QueueService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
ModeratorQueueComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-moderator-queue',
        template: `
    <form (ngSubmit)="submit()">
        <input type="submit" value="Call Next" class="btn btn-primary btn-lg btn-block" name="call" id="call" />
        <app-end-user-list queueId="{{queueId}}"></app-end-user-list>
        <input type="button" (click)="closeRegistration()" value="Close Registration" class="btn btn-danger btn-lg btn-block" name="close" id="close" />
    </form>
    `
    })
], ModeratorQueueComponent);



/***/ }),

/***/ "./src/app/components/moderator/ticket-details/ticket-details.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/components/moderator/ticket-details/ticket-details.component.ts ***!
  \*********************************************************************************/
/*! exports provided: TicketDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TicketDetailsComponent", function() { return TicketDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_services_queue_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/queue.service */ "./src/app/services/queue.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");






let TicketDetailsComponent = class TicketDetailsComponent {
    constructor(location, fb, qs, router) {
        this.location = location;
        this.fb = fb;
        this.qs = qs;
        this.router = router;
        this.companyId = '';
        this.ticketId = '';
        let url = this.router.url.split('/');
        this.ticketId = url[url.length - 1];
        this.companyId = url[url.length - 4];
        this.createForm();
    }
    ngOnInit() {
    }
    createForm() {
        this.angForm = this.fb.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    }
    submit() {
        let data = {
            companyId: this.companyId,
            ticketId: this.ticketId
        };
        this.qs.closeTicket(data).subscribe(res => {
            this.location.back();
        }, err => { console.log(err); }, () => { console.log(); });
    }
};
TicketDetailsComponent.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: src_app_services_queue_service__WEBPACK_IMPORTED_MODULE_3__["QueueService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
TicketDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-ticket-details',
        template: `
  <div>
    <app-moderator-navbar></app-moderator-navbar>
  </div>
  <form [formGroup]="angForm" (ngSubmit)="submit()" #form>
    <div class="form-group">
        <label for="name">Name</label>
        <input type="text" class="form-control form-control-lg" formControlName="name" id="name" name="name" />
    </div>
    <div class="form-group">
        <label for="name">Email</label>
        <input type="text" class="form-control" formControlName="email" id="email" name="email" />
    </div>
    <div class="form-group">
        <label for="description">Notes</label>
        <input type="text" class="form-control" formControlName="description" id="description" name="description" />
    </div>
    <div hidden>
        <input type="text" class="form-control" id="companyId" name="companyId" value="{{companyId}}" />
        <input type="text" class="form-control" id="ticketId" name="ticketId" value="{{ticketId}}" />
    </div>
    <input type="submit" class="btn btn-primary btn-block btn-lg" [disabled]="angForm.pristine || angForm.invalid" value="Close Ticket" />
  </form>
  `
    })
], TicketDetailsComponent);



/***/ }),

/***/ "./src/app/components/moderator/ticket-item/ticket-item.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/moderator/ticket-item/ticket-item.component.ts ***!
  \***************************************************************************/
/*! exports provided: TicketItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TicketItemComponent", function() { return TicketItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_queue_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/queue.service */ "./src/app/services/queue.service.ts");



let TicketItemComponent = class TicketItemComponent {
    constructor(qs) {
        this.qs = qs;
        this.name = '';
        this.ticketId = '';
        this.queueId = '';
    }
    ngOnInit() {
    }
};
TicketItemComponent.ctorParameters = () => [
    { type: src_app_services_queue_service__WEBPACK_IMPORTED_MODULE_2__["QueueService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], TicketItemComponent.prototype, "name", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], TicketItemComponent.prototype, "ticketId", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], TicketItemComponent.prototype, "queueId", void 0);
TicketItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-ticket-item',
        template: `
  <div class="container-fluid clickable row">
    <h5 class="d-inline col">{{name}}</h5>
    <a href="{{this.qs.baseUri}}/moderator/ticket/get/{{this.qs.companyId}}/{{queueId}}/{{ticketId}}" class="divLink"></a>
  </div>
  `,
        styles: ["\n  .container-fluid {\n    background: rgb(255,255,255);\n    margin: 0.5em;\n    padding: 1em 1.5em;\n  }\n  "]
    })
], TicketItemComponent);



/***/ }),

/***/ "./src/app/components/shared/header/header.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/components/shared/header/header.component.ts ***!
  \**************************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_queue_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/queue.service */ "./src/app/services/queue.service.ts");



let HeaderComponent = class HeaderComponent {
    constructor(qs) {
        this.qs = qs;
        this.company = 'Create Your Own Queue';
        this.companyId = '';
        this.companyId = this.qs.companyId;
        this.getCompany();
    }
    ngOnInit() {
    }
    getCompany() {
        this.qs.getCompany(this.companyId).subscribe(res => this.company = res['response'].name);
    }
};
HeaderComponent.ctorParameters = () => [
    { type: src_app_services_queue_service__WEBPACK_IMPORTED_MODULE_2__["QueueService"] }
];
HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-header',
        template: `
    <div class="container">
      <nav class="navbar navbar-fixed-top">
        <div class="navbar-header">
          <a routerLink=""><h1 class="navbar-brand">{{company}}</h1></a>
        </div>
      </nav>
    </div>
  `
    })
], HeaderComponent);



/***/ }),

/***/ "./src/app/filter.pipe.ts":
/*!********************************!*\
  !*** ./src/app/filter.pipe.ts ***!
  \********************************/
/*! exports provided: FilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterPipe", function() { return FilterPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FilterPipe = class FilterPipe {
    transform(items, searchText) {
        if (!items)
            return [];
        if (!searchText)
            return items;
        searchText = searchText.toLowerCase();
        return items.filter(it => {
            return it.toLowerCase().includes(searchText);
        });
    }
};
FilterPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'filter'
    })
], FilterPipe);



/***/ }),

/***/ "./src/app/modal/modal.component.css":
/*!*******************************************!*\
  !*** ./src/app/modal/modal.component.css ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZGFsL21vZGFsLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/modal/modal.component.ts":
/*!******************************************!*\
  !*** ./src/app/modal/modal.component.ts ***!
  \******************************************/
/*! exports provided: ModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalComponent", function() { return ModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");



let ModalComponent = class ModalComponent {
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    onCloseClick() {
        this.dialogRef.close();
    }
    ngOnInit() {
    }
};
ModalComponent.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] }
];
ModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-modal',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./modal.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modal/modal.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./modal.component.css */ "./src/app/modal/modal.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
], ModalComponent);



/***/ }),

/***/ "./src/app/models/queue.model.ts":
/*!***************************************!*\
  !*** ./src/app/models/queue.model.ts ***!
  \***************************************/
/*! exports provided: Queue, QueueAdapter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Queue", function() { return Queue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QueueAdapter", function() { return QueueAdapter; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


class Queue {
    constructor(name, queueId, description) {
        this.name = name;
        this.queueId = queueId;
        this.description = description;
    }
}
let QueueAdapter = class QueueAdapter {
    adapt(item) {
        return new Queue(item.name, item.queueId, item.description);
    }
};
QueueAdapter = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], QueueAdapter);



/***/ }),

/***/ "./src/app/services/queue.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/queue.service.ts ***!
  \*******************************************/
/*! exports provided: QueueService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QueueService", function() { return QueueService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _models_queue_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/queue.model */ "./src/app/models/queue.model.ts");




let QueueService = class QueueService {
    constructor(http, adapter) {
        this.http = http;
        this.adapter = adapter;
        this.baseUri = 'https://cyoqappbyrj.herokuapp.com';
        this.adminId = 'comp313.2019@gmail.com';
        this.companyId = '496477151';
        this.moderatorId = '126755968333';
    }
    createQueue(data) {
        return this.http.post(`${this.baseUri}/api/admin/${this.adminId}/queue/create`, data);
    }
    createModerator(data) {
        return this.http.post(`${this.baseUri}/api/admin/${this.adminId}/moderator/create`, data);
    }
    createTicket(data) {
        return this.http.post(`${this.baseUri}/api/user/ticket/create`, data);
    }
    getQueueAdmin(companyId, queueId) {
        return this.http.get(`${this.baseUri}/api/admin/${this.adminId}/queue/get/${companyId}/${queueId}`);
    }
    getModerator(moderatorId) {
        return this.http.get(`${this.baseUri}/api/admin/${this.adminId}/moderator/get/${this.companyId}/${moderatorId}`);
    }
    getModerators() {
        return this.http.get(`${this.baseUri}/api/admin/${this.adminId}/moderator/all/${this.companyId}`);
    }
    getModeratorId() {
        return '123';
    }
    getCompany(companyId) {
        return this.http.get(`${this.baseUri}/api/admin/${this.adminId}/company/get/${companyId}`);
    }
    getAllCompany(callback, instance) {
        var responses;
        this.http.get(`${this.baseUri}/api/admin/company/all`).subscribe(data => {
            responses = data;
            console.log(responses.response[0].name);
            callback(responses.response, instance);
        });
    }
    getQueue(callback, instance, queueId) {
        var responses;
        this.http.get(`${this.baseUri}/api/admin/${this.adminId}/queue/get/${this.companyId}/${queueId}`).subscribe(data => {
            responses = data;
            console.log(responses);
            callback(responses.response, instance);
        });
    }
    getQueues(callback, instance, moderatorId) {
        var responses;
        var url = `${this.baseUri}/api/admin/${this.adminId}/queue/all/${this.companyId}`;
        if (moderatorId) {
            url = `${this.baseUri}/api/moderator/${moderatorId}/queue/get/${this.companyId}`;
        }
        this.http.get(url).subscribe(data => {
            responses = data;
            console.log(responses.response[0].name);
            callback(responses.response, instance);
        });
    }
    // getTickets(callback, instance, queueId) {
    //     var responses;
    //     this.http.get(`${this.baseUri}/api/ticket/get/${this.companyId}/${queueId}/all`).subscribe(data => {
    //         responses = data;
    //         console.log(responses.response[0].name);
    //         callback(responses.response, instance);
    //     });
    // }
    getTickets(callback, instance, userId) {
        var responses;
        this.http.get(`${this.baseUri}/api/user/${userId}/queue/get/${this.companyId}`).subscribe(data => {
            responses = data;
            console.log(responses);
            callback(responses.response, instance);
        });
    }
    getTicketPriority(userId, queueId, ticketId, callback) {
        return this.http.get(`${this.baseUri}/api/user/${userId}/ticket/getposition/${this.companyId}/${queueId}/${ticketId}`).subscribe((s) => {
            callback(s.toString());
            console.log(s);
        }, err => { callback(err.toString()); console.log(err); });
    }
    updateQueue(data) {
        return this.http.post(`${this.baseUri}/api/admin/${this.adminId}/queue/update`, data);
    }
    updateCompany(data) {
        return this.http.post(`${this.baseUri}/api/admin/${this.adminId}/company/update`, data);
    }
    updateModerator(data) {
        return this.http.post(`${this.baseUri}/api/admin/${this.adminId}/moderator/update`, data);
    }
    callTicket(data, moderatorId) {
        return this.http.post(`${this.baseUri}/api/moderator/${moderatorId}/ticket/next`, data);
    }
    deleteQueue(data) {
        return this.http.post(`${this.baseUri}/api/admin/${this.adminId}/queue/delete`, data);
    }
    deleteModerator(data) {
        return this.http.post(`${this.baseUri}/api/admin/${this.adminId}/moderator/delete`, data);
    }
    closeTicket(data) {
        return this.http.post(`${this.baseUri}/api/user/${this.adminId}/ticket/delete`, data);
    }
    deleteTicket(ticketId, userId, callback) {
        // console.log("Delete Ticket Called ");
        // console.log(data);
        // return this.http.delete(`${this.baseUri}/api/user/${userId}/ticket/delete`, data).subscribe(data => {
        //     callback();
        // });
        const options = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
            }),
            body: {
                'companyId': this.companyId,
                'ticketId': ticketId
            },
        };
        this.http
            .delete(`${this.baseUri}/api/user/${userId}/ticket/delete`, options)
            .subscribe((s) => {
            console.log(s);
        });
    }
};
QueueService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _models_queue_model__WEBPACK_IMPORTED_MODULE_3__["QueueAdapter"] }
];
QueueService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], QueueService);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Study\Software Development Project-2\Structure_Reworked\CYOQ-CreateYourOwnQueue\angular\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map