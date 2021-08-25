import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
// import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  
  products:any =[]
  constructor(
    private productsService:ProductsService,
    // private activatedRoute:ActivatedRoute
     ) { 
    this.getProducts()

    // const id = this.activatedRoute.snapshot.paramMap.get("id")
   
    // if(id){
    //   this.getProduct(id)
    // }
  }
  // constructor(private productsService:ProductsService) { 
  //   // this.productsService.getAll()
  //   // .subscribe(data =>{
  //   //   console.log(data)
  //     // this.products = data
  //   })
  // }
  // async getProduct(id:any){
  //   const product = await this.productsService.getById(id)
  // }
   
  async getProducts(){
    this.products = await this.productsService.getAll()
  }

  ngOnInit(): void {
  }

}
