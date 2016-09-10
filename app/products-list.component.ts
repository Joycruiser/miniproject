import { Component, OnInit } from '@angular/core';
import { Product } from './product';
import { DemoDataService } from './demo-data.service';

@Component({
    selector: 'products-list',
	templateUrl: './app/products-list.component.html'  
})

export class ProductsListComponent implements OnInit { 
products: Product[];

constructor(private demoDataService: DemoDataService) {}

ngOnInit() {
this.products = this.demoDataService.getDemoData();
(<any>$( '#my-slider' )).sliderPro({
    width: 960,
    height: 500,
    arrows: true,
    buttons: false,
	touchSwipe: true
});
}

}
