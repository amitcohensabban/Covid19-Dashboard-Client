import { Component, Input, OnInit } from '@angular/core';
import { tables } from 'src/app/data/app.anchorList';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  tables!:any[];
  @Input()index!: string;

  ngOnInit(): void {
    // console.log(this.card);
    this.tables = tables;
  }
  @Input() card!: any;
  @Input() tableData!: any;
}
