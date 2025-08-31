import { Component, OnInit } from '@angular/core';
import { EventData } from 'src/app/pages/interfaces/EventData.model';
import data from 'src/assets/imgFile.json';
@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss']
})
export class PhotosComponent implements OnInit {

  selectedMedia: any = null;

  events: EventData[] = [];

  years = Array<number>();

  selectedYear: number | 'all' = 'all';

  constructor() { }

  ngOnInit(): void {
    this.events = data.events.map(event => {
      return {
        ...event,
        files: event.files.map(file=>'assets/img/'.concat(file))
      };
    });
    this.years = Array.from(new Set<number>(this.events.map(e => e.year)))
      .sort((a, b) => b - a);

    console.log(this.events);
    console.log(this.years);
  }

  get filteredEvents() {
    if (this.selectedYear === 'all') return this.events;
    return this.events.filter(e => e.year === Number(this.selectedYear));
  }

  openLightbox(media: any) {
    this.selectedMedia = media;
  }

  closeLightbox() {
    this.selectedMedia = null;
  }
}
