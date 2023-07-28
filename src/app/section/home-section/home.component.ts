import {Component, HostListener} from '@angular/core';
import {Router} from "@angular/router";
import {faLinkedin} from "@fortawesome/free-brands-svg-icons/faLinkedin";

@Component({
  selector: 'home-section',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  constructor(private router: Router) { }
  faCoffee = faLinkedin;

  navigateToAbout() {
    this.router.navigate(['/about']);
  }
  @HostListener('window:wheel', ['$event'])
  onWindowScroll(event: WheelEvent) {
    const deltaY = event.deltaY;

    if (deltaY > -100) {
      // Wykonaj akcję, gdy przewinięcie jest większe niż 100
      this.router.navigate(['/about']);
    }
  }
}
