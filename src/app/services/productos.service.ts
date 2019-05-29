import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoProducts } from '../interfaces/info-products.interfaces';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  loaded = true;
  products: InfoProducts[] = [];

  constructor( private http: HttpClient ) { 
    this.loadProducts();
  }

  private loadProducts() {
    this.http.get('https://templatetohtml.firebaseio.com/producto_idx.json')
    .subscribe( ( resp: InfoProducts[] ) => {
      this.products = resp;
      this.loaded = false;
    });
  }
}
