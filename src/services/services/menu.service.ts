import { Injectable } from '@angular/core';
import { SupabaseService } from './supabase.service';
import { MenuItem } from '../../models/menuItem.model';
import { Category } from '../../models/category.model';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  private tableName = 'menu_items';
  private categoriesTable = 'categories';
  public restaurantInfoTable = 'restaurantInfo';
  public restaurantInfo: any;


  constructor(private supabaseService: SupabaseService) { }

  async getMenuItems(): Promise<MenuItem[]> {
    try {
      console.log('Fetching menu items from Supabase...');

      const { data, error } = await this.supabaseService.getClient()
        .from(this.tableName)
        .select('*')
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Supabase error:', error);
        throw error;
      }

      console.log(`Successfully loaded ${data?.length || 0} menu items`);
      return data || [];

    } catch (error) {
      console.error('Error in getMenuItems:', error);
      throw error;
    }
  }
  async getRestaurantInfo(): Promise<any> {
    try {
      if (!this.restaurantInfo || this.restaurantInfo.length === 0) {

        console.log('Fetching info from Supabase...');
        const { data, error } = await this.supabaseService.getClient()
          .from(this.restaurantInfoTable)
          .select('*')
          .order('id', { ascending: true });
        if (error) {
          console.error('Supabase categories error:', error);
          throw error;
        }
        console.log(`Successfully loaded ${data?.length || 0} categories`);
        this.restaurantInfo = data;
        return data || [];
      } else {
        return this.restaurantInfo;
      }

    } catch (error) {
      console.error('Error in getRestaurantInfo:', error);
      throw error;
    }
  }

  async getCategories(): Promise<Category[]> {
    try {
      console.log('Fetching categories from Supabase...');

      const { data, error } = await this.supabaseService.getClient()
        .from(this.categoriesTable)
        .select('*')
        .order('id', { ascending: true });

      if (error) {
        console.error('Supabase categories error:', error);
        throw error;
      }

      console.log(`Successfully loaded ${data?.length || 0} categories`);
      return data || [];

    } catch (error) {
      console.error('Error in getCategories:', error);
      throw error;
    }
  }
  // Debug method to check table structure
  async debugTableInfo(): Promise<any> {
    try {
      // This is a workaround to check if we can access the table
      const { data, error } = await this.supabaseService.getClient()
        .from(this.tableName)
        .select('*')
        .limit(1);

      if (error) {
        return { error: error.message, code: error.code };
      }

      return {
        success: true,
        sampleData: data,
        tableExists: true
      };
    } catch (error) {
      return { error: error };
    }
  }
}