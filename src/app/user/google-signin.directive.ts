import { Directive, HostListener } from '@angular/core';
// import { provideAuth,getAuth } from '@angular/fire/auth';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import * as firebase from 'firebase/app'
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Directive({
  selector: '[appGoogleSignin]'
})
export class GoogleSigninDirective {

  constructor(private afAuth:AngularFireAuth) { }
  
  @HostListener('click')
  onclick(){
    // signInWithPopup(getAuth(),new GoogleAuthProvider())
    this.afAuth.signInWithPopup(new GoogleAuthProvider())
    //this.afAuth.signInWithPopup(new firebase.GoogleAuthProvider());
  }
  

  // const auth = getAuth();
  // signInWithPopup(auth, provider)
  // .then((result) => {
  //   // This gives you a Google Access Token. You can use it to access the Google API.
  //   const credential = GoogleAuthProvider.credentialFromResult(result);
  //   const token = credential.accessToken;
  //   // The signed-in user info.
  //   const user = result.user;
  //   // ...
  // }).catch((error) => {
  //   // Handle Errors here.
  //   const errorCode = error.code;
  //   const errorMessage = error.message;
  //   // The email of the user's account used.
  //   const email = error.customData.email;
  //   // The AuthCredential type that was used.
  //   const credential = GoogleAuthProvider.credentialFromError(error);
  //   // ...
  // });
}
