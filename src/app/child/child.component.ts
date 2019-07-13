import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor() { }
  public JsonBody = {
    "name": '',
    "city": ''

  }
  //declare the input
  @Input('personDetails') public personDetails: any;

  @Output() public sendmessage = new EventEmitter();

  sendMessageToParent() {
    this.JsonBody.name = this.personDetails.name;
    this.JsonBody.city = this.personDetails.city;
    try {
        this.sendmessage.emit(this.JsonBody)
      } catch (error) {
      console.log("Error occured" + error);

    }
  }

  ngOnInit() {
  }

}
