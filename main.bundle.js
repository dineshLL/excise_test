webpackJsonp([1],{

/***/ "./src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "./src async recursive";

/***/ }),

/***/ "./src/app/_directives/alert.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_index__ = __webpack_require__("./src/app/_services/index.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlertDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AlertDirective = (function () {
    function AlertDirective(alertService) {
        this.alertService = alertService;
    }
    AlertDirective.prototype.ngOnInit = function () {
        var _this = this;
        this.alertService.getMessage().subscribe(function (message) { _this.message = message; });
    };
    return AlertDirective;
}());
AlertDirective = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'alert',
        template: "<div *ngIf=\"message\" [ngClass]=\"{ 'alert': message, 'alert-success': message.type === 'success', 'alert-danger': message.type === 'error' }\">{{message.text}}</div>"
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_index__["a" /* AlertService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_index__["a" /* AlertService */]) === "function" && _a || Object])
], AlertDirective);

var _a;
//# sourceMappingURL=alert.directive.js.map

/***/ }),

/***/ "./src/app/_directives/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__alert_directive__ = __webpack_require__("./src/app/_directives/alert.directive.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__alert_directive__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./src/app/_guards/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthGuard = (function () {
    function AuthGuard(router) {
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        if (localStorage.getItem('currentUser')) {
            // logged in so return true
            return true;
        }
        // not logged in so redirect to login page with the return url
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
        return false;
    };
    return AuthGuard;
}());
AuthGuard = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object])
], AuthGuard);

var _a;
//# sourceMappingURL=auth.guard.js.map

/***/ }),

/***/ "./src/app/_guards/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__auth_guard__ = __webpack_require__("./src/app/_guards/auth.guard.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__auth_guard__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./src/app/_helpers/fake-backend.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__("./node_modules/@angular/http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http_testing__ = __webpack_require__("./node_modules/@angular/http/@angular/http/testing.es5.js");
/* unused harmony export fakeBackendFactory */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return fakeBackendProvider; });


function fakeBackendFactory(backend, options, realBackend) {
    // array in local storage for registered users
    var users = JSON.parse(localStorage.getItem('users')) || [];
    // configure fake backend
    backend.connections.subscribe(function (connection) {
        // wrap in timeout to simulate server api call
        setTimeout(function () {
            // authenticate
            if (connection.request.url.endsWith('/api/authenticate') && connection.request.method === __WEBPACK_IMPORTED_MODULE_0__angular_http__["e" /* RequestMethod */].Post) {
                // get parameters from post request
                var params_1 = JSON.parse(connection.request.getBody());
                // find if any user matches login credentials
                var filteredUsers = users.filter(function (user) {
                    return user.username === params_1.username && user.password === params_1.password;
                });
                if (filteredUsers.length) {
                    // if login details are valid return 200 OK with user details and fake jwt token
                    var user = filteredUsers[0];
                    connection.mockRespond(new __WEBPACK_IMPORTED_MODULE_0__angular_http__["f" /* Response */](new __WEBPACK_IMPORTED_MODULE_0__angular_http__["g" /* ResponseOptions */]({
                        status: 200,
                        body: {
                            id: user.id,
                            username: user.username,
                            firstName: user.firstName,
                            lastName: user.lastName,
                            token: 'fake-jwt-token'
                        }
                    })));
                }
                else {
                    // else return 400 bad request
                    connection.mockError(new Error('Username or password is incorrect'));
                }
                return;
            }
            // get users
            if (connection.request.url.endsWith('/api/users') && connection.request.method === __WEBPACK_IMPORTED_MODULE_0__angular_http__["e" /* RequestMethod */].Get) {
                // check for fake auth token in header and return users if valid, this security is implemented server side in a real application
                if (connection.request.headers.get('Authorization') === 'Bearer fake-jwt-token') {
                    connection.mockRespond(new __WEBPACK_IMPORTED_MODULE_0__angular_http__["f" /* Response */](new __WEBPACK_IMPORTED_MODULE_0__angular_http__["g" /* ResponseOptions */]({ status: 200, body: users })));
                }
                else {
                    // return 401 not authorised if token is null or invalid
                    connection.mockRespond(new __WEBPACK_IMPORTED_MODULE_0__angular_http__["f" /* Response */](new __WEBPACK_IMPORTED_MODULE_0__angular_http__["g" /* ResponseOptions */]({ status: 401 })));
                }
                return;
            }
            // get user by id
            if (connection.request.url.match(/\/api\/users\/\d+$/) && connection.request.method === __WEBPACK_IMPORTED_MODULE_0__angular_http__["e" /* RequestMethod */].Get) {
                // check for fake auth token in header and return user if valid, this security is implemented server side in a real application
                if (connection.request.headers.get('Authorization') === 'Bearer fake-jwt-token') {
                    // find user by id in users array
                    var urlParts = connection.request.url.split('/');
                    var id_1 = parseInt(urlParts[urlParts.length - 1]);
                    var matchedUsers = users.filter(function (user) { return user.id === id_1; });
                    var user = matchedUsers.length ? matchedUsers[0] : null;
                    // respond 200 OK with user
                    connection.mockRespond(new __WEBPACK_IMPORTED_MODULE_0__angular_http__["f" /* Response */](new __WEBPACK_IMPORTED_MODULE_0__angular_http__["g" /* ResponseOptions */]({ status: 200, body: user })));
                }
                else {
                    // return 401 not authorised if token is null or invalid
                    connection.mockRespond(new __WEBPACK_IMPORTED_MODULE_0__angular_http__["f" /* Response */](new __WEBPACK_IMPORTED_MODULE_0__angular_http__["g" /* ResponseOptions */]({ status: 401 })));
                }
                return;
            }
            // create user
            if (connection.request.url.endsWith('/api/users') && connection.request.method === __WEBPACK_IMPORTED_MODULE_0__angular_http__["e" /* RequestMethod */].Post) {
                // get new user object from post body
                var newUser_1 = JSON.parse(connection.request.getBody());
                // validation
                var duplicateUser = users.filter(function (user) { return user.username === newUser_1.username; }).length;
                if (duplicateUser) {
                    return connection.mockError(new Error('Username "' + newUser_1.username + '" is already taken'));
                }
                // save new user
                newUser_1.id = users.length + 1;
                users.push(newUser_1);
                localStorage.setItem('users', JSON.stringify(users));
                // respond 200 OK
                connection.mockRespond(new __WEBPACK_IMPORTED_MODULE_0__angular_http__["f" /* Response */](new __WEBPACK_IMPORTED_MODULE_0__angular_http__["g" /* ResponseOptions */]({ status: 200 })));
                return;
            }
            // delete user
            if (connection.request.url.match(/\/api\/users\/\d+$/) && connection.request.method === __WEBPACK_IMPORTED_MODULE_0__angular_http__["e" /* RequestMethod */].Delete) {
                // check for fake auth token in header and return user if valid, this security is implemented server side in a real application
                if (connection.request.headers.get('Authorization') === 'Bearer fake-jwt-token') {
                    // find user by id in users array
                    var urlParts = connection.request.url.split('/');
                    var id = parseInt(urlParts[urlParts.length - 1]);
                    for (var i = 0; i < users.length; i++) {
                        var user = users[i];
                        if (user.id === id) {
                            // delete user
                            users.splice(i, 1);
                            localStorage.setItem('users', JSON.stringify(users));
                            break;
                        }
                    }
                    // respond 200 OK
                    connection.mockRespond(new __WEBPACK_IMPORTED_MODULE_0__angular_http__["f" /* Response */](new __WEBPACK_IMPORTED_MODULE_0__angular_http__["g" /* ResponseOptions */]({ status: 200 })));
                }
                else {
                    // return 401 not authorised if token is null or invalid
                    connection.mockRespond(new __WEBPACK_IMPORTED_MODULE_0__angular_http__["f" /* Response */](new __WEBPACK_IMPORTED_MODULE_0__angular_http__["g" /* ResponseOptions */]({ status: 401 })));
                }
                return;
            }
            // pass through any requests not handled above
            var realHttp = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["h" /* Http */](realBackend, options);
            var requestOptions = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["i" /* RequestOptions */]({
                method: connection.request.method,
                headers: connection.request.headers,
                body: connection.request.getBody(),
                url: connection.request.url,
                withCredentials: connection.request.withCredentials,
                responseType: connection.request.responseType
            });
            realHttp.request(connection.request.url, requestOptions)
                .subscribe(function (response) {
                connection.mockRespond(response);
            }, function (error) {
                connection.mockError(error);
            });
        }, 500);
    });
    return new __WEBPACK_IMPORTED_MODULE_0__angular_http__["h" /* Http */](backend, options);
}
;
var fakeBackendProvider = {
    // use fake backend in place of Http service for backend-less development
    provide: __WEBPACK_IMPORTED_MODULE_0__angular_http__["h" /* Http */],
    useFactory: fakeBackendFactory,
    deps: [__WEBPACK_IMPORTED_MODULE_1__angular_http_testing__["a" /* MockBackend */], __WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* BaseRequestOptions */], __WEBPACK_IMPORTED_MODULE_0__angular_http__["j" /* XHRBackend */]]
};
//# sourceMappingURL=fake-backend.js.map

