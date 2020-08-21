import { Component, OnInit } from '@angular/core';

import { Contact } from "../contact";
import { CONTACT } from "../contact-content";


@Component({
  selector: 'app-temp',
  templateUrl: './temp.component.html',
  styleUrls: ['./temp.component.css']
})
export class TempComponent implements OnInit {


    contact = CONTACT;

    id: number = 3;

    tname = this.contact[this.id].name.split(' ')[0].toLowerCase();



    getUrl(): void {
      let fit = window.location.href.split('0/');
      console.log(fit[1]);

    }




    ngOnInit(): void {

      this.getUrl();

    }

    constructor() {}


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
      let object = this.contact;
      window.open(`http://${object[this.id].website}`);
      // window.open(web + this.contact[this.id].website);
    }

    // Send Email
    sendEmail() : void {
      let object = this.contact;
      let type = 'mailto';
      let text = 'subject=Connecting';

      location.href = (`${type}:${object[this.id].email}?${text}`);
    }

    // Send Biz Email
    sendBizEmail() : void {
      let object = this.contact;
      let type = 'mailto';
      let text = 'subject=Connecting';
      location.href = (`${type}:${object[this.id].bizEmail}?${text}`);
    }

    // Call Mobile Phone
    makeCall() : void {
      let object = this.contact;
      let type = 'tel';
      location.href = (`${type}:${object[this.id].mobile}`);

    }

    // Call Business Phone
    makeBizCall() : void {
      let object = this.contact;
      let type = 'tel';
      location.href = (`${type}:${object[this.id].mobile}`);

    }

    // Auto Social Media
    getSocial() : void {
      let object = this.contact;
      let fname = object[this.id].name.split(' ')[0].toLowerCase();
      const cardLink = {
        title : object[this.id].name,
        text : object[this.id].slogan,
        url : `http://bcard.netlify.app/${fname}`
      }
      navigator.share(cardLink);
    }


      // Download Contact Info
      getVcard(): void {
        let object = this.contact;
        let fname = object[this.id].name.split(' ')[0].toLowerCase();
        // let url = window.location.href;
        window.open(`../assets/cards/${fname}.vcf`);
      }

}
