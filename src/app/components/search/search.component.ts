import { Component } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
})
export class SearchComponent {
  artists: any[] = [];
  loading: boolean = false;
  constructor(private spotify: SpotifyService) {}
  search(word: string) {
    this.loading = true;
    this.spotify.getArtists(word).subscribe((data: any) => {
      this.artists = data;
      this.loading = false;
    });
  }
}
