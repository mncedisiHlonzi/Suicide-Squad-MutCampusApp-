import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AIPage } from './ai.page';

const routes: Routes = [
  {
    path: '',
    component: AIPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AIPageRoutingModule {}
