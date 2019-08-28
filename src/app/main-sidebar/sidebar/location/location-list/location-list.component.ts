import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: '[app-location-list]',
  templateUrl: './location-list.component.html',
  styleUrls: ['./location-list.component.css']
})

export class LocationListComponent implements OnInit {

  locations = [];
  loading = false;
  showMsg: boolean;

  constructor(private http: HttpClient) {  }

  ngOnInit() {
this.loading = true;

    this.http.get("http://localhost/logistic_v1/api/locations.json").subscribe(data => {
      this.loading = false;
      console.log(data);
      this.locations = data['data'];

    });
  }

  deleteLocation(id, locationId) {
    this.http.delete("http://localhost/logistic_v1/api/locations/"+id+".json").subscribe(data => {

      console.log(data);

      // this.locations = data['data'];
      this.locations.splice(locationId, 1);
      this.showMsg = true;

    });
  }
}
