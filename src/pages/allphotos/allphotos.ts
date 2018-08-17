import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NativeStorage } from '@ionic-native/native-storage';
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
  noOfBedRooms;
  noOfBathRooms;
  masterBed;
  bedRoom2;
  bedRoom3;
  masterBath;
  bathRoom2;
  bathRoom3;
  masterBed_photo_taken=true;
  bedRoom2_photo_taken=true;
  bedRoom3_photo_taken=true;
  masterBath_photo_taken=true;
  bathRoom2_photo_taken=true;
  bathRoom3_photo_taken=true;
  show_exteriorFront=true;
  show_exteriorRight=true;
  show_exteriorLeft=true;
  constructor(public nativeStorage: NativeStorage,public navCtrl: NavController, public navParams: NavParams) {
   
  }
  ngOnInit(){
    this.nativeStorage.keys().then((keys) => {
      return Promise.all(keys.map(k => 
        this.nativeStorage.getItem(k).then(data=>
        { 
          if(k=='noOfBedRooms'){
            this.noOfBedRooms=data;
          }
          if(k=='noOfBathRooms'){
            this.noOfBathRooms=data;
          }
          if(k=='exteriorFront'){
            this.show_exteriorFront=false;
          }
          if(k=='exteriorRight'){
            this.show_exteriorRight=false;
          }
          if(k=='exteriorLeft'){
            this.show_exteriorLeft=false;
          }
          if(k=='masterbedRoom'){
            this.masterBed_photo_taken=false;
          }
          if(k=='bedRoom2'){
            this.bedRoom2_photo_taken=false;
          }
          if(k=='bedRoom3'){
            this.bedRoom3_photo_taken=false;
          }
          if(k=='masterbathRoom'){
            this.masterBath_photo_taken=false;
          }
          if(k=='bathRoom2'){
            this.bathRoom2_photo_taken=false;
          }
          if(k=='bathRoom3'){
            this.bathRoom3_photo_taken=false;
          }

          if(this.noOfBedRooms>2){
            this.masterBed=true;
            this.bedRoom2=true;
            this.bedRoom3=true;
           }
           if(this.noOfBedRooms==2){
            this.masterBed=true;
            this.bedRoom2=true;
           
           }
           if(this.noOfBedRooms==1){
            this.masterBed=true;
           
           }
           if(this.noOfBathRooms>2){
            this.masterBath=true;
            this.bathRoom2=true;
            this.bathRoom3=true;
           }
           if(this.noOfBathRooms==2){
            this.masterBath=true;
            this.bathRoom2=true;
           
           }
           if(this.noOfBathRooms==1){
            this.masterBath=true;
            }
        })
      ));
    }), e=>{
      console.log(e);
    }
   
    
  }

  takePhoto(page){
    this.navCtrl.push('TakeaphotoPage',{'photoId':page})
  }
  goToNext(){
    this.navCtrl.push('SubmitphotosPage')
  }
  
}
