import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslationService } from '../../services/services/translation.service';
import { MenuService } from '../../services/services/menu.service';
import { RestaurantInfo } from '../../models/restaurantInfo.model';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
constructor(public translationService: TranslationService,private menuService:MenuService) {}
 restaurantName:string='';
  loading: boolean = false;
  error: string = '';
  restaurantInfo: RestaurantInfo[] = [];
ngOnInit(): void {  
  this.loadData();
}
async loadData(): Promise<void> {
    this.loading = true;
    this.error = '';

    try {
      // Load both menu items and categories in parallel
      const [restaurantData] = await Promise.all([
        this.menuService.getRestaurantInfo(),

      ]);
      
      // Map menu items to view model
      this.restaurantInfo = restaurantData;
      this.setInfoData(this.restaurantInfo);
      console.log('Loaded restaurant info:', this.restaurantInfo);

    } catch (error) {
      console.error('Error loading data:', error);
      this.error = 'Failed to load menu data. Please try again.';
      this.restaurantInfo = [];
    } finally {
      this.loading = false;
    }
  }
  setInfoData(data:RestaurantInfo[]):void{  
  this.restaurantName=data[0].name;

}

}
