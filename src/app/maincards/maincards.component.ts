import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslationService } from '../../services/services/translation.service';

@Component({
  selector: 'app-maincards',
  standalone: true,
  imports: [],
  templateUrl: './maincards.component.html',
  styleUrl: './maincards.component.scss'
})
export class MaincardsComponent {
  constructor(public translationService:TranslationService) {}

}
