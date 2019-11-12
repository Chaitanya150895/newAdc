import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-add-to-trailers',
  templateUrl: './add-to-trailers.component.html',
  styleUrls: ['./add-to-trailers.component.css']
})
export class AddToTrailersComponent implements OnInit {
  // id: any;
  @Input('btnId') public btnId;
  set data(data: any) {
    console.log(data);
    // this.id = data;
  }

  constructor() { }

  ngOnInit() {
  }

}
