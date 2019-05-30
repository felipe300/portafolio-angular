import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoProducts } from '../interfaces/info-products.interfaces';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  loaded = true;
  products: InfoProducts[] = [];
  fillProducts: InfoProducts[] = [];

  constructor( private http: HttpClient ) {
    this.loadProducts();
  }

  private loadProducts() {
    return new Promise( (resolve, reject) => {
      this.http.get('https://templatetohtml.firebaseio.com/producto_idx.json')
      .subscribe( ( resp: InfoProducts[] ) => {
        this.products = resp;
        this.loaded = false;
        resolve();
      });
    });
  }

  public getProduct( id: string ) {
    return this.http.get(`https://templatetohtml.firebaseio.com/producto/${ id }.json`);
  }

  public searchProduct( termino: string) {
    if ( this.products.length === 0) {
      // load Products
      this.loadProducts().then( () => {
        this.fillterProducts(termino);
      });
    } else {
      this.fillterProducts(termino);
    }
  }

  private fillterProducts( termino: string) {
    console.log(this.products);
    this.fillProducts = [];
    termino = termino.toLocaleLowerCase();
    // Lower
    this.products.forEach( prod => {
      const tituloLower = prod.titulo.toLocaleLowerCase();
      if ( prod.categoria.indexOf(termino) >= 0 || tituloLower.indexOf(termino) >= 0 ) {
        this.fillProducts.push(prod);
      }
    });
  }
}
