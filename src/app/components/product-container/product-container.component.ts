import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,  Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-product-container',
  templateUrl: './product-container.component.html',
  styleUrls: ['./product-container.component.css']
})
export class ProductContainerComponent implements OnInit {

  category: any;
  products: any[] = [];

  constructor(private dataService: DataService, private route: ActivatedRoute, private router: Router) {
    this.category = this.route.snapshot.paramMap.get('category') || '';
    console.log(this.category)
  }

  ngOnInit(): void {
    console.log(this.category)
    if (this.category) {
      this.dataService.getSubCategory(this.category).subscribe((response: any) => {
        this.products = response;
      })
    } else {
      this.dataService.getProducts().subscribe((response: any) => {
        this.products = response;
      })
    }
  }

  productDetails(id: string) {
    this.router.navigate(['product', id])
  }
}
