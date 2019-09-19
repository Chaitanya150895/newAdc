import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormArray, FormGroup, Validators } from '@angular/forms';
import { HttpService } from 'src/app/http.service';


@Component({
  selector: 'app-new-trailer',
  templateUrl: './new-trailer.component.html',
  styleUrls: ['./new-trailer.component.css']
})
export class NewTrailerComponent implements OnInit {
  TRAILER_STATUSES_INDEX = 1;
  trailer_statuses=[];

  formData = [
    {for : "trailer_number",control:"input" , type:"text",label:"Trailer Number",placeholder:"Enter Trailer Number", id:"trailer_number",control_name:"trailer_number"},
   {for : "trailer_statuses_id", control:"select" ,type:null,label:"trailer_statuses_id",placeholder:"Select trailer_statuses_id",id:"trailer_statuses_id",control_name:"trailer_statuses_id",array:null}
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
    // console.warn(this.TrailerForm.value);
    // this.httpService.postHttp("http://localhost/logistic_v1/api/trailers.json", this.TrailerForm.value)
    //   .pipe().subscribe(data => {
    //     console.log(data);
    //   });


    this.httpService.postHttp("trailers.json", this.customForm.value)
       .pipe(
       ).subscribe(data => {
         console.log(data);
         this.customForm.reset();

       });
      // alert("Added Successfully!");
  }




}
