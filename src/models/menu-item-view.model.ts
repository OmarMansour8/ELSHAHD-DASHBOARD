// Create a new file: menu-item-view.model.ts
export interface MenuItemView {
  id: number;
  name: string;
  description: string;
  price: string;
  category: string;  // Converted from categoryId
  image_url: string; // Converted from img_url
  is_available: boolean; // Default value
  created_at: string;
}