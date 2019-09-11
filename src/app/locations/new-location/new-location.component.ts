import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpService } from 'src/app/http.service';

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
    schedules : new FormArray(
      [new FormGroup
        (
          {
            name:new FormControl("test"),
      day: new FormControl('Sunday'),
      am: new FormControl('1'),
      pm: new FormControl('1')
    }
    )])
  });

  constructor(private httpService: HttpService) {
    this.httpService.getHttp("http://localhost/logistic_v1/api/regions.json").subscribe(data => {
      console.log(data);
      this.regions = data['data'];
    });

    this.httpService.getHttp("http://localhost/logistic_v1/api/location_types.json").subscribe(data => {
      console.log(data);
      this.location_types = data['data'];
    });
  }

  ngOnInit() {
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.locationForm.value);

    this.httpService.postHttp("http://localhost/logistic_v1/api/locations.json", this.locationForm.value)
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
