import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-b-cards',
  templateUrl: './b-cards.component.html',
  styleUrls: ['./b-cards.component.css']
})
export class BCardsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    let cont = document.getElementById('container').classList;
    if ( cont.contains('hide') != true ) {
      setTimeout( function () {
        cont.add('hide');
      }, 5000);
    }
  }

}
