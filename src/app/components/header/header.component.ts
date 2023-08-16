import { Component,Renderer2 } from '@angular/core';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  darkMode = false;
isNavOpen:boolean = false;
  constructor(private renderer: Renderer2) {}

  toggleDarkMode() {
    this.darkMode = !this.darkMode;
    if (this.darkMode) {
      this.renderer.addClass(document.body, 'dark-mode');
    } else {
      this.renderer.removeClass(document.body, 'dark-mode');
    }
  }
  closeSideNav() {
    this.isNavOpen = false;
    document.body.classList.remove('no-scroll');
  }
  toggleSideNav(){
    document.body.classList.add('no-scroll');
    this.isNavOpen=!this.isNavOpen;
  }
}
