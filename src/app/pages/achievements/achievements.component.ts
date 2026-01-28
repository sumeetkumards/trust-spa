import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-achievements',
  templateUrl: './achievements.component.html',
  styleUrls: ['./achievements.component.scss'],
})
export class AchievementsComponent implements OnInit {
  items = [
    {
      title: 'Educational and Welfare Programs',
      desc: 'Set up programs to provide quality education and welfare support for children, women, and elderly citizens.',
    },
    {
      title: 'Health and Medical Awareness',
      desc: 'Conducted medical awareness drives and health initiatives for poor and needy residents.',
    },
    {
      title: 'Emergency Family Assistance',
      desc: 'Assisted families during emergencies such as natural calamities, medical crises, and unforeseen hardships.',
    },
    {
      title: 'Social and Cultural Events',
      desc: 'Organized social and cultural functions to promote unity, harmony, and mutual cooperation in society.',
    },
    {
      title: 'Skill Development Support',
      desc: 'Provided educational programs and skill development opportunities for students and youth to build a better future.',
    },
    {
      title: 'Financial Aid to Families',
      desc: 'Extended financial support to struggling families during difficult times to help them regain stability.',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
