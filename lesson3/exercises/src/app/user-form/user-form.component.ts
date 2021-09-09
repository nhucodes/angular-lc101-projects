import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  username: string = 'sarah';
  bgcolor: string = 'black';

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    console.log("Username is " + this.username);
  }
}
