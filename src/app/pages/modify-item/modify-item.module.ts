import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModifyItemPageRoutingModule } from './modify-item-routing.module';

import { ModifyItemPage } from './modify-item.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModifyItemPageRoutingModule
  ],
  declarations: [ModifyItemPage]
})
export class ModifyItemPageModule {}
