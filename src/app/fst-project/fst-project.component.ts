import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Table } from 'primeng/table';
import { Product, shift } from '../product';
import { ProductService } from '../productservice';
import { DialogService } from 'primeng/dynamicdialog';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { ShiftComponent } from '../shift/shift.component';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common'
@Component({
  selector: 'app-fst-project',
  templateUrl: './fst-project.component.html',
  styleUrls: ['./fst-project.component.scss'],
  providers: [DialogService]
})
export class FstProjectComponent implements OnInit, OnDestroy {
  // shifts: shift[] = [];
  products: Product[] = [];
  product!: Product;
  @ViewChild('dt') table!: Table;
  ref!: DynamicDialogRef;

  constructor(
    private productService: ProductService,
    public dialogService: DialogService,
    private route: ActivatedRoute, private router: Router, private location: Location
  ) { }

  ngOnInit(): void {

    this.productService.getProductsSmall().then(data => {
      this.products = data;
      this.route.queryParams.subscribe(params => {

        console.log(params['id']);
        console.log(params['indexShow']);
        debugger;
        this.product = this.products.filter(x => x.id == params['id'])[0];
        this.product.index =  params['index'];     
        this.product.indexShow = ((this.product.index / 4) + 1).toString().charAt(0) + " " + ((this.product.index % 4) + 1).toString();
        this.product.class = ((this.product.index / 4) + 1).toString().charAt(0);
        // this.shifts =  this.product.shifts;
    
      })
    });
    // this.route.queryParams.subscribe(params => {

    //   console.log(params['id']);
    //   console.log(params['indexShow']);
    //   debugger;
    //   var x = this.products.find(x => x.id == 1000);
    //   console.log(x);

    //   // this.productId = params.id;
    //   // this.productName = params.title;
    // })
  }

  getMenuItems(Product: Product): MenuItem[] {
    return [
      { label: 'Edit', icon: 'pi pi-pencil', command: () => { } },
      { label: 'Delete', icon: 'pi pi-times', command: () => { } }
    ] as MenuItem[];
  }

  New() {
    this.ref = this.dialogService.open(ShiftComponent, {
      header: 'Create New Shift',
      width: '40%',
      contentStyle: { "overflow": "auto" }
    });
  }
  ngOnDestroy(): void {
    if (this.ref) {
      this.ref.close();
    }
  }





}
