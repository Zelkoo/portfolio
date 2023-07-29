import {Component, HostListener} from '@angular/core';
import {Router} from "@angular/router";
import {WheelService} from "../../services/wheel.service";

@Component({
  selector: 'skills-section',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
})
export class SkillsComponent {
  constructor(private router: Router,  private wheelService: WheelService) { }
  panelOpenState = false;

  @HostListener('window:wheel', ['$event'])
  onScroll(event: WheelEvent) {
    this.wheelService.onWindowScroll(event)
  }
}
