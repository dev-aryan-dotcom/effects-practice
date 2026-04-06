import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ProductState } from "./products.reducer";

export const selectProductFeature = createFeatureSelector<ProductState>('product')

export const selectAllProducts = createSelector(
    selectProductFeature,
    (state: ProductState) => state.products
)

export const selectProductError = createSelector(
    selectProductFeature,
    (state: ProductState) => state.error
)