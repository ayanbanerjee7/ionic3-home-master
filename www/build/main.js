webpackJsonp([10],{

/***/ 110:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 110;

/***/ }),

/***/ 151:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/allphotos/allphotos.module": [
		272,
		9
	],
	"../pages/basicinfo/basicinfo.module": [
		273,
		8
	],
	"../pages/gallery/gallery.module": [
		274,
		7
	],
	"../pages/intro/intro.module": [
		275,
		6
	],
	"../pages/photo/photo.module": [
		276,
		5
	],
	"../pages/policynumsignin/policynumsignin.module": [
		277,
		4
	],
	"../pages/submitphotos/submitphotos.module": [
		278,
		3
	],
	"../pages/takeaphoto/takeaphoto.module": [
		279,
		0
	],
	"../pages/thankyou/thankyou.module": [
		281,
		2
	],
	"../pages/whatelsepage/whatelsepage.module": [
		280,
		1
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 151;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_date_picker__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_keyboard__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_native_storage__ = __webpack_require__(100);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomePage = /** @class */ (function () {
    function HomePage(nativeStorage, navCtrl, datePicker, keyboard) {
        this.nativeStorage = nativeStorage;
        this.navCtrl = navCtrl;
        this.datePicker = datePicker;
        this.keyboard = keyboard;
        this.policyObj = { dob: "", zip: "", lastName: "" };
    }
    HomePage.prototype.ngOnInit = function () {
        this.dobvalidation = false;
    };
    HomePage.prototype.loginWithPolicyNumber = function () {
        this.navCtrl.push('PolicynumsigninPage');
    };
    HomePage.prototype.login = function (fval, fvalid) {
        if (this.policyObj.dob == '') {
            this.dobvalidation = true;
        }
        else {
            this.dobvalidation = false;
        }
        if (fvalid) {
            console.log(this.policyObj);
            this.nativeStorage.clear();
            this.navCtrl.push('IntroPage');
        }
    };
    HomePage.prototype.openDatepicker = function () {
        var _this = this;
        this.dobvalidation = false;
        this.keyboard.close();
        this.datePicker.show({
            date: new Date(),
            mode: 'date',
            androidTheme: this.datePicker.ANDROID_THEMES.THEME_HOLO_LIGHT
        }).then(function (date) {
            _this.policyObj.dob = date.getDate() + '/' + date.getMonth() + '/' + date.getFullYear();
        }, function (err) { return console.log('Error occurred while getting date: ', err); });
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\ionic\ionic3-home-master\ionic3-home-master\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>\n     <b>Plymouth Rock</b> Home Inspector\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="home-page" padding>\n  <ion-grid>\n  <ion-row justify-content-center class="top_title">\n  <ion-col col-12>\n   <h1>Welcome, homeowner</h1>\n   <p class="thanks_text">Thank you for trusting us with your home</p>\n   </ion-col>\n   </ion-row>\n   <form #f="ngForm" novalidate  (ngSubmit)="login(f.value, f.valid)">\n  <ion-row> \n  <ion-label>Policyholder Last Name</ion-label>\n  <ion-col col-12>\n  <ion-input required   name="lastName" required maxlength="20" type="text" #lastName=\'ngModel\' (ngModel)="policyObj.lastName=$event.target.value" ></ion-input>\n  <div *ngIf="lastName.invalid && (lastName.touched || !lastName.pristine || f.submitted)" class="col-12 error nopadding">\n    \n  <small *ngIf="lastName.errors.required;then lastNameBlock"></small>\n  <small *ngIf="lastName.errors.maxlength;then lastNameBlock"></small>\n   <ng-template #lastNameBlock>\n    <small>\n      Please enter Last Name.\n    </small>\n  </ng-template>			\n</div>\n</ion-col>\n  </ion-row>\n  <ion-row>\n  <ion-col col-6>\n      <ion-label>Zip Code</ion-label>\n      <ion-input name="zip" required   pattern="^[0-9]{5}$" maxlength="5" minlength="5"type="text" #zip=\'ngModel\' (ngModel)="policyObj.zip=$event.target.value" ></ion-input>\n      <div *ngIf="zip.invalid && (zip.touched || !zip.pristine || f.submitted)" class="col-12 error nopadding">\n        \n      <small *ngIf="zip.errors.required;then zipBlock"></small>\n      <small *ngIf="zip.errors.maxlength;then zipLenthBlock"></small>\n      <small *ngIf="zip.errors.minlength;then zipLenthBlock"></small>\n      <small *ngIf="zip.errors.pattern; then zipcodeBlock"></small>\n       <ng-template #zipBlock>\n        <small>\n          Please enter Zip Code.\n        </small>\n      </ng-template>	\n      <ng-template #zipLenthBlock>\n        <small>\n          Please enter valid 5 digits zip code.\n        </small>\n      </ng-template>			\n    </div>\n    </ion-col>\n  <ion-col col-6>\n      <ion-label>Date of Birth</ion-label>\n      <ion-input disabled="true" required type="text" name="dob" (click)="openDatepicker()"  placeholder="mm/dd/yyyy" [(ngModel)]="policyObj.dob" ng-readonly></ion-input>\n      <div *ngIf="dobvalidation" class="col-12 error nopadding" >\n         <small>\n            Please select date of birth.\n          </small>\n       </div>\n    </ion-col>\n  </ion-row>\n  <ion-row>\n  <p class="privacy-text">Or <a (click)="loginWithPolicyNumber()">sign in using Policy Number</a></p>  \n  </ion-row>\n  <button col-12 ion-button color="secondary"  type="submit" >Agree and Continue</button>\n  </form>\n  <p class="privacy-text">By agreeing, you accept our <a>terms and conditions</a></p>\n  <ion-row justify-content-center>\n          <ion-img style="width:75px; height: 75px; " src="assets/imgs/homepage_home.png"></ion-img>   \n  </ion-row>\n  \n  </ion-grid>\n  \n  </ion-content>\n'/*ion-inline-end:"C:\ionic\ionic3-home-master\ionic3-home-master\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__ionic_native_native_storage__["a" /* NativeStorage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_date_picker__["a" /* DatePicker */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_keyboard__["a" /* Keyboard */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(221);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 221:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_keyboard__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_home_home__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_camera__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_native_storage__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_date_picker__ = __webpack_require__(196);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_forms__["d" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/allphotos/allphotos.module#AllphotosPageModule', name: 'AllphotosPage', segment: 'allphotos', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/basicinfo/basicinfo.module#BasicinfoPageModule', name: 'BasicinfoPage', segment: 'basicinfo', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/gallery/gallery.module#GalleryPageModule', name: 'GalleryPage', segment: 'gallery', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/intro/intro.module#IntroPageModule', name: 'IntroPage', segment: 'intro', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/photo/photo.module#PhotoPageModule', name: 'PhotoPage', segment: 'photo', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/policynumsignin/policynumsignin.module#PolicynumsigninPageModule', name: 'PolicynumsigninPage', segment: 'policynumsignin', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/submitphotos/submitphotos.module#SubmitphotosPageModule', name: 'SubmitphotosPage', segment: 'submitphotos', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/takeaphoto/takeaphoto.module#TakeaphotoPageModule', name: 'TakeaphotoPage', segment: 'takeaphoto', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/whatelsepage/whatelsepage.module#WhatelsepagePageModule', name: 'WhatelsepagePage', segment: 'whatelsepage', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/thankyou/thankyou.module#ThankyouPageModule', name: 'ThankyouPage', segment: 'thankyou', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_camera__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_native_storage__["a" /* NativeStorage */],
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_date_picker__["a" /* DatePicker */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_keyboard__["a" /* Keyboard */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 271:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(195);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\ionic\ionic3-home-master\ionic3-home-master\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"C:\ionic\ionic3-home-master\ionic3-home-master\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[198]);
//# sourceMappingURL=main.js.map