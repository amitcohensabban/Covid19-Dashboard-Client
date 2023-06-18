import { Component } from '@angular/core';
import { pages } from 'src/app/data/app.anchorList';
import { numberOfCards } from 'src/app/data/app.anchorList';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
titlesForSections:string[]=pages;
numberOfCards: any[] = numberOfCards.slice(0, this.titlesForSections.length);
}
