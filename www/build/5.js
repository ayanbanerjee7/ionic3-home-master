webpackJsonp([5],{

/***/ 286:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhotoPageModule", function() { return PhotoPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__photo__ = __webpack_require__(296);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PhotoPageModule = /** @class */ (function () {
    function PhotoPageModule() {
    }
    PhotoPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__photo__["a" /* PhotoPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__photo__["a" /* PhotoPage */]),
            ],
        })
    ], PhotoPageModule);
    return PhotoPageModule;
}());

//# sourceMappingURL=photo.module.js.map

/***/ }),

/***/ 296:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PhotoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_native_storage__ = __webpack_require__(101);
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
 * Generated class for the PhotoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PhotoPage = /** @class */ (function () {
    function PhotoPage(navCtrl, camera, nativeStorage, navParams) {
        this.navCtrl = navCtrl;
        this.camera = camera;
        this.nativeStorage = nativeStorage;
        this.navParams = navParams;
        this.photoId = null;
        this.options = {
            quality: 50,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
        };
        this.photoId = this.navParams.get('photoId');
        //alert(this.photoId);
    }
    PhotoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PhotoPage');
    };
    PhotoPage.prototype.ngOnInit = function () {
        this.photos = [];
    };
    PhotoPage.prototype.takePhoto = function () {
        var _this = this;
        this.camera.getPicture(this.options).then(function (imageData) {
            _this.imageURL = 'data:image/jpeg;base64,' + imageData;
            _this.photos.push(_this.imageURL);
            _this.nativeStorage.setItem(_this.photoId, _this.imageURL).then(function () { return alert("done"); }, function (error) { return alert("error"); });
            //let m = encodeURIComponent(this.imageURL).match(/%[89ABab]/g);
            //let size = this.imageURL.length + (m ? m.length : 0);
            //alert(this.imageURL);
            _this.photos.reverse();
        }, function (err) {
            console.log(err);
        });
    };
    PhotoPage.prototype.accessGallery = function () {
        var _this = this;
        this.camera.getPicture({
            sourceType: this.camera.PictureSourceType.SAVEDPHOTOALBUM,
            destinationType: this.camera.DestinationType.DATA_URL,
            quality: 20
        }).then(function (imageData) {
            //this.nativeStorage.getItem('bedroom').then(data => alert(data), error=>alert("error"));
            _this.imageURL = 'data:image/jpeg;base64,' + imageData;
            _this.nativeStorage.setItem(_this.photoId, _this.imageURL).then(function () { return alert("done"); }, function (error) { return alert("error"); });
            var m = encodeURIComponent(_this.imageURL).match(/%[89ABab]/g);
            var size = _this.imageURL.length + (m ? m.length : 0);
            alert(size / 1000);
        }, function (err) {
            console.log(err);
        });
    };
    PhotoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-photo',template:/*ion-inline-start:"c:\ionic\ionic3-home-master\ionic3-home-master\src\pages\photo\photo.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>\n      Plymouth Rock Home Inspector\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <button ion-button color="dark" (click)="takePhoto()"> Take Photo</button>\n  <button ion-button color="primary" (click)="accessGallery()"> Access Gallery</button>\n  <img [src]="imageURL" *ngIf="imageURL" />\n</ion-content>\n'/*ion-inline-end:"c:\ionic\ionic3-home-master\ionic3-home-master\src\pages\photo\photo.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_native_storage__["a" /* NativeStorage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], PhotoPage);
    return PhotoPage;
}());

//# sourceMappingURL=photo.js.map

/***/ })

});
//# sourceMappingURL=5.js.map