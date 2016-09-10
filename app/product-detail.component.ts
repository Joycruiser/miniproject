import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Product } from './product';
import { DemoDataService } from './demo-data.service';

@Component({
    selector: 'product-detail',
	templateUrl: './app/product-detail.component.html'  
})

export class ProductDetailComponent implements OnInit { 
product: Product;

constructor(private demoDataService: DemoDataService, private route: ActivatedRoute) {}

ngOnInit() {
let productId = this.route.snapshot.params['productId'];
this.product = this.demoDataService.getDemoDataById(productId);

(<any>$("#range-slider")).ionRangeSlider({
            hide_min_max: true,
            keyboard: true,
            min: 0,
            max: 250,
            from: 40,
            to: 180,
            type: 'double',
            step: 1,
            prefix: "$",
            grid: true
        });

		}


goBack(): void {
window.history.back();
}

active(active:string) {
(<any>$(".active")).attr('class', 'button');
(<any>$("#button-"+active)).attr('class', 'active');
}

changeimage(imagesrc:string) {
(<any>$( '.product-main-image' )).children().attr('src', imagesrc);
}

descriptionSwitch(item1:string, item2:string[]) {

(<any>$( '.product-description-container' )).html("<div class='variable-procuct-description'>DESCRIPTION:</div><p>"+item1+"</p><div class='variable-procuct-details'>DETAILS:</div>");

item2.forEach(function(entry) { 
(<any>$(".product-description-container")).append("<p> - "+entry+"</p>"); 
});

}

}
