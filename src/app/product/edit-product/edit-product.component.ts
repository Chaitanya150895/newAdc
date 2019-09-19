import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { HttpService } from 'src/app/http.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  formData = [
    {for : "name",control:"input" , type:"text",label:"Name",placeholder:"Enter Name", id:"name",control_name:"name"},
    {for : "price", control:"input" ,type:"text",label:"Price",placeholder:"Enter Price",id:"price",control_name:"price"},
    ]
    customForm = this.fb.group({
      id:[],
      name: ['',[Validators.required, Validators.minLength(4)]],
      price: ['',[Validators.required]],
    })

  constructor(private fb:FormBuilder,private httpService:HttpService,private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      let id = params['productId']
      //now get the data from locations api for based on id param
      this.httpService.getHttp("products/"+id+".json").subscribe(data => {
        console.log(data);
       let product = data['data'];

       //now load the data inside the form
       this.customForm.patchValue(product)

      });
    });
  }
  onSubmit(){
    this.httpService.putHttp("products/"+ this.customForm.value.id +".json", this.customForm.value)
    .pipe(
    ).subscribe(data => {
      console.log(data);
     this.customForm.reset();

    });
 }
}
