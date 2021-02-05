import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecetbyfilterPage } from './recetbyfilter.page';

const routes: Routes = [
  {
    path: '',
    component: RecetbyfilterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecetbyfilterPageRoutingModule {}
