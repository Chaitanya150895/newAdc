import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpService } from 'src/app/http.service';
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {


  formData = [
  {for : "name",control:"input" , type:"text",label:"Name",placeholder:"Enter Name", id:"name",control_name:"name"},
  {for : "price", control:"input" ,type:"text",label:"Price",placeholder:"Enter Price",id:"price",control_name:"price"},
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

    });
   // alert("Added Successfully!");
}

  onUpdate(){

  }

}
