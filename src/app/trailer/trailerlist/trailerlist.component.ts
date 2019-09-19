import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/http.service';

@Component({
  selector: 'app-trailerlist',
  templateUrl: './trailerlist.component.html',
  styleUrls: ['./trailerlist.component.css']
})
export class TrailerlistComponent implements OnInit {
  trailers = [];
  loading = false;
  showMsg: boolean;

  tableHeaders = [
    "Trailer Number",
    "Trailer_stauses_id"
  ]


  constructor( private httpService: HttpService) {

    this.httpService.getHttp("trailers.json").subscribe( data => {

      console.log(data);

      this.trailers = data['data'];

    });
  }
  ngOnInit() {
  }
  deleteTrailer(id, trailerId) {
      this.httpService.deleteHttp("trailers/"+id+".json").subscribe(data => {

      console.log(data);

      // this.locations = data['data'];
      this.trailers.splice(trailerId, 1);
      this.showMsg = true;

      });
  }
}

