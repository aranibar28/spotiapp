import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [],
})
export class HomeComponent {
  newMusic: any[] = [];
  loading: boolean = true;

  constructor(private spotify: SpotifyService) {
    this.spotify.getNewReleases().subscribe((data: any) => {
      this.newMusic = data;
      this.loading = false;
    });
  }
}
