import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'skills-section',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
})
export class SkillsComponent {
  constructor(private router: Router) { }
  panelOpenState = false;
  navigateToAbout() {
    this.router.navigate(['/about']);
  }
}
