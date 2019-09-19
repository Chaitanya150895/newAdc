import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { HttpService } from 'src/app/http.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-order',
  templateUrl: './edit-order.component.html',
  styleUrls: ['./edit-order.component.css']
})
export class EditOrderComponent implements OnInit {
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
    {for : "pickup_time",control:"input" , type:"text",label:"Pickup Time",placeholder:"Enter Pickup Time", id:"pickup_time",control_name:"pickup_time"},
    {for : "drop_off_time",control:"input" , type:"text",label:"DropOff Time",placeholder:"Enter DropOff Time", id:"drop_off_time",control_name:"drop_off_time"},
    {for : "order_status_id", control:"select" ,type:null,label:"Order Status",placeholder:"Select Order Status",id:"order_status_id",control_name:"order_status_id",array:null},
    {for : "comments",control:"input" , type:"text",label:"Comments",placeholder:"Enter Comments", id:"comments",control_name:"comments"},
  ]

  customForm = this.fb.group({
    id:[],
    source_id: [''],
    destination_id: [''],
    user_id: [''],
    product_id: [''],
    quantity:[''],
    trailer_id:[''],
    pickup_time:[''],
    drop_off_time:[''],
   order_status_id: [''],
   comments: ['']
  });

  constructor(private fb:FormBuilder,private httpService: HttpService,private route:ActivatedRoute) {}

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

    this.route.params.subscribe(params => {
      let id = params['orderId']
      //now get the data from locations api for based on id param
      this.httpService.getHttp("orders/"+id+".json").subscribe(data => {
        console.log(data);
       let order = data['data'];

       //now load the data inside the form
       this.customForm.patchValue(order)

      });
    });
  }

  onSubmit(){
    this.httpService.putHttp("orders/"+ this.customForm.value.id +".json", this.customForm.value)
    .pipe(
    ).subscribe(data => {
      console.log(data);
     this.customForm.reset();

    });
 }
}
