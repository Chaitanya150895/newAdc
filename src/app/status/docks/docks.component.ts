import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from 'src/app/http.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-docks',
  templateUrl: './docks.component.html',
  styleUrls: ['./docks.component.css']
})
export class DocksComponent implements OnInit {
  bays = [];
  loading = false;
  customForm = new FormGroup({
    trailer_id: new FormControl(''),
  });
  name: string;
  orders: any;
  isTrailerActive: boolean;
  isUpdateDock: boolean;
  data: any;
  id: number;

  get trailer_id() { return this.customForm.get('trailer_id'); }

  constructor(private httpService: HttpService) { }

  ngOnInit() {
    this.loading = true;
    this.httpService.getHttp("bays.json").subscribe(data => {
      this.loading = false;
      console.log(data);
      this.bays = data['data'];
    });
    this.httpService.getHttp("orders.json").subscribe(data => {
      this.loading = false;
      console.log(data);
      this.orders = data['data'];
    });
  }
  
  save(bayId) {
    // alert(bayId);
    this.httpService.putHttp("bays/" + bayId + ".json", this.customForm.value)
      .pipe(
      ).subscribe(data => {
        console.log(data);
      });
  }

  updateButton(id) {
    this.isUpdateDock = true;
    this.id = id;
  }

  // gotoTrailer(id) {
  //   this.isTrailerActive = !this.isTrailerActive;
  //   this.id = id;
  // }

}
