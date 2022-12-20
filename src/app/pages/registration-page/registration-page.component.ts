import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-registration-page',
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.css']
})
export class RegistrationPageComponent implements OnInit {

  cities : string[] = ['Delhi', 'Bangalore', 'Mumbai']

  userModel = new User();

  constructor() { }

  ngOnInit(): void {
  }

}
