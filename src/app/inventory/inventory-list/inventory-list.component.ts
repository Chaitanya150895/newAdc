import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpHeaders, HttpClient } from '@angular/common/http';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  })
};

@Component({
  selector: 'app-inventory-list',
  templateUrl: './inventory-list.component.html',
  styleUrls: ['./inventory-list.component.css']
})
export class InventoryListComponent implements OnInit {

  inventories = [];
  products = [];
  loading = false;
  constructor(private http: HttpClient) {
  }
  inventory_form = new FormGroup({
    product_id: new FormControl(''),
    quantity: new FormControl('')
  });
  onAddInventory() {
    this.loading = true; this.http.post("http://localhost/logistic_v1/api/inventories.json", this.inventory_form.value, httpOptions)
      .pipe().subscribe(data => {
        console.log(data);
        this.loading = false;
      });

  }
  onDeleteInventory(id, inventoryId) {
    this.loading = true;
    this.http.delete("http://localhost/logistic_v1/api/inventories/" + id + ".json").subscribe(data => {
      console.log(data);
      this.inventories.splice(inventoryId, 1);
      this.loading = false;
    });
  }
  ngOnInit() {
    this.loading = true;
    this.http.get("http://localhost/logistic_v1/api/inventories.json").subscribe(data => {
      console.log(data);
      this.loading = false;
      this.inventories = data['data'];
    });
    this.http.get("http://localhost/logistic_v1/api/products.json").subscribe(data => {
      console.log(data);
      this.products = data['data'];
    });
  }

}
