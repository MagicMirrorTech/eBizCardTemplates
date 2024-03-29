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


// DIRECT ROUTING

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
        if( this.end == 'ryan' || this.end == 'tr') {
          this.id = 0;
        } else if (this.end == 'tiff' || this.end == 'tiffany' || this.end == 'tr') {
          this.id = 0;
        } else if (this.end == 'lisa') {
          this.id = 2;
        } else if (this.end == 'carla') {
            this.id = 3;
        } else if (this.end == 'james') {
            this.id = 4;
        }else if (this.end == 'cam' || this.end == 'cameron') {
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
        } else if (this.end == 'jeff' || this.end == 'geoff') {
            this.id = 6;
        } else if (this.end == 'nick' || this.end == 'nicholas') {
            this.id = 2;
        } else if (this.end == 'abhishek' || this.end == 'abishek') {
            this.id = 11;
        }


        else {
          this.id = 4;
        }


        console.log(this.id);
        this.tname = this.object[this.id].name.split(' ')[0].toLowerCase();

        return this.id;
      }

// END  ROUTING


  constructor() { }

  ngOnInit(): void {
    this.getUrl();
    this.useUrl();

    // Get main colors
    this.getColor();
  }

  // QR CODE
  togQR() : void {
    let port = document.getElementById('portrait').classList;
    // let qr = document.getElementById('test').classList;
    let qr = document.getElementById('qr').classList;


    if (port.contains('silent')) {
      port.remove('silent');
      qr.add('silent');
    } else {
      port.add('silent');
      qr.remove('silent');
    }
  }

  // Get main color
  getColor(){
    if (this.contact[this.id].mainColor) {
      let mColor = this.object[this.id].mainColor;
      // Set backgroundColor and save as variable
      let bckgrndClr = document.getElementById('header-container').style.backgroundColor=mColor;
    }
    if (this.contact[this.id].accColor) {
      let aColor = this.object[this.id].accColor;
      // Set backgroundColor and save as variable
      let fontClr = document.getElementById('header-info').style.color=aColor;
    }
  }





}
