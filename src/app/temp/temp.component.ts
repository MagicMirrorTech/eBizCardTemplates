import { Component, OnInit } from '@angular/core';

import { DataLoaderService } from "../data-loader.service";


@Component({
  selector: 'app-temp',
  templateUrl: './temp.component.html',
  styleUrls: ['./temp.component.css']
})
export class TempComponent implements OnInit {


  constructor( dataLoaderService : DataLoaderService ) { }

  ngOnInit() {}



}
