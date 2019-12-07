import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BokingsPage } from './bokings.page';

const routes: Routes = [
  {
    path: '',
    component: BokingsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BokingsPageRoutingModule {}
