import { Component } from '@angular/core';
import { NavController} from 'ionic-angular';
import { DatePicker } from '@ionic-native/date-picker';
import { Keyboard } from '@ionic-native/keyboard';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  today : any;

  constructor(public navCtrl: NavController,public datePicker: DatePicker,public keyboard : Keyboard, ) {
    
  }
  ngOnInit(){
    this.today="mm/dd/yyyy";
  }
  loginWithPolicyNumber(){
    this.navCtrl.push('PolicynumsigninPage')
   
   }

  login(){
    this.navCtrl.push('IntroPage') 
  }
  openDatepicker(){
    this.keyboard.close();
    this.datePicker.show({
      date: new Date(),
      mode: 'date',
      androidTheme: this.datePicker.ANDROID_THEMES.THEME_HOLO_LIGHT
    }).then(
      date => {
        this.today=date.getDate()+'/'+date.getMonth()+'/'+date.getFullYear()},
      err => console.log('Error occurred while getting date: ', err)
    );
  }
}

 
 


