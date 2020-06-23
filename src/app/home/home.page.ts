import { Component } from "@angular/core";
import { InAppBrowser } from "@ionic-native/in-app-browser/ngx";
import { FormsModule } from "@angular/forms";
import { ToastController } from '@ionic/angular';
import { async } from '@angular/core/testing';

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"],
})
export class HomePage {
  // Object to get urls
  urls = {
    browserUrl: "",
    targetUrl: "",
  };

  constructor(private inAppBrowser: InAppBrowser, private toastCtrl: ToastController) {}

  // Open In App Browser
  openInAppBrowser() {
    const browser = this.inAppBrowser.create(
      this.urls.browserUrl,
      "_blank",
      "hidden=no,location=no,clearsessioncache=yes,clearcache=yes"
    );

    browser.on("loadstart").subscribe( async(e) => {
      
      console.log(e.url);
      if (e.url === this.urls.targetUrl) {
        let toast = await this.toastCtrl.create({
          message: "Condition Worked"
        });
        toast.present();
        browser.close();
      }
    });

    
  }
}
