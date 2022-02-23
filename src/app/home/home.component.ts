
import { Component, HostListener, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { SelectItem } from 'primeng/api';
import { SelectItemGroup } from 'primeng/api';
import { ProductService } from '../productservice';
import { Product } from '../product';
import { PrimeNGConfig } from 'primeng/api';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  products: Product[] = [];
  product!: Product;
  constructor(
    private productService: ProductService,
    private primengConfig: PrimeNGConfig,
    private breakpointObserver: BreakpointObserver,
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) { }
  // @HostListener('window:resize', ['$event'])
  // onResize(event:any) {
  //   event.target.innerWidth;
  //   console.log(event.target.innerWidth);
  // }
  ngOnInit() {
    this.productService.getProductsSmall()
      .then(cars => {
        this.products = cars;
        this.onReorder(null);
      });
    this.primengConfig.ripple = true;
    // console.log(window.innerWidth);
    // this.breakpointObserver.observe([
    //   "(max-width: 1000px)"
    // ]).subscribe((result: BreakpointState) => {
    //   if (result.matches) {
    //     debugger;
    //   } else {
    //     debugger;
    //   }
    // });
    // this.productService.getProductsWithOrdersSmall().subscribe((cars:any) => {
    //   this.products = cars.data;
    //   this.onReorder(null);
    //   console.log(cars.data);
    // })

  }
  onReorder(event: any) {


    for (let index = 0; index < this.products.length; index++) {
      this.products[index].index = index;
      this.products[index].indexShow = ((index / 4) + 1).toString().charAt(0) + " " + ((index % 4) + 1).toString();
      this.products[index].class = ((index / 4) + 1).toString().charAt(0);
    }
    console.log(this.products);
  }
  onSelectionChange(event: any) {
    this.product = event.value[0];
    //debugger;  
    console.log(this.product.name);
  }
  Edit() {
    console.log(this.product);
    // this.router.navigate(['project' + this.product.id, {
    //   indexShow: this.product.indexShow      
    // }]);
    // this.router.navigate(['project' ]);
    this.router.navigate(['/project'], { queryParams: { id: this.product.id, index: this.product.index } });

  }

}
