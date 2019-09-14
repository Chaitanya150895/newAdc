import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { HttpService } from 'src/app/http.service';

@Component({
  selector: 'app-add-trailer',
  templateUrl: './add-trailer.component.html',
  styleUrls: ['./add-trailer.component.css']
})
export class AddTrailerComponent implements OnInit {

  
  TRAILER_STATUS_INDEX = 1;
  
  



formData = [
  {for : "trailer_number",control:"input" , type:"text",label:"Trailer Number",placeholder:"Enter Trailer Number", id:"trailer_number",control_name:"trailer_number"},
  {for : "trailer_status_id", control:"select" ,type:null,label:"Trailer Status",placeholder:"Select Region",id:"trailer_status_id",control_name:"trailer_status_id",array:null},
 
]

  

  customForm = this.fb.group({
    trailer_number: [''],
    trailer_status_id: ['']
  });

  constructor(private fb:FormBuilder, private httpService: HttpService) { }

  ngOnInit() {
  
    //load region in combo
    this.httpService.getHttp("trailer_statuses.json").subscribe(data => {
      console.log(data);
     this.formData[this.TRAILER_STATUS_INDEX].array = ( data['data']);
    });

    



  }

  onUpdate(){
    
  }

  onSubmit(){
     // TODO: Use EventEmitter with form value
     console.warn(this.customForm.value);

    

     this.httpService.postHttp("trailers.json", this.customForm.value)
       .pipe(
       ).subscribe(data => {
         console.log(data);
         this.customForm.reset();
       
       });
      // alert("Added Successfully!");
  }





}
