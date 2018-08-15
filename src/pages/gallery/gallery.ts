import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NativeStorage } from '@ionic-native/native-storage';

/**
 * Generated class for the GalleryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-gallery',
  templateUrl: 'gallery.html',
})
export class GalleryPage {

  
  ionViewDidLoad() {
    console.log('ionViewDidLoad GalleryPage');
  }

  bedroomImage : string;
  outsideImage : string;
  diningImage : string;

  constructor(public navCtrl: NavController, public navParams: NavParams,public nativeStorage: NativeStorage) {
     this.nativeStorage.getItem('bedroom').then(data => this.bedroomImage = data, error=>alert("error bedroom"));
     this.nativeStorage.getItem('outside').then(data => this.outsideImage = data, error=>alert("error outside"));
     this.nativeStorage.getItem('dining').then(data => this.diningImage = data, error=>alert("error dining"));

  }

  

}
