import { Component, OnInit } from '@angular/core';

import { Contact } from "../contact";
import { CONTACT } from "../contact-content";

// import { DataLoaderService } from "../data-loader.service";

@Component({
  selector: 'app-bcard-content',
  templateUrl: './bcard-content.component.html',
  styleUrls: ['./bcard-content.component.css']
})
export class BcardContentComponent implements OnInit {

  contact = CONTACT;
  object = CONTACT;
  fit: Array<any>;
  end:string ;
  tname:string;
  id:number;

    // Gets the current url to find the correct link to redirect
    getUrl(): void {
      let dev = 'local';
      let prod = 'netlify';
      let href:string = window.location.href;

      // Handles dev vs Production environs
      if (href.includes(dev)) {
        this.fit = href.split('0/');
        console.log('This app is in dev mode');
      } else {
        this.fit = href.split('.app/');
      }

      console.log(this.fit[1]);
      this.end = this.fit[1];
    }

    useUrl() {
      if( this.end == 'ryan') {
          this.id = 0;
      } else if (this.end == 'wife') {
          this.id = 1;
      } else if (this.end == 'lisa') {
          this.id = 2;
      } else if (this.end == 'carla') {
          this.id = 3;
      } else if (this.end == 'james') {
          this.id = 4;
      } else if (this.end == 'andie') {
          this.id = 5;
      } else if (this.end == 'cam') {
          this.id = 6;
      } else if (this.end == 'jk') {
          this.id = 7;
      }

      else {
        this.id = 4;
      }

      console.log(this.id);
      this.tname = this.object[this.id].name.split(' ')[0].toLowerCase();

      return this.id;
    }


  constructor() { }

  ngOnInit(): void {
    this.getUrl();
    this.useUrl();

    // dynamically set color of "Add to contact" btn
    if (this.contact[this.id].secColor) {
      // get color from DB
      let color = this.object[this.id].secColor;

      // Set color and save as variable
      let btnColor = document.getElementById('contactBtn').style.backgroundColor=color;
    }

  }


  // BUSINESS INFO
  
      // Going to website
      webPage() : void {
        window.open(`http://${this.object[this.id].website}`);
        // window.open(web + this.contact[this.id].website);
      }

      getRevs(): void {
        open(this.object[this.id].gglLink);
      }

  // END business info


  // SHARING & SOCIAL

      //  SHARE
      getSocial() : void {
        let fname = this.object[this.id].name.split(' ')[0].toLowerCase();
        const cardLink = {
          title : this.object[this.id].name,
          text : this.object[this.id].slogan,
          url : `http://bcard.netlify.app/${fname}`
        }
        navigator.share(cardLink);
      }

  // END SHARING & SOCIAL



  // CONTACT INFO
      // Send Email
      sendEmail() : void {
        let type = 'mailto';
        let text = 'subject=Connecting';
        location.href = (`${type}:${this.object[this.id].email}?${text}`);
      }

      // Send Biz Email
      sendBizEmail() : void {
        let type = 'mailto';
        let text = 'subject=Connecting';
        location.href = (`${type}:${this.object[this.id].bizEmail}?${text}`);
      }

      // Call Mobile Phone
      makeCall() : void {
        let type = 'tel';
        location.href = (`${type}:${this.object[this.id].mobile}`);

      }

      // Call Business Phone
      makeBizCall() : void {
        let type = 'tel';
        location.href = (`${type}:${this.object[this.id].mobile}`);
      }

      // Scheduling A meeting
      calendly(): void {
        window.open('https://calendly.com/james-keck/connect');
      }

      // Download Contact Info
      getVcard(): void {
        let fname = this.object[this.id].name.split(' ')[0].toLowerCase();
        if (fname == "james") {
          let url = window.location.href;
          if (url.includes('jk')) {
            open(`../assets/cards/bdit.vcf`);
          }
        }
        open(`../assets/cards/${fname}.vcf`);
      }

      // Address
      getMap(): void {
        let adLink = this.object[this.id].gglLink;
        window.open(adLink);
      }

}
