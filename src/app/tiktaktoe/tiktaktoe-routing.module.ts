import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { marker } from '@biesbjerg/ngx-translate-extract-marker';
import { BoardComponent } from './board/board.component';

const routes: Routes = [
  {
    path: '',
    component: BoardComponent,
    data: { title: marker('APP_NAME') }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TiktaktoeRoutingModule { }
