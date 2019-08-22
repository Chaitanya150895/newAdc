import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: '[app-location-list]',
  templateUrl: './location-list.component.html',
  styleUrls: ['./location-list.component.css']
})
export class LocationListComponent implements OnInit {

locations = [];

  constructor(private http: HttpClient) { 
    
  }

  ngOnInit() {
    this.http.get("http://localhost/logistic_v1/api/locations.json").subscribe( data => {
      
      console.log(data);

      this.locations = data['data'];

    });
  }

}
