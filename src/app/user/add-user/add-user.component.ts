import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import{HttpHeaders,HttpClient} from '@angular/common/http';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Accept': 'application/json'
  })
 };

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  userForm = new FormGroup({
    first_name: new FormControl('',[Validators.required, Validators.minLength(4)]),
    last_name: new FormControl('',[Validators.required, Validators.minLength(4)]),
    username: new FormControl('',[Validators.required, Validators.minLength(4)]),
    password: new FormControl('',[Validators.required, Validators.minLength(8),
      Validators.pattern('(?=.*[A-Za-z])(?=.*[0-9])(?=.*[$@$!#^~%*?&,.<>"\'\\;:\{\\\}\\\[\\\]\\\|\\\+\\\-\\\=\\\_\\\)\\\(\\\)\\\`\\\/\\\\\\]])[A-Za-z0-9\d$@].{7,}')]),
    email: new FormControl('',[ Validators.required,Validators.email]),
    mobile: new FormControl('',[Validators.required, Validators.minLength(10),Validators.pattern('[0-9]+')])
  });
  constructor(private http:HttpClient) { }
  submit() {
    console.warn(this.userForm.value);
    this.http.post("http://localhost/logistic_v1/api/users.json", this.userForm.value, httpOptions)
      .pipe().subscribe(data => {
        console.log(data);
      });
  }
  get first_name() { return this.userForm.get('first_name'); }
  get last_name(){ return this.userForm.get('last_name');}
  get username(){ return this.userForm.get('username');}
  get password(){ return this.userForm.get('password');}
  get email(){ return this.userForm.get('email');}
  get mobile(){ return this.userForm.get('mobile');}


  ngOnInit() {
  }

}
