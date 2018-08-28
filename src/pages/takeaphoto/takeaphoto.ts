import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { NativeStorage } from '@ionic-native/native-storage';
import {util} from '../../utils/util';
import { AlertController } from 'ionic-angular';
/**
 * Generated class for the TakeaphotoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-takeaphoto',
  templateUrl: 'takeaphoto.html',
})
export class TakeaphotoPage {
  title_text;
  tip_text;
  photo_type;
  photo_thumbnail;
  photoId = null;
  editPhoto;
  taken_photo :string;
    constructor(public navCtrl: NavController, public camera: Camera, public nativeStorage: NativeStorage, public navParams: NavParams,private alertCtrl: AlertController) {
     
      this.photoId = this.navParams.get('photoId');
      this.editPhoto=this.navParams.get('editPhoto');
      //alert(this.photoId);
    }
  
   
  
    
    imageURL:string;
    photos: any;
    
    options : CameraOptions = {
      quality:50,
      allowEdit: true,
      correctOrientation: true,
      destinationType:this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType:this.camera.MediaType.PICTURE,
      
    }
  
    ngOnInit(){
      this.photos = [];
      this.photo_type = this.navParams.get('photoId');
      var tips= JSON.stringify(util.getPhotoTips());
     var tipsJson=JSON.parse(tips);
     tipsJson.forEach(data => {
        this.title_text=data[this.photo_type].title;
        this.tip_text=data[this.photo_type].tip;
       
        if (this.photo_type.includes('bedRoom') || this.photo_type.includes('bathRoom')) {
          this.photo_thumbnail='bedRoom';
        }else {
          this.photo_thumbnail=this.photo_type;
        }
       });
       this.nativeStorage.getItem(this.photo_type).then(data => 
        this.taken_photo = data, 
        error=>
       console.log("error retriving photo"));
    }

    takePhoto(){
      
      this.camera.getPicture(this.options).then((imageData) => {
        this.imageURL = 'data:image/jpeg;base64,'+imageData;
        this.photos.push(this.imageURL);
        this.nativeStorage.setItem(this.photoId,this.imageURL).then(() => 
        {this.taken_photo=this.imageURL; 
         },
         error=>console.log("error"));
         if( this.editPhoto==='Yes'){
          this.navCtrl.push('SubmitphotosPage'); 
         } else {
          this.nativeStorage.getItem('numOfPhotosTobetaken').then(num=>{
            if(num==1) {
             this.navCtrl.push('SubmitphotosPage');  
            } else {
             this.nativeStorage.setItem('numOfPhotosTobetaken',num-1);
             this.navCtrl.push('AllphotosPage',{'photoId':this.photoId});
            }
          
           }), e=>{
           console.log(e);
         }
         }
          }, (err) => {
         console.log(err);
      });
    }
    
    accessGallery(){
      this.camera.getPicture({
        sourceType: this.camera.PictureSourceType.SAVEDPHOTOALBUM,
        destinationType: this.camera.DestinationType.DATA_URL,
        quality:50,
        allowEdit: true,
        correctOrientation: true,
        
       }).then((imageData) => {
        //this.nativeStorage.getItem('bedroom').then(data => alert(data), error=>alert("error"));
         this.imageURL = 'data:image/jpeg;base64,'+imageData;
         this.photos.push(this.imageURL);
         this.nativeStorage.setItem(this.photoId,this.imageURL).then(() => 
         {
          this.taken_photo=this.imageURL;
          
        }, 
          error=>console.log("error"));
          if( this.editPhoto==='Yes'){
            this.navCtrl.push('SubmitphotosPage'); 
           } else {
            this.nativeStorage.getItem('numOfPhotosTobetaken').then(num=>{
              if(num==1) {
               this.navCtrl.push('SubmitphotosPage');  
              } else {
               this.nativeStorage.setItem('numOfPhotosTobetaken',num-1);
               this.navCtrl.push('AllphotosPage',{'photoId':this.photoId});
              }
            
             }), e=>{
             console.log(e);
           }
           }
           
       
     }, (err) => {
         console.log(err);
       });
     }

}
