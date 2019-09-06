import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  })
};

@Component({
  selector: '[app-new-location]',
  templateUrl: './new-location.component.html',
  styleUrls: ['./new-location.component.css']
})
export class NewLocationComponent implements OnInit {

  regions = [];
  location_types = [];
  showMsg: boolean = false;

  locationForm = new FormGroup({
    name: new FormControl(''),
    address: new FormControl(''),
    city: new FormControl(''),
    state: new FormControl(''),
    zipcode: new FormControl('',
     [Validators.required, Validators.minLength(6)]),
    location_number: new FormControl(''),
    region_id: new FormControl(''),
    location_type_id: new FormControl(''),
  });

  constructor(private http: HttpClient) {
    this.http.get("http://localhost/logistic_v1/api/regions.json").subscribe(data => {
      console.log(data);
      this.regions = data['data'];
    });

    this.http.get("http://localhost/logistic_v1/api/location_types.json").subscribe(data => {
      console.log(data);
      this.location_types = data['data'];
    });
  }

  ngOnInit() {
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.locationForm.value);

    this.http.post("http://localhost/logistic_v1/api/locations.json", this.locationForm.value, httpOptions)
      .pipe(
      ).subscribe(data => {
        console.log(data);
        this.locationForm.reset();
        this.showMsg = true;
      });
     // alert("Added Successfully!");
  }

  get zipcode() {return this.locationForm.get('zipcode') as FormControl; }
}
