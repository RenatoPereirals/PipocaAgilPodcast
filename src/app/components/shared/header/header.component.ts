import { Component, HostListener, OnInit } from '@angular/core';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  showAppHome = false;
  isMenuShow = this.menuService.isMenuOpen

  constructor(private menuService: MenuService) {}

  ngOnInit() {
    this.checkWindowSize();
  }

  toggleMenuOpen() {
    this.menuService.toggleMenuOpen();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.checkWindowSize();
  }

  private checkWindowSize() {
    this.showAppHome = window.innerWidth <= 360;
  }
}
