import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header.component';
import { FooterComponent } from './footer.component';
import { ProductsListComponent } from './products-list.component';
import { ContactComponent } from './contact.component';
import { AppComponent }  from './app.component';
import { DemoDataService } from './demo-data.service';
import { routing } from './app.routing';
import { ProductDetailComponent } from './product-detail.component';

@NgModule({
  imports: [ BrowserModule, FormsModule, routing ],
  declarations: [ AppComponent, HeaderComponent, FooterComponent, ProductsListComponent, ContactComponent, ProductDetailComponent ],
  bootstrap: [ AppComponent ],
  providers: [ DemoDataService ]
})
export class AppModule { }
