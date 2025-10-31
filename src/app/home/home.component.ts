import { Component } from '@angular/core';
import { SidebarComponent } from "../sidebar/sidebar.component";
import { MaincontentComponent } from "../maincontent/maincontent.component";
import { NavbarComponent } from "../navbar/navbar.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SidebarComponent, MaincontentComponent, NavbarComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
