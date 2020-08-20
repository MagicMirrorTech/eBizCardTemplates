import { Component, OnInit } from '@angular/core';

import { DataLoaderService } from "../data-loader.service";

import { Contact } from "../contact";
import { CONTACT } from "../contact-content";
import { DataLoaderService } from "../data-loader.service";

@Component({
  selector: 'app-ryan-card',
  templateUrl: './ryan-card.component.html',
  styleUrls: ['./ryan-card.component.css']
})
export class RyanCardComponent implements OnInit {

  contact = CONTACT;


  ngOnInit(): void {
    // console.log('component initiated');

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


  // Download Contact Info
  getVcard(): void {
    let object = this.contact;
    let fname = object[3].name.split(' ')[0].toLowerCase();
    // let url = window.location.href;
    window.open(`../assets/cards/${fname}.vcf`);

  }

  // Scheduling A meeting
  calendly(): void {
    window.open('https://calendly.com/james-keck/connect');
  }

  // Going to website
  webPage() : void {
    let object = this.contact;
    window.open(`http://${object[0].website}`);
    // window.open(web + this.contact[0].website);
  }

  // Send Email
  sendEmail() : void {
    let object = this.contact;
    let type = 'mailto';
    let text = 'subject=Connecting';

    location.href = (`${type}:${object[0].email}?${text}`);
  }

  // Send Biz Email
  sendBizEmail() : void {
    let object = this.contact;
    let type = 'mailto';
    let text = 'subject=Connecting';
    location.href = (`${type}:${object[0].bizEmail}?${text}`);
  }

  // Make Call
  makeCall() : void {
    let object = this.contact;
    let type = 'tel';
    location.href = (`${type}:${object[0].mobile}`);

  }

  // Auto Social Media
  getSocial() : void {
    let object = this.contact;
    const cardLink = {
      title : object[0].name,
      text : object[0].slogan,
      url : 'http://bcard.netlify.app'
    }
    const resultPara = document.querySelector('.result');
    navigator.share(cardLink);
  }



}
