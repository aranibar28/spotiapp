import { Component } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [],
})
export class HomeComponent {
  newMusic: any[] = [];
  loading: boolean = true;
  error: boolean = false;
  messageError: string = '';
  mytoken: string = '';

  constructor(private spotify: SpotifyService) {
    this.error = false;
    this.spotify.getNewReleases().subscribe(
      (data: any) => {
        this.newMusic = data;
        this.loading = false;
      },
      (errorService: any) => {
        this.loading = false;
        this.error = true;
        this.messageError = errorService.error.error.message;
      }
    );
  }
}
