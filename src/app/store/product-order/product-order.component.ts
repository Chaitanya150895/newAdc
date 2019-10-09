import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/http.service';
 
@Component({
  selector: 'app-product-order',
  templateUrl: './product-order.component.html',
  styleUrls: ['./product-order.component.css']
})
export class ProductOrderComponent implements OnInit {

  orders = [];
  products = [];
  loading = false;
  showMsg: boolean;

  tableHeaders = [
    "Trailer",
    "Product",
    "Quantity",
    "Action"
  ]
  http: any;
  constructor(private httpService: HttpService) {
  }

  ngOnInit() {
    this.loading = true;

    this.httpService.getHttp("orders.json").subscribe(data => {
      this.loading = false;
      console.log(data);
      this.orders = data['data'];

    });
  }

  reloadData() {
    this.loading = true;
    console.log("reloadData");
    this.httpService.getHttp("orders.json").subscribe(data => {
      this.loading = false;
      console.log(data);
      this.orders = data['data'];
    });
  }


  deleteOrder(id, orderId) {
    this.httpService.deleteHttp("orders/"+id+".json").subscribe(data => {

      console.log(data);

      // this.locations = data['data'];
      this.orders.splice(orderId, 1);
      this.showMsg = true;
      this.loading = false;
    });
  }
  }





