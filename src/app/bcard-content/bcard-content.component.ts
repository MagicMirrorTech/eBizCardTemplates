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
  social:boolean;
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
      } else if (this.end == 'cam' || this.end == 'cameron' ) {
          this.id = 5;
      } else if (this.end == 'jk') {
          this.id = 6;
      }  else if (this.end == 'jerius') {
          this.id = 7;
      } else if (this.end == 'andie') {
          this.id = 8;
      } else if (this.end == 'jorge') {
          this.id = 9;
      } else if (this.end == 'gaby') {
          this.id = 10;
      } else if (this.end == 'jose') {
          this.id = 11;
      } else if (this.end == 'erik' || this.end == 'eric') {
          this.id = 12;
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

    // Set the colors to User preference / brand
    this.getColors();
    // Determins if any social links are present to know if should display title or not
    this.getSocialTitle();
  }


  // BUSINESS INFO

      // Going to website
      webPage() : void {
        window.open(`http://${this.object[this.id].website}`);
        // window.open(web + this.contact[this.id].website);
      }

      getRevs(): void {
        if (this.object[this.id].gglLink) {
          open(this.object[this.id].gglLink);
        }
      }

    // dynamically set color of "Add to contact" btn
    getColors(){
      if (this.contact[this.id].secColor) {
        // get color from DB
        let color = this.object[this.id].secColor;

        // Set color and save as variable
        let btnColor = document.getElementById('contactBtn').style.backgroundColor=color;
      }
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

      // Displays title if any social links exist
      getSocialTitle(){
        if (this.contact[this.id].instaLink || this.contact[this.id].linkedIn || this.contact[this.id].twitterLink || this.contact[this.id].fbLink || this.contact[this.id].gitHub || this.contact[this.id].stkOvrflow) {
          this.social = true;
        }
      }

      // Displays title if any social links exist
      calendly(){
        if (this.contact[this.id].calLink) {
          if (this.end == "cameron" || this.end == "cam" || this.end == "jerius") {
            //gets the container displaying the options
            let calCont = document.getElementById('cal-options');
            if ( calCont.classList.contains('silent') ) {
              calCont.classList.remove('silent');
              return calCont;
            } else {
              calCont.classList.add('silent');
              return calCont;
            }
          }
          open(this.contact[this.id].calLink);
        }
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


  // END contact info

}
