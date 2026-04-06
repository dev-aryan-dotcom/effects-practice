import { inject, Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { ProductService } from "../services/product-service";
import { map, catchError, of, switchMap } from "rxjs";
import * as ProductActions from './products.actions';

@Injectable()
export class ProductEffects {

  private actions$ = inject(Actions);
  private productService = inject(ProductService);

  loadProducts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProductActions.loadProducts),
      switchMap(() =>
        this.productService.getProducts().pipe(
          map((res: any) =>
            ProductActions.loadProductsSuccess({ products: res.products })
          ),
          catchError(() =>
            of(ProductActions.loadProductsFailure({ error: 'Failed to load products' }))
          )
        )
      )
    )
  );
}