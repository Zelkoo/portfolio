import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'nav-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  constructor(private router: Router) { }
  navigateToHome() {
    console.log(1)
    this.router.navigate([`/home`]);
  }
}
