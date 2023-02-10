import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MemoryRoutingModule } from './memory-routing.module';
import { GameCardComponent } from './game-card/game-card.component';
import { MemoryComponent } from './memory.component';
import { RestartDialogComponent } from './restart-dialog/restart-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    GameCardComponent,
    MemoryComponent,
    RestartDialogComponent,
  ],
  imports: [
    CommonModule,
    MemoryRoutingModule,
    MatDialogModule
  ]
})
export class MemoryModule { }
