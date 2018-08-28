webpackJsonp([1],{

/***/ 291:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WhatelsepagePageModule", function() { return WhatelsepagePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__whatelsepage__ = __webpack_require__(302);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var WhatelsepagePageModule = /** @class */ (function () {
    function WhatelsepagePageModule() {
    }
    WhatelsepagePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__whatelsepage__["a" /* WhatelsepagePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__whatelsepage__["a" /* WhatelsepagePage */]),
            ],
        })
    ], WhatelsepagePageModule);
    return WhatelsepagePageModule;
}());

//# sourceMappingURL=whatelsepage.module.js.map

/***/ }),

/***/ 302:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WhatelsepagePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_native_storage__ = __webpack_require__(101);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var WhatelsepagePage = /** @class */ (function () {
    function WhatelsepagePage(nativeStorage, alertCtrl, navCtrl, navParams) {
        this.nativeStorage = nativeStorage;
        this.alertCtrl = alertCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.checkboxObj = {
            dog: false,
            pool: false,
            trampoline: false,
            shed: false,
            garage: false,
            basement: false,
            rentalApt: false,
            homeBusiness: false,
            oilTank: false,
            securitySys: false,
            smokeDetect: false,
            woodStove: false
        };
    }
    WhatelsepagePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad WhatelsepagePage');
    };
    WhatelsepagePage.prototype.goToNext = function () {
        this.navCtrl.push("AllphotosPage");
    };
    WhatelsepagePage.prototype.selectCheckbox = function (event) {
        if (this.checkboxObj[event]) {
            this.checkboxObj[event] = false;
        }
        else {
            this.checkboxObj[event] = true;
        }
    };
    WhatelsepagePage.prototype.whatElseItems = function (f) {
        var _this = this;
        console.log(f);
        if (Object.keys(f).length == 0) {
            var alert_1 = this.alertCtrl.create({
                title: 'You have not selected any items',
                subTitle: 'Wish to Continue ?',
                buttons: [{
                        text: 'Cancel',
                        role: 'cancel',
                        handler: function () {
                            console.log('Retake clicked');
                        }
                    },
                    {
                        text: 'Confirm',
                        handler: function () {
                            _this.navCtrl.push('AllphotosPage');
                        }
                    }]
            });
            alert_1.present();
        }
        if (Object.keys(f).length > 0) {
            if (this.checkboxObj.homeBusiness = true) {
                console.log("**************here****");
                if (f.whatkindofBusiness == "") {
                    this.content.scrollToTop();
                    this.errorMsg = 'Please specify about the Home Business!';
                }
                else {
                    this.nativeStorage.setItem('otherHomeProperties', f);
                    this.navCtrl.push('AllphotosPage', { 'photoId': 'firstlanding' });
                }
            }
            else {
                this.nativeStorage.setItem('otherHomeProperties', f);
                this.navCtrl.push('AllphotosPage', { 'photoId': 'firstlanding' });
            }
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Content */])
    ], WhatelsepagePage.prototype, "content", void 0);
    WhatelsepagePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-whatelsepage',template:/*ion-inline-start:"c:\ionic\ionic3-home-master\ionic3-home-master\src\pages\whatelsepage\whatelsepage.html"*/'<ion-header>\n  <ion-navbar hideBackButton color="primary">\n    <ion-title>\n     <b>Plymouth Rock</b> Home Inspector\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content class="what-else-page" padding>\n  <ion-grid>\n      <ion-row justify-content-center>\n          <ion-img style="width:61px; height: 61px; margin-top:32px" src="assets/imgs/pad.png"></ion-img>\n      </ion-row>\n      <p class="heading-text">What else do you have?</p>\n      <p class="sub-head-text">Select all that apply</p>\n      <p class="error" *ngIf="errorMsg">{{errorMsg}}</p>\n      <form #f="ngForm" novalidate  (ngSubmit)="whatElseItems(f.value)">\n      <ion-row (click)="selectCheckbox(\'dog\')" [ngClass]="{\'add-border-color\': checkboxObj.dog}" class="counter-row">\n          <ion-col col-3>\n              <ion-checkbox (click)="selectCheckbox(\'dog\')" name="Dog"   ngModel="true" *ngIf="checkboxObj.dog" color="secondary" [checked]=\'checkboxObj.dog\'></ion-checkbox>\n          </ion-col>\n          <ion-col  col-7>\n              <div class="text">Dog</div>\n          </ion-col>\n      </ion-row>\n      \n      <ion-row   (click)="selectCheckbox(\'pool\')" [ngClass]="{\'add-border-color\': checkboxObj.pool}" class="counter-row">\n          <ion-col  col-3>\n              <ion-checkbox  (click)="selectCheckbox(\'pool\')"  name="Pool"   ngModel="true" *ngIf="checkboxObj.pool" color="secondary" [checked]=\'checkboxObj.pool\'></ion-checkbox>\n          </ion-col>\n          <ion-col  col-7>\n              <div class="text">Pool/Hot Tub</div>\n          </ion-col>\n      </ion-row>\n      <ion-row  (click)="selectCheckbox(\'trampoline\')" [ngClass]="{\'add-border-color\': checkboxObj.trampoline}" class="counter-row">\n          <ion-col  col-3>\n              <ion-checkbox  (click)="selectCheckbox(\'trampoline\')"  name="Trampoline"   ngModel="true" *ngIf="checkboxObj.trampoline" color="secondary" [checked]=\'checkboxObj.trampoline\'></ion-checkbox>\n          </ion-col>\n          <ion-col  col-7>\n              <div class="text">Trampoline</div>\n          </ion-col>\n      </ion-row>\n      <ion-row  (click)="selectCheckbox(\'shed\')" [ngClass]="{\'add-border-color\': checkboxObj.shed}" class="counter-row">\n          <ion-col  col-3>\n              <ion-checkbox  (click)="selectCheckbox(\'shed\')" name="Shed"   ngModel="true" *ngIf="checkboxObj.shed" color="secondary" [checked]=\'checkboxObj.shed\'></ion-checkbox>\n          </ion-col>\n          <ion-col  col-7>\n              <div class="text">Shed</div>\n          </ion-col>\n      </ion-row>\n      <ion-row  (click)="selectCheckbox(\'garage\')" [ngClass]="{\'add-border-color\': checkboxObj.garage}" class="counter-row">\n          <ion-col  col-3>\n              <ion-checkbox (click)="selectCheckbox(\'garage\')" name="Garage"   ngModel="true" *ngIf="checkboxObj.garage" color="secondary" [checked]=\'checkboxObj.garage\'></ion-checkbox>\n          </ion-col>\n          <ion-col  col-7>\n              <div class="text">Detached Garage</div>\n          </ion-col>\n      </ion-row>\n      <ion-row  (click)="selectCheckbox(\'basement\')" [ngClass]="{\'add-border-color\': checkboxObj.basement}" class="counter-row">\n          <ion-col  col-3>\n              <ion-checkbox  (click)="selectCheckbox(\'basement\')" name="Basement"   ngModel="true" *ngIf="checkboxObj.basement" color="secondary" [checked]=\'checkboxObj.basement\'></ion-checkbox>\n          </ion-col>\n          <ion-col  col-7>\n              <div class="text">Finished Basement</div>\n          </ion-col>\n      </ion-row>\n      <ion-row  (click)="selectCheckbox(\'rentalApt\')" [ngClass]="{\'add-border-color\': checkboxObj.rentalApt}" class="counter-row">\n          <ion-col  col-3>\n              <ion-checkbox (click)="selectCheckbox(\'rentalApt\')" name="Rental Apt"   ngModel="true" *ngIf="checkboxObj.rentalApt" color="secondary" [checked]=\'checkboxObj.rentalApt\'></ion-checkbox>\n          </ion-col>\n          <ion-col  col-7>\n              <div class="text rental-text">Rental / In-Law Apartment</div>\n          </ion-col>\n      </ion-row>\n      <ion-row  (click)="selectCheckbox(\'homeBusiness\')" [ngClass]="{\'add-border-color\': checkboxObj.homeBusiness}" class="counter-row">\n          <ion-col  col-3>\n              <ion-checkbox (click)="selectCheckbox(\'homeBusiness\')" name="Home Business"   ngModel="true" *ngIf="checkboxObj.homeBusiness" color="secondary" [checked]=\'checkboxObj.homeBusiness\' ></ion-checkbox>\n          </ion-col>\n          <ion-col  col-7>\n              <div class="text">Home Business</div>\n          </ion-col>\n      </ion-row>\n       <ion-row   *ngIf="checkboxObj.homeBusiness"  class="">\n          <ion-col  col-12>\n            <ion-label> What kind of Business?</ion-label>\n            <ion-input  type="text"  name="whatkindofBusiness"   ngModel="" ></ion-input>\n        </ion-col>\n      </ion-row>\n      <ion-row  (click)="selectCheckbox(\'oilTank\')" [ngClass]="{\'add-border-color\': checkboxObj.oilTank}" class="counter-row">\n          <ion-col  col-3>\n              <ion-checkbox (click)="selectCheckbox(\'oilTank\')" name="Oil Tank"   ngModel="true" *ngIf="checkboxObj.oilTank" color="secondary" [checked]=\'checkboxObj.oilTank\' ></ion-checkbox>\n          </ion-col>\n          <ion-col  col-7>\n              <div class="text">Oil Tank</div>\n          </ion-col>\n      </ion-row>\n      <ion-row  (click)="selectCheckbox(\'securitySys\')" [ngClass]="{\'add-border-color\': checkboxObj.securitySys}" class="counter-row">\n          <ion-col  col-3>\n              <ion-checkbox (click)="selectCheckbox(\'securitySys\')" name="Security System"   ngModel="true" *ngIf="checkboxObj.securitySys" color="secondary" [checked]=\'checkboxObj.securitySys\' ></ion-checkbox>\n          </ion-col>\n          <ion-col  col-7>\n              <div class="text">Security System</div>\n          </ion-col>\n      </ion-row>\n      <ion-row  (click)="selectCheckbox(\'smokeDetect\')" [ngClass]="{\'add-border-color\': checkboxObj.smokeDetect}" class="counter-row">\n          <ion-col  col-3>\n              <ion-checkbox  (click)="selectCheckbox(\'smokeDetect\')" name="Smoke Detector"   ngModel="true" *ngIf="checkboxObj.smokeDetect" color="secondary" [checked]=\'checkboxObj.smokeDetect\'></ion-checkbox>\n          </ion-col>\n          <ion-col col-7>\n              <div class="text">Smoke Detectors</div>\n          </ion-col>\n      </ion-row>\n      <ion-row  (click)="selectCheckbox(\'woodStove\')" [ngClass]="{\'add-border-color\': checkboxObj.woodStove}" class="counter-row">\n          <ion-col col-3>\n              <ion-checkbox (click)="selectCheckbox(\'woodStove\')" name="Wood Stove"   ngModel="true" *ngIf="checkboxObj.woodStove" color="secondary" [checked]=\'checkboxObj.woodStove\'></ion-checkbox>\n          </ion-col>\n          <ion-col col-7>\n              <div class="text">Wood Stove</div>\n          </ion-col>\n      </ion-row>\n      <button col-12 ion-button color="secondary" class="next-btn"  type="submit" >Done! Let’s take some pics</button>\n     </form>\n    </ion-grid>\n</ion-content>'/*ion-inline-end:"c:\ionic\ionic3-home-master\ionic3-home-master\src\pages\whatelsepage\whatelsepage.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_native_native_storage__["a" /* NativeStorage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], WhatelsepagePage);
    return WhatelsepagePage;
}());

//# sourceMappingURL=whatelsepage.js.map

/***/ })

});
//# sourceMappingURL=1.js.map