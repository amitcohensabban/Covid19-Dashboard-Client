import { Component } from '@angular/core';
import { HostBinding } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'covid-19-dashboard';
  isDarkMode = false;

  @HostBinding('class.dark-mode') get darkModeClass() {
    return this.isDarkMode;
  }

  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;
  }
}
