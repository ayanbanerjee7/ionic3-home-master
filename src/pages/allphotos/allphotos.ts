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
  photoId=null;
  photosTaken={
    show_masterbedRoom:true,
    show_bedRoom2:true,
    show_bedRoom3:true,
    show_masterbathRoom:true,
    show_bathRoom2:true,
    show_bathRoom3:true,
    show_exteriorFront:true,
    show_exteriorRight:true,
    show_exteriorLeft:true
  }
 almostdone_text;
  constructor(public nativeStorage: NativeStorage,public navCtrl: NavController, public navParams: NavParams) {
    this.photoId = this.navParams.get('photoId');
  }
  ngOnInit(){
    
    if(this.photoId){
      this.photosTaken['show_'+this.photoId]=true;
      setTimeout(()=>{    
        this.photosTaken['show_'+this.photoId]=false;
   }, 1000);
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
          if(k=='exteriorFront'&& this.photoId !=='exteriorFront'){
          this.photosTaken.show_exteriorFront=false;
          }
          if(k=='exteriorRight'&& this.photoId !=='exteriorRight'){
            this.photosTaken.show_exteriorRight=false;
          }
          if(k=='exteriorLeft'&& this.photoId !=='exteriorLeft'){
            this.photosTaken.show_exteriorLeft=false;
          }
          if(k=='masterbedRoom' && this.photoId !=='masterbedRoom'){
            this.photosTaken.show_masterbedRoom=false;
          }
          if(k=='bedRoom2' && this.photoId !=='bedRoom2'){
            this.photosTaken.show_bedRoom2=false;
          }
          if(k=='bedRoom3' && this.photoId !=='bedRoom3'){
            this.photosTaken.show_bedRoom3=false;
          }
          if(k=='masterbathRoom' && this.photoId !=='masterbathRoom'){
            this.photosTaken.show_masterbathRoom=false;
          }
          if(k=='bathRoom2' && this.photoId !=='bathRoom2'){
            this.photosTaken.show_bathRoom2=false;
          }
          if(k=='bathRoom3' && this.photoId !=='bathRoom3'){
            this.photosTaken.show_bathRoom3=false;
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
