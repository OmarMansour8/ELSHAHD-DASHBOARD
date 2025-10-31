import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { MaincardsComponent } from "../maincards/maincards.component";
import { ChartsComponent } from "../charts/charts.component";
import { RecentordersComponent } from "../recentorders/recentorders.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-maincontent',
  standalone: true,
  imports: [NavbarComponent, MaincardsComponent, ChartsComponent, RecentordersComponent, FooterComponent],
  templateUrl: './maincontent.component.html',
  styleUrl: './maincontent.component.scss'
})
export class MaincontentComponent {

}
