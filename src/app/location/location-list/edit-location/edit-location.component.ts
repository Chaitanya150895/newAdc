import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LocationListComponent } from '../location-list.component';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  })
};

@Component({
  selector: 'app-edit-location',
  templateUrl: './edit-location.component.html',
  styleUrls: ['./edit-location.component.css']
})
export class EditLocationComponent implements OnInit {

  id;
  location;
  regions = [];
  location_types = [];
  showMsg: boolean;

  locationForm = new FormGroup({
    id: new FormControl(''),
    name: new FormControl(''),
    address: new FormControl(''),
    city: new FormControl(''),
    state: new FormControl(''),
    zipcode: new FormControl('',
      [Validators.required, Validators.minLength(6)]),
    location_number: new FormControl(''),
    region_id: new FormControl(''),
    trailer_bays: new FormControl(''),
    location_type_id: new FormControl(''),
    created: new FormControl(''),
    modified: new FormControl('')
  });
  

  constructor(private http: HttpClient, private route: ActivatedRoute) {
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

    this.route.paramMap.subscribe(params => {
      let id = params.get('locationId');

      this.http.get("http://localhost/logistic_v1/api/locations/" + id + ".json").subscribe(data => {

        console.log(`${id}`);

        this.location = data['data'];
        console.log(data);

        this.locationForm.setValue(this.location);

      });

    });
  }


  // get name() { return this.locationForm.get('name');}
  get zipcode() { return this.locationForm.get('zipcode') as FormControl; }

  onSubmit() {
    console.warn(this.locationForm.value);

    this.http.put("http://localhost/logistic_v1/api/locations/" + this.location.id + ".json", this.locationForm.value, httpOptions)
      .pipe(
      ).subscribe(data => {
        console.log(data);
        this.locationForm.reset();
        this.showMsg = true;
      });
  }
}
