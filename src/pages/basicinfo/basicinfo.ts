import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NativeStorage } from '@ionic-native/native-storage';
/**
 * Generated class for the BasicinfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-basicinfo',
  templateUrl: 'basicinfo.html',
})
export class BasicinfoPage {
  max_bednum=3;
  display_bednum=1;
  max_bathnum=3;
  display_bathnum=1;
  checkboxObj={
    heatPump:false,
    furnace:false,
    boiler:false,
    wood:false,
    electricBase:false,
    other:false,
  }
  errorMsg;
  constructor(public nativeStorage: NativeStorage,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BasicinfoPage');
  }
  incrase_bednum(){
    if(this.display_bednum ===this.max_bednum) {
       
    } else {
      this.display_bednum=this.display_bednum+1;
    }
   
  }
  decrease_bednum(){
    if(this.display_bednum >1) {
      this.display_bednum=this.display_bednum-1;
    }
  }
  incrase_bathnum(){
    if(this.display_bathnum ===this.max_bathnum) {
       
    } else {
      this.display_bathnum=this.display_bathnum+1;
    }
   
  }
  decrease_bathnum(){
    if(this.display_bathnum >1) {
      this.display_bathnum=this.display_bathnum-1;
    }
  }
  
  selectCheckbox(event){
  if(this.checkboxObj[event]){
    this.checkboxObj[event]=false;
  } else {
    this.checkboxObj[event]=true;
  }

  }
  heatSource(f){
    console.log(f);
    if(Object.keys(f).length == 0){
      this.errorMsg='Please select source of Heat';
    }
    if(Object.keys(f).length >1){
      this.errorMsg='Please select only one source of Heat';
    }
    if(Object.keys(f).length == 1){
      this.errorMsg='';
      this.nativeStorage.setItem('noOfBedRooms',this.display_bednum);
      this.nativeStorage.setItem('noOfBathRooms',this.display_bathnum);
      this.nativeStorage.setItem('primaryHeatSource',f);
      this.navCtrl.push('WhatelsepagePage') 
    }
  }
}
