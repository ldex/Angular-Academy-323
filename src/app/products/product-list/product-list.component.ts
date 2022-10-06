import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/models/product.interface';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  title = 'Products';
  products: Product[];
  products$: Observable<Product[]>;
  selectedProduct: Product;

  constructor(private productService: ProductService) {

  }

  ngOnInit(): void {
    this.products$ = this.productService.products$;

    // this
    //   .productService
    //   .products$
    //   .subscribe(
    //     {
    //       next: data => this.products = data
    //     }
    //   );
  }

  onSelect(product: Product): void {
    this.selectedProduct = product;
  }

}
