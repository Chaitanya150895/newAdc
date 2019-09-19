import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { HttpService } from 'src/app/http.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  tableHeaders = [
    "Id",
    "Username",
    "Firstname",
    "LastName",
    "Email",
    "Mobile Number",
    "Action"
  ]


  users = [];
  loading = false;
  showMsg: boolean;

  constructor(private http: HttpService) { }

  ngOnInit() {
    this.loading = true;
    this.http.getHttp("users.json").subscribe(data => {
      this.loading = false;
      console.log(data);
      this.users = data['data'];
    });
  }
  deleteUser(id, userId) {
    this.loading = true;
    this.http.deleteHttp("users/" + id + ".json").subscribe(data => {
      console.log(data);
      this.users.splice(userId, 1);
      this.loading = false;
    });
  }
}
