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
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.css']
})
export class DeleteUserComponent implements OnInit {
  id;
  constructor(
    private route: ActivatedRoute,
    private http: HttpClient) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['userId'];
      console.log(`${this.id}`);

    });
  }

  delete() {
    this.http.delete("http://localhost/logistic_v1/api/users/" + this.id + ".json").subscribe(data => {

      console.log(data);
    });

  }
}
