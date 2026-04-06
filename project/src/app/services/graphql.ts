import { Injectable } from '@angular/core';
import { generateClient } from 'aws-amplify/api';

@Injectable({
  providedIn: 'root',
})
export class GraphqlService {

  private getClient() {
    return generateClient(); // ✅ created AFTER Amplify config
  }

  async listProducts() {
    const res: any = await this.getClient().graphql({
      query: `
      query {
        listProducts {
          items {
            id
            price
            title
          }
        }
      }
    `
    });

    return res.data.listProducts.items;
  }

  async createProduct(title: string, price: number) {
    const res: any = await this.getClient().graphql({
      query: `
      mutation CreateProduct($input: CreateProductsInput!) {
        createProducts(input: $input) {
          id
          title
          price
        }
      }
    `,
      variables: {
        input: {
          title: title,   // must NOT be null or empty
          price: price    // must NOT be null
        }
      }
    });
console.log("FULL RESPONSE:", res);
    return res.data.createProducts;
  }
}