/***/ }),

/***/ "./src/app/_helpers/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__fake_backend__ = __webpack_require__("./src/app/_helpers/fake-backend.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__fake_backend__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./src/app/_models/accused.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var Accused = (function () {
    function Accused() {
    }
    return Accused;
}());
/* harmony default export */ __webpack_exports__["a"] = (Accused);
//# sourceMappingURL=accused.js.map

/***/ }),

/***/ "./src/app/_models/amount.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var Amount = (function () {
    function Amount() {
    }
    return Amount;
}());
/* harmony default export */ __webpack_exports__["a"] = (Amount);
//# sourceMappingURL=amount.js.map

/***/ }),

/***/ "./src/app/_models/cr.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var Cr = (function () {
    function Cr() {
    }
    return Cr;
}());
/* harmony default export */ __webpack_exports__["a"] = (Cr);
//# sourceMappingURL=cr.js.map

/***/ }),

/***/ "./src/app/_models/detectedItem.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__amount__ = __webpack_require__("./src/app/_models/amount.ts");

var DetectedItem = (function () {
    function DetectedItem() {
        this.amount = new __WEBPACK_IMPORTED_MODULE_0__amount__["a" /* default */]();
    }
    return DetectedItem;
}());
/* harmony default export */ __webpack_exports__["a"] = (DetectedItem);
//# sourceMappingURL=detectedItem.js.map

/***/ }),

/***/ "./src/app/_services/alert.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__("./node_modules/rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlertService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AlertService = (function () {
    function AlertService(router) {
        var _this = this;
        this.router = router;
        this.subject = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"]();
        this.keepAfterNavigationChange = false;
        // clear alert message on route change
        router.events.subscribe(function (event) {
            if (event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* NavigationStart */]) {
                if (_this.keepAfterNavigationChange) {
                    // only keep for a single location change
                    _this.keepAfterNavigationChange = false;
                }
                else {
                    // clear alert
                    _this.subject.next();
                }
            }
        });
    }
    AlertService.prototype.success = function (message, keepAfterNavigationChange) {
        if (keepAfterNavigationChange === void 0) { keepAfterNavigationChange = false; }
        this.keepAfterNavigationChange = keepAfterNavigationChange;
        this.subject.next({ type: 'success', text: message });
    };
    AlertService.prototype.error = function (message, keepAfterNavigationChange) {
        if (keepAfterNavigationChange === void 0) { keepAfterNavigationChange = false; }
        this.keepAfterNavigationChange = keepAfterNavigationChange;
        this.subject.next({ type: 'error', text: message });
    };
    AlertService.prototype.getMessage = function () {
        return this.subject.asObservable();
    };
    return AlertService;
}());
AlertService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object])
], AlertService);

var _a;
//# sourceMappingURL=alert.service.js.map

/***/ }),

/***/ "./src/app/_services/authentication.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthenticationService = (function () {
    function AuthenticationService(http) {
        this.http = http;
    }
    AuthenticationService.prototype.login = function (username, password) {
        return this.http.post('/api/authenticate', JSON.stringify({ username: username, password: password }))
            .map(function (response) {
            // login successful if there's a jwt token in the response
            var user = response.json();
            if (user && user.token) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUser', JSON.stringify(user));
            }
        });
    };
    AuthenticationService.prototype.logout = function () {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    };
    return AuthenticationService;
}());
AuthenticationService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["h" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["h" /* Http */]) === "function" && _a || Object])
], AuthenticationService);

var _a;
//# sourceMappingURL=authentication.service.js.map

/***/ }),

/***/ "./src/app/_services/cr.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CrService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Created by Amila on 4/26/2017.
 */



