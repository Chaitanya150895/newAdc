import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-update-docks',
  templateUrl: './update-docks.component.html',
  styleUrls: ['./update-docks.component.css']
})
export class UpdateDocksComponent implements OnInit {

  @Input('dockId') public dockId;

  constructor() { }

  ngOnInit() {
  }

}
