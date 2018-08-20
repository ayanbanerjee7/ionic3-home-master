webpackJsonp([9],{

/***/ 283:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllphotosPageModule", function() { return AllphotosPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__allphotos__ = __webpack_require__(293);
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
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__allphotos__["a" /* AllphotosPage */]),
            ],
        })
    ], AllphotosPageModule);
    return AllphotosPageModule;
}());

//# sourceMappingURL=allphotos.module.js.map

/***/ }),

/***/ 293:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AllphotosPage; });
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



/**
 * Generated class for the AllphotosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AllphotosPage = /** @class */ (function () {
    function AllphotosPage(nativeStorage, navCtrl, navParams) {
        this.nativeStorage = nativeStorage;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.masterBed_photo_taken = true;
        this.bedRoom2_photo_taken = true;
        this.bedRoom3_photo_taken = true;
        this.masterBath_photo_taken = true;
        this.bathRoom2_photo_taken = true;
        this.bathRoom3_photo_taken = true;
        this.show_exteriorFront = true;
        this.show_exteriorRight = true;
        this.show_exteriorLeft = true;
    }
    AllphotosPage.prototype.ngOnInit = function () {
        var _this = this;
        this.nativeStorage.keys().then(function (keys) {
            return Promise.all(keys.map(function (k) {
                return _this.nativeStorage.getItem(k).then(function (data) {
                    if (k == 'noOfBedRooms') {
                        _this.noOfBedRooms = data;
                    }
                    if (k == 'noOfBathRooms') {
                        _this.noOfBathRooms = data;
                    }
                    if (k == 'exteriorFront') {
                        _this.show_exteriorFront = false;
                    }
                    if (k == 'exteriorRight') {
                        _this.show_exteriorRight = false;
                    }
                    if (k == 'exteriorLeft') {
                        _this.show_exteriorLeft = false;
                    }
                    if (k == 'masterbedRoom') {
                        _this.masterBed_photo_taken = false;
                    }
                    if (k == 'bedRoom2') {
                        _this.bedRoom2_photo_taken = false;
                    }
                    if (k == 'bedRoom3') {
                        _this.bedRoom3_photo_taken = false;
                    }
                    if (k == 'masterbathRoom') {
                        _this.masterBath_photo_taken = false;
                    }
                    if (k == 'bathRoom2') {
                        _this.bathRoom2_photo_taken = false;
                    }
                    if (k == 'bathRoom3') {
                        _this.bathRoom3_photo_taken = false;
                    }
                    if (_this.noOfBedRooms > 2) {
                        _this.masterBed = true;
                        _this.bedRoom2 = true;
                        _this.bedRoom3 = true;
                    }
                    if (_this.noOfBedRooms == 2) {
                        _this.masterBed = true;
                        _this.bedRoom2 = true;
                    }
                    if (_this.noOfBedRooms == 1) {
                        _this.masterBed = true;
                    }
                    if (_this.noOfBathRooms > 2) {
                        _this.masterBath = true;
                        _this.bathRoom2 = true;
                        _this.bathRoom3 = true;
                    }
                    if (_this.noOfBathRooms == 2) {
                        _this.masterBath = true;
                        _this.bathRoom2 = true;
                    }
                    if (_this.noOfBathRooms == 1) {
                        _this.masterBath = true;
                    }
                });
            }));
        }), function (e) {
            console.log(e);
        };
    };
    AllphotosPage.prototype.takePhoto = function (page) {
        this.navCtrl.push('TakeaphotoPage', { 'photoId': page });
    };
    AllphotosPage.prototype.goToNext = function () {
        this.navCtrl.push('SubmitphotosPage');
    };
    AllphotosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-allphotos',template:/*ion-inline-start:"C:\ionic\ionic3-home-master\ionic3-home-master\src\pages\allphotos\allphotos.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>\n     <b>Plymouth Rock</b> Home Inspector\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="all-photos-page" padding>\n  <ion-grid>\n    <ion-row>\n      <ion-col col-12>\n    <p>These are the photos needed for your policy, tap to get started</p> \n  </ion-col>\n  </ion-row>\n  <span class="exterior">\n  <ion-row>\n  <ion-col  *ngIf="show_exteriorFront" col-5>\n   <div (click)="takePhoto(\'exteriorFront\')">Exterior: Front</div>\n  </ion-col>\n  <ion-col  *ngIf="show_exteriorRight" col-7>\n      <div (click)="takePhoto(\'exteriorRight\')">Exterior: Right Side</div>  \n     </ion-col>\n  </ion-row>\n  <ion-row >\n      <ion-col  *ngIf="show_exteriorLeft" col-7>\n       <div (click)="takePhoto(\'exteriorLeft\')">Exterior: Left Side</div>\n      </ion-col>\n      <ion-col col-5>\n          <!-- <div>Exterior: Back</div>   -->\n         </ion-col>\n      </ion-row>\n      <!-- <ion-row>\n          <ion-col col-3>\n           <div>Shed</div>\n          </ion-col>\n          <ion-col col-6>\n              <div>Trampoline</div>  \n             </ion-col>\n             <ion-col col-3>\n                <div>Pool</div>  \n               </ion-col>\n          </ion-row> -->\n  </span>\n  <span class="exterior interior">\n      <!-- <ion-row>\n      <ion-col col-4>\n       <div>Kitchen</div>\n      </ion-col>\n      <ion-col col-6>\n          <div>Livingroom</div>  \n         </ion-col>\n      </ion-row> -->\n      <ion-row >\n          <ion-col *ngIf="masterBath && masterBath_photo_taken" col-4>\n           <div (click)="takePhoto(\'masterbathRoom\')" >Master Bath</div>\n          </ion-col>\n          <ion-col *ngIf="bathRoom2 && bathRoom2_photo_taken" col-4>\n              <div (click)="takePhoto(\'bathRoom2\')" >Bath two</div>  \n             </ion-col>\n             <ion-col *ngIf="bathRoom3 && bathRoom3_photo_taken" col-4>\n                <div (click)="takePhoto(\'bathRoom3\')">Bath Three</div>  \n               </ion-col>\n          </ion-row>\n          <ion-row >\n              <!-- <ion-col col-5>\n               <div>Family Room</div>\n              </ion-col> -->\n              <ion-col *ngIf="masterBed && masterBed_photo_taken" col-7>\n                  <div (click)="takePhoto(\'masterbedRoom\')">Master Bedroom</div>  \n                 </ion-col>\n                </ion-row>\n                <ion-row>\n                    <ion-col  *ngIf="bedRoom2 && bedRoom2_photo_taken" col-5>\n                     <div (click)="takePhoto(\'bedRoom2\')">Bedroom Two</div>\n                    </ion-col>\n                    <ion-col *ngIf="bedRoom3 && bedRoom3_photo_taken"  col-7>\n                        <div (click)="takePhoto(\'bedRoom3\')">Bedroom Three</div>  \n                       </ion-col>\n                      </ion-row>\n      </span>\n      <a (click)="goToNext()">Go to submit</a>\n  </ion-grid>\n  </ion-content>\n'/*ion-inline-end:"C:\ionic\ionic3-home-master\ionic3-home-master\src\pages\allphotos\allphotos.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_native_native_storage__["a" /* NativeStorage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_native_native_storage__["a" /* NativeStorage */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]) === "function" && _c || Object])
    ], AllphotosPage);
    return AllphotosPage;
    var _a, _b, _c;
}());

//# sourceMappingURL=allphotos.js.map

/***/ })

});
//# sourceMappingURL=9.js.map