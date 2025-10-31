import { Injectable } from '@angular/core';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { environment } from '../../environments/environment';

// @Injectable({
//   providedIn: 'root'
// })
// export class SupabaseService {
//   private supabase: SupabaseClient;

//   constructor() {
//     this.supabase = createClient(
//       environment.supabaseUrl,
//       environment.supabaseKey,
//       {
//         auth: {
//           autoRefreshToken: true,
//           persistSession: true,
//           detectSessionInUrl: true
//         }
//       }
//     );
//   }

//   getClient(): SupabaseClient {
//     return this.supabase;
//   }

//   // Test connection
//   async testConnection(): Promise<boolean> {
//     try {
//       const { data, error } = await this.supabase
//         .from('menu_items')
//         .select('count')
//         .limit(1);

//       if (error) {
//         console.error('Supabase connection error:', error);
//         return false;
//       }
      
//       console.log('Supabase connection successful');
//       return true;
//     } catch (error) {
//       console.error('Supabase test failed:', error);
//       return false;
//     }
//   }
// }
// supabase.service.ts
export interface VisitorData {
  ip_address?: string;
  user_agent: string;
  page_url: string;
  referrer_url: string;
  browser_name: string;
  device_type: string;
  screen_width: number;
  screen_height: number;
  language: string;
  timezone?: string;
  cookies_enabled: boolean;
}
@Injectable({
  providedIn: 'root'
})
export class SupabaseService {
  private supabase!: SupabaseClient;

  constructor() {
    console.log('🔧 1. SupabaseService constructor started');
    
    try {
      console.log('🔧 2. Before createClient');
      
      this.supabase = createClient(
        environment.supabaseUrl,
        environment.supabaseKey,
        {
          auth: {
            autoRefreshToken: false,  // Change this
            persistSession: false,    // Change this  
            detectSessionInUrl: false // Change this
          }
        }
      );
      
      console.log('🔧 3. After createClient - success');
      
    } catch (error) {
      console.error('🔧 4. createClient error:', error);
    }
    
    console.log('🔧 5. SupabaseService constructor completed');
  }

  getClient(): SupabaseClient {
    return this.supabase;
  }
   async testConnection(): Promise<boolean> {
    try {
      const { data, error } = await this.supabase
        .from('menu_items')
        .select('count')
        .limit(1);

      if (error) {
        console.error('Supabase connection error:', error);
        return false;
      }
      
      console.log('Supabase connection successful');
      return true;
    } catch (error) {
      console.error('Supabase test failed:', error);
      return false;
    }
  }
}
