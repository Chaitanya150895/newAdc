import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/http.service';
import { FormBuilder, FormArray, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-edit-location',
  templateUrl: './edit-location.component.html',
  styleUrls: ['./edit-location.component.css']
})
export class EditLocationComponent implements OnInit {

  REGION_INDEX = 5;
  LOCATION_TYPE_INDEX = 6;
  regions=[];

  defaultSchdeuls = [
    { day:"Monday",am:false,pm:false},
    { day:"Tuesday",am:false,pm:false},
    { day:"Wednesday",am:false,pm:false},
    { day:"Thursday",am:false,pm:false},
    { day:"Friday",am:false,pm:false},
    { day:"Saturday",am:false,pm:false},
    { day:"Sunday",am:false,pm:false}
  ]

formData = [
 // {for : "id",control:"input" , type:"text",label:"ID",placeholder:"Enter Name", id:"id",control_name:"id"},
  {for : "name",control:"input" , type:"text",label:"Name",placeholder:"Enter Name", id:"name",control_name:"name"},
  {for : "address", control:"input" ,type:"text",label:"Address",placeholder:"Enter Address",id:"address",control_name:"address"},
  {for : "city", control:"input" ,type:"text",label:"City",placeholder:"Enter City",id:"city",control_name:"city"},
  {for : "state", control:"input" ,type:"text",label:"State",placeholder:"Enter State",id:"state",control_name:"state"},
  {for : "location_number", control:"input" ,type:"text",label:"Location Number",placeholder:"Enter Location Number",id:"location_number",control_name:"location_number"},
  {for : "region", control:"select" ,type:null,label:"Region",placeholder:"Select Region",id:"region_id",control_name:"region_id",array:null},
  {for : "location_type", control:"select" ,type:null,label:"Location Type",placeholder:"Select Location Type",id:"location_type_id",control_name:"location_type_id",array:null}
]

  

  locationForm = this.fb.group({
    id:[''],
    name: [''],
    address: [''],
    city: [''],
    state: [''],
    location_number:[''],
    region_id:[''],
    location_type_id:[''],
    schedules:this.fb.array([
    ])


  });

  constructor(private fb:FormBuilder, private httpService: HttpService) { }

  ngOnInit() {
    this.httpService.getHttp("http://localhost/logistic_v1/api/regions.json").subscribe(data => {
      console.log(data);
     this.formData[this.REGION_INDEX].array = ( data['data']);
    });

    this.httpService.getHttp("http://localhost/logistic_v1/api/location_types.json").subscribe(data => {
      console.log(data);
     this.formData[this.LOCATION_TYPE_INDEX].array = ( data['data']);
    });

    //load default schedules to form array
    this.defaultSchdeuls.forEach(element => {
      this.schedules.push(this.newSchedules(element.day))
    });

    this.httpService.getHttp("http://localhost/logistic_v1/api/locations/34.json").subscribe(data => {
      console.log(data);
     let location = data['data'];
     this.locationForm.patchValue(location)
    });


  }

  onUpdate(){
   
  }

  onSubmit(){
  
  }

  get schedules(){
    return this.locationForm.get("schedules") as FormArray;
  }

  newSchedules(day:string){
    return this.fb.group({
      id:[''],
      day:[day],
      am:false,
      pm:false
    }) as FormGroup
  }


}
