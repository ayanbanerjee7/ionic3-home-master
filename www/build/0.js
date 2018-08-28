webpackJsonp([0],{

/***/ 290:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TakeaphotoPageModule", function() { return TakeaphotoPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__takeaphoto__ = __webpack_require__(300);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TakeaphotoPageModule = /** @class */ (function () {
    function TakeaphotoPageModule() {
    }
    TakeaphotoPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__takeaphoto__["a" /* TakeaphotoPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__takeaphoto__["a" /* TakeaphotoPage */]),
            ],
        })
    ], TakeaphotoPageModule);
    return TakeaphotoPageModule;
}());

//# sourceMappingURL=takeaphoto.module.js.map

/***/ }),

/***/ 300:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TakeaphotoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_native_storage__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_util__ = __webpack_require__(301);
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
 * Generated class for the TakeaphotoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TakeaphotoPage = /** @class */ (function () {
    function TakeaphotoPage(navCtrl, camera, nativeStorage, navParams, alertCtrl) {
        this.navCtrl = navCtrl;
        this.camera = camera;
        this.nativeStorage = nativeStorage;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.photoId = null;
        this.options = {
            quality: 50,
            allowEdit: true,
            correctOrientation: true,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
        };
        this.photoId = this.navParams.get('photoId');
        this.editPhoto = this.navParams.get('editPhoto');
        //alert(this.photoId);
    }
    TakeaphotoPage.prototype.ngOnInit = function () {
        var _this = this;
        this.photos = [];
        this.photo_type = this.navParams.get('photoId');
        var tips = JSON.stringify(__WEBPACK_IMPORTED_MODULE_4__utils_util__["a" /* util */].getPhotoTips());
        var tipsJson = JSON.parse(tips);
        tipsJson.forEach(function (data) {
            _this.title_text = data[_this.photo_type].title;
            _this.tip_text = data[_this.photo_type].tip;
            if (_this.photo_type.includes('bedRoom') || _this.photo_type.includes('bathRoom')) {
                _this.photo_thumbnail = 'bedRoom';
            }
            else {
                _this.photo_thumbnail = _this.photo_type;
            }
        });
        this.nativeStorage.getItem(this.photo_type).then(function (data) {
            return _this.taken_photo = data;
        }, function (error) {
            return console.log("error retriving photo");
        });
    };
    TakeaphotoPage.prototype.takePhoto = function () {
        var _this = this;
        this.camera.getPicture(this.options).then(function (imageData) {
            _this.imageURL = 'data:image/jpeg;base64,' + imageData;
            _this.photos.push(_this.imageURL);
            _this.nativeStorage.setItem(_this.photoId, _this.imageURL).then(function () {
                _this.taken_photo = _this.imageURL;
            }, function (error) { return console.log("error"); });
            if (_this.editPhoto === 'Yes') {
                _this.navCtrl.push('SubmitphotosPage');
            }
            else {
                _this.nativeStorage.getItem('numOfPhotosTobetaken').then(function (num) {
                    if (num == 1) {
                        _this.navCtrl.push('SubmitphotosPage');
                    }
                    else {
                        _this.nativeStorage.setItem('numOfPhotosTobetaken', num - 1);
                        _this.navCtrl.push('AllphotosPage', { 'photoId': _this.photoId });
                    }
                }), function (e) {
                    console.log(e);
                };
            }
        }, function (err) {
            console.log(err);
        });
    };
    TakeaphotoPage.prototype.accessGallery = function () {
        var _this = this;
        this.camera.getPicture({
            sourceType: this.camera.PictureSourceType.SAVEDPHOTOALBUM,
            destinationType: this.camera.DestinationType.DATA_URL,
            quality: 50,
            allowEdit: true,
            correctOrientation: true,
        }).then(function (imageData) {
            //this.nativeStorage.getItem('bedroom').then(data => alert(data), error=>alert("error"));
            _this.imageURL = 'data:image/jpeg;base64,' + imageData;
            _this.photos.push(_this.imageURL);
            _this.nativeStorage.setItem(_this.photoId, _this.imageURL).then(function () {
                _this.taken_photo = _this.imageURL;
            }, function (error) { return console.log("error"); });
            if (_this.editPhoto === 'Yes') {
                _this.navCtrl.push('SubmitphotosPage');
            }
            else {
                _this.nativeStorage.getItem('numOfPhotosTobetaken').then(function (num) {
                    if (num == 1) {
                        _this.navCtrl.push('SubmitphotosPage');
                    }
                    else {
                        _this.nativeStorage.setItem('numOfPhotosTobetaken', num - 1);
                        _this.navCtrl.push('AllphotosPage', { 'photoId': _this.photoId });
                    }
                }), function (e) {
                    console.log(e);
                };
            }
        }, function (err) {
            console.log(err);
        });
    };
    TakeaphotoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-takeaphoto',template:/*ion-inline-start:"c:\ionic\ionic3-home-master\ionic3-home-master\src\pages\takeaphoto\takeaphoto.html"*/'<ion-header>\n  <ion-navbar hideBackButton color="primary">\n    <ion-title>\n     <b>Plymouth Rock</b> Home Inspector\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n  <ion-content class="all-photos-page" padding>\n    <ion-grid>\n      <ion-row class="frame-margin">\n          <div *ngIf="!taken_photo" id="frame" >\n              <div class="outline">\n               <div class="inner-border">\n                      <img style="width:70px; height: 65px;" src="assets/imgs/{{photo_thumbnail}}.png">\n              </div>   \n              </div>\n              </div> \n        <img *ngIf="taken_photo" class="taken-photo" src="{{taken_photo}}"/>\n      </ion-row>\n      <ion-row justify-content-center class="upload-btns">\n         <ion-img (click)="accessGallery()" style="width:60px; height: 60px; margin-right: 45px;" src="assets/imgs/gallery_btn.png"></ion-img>\n          <ion-img (click)="takePhoto()" style="width:65px; height: 65px;" src="assets/imgs/camera_icon.png"></ion-img>\n      </ion-row>\n    </ion-grid>\n    \n </ion-content> \n <ion-footer class="bottom-text">\n    <ion-toolbar>\n        <div><p class="title">{{title_text}}</p></div>\n        <div><p>{{tip_text}}</p></div>\n    </ion-toolbar>\n  </ion-footer>\n  \n  \n  \n  '/*ion-inline-end:"c:\ionic\ionic3-home-master\ionic3-home-master\src\pages\takeaphoto\takeaphoto.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_native_storage__["a" /* NativeStorage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], TakeaphotoPage);
    return TakeaphotoPage;
}());

