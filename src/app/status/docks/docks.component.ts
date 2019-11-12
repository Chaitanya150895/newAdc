import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from 'src/app/http.service';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-docks',
  templateUrl: './docks.component.html',
  styleUrls: ['./docks.component.css']
})
export class DocksComponent implements OnInit {
  bays = [];
  loading = false;
  name: string;
  orders: any;
  notOnBaysTrailers: any;
  isTrailerActive: boolean;
  isUpdateDock: boolean;
  data: any;
  id: number;
  dockId: any;

  TRAILERS_INDEX = 0;
  trailer_statuses = [];


  formData = [
    { for: "trailer_id", control: "select", type: null, label: "Trailer", placeholder: "Select trailer_id", id: "trailer_id", control_name: "trailer_id", array: null },
    // { for: "action", control: "button", type: "submit", label: "Action", placeholder: "button", id: "action", control_name: "action" },
  ]

  customForm = this.fb.group({
    trailer_id: [''],
  });

  constructor(private fb: FormBuilder, private httpService: HttpService, private router: Router) { }

  ngOnInit() {
    this.loading = true;
    this.httpService.getHttp("bays.json").subscribe(data => {
      this.loading = false;
      this.bays = data['data'];
    });
    this.httpService.getHttp("orders.json").subscribe(data => {
      this.loading = false;
      this.orders = data['data'];
    });
    this.httpService.getHttp("trailers.json?on_bays=0").subscribe(data => {
      this.formData[this.TRAILERS_INDEX].array = (data['data']);
      this.loading = false;
      console.log(data);
      this.notOnBaysTrailers = data['data'];
    });
  }

  save(bayId) {
    let trailer_id=this.customForm.value.trailer_id;

   let data = { 
     "id": bayId,
      "trailer_id":trailer_id,
      "trailer":{
        "id":trailer_id,
        "on_bays":1
      }
    }
    this.httpService.putHttp("bays/" + bayId + ".json", data)
      .pipe(
      ).subscribe(data => {
        console.log(data);
        //for refresh current page
        this.router.routeReuseStrategy.shouldReuseRoute = function () { return false; };

        let currentUrl = this.router.url + '?';

        this.router.navigateByUrl(currentUrl)
          .then(() => {
            this.router.navigated = false;
            this.router.navigate([this.router.url]);
          });
      });
  }

  updateButton(id) {
    if (this.isUpdateDock != true) {
      this.isUpdateDock = true;
    } else {
      this.isUpdateDock = false;
    }
    console.log(id);
    this.id = id;
  }

  // gotoTrailer(id) {
  //   this.isTrailerActive = !this.isTrailerActive;
  //   this.id = id;
  // }

}
