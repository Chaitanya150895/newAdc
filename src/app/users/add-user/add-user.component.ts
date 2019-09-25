import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, FormArray, ControlContainer } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { HttpService } from 'src/app/http.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  LOCATION_INDEX = 6;
  TYPE_INDEX: number = 7;
  MENU_INDEX: number = 8;

  formData = [
    { for: "username", control: "input", type: "text", label: "Username", placeholder: "Enter username", id: "username", control_name: "username" },
    { for: "password", control: "input", type: "text", label: "Password", placeholder: "Enter password", id: "password", control_name: "password" },
    { for: "first_name", control: "input", type: "text", label: "First Name", placeholder: "Enter First Name", id: "first_name", control_name: "first_name" },
    { for: "last_name", control: "input", type: "text", label: "Last Name", placeholder: "Enter Last Name", id: "last_name", control_name: "last_name" },
    { for: "email", control: "input", type: "text", label: "Email", placeholder: "Enter Email", id: "email", control_name: "email" },
    { for: "mobile", control: "input", type: "text", label: "Mobile Number", placeholder: "Enter Mobile Number", id: "mobile", control_name: "mobile" },
    { for: "location_id", control: "select", type: "null", label: "Location", placeholder: "Select Location", id: "location_id", control_name: "location_id", array: null }

  ]

  customForm = this.fb.group({
    username: [''],
    password: [''],
    first_name: [''],
    last_name: [''],
    email: [''],
    mobile: [''],
    location_id: [''],
    types: this.fb.array([]),
    menus: this.fb.array([])
  });

  constructor(private fb: FormBuilder, private httpService: HttpService) { }

  ngOnInit() {

     //load locations in combo
     this.httpService.getHttp("locations.json").subscribe(data => {
      console.log("location :: " + data);
      this.formData[this.LOCATION_INDEX].array = (data['data']);
    });

    //load types in combo
    this.httpService.getHttp("types.json").subscribe(data => {
      console.log(data);
      let typesData = (data['data']);
      typesData.forEach(element => {
        this.types.push(this.newType(element));
      });

    });
    //load menus in combo
    this.httpService.getHttp("menus.json").subscribe(data => {
      let menusData = (data['data']);
      for (let i = 0; i < menusData.length; i++) {
        let parent_id = menusData[i].id;
        let subMenus = menusData[i].children;
        this.menus.push(this.newMenu(menusData[i], 0));
        for (let j = 0; j < subMenus.length; j++) {
          this.menus.push(this.newMenu(subMenus[j], parent_id));
        }
      }
    });
  }

  checkValue(target) {
    console.log("id :: " + target);
    let menus1 = this.customForm.value.menus;
    for (let i = 0; i < menus1.length; i++) {
      if (menus1[i].parent_id == target) {
        if (menus1[i].check == false) {
          console.log("Children :: " + menus1[i].name);
          menus1[i].check = true;
        } else {
          menus1[i].check = false;
        }
      }
    }
    this.customForm.patchValue(this.customForm.value);
  }
  onSubmit() {
    // TODO: Use EventEmitter with form value
    let typeArray = [];
    this.customForm.value.types.forEach(element => {
      if (element.check == true) {
        typeArray.push(element);
      }
    });
    this.customForm.value.types = typeArray;
    //Menu Array
    let menuArray = [];
    this.customForm.value.menus.forEach(element => {
      if (element.check == true) {
        menuArray.push(element);
      }
    });
    let result_menu = menuArray.map(({ parent_id, id, name, check }) => ({ id, name, check }));
    this.customForm.value.menus = result_menu;
    console.warn(this.customForm.value);
    this.httpService.postHttp("users.json", this.customForm.value)
      .pipe(
      ).subscribe(data => {
        console.log(data);
      });
  }

  get types() {
    return this.customForm.get("types") as FormArray;
  }

  newType(type) {
    return this.fb.group({
      id: type.id,
      name: type.name,
      check: false
    }) as FormGroup
  }

  get menus() {
    return this.customForm.get("menus") as FormArray;
  }
  newMenu(menu, parent_id) {
    return this.fb.group({
      parent_id: parent_id,
      id: menu.id,
      name: menu.name,
      check: false
    }) as FormGroup
  }
}
