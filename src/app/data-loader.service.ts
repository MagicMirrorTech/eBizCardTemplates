import { Injectable } from '@angular/core';

import { Router } from "@angular/router";
import { Http } from "@angular/http";

import { Contact } from "./contact";
import { CONTACT } from "./contact-content";

@Injectable({
  providedIn: 'root'
})
export class DataLoaderService {

  constructor(private router: Router) { }

  ngOnInit() {

      console.log(window.location.href);
      console.log(this.router.url);
  }

  getContacts(): Contact[] {
    return CONTACTS;
  }




}
