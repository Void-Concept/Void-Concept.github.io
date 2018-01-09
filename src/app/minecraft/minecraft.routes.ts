import { Routes } from '@angular/router';
import { VillagerPathfindingComponent } from './villager-pathfinding/villager-pathfinding.component';
import { ListComponent } from './list/list.component';

export const minecraftRoutes: Routes = [{
    path: 'villager-pathfinding',
    component: VillagerPathfindingComponent
}, {
    path: '',
    component: ListComponent
}];