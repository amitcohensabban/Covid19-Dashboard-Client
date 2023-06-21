import { Component, Input, OnInit } from '@angular/core';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  ngOnInit(): void {
    console.log(this.card);
  }
  @Input() card!: any;
  @Input() tableData!: any;
}
