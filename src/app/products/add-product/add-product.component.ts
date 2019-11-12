import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpService } from 'src/app/http.service';
import { ProductListComponent } from '../product-list/product-list.component';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  @ViewChild('child',null) child:ProductListComponent;

  formData = [
  {for : "name",control:"input" , type:"text",label:"Name",placeholder:"Enter Name", id:"name",control_name:"name"},
  {for : "price", control:"input" ,type:"text",label:"Price",placeholder:"Enter Price",id:"price",control_name:"price"},
  { for: "action", control: "button", type: "submit", label: "Action", placeholder: "button", id: "action", control_name: "action" },
  ]

  customForm = this.fb.group({
    id:[],
    name: ['',[Validators.required, Validators.minLength(4)]],
    price: ['',[Validators.required]],
  })


  constructor(private fb:FormBuilder,private httpService:HttpService) { }

  ngOnInit() {
  }

  onSubmit(){
    // TODO: Use EventEmitter with form value
    console.warn(this.customForm.value);
    this.httpService.postHttp("products.json", this.customForm.value)
    .pipe(
    ).subscribe(data => {
      console.log(data);
      this.customForm.reset();
      this.child.reloadData();
    });
   // alert("Added Successfully!");
}

}
