// visitor-tracking.service.ts
import { Injectable } from '@angular/core';
import { SupabaseService, VisitorData } from './supabase.service';

@Injectable({
  providedIn: 'root'
})
export class VisitorTrackingService {
  private isTracked = false;

  constructor(private supabaseService: SupabaseService) {}

  async trackVisit(pageUrl: string): Promise<void> {
    // Prevent duplicate tracking in same session
    if (this.isTracked && sessionStorage.getItem('visitorTracked')) {
      return;
    }

    try {
      const visitorData = this.collectVisitorData(pageUrl);
      const { data, error } = await this.supabaseService.getClient()
        .from('website_visitors')
        .insert([visitorData])
        .select();

      if (error) {
        throw error;
      }

      if (data && data.length > 0) {
        this.isTracked = true;
        sessionStorage.setItem('visitorTracked', 'true');
        sessionStorage.setItem('visitorId', data[0].id.toString());
        console.log('Visit tracked successfully:', data[0].id);
      }
    } catch (error) {
      console.warn('Visitor tracking failed:', error);
      // Don't throw error to avoid breaking the application
    }
  }

  private collectVisitorData(pageUrl: string): VisitorData {
    return {
      user_agent: navigator.userAgent,
      page_url: pageUrl,
      referrer_url: document.referrer,
      browser_name: this.getBrowserName(),
      device_type: this.getDeviceType(),
      screen_width: window.screen.width,
      screen_height: window.screen.height,
      language: navigator.language,
      timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      cookies_enabled: navigator.cookieEnabled
    };
  }

  private getBrowserName(): string {
    const userAgent = navigator.userAgent;
    if (userAgent.includes('Chrome') && !userAgent.includes('Edg')) return 'Chrome';
    if (userAgent.includes('Firefox')) return 'Firefox';
    if (userAgent.includes('Safari') && !userAgent.includes('Chrome')) return 'Safari';
    if (userAgent.includes('Edg')) return 'Edge';
    return 'Unknown';
  }

  private getDeviceType(): string {
    const userAgent = navigator.userAgent;
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent)) {
      return window.screen.width < 768 ? 'mobile' : 'tablet';
    } else if (/Tablet|iPad/i.test(userAgent)) {
      return 'tablet';
    } else {
      return 'desktop';
    }
  }

  // Method to track additional events
  async trackEvent(eventType: string, eventData?: any): Promise<void> {
    const visitorId = sessionStorage.getItem('visitorId');
    if (!visitorId) return;

    try {
      const { error } = await this.supabaseService.getClient()
        .from('visitor_events') // You'd need to create this table
        .insert([{
          visitor_id: visitorId,
          event_type: eventType,
          event_data: eventData,
          timestamp: new Date().toISOString()
        }]);

      if (error) {
        console.warn('Event tracking failed:', error);
      }
    } catch (error) {
      console.warn('Event tracking failed:', error);
    }
  }
}