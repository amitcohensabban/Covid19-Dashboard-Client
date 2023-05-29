import { Component } from '@angular/core';
import { pages } from 'src/app/data/app.anchorList';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {
  pages = pages;

}
