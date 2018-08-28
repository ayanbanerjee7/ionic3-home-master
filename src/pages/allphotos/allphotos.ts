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
  noOfBedRooms=0;
  noOfBathRooms=0;
  masterBed;
  bedRoom2;
  bedRoom3;
  masterBath;
  bathRoom2;
  bathRoom3;
  photoId=null;
  lastPhototext;
  minExteriorPhotos=4;
 
  otherHomeProperties=[];
  photosTaken={
    show_masterbedRoom:true,
    show_bedRoom2:true,
    show_bedRoom3:true,
    show_masterbathRoom:true,
    show_bathRoom2:true,
    show_bathRoom3:true,
    show_exteriorFront:true,
    show_exteriorRight:true,
    show_exteriorLeft:true,
    show_exteriorBack:true
    
  }
 almostdone_text;
  constructor(public nativeStorage: NativeStorage,public navCtrl: NavController, public navParams: NavParams) {
    this.photoId = this.navParams.get('photoId');
  }
  ngOnInit(){
    var count=0;
    if(this.photoId){
      this.photosTaken['show_'+this.photoId]=true;
      setTimeout(()=>{    
        this.photosTaken['show_'+this.photoId]=false;
   }, 1000);
    }
    this.nativeStorage.getItem('otherHomeProperties').then(data=>{
      var keys = Object.keys(data);
      for(var i = keys.length - 1; i >= 0; i--) {
        if(keys[i] === 'whatkindofBusiness') {
          keys.splice(i, 1);
           }
       }
      this.otherHomeProperties=keys;
      }), e=>{
      console.log(e);
    }

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
          if(k=='numOfPhotosTobetaken'){
            if(data==1){
              this.lastPhototext='Almost finished, just one photo left!';
            }
            
          }

          if(this.photoId !==k){
            this.photosTaken['show_'+k]=false;
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
            if(this.photoId=='firstlanding') {
              var numOfPhotosTobetaken=this.minExteriorPhotos+this.noOfBathRooms+this.noOfBedRooms+this.otherHomeProperties.length;
              this.nativeStorage.setItem('numOfPhotosTobetaken',numOfPhotosTobetaken);
             console.log(numOfPhotosTobetaken);
            }
            var array=this.otherHomeProperties;
            for(var i = array.length - 1; i >= 0; i--) {
            if(array[i] === k) {
             array.splice(i, 1);
    }
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
