import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  })
};

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  userForm = new FormGroup({
    id: new FormControl(''),
    active: new FormControl(''),
    first_name: new FormControl('', [Validators.required, Validators.minLength(4)]),
    last_name: new FormControl('', [Validators.required, Validators.minLength(4)]),
    username: new FormControl('', [Validators.required, Validators.minLength(4)]),
    password: new FormControl('', [Validators.required, Validators.minLength(8),
    Validators.pattern('(?=.*[A-Za-z])(?=.*[0-9])(?=.*[$@$!#^~%*?&,.<>"\'\\;:\{\\\}\\\[\\\]\\\|\\\+\\\-\\\=\\\_\\\)\\\(\\\)\\\`\\\/\\\\\\]])[A-Za-z0-9\d$@].{7,}')]),
    email: new FormControl('', [Validators.required, Validators.email]),
    mobile: new FormControl('', [Validators.required, Validators.minLength(10), Validators.pattern('[0-9]+')])
  });
  userId;
  user;
  constructor(
    private route: ActivatedRoute,
    private http: HttpClient) {
  }

  get first_name() { return this.userForm.get('first_name'); }
  get last_name() { return this.userForm.get('last_name'); }
  get username() { return this.userForm.get('username'); }
  get password() { return this.userForm.get('password'); }
  get email() { return this.userForm.get('email'); }
  get mobile() { return this.userForm.get('mobile'); }

  ngOnInit() {
    this.route.params.subscribe(params => {
      let id = params['userId'];
      console.log(`${id}`);

      this.http.get("http://localhost/logistic_v1/api/users/" + id + ".json").subscribe(data => {

        console.log(data);

        this.user = data['data'];
        this.user.password = "";
        delete this.user['created'];
        delete this.user['updated'];
        delete this.user['modified'];
        this.userForm.setValue(this.user);
        //this.username.setValue(this.user.username);
      });


    });
  }
  save() {
    console.warn(this.userForm.value);
    this.http.put("http://localhost/logistic_v1/api/users/"+this.user.id+".json", this.userForm.value, httpOptions)
      .pipe().subscribe(data => {
        console.log(data);
      });
  }
}
