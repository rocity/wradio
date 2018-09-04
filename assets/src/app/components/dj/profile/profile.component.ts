import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  playlists = [
    {
      title: 'Da Beats',
      intro: 'Wowoweee'
    },
    {
      title: 'Hard as Rock',
      intro: 'Boom bam bim'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
