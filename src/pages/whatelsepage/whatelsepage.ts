import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the WhatelsepagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-whatelsepage',
  templateUrl: 'whatelsepage.html',
})
export class WhatelsepagePage {
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
  constructor(public navCtrl: NavController, public navParams: NavParams) {
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
}
