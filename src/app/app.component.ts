import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  associateName: string
  personDetails = {
    'name': '',
    'city': ''
  }
  public message: string = "";
  onSubmit(userForm: NgForm) {
    this.personDetails.name = userForm.controls['name'].value;
    this.personDetails.city = userForm.controls['city'].value;
  }
}
