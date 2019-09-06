import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-view-location',
  templateUrl: './view-location.component.html',
  styleUrls: ['./view-location.component.css']
})
export class ViewLocationComponent implements OnInit {
  location;
  locationForm: any;
  loading = false;

  constructor(private http: HttpClient, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.loading = true;
    this.route.paramMap.subscribe(params => {
      let id = params.get('locationId');

      this.http.get("http://localhost/logistic_v1/api/locations/" + id + ".json").subscribe(data => {
        this.loading = false;
        console.log(`${id}`);

        this.location = data['data'];

        

        console.log(this.location);
        // this.locationForm.setValue(this.location);

      });

    });
  }

}
