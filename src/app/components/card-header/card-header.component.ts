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

}
