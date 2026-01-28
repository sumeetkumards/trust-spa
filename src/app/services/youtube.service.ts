import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {

  API_KEY = environment.youtube_api_key;
  PLAYLIST_ID = environment.youtube_playlist_id;

  constructor(private http: HttpClient) { }

  getPlaylistVideos() {
    const url =
      `https://www.googleapis.com/youtube/v3/playlistItems` +
      `?part=snippet&maxResults=20` +
      `&playlistId=${this.PLAYLIST_ID}` +
      `&key=${this.API_KEY}`;

    return this.http.get<any>(url).pipe(
      map(res =>
        res.items.map((item: any) => ({
          videoId: item.snippet.resourceId.videoId,
          title: item.snippet.title,
          thumbnail: item.snippet.thumbnails.medium.url
        }))
      )
    );
  }
}