var CrService = (function () {
    function CrService(http) {
        this.http = http;
        this.actionUrl = 'http://sathkara.pensions.gov.lk:8080/excise_be/api';
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["k" /* Headers */]();
        this.headers.append('Content-Type', 'application/json');
        this.headers.append('Accept', 'application/json');
    }
    CrService.prototype.loadOfficersIds = function () {
        return this.http.get(this.actionUrl + '/test').map(function (res) { return res.json(); });
    };
    CrService.prototype.loadOfficerInfo = function (officerId) {
        return this.http.get(this.actionUrl + '/test/' + officerId).map(function (res) { return res.json(); });
    };
    // done
    CrService.prototype.loadItems = function () {
        return this.http.get(this.actionUrl + '/items').map(function (res) { return res.json(); });
    };
    // done
    CrService.prototype.loadSubItems = function (itemCode) {
        return this.http.get(this.actionUrl + '/items/' + itemCode + '/subs').map(function (res) { return res.json(); });
    };
    CrService.prototype.addCr = function (crsObject) {
        console.log('called');
        // return this.http.post(this.actionUrl + , JSON.stringify(crsObject)).map(res => res.status);
        var body = JSON.stringify(crsObject);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["k" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["i" /* RequestOptions */]({ headers: headers });
        return this.http
            .post(this.actionUrl + '/crs', body, options)
            .toPromise()
            .then(function (result) { return result; })
            .catch(this.handleError);
    };
    CrService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    return CrService;
}());
CrService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["h" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["h" /* Http */]) === "function" && _a || Object])
], CrService);

var _a;
//# sourceMappingURL=cr.service.js.map

/***/ }),

/***/ "./src/app/_services/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__alert_service__ = __webpack_require__("./src/app/_services/alert.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__alert_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_service__ = __webpack_require__("./src/app/_services/user.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_1__user_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cr_service__ = __webpack_require__("./src/app/_services/cr.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_2__cr_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__authentication_service__ = __webpack_require__("./src/app/_services/authentication.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_3__authentication_service__["a"]; });




//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./src/app/_services/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/@angular/http.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserService = (function () {
    function UserService(http) {
        this.http = http;
    }
    UserService.prototype.getAll = function () {
        return this.http.get('/api/users', this.jwt()).map(function (response) { return response.json(); });
    };
    UserService.prototype.getById = function (id) {
        return this.http.get('/api/users/' + id, this.jwt()).map(function (response) { return response.json(); });
    };
    UserService.prototype.create = function (user) {
        return this.http.post('/api/users', user, this.jwt()).map(function (response) { return response.json(); });
    };
    UserService.prototype.update = function (user) {
        return this.http.put('/api/users/' + user.id, user, this.jwt()).map(function (response) { return response.json(); });
    };
    UserService.prototype.delete = function (id) {
        return this.http.delete('/api/users/' + id, this.jwt()).map(function (response) { return response.json(); });
    };
    // private helper methods
    UserService.prototype.jwt = function () {
        // create authorization header with jwt token
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.token) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["k" /* Headers */]({ 'Authorization': 'Bearer ' + currentUser.token });
            return new __WEBPACK_IMPORTED_MODULE_1__angular_http__["i" /* RequestOptions */]({ headers: headers });
        }
    };
    return UserService;
}());
UserService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["h" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["h" /* Http */]) === "function" && _a || Object])
], UserService);

var _a;
//# sourceMappingURL=user.service.js.map

/***/ }),

/***/ "./src/app/accused/accused.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/accused/accused.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-default\">\r\n  <div class=\"panel-heading clearfix\">\r\n    <h3 class=\"panel-title pull-left\">Accused information</h3>\r\n  </div>\r\n  <div class=\"panel-body  col-md-5\">\r\n    <div class=\"form-group\">\r\n      <label for=\"exampleSelect1\">Gender</label>\r\n      <select class=\"form-control\" id=\"exampleSelect1\" [(ngModel)]=\"modal.gender\" name=\"gender\">\r\n        <option>Male</option>\r\n        <option>Female</option>\r\n      </select>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label>Cort date</label>\r\n      <input type=\"date\" class=\"form-control\"  placeholder=\"Cort date\" [(ngModel)]=\"modal.coartDate\" name=\"cortDate\">\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"exampleSelect1\">Status</label>\r\n      <select class=\"form-control\" [(ngModel)]=\"status\" name=\"status\">\r\n        <option>Pending</option>\r\n        <option>Warrnet</option>\r\n        <option>Trial</option>\r\n      </select>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label>Fine</label>\r\n      <input type=\"number\" class=\"form-control\"  placeholder=\"Enter Fine\" [(ngModel)]=\"modal.fine\" name=\"fine\">\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label >Trial Date</label>\r\n      <input type=\"date\" class=\"form-control\" placeholder=\"Enter trial date\" [(ngModel)]=\"trialDate\" name=\"trialDate\">\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/accused/accused.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_accused__ = __webpack_require__("./src/app/_models/accused.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccusedComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Created by Amila on 4/26/2017.
 */


var AccusedComponent = (function () {
    function AccusedComponent() {
        this.modal = new __WEBPACK_IMPORTED_MODULE_1__models_accused__["a" /* default */]();
        this.status = null;
        this.trialDate = null;
    }
    return AccusedComponent;
}());
AccusedComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-accused',
        template: __webpack_require__("./src/app/accused/accused.component.html"),
        styles: [__webpack_require__("./src/app/accused/accused.component.css")]
    }),
    __metadata("design:paramtypes", [])
], AccusedComponent);

//# sourceMappingURL=accused.component.js.map

/***/ }),

