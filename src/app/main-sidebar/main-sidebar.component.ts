import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';


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
