import { Component, OnInit } from '@angular/core';
import { EventData } from 'src/app/pages/interfaces/EventData.model';
import { YoutubeService } from 'src/app/services/youtube.service';
import data from 'src/assets/imgFile.json';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
@Component({
  selector: 'app-photos',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  selectedImage: string | null = null;
  selectedVideo: SafeResourceUrl | null = null;
  videos: any[] = [];
  events: EventData[] = [];

  years = new Array<number>();

  selectedYear: number | 'all' = 'all';

  constructor(private youtubeService: YoutubeService,
  private sanitizer: DomSanitizer
  ) { }

  ngOnInit(): void {
    this.events = data.events.map(event => {
      return {
        ...event,
        files: event.files.map(file=>'assets/img/'.concat(file))
      };
    });
    this.years = Array.from(new Set<number>(this.events.map(e => e.year)))
      .sort((a, b) => b - a);

    this.getPlaylist();
    // console.log(this.events);
    // console.log(this.years);
  }

  getPlaylist() {
    this.youtubeService.getPlaylistVideos().subscribe(videos=>{
        this.videos = videos;
      },
      err => {
        console.error('Error fetching YouTube playlist:', err);
      }
    );
  }

  openVideo(videoId: string) {
    this.selectedVideo = this.sanitizer.bypassSecurityTrustResourceUrl(
      `https://www.youtube.com/embed/${videoId}?autoplay=1`
    );
  }

  get filteredEvents() {
    if (this.selectedYear === 'all') return this.events;
    return this.events.filter(e => e.year === Number(this.selectedYear));
  }

  openLightbox(media: any) {
    if (typeof media === 'string') {
      this.selectedImage = media;
    } else {
      this.selectedVideo = media;
    }
  }

  closeLightbox() {
    this.selectedImage = null;
    this.selectedVideo = null;
  }
}
