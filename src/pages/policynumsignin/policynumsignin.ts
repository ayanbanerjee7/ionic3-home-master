import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PolicynumsigninPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-policynumsignin',
  templateUrl: 'policynumsignin.html',
})
export class PolicynumsigninPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  loginWithPersonalInfo(){
    this.navCtrl.popToRoot();
   }
   login(fval, fvalid){
     console.log(fval);
     if(fvalid) {
      this.navCtrl.push('BasicinfoPage') 
     }
    
  }

}
