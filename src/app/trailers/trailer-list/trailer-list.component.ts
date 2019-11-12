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
  trailer_statuses=[];


  constructor( private httpService: HttpService) {

  }
  ngOnInit() {
    this.httpService.getHttp("trailers.json").subscribe( data => {
      console.log(data);
      this.trailers = data['data'];
    });

    this.httpService.getHttp("trailer_statuses.json").subscribe(data => {
      console.log(data);
    // this.TRAILER_STATUSES_INDEX = ( data['data']);
    this.trailer_statuses = data['data'];
    });

  }
  reloadData(){
    this.httpService.getHttp("trailers.json").subscribe( data => {

      console.log(data);

      this.trailers = data['data'];
    });
  }
  setCodeEdit(index){
    this.trailers.forEach(p => p.canEditCode = false)
    this.trailers[index].canEditCode=true 
 }
 save(index){
  let trailer = this.trailers[index];
 
   this.httpService.putHttp("trailers/"+trailer.id+".json",JSON.stringify(trailer)).subscribe(data => {
     //this.loading = false;
     console.log(data);
     //this.products = data['data'];
     trailer.canEditCode = false;
   });
   console.log(this.trailers[index]);
  
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