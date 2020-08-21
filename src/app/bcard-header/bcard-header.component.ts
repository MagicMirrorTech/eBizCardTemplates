import { Component, OnInit } from '@angular/core';

import { Contact } from "../contact";
import { CONTACT } from "../contact-content";

// import { DataLoaderService } from "../data-loader.service";


@Component({
  selector: 'app-bcard-header',
  templateUrl: './bcard-header.component.html',
  styleUrls: ['./bcard-header.component.css']
})
export class BcardHeaderComponent implements OnInit {

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
    }  else {
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
      let btnColor = document.getElementById('contactBtn').style = `background-color:${color}`;
    }
  }

  // QR CODE
  togQR() : void {
    let port = document.getElementById('portrait').classList;
    let qr = document.getElementById('qr').classList;

    if (port.contains('silent')) {
      port.remove('silent');
      qr.add('silent');
    } else {
      port.add('silent');
      qr.remove('silent');
    }
  }

  // Scheduling A meeting
  calendly(): void {
    window.open('https://calendly.com/james-keck/connect');
  }

  // Going to website
  webPage() : void {
    window.open(`http://${this.object[this.id].website}`);
    // window.open(web + this.contact[this.id].website);
  }

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

  // Auto Social Media
  getSocial() : void {
    let fname = this.object[this.id].name.split(' ')[0].toLowerCase();
    const cardLink = {
      title : this.object[this.id].name,
      text : this.object[this.id].slogan,
      url : `http://bcard.netlify.app/${fname}`
    }
    navigator.share(cardLink);
  }



    // Download Contact Info
    getVcard(): void {
      let fname = this.object[this.id].name.split(' ')[0].toLowerCase();
      // let url = window.location.href;
      open(`../assets/cards/${fname}.vcf`);
    }




}
