import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users = [];
  loading = false;
  constructor(private http: HttpClient) {
  }
  onDelete(id, userId) {
    this.loading = true;
    this.http.delete("http://localhost/logistic_v1/api/users/" + id + ".json").subscribe(data => {
      console.log(data);
      this.users.splice(userId, 1);
      this.loading = false;
    });
  }
  ngOnInit() {
    this.loading = true;
    this.http.get("http://localhost/logistic_v1/api/users.json").subscribe(data => {
      console.log(data);
      this.loading = false;
      this.users = data['data'];
    });
  }

}
