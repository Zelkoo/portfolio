import {Component, OnInit} from '@angular/core';
import {NavigationEnd, Router} from "@angular/router";

@Component({
  selector: 'nav-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit{
  public isHomeActive: boolean = true;
  public isAboutActive: boolean = false;
  public isSkillsActive: boolean = false;
  public isMenuOpen: boolean = false
  constructor(private router: Router) { }

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.setActiveStates();
      }
    });
  }
  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen
  }
  navigateToHome(event: Event) {
    this.isMenuOpen = false
    this.router.navigate([`/home`]);
  }
  navigateToAbout() {
    this.router.navigate([`/about`]);
  }
  navigateToSkills() {
    this.router.navigate([`/skills`]);
  }
  private setActiveStates() {
    const currentUrl = this.router.url;
    this.isHomeActive = currentUrl === '/home';
    this.isAboutActive = currentUrl === '/about';
    this.isSkillsActive = currentUrl === '/skills'
  }
}
