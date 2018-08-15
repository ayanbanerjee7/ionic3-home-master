import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NativeStorage } from '@ionic-native/native-storage';

/**
 * Generated class for the SubmitphotosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-submitphotos',
  templateUrl: 'submitphotos.html',
})
export class SubmitphotosPage {
 
  
  constructor(public navCtrl: NavController, public navParams: NavParams,public nativeStorage: NativeStorage) {
  }
  images= [];
  keys=[];
  imagesObj={}
  ngOnInit() {
  this.nativeStorage.keys().then((keys) => {
      return Promise.all(keys.map(k => 
        this.nativeStorage.getItem(k).then(data=>
        { this.imagesObj={'key':k,
                           'imgurl': data }
          this.images.push(this.imagesObj);
        })
      ));
    }), e=>{
      console.log(e);
    }
    
  }
  
  
  editPhoto(k){
    this.navCtrl.push('TakeaphotoPage',{'photoId':k});
    
  }
  
  submitPhotos(){
    this.navCtrl.push('ThankyouPage');
    this.nativeStorage.clear();
  }
}
