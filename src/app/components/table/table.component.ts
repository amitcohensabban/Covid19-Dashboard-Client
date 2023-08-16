import {
  Component,
  OnInit,
  Input,
} from '@angular/core';
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
  sortedColumn: string = '';
  sortAscending: boolean = true;
  constructor(private filterService: FilterService) {}

  ngOnInit(): void {
    this.tableNumbers = tables;
    this.filterService.setInitialData(this.tableData, this.tableName);
    this.filterService
      .getFilteredDataObservable(this.tableName)
      .subscribe((filteredData) => {
        this.filteredTableData = filteredData;
      });
  }

  sortTable(columnName: string) {
    if (this.sortedColumn === columnName) {
      this.sortAscending = !this.sortAscending;
    } else {
      this.sortedColumn = columnName;
      this.sortAscending = true;
    }

    this.filteredTableData.sort((a: any, b: any) => {
      if (this.sortAscending) {
        return a[columnName] > b[columnName] ? 1 : -1;
      } else {
        return a[columnName] < b[columnName] ? 1 : -1;
      }
    });
  }
}
