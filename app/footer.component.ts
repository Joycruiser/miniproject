import { Component, OnInit } from '@angular/core';

@Component({

    selector: 'my-footer',
	templateUrl: './app/footer.component.html',  
	styles: [`nav ul li { display: inline-block; }`]
	
})
export class FooterComponent implements OnInit { 
title = 'footer';
ngOnInit() { }
}
