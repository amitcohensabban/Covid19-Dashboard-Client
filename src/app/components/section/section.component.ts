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
  getTableData(title: string): any[] {
    if (this.title === 'מדדי תחלואה כללית') {
      return this.bedOccupancyData;
    }
    if (this.title === 'תחלואה מחול') {
      return this.verifiedPatientsData;
    }if (this.title === 'רמזור בישובים') {
      return this.trafficLightsPlanData;
    }
    return [];
  }

}
