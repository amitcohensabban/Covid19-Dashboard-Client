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
    console.log(this.tableName);
    console.log(this.tableData);

    this.filterService.setInitialData(this.tableData, this.tableName);
    this.filterService
      .getFilteredDataObservable(this.tableName)
      .subscribe((filteredData) => {
        this.filteredTableData = filteredData;
      });
  }

  sortTable(columnName: string) {
    // If clicking the same column, toggle the sorting order
    if (this.sortedColumn === columnName) {
      this.sortAscending = !this.sortAscending;
    } else {
      // If clicking a different column, set the new column and reset the sorting order
      this.sortedColumn = columnName;
      this.sortAscending = true;
    }

    // Sort the table data based on the selected column and order
    this.filteredTableData.sort((a: any, b: any) => {
      if (this.sortAscending) {
        return a[columnName] > b[columnName] ? 1 : -1;
      } else {
        return a[columnName] < b[columnName] ? 1 : -1;
      }
    });
  }
}
