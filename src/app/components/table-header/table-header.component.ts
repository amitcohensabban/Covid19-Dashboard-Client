import { Component,Input,OnInit } from '@angular/core';

@Component({
  selector: 'app-table-header',
  templateUrl: './table-header.component.html',
  styleUrls: ['./table-header.component.scss']
})
export class TableHeaderComponent implements OnInit {
  ngOnInit(): void {
  //  console.log(this.tableData);

  }
  @Input() tableData!: any;
  @Input() tableTitle!: string;

}
