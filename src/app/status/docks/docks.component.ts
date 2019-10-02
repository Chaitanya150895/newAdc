import { Component, OnInit } from '@angular/core';
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
  get trailer_id() { return this.customForm.get('trailer_id'); }

  constructor(private httpService: HttpService) { }

  ngOnInit() {
    this.loading = true;
    this.httpService.getHttp("bays.json").subscribe(data => {
      this.loading = false;
      console.log(data);
      this.bays = data['data'];
    });
  }
  addTrailer(bayId) {
    this.httpService.putHttp("bays/" + bayId + ".json", this.customForm.value)
      .pipe(
      ).subscribe(data => {
        console.log(data);
      });
  }

}
