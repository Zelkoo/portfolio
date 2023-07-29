import {Component, HostListener, OnInit,} from '@angular/core';
import {Router} from "@angular/router";
import {WheelService} from "../../services/wheel.service";

@Component({
  selector: 'about-section',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {
  constructor(private router: Router, private wheelService: WheelService) {
  }

  public ngOnInit() {
  }

  @HostListener('window:wheel', ['$event'])
  onScroll(event: WheelEvent) {
    this.wheelService.onWindowScroll(event)
  }
}