/***/ "./src/app/accused/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__accused_component__ = __webpack_require__("./src/app/accused/accused.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__accused_component__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- main app container -->\n<div class=\"jumbotron\">\n    <div class=\"container\">\n        <div class=\"col-sm-8 col-sm-offset-2\">\n            <alert></alert>\n            <router-outlet></router-outlet>\n        </div>\n    </div>\n\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("./src/app/app.component.html"),
        styles: [__webpack_require__("./src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("./node_modules/@angular/http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__guards__ = __webpack_require__("./src/app/_guards/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_routing__ = __webpack_require__("./src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__login_login_component__ = __webpack_require__("./src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__directives__ = __webpack_require__("./src/app/_directives/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services__ = __webpack_require__("./src/app/_services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__helpers__ = __webpack_require__("./src/app/_helpers/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_http_testing__ = __webpack_require__("./node_modules/@angular/http/@angular/http/testing.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__home_home_component__ = __webpack_require__("./src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__register_register_component__ = __webpack_require__("./src/app/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__menu_menu_component__ = __webpack_require__("./src/app/menu/menu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__cr_cr_component__ = __webpack_require__("./src/app/cr/cr.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__accused_accused_component__ = __webpack_require__("./src/app/accused/accused.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__informant_informant_component__ = __webpack_require__("./src/app/informant/informant.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__item_item_component__ = __webpack_require__("./src/app/item/item.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__officer_officer_component__ = __webpack_require__("./src/app/officer/officer.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









// services

// used to create fake backend











var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_7__login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_8__directives__["a" /* AlertDirective */],
            __WEBPACK_IMPORTED_MODULE_12__home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_13__register_register_component__["a" /* RegisterComponent */],
            __WEBPACK_IMPORTED_MODULE_14__menu_menu_component__["a" /* MenuComponent */],
            __WEBPACK_IMPORTED_MODULE_15__cr_cr_component__["a" /* CrComponent */],
            __WEBPACK_IMPORTED_MODULE_16__accused_accused_component__["a" /* AccusedComponent */],
            __WEBPACK_IMPORTED_MODULE_17__informant_informant_component__["a" /* InformantComponent */],
            __WEBPACK_IMPORTED_MODULE_18__item_item_component__["a" /* ItemComponent */],
            __WEBPACK_IMPORTED_MODULE_19__officer_officer_component__["a" /* OfficerComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_5__app_routing__["a" /* routing */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_4__guards__["a" /* AuthGuard */],
            __WEBPACK_IMPORTED_MODULE_9__services__["a" /* AlertService */],
            __WEBPACK_IMPORTED_MODULE_9__services__["b" /* AuthenticationService */],
            __WEBPACK_IMPORTED_MODULE_9__services__["c" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_9__services__["d" /* CrService */],
            __WEBPACK_IMPORTED_MODULE_10__helpers__["a" /* fakeBackendProvider */],
            __WEBPACK_IMPORTED_MODULE_11__angular_http_testing__["a" /* MockBackend */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* BaseRequestOptions */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "./src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__guards_index__ = __webpack_require__("./src/app/_guards/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login_component__ = __webpack_require__("./src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home_component__ = __webpack_require__("./src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__register_register_component__ = __webpack_require__("./src/app/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__cr_cr_component__ = __webpack_require__("./src/app/cr/cr.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });






var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_3__home_home_component__["a" /* HomeComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_1__guards_index__["a" /* AuthGuard */]] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_2__login_login_component__["a" /* LoginComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_4__register_register_component__["a" /* RegisterComponent */] },
    { path: 'cr', component: __WEBPACK_IMPORTED_MODULE_5__cr_cr_component__["a" /* CrComponent */] },
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* RouterModule */].forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map

/***/ }),

/***/ "./src/app/cr/cr.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/cr/cr.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-default\">\r\n  <div class=\"panel-heading clearfix\">\r\n    <h3 class=\"panel-title pull-left\">CR Information</h3>\r\n  </div>\r\n  <div class=\"panel-body\">\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-6\">\r\n        <div class=\"form-group\">\r\n          <label>Detection date</label>\r\n          <input type=\"date\" class=\"form-control\"  placeholder=\"Detected date\" [(ngModel)]=\"detectionDate\" name=\"detectionDate\">\r\n        </div>\r\n        <app-item></app-item>\r\n      </div>\r\n      <div class=\"col-sm-6\">\r\n        <app-officer></app-officer>\r\n        <app-informant></app-informant>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <app-accused></app-accused>\r\n    </div>\r\n    <div class=\"panel-footer\">\r\n      <a class=\"btn btn-primary pull-right\" (click)=\"addCrs()\">\r\n        Save\r\n      </a>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/cr/cr.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__officer__ = __webpack_require__("./src/app/officer/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__informant__ = __webpack_require__("./src/app/informant/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__item__ = __webpack_require__("./src/app/item/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__accused__ = __webpack_require__("./src/app/accused/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services__ = __webpack_require__("./src/app/_services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__models_cr__ = __webpack_require__("./src/app/_models/cr.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__models_detectedItem__ = __webpack_require__("./src/app/_models/detectedItem.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__models_accused__ = __webpack_require__("./src/app/_models/accused.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_toPromise__ = __webpack_require__("./node_modules/rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_toPromise__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CrComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Created by Amila on 4/26/2017.
 */










var CrComponent = (function () {
    function CrComponent(service) {
        this.service = service;
    }
    CrComponent.prototype.addCrs = function () {
        var _this = this;
        this.cr = new __WEBPACK_IMPORTED_MODULE_6__models_cr__["a" /* default */]();
        this.cr.detectedDate = this.detectionDate;
        this.cr.detectionOfficer = this.Officer.selectedOfficer;
        this.cr.informant = this.Informant.selectedOfficer;
        this.cr.state = this.Accused.status;
        this.cr.detectedItem = this.Item.modal;
        this.cr.accused = this.Accused.modal;
        this.service.addCr(this.cr)
            .then(function (result) {
            _this.Officer.selectedOfficer = null;
            _this.Informant.selectedOfficer = null;
            _this.Accused.status = null;
            _this.Item.modal = new __WEBPACK_IMPORTED_MODULE_7__models_detectedItem__["a" /* default */]();
            _this.Accused.modal = new __WEBPACK_IMPORTED_MODULE_8__models_accused__["a" /* default */]();
            _this.cr = new __WEBPACK_IMPORTED_MODULE_6__models_cr__["a" /* default */]();
            alert('saved');
        })
            .catch(function (err) { return console.log(err); });
    };
    return CrComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1__officer__["a" /* OfficerComponent */]),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__officer__["a" /* OfficerComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__officer__["a" /* OfficerComponent */]) === "function" && _a || Object)
], CrComponent.prototype, "Officer", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_2__informant__["a" /* InformantComponent */]),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__informant__["a" /* InformantComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__informant__["a" /* InformantComponent */]) === "function" && _b || Object)
], CrComponent.prototype, "Informant", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_3__item__["a" /* ItemComponent */]),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__item__["a" /* ItemComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__item__["a" /* ItemComponent */]) === "function" && _c || Object)
], CrComponent.prototype, "Item", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_4__accused__["a" /* AccusedComponent */]),
    __metadata("design:type", typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__accused__["a" /* AccusedComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__accused__["a" /* AccusedComponent */]) === "function" && _d || Object)
], CrComponent.prototype, "Accused", void 0);
CrComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-cr',
        template: __webpack_require__("./src/app/cr/cr.component.html"),
        styles: [__webpack_require__("./src/app/cr/cr.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__services__["d" /* CrService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services__["d" /* CrService */]) === "function" && _e || Object])
], CrComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=cr.component.js.map

/***/ }),

