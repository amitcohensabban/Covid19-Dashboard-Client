import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { tables } from 'src/app/data/app.anchorList';
import {
  filterOptionsBedOccupancy,
  filterOptionsTrafficLightsPlan,
  filterOptionsVerifiedPatients,
} from 'src/app/data/app.anchorList';

@Component({
  selector: 'app-table-header',
  templateUrl: './table-header.component.html',
  styleUrls: ['./table-header.component.scss'],
})
export class TableHeaderComponent implements OnInit {
  tables!: any[];
  filterOptionsBedOccupancy!: any[];
  filterOptionsTrafficLightsPlan!: any[];
  filterOptionsVerifiedPatients!: any[];
  @Input()graphTitle?:string;
  @Input() tableData!: any;
  @Input() tableName!: any;

  ngOnInit(): void {
    this.tables = tables;
    this.filterOptionsBedOccupancy = filterOptionsBedOccupancy;
    this.filterOptionsVerifiedPatients = filterOptionsVerifiedPatients;
    this.filterOptionsTrafficLightsPlan = filterOptionsTrafficLightsPlan;

  }
}
