import { Component } from '@angular/core';
import { TranslationService } from '../../services/services/translation.service';

@Component({
  selector: 'app-recentorders',
  standalone: true,
  imports: [],
  templateUrl: './recentorders.component.html',
  styleUrl: './recentorders.component.scss'
})
export class RecentordersComponent {
  constructor(public translationService: TranslationService) {}

}
