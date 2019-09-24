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

  formData = [
    { for: "product_id", control: "select", type: null, label: "Product", placeholder: "Select Product", id: "product_id", control_name: "product_id", array: null },
    { for: "quantity", control: "input", type: "number", label: "Quantity", placeholder: "Enter Quantity", id: "quantity", control_name: "quantity" },]

  customForm = this.fb.group({
    product_id: [''],
    quantity: ['']
  });

  constructor(private fb: FormBuilder, private httpService: HttpService) { }

  ngOnInit() {
    this.httpService.getHttp("products.json").subscribe(data => {
      console.log("product :: " + data);
      this.formData[this.PRODUCT_INDEX].array = (data['data']);
    });
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.customForm.value);
    this.httpService.postHttp("inventories.json", this.customForm.value)
      .pipe(
      ).subscribe(data => {
        console.log(data);
        this.customForm.reset();

      });
  }

}
