webpackJsonp([9],{

/***/ 282:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllphotosPageModule", function() { return AllphotosPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__allphotos__ = __webpack_require__(292);
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

/***/ 292:
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
        this.photoId = null;
        this.photosTaken = {
            show_masterbedRoom: true,
            show_bedRoom2: true,
            show_bedRoom3: true,
            show_masterbathRoom: true,
            show_bathRoom2: true,
            show_bathRoom3: true,
            show_exteriorFront: true,
            show_exteriorRight: true,
            show_exteriorLeft: true
        };
        this.photoId = this.navParams.get('photoId');
    }
    AllphotosPage.prototype.ngOnInit = function () {
        var _this = this;
        if (this.photoId) {
            this.photosTaken['show_' + this.photoId] = true;
            setTimeout(function () {
                _this.photosTaken['show_' + _this.photoId] = false;
            }, 1000);
        }
        this.nativeStorage.keys().then(function (keys) {
            return Promise.all(keys.map(function (k) {
                return _this.nativeStorage.getItem(k).then(function (data) {
                    if (k == 'noOfBedRooms') {
                        _this.noOfBedRooms = data;
                    }
                    if (k == 'noOfBathRooms') {
                        _this.noOfBathRooms = data;
                    }
                    if (k == 'exteriorFront' && _this.photoId !== 'exteriorFront') {
                        _this.photosTaken.show_exteriorFront = false;
                    }
                    if (k == 'exteriorRight' && _this.photoId !== 'exteriorRight') {
                        _this.photosTaken.show_exteriorRight = false;
                    }
                    if (k == 'exteriorLeft' && _this.photoId !== 'exteriorLeft') {
                        _this.photosTaken.show_exteriorLeft = false;
                    }
                    if (k == 'masterbedRoom' && _this.photoId !== 'masterbedRoom') {
                        _this.photosTaken.show_masterbedRoom = false;
                    }
                    if (k == 'bedRoom2' && _this.photoId !== 'bedRoom2') {
                        _this.photosTaken.show_bedRoom2 = false;
                    }
                    if (k == 'bedRoom3' && _this.photoId !== 'bedRoom3') {
                        _this.photosTaken.show_bedRoom3 = false;
                    }
                    if (k == 'masterbathRoom' && _this.photoId !== 'masterbathRoom') {
                        _this.photosTaken.show_masterbathRoom = false;
                    }
                    if (k == 'bathRoom2' && _this.photoId !== 'bathRoom2') {
                        _this.photosTaken.show_bathRoom2 = false;
                    }
                    if (k == 'bathRoom3' && _this.photoId !== 'bathRoom3') {
                        _this.photosTaken.show_bathRoom3 = false;
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
        var len = Object.keys(this.photosTaken).length;
        var count = 0;
        for (var k in this.photosTaken) {
            if (this.photosTaken[k] == false) {
                count++;
            }
        }
        console.log('***************' + count);
        if (count === len - 1) {
            this.almostdone_text = 'Almost finished, just one photo left!';
        }
    };
    AllphotosPage.prototype.takePhoto = function (page) {
        this.navCtrl.push('TakeaphotoPage', { 'photoId': page });
    };
    AllphotosPage.prototype.goToNext = function () {
        this.navCtrl.push('SubmitphotosPage');
    };
    AllphotosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-allphotos',template:/*ion-inline-start:"c:\ionic\ionic3-home-master\ionic3-home-master\src\pages\allphotos\allphotos.html"*/'<ion-header>\n  <ion-navbar hideBackButton color="primary">\n    <ion-title>\n     <b>Plymouth Rock</b> Home Inspector\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="all-photos-page" padding>\n  <ion-grid>\n    <ion-row>\n      <ion-col col-12>\n    <p *ngIf="!almostdone_text">These are the photos needed for your policy, tap to get started</p>\n    <p *ngIf="almostdone_text">{{almostdone_text}}</p> \n  </ion-col>\n  </ion-row>\n  <span class="exterior">\n  <ion-row>\n  <ion-col  *ngIf="photosTaken.show_exteriorFront" col-5>\n   <div (click)="takePhoto(\'exteriorFront\')">Exterior: Front</div>\n  </ion-col>\n  <ion-col  *ngIf="photosTaken.show_exteriorRight" col-7>\n      <div (click)="takePhoto(\'exteriorRight\')">Exterior: Right Side</div>  \n     </ion-col>\n  </ion-row>\n  <ion-row >\n      <ion-col  *ngIf="photosTaken.show_exteriorLeft" col-7>\n       <div (click)="takePhoto(\'exteriorLeft\')">Exterior: Left Side</div>\n      </ion-col>\n      <ion-col col-5>\n          <!-- <div>Exterior: Back</div>   -->\n         </ion-col>\n      </ion-row>\n      <!-- <ion-row>\n          <ion-col col-3>\n           <div>Shed</div>\n          </ion-col>\n          <ion-col col-6>\n              <div>Trampoline</div>  \n             </ion-col>\n             <ion-col col-3>\n                <div>Pool</div>  \n               </ion-col>\n          </ion-row> -->\n  </span>\n  <span class="exterior interior">\n      <!-- <ion-row>\n      <ion-col col-4>\n       <div>Kitchen</div>\n      </ion-col>\n      <ion-col col-6>\n          <div>Livingroom</div>  \n         </ion-col>\n      </ion-row> -->\n      <ion-row >\n          <ion-col *ngIf="masterBath && photosTaken.show_masterbathRoom" col-4>\n           <div (click)="takePhoto(\'masterbathRoom\')" >Master Bath</div>\n          </ion-col>\n          <ion-col *ngIf="bathRoom2 && photosTaken.show_bathRoom2" col-4>\n              <div (click)="takePhoto(\'bathRoom2\')" >Bath two</div>  \n             </ion-col>\n             <ion-col *ngIf="bathRoom3 && photosTaken.show_bathRoom3" col-4>\n                <div (click)="takePhoto(\'bathRoom3\')">Bath Three</div>  \n               </ion-col>\n          </ion-row>\n          <ion-row >\n              <!-- <ion-col col-5>\n               <div>Family Room</div>\n              </ion-col> -->\n              <ion-col *ngIf="masterBed && photosTaken.show_masterbedRoom" col-7>\n                  <div (click)="takePhoto(\'masterbedRoom\')">Master Bedroom</div>  \n                 </ion-col>\n                </ion-row>\n                <ion-row>\n                    <ion-col  *ngIf="bedRoom2 && photosTaken.show_bedRoom2" col-5>\n                     <div (click)="takePhoto(\'bedRoom2\')">Bedroom Two</div>\n                    </ion-col>\n                    <ion-col *ngIf="bedRoom3 && photosTaken.show_bedRoom3"  col-7>\n                        <div (click)="takePhoto(\'bedRoom3\')">Bedroom Three</div>  \n                       </ion-col>\n                      </ion-row>\n      </span>\n      <a (click)="goToNext()">Go to submit</a>\n  </ion-grid>\n  </ion-content>\n'/*ion-inline-end:"c:\ionic\ionic3-home-master\ionic3-home-master\src\pages\allphotos\allphotos.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_native_native_storage__["a" /* NativeStorage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], AllphotosPage);
    return AllphotosPage;
}());

//# sourceMappingURL=allphotos.js.map

/***/ })

});
//# sourceMappingURL=9.js.map