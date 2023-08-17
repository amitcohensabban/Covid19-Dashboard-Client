import { Component, HostListener, OnInit } from '@angular/core';
import * as echarts from 'echarts';
import { option3, generateFakeDataForTests,timePeriods } from 'src/app/data/app.graphes';
@Component({
  selector: 'app-tests-by-age-group',
  templateUrl: './tests-by-age-group.component.html',
  styleUrls: ['./tests-by-age-group.component.scss'],
})
export class TestsByAgeGroupComponent implements OnInit {
  myChart: echarts.ECharts | null = null;
  isFilteringOptionOpen = false;
  timePeriods = timePeriods;
  option: any;
  selectedTimePeriod = 30;
  selectedNumberOfDaysTemp: number = 30;
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    if (this.myChart) {
      this.myChart.resize();
    }
  }

  ngOnInit(): void {
    this.option = option3;
    this.myChart = echarts.init(document.getElementById('chartContainer'));
    this.updateGraph();
    this.myChart.resize();
  }
  toggleFilteringDropdown() {
    this.isFilteringOptionOpen = !this.isFilteringOptionOpen;
  }
  updateGraph(): void {
    const numAgeGroups = 11;
    const fakeData = generateFakeDataForTests(
      this.selectedTimePeriod,
      numAgeGroups
    );

    const totalData = fakeData.total.map((ageGroupData) =>
      ageGroupData.reduce((sum, value) => sum + value, 0)
    );
    const positiveData = fakeData.positive.map((ageGroupData) =>
      ageGroupData.reduce((sum, value) => sum + value, 0)
    );

    this.option.series[0].data = totalData;
    this.option.series[1].data = positiveData;

    if (this.myChart) {
      this.myChart.setOption(this.option);
    }
  }
  applySelection() {
    this.selectedTimePeriod = this.selectedNumberOfDaysTemp;
    this.updateGraph();
    this.toggleFilteringDropdown();
  }
  cancelSelection() {
    this.toggleFilteringDropdown();
  }
}
