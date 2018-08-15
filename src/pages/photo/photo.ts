import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { NativeStorage } from '@ionic-native/native-storage';

/**
 * Generated class for the PhotoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-photo',
  templateUrl: 'photo.html',
})
export class PhotoPage {

  photoId = null;

  constructor(public navCtrl: NavController, public camera: Camera, public nativeStorage: NativeStorage, public navParams: NavParams) {
   
    this.photoId = this.navParams.get('photoId');
    //alert(this.photoId);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PhotoPage');
  }

  
  imageURL:string;
  photos: any;

  options : CameraOptions = {
    quality:50,
    destinationType:this.camera.DestinationType.DATA_URL,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType:this.camera.MediaType.PICTURE
  }

  ngOnInit(){
    this.photos = [];
  }

  takePhoto(){
    this.camera.getPicture(this.options).then((imageData) => {
      this.imageURL = 'data:image/jpeg;base64,'+imageData;
      this.photos.push(this.imageURL);

      this.nativeStorage.setItem(this.photoId,this.imageURL).then(() => alert("done"), error=>alert("error"));

      //let m = encodeURIComponent(this.imageURL).match(/%[89ABab]/g);
      //let size = this.imageURL.length + (m ? m.length : 0);

      //alert(this.imageURL);
      
      this.photos.reverse();
    }, (err) => {
       console.log(err);
    });
  }

  accessGallery(){
    this.camera.getPicture({
      sourceType: this.camera.PictureSourceType.SAVEDPHOTOALBUM,
      destinationType: this.camera.DestinationType.DATA_URL,
      quality:20
     }).then((imageData) => {
      //this.nativeStorage.getItem('bedroom').then(data => alert(data), error=>alert("error"));
       this.imageURL = 'data:image/jpeg;base64,'+imageData;
       this.nativeStorage.setItem(this.photoId,this.imageURL).then(() => alert("done"), error=>alert("error"));
       let m = encodeURIComponent(this.imageURL).match(/%[89ABab]/g);
      let size = this.imageURL.length + (m ? m.length : 0);

      alert(size / 1000);
      }, (err) => {
       console.log(err);
     });
   }

}