import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormArray, FormGroup, Validators } from '@angular/forms';
import { HttpService } from 'src/app/http.service';
import { TrailerListComponent } from '../trailer-list/trailer-list.component';

@Component({
  selector: 'app-add-trailer',
  templateUrl: './add-trailer.component.html',
  styleUrls: ['./add-trailer.component.css']
})
export class AddTrailerComponent implements OnInit {
  @ViewChild('child',null) child:TrailerListComponent;

  TRAILER_STATUSES_INDEX = 1;
  trailer_statuses=[];

  
  formData = [
    {for : "trailer_number",control:"input" , type:"text",label:"Trailer Number",placeholder:"Enter Number", id:"trailer_number",control_name:"trailer_number"},
   {for : "trailer_statuses_id", control:"select" ,type:null,label:"trailer_statuses_id",placeholder:"Select trailer_statuses_id",id:"trailer_statuses_id",control_name:"trailer_statuses_id",array:null},
   { for: "action", control: "button", type: "submit", label: "Action", placeholder: "button", id: "action", control_name: "action" },
  ]

  customForm = this.fb.group({
    trailer_number: ['',[Validators.required]],
    trailer_statuses_id: [''],

  });

  constructor(private fb:FormBuilder, private httpService: HttpService) {
  }

  ngOnInit() {
    this.httpService.getHttp("trailer_statuses.json").subscribe(data => {
      console.log(data);
    this.formData[this. TRAILER_STATUSES_INDEX].array = ( data['data']);
    // this.trailer_statuses = data['data'];
    });

  }

  onSubmit() {
    console.warn(this.customForm.value);
       this.httpService.postHttp("trailers.json", this.customForm.value)
       .pipe(
       ).subscribe(data => {
         console.log(data);
         this.customForm.reset();
          
        this.child.reloadData();

       });
      // alert("Added Successfully!");
  }
}