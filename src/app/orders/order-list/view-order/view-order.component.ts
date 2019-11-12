import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/http.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-order',
  templateUrl: './view-order.component.html',
  styleUrls: ['./view-order.component.css']
})
export class ViewOrderComponent implements OnInit {
order;
loading= false;
  constructor(private http: HttpService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.loading = true;
    this.route.paramMap.subscribe(params => {
      let id = params.get('orderId');

      this.http.getHttp("orders/" + id + ".json").subscribe(data => {
        this.loading = false;
        console.log(`${id}`);

        this.order = data['data'];
        console.log(this.order);




      });

    });
  }

}
