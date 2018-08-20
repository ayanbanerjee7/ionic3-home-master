webpackJsonp([4],{

/***/ 287:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PolicynumsigninPageModule", function() { return PolicynumsigninPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__policynumsignin__ = __webpack_require__(297);
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
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__policynumsignin__["a" /* PolicynumsigninPage */]),
            ],
        })
    ], PolicynumsigninPageModule);
    return PolicynumsigninPageModule;
}());

//# sourceMappingURL=policynumsignin.module.js.map

/***/ }),

/***/ 297:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PolicynumsigninPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(52);
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
    PolicynumsigninPage.prototype.login = function (fval, fvalid) {
        console.log(fval);
        if (fvalid) {
            this.navCtrl.push('BasicinfoPage');
        }
    };
    PolicynumsigninPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-policynumsignin',template:/*ion-inline-start:"C:\ionic\ionic3-home-master\ionic3-home-master\src\pages\policynumsignin\policynumsignin.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>\n      <b>Plymouth Rock</b> Home Inspector\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content class="home-page" padding>\n  <ion-grid>\n  <ion-row justify-content-center class="top_title">\n  <ion-col col-12>\n   <h1>Welcome, homeowner</h1>\n   <p class="thanks_text">Thank you for trusting us with your home</p>\n   </ion-col>\n   </ion-row>\n   <form #f="ngForm" novalidate  (ngSubmit)="login(f.value, f.valid)">\n  <ion-row> \n   <ion-col col-10>\n  <ion-input type="text" class="form-control" name="policyNumber" \n  #policyNumber="ngModel" [(ngModel)]="user" \n  required maxlength="14" minlength="14" placeholder="Policy Number" ></ion-input>\n \n  <div *ngIf="policyNumber.invalid && (policyNumber.touched || !policyNumber.pristine || f.submitted)" class="col-lg-12 error nopadding">\n    \n  <small *ngIf="policyNumber.errors.required;then policyNumberBlock"></small>\n  <small *ngIf="policyNumber.errors.maxlength;then policyNumberBlock"></small>\n  <small *ngIf="policyNumber.errors.minlength;then policyNumberBlock"></small>\n  <ng-template #policyNumberBlock>\n    <small>\n      Please enter a valid policy number.\n    </small>\n  </ng-template>			\n</div>\n  </ion-col>\n  <ion-col col-2>\n      <ion-icon  ios="ios-help" md="md-help"></ion-icon>\n  </ion-col>\n  </ion-row>\n  \n  <ion-row>\n  <p class="privacy-text">Or <a (click)="loginWithPersonalInfo()">sign in using personal info</a></p>  \n  </ion-row>\n  <button  type="submit" ion-button color="secondary" >Agree and Continue</button>\n   </form>\n  <p class="privacy-text">By agreeing, you accept our <a>terms and conditions</a></p>\n  <ion-row justify-content-center>\n      <ion-img style="width:75px; height: 75px; " src="assets/imgs/homepage_home.png"></ion-img>   \n</ion-row>\n\n</ion-grid>\n  \n  </ion-content>\n'/*ion-inline-end:"C:\ionic\ionic3-home-master\ionic3-home-master\src\pages\policynumsignin\policynumsignin.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]) === "function" && _b || Object])
    ], PolicynumsigninPage);
    return PolicynumsigninPage;
    var _a, _b;
}());

//# sourceMappingURL=policynumsignin.js.map

/***/ })

});
//# sourceMappingURL=4.js.map