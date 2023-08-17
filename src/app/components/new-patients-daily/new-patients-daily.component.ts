import { Component, HostListener, OnInit } from '@angular/core';
import { option } from 'src/app/data/app.graphes';
import * as echarts from 'echarts';
import { generateRandomData, calculateRollingAverage,timePeriods} from 'src/app/data/app.graphes';
@Component({
  selector: 'app-new-patients-daily',
  templateUrl: './new-patients-daily.component.html',
  styleUrls: ['./new-patients-daily.component.scss'],
})
export class NewPatientsDailyComponent implements OnInit {
  chartOption: any;
  selectedTimePeriod: number = 30;
  selectedNumberOfDaysTemp: number = 30;
  chart: any;
  isFilteringOptionOpen = false;
  timePeriods = timePeriods;
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    if (this.chart) {
      this.chart.resize();
    }
  }
  ngOnInit(): void {
    this.chart = echarts.init(document.getElementById('chart'));
    this.chartOption = option;
    this.updateGraph();
    this.chart.resize();
  }

  updateGraph(): void {
    const data = generateRandomData(this.selectedTimePeriod);
    const rollingAverages = calculateRollingAverage(data, 1);

    this.chartOption.xAxis[0].data = this.generateDateLabels(
      this.selectedTimePeriod
    );
    this.chartOption.xAxis[1].data = this.generateEmptyCategories(
      this.selectedTimePeriod
    );

    this.chartOption.series = [];

    this.chartOption.series.push({
      name: `     מאומתים     `,
      type: 'bar',
      xAxisIndex: 1,
      yAxisIndex: 1,
      itemStyle: {
        color: '#50CBFD',
      },
      data: data,
    });
    this.chartOption.series.push({
      name: 'ממוצע נע',
      type: 'line',
      itemStyle: {
        color: '#FF7D67',
      },
      data: rollingAverages,
    });
    this.chart.setOption(this.chartOption);
  }
  getDataForTimePeriod(numDays: number): number[] {
    return generateRandomData(numDays);
  }
  generateDateLabels(numDays: number): string[] {
    const today = new Date();
    const dateLabels = [];

    for (let i = 0; i < numDays; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() - i);
      dateLabels.unshift(date.toLocaleDateString());
    }
    return dateLabels;
  }
  generateEmptyCategories(numDays: number): string[] {
    const emptyCategories = [];
    for (let i = 0; i < numDays; i++) {
      emptyCategories.push('');
    }
    return emptyCategories;
  }
  toggleFilteringDropdown() {
    this.isFilteringOptionOpen = !this.isFilteringOptionOpen;
  }
  applySelection(){
    this.selectedTimePeriod = this.selectedNumberOfDaysTemp;
    this.updateGraph();
    this.toggleFilteringDropdown();


  }
  cancelSelection(){
    this.toggleFilteringDropdown();

  }

}
