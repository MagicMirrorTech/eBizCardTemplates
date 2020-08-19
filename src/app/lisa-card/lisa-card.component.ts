import { Component, OnInit } from '@angular/core';

import { DATA } from "../data-content";

@Component({
  selector: 'app-lisa-card',
  templateUrl: './lisa-card.component.html',
  styleUrls: ['./lisa-card.component.css']
})
export class LisaCardComponent implements OnInit {

  data = DATA;

  constructor() { }

  ngOnInit(): void {
  }

  getVcard(): void {
    window.open('../assets/cards/lisa.vcf');
  }

  calendly(): void {
    window.open('https://calendly.com/james-keck/connect');
  }


}
