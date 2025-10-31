    import { Injectable } from '@angular/core';
import { SupabaseService } from './supabase.service';

@Injectable({
  providedIn: 'root'
})
export class ImageUploadService {

  constructor(private supabaseService: SupabaseService) {}

  // Upload image to Supabase Storage
  async uploadImage(file: File, bucketName: string = 'menu-images'): Promise<string> {
    try {
      const fileExt = file.name.split('.').pop();
      const fileName = `${Math.random()}.${fileExt}`;
      const filePath = `${fileName}`;

      const { data, error } = await this.supabaseService.getClient()
        .storage
        .from(bucketName)
        .upload(filePath, file);

      if (error) {
        throw error;
      }

      // Get public URL
      const { data: { publicUrl } } = this.supabaseService.getClient()
        .storage
        .from(bucketName)
        .getPublicUrl(filePath);

      return publicUrl;
    } catch (error) {
      console.error('Error uploading image:', error);
      throw error;
    }
  }

  // Upload multiple images
  async uploadMultipleImages(files: File[], bucketName: string = 'menu-images'): Promise<string[]> {
    const uploadPromises = files.map(file => this.uploadImage(file, bucketName));
    return Promise.all(uploadPromises);
  }

  // Delete image
  async deleteImage(filePath: string, bucketName: string = 'menu-images'): Promise<void> {
    const { error } = await this.supabaseService.getClient()
      .storage
      .from(bucketName)
      .remove([filePath]);

    if (error) {
      throw error;
    }
  }

  // Get public URL for an image
  getImageUrl(filePath: string, bucketName: string = 'menu-images'): string {
    const { data: { publicUrl } } = this.supabaseService.getClient()
      .storage
      .from(bucketName)
      .getPublicUrl(filePath);
    
    return publicUrl;
  }
}