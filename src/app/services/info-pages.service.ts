import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InfoPagesService {

  info: InfoPages = {};
  loaded = false;

  constructor( private http: HttpClient ) {

    // Leer el archivo data-pages.json
    this.http.get('assets/data/data-pages.json')
    .subscribe( ( resp: InfoPages) => {
      this.loaded = true;
      this.info = resp;
      console.log(resp);
    })
   }
}
