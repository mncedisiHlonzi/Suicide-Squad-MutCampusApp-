import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RadsLodgeResPageRoutingModule } from './rads-lodge-res-routing.module';

import { RadsLodgeResPage } from './rads-lodge-res.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RadsLodgeResPageRoutingModule
  ],
  declarations: [RadsLodgeResPage]
})
export class RadsLodgeResPageModule {}
