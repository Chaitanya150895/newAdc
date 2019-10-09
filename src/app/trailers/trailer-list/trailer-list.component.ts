import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/http.service';

@Component({
  selector: 'app-trailer-list',
  templateUrl: './trailer-list.component.html',
  styleUrls: ['./trailer-list.component.css']
})
export class TrailerListComponent implements OnInit {
  trailers = [];
  loading = false;
  showMsg: boolean;

  tableHeaders = [
    "Trailer Number",
    "Trailer Statuses",
    "Action"
  ]


  constructor( private httpService: HttpService) {

  }
  ngOnInit() {
    this.httpService.getHttp("trailers.json").subscribe( data => {

      console.log(data);

      this.trailers = data['data'];

    });
  }
  reloadData(){
    this.httpService.getHttp("trailers.json").subscribe( data => {

      console.log(data);

      this.trailers = data['data'];
    });
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