/***/ "./src/app/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  HOME\n  <app-menu></app-menu>\n</p>\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-home',
        template: __webpack_require__("./src/app/home/home.component.html"),
        styles: [__webpack_require__("./src/app/home/home.component.css")]
    }),
    __metadata("design:paramtypes", [])
], HomeComponent);

//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "./src/app/informant/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__informant_component__ = __webpack_require__("./src/app/informant/informant.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__informant_component__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./src/app/informant/informant.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/informant/informant.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-default\">\r\n  <div class=\"panel-heading clearfix\">\r\n    <h3 class=\"panel-title pull-left\">Officer Informant</h3>\r\n  </div>\r\n  <div class=\"panel-body\">\r\n    <div class=\"form-group\">\r\n      <label>Informant Officer</label>\r\n      <select class=\"form-control\" name=\"officerId\" [(ngModel)]=\"selectedOfficer\" name=\"selectedOfficer\" (ngModelChange)=\"loadInfo($event)\">\r\n        <option disabled selected value> -- select officeer -- </option>\r\n        <option *ngFor=\"let officer of officers\">{{officer.officerId}}</option>\r\n      </select>\r\n    </div>\r\n    <div class=\"form-group\" *ngIf=\"selectedOfficerInfo\">\r\n      <label>Officer name</label>\r\n      <span class=\"label label-primary\">{{selectedOfficerInfo.name}}</span>\r\n    </div>\r\n    <div class=\"form-group\" *ngIf=\"selectedOfficerInfo\">\r\n      <label>Designation</label>\r\n      <span class=\"label label-success\">{{selectedOfficerInfo.designation}}</span>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/informant/informant.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services__ = __webpack_require__("./src/app/_services/index.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InformantComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Created by Amila on 4/26/2017.
 */


var InformantComponent = (function () {
    function InformantComponent(service) {
        this.service = service;
        this.officers = null;
        this.selectedOfficerInfo = null;
    }
    InformantComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.loadOfficersIds()
            .subscribe(function (data) {
            _this.officers = data.data;
        });
        this.selectedOfficer = null;
    };
    InformantComponent.prototype.loadInfo = function (value) {
        var _this = this;
        this.service.loadOfficerInfo(value)
            .subscribe(function (data) {
            if (data) {
                _this.selectedOfficerInfo = {
                    name: data.username,
                    designation: data.designation
                };
            }
        });
    };
    return InformantComponent;
}());
InformantComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-informant',
        template: __webpack_require__("./src/app/informant/informant.component.html"),
        styles: [__webpack_require__("./src/app/informant/informant.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services__["d" /* CrService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services__["d" /* CrService */]) === "function" && _a || Object])
], InformantComponent);

var _a;
//# sourceMappingURL=informant.component.js.map

/***/ }),

/***/ "./src/app/item/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__item_component__ = __webpack_require__("./src/app/item/item.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__item_component__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./src/app/item/item.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/item/item.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-default\">\r\n  <div class=\"panel-heading clearfix\">\r\n    <h3 class=\"panel-title pull-left\">Item Informations</h3>\r\n  </div>\r\n  <div class=\"panel-body\">\r\n    <div class=\"form-group\">\r\n      <label>Item</label>\r\n      <select class=\"form-control\" name=\"item\" [(ngModel)]=\"modal.itemCode\" (ngModelChange)=\"loadSubInfo($event)\">\r\n        <option *ngFor=\"let item of itemList\" value=\"{{item.itemCode}}\">{{item.itemCode}}</option>\r\n      </select>\r\n    </div>\r\n    <div class=\"form-group\" *ngIf=\"subItems\">\r\n      <label>Sub Item</label>\r\n      <select class=\"form-control\" [(ngModel)]=\"modal.subItemCode\" (ngModelChange)=\"selectUnit($event)\">\r\n        <option disabled >Select item</option>\r\n        <option *ngFor=\"let item of subItems\" value=\"{{item.subItemCode}}\">{{item.subItemCode}}</option>\r\n      </select>\r\n    </div>\r\n    <div class=\"form-group\" *ngIf=\"modal.subItemCode\">\r\n      <label>Qty</label>\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-8\">\r\n          <input type=\"text\" class=\"form-control\" id=\"exampleInputEmail1\" aria-describedby=\"emailHelp\" placeholder=\"Enter quantity\" [(ngModel)]=\"modal.amount.amount\">\r\n        </div>\r\n        <div class=\"col-sm-4 pull-left\">\r\n          <span class=\"label label-success\">{{modal.amount.unit}}</span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/item/item.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services__ = __webpack_require__("./src/app/_services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_detectedItem__ = __webpack_require__("./src/app/_models/detectedItem.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Created by Amila on 4/26/2017.
 */



var ItemComponent = (function () {
    function ItemComponent(service) {
        this.service = service;
        this.modal = new __WEBPACK_IMPORTED_MODULE_2__models_detectedItem__["a" /* default */]();
        this.itemList = null;
        this.subItems = null;
        this.subItemUnit = null;
    }
    ItemComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.loadItems()
            .subscribe(function (data) {
            if (data.length !== 0) {
                _this.itemList = data.data;
            }
        });
    };
    ItemComponent.prototype.loadSubInfo = function (value) {
        var _this = this;
        this.service.loadSubItems(value)
            .subscribe(function (data) {
            if (data.length !== 0) {
                _this.subItems = data.data;
            }
        });
    };
    ItemComponent.prototype.selectUnit = function (value) {
        console.log(value);
        var scope = this;
        this.subItems.forEach(function (item) {
            if (item.subItemCode === value) {
                scope.modal.amount.unit = item.unit;
            }
        });
    };
    return ItemComponent;
}());
ItemComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-item',
        template: __webpack_require__("./src/app/item/item.component.html"),
        styles: [__webpack_require__("./src/app/item/item.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services__["d" /* CrService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services__["d" /* CrService */]) === "function" && _a || Object])
], ItemComponent);

