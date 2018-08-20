webpackJsonp([3],{

/***/ 288:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubmitphotosPageModule", function() { return SubmitphotosPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__submitphotos__ = __webpack_require__(298);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SubmitphotosPageModule = /** @class */ (function () {
    function SubmitphotosPageModule() {
    }
    SubmitphotosPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__submitphotos__["a" /* SubmitphotosPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__submitphotos__["a" /* SubmitphotosPage */]),
            ],
        })
    ], SubmitphotosPageModule);
    return SubmitphotosPageModule;
}());

//# sourceMappingURL=submitphotos.module.js.map

/***/ }),

/***/ 298:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SubmitphotosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_native_storage__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_submitphotos_submitphotos__ = __webpack_require__(203);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SubmitphotosPage = /** @class */ (function () {
    function SubmitphotosPage(submitphotos, navCtrl, navParams, nativeStorage) {
        this.submitphotos = submitphotos;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.nativeStorage = nativeStorage;
        this.images = [];
        this.keys = [];
        this.imagesObj = {};
        this.noOfBedRooms = '';
        this.noOfBathRooms = '';
        this.primaryHeatSource = '';
        this.otherHomeProperties = [];
    }
    SubmitphotosPage.prototype.ngOnInit = function () {
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
                    if (k == 'primaryHeatSource') {
                        _this.primaryHeatSource = data;
                    }
                    if (k == 'otherHomeProperties') {
                        _this.otherHomeProperties = data;
                    }
                });
            }));
        }), function (e) {
            console.log(e);
        };
        this.nativeStorage.keys().then(function (keys) {
            return Promise.all(keys.map(function (k) {
                return _this.nativeStorage.getItem(k).then(function (data) {
                    if (k.match(/^(noOfBedRooms|noOfBathRooms|primaryHeatSource|otherHomeProperties)$/)) {
                        // do nothing
                    }
                    else {
                        _this.imagesObj = {
                            'key': k,
                            'imagedata': data
                        };
                        _this.images.push(_this.imagesObj);
                    }
                });
            }));
        }), function (e) {
            console.log(e);
        };
    };
    SubmitphotosPage.prototype.editPhoto = function (k) {
        this.navCtrl.push('TakeaphotoPage', { 'photoId': k, 'editPhoto': 'Yes' });
    };
    SubmitphotosPage.prototype.submitPhotos = function () {
        var finalObj = {
            "policyNumber": "PRA000022332",
            "zip": "02169",
            "dob": "08/08/2000",
            "homeData": {
                "noOfBedRooms": this.noOfBedRooms,
                "noOfBathRooms": this.noOfBathRooms,
                "primaryHeatSource": this.primaryHeatSource,
                "otherHomeProperties": this.otherHomeProperties,
                "homeImages": this.images
            }
        };
        console.log(finalObj);
        //  //submit photo service
        //  this.submitphotos.submitPhotos(finalObj).subscribe(
        //   result => {
        //     if (result) {
        //     }
        //   },
        //   (error) => {
        //     console.log("Error...." + error);
        //   }
        // );
        this.navCtrl.push('ThankyouPage');
        // this.nativeStorage.clear();
    };
    SubmitphotosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-submitphotos',template:/*ion-inline-start:"C:\ionic\ionic3-home-master\ionic3-home-master\src\pages\submitphotos\submitphotos.html"*/'<ion-header>\n    <ion-navbar color="primary">\n      <ion-title>\n        <b>Plymouth Rock</b> Home Inspector\n      </ion-title>\n    </ion-navbar>\n  </ion-header>\n\n<ion-content class="submit-page" padding>\n     <ion-grid>\n    <ion-row justify-content-center>\n     <p class="alldone-text">All done. Good job!</p> \n     <p class="retake-text">Retake any photo or submit your inventory now</p>\n    </ion-row>\n    <ion-row justify-content-center>\n        <button ion-button color="secondary"  (click)="submitPhotos()"  expand="full">Submit Photos</button>  \n    </ion-row>\n    <ion-row class="gallery">\n    <ion-col col-4 *ngFor="let m of images">\n        <img (click)="editPhoto(m.key)" src="{{m.imagedata}}"/> \n   </ion-col>\n    </ion-row>\n    </ion-grid>\n</ion-content>'/*ion-inline-end:"C:\ionic\ionic3-home-master\ionic3-home-master\src\pages\submitphotos\submitphotos.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__providers_submitphotos_submitphotos__["a" /* SubmitphotosProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_native_storage__["a" /* NativeStorage */]])
    ], SubmitphotosPage);
    return SubmitphotosPage;
}());

//# sourceMappingURL=submitphotos.js.map

/***/ })

});
//# sourceMappingURL=3.js.map