import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpService } from '../http.service';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Authorization': "Bearer "+localStorage.getItem("TOKEN")
  })
};

@Component({
  selector: 'app-main-sidebar',
  templateUrl: './main-sidebar.component.html',
  styleUrls: ['./main-sidebar.component.css']
})
export class MainSidebarComponent implements OnInit {

 
  menus = [];
  constructor(private httpService:HttpService) { 

   
 
  }

  ngOnInit() {
    this.httpService.getHttp("menus.json").subscribe(data => {

      console.log(data['data']);
      this.menus = data['data'];
  
      });
  }

}
