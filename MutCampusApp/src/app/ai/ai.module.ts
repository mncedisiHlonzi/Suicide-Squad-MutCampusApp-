import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AIPageRoutingModule } from './ai-routing.module';

import { AIPage } from './ai.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AIPageRoutingModule
  ],
  declarations: [AIPage]
})
export class AIPageModule {}
