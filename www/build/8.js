webpackJsonp([8],{

/***/ 283:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicinfoPageModule", function() { return BasicinfoPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__basicinfo__ = __webpack_require__(293);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var BasicinfoPageModule = /** @class */ (function () {
    function BasicinfoPageModule() {
    }
    BasicinfoPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__basicinfo__["a" /* BasicinfoPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__basicinfo__["a" /* BasicinfoPage */]),
            ],
        })
    ], BasicinfoPageModule);
    return BasicinfoPageModule;
}());

//# sourceMappingURL=basicinfo.module.js.map

/***/ }),

/***/ 293:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BasicinfoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_native_storage__ = __webpack_require__(100);
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
 * Generated class for the BasicinfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var BasicinfoPage = /** @class */ (function () {
    function BasicinfoPage(nativeStorage, navCtrl, navParams) {
        this.nativeStorage = nativeStorage;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.max_bednum = 3;
        this.display_bednum = 1;
        this.max_bathnum = 3;
        this.display_bathnum = 1;
        this.checkboxObj = {
            heatPump: false,
            furnace: false,
            boiler: false,
            wood: false,
            electricBase: false,
            other: false,
        };
    }
    BasicinfoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad BasicinfoPage');
    };
    BasicinfoPage.prototype.incrase_bednum = function () {
        if (this.display_bednum === this.max_bednum) {
        }
        else {
            this.display_bednum = this.display_bednum + 1;
        }
    };
    BasicinfoPage.prototype.decrease_bednum = function () {
        if (this.display_bednum > 1) {
            this.display_bednum = this.display_bednum - 1;
        }
    };
    BasicinfoPage.prototype.incrase_bathnum = function () {
        if (this.display_bathnum === this.max_bathnum) {
        }
        else {
            this.display_bathnum = this.display_bathnum + 1;
        }
    };
    BasicinfoPage.prototype.decrease_bathnum = function () {
        if (this.display_bathnum > 1) {
            this.display_bathnum = this.display_bathnum - 1;
        }
    };
    BasicinfoPage.prototype.selectCheckbox = function (event) {
        if (this.checkboxObj[event]) {
            this.checkboxObj[event] = false;
        }
        else {
            this.checkboxObj[event] = true;
        }
    };
    BasicinfoPage.prototype.heatSource = function (f) {
        console.log(f);
        if (Object.keys(f).length == 0) {
            this.errorMsg = 'Please select source of Heat';
        }
        if (Object.keys(f).length > 1) {
            this.errorMsg = 'Please select only one source of Heat';
        }
        if (Object.keys(f).length == 1) {
            this.errorMsg = '';
            this.nativeStorage.setItem('noOfBedRooms', this.display_bednum);
            this.nativeStorage.setItem('noOfBathRooms', this.display_bathnum);
            this.nativeStorage.setItem('primaryHeatSource', f);
            this.navCtrl.push('WhatelsepagePage');
        }
    };
    BasicinfoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-basicinfo',template:/*ion-inline-start:"C:\ionic\ionic3-home-master\ionic3-home-master\src\pages\basicinfo\basicinfo.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>\n     <b>Plymouth Rock</b> Home Inspector\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content class="basic-info-page" padding>\n  <ion-grid>\n      <ion-row justify-content-center>\n          <ion-img style="width:68px; height: 46px; margin-top:32px" src="assets/imgs/bed.png"></ion-img>\n      </ion-row>\n      <p>How many bedrooms?</p>\n      <ion-row class="counter-row">\n          <ion-col class="col-border" col-3>\n              <div (click)="decrease_bednum()" class="sign">-</div>\n          </ion-col>\n          <ion-col class="col-border" col-6>\n              <div class="number">{{display_bednum}}</div>\n          </ion-col>\n          <ion-col size="3">\n              <div (click)="incrase_bednum()" class="sign">+</div>\n          </ion-col>\n      </ion-row>\n      <p>How many bathrooms?</p>\n      <ion-row class="counter-row">\n          <ion-col class="col-border" col-3>\n              <div (click)="decrease_bathnum()" class="sign">-</div>\n          </ion-col>\n          <ion-col class="col-border" col-6>\n              <div class="number">{{display_bathnum}}</div>\n          </ion-col>\n          <ion-col size="3">\n              <div (click)="incrase_bathnum()" class="sign">+</div>\n          </ion-col>\n      </ion-row>\n      <p>Primary source of heat?</p>\n      <p class="error" *ngIf="errorMsg">{{errorMsg}}</p>\n      <form #f="ngForm" novalidate  (ngSubmit)="heatSource(f.value)">\n      <ion-row (click)="selectCheckbox(\'heatPump\')" [ngClass]="{\'add-border-color\':checkboxObj.heatPump}" class="counter-row">\n          <ion-col col-3>\n              <ion-checkbox name="heatPump"   ngModel="true" *ngIf="checkboxObj.heatPump" color="secondary" [checked]=\'checkboxObj.heatPump\'></ion-checkbox>\n          </ion-col>\n          <ion-col col-7>\n              <div class="text">Heat Pump</div>\n          </ion-col>\n      </ion-row>\n      \n      <ion-row (click)="selectCheckbox(\'furnace\')" [ngClass]="{\'add-border-color\': checkboxObj.furnace}" class="counter-row">\n          <ion-col col-3>\n              <ion-checkbox name="furnace"  ngModel="true"  *ngIf="checkboxObj.furnace" color="secondary" [checked]=\'checkboxObj.furnace\' ></ion-checkbox>\n          </ion-col>\n          <ion-col col-7>\n              <div class="text">Furnace</div>\n          </ion-col>\n      </ion-row>\n      <ion-row (click)="selectCheckbox(\'boiler\')" [ngClass]="{\'add-border-color\': checkboxObj.boiler}" class="counter-row">\n          <ion-col col-3>\n              <ion-checkbox   name="boiler"  ngModel="true" *ngIf="checkboxObj.boiler" color="secondary" [checked]=\'checkboxObj.boiler\'></ion-checkbox>\n          </ion-col>\n          <ion-col col-7>\n              <div class="text">Boiler</div>\n          </ion-col>\n      </ion-row>\n      <ion-row (click)="selectCheckbox(\'wood\')" [ngClass]="{\'add-border-color\': checkboxObj.wood}" class="counter-row">\n          <ion-col col-3>\n              <ion-checkbox   name="wood"  ngModel="true"  *ngIf="checkboxObj.wood" color="secondary" [checked]=\'checkboxObj.wood\'></ion-checkbox>\n          </ion-col>\n          <ion-col col-7>\n              <div class="text">Wood</div>\n          </ion-col>\n      </ion-row>\n      <ion-row (click)="selectCheckbox(\'electricBase\')" [ngClass]="{\'add-border-color\': checkboxObj.electricBase}" class="counter-row">\n          <ion-col col-3>\n              <ion-checkbox   name="electricBase"  ngModel="true"  *ngIf="checkboxObj.electricBase" color="secondary" [checked]=\'checkboxObj.electricBase\'></ion-checkbox>\n          </ion-col>\n          <ion-col col-7>\n              <div class="text">Electric Baseboard</div>\n          </ion-col>\n      </ion-row>\n      <ion-row (click)="selectCheckbox(\'other\')" [ngClass]="{\'add-border-color\': checkboxObj. other}" class="counter-row">\n          <ion-col col-3>\n              <ion-checkbox   name="other"  ngModel="true" *ngIf="checkboxObj.other" color="secondary" [checked]=\'checkboxObj.other\'></ion-checkbox>\n          </ion-col>\n          <ion-col col-7>\n              <div class="text">Other</div>\n          </ion-col>\n      </ion-row>\n      <button col-12 ion-button  color="secondary"  class="next-btn" type="submit"  >Next</button>\n</form>\n    </ion-grid>\n</ion-content>'/*ion-inline-end:"C:\ionic\ionic3-home-master\ionic3-home-master\src\pages\basicinfo\basicinfo.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_native_native_storage__["a" /* NativeStorage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], BasicinfoPage);
    return BasicinfoPage;
}());

//# sourceMappingURL=basicinfo.js.map

/***/ })

});
//# sourceMappingURL=8.js.map