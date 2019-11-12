import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/http.service'; 

@Component({
  selector: 'app-inventory-list',
  templateUrl: './inventory-list.component.html',
  styleUrls: ['./inventory-list.component.css']
})
export class InventoryListComponent implements OnInit {

  inventories = [];
  products = [];
  loading = false;
  tableHeaders = [
    "Id",
    "Location",
    "Product",
    "Quantity",
    "Status",
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
 onDelete(id, userId) {
    this.loading = true;
    this.http.deleteHttp("inventories/" + id + ".json").subscribe(data => {
      console.log(data);
      this.inventories.splice(userId, 1);
      this.loading = false;
    });
  }
}
