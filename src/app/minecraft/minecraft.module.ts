import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VillagerPathfindingComponent } from './villager-pathfinding/villager-pathfinding.component';
import { ListComponent } from './list/list.component';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  declarations: [VillagerPathfindingComponent, ListComponent]
})
export class MinecraftModule { }
