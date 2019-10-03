import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/http.service';

@Component({
  selector: 'app-product-inventory',
  templateUrl: './product-inventory.component.html',
  styleUrls: ['./product-inventory.component.css']
})

export class ProductInventoryComponent implements OnInit {
  inventories = [];
  products = [];
  loading = false;
  tableHeaders = [
    
    "Product",
    "Quantity",
    "Action"
  ]
  constructor(private http: HttpService) { }

  ngOnInit() {
    this.loading = true;
    this.http.getHttp("inventories.json").subscribe(data => {
      this.loading = false;
      console.log(data);
      this.inventories = data['data'];
    });
  } 

  reloadData(){
    this.loading = true;
    this.http.getHttp("inventories.json").subscribe(data => {
      this.loading = false;
      console.log(data);
      this.inventories = data['data'];
    });
  }

 onDelete(id, userId) {
    this.loading = true;
    this.http.deleteHttp("inventories/" + id + ".json").subscribe(data => {
      console.log(data);
      this.inventories.splice(userId, 1);
      this.loading = false;
    });
  }
}
