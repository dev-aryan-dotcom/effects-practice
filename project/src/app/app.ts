import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductType } from './models/product.model';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { selectAllProducts } from './product-store/product.selector';
import { AppState } from './app.state';
import { loadProducts } from './product-store/products.actions';
import { AsyncPipe, CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductState } from './product-store/products.reducer';
import { OnInit } from '@angular/core';
import { ProductsComponent } from './products-component/products-component';
@Component({
  selector: 'app-root',
  imports: [ CommonModule, FormsModule, AsyncPipe, ProductsComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
  // products$!: Observable<ProductType[]>;

  // constructor(private store: Store<{ product: ProductType }>) {}

  // ngOnInit(): void {
  //   this.store.dispatch(loadProducts());
  //   this.products$ = this.store.select(selectAllProducts);
  //   console.log(this.products$)
  // }
}