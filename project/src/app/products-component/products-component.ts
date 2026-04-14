import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ProductService } from '../services/product-service';
import { ChangeDetectorRef } from '@angular/core';
@Component({
  selector: 'app-products-component',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './products-component.html',
  styleUrl: './products-component.css',
})
export class ProductsComponent {
  productTitle = ''
  productPrice = 0

  addProduct(){
    console.log(this.productTitle, this.productPrice)
  }
  constructor(private productService: ProductService, private cdr: ChangeDetectorRef) {}
  products: any[] = []
  ngOnInit(){
    this.productService.getProducts().subscribe((data:any) => {
      this.products = data.products
      this.cdr.detectChanges()
      console.log(data)
    })
  }

}