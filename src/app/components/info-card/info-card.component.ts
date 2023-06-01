import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-info-card',
  templateUrl: './info-card.component.html',
  styleUrls: ['./info-card.component.scss']
})
export class InfoCardComponent {
  @Input() num?:string="";
  @Input() text?:string="";
  @Input() classText?:string="";;
  @Input() classNum?:string="";;
  @Input() classContainer?:string="";

}
