import { Routes } from '@angular/router';
import { minecraftRoutes } from './minecraft/minecraft.routes';
import { HomeComponent } from './home/home.component';

export const appRoutes: Routes = [{
    path: 'minecraft',
    children: minecraftRoutes
}, {
    path: '',
    component: HomeComponent
}];