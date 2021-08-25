import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(
    private http:HttpClient
  ) { }
    getAll(){
      return this.http.get("https://api.mercadolibre.com/sites/MLA/search?q=ipod#json").toPromise()
    }

    getById(id:string){
      return this.http.get("https://api.mercadolibre.com/items/"+id).toPromise()
    }
}
