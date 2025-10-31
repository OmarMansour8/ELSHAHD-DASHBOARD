import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { LANGUAGE_CONFIG } from '../../config/languageConfig';
import { Translations, TranslationKeys } from '../../models/translation.model';
import { isPlatformBrowser, DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  private currentLanguage = new BehaviorSubject<string>(LANGUAGE_CONFIG.defaultLanguage);
  private translations: Translations;

  availableLanguages = LANGUAGE_CONFIG.availableLanguages;

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    @Inject(DOCUMENT) private document: Document
  ) {
    this.translations = this.initializeTranslations();
    this.setLanguage(LANGUAGE_CONFIG.defaultLanguage);
    this.initializeLanguage();
  }

  private initializeTranslations(): Translations {
    // 🟢 (Your translation data stays the same)
    return { ...this.getTranslations() };
  }

  private getTranslations(): Translations {
    return {
      // ⬇️ keep all your translations here exactly as before
      // English, Arabic, French, Spanish...
       en: {
        restaurant_name: "El Shahd Abo Youssef",
        nav_home: "Home",
        nav_menu: "Menu",
        nav_about: "About",
        nav_contact: "Contact",
        hero_title: "El Shahd Abo Youssef Restaurant",
        hero_description: "Authentic Egyptian cuisine with a modern twist. Experience the rich flavors and traditions of Egypt.",
        order_button: "Order Now",
        menu_title: "Our Menu",
        category_all: "All",
        category_appetizers: "Appetizers",
        category_main: "Main Courses",
        category_desserts: "Desserts",
        category_drinks: "Drinks",
        item1_name: "Koshari",
        item1_description: "Traditional Egyptian dish with rice, lentils, chickpeas, and pasta topped with tomato sauce and crispy onions.",
        item2_name: "Grilled Kofta",
        item2_description: "Minced meat mixed with herbs and spices, grilled to perfection. Served with rice and vegetables.",
        item3_name: "Fattah",
        item3_description: "Layers of rice, bread, and meat topped with garlic vinegar sauce and nuts. A festive Egyptian dish.",
        item4_name: "Molokhia",
        item4_description: "Traditional Egyptian soup made from jute leaves, served with rice and chicken or rabbit.",
        item5_name: "Umm Ali",
        item5_description: "Traditional Egyptian dessert made with pastry, milk, nuts, and raisins, baked to golden perfection.",
        item6_name: "Basbousa",
        item6_description: "Sweet semolina cake soaked in syrup, often topped with almonds or coconut flakes.",
        add_to_cart: "Add to Cart",
        footer_description: "Authentic Egyptian cuisine with a modern twist. Experience the rich flavors and traditions of Egypt in every dish.",
        contact_info: "Contact Info",
        address: "123 Restaurant St, Cairo, Egypt",
        opening_hours: "Opening Hours",
        hours_weekdays: "Monday - Thursday: 11:00 AM - 10:00 PM",
        hours_weekend: "Friday - Saturday: 11:00 AM - 11:00 PM",
        hours_sunday: "Sunday: 12:00 PM - 9:00 PM",
        copyright: "© 2023 El Shahda Boyossef Restaurant. All rights reserved.",
        "dashboard_title": "Restaurant Dashboard",
    "stats_today_orders": "Today's Orders",
    "stats_today_revenue": "Today's Revenue",
    "stats_menu_items": "Menu Items",
    "stats_customers": "Customers",
    "charts_revenue_overview": "Revenue Overview",
    "charts_order_status": "Order Status",
    "time_last_7_days": "Last 7 Days",
    "time_last_30_days": "Last 30 Days",
    "time_last_3_months": "Last 3 Months",
    "orders_recent_orders": "Recent Orders",
    "orders_view_all": "View All",
    "table_order_id": "Order ID",
    "table_customer": "Customer",
    "table_items": "Items",
    "table_total": "Total",
    "table_status": "Status",
    "table_time": "Time",
    "status_completed": "Completed",
    "status_pending": "Pending",
    "status_processing": "Processing",
    "sidebar_dashboard": "Dashboard",
    "sidebar_orders": "Orders",
    "sidebar_menu_items": "Menu Items",
    "sidebar_customers": "Customers",
    "sidebar_analytics": "Analytics",
    "sidebar_settings": "Settings",
    "sidebar_logout": "Logout",
    "navbar_admin": "Admin",
    "navbar_logout": "Logout",
    "login_title": "Restaurant Dashboard",
    "login_subtitle": "Sign in to access your restaurant management panel",
    "login_username": "Username",
    "login_password": "Password",
    "login_username_required": "Username is required",
    "login_password_required": "Password is required",
    "login_sign_in": "Sign In",
    "login_signing_in": "Signing In...",
    "login_invalid_credentials": "Invalid username or password",
    "login_error_occurred": "An error occurred. Please try again.",
    "login_demo_credentials": "Demo Credentials",
    "login_demo_username": "Username: admin",
    "login_demo_password": "Password: password",
    "common_welcome": "Welcome!",
    "common_my_profile": "My profile",
    "common_loading": "Loading...",
    "common_error": "Error",
    "common_success": "Success"

      },
      ar: {
        restaurant_name: "الشهد ابو يوسف",
        nav_home: "الرئيسية",
        nav_menu: "قائمة الطعام",
        nav_about: "من نحن",
        nav_contact: "اتصل بنا",
        hero_title: "مطعم الشهد ابو يوسف",
        hero_description: "مطبخ مصري أصيل مع لمسة عصرية. جرب النكهات الغنية وتقاليد مصر.",
        order_button: "اطلب الآن",
        menu_title: "قائمة طعامنا",
        category_all: "الكل",
        category_appetizers: "المقبلات",
        category_main: "الأطباق الرئيسية",
        category_desserts: "الحلويات",
        category_drinks: "المشروبات",
        item1_name: "كشري",
        item1_description: "طبق مصري تقليدي مع الأرز والعدس والحمص والمعكرونة يعلوه صلصة الطماطم والبصل المقرمش.",
        item2_name: "كفتة مشوية",
        item2_description: "لحم مفروم ممزوج بالأعشاب والتوابل، مشوي إلى حد الكمال. يقدم مع الأرز والخضروات.",
        item3_name: "فتة",
        item3_description: "طبقات من الأرز والخبز واللحم يعلوها صلصة الثوم والخل والمكسرات. طبق مصري احتفالي.",
        item4_name: "ملوخية",
        item4_description: "شوربة مصرية تقليدية مصنوعة من أوراق الملوخية، تقدم مع الأرز والدجاج أو الأرنب.",
        item5_name: "أم علي",
        item5_description: "حلوى مصرية تقليدية مصنوعة من العجين والحليب والمكسرات والزبيب، مخبوزة حتى تصبح ذهبية.",
        item6_name: "بسبوسة",
        item6_description: "كعكة سميد حلوة منقوعة في الشراب، غالبًا ما تعلوها اللوز أو رقائق جوز الهند.",
        add_to_cart: "أضف إلى السلة",
        footer_description: "مطبخ مصري أصيل مع لمسة عصرية. جرب النكهات الغنية وتقاليد مصر في كل طبق.",
        contact_info: "معلومات الاتصال",
        address: "123 شارع المطعم، القاهرة، مصر",
        opening_hours: "ساعات العمل",
        hours_weekdays: "الإثنين - الخميس: 11:00 صباحًا - 10:00 مساءً",
        hours_weekend: "الجمعة - السبت: 11:00 صباحًا - 11:00 مساءً",
        hours_sunday: "الأحد: 12:00 ظهرًا - 9:00 مساءً",
        copyright: "© 2023 مطعم الشهدا بويوسف. جميع الحقوق محفوظة.",
          "dashboard_title": "لوحة تحكم المطعم",
    "stats_today_orders": "طلبات اليوم",
    "stats_today_revenue": "إيرادات اليوم",
    "stats_menu_items": "عناصر القائمة",
    "stats_customers": "العملاء",
    "charts_revenue_overview": "نظرة عامة على الإيرادات",
    "charts_order_status": "حالة الطلبات",
    "time_last_7_days": "آخر 7 أيام",
    "time_last_30_days": "آخر 30 يوم",
    "time_last_3_months": "آخر 3 أشهر",
    "orders_recent_orders": "الطلبات الحديثة",
    "orders_view_all": "عرض الكل",
    "table_order_id": "رقم الطلب",
    "table_customer": "العميل",
    "table_items": "العناصر",
    "table_total": "المجموع",
    "table_status": "الحالة",
    "table_time": "الوقت",
    "status_completed": "مكتمل",
    "status_pending": "قيد الانتظار",
    "status_processing": "قيد المعالجة",
    "sidebar_dashboard": "لوحة التحكم",
    "sidebar_orders": "الطلبات",
    "sidebar_menu_items": "عناصر القائمة",
    "sidebar_customers": "العملاء",
    "sidebar_analytics": "التحليلات",
    "sidebar_settings": "الإعدادات",
    "sidebar_logout": "تسجيل الخروج",
    "navbar_admin": "مدير",
    "navbar_logout": "تسجيل الخروج",
    "login_title": "لوحة تحكم المطعم",
    "login_subtitle": "سجل الدخول للوصول إلى لوحة إدارة مطعمك",
    "login_username": "اسم المستخدم",
    "login_password": "كلمة المرور",
    "login_username_required": "اسم المستخدم مطلوب",
    "login_password_required": "كلمة المرور مطلوبة",
    "login_sign_in": "تسجيل الدخول",
    "login_signing_in": "جاري تسجيل الدخول...",
    "login_invalid_credentials": "اسم المستخدم أو كلمة المرور غير صحيحة",
    "login_error_occurred": "حدث خطأ. يرجى المحاولة مرة أخرى.",
    "login_demo_credentials": "بيانات الدخول التجريبية",
    "login_demo_username": "اسم المستخدم: admin",
    "login_demo_password": "كلمة المرور: password",
    "common_welcome": "مرحباً!",
    "common_my_profile": "ملفي الشخصي",
    "common_loading": "جاري التحميل...",
    "common_error": "خطأ",
    "common_success": "نجح"
      },
      
    };
  }

  getCurrentLanguage(): Observable<string> {
    return this.currentLanguage.asObservable();
  }
   getCurrentLanguageValue(): string {
    return this.currentLanguage.value;
  }


  setLanguage(lang: string): void {
    if (LANGUAGE_CONFIG.isLanguageSupported(lang)) {
      this.currentLanguage.next(lang);
      this.updateDocumentDirection(lang);

      if (isPlatformBrowser(this.platformId)) {
        localStorage.setItem(LANGUAGE_CONFIG.storageKey, lang);
      }
    }
  }

  private updateDocumentDirection(lang: string): void {
    const direction = LANGUAGE_CONFIG.getTextDirection(lang);

    // ✅ Only access the DOM in the browser environment
    if (isPlatformBrowser(this.platformId) && this.document) {
      this.document.documentElement.dir = direction;
      this.document.body.classList.toggle('rtl', direction === 'rtl');
    }
  }

  translate(key: keyof TranslationKeys): string {
    const lang = this.currentLanguage.value;
    const translation = this.translations[lang]?.[key];
    return translation || key;
  }

  initializeLanguage(): void {
    let savedLang: string | null = null;

    if (isPlatformBrowser(this.platformId)) {
      savedLang = localStorage.getItem(LANGUAGE_CONFIG.storageKey);
    }

    const defaultLang = LANGUAGE_CONFIG.defaultLanguage;
    const langToUse = savedLang && LANGUAGE_CONFIG.isLanguageSupported(savedLang)
      ? savedLang
      : defaultLang;

    this.setLanguage(langToUse);
  }
getTranslationCode(lang:string) {
    if (lang == 'English'||lang == 'en') return 'https://flagcdn.com/w40/gb.png';
    if (lang == 'Arabic'||lang =='ar') return 'https://flagcdn.com/w40/eg.png';
    return 'en'; // default to English
  }
  getCurrentLanguageConfig() {
    return LANGUAGE_CONFIG.getLanguageByCode(this.currentLanguage.value);
  }

  isCurrentLanguageRTL(): boolean {
    return LANGUAGE_CONFIG.getTextDirection(this.currentLanguage.value) === 'rtl';
  }
}
 