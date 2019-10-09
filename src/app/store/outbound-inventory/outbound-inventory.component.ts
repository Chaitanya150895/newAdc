import { Component,OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { FormBuilder, FormArray, FormGroup, Validators } from '@angular/forms';
import { HttpService } from 'src/app/http.service';
import { ActivatedRoute } from '@angular/router';
import * as moment from 'moment'
import { ProductOrderComponent } from 'src/app/product-order/product-order.component';

@Component({
  selector: 'app-outbound-inventory',
  templateUrl: './outbound-inventory.component.html',
  styleUrls: ['./outbound-inventory.component.css']
})
export class OutboundInventoryComponent implements OnInit {
  @ViewChild('child',null) child:ProductOrderComponent;

  TRAILER_INDEX = 0;
  PRODUCT_INDEX = 1;

  formData = [
    { for: "trailer_id", control: "select", type: null, label: "Trailer", placeholder: "Select Trailer", id: "trailer_id", control_name: "trailer_id", array: null },
    { for: "product_id", control: "select", type: null, label: "Product", placeholder: "Select Product", id: "product_id", control_name: "product_id", array: null },
    { for: "quantity", control: "input", type: "number", label: "Quantity", placeholder: "Enter Quantity", id: "quantity", control_name: "quantity" },
    // { for: "location_id", control: "input", type: "hidden", label: "", placeholder: "Enter Quantity", id: "location_id", control_name: "location_id" },
    { for: "action", control: "button", type: "submit", label: "Action", placeholder: "button", id: "action", control_name: "action" },
  ]

  customForm = this.fb.group({

    trailer_id: [''],
    product_id: [''],
    quantity: [''],
    location_id: ['35']
  });

  constructor(private route: ActivatedRoute,private fb:FormBuilder,private httpService: HttpService) { }
  ngOnInit() {

    this.httpService.getHttp("trailers.json").subscribe(data => {
      console.log(data);
     this.formData[this.TRAILER_INDEX].array = ( data['data']);
    });

    this.httpService.getHttp("products.json").subscribe(data => {
      console.log(data);
     this.formData[this.PRODUCT_INDEX].array = ( data['data']);
    });

    // this.httpService.getHttp("inventory_statuses.json").subscribe(data => {
    //   console.log("Inventory_statuses:: " + data);
    //   this.formData[1].array = (data['data']);
    // });

    let location_id = localStorage.getItem("LOCATION_ID");
    console.log('loc ===>' + location_id);
    this.customForm.controls['location_id'].setValue(location_id);
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.customForm.value);
    console.log("submit :: loc:::" + this.customForm.value.location_id)
    this.httpService.postHttp("orders.json", this.customForm.value)
      .pipe(
      ).subscribe(data => {
        console.log(data);
        this.customForm.reset();
        
        this.child.reloadData();
      });
  }
}