var _a;
//# sourceMappingURL=item.component.js.map

/***/ }),

/***/ "./src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-6 col-md-offset-3\">\n    <h2>Login</h2>\n    <form name=\"form\" (ngSubmit)=\"f.form.valid && login()\" #f=\"ngForm\" novalidate>\n        <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !username.valid }\">\n            <label for=\"username\">Username</label>\n            <input type=\"text\" class=\"form-control\" name=\"username\" [(ngModel)]=\"model.username\" #username=\"ngModel\" required />\n            <div *ngIf=\"f.submitted && !username.valid\" class=\"help-block\">Username is required</div>\n        </div>\n        <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !password.valid }\">\n            <label for=\"password\">Password</label>\n            <input type=\"password\" class=\"form-control\" name=\"password\" [(ngModel)]=\"model.password\" #password=\"ngModel\" required />\n            <div *ngIf=\"f.submitted && !password.valid\" class=\"help-block\">Password is required</div>\n        </div>\n        <div class=\"form-group\">\n            <button [disabled]=\"loading\" class=\"btn btn-primary\">Login</button>\n            <img *ngIf=\"loading\" src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\" />\n            <a [routerLink]=\"['/register']\" class=\"btn btn-link\">Register</a>\n        </div>\n    </form>\n</div>\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_index__ = __webpack_require__("./src/app/_services/index.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = (function () {
    function LoginComponent(route, router, authenticationService, alertService) {
        this.route = route;
        this.router = router;
        this.authenticationService = authenticationService;
        this.alertService = alertService;
        this.model = {};
        this.loading = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
        // reset login status
        this.authenticationService.logout();
        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.loading = true;
        this.authenticationService.login(this.model.username, this.model.password)
            .subscribe(function (data) {
            _this.router.navigate([_this.returnUrl]);
        }, function (error) {
            _this.alertService.error(error);
            _this.loading = false;
        });
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        template: __webpack_require__("./src/app/login/login.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_index__["b" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_index__["b" /* AuthenticationService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__services_index__["a" /* AlertService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_index__["a" /* AlertService */]) === "function" && _d || Object])
], LoginComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "./src/app/menu/menu.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".white-background {\r\n\tbackground-color: rgb(255, 255, 255);\r\n\tcolor: rgb(51, 51, 51);\r\n\tpadding-top: 10px;\r\n\tborder-radius: 4px;\r\n}\r\n.title {\r\n\tfont-size: 3em;\r\n\tfont-weight: 700;\r\n\ttext-shadow: 0px 0px 5px rgb(51, 51, 51);\r\n\ttext-shadow: 0px 0px 5px rgba(51, 51, 51, 0.8);\r\n\ttext-align: center;\r\n}\r\n#fullscreen {\r\n    position: fixed;\r\n    top: 10px;\r\n    right: 10px;\r\n}\r\n/* END OF DEMO CSS */\r\n\r\n    .animate {\r\n\t\ttransition: all 0.3s ease-in-out;\r\n\t}\r\n\r\n\t.navbar-fixed-left {\r\n\t\tposition: fixed;\r\n\t\ttop: 0px;\r\n\t\tleft: 0px;\r\n\t\tborder-radius: 0px;\r\n\t}\r\n\r\n\t.navbar-minimal {\r\n\t\twidth: 60px;\t\t\r\n\t\tmin-height: 60px;\r\n\t\tmax-height: 100%;\r\n\t\tbackground-color: rgb(51, 51, 51);\r\n\t\tbackground-color: rgba(51, 51, 51, 0.8);\r\n\t\tborder-width: 0px;\r\n\t\tz-index: 1000;\r\n\t}\r\n\r\n\t.navbar-minimal > .navbar-toggler {\r\n\t\tposition: relative;\r\n\t\tmin-height: 60px;\r\n\t\tborder-bottom: 1px solid rgb(81, 81, 81);\r\n\t\tz-index: 100;\r\n\t\tcursor: pointer;\r\n\t}\r\n\r\n\t.navbar-minimal.open > .navbar-toggler,\r\n\t.navbar-minimal > .navbar-toggler:hover {\r\n\t\tbackground-color: rgb(158, 202, 59);\r\n\t}\r\n\r\n\t.navbar-minimal > .navbar-toggler > span {\r\n\t\tposition: absolute;\r\n\t\ttop: 50%;\r\n\t\tright: 50%;\r\n\t\tmargin: -8px -8px 0 0;\r\n\t\twidth: 16px;\r\n\t\theight: 16px;\r\n\t\tbackground-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE2LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHdpZHRoPSIxNnB4IiBoZWlnaHQ9IjMycHgiIHZpZXdCb3g9IjAgMCAxNiAzMiIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMTYgMzIiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZmlsbD0iI0ZGRkZGRiIgZD0iTTEsN2gxNGMwLjU1MiwwLDEsMC40NDgsMSwxcy0wLjQ0OCwxLTEsMUgxQzAuNDQ4LDksMCw4LjU1MiwwLDgKCVMwLjQ0OCw3LDEsN3oiLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGZpbGw9IiNGRkZGRkYiIGQ9Ik0xLDEyaDE0YzAuNTUyLDAsMSwwLjQ0OCwxLDFzLTAuNDQ4LDEtMSwxSDFjLTAuNTUyLDAtMS0wLjQ0OC0xLTEKCVMwLjQ0OCwxMiwxLDEyeiIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZmlsbD0iI0ZGRkZGRiIgZD0iTTEsMmgxNGMwLjU1MiwwLDEsMC40NDgsMSwxcy0wLjQ0OCwxLTEsMUgxQzAuNDQ4LDQsMCwzLjU1MiwwLDMKCVMwLjQ0OCwyLDEsMnoiLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGZpbGw9IiNGRkZGRkYiIGQ9Ik0xLjMzLDI4Ljk3bDExLjY0LTExLjY0YzAuNDU5LTAuNDU5LDEuMjA0LTAuNDU5LDEuNjYzLDAKCWMwLjQ1OSwwLjQ1OSwwLjQ1OSwxLjIwNCwwLDEuNjYzTDIuOTkzLDMwLjYzM2MtMC40NTksMC40NTktMS4yMDQsMC40NTktMS42NjMsMEMwLjg3MSwzMC4xNzQsMC44NzEsMjkuNDMsMS4zMywyOC45N3oiLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGZpbGw9IiNGRkZGRkYiIGQ9Ik0yLjk5MywxNy4zM2wxMS42NDEsMTEuNjRjMC40NTksMC40NTksMC40NTksMS4yMDQsMCwxLjY2MwoJcy0xLjIwNCwwLjQ1OS0xLjY2MywwTDEuMzMsMTguOTkzYy0wLjQ1OS0wLjQ1OS0wLjQ1OS0xLjIwNCwwLTEuNjYzQzEuNzg5LDE2Ljg3MSwyLjUzNCwxNi44NzEsMi45OTMsMTcuMzN6Ii8+Cjwvc3ZnPgo=);\r\n\t\tbackground-repeat: no-repeat;\r\n\t\tbackground-position: 0 0;\r\n\t\ttransition: -webkit-transform .3s ease-out 0s;\r\n\t\ttransition: transform .3s ease-out 0s;\r\n\t\ttransition: transform .3s ease-out 0s, -webkit-transform .3s ease-out 0s;\r\n\t\t-webkit-transform: rotate(0deg);\r\n\t\ttransform: rotate(0deg);\r\n\t}\r\n\r\n\t.navbar-minimal > .navbar-menu {\r\n\t\tposition: absolute;\r\n\t\ttop: -1000px;\r\n\t\tleft: 0px;\r\n\t\tmargin: 0px;\r\n\t\tpadding: 0px;\r\n\t\tlist-style: none;\r\n\t\tz-index: 50;\r\n\t\tbackground-color: rgb(51, 51, 51);\r\n\t\tbackground-color: rgba(51, 51, 51, 0.8);\r\n\t}\r\n\t.navbar-minimal > .navbar-menu > li {\r\n\t\tmargin: 0px;\r\n\t\tpadding: 0px;\r\n\t\tborder-width: 0px;\r\n\t\theight: 54px;\r\n\t}\r\n\t.navbar-minimal > .navbar-menu > li > a {\r\n\t\tposition: relative;\r\n\t\tdisplay: inline-block;\r\n\t\tcolor: rgb(255, 255, 255);\r\n\t\tpadding: 20px 23px;\r\n\t\ttext-align: left;\r\n\t\tcursor: pointer;\r\n\t\tborder-bottom: 1px solid rgb(81, 81, 81);\r\n\t\twidth: 100%;\r\n\t\ttext-decoration: none;\r\n\t\tmargin: 0px;\r\n\t}\r\n\r\n\t.navbar-minimal > .navbar-menu > li > a:last-child {\r\n\t\tborder-bottom-width: 0px;\r\n\t}\r\n\t.navbar-minimal > .navbar-menu > li > a:hover {\r\n\t\tbackground-color: rgb(158, 202, 59);\r\n\t}\r\n\t.navbar-minimal > .navbar-menu > li > a > .glyphicon {\r\n\t\tfloat: right;\r\n\t}\r\n\r\n\t.navbar-minimal.open {\r\n\t\twidth: 320px;\r\n\t}\r\n\r\n\t.navbar-minimal.open > .navbar-toggler > span {\r\n\t\tbackground-position: 0 -16px;\r\n\t\t-webkit-transform: rotate(-180deg);\r\n\t\ttransform: rotate(-180deg);\r\n\t}\r\n\r\n\t.navbar-minimal.open > .navbar-menu {\r\n\t\ttop: 60px;\r\n\t\twidth: 100%;\r\n\t\tmin-height: 100%;\r\n\t}\r\n\r\n\t@media (min-width: 768px) {\r\n\t\t.navbar-minimal.open {\r\n\t\t\twidth: 60px;\r\n\t\t}\r\n\t\t.navbar-minimal.open > .navbar-menu {\r\n\t\t\toverflow: visible;\r\n\t\t}\r\n\t\t.navbar-minimal > .navbar-menu > li > a > .desc {\r\n\t\t\tposition: absolute;\r\n\t\t\tdisplay: inline-block;\r\n\t\t\ttop: 50%;\r\n\t\t\tleft: 130px;\r\n\t\t\tmargin-top: -20px;\r\n\t\t\tmargin-left: 20px;\r\n\t\t\ttext-align: left;\r\n\t\t\twhite-space: nowrap;\r\n\t\t\tpadding: 10px 13px;\r\n\t\t\tborder-width: 0px !important;\r\n\t\t\tbackground-color: rgb(51, 51, 51);\r\n\t\t\tbackground-color: rgba(51, 51, 51, 0.8);\r\n\t\t\topacity: 0;\r\n\t\t}\r\n\t\t.navbar-minimal > .navbar-menu > li > a > .desc:after {\r\n\t\t\tz-index: -1;\r\n\t\t\tposition: absolute;\r\n\t\t\ttop: 50%;\r\n\t\t\tleft: -10px;\r\n\t\t\tmargin-top: -10px;\r\n\t\t\tcontent:'';\r\n\t\t\twidth: 0;\r\n\t\t\theight: 0;\r\n\t\t\tborder-top: 10px solid transparent;\r\n\t\t\tborder-bottom: 10px solid transparent; \t\r\n\t\t\tborder-right: 10px solid rgb(51, 51, 51);\r\n\t\t\tborder-right-color: rgba(51, 51, 51, 0.8);\r\n\t\t}\r\n\t\t.navbar-minimal > .navbar-menu > li > a:hover > .desc {\r\n\t\t\tleft: 60px;\r\n\t\t\topacity: 1;\r\n\t\t}\r\n\t}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/menu/menu.component.html":
/***/ (function(module, exports) {

module.exports = "<nav (click)=\"toggleMenu()\" [ngClass]=\"{'navbar navbar-fixed-left navbar-minimal animate': true, 'open': isMenuOpen}\" role=\"navigation\">\n  <div class=\"navbar-toggler animate\">\n    <span class=\"menu-icon\"></span>\n  </div>\n  <ul class=\"navbar-menu animate\">\n    <li (click)=\"goToCr()\">\n      <a class=\"animate\">\n\t\t\t\t\t<span class=\"desc animate\"> CREATE CR </span>\n\t\t\t\t\t<span class=\"glyphicon glyphicon-user\"></span>\n\t\t\t\t</a>\n    </li>\n    <li>\n      <a href=\"#blog\" class=\"animate\">\n\t\t\t\t\t<span class=\"desc animate\"> FIND CR </span>\n\t\t\t\t\t<span class=\"glyphicon glyphicon-info-sign\"></span>\n\t\t\t\t</a>\n    </li>\n    <li>\n      <a href=\"#contact-us\" class=\"animate\">\n\t\t\t\t\t<span class=\"desc animate\"> OTHER </span>\n\t\t\t\t\t<span class=\"glyphicon glyphicon-comment\"></span>\n\t\t\t\t</a>\n    </li>\n  </ul>\n</nav>"

/***/ }),

/***/ "./src/app/menu/menu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MenuComponent = (function () {
    function MenuComponent(router) {
        this.router = router;
        this.isMenuOpen = false;
    }
    MenuComponent.prototype.ngOnInit = function () {
    };
    MenuComponent.prototype.toggleMenu = function () {
        this.isMenuOpen = !this.isMenuOpen;
    };
    MenuComponent.prototype.goToCr = function () {
        this.router.navigate(['/cr'], {});
    };
    return MenuComponent;
}());
MenuComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-menu',
        template: __webpack_require__("./src/app/menu/menu.component.html"),
        styles: [__webpack_require__("./src/app/menu/menu.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object])
], MenuComponent);

var _a;
//# sourceMappingURL=menu.component.js.map

/***/ }),

