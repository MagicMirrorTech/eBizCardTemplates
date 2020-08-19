import { Component, OnInit } from '@angular/core';

import { CONTACT } from "../contact-content";

@Component({
  selector: 'app-bcard-header',
  templateUrl: './bcard-header.component.html',
  styleUrls: ['./bcard-header.component.css']
})
export class BcardHeaderComponent implements OnInit {

  contact = CONTACT;

  constructor() { }

  ngOnInit(): void {
  }

}
