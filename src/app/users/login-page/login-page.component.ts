import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { CustomerService } from 'src/app/customer.service';
import { Router } from '@angular/router';
import { HttpHeaders, HttpClient } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  })
};

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  email = 'ashish';
  password = 'ashish';

  constructor(private http:HttpClient, private api: ApiService, private customer: CustomerService, private router: Router) {
  }

  ngOnInit(){
    
  }

  tryLogin() {

    let postData = {
      "username":this.email,
      "password":this.password
    }
    this.http.post("http://localhost/logistic_v1/api/users/token.json", postData, httpOptions)
    .pipe(
    ).subscribe(data => {
      console.log(data);
      let token = data['data']['token'];
      let location_id = data['data']['location_id'];
      console.log("=============>" + token)
      this.customer.setToken(token);
      this.customer.setLocationId(location_id);

      this.router.navigateByUrl('/locations');
     
    });

   
  }

}
