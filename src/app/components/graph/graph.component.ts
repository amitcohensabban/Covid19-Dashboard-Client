import { Component, OnInit } from '@angular/core';
import * as echarts from 'echarts';
import { optionTwo, generateFakeData } from 'src/app/data/app.graphes';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.scss'],
})
export class GraphComponent implements OnInit {
  selectedNumberOfDays: number = 30;
  myChart: echarts.ECharts | null = null;
  isFilteringOptionOpen = false;
  timePeriods = [
    { value: 30, label: 'Last 30 Days' },
    { value: 90, label: 'Last 90 Days' },
    { value: 180, label: 'Last 180 Days' },
    { value: 360, label: 'Last 360 Days' },
  ];

  ngOnInit(): void {
    const chartDom = document.getElementById('main');
    this.myChart = echarts.init(chartDom);
    this.updateGraph();
  }
  updateGraph(): void {
    if (this.myChart) {
      const startDate = new Date();
      startDate.setDate(startDate.getDate() - this.selectedNumberOfDays + 1);

      const days = Array.from({ length: this.selectedNumberOfDays }, (_, i) => {
        const currentDate = new Date(startDate);
        currentDate.setDate(currentDate.getDate() + i);
        return currentDate.toLocaleDateString();
      });

      const { mildData, moderateData, severeData } = generateFakeData(
        this.selectedNumberOfDays
      );

      const option = {
        tooltip: optionTwo.tooltip,
        toolbox: optionTwo.toolbox,
        grid: optionTwo.grid,
        xAxis: [
          {
            type: 'category',
            boundaryGap: false,
            data: days,
          },
        ],
        yAxis: [
          {
            type: 'value',
            min: 0,
            max: 250,
            interval: 50,
          },
        ],legend: {
          data: ['קשה', 'בינוני', 'קל'],
          textStyle: {
            color: 'black',
          },
          itemWidth: 10,
          itemHeight: 10,
          icon: 'circle',
        },

        series: [
          {
            name: 'קשה',
            type: 'line',
            stack: 'Total',
            areaStyle: {},
            emphasis: { focus: 'series' },
            data: severeData,
            itemStyle: {
              color: '#85DBFE',
            },
          },

          {
            name: 'בינוני',
            type: 'line',
            stack: 'Total',
            areaStyle: {},
            emphasis: { focus: 'series' },
            data: moderateData,
            itemStyle: {
              color: '#B6CA51',
            },
          },
          {
            name: 'קל',
            type: 'line',
            stack: 'Total',
            areaStyle: {},
            emphasis: { focus: 'series' },
            data: mildData,
            itemStyle: {
              color: '#4CA5A5',
            },
          },
        ],
      };

      this.myChart.setOption(option);
    }
  }
  toggleFilteringDropdown() {
    this.isFilteringOptionOpen = !this.isFilteringOptionOpen;
  }
  applySelection(){
    this.updateGraph();
    this.toggleFilteringDropdown();
  }
  cancelSelection(){
    this.toggleFilteringDropdown();
  }
}
