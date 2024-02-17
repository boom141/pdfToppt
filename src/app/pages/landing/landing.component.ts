import { Component } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent {
  landingImg2: string;

  constructor(){
    this.landingImg2 = 'assets/landingImg2.svg';
  }
}
