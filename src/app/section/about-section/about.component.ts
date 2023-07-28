import {Component, ElementRef, HostListener, Inject, OnInit, ViewChild} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'about-section',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit{
  constructor(private router: Router) {
  }
  public ngOnInit() {
  }
  @HostListener('window:wheel', ['$event'])
  onWindowScroll(event: WheelEvent) {
    const deltaY = event.deltaY;
    console.log(deltaY)

    if (deltaY < -100) {
      this.router.navigate(['/home'])
    }
  }
}
