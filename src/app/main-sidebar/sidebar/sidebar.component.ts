import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: '[app-sidebar]',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  menus = [];
  constructor(private http:HttpClient) { 

    this.http.get("http://localhost/logistic_v1/api/menus.json").subscribe(data => {

    console.log(data['data']);
    this.menus = data['data'];

    })
  }

  ngOnInit() {
  }

}
