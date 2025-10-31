export interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: string;
  categoryId: number;  // This matches your database
  img_url: string | null;  // This matches your database (img_url not image_url)
  created_at: string;
  // Remove image_url and is_available since they don't exist in DB
}