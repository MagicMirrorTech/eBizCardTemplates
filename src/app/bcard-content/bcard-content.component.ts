import { Component, OnInit } from '@angular/core';

import { CONTACT } from "../contact-content";


@Component({
  selector: 'app-bcard-content',
  templateUrl: './bcard-content.component.html',
  styleUrls: ['./bcard-content.component.css']
})
export class BcardContentComponent implements OnInit {

  contact = CONTACT;

  constructor() { }

  ngOnInit(): void {
  }

  getVcard(): void {
    window.open('../assets/cards/ryan.vcf');
  }

  calendly(): void {
    window.open('https://calendly.com/james-keck/connect');
  }


}
