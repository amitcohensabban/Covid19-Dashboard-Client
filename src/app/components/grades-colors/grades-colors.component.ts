import { Component,Input } from '@angular/core';
import { colors } from 'src/app/data/app.anchorList';@Component({
  selector: 'app-grades-colors',
  templateUrl: './grades-colors.component.html',
  styleUrls: ['./grades-colors.component.scss']
})
export class GradesColorsComponent {
  @Input() graphName:string='lights';
  @Input()colors:any[]=colors;

}
