import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { HttpService } from 'src/app/http.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-docks',
  templateUrl: './update-docks.component.html',
  styleUrls: ['./update-docks.component.css']
})
export class UpdateDocksComponent implements OnInit {

  @Input('dockId') public dockId;
  order: any;
  customForm = new FormGroup({
    trailer_id: new FormControl(''),
  });
  constructor(private fb: FormBuilder, private httpService: HttpService, private route: ActivatedRoute) { }

  ngOnInit() {
    console.log("docId::" + this.dockId);
    let id = this.dockId;
    //load docks in combo
    this.httpService.getHttp("orders/" + id + ".json").subscribe(data => {
      console.log(data);
      this.order= data['data'];
    });
  }

}
