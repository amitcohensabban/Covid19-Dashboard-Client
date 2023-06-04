import { Component } from '@angular/core';
import { lastSevenDays } from 'src/app/data/app.view';
@Component({
  selector: 'app-last-seven-days',
  templateUrl: './last-seven-days.component.html',
  styleUrls: ['./last-seven-days.component.scss']
})
export class LastSevenDaysComponent {
  dataToDisplay: any[] = lastSevenDays;

}
