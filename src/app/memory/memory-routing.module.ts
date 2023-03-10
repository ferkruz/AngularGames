import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { marker } from '@biesbjerg/ngx-translate-extract-marker';
import { MemoryComponent } from './memory.component';

const routes: Routes = [
  {
    path: '',
    component: MemoryComponent,
    data: { title: marker('Memory') }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MemoryRoutingModule { }
