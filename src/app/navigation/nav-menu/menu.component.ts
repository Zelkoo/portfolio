import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'nav-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  constructor(private router: Router) { }
  navigateToAbout(page: string) {
    this.router.navigate([`/${page}`]);
  }
}
