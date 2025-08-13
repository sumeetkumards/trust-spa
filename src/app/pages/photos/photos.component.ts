import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss']
})
export class PhotosComponent implements OnInit {

  images = [
    'assets/asset_4.png',
    'assets/asset_7.png',
    'assets/asset_6.png'
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
