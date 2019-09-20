import { Component,OnInit, AfterViewInit } from '@angular/core';
import { FormBuilder, FormArray, FormGroup, Validators } from '@angular/forms';
import { HttpService } from 'src/app/http.service';
import { DatePipe } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

import * as moment from 'moment'




@Component({
  selector: 'app-new-order',
  templateUrl: './new-order.component.html',
  styleUrls: ['./new-order.component.css'],

})
export class NewOrderComponent implements OnInit {
  SOURCE_INDEX= 0;
  DESTINATION_INDEX = 1;
  USER_INDEX = 2;
  PRODUCT_INDEX = 3;
  TRAILER_INDEX =5;
  ORDER_STATUS_INDEX =8;
  showMsg: boolean = false;

  formData = [
    {for : "source_id", control:"select" ,type:null,label:"Source",placeholder:"Select source",id:"source_id",control_name:"source_id",array:null},
    {for : "destination_id", control:"select" ,type:null,label:"Destination",placeholder:"Select Destination",id:"destination_id",control_name:"destination_id",array:null},
    {for : "user_id", control:"select" ,type:null,label:"User",placeholder:"Select User",id:"user_id",control_name:"user_id",array:null},
    {for : "product_id", control:"select" ,type:null,label:"Products",placeholder:"Select Product",id:"product_id",control_name:"product_id",array:null},
    {for : "quantity", control:"input" ,type:"number",label:"Quantity",placeholder:"Enter Quantity",id:"quantity",control_name:"quantity"},
    {for : "trailer_id", control:"select" ,type:null,label:"Trailer",placeholder:"Select Trailer",id:"trailer_id",control_name:"trailer_id",array:null},
    {for : "pickup_time",type:"datetime",label:"Pickup Time",placeholder:"Enter Pickup Time", id:"pickup_time",control_name:"pickup_time"},
    {for : "drop_off_time", type:"datetime",label:"DropOff Time",placeholder:"Enter DropOff Time", id:"drop_off_time",control_name:"drop_off_time"},
    {for : "order_status_id", control:"select" ,type:null,label:"Order Status",placeholder:"Select Order Status",id:"order_status_id",control_name:"order_status_id",array:null},
    {for : "comments",control:"input" , type:"text",label:"Comments",placeholder:"Enter Comments", id:"comments",control_name:"comments"},
  ]

  customForm = this.fb.group({
    source_id: [''],
    destination_id: [''],
    user_id: [''],
    product_id: [''],
    quantity:[''],
    trailer_id:[''],
    pickup_time:[''],
    drop_off_time:[''],
   order_status_id: [''],
   comments: [''],

  });

  constructor( private route: ActivatedRoute,private fb:FormBuilder,private httpService: HttpService, private datepipe: DatePipe) {

  }

  ngOnInit() {
    this.httpService.getHttp("locations.json").subscribe(data => {
      console.log(data);
     this.formData[this.SOURCE_INDEX].array = ( data['data']);
    });
    this.httpService.getHttp("locations.json").subscribe(data => {
      console.log(data);
     this.formData[this.DESTINATION_INDEX].array = ( data['data']);
    });
    this.httpService.getHttp("users.json").subscribe(data => {
      console.log(data);
     this.formData[this.USER_INDEX].array = ( data['data']);
    });
    this.httpService.getHttp("products.json").subscribe(data => {
      console.log(data);
     this.formData[this.PRODUCT_INDEX].array = ( data['data']);
    });
    this.httpService.getHttp("trailers.json").subscribe(data => {
      console.log(data);
     this.formData[this.TRAILER_INDEX].array = ( data['data']);
    });
    this.httpService.getHttp("order_statuses.json").subscribe(data => {
      console.log(data);
     this.formData[this.ORDER_STATUS_INDEX].array = ( data['data']);
    });

  }


   onSubmit() {
    console.warn(this.customForm.value.pickup_time);
    let dt:Date = this.customForm.value.pickup_time;
    this.customForm.value.pickup_time = moment(this.customForm.value.pickup_time).format("YYYY-MM-DD HH:mm:ss");
    this.customForm.value.drop_off_time = moment(this.customForm.value.drop_off_time).format("YYYY-MM-DD HH:mm:ss");
    
    

    // TODO: Use EventEmitter with form value
    this.route.paramMap.subscribe(params => {
      let id = params.get('orderId.pickup_time');
  this.datepipe.transform(id,'m/dd/yyyy hh:mm:ss');
    });
    this.httpService.postHttp("orders.json", this.customForm.value)
    .pipe(
    ).subscribe(data => {
      console.log(data);

      this.customForm.reset();

    });
     // alert("Added Successfully!");
  }






}

