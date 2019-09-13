import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormArray, FormGroup } from '@angular/forms';
import { HttpService } from 'src/app/http.service';

@Component({
  selector: 'app-add-location',
  templateUrl: './add-location.component.html',
  styleUrls: ['./add-location.component.css']
})
export class AddLocationComponent implements OnInit {

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
  {for : "name",control:"input" , type:"text",label:"Name",placeholder:"Enter Name", id:"name",control_name:"name"},
  {for : "address", control:"input" ,type:"text",label:"Address",placeholder:"Enter Address",id:"address",control_name:"address"},
  {for : "city", control:"input" ,type:"text",label:"City",placeholder:"Enter City",id:"city",control_name:"city"},
  {for : "state", control:"input" ,type:"text",label:"State",placeholder:"Enter State",id:"state",control_name:"state"},
  {for : "location_number", control:"input" ,type:"text",label:"Location Number",placeholder:"Enter Location Number",id:"location_number",control_name:"location_number"},
  {for : "region", control:"select" ,type:null,label:"Region",placeholder:"Select Region",id:"region_id",control_name:"region_id",array:null},
  {for : "location_type", control:"select" ,type:null,label:"Location Type",placeholder:"Select Location Type",id:"location_type_id",control_name:"location_type_id",array:null}
]

  

  locationForm = this.fb.group({
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


  }

  onSubmit(){
     // TODO: Use EventEmitter with form value
     console.warn(this.locationForm.value);

     this.locationForm.value.schedules.forEach(element => {

      if(element.am == false){
        element.am = 0;
      }else{
        element.am = 1;
      }
      if(element.pm == false){
        element.pm = 0;
      }else{
        element.pm = 1;
      }
       
     });

     this.httpService.postHttp("http://localhost/logistic_v1/api/locations.json", this.locationForm.value)
       .pipe(
       ).subscribe(data => {
         console.log(data);
         this.locationForm.reset();
       
       });
      // alert("Added Successfully!");
  }

  get schedules(){
    return this.locationForm.get("schedules") as FormArray;
  }

  newSchedules(day:string){
    return this.fb.group({
      day:[day],
      am:false,
      pm:false
    }) as FormGroup
  }

}
