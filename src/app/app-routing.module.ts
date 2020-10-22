import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import{ProductComponent} from './product/product.component';
import{PopupComponent} from './popup/popup.component';

const routes: Routes = [
  {
    path:'',
    component:ProductComponent
},
{
  path:'Popup',
  component:PopupComponent
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
