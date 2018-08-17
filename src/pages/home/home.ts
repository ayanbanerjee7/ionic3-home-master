import { Component } from '@angular/core';
import { NavController} from 'ionic-angular';
import { DatePicker } from '@ionic-native/date-picker';
import { Keyboard } from '@ionic-native/keyboard';
import { NativeStorage } from '@ionic-native/native-storage';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  policyObj={dob:"", zip:"",lastName:""};
  dobvalidation;

  constructor(public nativeStorage: NativeStorage,public navCtrl: NavController,public datePicker: DatePicker,public keyboard : Keyboard, ) {
    
  }
  ngOnInit(){
  this.dobvalidation=false;

  }

  loginWithPolicyNumber(){
    this.navCtrl.push('PolicynumsigninPage');
   
   }

  login(fval, fvalid){
    
    if(this.policyObj.dob=='') {
      this.dobvalidation=true;
    } else {
      this.dobvalidation=false;
    }
   if(fvalid) {
    console.log(this.policyObj);
    this.nativeStorage.clear();
    this.navCtrl.push('IntroPage');
   }
  }
  
  openDatepicker(){
    this.dobvalidation=false;
    this.keyboard.close();
    this.datePicker.show({
      date: new Date(),
      mode: 'date',
      androidTheme: this.datePicker.ANDROID_THEMES.THEME_HOLO_LIGHT
    }).then(
      date => {
        this.policyObj.dob=date.getDate()+'/'+date.getMonth()+'/'+date.getFullYear()},
      err => console.log('Error occurred while getting date: ', err)
    );
  }
}

 
 


