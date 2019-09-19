import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from 'src/app/http.service';

@Component({
  selector: 'app-view-trailer',
  templateUrl: './view-trailer.component.html',
  styleUrls: ['./view-trailer.component.css']
})
export class ViewTrailerComponent implements OnInit {
  trailer;
  loading = false;

  constructor(private http: HttpService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.loading = true;
    this.route.paramMap.subscribe(params => {
      let id = params.get('trailerId');

      this.http.getHttp("trailers/" + id + ".json").subscribe(data => {
        this.loading = false;
        console.log(`${id}`);

        this.trailer = data['data'];
        console.log(this.trailer);




      });

    });
  }


}
