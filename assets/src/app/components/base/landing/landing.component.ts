import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  djs = [
    {
      name: 'DJ Khaled',
      intro: 'Yo. Beats. Now.'
    },
    {
      name: 'Cholord',
      intro: 'Chillax'
    },
    {
      name: 'Patty Tiu',
      intro: 'Dudududu.'
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
