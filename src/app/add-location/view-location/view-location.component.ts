import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LocationListComponent } from '../location-list/location-list.component';
// import { Pipe, PipeTransform } from '@angular/core';

// @Pipe({name: 'replaceUnderscore'})
// export class ReplaceUnderscorePipe implements PipeTransform {
//   transform(value: string): string {
//     return value? value.replace(/_/g, " ") : value;
//   }
// }

@Component({
  selector: 'app-view-location',
  templateUrl: './view-location.component.html',
  styleUrls: ['./view-location.component.css']
})
export class ViewLocationComponent implements OnInit {
  location;
  locationForm: any;

  constructor(private http: HttpClient, private route: ActivatedRoute) {
  }

  ngOnInit() {

    this.route.paramMap.subscribe(params => {
      let id = params.get('locationId');

      this.http.get("http://localhost/logistic_v1/api/locations/" + id + ".json").subscribe(data => {

        console.log(`${id}`);

        this.location = data['data'];
      
console.log(this.location);
        // this.locationForm.setValue(this.location);

      });

    });
  }

}
