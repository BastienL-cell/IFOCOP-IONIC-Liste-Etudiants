import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModifyItemPage } from './modify-item.page';

const routes: Routes = [
  {
    path: '',
    component: ModifyItemPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModifyItemPageRoutingModule {}
