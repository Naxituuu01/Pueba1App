import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DesayunosPageRoutingModule } from './desayunos-routing.module';

import { DesayunosPage } from './desayunos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DesayunosPageRoutingModule
  ],
  declarations: [DesayunosPage]
})
export class DesayunosPageModule {}