//# sourceMappingURL=takeaphoto.js.map

/***/ }),

/***/ 301:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return util; });
var util = /** @class */ (function () {
    function util() {
    }
    util.getPhotoTips = function () {
        var photoTips = [
            {
                "exteriorFront": {
                    "title": "Exterior: Front Side",
                    "tip": "Shoot straight on and capture the entire front without  cropping off either side of the house"
                },
                "exteriorRight": {
                    "title": "Exterior: Right Side",
                    "tip": "Get the side of your house by standing at the front corner, making sure to get as much of the side as possible"
                },
                "exteriorLeft": {
                    "title": "Exterior: Left Side",
                    "tip": "Get the side of your house by standing at the front corner, making sure to get as much of the side as possible"
                },
                "exteriorBack": {
                    "title": "Exterior: Back Side",
                    "tip": "Get the side of your house by standing at the front corner, making sure to get as much of the side as possible"
                },
                "masterbedRoom": {
                    "title": "Master Bedroom",
                    "tip": "Pay attention to windows and the large furniture  pieces in the bedroom this is filler text"
                },
                "bedRoom2": {
                    "title": "Bedroom2",
                    "tip": "Pay attention to windows and the large furniture  pieces in the bedroom this is filler text"
                }, "bedRoom3": {
                    "title": "Bedroom3",
                    "tip": "Pay attention to windows and the large furniture  pieces in the bedroom this is filler text"
                },
                "masterbathRoom": {
                    "title": "Master Bathroom",
                    "tip": "Pay attention to windows and the large furniture  pieces in the bedroom this is filler text"
                },
                "bathRoom2": {
                    "title": "Bathroom2",
                    "tip": "Pay attention to windows and the large furniture  pieces in the bedroom this is filler text"
                },
                "bathRoom3": {
                    "title": "Bathroom3",
                    "tip": "Pay attention to windows and the large furniture  pieces in the bedroom this is filler text"
                },
                "Dog": {
                    "title": "Dog",
                    "tip": "Pay attention to windows and the large furniture  pieces in the bedroom this is filler text"
                },
                "Pool": {
                    "title": "Pool",
                    "tip": "Pay attention to windows and the large furniture  pieces in the bedroom this is filler text"
                },
                "Trampoline": {
                    "title": "Trampoline",
                    "tip": "Pay attention to windows and the large furniture  pieces in the bedroom this is filler text"
                },
                "Shed": {
                    "title": "Shed",
                    "tip": "Pay attention to windows and the large furniture  pieces in the bedroom this is filler text"
                },
                "Garage": {
                    "title": "Garage",
                    "tip": "Pay attention to windows and the large furniture  pieces in the bedroom this is filler text"
                },
                "Basement": {
                    "title": "Basement",
                    "tip": "Pay attention to windows and the large furniture  pieces in the bedroom this is filler text"
                },
                "Rental Apt": {
                    "title": "Rental Apartment",
                    "tip": "Pay attention to windows and the large furniture  pieces in the bedroom this is filler text"
                },
                "Home Business": {
                    "title": "Home Business",
                    "tip": "Pay attention to windows and the large furniture  pieces in the bedroom this is filler text"
                },
                "Oil Tank": {
                    "title": "Oil Tank",
                    "tip": "Pay attention to windows and the large furniture  pieces in the bedroom this is filler text"
                },
                "Smoke Detector": {
                    "title": "Smoke Detectors",
                    "tip": "Pay attention to windows and the large furniture  pieces in the bedroom this is filler text"
                },
                "Security System": {
                    "title": "Smoke Detectors",
                    "tip": "Pay attention to windows and the large furniture  pieces in the bedroom this is filler text"
                },
                "Wood Stove": {
                    "title": "Wood Stove",
                    "tip": "Pay attention to windows and the large furniture  pieces in the bedroom this is filler text"
                }
            }
        ];
        return photoTips;
    };
    return util;
}());

//# sourceMappingURL=util.js.map

/***/ })

});
//# sourceMappingURL=0.js.map