import { Component, Input, OnInit } from '@angular/core';
import { TablesService } from 'src/app/services/tables.service';
import { numberOfCards } from 'src/app/data/app.anchorList';
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
  tableNumber!:any;
  constructor(private tablesService: TablesService) {}
  ngOnInit(): void {
    this.getBedOccupancyTable();
    this.getTrafficLightsPlanTable();
    this.getVerifiedPatientsTable();

    // console.log(this.bedOccupancyData);
    // console.log(this.trafficLightsPlanData);
    // console.log(this.verifiedPatientsData);
  }
  @Input() title!: string;
  @Input() cardCount!: number;

  getBedOccupancyTable(): void {
    this.tablesService.getBedOccupancyTable().subscribe(
      (response) => {
        this.bedOccupancyData.push(response);
      },
      (error) => {}
    );
  }

  getTrafficLightsPlanTable(): void {
    this.tablesService.getTrafficLightsPlanTable().subscribe(
      (response) => {
        this.trafficLightsPlanData.push(response);
      },
      (error) => {}
    );
  }

  getVerifiedPatientsTable(): void {
    this.tablesService.getVerifiedPatientsTable().subscribe(
      (response) => {
        this.verifiedPatientsData.push(response);
      },
      (error) => {}
    );
  }
  getTableData(): any[] {
    if (this.title === 'מדדי תחלואה כללית') {
      // this.tableNumber = 0;
      return this.bedOccupancyData;
    } else if (this.title === 'תחלואה מחול') {
      // this.tableNumber = 1;
      return this.verifiedPatientsData;
    } else if (this.title === 'רמזור בישובים') {
      // this.tableNumber = 2;
      return this.trafficLightsPlanData;
    } else {
      // this.tableNumber = 3;
      return [];
    }
  }

}
