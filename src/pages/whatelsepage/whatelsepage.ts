import { Component,ViewChild  } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { NativeStorage } from '@ionic-native/native-storage';
import { Content } from 'ionic-angular';
@IonicPage()
@Component({
  selector: 'page-whatelsepage',
  templateUrl: 'whatelsepage.html',
})
export class WhatelsepagePage {
  @ViewChild(Content) content: Content;
  checkboxObj={
    dog:false,
    pool:false,
    trampoline:false,
    shed:false,
    garage:false,
    basement:false,
    rentalApt:false,
    homeBusiness:false,
    oilTank:false,
    securitySys:false,
    smokeDetect:false,
    woodStove:false

  }
  errorMsg;
  constructor(public nativeStorage: NativeStorage,private alertCtrl: AlertController,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WhatelsepagePage');
  }
  
  goToNext(){
    this.navCtrl.push("AllphotosPage");
  }
  selectCheckbox(event){
    if(this.checkboxObj[event]){
      this.checkboxObj[event]=false;
    } else {
      this.checkboxObj[event]=true;
    }
  
    }
   
    whatElseItems(f){
      console.log(f);
      if(Object.keys(f).length== 0){
        let alert = this.alertCtrl.create({
          title: 'You have not selected any items',
          subTitle: 'Wish to Continue ?',
          buttons: [{
            text: 'Cancel',
            role: 'cancel',
            handler: () => {
              console.log('Retake clicked');
            }
          },
          {
            text: 'Confirm',
            handler: () => {
              this.navCtrl.push('AllphotosPage');
             }
          }]
        });
        alert.present();
      }
     if(Object.keys(f).length > 0){
       
       if(this.checkboxObj.homeBusiness=true) {
         console.log("**************here****");
         if(f.whatkindofBusiness=="") {
          this.content.scrollToTop();
          this.errorMsg='Please specify about the Home Business!';
         } else {
          this.nativeStorage.setItem('otherHomeProperties',f);
          this.navCtrl.push('AllphotosPage',{'photoId':'firstlanding'});
         
          
         }
       } else{
        this.nativeStorage.setItem('otherHomeProperties',f);
        this.navCtrl.push('AllphotosPage',{'photoId':'firstlanding'}); 
       }
      
      }
    }
}
