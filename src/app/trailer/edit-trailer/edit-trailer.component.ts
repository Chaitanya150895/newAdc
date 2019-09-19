import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/http.service';
import { Validators, FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-edit-trailer',
  templateUrl: './edit-trailer.component.html',
  styleUrls: ['./edit-trailer.component.css']
})
export class EditTrailerComponent implements OnInit {
  TRAILER_STATUSES_INDEX = 1;
  trailer_statuses=[];

  formData = [
    {for : "trailer_number",control:"input" , type:"text",label:"Trailer Number",placeholder:"Enter Trailer Number", id:"trailer_number",control_name:"trailer_number"},
   {for : "trailer_statuses_id", control:"select" ,type:null,label:"trailer_statuses_id",placeholder:"Select trailer_statuses_id",id:"trailer_statuses_id",control_name:"trailer_statuses_id",array:null}
  ]

  customForm = this.fb.group({
    id:[],
    trailer_number: ['',[Validators.required]],
    trailer_statuses_id: [''],

  });
 constructor(private fb:FormBuilder, private httpService: HttpService, private route:ActivatedRoute){}
  ngOnInit() {
    this.httpService.getHttp("trailer_statuses.json").subscribe(data => {
      console.log(data);
    this.formData[this. TRAILER_STATUSES_INDEX].array = ( data['data']);
    // this.trailer_statuses = data['data'];
    });

    this.route.params.subscribe(params => {
      let id = params['trailerId']
      //now get the data from locations api for based on id param
      this.httpService.getHttp("trailers/"+id+".json").subscribe(data => {
        console.log(data);
       let trailer = data['data'];

       //now load the data inside the form
       this.customForm.patchValue(trailer)

      });
    });
  }
  onSubmit(){
    this.httpService.putHttp("trailers/"+ this.customForm.value.id +".json", this.customForm.value)
    .pipe(
    ).subscribe(data => {
      console.log(data);
     this.customForm.reset();

    });
 }

}
