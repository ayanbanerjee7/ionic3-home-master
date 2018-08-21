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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_submitphotos_submitphotos__ = __webpack_require__(204);
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
    function SubmitphotosPage(loadingCtrl, submitphotos, navCtrl, navParams, nativeStorage) {
        this.loadingCtrl = loadingCtrl;
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
                    if (k == 'token') {
                        _this.token = data;
                    }
                    if (k == 'policyNumber') {
                        _this.policyNumber = data;
                    }
                    if (k == 'zipCode') {
                        _this.zipCode = data;
                    }
                });
            }));
        }), function (e) {
            console.log(e);
        };
        this.nativeStorage.keys().then(function (keys) {
            return Promise.all(keys.map(function (k) {
                return _this.nativeStorage.getItem(k).then(function (data) {
                    if (k.match(/^(noOfBedRooms|noOfBathRooms|primaryHeatSource|otherHomeProperties|zipCode|policyNumber|token)$/)) {
                        // do nothing
                    }
                    else {
                        // this includes logic needs to be improved added this to avoid IOS default native data 
                        if (data.includes('data:image/jpeg;base64')) {
                            _this.imagesObj = {
                                'key': k,
                                'imagedata': data
                            };
                            _this.images.push(_this.imagesObj);
                        }
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
    SubmitphotosPage.prototype.uploadPhotos = function () {
        var _this = this;
        this.uploadErrorMsg = '';
        var loading = this.loadingCtrl.create({
            content: 'Uploading photos.....'
        });
        loading.present();
        var finalObj = {
            "policyNumber": this.policyNumber,
            "zip": this.zipCode,
            "dob": "08/08/2000",
            "homeData": {
                "noOfBedRooms": this.noOfBedRooms,
                "noOfBathRooms": this.noOfBathRooms,
                "primaryHeatSource": ['Boiler'],
                "otherHomeProperties": ['dog'],
                "homeImages": this.images
            }
        };
        console.log(finalObj);
        //submit photo service
        this.submitphotos.submitPhotos(this.token, finalObj).subscribe(function (result) {
            loading.dismiss();
            if (result.error) {
                _this.uploadErrorMsg = 'Error Submiting Images!';
            }
            else {
                _this.navCtrl.push('ThankyouPage');
                _this.nativeStorage.clear();
            }
        }, function (error) {
            loading.dismiss();
            _this.uploadErrorMsg = 'Error Submiting Images!';
            console.log("Error...." + error);
        });
        //
    };
    SubmitphotosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-submitphotos',template:/*ion-inline-start:"c:\ionic\ionic3-home-master\ionic3-home-master\src\pages\submitphotos\submitphotos.html"*/'<ion-header>\n    <ion-navbar hideBackButton color="primary">\n      <ion-title>\n        <b>Plymouth Rock</b> Home Inspector\n      </ion-title>\n    </ion-navbar>\n  </ion-header>\n\n<ion-content class="submit-page" padding>\n     <ion-grid>\n    <ion-row justify-content-center>\n     <p class="alldone-text">All done. Good job!</p> \n     <p class="retake-text">Retake any photo or submit your inventory now</p>\n    </ion-row>\n    <ion-row justify-content-center>\n        <button ion-button color="secondary"  (click)="uploadPhotos()"  expand="full">Submit Photos</button>  \n    </ion-row>\n    <p class="error" *ngIf="uploadErrorMsg">{{uploadErrorMsg}}</p>\n   \n    <ion-row class="gallery">\n    <ion-col col-4 *ngFor="let m of images">\n        <img (click)="editPhoto(m.key)" src="{{m.imagedata}}"/> \n   </ion-col>\n    </ion-row>\n    </ion-grid>\n</ion-content>'/*ion-inline-end:"c:\ionic\ionic3-home-master\ionic3-home-master\src\pages\submitphotos\submitphotos.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_3__providers_submitphotos_submitphotos__["a" /* SubmitphotosProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_native_storage__["a" /* NativeStorage */]])
    ], SubmitphotosPage);
    return SubmitphotosPage;
}());

//# sourceMappingURL=submitphotos.js.map

/***/ })

});
//# sourceMappingURL=3.js.map