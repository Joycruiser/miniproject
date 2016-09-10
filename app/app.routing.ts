import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductsListComponent } from './products-list.component';
import { ContactComponent } from './contact.component';
import { ProductDetailComponent } from './product-detail.component';

const appRoutes : Routes = [
{ path: 'contact', component: ContactComponent },
{ path: 'detail/:productId', component: ProductDetailComponent },
{ path: '', component: ProductsListComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);