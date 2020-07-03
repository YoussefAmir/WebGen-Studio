import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase';
import { ActivatedRoute, Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormGroup,FormBuilder, Validators } from '@angular/forms';
import { LoginCre, RegisterService } from '../register.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  info: any;
  flag = false;

  constructor(private route: ActivatedRoute,
    private angularfirestore:AngularFirestore) { }
 
  ngOnInit(): void {
  

    this.info = this.route.snapshot.params

      if(this.info['home_address']){
      
       
        this.angularfirestore.collection("info")
        .doc(firebase.auth().currentUser.uid)
        .set(this.info);

        console.log('Done')
        this.flag = true;
       
      }
      else if(firebase.auth().currentUser)
      {

        console.log("userid: ", firebase.auth().currentUser.uid)
        this.angularfirestore.collection("info")
        .doc(firebase.auth().currentUser.uid)
        .valueChanges().subscribe(data =>{
          this.info = data

        })

        this.flag= true

        
      }
      
      else{
        console.log('false')

      }
  }
}


// else if(firebase.auth().currentUser)
//       {

//         console.log("userid: ", firebase.auth().currentUser.uid)
//         this.angularfirestore.collection("info")
//         .doc(firebase.auth().currentUser.uid)
//         .valueChanges().subscribe(data =>{
//           this.info = data

//         })

//         this.flag= true

        
//       }