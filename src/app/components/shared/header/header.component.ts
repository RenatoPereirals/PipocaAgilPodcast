import { Component, HostListener, OnInit } from '@angular/core';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  showAppHome = false;

  constructor(private menuService: MenuService) {}

  ngOnInit() {}

  toggleMenuOpen() {
    this.menuService.toggleMenuOpen();
  }
}
