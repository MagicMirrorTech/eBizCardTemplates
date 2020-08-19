import { Injectable } from '@angular/core';

import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Http } from "@angular/http";
import { Observable } from "rxjs/Observable ";

@Injectable({
  providedIn: 'root'
})
export class DataLoaderService implements Resolve<any> {

  constructor(private http: Http) { }

  resolve(route: ActivatedRouteSnapshot, rstate: RouterStateSnapshot): Observable<any> {
    console.log('Logging collected route Param', route.get());
    return this.http.get('localhost:4200/biz');
  }


}
