import {Component, HostListener} from '@angular/core';
import {Router} from "@angular/router";
import {faLinkedin} from "@fortawesome/free-brands-svg-icons/faLinkedin";
import {WheelService} from "../../services/wheel.service";

@Component({
  selector: 'home-section',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  constructor(private router: Router, private wheelService: WheelService) { }
  faCoffee = faLinkedin;

  @HostListener('window:wheel', ['$event'])
  onScroll(event: WheelEvent) {
    this.wheelService.onWindowScroll(event)
  }

  navigateToAbout() {
    this.router.navigate(['/about']);
  }

}
