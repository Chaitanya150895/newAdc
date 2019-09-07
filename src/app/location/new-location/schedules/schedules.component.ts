import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  })
};

@Component({
  selector: '[app-schedules]',
  templateUrl: './schedules.component.html',
  styleUrls: ['./schedules.component.css']
})
export class SchedulesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
