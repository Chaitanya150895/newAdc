import { Component, OnInit } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  })
};

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.css']
})
export class ViewUserComponent implements OnInit {
  user;
  constructor(
    private route: ActivatedRoute,
    private http: HttpClient) { }

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
      });
    });
  }
}
