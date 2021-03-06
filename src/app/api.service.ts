import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginResultModel } from './model/LoginResultModel'
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient, private httpService: HttpService) {

  }
  login(email: string, password: string): Observable<LoginResultModel> {

    let url = this.httpService.serverUrl;
    return this.http.post<LoginResultModel>(url + 'users/token.json', {
      username: email,
      password: password
    });
  }
}