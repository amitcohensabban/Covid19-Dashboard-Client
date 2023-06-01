import { Component } from '@angular/core';
import { viewOnCards } from 'src/app/data/app.view';
@Component({
  selector: 'app-first-section',
  templateUrl: './first-section.component.html',
  styleUrls: ['./first-section.component.scss']
})
export class FirstSectionComponent {
  dataToDisplay:any[]=viewOnCards;

}
