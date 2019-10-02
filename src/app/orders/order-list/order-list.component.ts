import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/http.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {

  orders = [];
  loading = false;
  showMsg: boolean;

  tableHeaders = [

    "Source",
    "Destination",
    "User",
    "Products",
    "Quantity",
    "Trailer",
    "Pickup Time",
    "DropOff Time",
    "Order Status",
    "Comments",
    "Action"
  ]
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
  deleteOrder(id, locationId) {
    this.httpService.deleteHttp("orders/"+id+".json").subscribe(data => {

      console.log(data);

      // this.locations = data['data'];
      this.orders.splice(locationId, 1);
      this.showMsg = true;

    });
  }
  }





