import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavbarComponent } from "../navbar/navbar.component";

interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  active: boolean;
  calories?: number;
  rating?: number;
  orderCount?: number;
}

@Component({
  selector: 'app-menu-items',
  templateUrl: './menu-items.component.html',
  styleUrls: ['./menu-items.component.scss'],
  imports: [NavbarComponent],
  
  standalone: true
})
export class MenuItemsComponent implements OnInit {
  menuItems: MenuItem[] = [];
  filteredItems: MenuItem[] = [];
  loading = false;
  searchTerm = '';
  selectedCategory = '';
  sortBy = 'name';
  showModal = false;
  editingItem: MenuItem | null = null;
  
  itemForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.itemForm = this.fb.group({
      name: ['', [Validators.required]],
      description: [''],
      price: [0, [Validators.required, Validators.min(0)]],
      category: ['', [Validators.required]],
      calories: [null],
      image: [''],
      active: [true]
    });
  }

  ngOnInit(): void {
    this.loadMenuItems();
  }

  loadMenuItems(): void {
    this.loading = true;
    // Simulate API call
    setTimeout(() => {
      this.menuItems = [
        {
          id: '1',
          name: 'Koshari',
          description: 'Traditional Egyptian dish with rice, lentils, chickpeas, and pasta topped with tomato sauce and crispy onions.',
          price: 12.99,
          category: 'main',
          image: 'https://images.unsplash.com/photo-1563379926898-05f4575a45d8',
          active: true,
          calories: 450,
          rating: 4.8,
          orderCount: 156
        },
        {
          id: '2',
          name: 'Grilled Kofta',
          description: 'Minced meat mixed with herbs and spices, grilled to perfection. Served with rice and vegetables.',
          price: 16.99,
          category: 'main',
          image: 'https://images.unsplash.com/photo-1598214886806-c87b84b7078b',
          active: true,
          calories: 520,
          rating: 4.6,
          orderCount: 89
        },
        // Add more sample items...
      ];
      this.filteredItems = [...this.menuItems];
      this.loading = false;
    }, 1000);
  }

  get activeItemsCount(): number {
    return this.menuItems.filter(item => item.active).length;
  }

  filterItems(): void {
    this.filteredItems = this.menuItems.filter(item => {
      const matchesSearch = item.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
                           item.description.toLowerCase().includes(this.searchTerm.toLowerCase());
      const matchesCategory = !this.selectedCategory || item.category === this.selectedCategory;
      return matchesSearch && matchesCategory;
    });
    this.sortItems();
  }

  sortItems(): void {
    this.filteredItems.sort((a, b) => {
      switch (this.sortBy) {
        case 'name':
          return a.name.localeCompare(b.name);
        case 'price':
          return a.price - b.price;
        case 'date':
          return 0; // Add date field if needed
        default:
          return 0;
      }
    });
  }

  getCategoryName(category: string): string {
    const categoryMap: { [key: string]: string } = {
      'appetizers': 'Appetizers',
      'main': 'Main Courses',
      'desserts': 'Desserts',
      'drinks': 'Drinks'
    };
    return categoryMap[category] || category;
  }

  openAddItemModal(): void {
    this.editingItem = null;
    this.itemForm.reset({ active: true });
    this.showModal = true;
  }

  editItem(item: MenuItem): void {
    this.editingItem = item;
    this.itemForm.patchValue(item);
    this.showModal = true;
  }

  closeModal(): void {
    this.showModal = false;
    this.editingItem = null;
    this.itemForm.reset({ active: true });
  }

  saveItem(): void {
    if (this.itemForm.valid) {
      const formValue = this.itemForm.value;
      
      if (this.editingItem) {
        // Update existing item
        const index = this.menuItems.findIndex(item => item.id === this.editingItem!.id);
        if (index !== -1) {
          this.menuItems[index] = { ...this.editingItem, ...formValue };
        }
      } else {
        // Add new item
        const newItem: MenuItem = {
          id: Date.now().toString(),
          ...formValue
        };
        this.menuItems.unshift(newItem);
      }
      
      this.filterItems();
      this.closeModal();
    }
  }

  toggleItemStatus(item: MenuItem): void {
    item.active = !item.active;
    this.filterItems();
  }

  handleImageError(event: any): void {
    event.target.src = 'assets/images/food-placeholder.jpg';
  }
}