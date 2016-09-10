import { Component, OnInit } from '@angular/core';

@Component({

    selector: 'my-header',
	templateUrl: './app/header.component.html',  
	styles: [`nav ul li { display: inline-block; }`]
	
})
export class HeaderComponent implements OnInit { 
title = 'header';
ngOnInit() { }
}
