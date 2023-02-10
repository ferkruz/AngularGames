import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MaterialModule } from '@app/material.module';
import { TiktaktoeRoutingModule } from './tiktaktoe-routing.module';
import { BoardComponent } from './board/board.component';
import { SquareComponent } from './square/square.component';


@NgModule({
  declarations: [
    BoardComponent,
    SquareComponent
  ],
  imports: [
    CommonModule,
    TiktaktoeRoutingModule,
    CommonModule, 
    TranslateModule, 
    FlexLayoutModule, 
    MaterialModule,
  ]
})
export class TiktaktoeModule { }
