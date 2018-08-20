import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NativeStorage } from '@ionic-native/native-storage';
import  {SubmitphotosProvider} from '../../providers/submitphotos/submitphotos';

@IonicPage()
@Component({
  selector: 'page-submitphotos',
  templateUrl: 'submitphotos.html',
})
export class SubmitphotosPage {
 
  
  constructor(public submitphotos:SubmitphotosProvider, public navCtrl: NavController, public navParams: NavParams,public nativeStorage: NativeStorage) {
  }
  images= [];
  keys=[];
  imagesObj={};
  noOfBedRooms='';
  noOfBathRooms='';
  primaryHeatSource='';
  otherHomeProperties=[];

  ngOnInit() {
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
          if(k=='primaryHeatSource'){
            this.primaryHeatSource=data;
          }
          if(k=='otherHomeProperties'){
            this.otherHomeProperties=data;
          }
        })
      ));
    }), e=>{
      console.log(e);
    }

     this.nativeStorage.keys().then((keys) => {
      return Promise.all(keys.map(k => 
        this.nativeStorage.getItem(k).then(data=>
        {
        if (k.match(/^(noOfBedRooms|noOfBathRooms|primaryHeatSource|otherHomeProperties)$/)) {
            // do nothing
        } else {
          // this includes logic needs to be improved added this to avoid IOS default native data 
          if(data.includes('data:image/jpeg;base64')) {
            this.imagesObj={
              'key':k,
              'imagedata': data
              }
              this.images.push(this.imagesObj);
          }
          
        }
          })
      ));
    }), e=>{
      console.log(e);
    }
    
  }
  
  
  editPhoto(k){
    this.navCtrl.push('TakeaphotoPage',{'photoId':k,'editPhoto':'Yes'});
    
  }
  
  submitPhotos(){
    var finalObj={
      "policyNumber": "PRA000022332",
      "zip": "02169",
      "dob": "08/08/2000",
      "homeData": {
        "noOfBedRooms":this.noOfBedRooms,
        "noOfBathRooms": this.noOfBathRooms,
       "primaryHeatSource":this.primaryHeatSource,
       "otherHomeProperties":this.otherHomeProperties,
       "homeImages": this.images
      }
    };
   console.log(finalObj);
  //  //submit photo service
  //  this.submitphotos.submitPhotos(finalObj).subscribe(
  //   result => {
  //     if (result) {
       
  //     }
  //   },
  //   (error) => {
  //     console.log("Error...." + error);
  //   }
  // );
    this.navCtrl.push('ThankyouPage');
  // this.nativeStorage.clear();
  }
}
