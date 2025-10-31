import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MenuItemsComponent } from './menu-items/menu-items.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'menuItem', component: MenuItemsComponent },
];
