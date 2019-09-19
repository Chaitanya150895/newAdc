import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray, FormBuilder } from '@angular/forms';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from 'src/app/http.service';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  })
};

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  TYPE_INDEX: number = 6;
  MENU_INDEX: number = 7;

  formData = [
    { for: "username", control: "input", type: "text", label: "Username", placeholder: "Enter username", id: "username", control_name: "username" },
    { for: "password", control: "input", type: "text", label: "Password", placeholder: "Enter password", id: "password", control_name: "password" },
    { for: "first_name", control: "input", type: "text", label: "First Name", placeholder: "Enter First Name", id: "first_name", control_name: "first_name" },
    { for: "last_name", control: "input", type: "text", label: "Last Name", placeholder: "Enter Last Name", id: "last_name", control_name: "last_name" },
    { for: "email", control: "input", type: "text", label: "Email", placeholder: "Enter Email", id: "email", control_name: "email" },
    { for: "mobile", control: "input", type: "text", label: "Mobile Number", placeholder: "Enter Mobile Number", id: "mobile", control_name: "mobile" },
    { for: "types", control: "checkbox", type: "checkbox", label: "Select Type", placeholder: "Select Type", id: "types", control_name: "types", array: null },

  ]

  customForm = this.fb.group({
    id: [''],
    username: [''],
    password: [''],
    first_name: [''],
    last_name: [''],
    email: [''],
    mobile: [''],
    types: this.fb.array([]),
    menus: this.fb.array([])
  });

  constructor(private fb: FormBuilder, private httpService: HttpService, private route: ActivatedRoute) { }

  ngOnInit() {
    //load region in combo
    this.httpService.getHttp("types.json").subscribe(data => {
      console.log(data);
      let typesData = (data['data']);
      this.formData[this.TYPE_INDEX].array = typesData;
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

    this.route.params.subscribe(params => {
      let id = params['userId']
      this.httpService.getHttp("users/" + id + ".json").subscribe(data => {
        console.log(data);
        let users = data['data'];

        let types = users['types'];
        types.forEach(element => {
          element['check'] = true;
        });
        let menus = users['menus'];
        menus.forEach(element => {
          element['check'] = true;
        });
        this.customForm.patchValue(users)
      });
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
    console.warn(this.customForm.value);
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

    this.httpService.putHttp("users/" + this.customForm.value.id + ".json", this.customForm.value)
      .pipe(
      ).subscribe(data => {
        console.log(data);
        this.customForm.reset();
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
