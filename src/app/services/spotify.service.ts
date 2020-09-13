import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http: HttpClient ) { }

  getNewReleases() {
    const headers = new HttpHeaders({
      'Authorization' : 'Bearer BQARAfMSI6WTSp6DYxqLJJHFItxYICroq_G0eLHPPOkFOL-1nU2oGtCeSTNcVEMxLFZUuA53i9X89ijX_rE'
    });

    return this.http.get('https://api.spotify.com/v1/browse/new-releases', { headers } );

  }

}
