import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NativeStorage } from '@ionic-native/native-storage';
import  {SubmitphotosProvider} from '../../providers/submitphotos/submitphotos';
import { LoadingController } from 'ionic-angular';
@IonicPage()
@Component({
  selector: 'page-submitphotos',
  templateUrl: 'submitphotos.html',
})
export class SubmitphotosPage {
 
  
  constructor(public loadingCtrl: LoadingController,public submitphotos:SubmitphotosProvider, public navCtrl: NavController, public navParams: NavParams,public nativeStorage: NativeStorage) {
  }
  images= [];
  keys=[];
  imagesObj={};
  noOfBedRooms='';
  noOfBathRooms='';
  primaryHeatSource='';
  otherHomeProperties=[];
  token;
  policyNumber;
  zipCode;
  uploadErrorMsg;
  
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
          if(k=='token'){
            this.token=data;
          }
          if(k=='policyNumber'){
            this.policyNumber=data;
          }
          if(k=='zipCode'){
            this.zipCode=data;
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
        if (k.match(/^(noOfBedRooms|noOfBathRooms|primaryHeatSource|otherHomeProperties|zipCode|policyNumber|token)$/)) {
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
  
  uploadPhotos(){
    this.uploadErrorMsg='';
    let loading = this.loadingCtrl.create({
      content: 'Uploading photos.....'
    });
  
    loading.present();
    var finalObj={
      "policyNumber": this.policyNumber,
      "zip": this.zipCode,
      "dob": "08/08/2000",
      "homeData": {
        "noOfBedRooms":this.noOfBedRooms,
        "noOfBathRooms": this.noOfBathRooms,
       "primaryHeatSource":['Boiler'],
       "otherHomeProperties":['dog'],
       "homeImages": this.images
      }
    };
   console.log(finalObj);
   //submit photo service
   this.submitphotos.submitPhotos(this.token,finalObj).subscribe(
    result => {
      loading.dismiss();
      if (result.error) {
       this.uploadErrorMsg='Error Submiting Images!'; 
      } else {
        this.navCtrl.push('ThankyouPage');
        this.nativeStorage.clear();
      }
    },
    (error) => {
      loading.dismiss();
      this.uploadErrorMsg='Error Submiting Images!';
      console.log("Error...." + error);
    }
  );
   
  //
  }
}
