import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users = [];
  constructor(private http: HttpClient) { 

    this.http.get("http://localhost/logistic_v1/api/users.json").subscribe( data => {
      
      console.log(data);

      this.users = data['data'];

    });
  }

  ngOnInit() {
  }

}
