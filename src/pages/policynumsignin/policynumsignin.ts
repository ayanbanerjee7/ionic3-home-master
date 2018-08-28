import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {LoginProvider} from'../../providers/login/login';
import { NativeStorage } from '@ionic-native/native-storage';
import { LoadingController } from 'ionic-angular';
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
 errorMsg;
  constructor(public loadingCtrl: LoadingController, public nativeStorage: NativeStorage, public loginService:LoginProvider,public navCtrl: NavController, public navParams: NavParams) {
  }

  loginWithPersonalInfo(){
    this.navCtrl.popToRoot();
   }
   login(fval, fvalid){
     console.log(fval);
     this.errorMsg='';
      if(fvalid) {
        let loading = this.loadingCtrl.create({
          content: 'Logging In...'
        });
       loading.present();

      this.nativeStorage.clear();
       var obj={
        "policyNumber":fval.policyNumber,
        "zipCode": fval.zip
       }
      this.loginService.login(obj).subscribe(
           result => {
            loading.dismiss();
             if (result.token) {
             console.log(result.token);
             this.nativeStorage.setItem('zipCode', fval.zip);
             this.nativeStorage.setItem('policyNumber',fval.policyNumber);
             this.nativeStorage.setItem('token',result.token);
              this.navCtrl.push('IntroPage');
           }else {
            this.errorMsg='Error: Logging In!'
           }
           },
           (error) => {
            loading.dismiss();
            this.errorMsg='Error: Logging In!'
             console.log("Error...." + error);
           }
         );
       
     }
    
  }

}
