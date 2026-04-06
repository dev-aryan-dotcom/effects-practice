import { createReducer, on } from "@ngrx/store"
import { loadProductsFailure, loadProductsSuccess } from "./products.actions"
import { ProductType } from "../models/product.model";
export interface ProductState {
  products: ProductType[];
  error: string | null;
  loading: boolean;
}

export const initialProductState: ProductState = {
  products: [],
  error: null,
  loading: false
};

export const productReducer = createReducer(
    initialProductState,

    on(loadProductsSuccess, (state, {products}) => ({
        ...state,
        products,
        error:null
    })),
    on(loadProductsFailure, (state, {error}) => ({
        ...state,
        error: error
    }))
)