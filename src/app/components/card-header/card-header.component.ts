import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-card-header',
  templateUrl: './card-header.component.html',
  styleUrls: ['./card-header.component.scss']
})
export class CardHeaderComponent {
  @Input() text?:string;
  @Input() openWindowsIIcon:string="";
  @Input() isDarkModeActive?:boolean;
  @Input()id:string=""
  showTooltip: boolean = false;
  tooltipText: string = "מספר החולים הפעילים במחלת הנגיף COVID-19, נכון למועד העדכון האחרון. חולים פעילים - מי שנבדקו ונמצאו חיוביים לנגיף בבדיקת PCR או בבדיקת אנטיגן מפוקחת  COVID-19, ללא קשר להופעת תסמינים, שעוד לא הוגדרו כמחלימים ושלא נפטרו";
}
