import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http: HttpClient ) { }

  getNewReleases() {
    const headers = new HttpHeaders({
      'Authorization' : 'Bearer BQB_eJdeTB11xKxNFA9280wsNT_IxjmGM0NZwSznOERCWpX4o0ZnivkC5zZBBJwl3WKCWyuG_O1dfzZcqZg'
    });

    return this.http.get('https://api.spotify.com/v1/browse/new-releases', { headers } );

  }

  getArtista( termino: string ) {

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQB_eJdeTB11xKxNFA9280wsNT_IxjmGM0NZwSznOERCWpX4o0ZnivkC5zZBBJwl3WKCWyuG_O1dfzZcqZg'
    });

    return this.http.get(`https://api.spotify.com/v1/search?q=${ termino }&type=artist&limit=15` , { headers } );
  }

}
