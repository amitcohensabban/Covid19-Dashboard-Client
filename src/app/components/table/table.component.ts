import { Component, OnInit, Input } from '@angular/core';
import { tables } from 'src/app/data/app.anchorList';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  @Input() tableData: any;
  tableNumbers!: string[];
  ngOnInit(): void {
    console.log(this.tableData);
    this.tableNumbers = tables;
    console.log(this.tableNumbers);
  }
}
