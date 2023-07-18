import { Component, OnInit, Input } from '@angular/core';
import { tables } from 'src/app/data/app.anchorList';
import { FilterService } from 'src/app/services/filter.service';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  @Input() tableData: any;
  @Input() tableName!: string;
  filteredTableData!: any;
  tableNumbers!: any[];
  counter: number = 0;
  ngOnInit(): void {
    this.tableNumbers = tables;
    console.log(this.tableName);

    this.filterService.setInitialData(this.tableData, this.tableName);
    this.filterService
      .getFilteredDataObservable(this.tableName)
      .subscribe((filteredData) => {
        this.filteredTableData = filteredData;
        // console.log(this.filteredTableData);
        // console.log(this.tableData);
      });
  }
  constructor(private filterService: FilterService) {}
}
