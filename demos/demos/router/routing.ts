import { RouterModule }   from '@angular/router';
import { HomeComponent } from './home.ts';
import { ProductComponent } from './product.ts';

const routes = [
  {path: '', component: HomeComponent},
  {path: 'product/:tool', component: ProductComponent}
]

export const routing = RouterModule.forRoot(routes)