import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../product.service';
@Component({
  selector: 'app-product-search',
  templateUrl: './product-search.component.html',
  styleUrls: ['./product-search.component.css']
})
export class ProductSearchComponent {
  query: string = '';
  products: any[] = [];
  constructor(private productService: ProductService,private router: Router) { }

  search(): void {
    this.productService.searchProducts(this.query).subscribe((data) => {
      this.router.navigate(['/users/display'], { state: { products: data } });
    }); 
    // this.router.navigateByUrl(`/users/display?keyword=${this.query}`);

  }
}
