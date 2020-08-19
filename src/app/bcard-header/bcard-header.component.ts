import { Component, OnInit } from '@angular/core';

import { DATA } from "../data-content";

@Component({
  selector: 'app-bcard-header',
  templateUrl: './bcard-header.component.html',
  styleUrls: ['./bcard-header.component.css']
})
export class BcardHeaderComponent implements OnInit {

  data = DATA;

  constructor() { }

  ngOnInit(): void {
  }

}
