import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-achievements',
  templateUrl: './achievements.component.html',
  styleUrls: ['./achievements.component.scss']
})
export class AchievementsComponent implements OnInit {

  items = [
    { title: '500 children fed', desc: 'Community feeding program' },
    { title: '200 school kits', desc: 'Distributed study material' },
    { title: '10 health camps', desc: 'Free medical camps held' }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
