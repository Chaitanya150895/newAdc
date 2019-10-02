import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/http.service';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-inventory',
  templateUrl: './edit-inventory.component.html',
  styleUrls: ['./edit-inventory.component.css']
})
export class EditInventoryComponent implements OnInit {

  LOCATION_INDEX = 0;
  PRODUCT_INDEX = 1;
  // ORDER_INDEX=3;
  INVENTORY_STATUS_INDEX=3;
  


  formData = [
    { for: "location_id", control: "select", type: null, label: "Location", placeholder: "Select Location", id: "location_id", control_name: "location_id", array: null },
    { for: "product_id", control: "select", type: null, label: "Product", placeholder: "Select Product", id: "product_id", control_name: "product_id", array: null },
    { for: "quantity", control: "input", type: "text", label: "Quantity", placeholder: "Enter Quantity", id: "quantity", control_name: "quantity" },
    // { for: "order_id", control: "select", type: null, label: "Order", placeholder: "Select Order", id: "order_id", control_name: "order_id", array: null },
    { for: "inventory_status_id", control: "select", type: null, label: "Status", placeholder: "Select Inventory Status", id: "inventory_status_id", control_name: "inventory_status_id", array: null },
  ]



  customForm = this.fb.group({
    location_id: [''],
    product_id: [''],
    quantity: [''],
    // order_id: [''],
    inventory_status_id: ['']
  });

  constructor(private fb: FormBuilder, private httpService: HttpService, private route: ActivatedRoute) { }

  ngOnInit() {

    //load locations in combo
    this.httpService.getHttp("locations.json").subscribe(data => {
      console.log("location :: "+data);
      this.formData[this.LOCATION_INDEX].array = (data['data']);
    });

    //load prodcut types in combo
    this.httpService.getHttp("products.json").subscribe(data => {
      console.log("product :: "+data);
      this.formData[this.PRODUCT_INDEX].array = (data['data']);
    });

    //load order types in combo
    // this.httpService.getHttp("orders.json").subscribe(data => {
    //   console.log("order :: "+JSON.stringify(data));
    //   this.formData[this.ORDER_INDEX].array = (data['data']);
    // });

    //load inventory status in combo
    this.httpService.getHttp("inventory_statuses.json").subscribe(data => {
      console.log(data);
      this.formData[this.INVENTORY_STATUS_INDEX].array = (data['data']);
    });

    this.route.params.subscribe(params => {
      let id = params['inventoryId']
      this.httpService.getHttp("inventories/" + id + ".json").subscribe(data => {
        console.log(data);
        let inventories = data['data'];
        this.customForm.patchValue(inventories)
      });
    });
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.customForm.value);
    this.httpService.putHttp("inventories.json", this.customForm.value)
      .pipe(
      ).subscribe(data => {
        console.log(data);
        this.customForm.reset();

      });
  }

}
