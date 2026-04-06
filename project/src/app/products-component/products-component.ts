import { Component, OnInit } from '@angular/core';
import { GraphqlService } from '../services/graphql';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products-component',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './products-component.html',
  styleUrl: './products-component.css',
})
export class ProductsComponent implements OnInit {

  products: any[] = [];   // ✅ FIXED

  productTitle = '';      // (optional if adding product)
  productPrice: number | null = null;
  constructor(private gql: GraphqlService) { }

  async ngOnInit() {
    this.products = await this.gql.listProducts(); // ✅ FIXED
  }

  async addProduct() {
  // 🔥 validation
  if (!this.productTitle || this.productPrice === null) {
    alert("Please enter title and price");
    return;
  }
  console.log("Before API:", this.productTitle, this.productPrice);

  const newProduct = await this.gql.createProduct(
    this.productTitle,
    this.productPrice
  );
  console.log(newProduct)
  this.products.push(newProduct);
  // reset
  this.productTitle = '';
  this.productPrice = null;
}
}