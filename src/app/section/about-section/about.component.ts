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
  @HostListener("window:wheel", ['$event'])
  onWindowScroll() {
    //@ts-ignore
    if (event?.deltaY as any === -100) {
      this.router.navigate(['/home']);
    }
  }
}
