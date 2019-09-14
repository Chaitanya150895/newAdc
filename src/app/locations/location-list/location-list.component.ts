import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpService } from 'src/app/http.service';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Authorization': "Bearer " + localStorage.getItem("TOKEN")
  })
};

@Component({
  selector: '[app-location-list]',
  templateUrl: './location-list.component.html',
  styleUrls: ['./location-list.component.css']
})

export class LocationListComponent implements OnInit {

  tableHeaders = [
    "Id",
    "Name",
    "Address",
    "City",
    "State",
    "ZipCode",
    "Location Number",
    "Region",
    "Trailer Bays",
    "Location Type",
    "Action"
  ]


  locations = [];
  loading = false;
  showMsg: boolean;

  constructor(private http: HttpService) {  }

  ngOnInit() {
this.loading = true;

    this.http.getHttp("locations.json").subscribe(data => {
      this.loading = false;
      console.log(data);
      this.locations = data['data'];

    });
  }

  deleteLocation(id, locationId) {
    this.http.deleteHttp("locations/"+id+".json").subscribe(data => {

      console.log(data);

      // this.locations = data['data'];
      this.locations.splice(locationId, 1);
      this.showMsg = true;

    });
  }
}
