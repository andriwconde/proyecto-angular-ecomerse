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
      return this.http.get("https://jsonplaceholder.typicode.com/posts").toPromise()
    }

    getById(id:string){
      return this.http.get("https://jsonplaceholder.typicode.com/posts/"+id).toPromise()
    }
}
