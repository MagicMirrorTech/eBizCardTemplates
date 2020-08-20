import { Component, OnInit } from '@angular/core';

import { CONTACT } from "../contact-content";

@Component({
  selector: 'app-lisa-card',
  templateUrl: './lisa-card.component.html',
  styleUrls: ['./lisa-card.component.css']
})
export class LisaCardComponent implements OnInit {

  contact = CONTACT;

  constructor() { }

  ngOnInit(): void {
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

  getVcard(): void {
    let object = this.contact;
    let fname = object[3].name.split(' ')[0].toLowerCase();
    // let url = window.location.href;
    window.open(`../assets/cards/${fname}.vcf`);
  }

  calendly(): void {
    window.open('https://calendly.com/james-keck/connect');
  }


  // Going to website
  webPage() : void {
    let object = this.contact;
    window.open(`https://${object[2].website}`);
    // window.open(web + this.contact[2].website);
  }

  // Send Email
  sendEmail() : void {
    let object = this.contact;
    let type = 'mailto';
    let text = 'subject=Connecting';

    location.href = (`${type}:${object[2].email}?${text}`);
  }

  // Send Biz Email
  sendBizEmail() : void {
    let object = this.contact;
    let type = 'mailto';
    let text = 'subject=Connecting';
    location.href = (`${type}:${object[2].bizEmail}?${text}`);
  }

  // Make Call
  makeCall() : void {
    let object = this.contact;
    let type = 'tel';
    location.href = (`${type}:${object[2].mobile}`);

  }

  // Auto Social Media
  getSocial() : void {
    let object = this.contact;
    const cardLink = {
      title : object[2].name,
      text : object[2].slogan,
      url : 'http://bcard.netlify.app'
    }
    const resultPara = document.querySelector('.result');
    navigator.share(cardLink);
  }




}
