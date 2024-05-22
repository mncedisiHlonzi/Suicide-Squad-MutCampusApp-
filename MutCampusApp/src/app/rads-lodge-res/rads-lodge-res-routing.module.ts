import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RadsLodgeResPage } from './rads-lodge-res.page';

const routes: Routes = [
  {
    path: '',
    component: RadsLodgeResPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RadsLodgeResPageRoutingModule {}
