import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DesayunosPage } from './desayunos.page';

const routes: Routes = [
  {
    path: '',
    component: DesayunosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DesayunosPageRoutingModule {}