/***/ "./src/app/officer/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__officer_component__ = __webpack_require__("./src/app/officer/officer.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__officer_component__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./src/app/officer/officer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/officer/officer.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-default\">\r\n  <div class=\"panel-heading clearfix\">\r\n    <h3 class=\"panel-title pull-left\">Officer Detection</h3>\r\n  </div>\r\n  <div class=\"panel-body\">\r\n    <div class=\"form-group\">\r\n      <label>Detecction Officer</label>\r\n      <select class=\"form-control\" name=\"officerId\" [(ngModel)]=\"selectedOfficer\" name=\"selectedOfficer\" (ngModelChange)=\"loadInfo($event)\">\r\n        <option selected disabled >Select officer</option>\r\n        <option *ngFor=\"let officer of officers\">{{officer.officerId}}</option>\r\n      </select>\r\n    </div>\r\n    <div class=\"form-group\" *ngIf=\"selectedOfficerInfo\">\r\n      <label>Officer name</label>\r\n      <span class=\"label label-primary\">{{selectedOfficerInfo.name}}</span>\r\n    </div>\r\n    <div class=\"form-group\" *ngIf=\"selectedOfficerInfo\">\r\n      <label>Designation</label>\r\n      <span class=\"label label-success\">{{selectedOfficerInfo.designation}}</span>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/officer/officer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services__ = __webpack_require__("./src/app/_services/index.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OfficerComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Created by Amila on 4/26/2017.
 */


