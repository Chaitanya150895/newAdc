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
  constructor(private httpService: HttpService) { }

  ngOnInit() {
    this.loading = true;

    this.httpService.getHttp("products.json").subscribe(data => {
      this.loading = false;
      console.log(data);
      this.products = data['data'];

    });
  }
 save(index){
 
  console.log(this.products[index]);
  

 }

}
