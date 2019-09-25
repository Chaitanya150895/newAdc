import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormArray, FormGroup, Validators } from '@angular/forms';
import { HttpService } from 'src/app/http.service';

@Component({
  selector: 'app-backroom-inventory',
  templateUrl: './backroom-inventory.component.html',
  styleUrls: ['./backroom-inventory.component.css']
})
export class BackroomInventoryComponent implements OnInit {

  PRODUCT_INDEX = 0;
  INVENTORY_STATUSES_INDEX: 3;
  

  formData = [
    { for: "product_id", control: "select", type: null, label: "Product", placeholder: "Select Product", id: "product_id", control_name: "product_id", array: null },
    { for: "quantity", control: "input", type: "number", label: "Quantity", placeholder: "Enter Quantity", id: "quantity", control_name: "quantity" },
    { for: "location_id", control: "input", type: "hidden", label: "", placeholder: "Enter Quantity", id: "location_id", control_name: "location_id" },
    { for: "inventory_statuses", control: "select", type: "null", label: "Inventory Statuses", placeholder: "Inventory Statuses", id: "inventory_statuses", control_name: "inventory_statuses" }]


  customForm = this.fb.group({

    product_id: [''],
    quantity: [''],
    location_id: [''],
    inventory_statuses: ['']
  });
  

  constructor(private fb: FormBuilder, private httpService: HttpService) { }

  ngOnInit() {

    let location_id = localStorage.getItem("LOCATION_ID");
    console.log('loc===>' + location_id);
    this.customForm.controls['location_id'].setValue(location_id);

      this.httpService.getHttp("products.json").subscribe(data => {
        console.log("product :: " + data);
        this.formData[this.PRODUCT_INDEX].array = (data['data']);
      });

       //load inventory status in combo
    this.httpService.getHttp("inventory_statuses.json").subscribe(data => {
      console.log(data);
      this.formData[this.INVENTORY_STATUSES_INDEX].array = (data['data']);
    });
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.customForm.value);
    console.log("submit :: loc:::"+this.customForm.value.location_id)
    this.httpService.postHttp("inventories.json", this.customForm.value)
      .pipe(
      ).subscribe(data => {
        console.log(data);
        this.customForm.reset();

      });
  }

}
