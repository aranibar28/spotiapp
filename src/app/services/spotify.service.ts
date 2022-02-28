import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class SpotifyService {
  constructor(private http: HttpClient) {}

  getQuery(query: string) {
    const url = `https://api.spotify.com/v1/${query}`;
    const headers = new HttpHeaders({
      Authorization:
        'Bearer BQBiWHy7L0WKJpM68mSeiygi7Z9UeXvZzEK9wEC8MwD9YAOwPVWYCLqzcKSrRRY_5wj7aCBVp06Km2STv0I',
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
}
