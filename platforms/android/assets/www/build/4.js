webpackJsonp([4],{

/***/ 277:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PolicynumsigninPageModule", function() { return PolicynumsigninPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__policynumsignin__ = __webpack_require__(287);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PolicynumsigninPageModule = /** @class */ (function () {
    function PolicynumsigninPageModule() {
    }
    PolicynumsigninPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__policynumsignin__["a" /* PolicynumsigninPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__policynumsignin__["a" /* PolicynumsigninPage */]),
            ],
        })
    ], PolicynumsigninPageModule);
    return PolicynumsigninPageModule;
}());

//# sourceMappingURL=policynumsignin.module.js.map

/***/ }),

/***/ 287:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PolicynumsigninPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(50);
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
 * Generated class for the PolicynumsigninPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PolicynumsigninPage = /** @class */ (function () {
    function PolicynumsigninPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    PolicynumsigninPage.prototype.loginWithPersonalInfo = function () {
        this.navCtrl.popToRoot();
    };
    PolicynumsigninPage.prototype.login = function () {
        this.navCtrl.push('BasicinfoPage');
    };
    PolicynumsigninPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-policynumsignin',template:/*ion-inline-start:"c:\ionic\ionic3-home-master\ionic3-home-master\src\pages\policynumsignin\policynumsignin.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>\n      <b>Plymouth Rock</b> Home Inspector\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content class="home-page" padding>\n  <ion-grid>\n  <ion-row justify-content-center class="top_title">\n  <ion-col col-12>\n   <h1>Welcome, homeowner</h1>\n   <p class="thanks_text">Thank you for trusting us with your home</p>\n   </ion-col>\n   </ion-row>\n  <ion-row> \n  \n  <ion-col col-10>\n  <ion-input required type="text" placeholder="Policy Number" ></ion-input>\n  </ion-col>\n  <ion-col col-2>\n    <div><p>?</p></div>\n  </ion-col>\n  </ion-row>\n  \n  <ion-row>\n  <p class="privacy-text">Or <a (click)="loginWithPersonalInfo()">sign in using personal info</a></p>  \n  </ion-row>\n  <button ion-button color="secondary" >Agree and Continue</button>\n  <p class="privacy-text">By agreeing, you accept our <a>terms and conditions</a></p>\n  <ion-row justify-content-center>\n      <ion-img style="width:75px; height: 75px; " src="assets/imgs/homepage_home.png"></ion-img>   \n</ion-row>\n\n</ion-grid>\n  \n  </ion-content>\n'/*ion-inline-end:"c:\ionic\ionic3-home-master\ionic3-home-master\src\pages\policynumsignin\policynumsignin.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], PolicynumsigninPage);
    return PolicynumsigninPage;
}());

//# sourceMappingURL=policynumsignin.js.map

/***/ })

});
//# sourceMappingURL=4.js.map