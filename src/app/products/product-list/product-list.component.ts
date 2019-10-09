import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/http.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products = [];
  loading = false;
  
  tableHeaders = [
    
    "Name",
    "Price",
    "Action"
  ]
  route: any;
  showMsg: boolean;
  constructor(private httpService: HttpService) { }

  ngOnInit() {
    this.loading = true;

    this.httpService.getHttp("products.json").subscribe(data => {
      this.loading = false;
      console.log(data);
      this.products = data['data'];

    });
  }
  reloadData(){
    this.httpService.getHttp("products.json").subscribe( data => {

      console.log(data);

      this.products = data['data'];
    });
  }
  setCodeEdit(index){
    this.products.forEach(p => p.canEditCode = false)
    this.products[index].canEditCode=true 
 }
//  onEnter(index){
//    this.save(index);
//  }
 save(index){
 let product = this.products[index];

  this.httpService.putHttp("products/"+product.id+".json",JSON.stringify(product)).subscribe(data => {
    //this.loading = false;
    console.log(data);
    //this.products = data['data'];
    product.canEditCode = false;
  });
  console.log(this.products[index]);
 
 }
 deleteProduct(id, productId) {
      this.httpService.deleteHttp("products/"+id+".json").subscribe(data => {

      console.log(data);

      // this.locations = data['data'];
      this.products.splice(productId, 1);
      this.showMsg = true;

      });
  }

}
