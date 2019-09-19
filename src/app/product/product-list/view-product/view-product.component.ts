import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/http.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit {
  product;
  loading= false;
    constructor(private http: HttpService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.loading = true;
    this.route.paramMap.subscribe(params => {
      let id = params.get('productId');

      this.http.getHttp("products/" + id + ".json").subscribe(data => {
        this.loading = false;
        console.log(`${id}`);

        this.product = data['data'];
        console.log(this.product);




      });

    });
  }

}
