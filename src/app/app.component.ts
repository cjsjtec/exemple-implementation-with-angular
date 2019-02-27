import { Component } from '@angular/core';
import  { ScriptService } from './script.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  constructor(service: ScriptService) {
    const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.WzMxNjM1LCJlY2Y5MjRjNmM5MjExNzM4ZmY3ZDFhZWI0NTFjODQwNiIsIjIwMTktMDItMjciLCJzaW5hcHNlLnByZXNjcmljYW8iLCJwYXJ0bmVyLjMuMjcwNDQiXQ.kTCtM3dJ09X4pfTu_apgevOXkAhpNmdnK_kedphd3lw';

    service.load(token);
  }
}
