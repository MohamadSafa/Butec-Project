import { Component, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  submenuVisible = false;

  constructor(private renderer: Renderer2) {}

  toggleSubmenu() {
    this.submenuVisible = !this.submenuVisible;
    const submenu = document.querySelector('.submenu');
    if (submenu) {
      if (this.submenuVisible) {
        this.renderer.removeClass(submenu, 'hide');
      } else {
        this.renderer.addClass(submenu, 'hide');
      }
    }
  }

  // Other methods...
}
