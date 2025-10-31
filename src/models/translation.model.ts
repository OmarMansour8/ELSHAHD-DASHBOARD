export interface TranslationKeys {
  // Restaurant Menu
  restaurant_name: string;
  nav_home: string;
  nav_menu: string;
  nav_about: string;
  nav_contact: string;
  hero_title: string;
  hero_description: string;
  order_button: string;
  menu_title: string;
  category_all: string;
  category_appetizers: string;
  category_main: string;
  category_desserts: string;
  category_drinks: string;
  item1_name: string;
  item1_description: string;
  item2_name: string;
  item2_description: string;
  item3_name: string;
  item3_description: string;
  item4_name: string;
  item4_description: string;
  item5_name: string;
  item5_description: string;
  item6_name: string;
  item6_description: string;
  add_to_cart: string;
  footer_description: string;
  contact_info: string;
  address: string;
  opening_hours: string;
  hours_weekdays: string;
  hours_weekend: string;
  hours_sunday: string;
  copyright: string;

  // Dashboard
  dashboard_title: string;
  stats_today_orders: string;
  stats_today_revenue: string;
  stats_menu_items: string;
  stats_customers: string;
  charts_revenue_overview: string;
  charts_order_status: string;
  time_last_7_days: string;
  time_last_30_days: string;
  time_last_3_months: string;
  orders_recent_orders: string;
  orders_view_all: string;
  table_order_id: string;
  table_customer: string;
  table_items: string;
  table_total: string;
  table_status: string;
  table_time: string;
  status_completed: string;
  status_pending: string;
  status_processing: string;
  sidebar_dashboard: string;
  sidebar_orders: string;
  sidebar_menu_items: string;
  sidebar_customers: string;
  sidebar_analytics: string;
  sidebar_settings: string;
  sidebar_logout: string;
  navbar_admin: string;
  navbar_logout: string;

  // Login
  login_title: string;
  login_subtitle: string;
  login_username: string;
  login_password: string;
  login_username_required: string;
  login_password_required: string;
  login_sign_in: string;
  login_signing_in: string;
  login_invalid_credentials: string;
  login_error_occurred: string;
  login_demo_credentials: string;
  login_demo_username: string;
  login_demo_password: string;

  // Common
  common_welcome: string;
  common_my_profile: string;
  common_loading: string;
  common_error: string;
  common_success: string;
}
export interface Translations {
  en: TranslationKeys;
  ar: TranslationKeys;
  // fr: TranslationKeys;
  // es: TranslationKeys;
  [key: string]: TranslationKeys; // Index signature to allow string keys
}