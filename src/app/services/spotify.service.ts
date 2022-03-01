import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class SpotifyService {
  constructor(private http: HttpClient) {
    console.log('Spotify Service Listo');
  }

  token: any[] = [];
  getToken() {
    const clientID: string = '4d5d5c5185df4b7592097dfa5ce95019';
    const clientSecret: string = '3b530e77490b4061bb540e94774a87bf';
    this.http
      .get(`https://spotify-get-token.herokuapp.com/spotify/${clientID}/${clientSecret}`)
      .subscribe((data: any) => {
        this.token = data.access_token;
        return console.log(this.token);
      });
  }

  getQuery(query: string) {
    const url = `https://api.spotify.com/v1/${query}`;
    const headers = new HttpHeaders({
      Authorization: `Bearer BQARAU8mKndb7nIGW24ow9UB2hD4aFY-BJD1blAbbe2DqhYvLF2NN5ZqwyBFfuG4cia_ZagfZDkLF7519T8`,
    });
    return this.http.get(url, { headers });
  }

  getNewReleases() {
    return this.getQuery('browse/new-releases?limit=20').pipe(
      map((data: any) => data.albums.items)
    );
  }

  getArtists(word: string) {
    return this.getQuery(`search?q=${word}&type=artist&limit=15`).pipe(
      map((data: any) => data.artists.items)
    );
  }

  getArtist(id: string) {
    return this.getQuery(`artists/${id}`);
  }

  getTopTracks(id: string) {
    return this.getQuery(`artists/${id}/top-tracks?market=es`).pipe(
      map((data: any) => data.tracks)
    );
  }
}
