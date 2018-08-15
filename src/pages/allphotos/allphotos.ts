import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AllphotosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-allphotos',
  templateUrl: 'allphotos.html',
})
export class AllphotosPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }


  takePhoto(page){
    this.navCtrl.push('TakeaphotoPage',{'photoId':page})
  }
  goToNext(){
    this.navCtrl.push('SubmitphotosPage')
  }
}
