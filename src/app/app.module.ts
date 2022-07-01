import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';

import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
// import { provideAnalytics,getAnalytics,ScreenTrackingService,UserTrackingService } from '@angular/fire/analytics';
import { provideAuth,getAuth } from '@angular/fire/auth';

// WIll update to new version of Firebase after I get everything else working
// import { provideDatabase,getDatabase } from '@angular/fire/database';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
// import { provideFunctions,getFunctions } from '@angular/fire/functions';
// import { provideMessaging,getMessaging } from '@angular/fire/messaging';
// import { providePerformance,getPerformance } from '@angular/fire/performance';
// import { provideRemoteConfig,getRemoteConfig } from '@angular/fire/remote-config';
// import { provideStorage,getStorage } from '@angular/fire/storage';

//Doing it the old way so I can finish the turtorial. Will go back and fix this later.
import { AngularFireModule} from '@angular/fire/compat'
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
//import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
// import {ServiceWorkerModule} from "@angular/"
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    // provideFirebaseApp(() => initializeApp(environment.firebase)),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    //AngularFireDatabaseModule,
    AngularFireAuthModule,
    // provideAnalytics(() => getAnalytics()),
    // provideAuth(() => getAuth()),
    // provideDatabase(() => getDatabase()),
    provideFirestore(() => getFirestore()),
    // provideFunctions(() => getFunctions()),
    // provideMessaging(() => getMessaging()),
    // providePerformance(() => getPerformance()),
    // provideRemoteConfig(() => getRemoteConfig()),
    // provideStorage(() => getStorage())
  ],
  // providers: [
  //   ScreenTrackingService,UserTrackingService
  // ],
  bootstrap: [AppComponent]
})
export class AppModule { }
