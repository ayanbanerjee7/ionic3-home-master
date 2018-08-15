webpackJsonp([9],{

/***/ 272:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllphotosPageModule", function() { return AllphotosPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__allphotos__ = __webpack_require__(282);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AllphotosPageModule = /** @class */ (function () {
    function AllphotosPageModule() {
    }
    AllphotosPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__allphotos__["a" /* AllphotosPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__allphotos__["a" /* AllphotosPage */]),
            ],
        })
    ], AllphotosPageModule);
    return AllphotosPageModule;
}());

//# sourceMappingURL=allphotos.module.js.map

/***/ }),

/***/ 282:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AllphotosPage; });
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
 * Generated class for the AllphotosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AllphotosPage = /** @class */ (function () {
    function AllphotosPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    AllphotosPage.prototype.takePhoto = function (page) {
        this.navCtrl.push('TakeaphotoPage', { 'photoId': page });
    };
    AllphotosPage.prototype.goToNext = function () {
        this.navCtrl.push('SubmitphotosPage');
    };
    AllphotosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-allphotos',template:/*ion-inline-start:"c:\ionic\ionic3-home-master\ionic3-home-master\src\pages\allphotos\allphotos.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>\n     <b>Plymouth Rock</b> Home Inspector\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="all-photos-page" padding>\n  <ion-grid>\n    <ion-row>\n      <ion-col col-12>\n    <p>These are the photos needed for your policy, tap to get started</p> \n  </ion-col>\n  </ion-row>\n  <span class="exterior">\n  <ion-row>\n  <ion-col  col-5>\n   <div (click)="takePhoto(\'exteriorFront\')">Exterior: Front</div>\n  </ion-col>\n  <ion-col col-7>\n      <div (click)="takePhoto(\'exteriorRight\')">Exterior: Right Side</div>  \n     </ion-col>\n  </ion-row>\n  <ion-row >\n      <ion-col col-7>\n       <div (click)="takePhoto(\'exteriorLeft\')">Exterior: Left Side</div>\n      </ion-col>\n      <ion-col col-5>\n          <div>Exterior: Back</div>  \n         </ion-col>\n      </ion-row>\n      <ion-row>\n          <ion-col col-3>\n           <div>Shed</div>\n          </ion-col>\n          <ion-col col-6>\n              <div>Trampoline</div>  \n             </ion-col>\n             <ion-col col-3>\n                <div>Pool</div>  \n               </ion-col>\n          </ion-row>\n  </span>\n  <span class="exterior interior">\n      <ion-row>\n      <ion-col col-4>\n       <div>Kitchen</div>\n      </ion-col>\n      <ion-col col-6>\n          <div>Livingroom</div>  \n         </ion-col>\n      </ion-row>\n      <ion-row >\n          <ion-col col-4>\n           <div>Master Bath</div>\n          </ion-col>\n          <ion-col col-4>\n              <div>Bath two</div>  \n             </ion-col>\n             <ion-col col-4>\n                <div>Bath Three</div>  \n               </ion-col>\n          </ion-row>\n          <ion-row >\n              <ion-col col-5>\n               <div>Family Room</div>\n              </ion-col>\n              <ion-col col-7>\n                  <div (click)="takePhoto(\'bedRoom\')">Master Bedroom</div>  \n                 </ion-col>\n                </ion-row>\n                <ion-row>\n                    <ion-col col-5>\n                     <div (click)="takePhoto(\'bedRoom\')">Bedroom Two</div>\n                    </ion-col>\n                    <ion-col col-7>\n                        <div (click)="takePhoto(\'bedRoom\')">Bedroom Three</div>  \n                       </ion-col>\n                      </ion-row>\n      </span>\n      <a (click)="goToNext()">Go to submit</a>\n  </ion-grid>\n  </ion-content>\n'/*ion-inline-end:"c:\ionic\ionic3-home-master\ionic3-home-master\src\pages\allphotos\allphotos.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], AllphotosPage);
    return AllphotosPage;
}());

//# sourceMappingURL=allphotos.js.map

/***/ })

});
//# sourceMappingURL=9.js.map