var OfficerComponent = (function () {
    function OfficerComponent(service) {
        this.service = service;
        this.officers = null;
        this.selectedOfficerInfo = null;
    }
    OfficerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.loadOfficersIds()
            .subscribe(function (data) {
            _this.officers = data.data;
        });
    };
    OfficerComponent.prototype.loadInfo = function (value) {
        var _this = this;
        this.service.loadOfficerInfo(value)
            .subscribe(function (data) {
            if (data) {
                _this.selectedOfficerInfo = {
                    name: data.username,
                    designation: data.designation
                };
            }
        });
    };
    return OfficerComponent;
}());
OfficerComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-officer',
        template: __webpack_require__("./src/app/officer/officer.component.html"),
        styles: [__webpack_require__("./src/app/officer/officer.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services__["d" /* CrService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services__["d" /* CrService */]) === "function" && _a || Object])
], OfficerComponent);

var _a;
//# sourceMappingURL=officer.component.js.map

/***/ }),

/***/ "./src/app/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-6 col-md-offset-3\">\n    <h2>Register</h2>\n    <form name=\"form\" (ngSubmit)=\"f.form.valid && register()\" #f=\"ngForm\" novalidate>\n        <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !username.valid }\">\n            <label for=\"firstName\">First Name</label>\n            <input type=\"text\" class=\"form-control\" name=\"firstName\" [(ngModel)]=\"model.firstName\" #firstName=\"ngModel\" required />\n            <div *ngIf=\"f.submitted && !firstName.valid\" class=\"help-block\">First Name is required</div>\n        </div>\n        <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !username.valid }\">\n            <label for=\"lastName\">Last Name</label>\n            <input type=\"text\" class=\"form-control\" name=\"lastName\" [(ngModel)]=\"model.lastName\" #lastName=\"ngModel\" required />\n            <div *ngIf=\"f.submitted && !lastName.valid\" class=\"help-block\">Last Name is required</div>\n        </div>\n        <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !username.valid }\">\n            <label for=\"username\">Username</label>\n            <input type=\"text\" class=\"form-control\" name=\"username\" [(ngModel)]=\"model.username\" #username=\"ngModel\" required />\n            <div *ngIf=\"f.submitted && !username.valid\" class=\"help-block\">Username is required</div>\n        </div>\n        <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !password.valid }\">\n            <label for=\"password\">Password</label>\n            <input type=\"password\" class=\"form-control\" name=\"password\" [(ngModel)]=\"model.password\" #password=\"ngModel\" required />\n            <div *ngIf=\"f.submitted && !password.valid\" class=\"help-block\">Password is required</div>\n        </div>\n        <div class=\"form-group\">\n            <button [disabled]=\"loading\" class=\"btn btn-primary\">Register</button>\n            <img *ngIf=\"loading\" src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\" />\n            <a [routerLink]=\"['/login']\" class=\"btn btn-link\">Cancel</a>\n        </div>\n    </form>\n</div>\n"

/***/ }),

/***/ "./src/app/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_index__ = __webpack_require__("./src/app/_services/index.ts");
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
    function RegisterComponent(router, userService, alertService) {
        this.router = router;
        this.userService = userService;
        this.alertService = alertService;
        this.model = {};
        this.loading = false;
    }
    RegisterComponent.prototype.register = function () {
        var _this = this;
        this.loading = true;
        this.userService.create(this.model)
            .subscribe(function (data) {
            _this.alertService.success('Registration successful', true);
            _this.router.navigate(['/login']);
        }, function (error) {
            _this.alertService.error(error);
            _this.loading = false;
        });
    };
    return RegisterComponent;
}());
RegisterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        template: __webpack_require__("./src/app/register/register.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_index__["c" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_index__["c" /* UserService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_index__["a" /* AlertService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_index__["a" /* AlertService */]) === "function" && _c || Object])
], RegisterComponent);

var _a, _b, _c;
//# sourceMappingURL=register.component.js.map

/***/ }),

/***/ "./src/environments/environment.ts":
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

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map