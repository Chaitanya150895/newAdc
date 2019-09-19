import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from 'src/app/http.service';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.css']
})
export class ViewUserComponent implements OnInit {
  user;
  constructor(
    private route: ActivatedRoute,
    private http: HttpService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      let id = params['userId'];
      this.http.getHttp("users/" + id + ".json").subscribe(data => {
        console.log(data);this.user = data['data'];
        this.user.password = "";
        delete this.user['created'];
        delete this.user['updated'];
        delete this.user['modified'];
      });
    });
  }
}
