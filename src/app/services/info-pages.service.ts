import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPages } from '../interfaces/info-pages.interfaces';

@Injectable({
  providedIn: 'root'
})
export class InfoPagesService {

  info: InfoPages = {};
  loaded = false;
  equipo: any [] = [];

  constructor( private http: HttpClient ) {

    this.loadInfo();

    this.loadTeam();
  }

  private loadInfo(){
    // Leer el archivo data-pages.json
    this.http.get('assets/data/data-pages.json')
    .subscribe( ( resp: InfoPages) => {
      this.loaded = true;
      this.info = resp;
    });
  }

  private loadTeam(){
    this.http.get('https://templatetohtml.firebaseio.com/equipo.json')
    .subscribe( ( resp: any) => {
      this.loaded = true;
      this.equipo = resp;
      console.log(resp);
    });
  }
}
