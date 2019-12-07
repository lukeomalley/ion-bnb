import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BokingsPageRoutingModule } from './bokings-routing.module';

import { BokingsPage } from './bokings.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BokingsPageRoutingModule
  ],
  declarations: [BokingsPage]
})
export class BokingsPageModule {}
