import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { FCM } from '@ionic-native/fcm';

import { TabsPage } from '../pages/tabs/tabs';

@Component({
  templateUrl: 'app.html'
})


export class MyApp {
  rootPage:any = TabsPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, public fcm: FCM) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.

      this.fcm.getToken().then(token => {

        console.log(token);
        // Your best bet is to here store the token on the user's profile on the
        // Firebase database, so that when you want to send notifications to this
        // specific user you can do it from Cloud Functions.
      });


      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}
