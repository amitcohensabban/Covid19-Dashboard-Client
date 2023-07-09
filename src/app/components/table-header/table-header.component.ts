import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { tables } from 'src/app/data/app.anchorList';
@Component({
  selector: 'app-table-header',
  templateUrl: './table-header.component.html',
  styleUrls: ['./table-header.component.scss'],
})
export class TableHeaderComponent implements OnInit {
  tables!: any[];
  @Input() tableData!: any;
  ngOnInit(): void {

     console.log(this.tableData);
    this.tables = tables;

  }
}
