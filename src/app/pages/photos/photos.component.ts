import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss']
})
export class PhotosComponent implements OnInit {

  images = [
    'assets/photo1.jpg',
    'assets/photo2.jpg',
    'assets/photo3.jpg'
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
