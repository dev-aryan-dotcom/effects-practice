import { createAction, props } from "@ngrx/store";
import { ProductType } from "../models/product.model";

export const loadProducts = createAction('[Products] Load Products')

export const loadProductsSuccess = createAction('[Products] Load Products Success', props<{products: ProductType[]}>())

export const loadProductsFailure = createAction('[Products] Load Products Failure', props<{error:string}>())