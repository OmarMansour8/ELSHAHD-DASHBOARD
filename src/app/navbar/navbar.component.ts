import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuService } from '../../services/services/menu.service';
import { RestaurantInfo } from '../../models/restaurantInfo.model';
import { TranslationService } from '../../services/services/translation.service';


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
    restaurantName:string='';
  loading: boolean = false;
  error: string = '';
  restaurantInfo: RestaurantInfo[] = [];
constructor(private menuService:MenuService,public translationService:TranslationService) {}
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
