import { Component, Input, OnInit } from '@angular/core';
import { TablesService } from 'src/app/services/tables.service';
import { numberOfCards } from 'src/app/data/app.anchorList';
import { FilterService } from 'src/app/services/filter.service';
@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss'],
})
export class SectionComponent implements OnInit {
  bedOccupancyData: any[] = [];
  trafficLightsPlanData: any[] = [];
  verifiedPatientsData: any[] = [];
  @Input() labels: any[] = [];
  sections: any[] = numberOfCards;
  tableNumber!: any;
  constructor(private tablesService: TablesService,private filterService:FilterService) {}
  ngOnInit(): void {
    this.getBedOccupancyTable();
    this.getVerifiedPatientsTable();
    this.getTrafficLightsPlanTable();
  }
  @Input() title!: string;
  @Input() cardCount!: number;

  getBedOccupancyTable(): void {
    this.tablesService.getBedOccupancyTable().subscribe(
      (response) => {
        this.bedOccupancyData.push(response);
        this.filterService.filteredData['bedOccupancyTable'].next(response)
      },
      (error) => {}
    );
  }

  getTrafficLightsPlanTable(): void {
    this.tablesService.getTrafficLightsPlanTable().subscribe(
      (response) => {
        this.trafficLightsPlanData.push(response);
        this.filterService.filteredData['trafficLightsPlanTable'].next(response)

      },
      (error) => {}
    );
  }

  getVerifiedPatientsTable(): void {
    this.tablesService.getVerifiedPatientsTable().subscribe(
      (response) => {
        this.verifiedPatientsData.push(response);
        this.filterService.filteredData['verifiedPatientsTable'].next(response)

      },
      (error) => {}
    );
  }
  getTableData(): any {
    if (this.title === 'מדדי תחלואה כללית') {
      return {
        tableData: this.bedOccupancyData,
        tableName: 'bedOccupancyTable',
      };
    } else if (this.title === 'תחלואה מחול') {
      return {
        tableData: this.verifiedPatientsData,
        tableName: 'verifiedPatientsTable',
      };
    } else if (this.title === 'רמזור בישובים') {
      return {
        tableData: this.trafficLightsPlanData,
        tableName: 'trafficLightsPlanTable',
      };
    } else {
      return { tableData: [], tableName: '' }; // Make sure to return a valid empty value
    }
  }
}
