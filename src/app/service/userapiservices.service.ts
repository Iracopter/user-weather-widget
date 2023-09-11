import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserapiservicesService {

  constructor(private _http:HttpClient) { }

  //user api
  userApiUrl="https://randomuser.me/api/?results=16";

  topHeading():Observable<any>
  {
    return this._http.get(this.userApiUrl);
  }
}
