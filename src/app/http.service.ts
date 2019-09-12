import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Authorization': "Bearer "+localStorage.getItem("TOKEN")
  })
};

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http:HttpClient) { }

  getHttp(url:string)
  {
    return this.http.get(url,httpOptions)
  }

  postHttp(url:string,data)
  {
    return this.http.post(url,data,httpOptions)
  }
}
