import {Injectable} from '@angular/core';
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root',
})
export class WheelService {
  private paths: string[] = ['/home', '/about', '/skills', '/education', '/contact'];
  private currentIndex = 0;

  constructor(private router: Router) {}

  onWindowScroll(event: WheelEvent): void {
    const deltaY = event.deltaY;

    if (deltaY > -100 && this.currentIndex < this.paths.length - 1) {
      this.currentIndex++;
    } else if (deltaY <= -100 && this.currentIndex > 0) {
      this.currentIndex--;
    }

    this.router.navigate([this.paths[this.currentIndex]]);
  }
}
