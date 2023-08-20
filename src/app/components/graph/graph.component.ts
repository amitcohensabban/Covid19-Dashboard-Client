import { Component, HostListener, OnInit } from '@angular/core';
import * as echarts from 'echarts';
import {
  optionTwo,
  generateFakeData,
  timePeriods,
} from 'src/app/data/app.graphes';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.scss'],
})
export class GraphComponent implements OnInit {
  selectedNumberOfDays: number = 30;
  selectedNumberOfDaysTemp: number = 30;
  myChart: echarts.ECharts | null = null;
  isFilteringOptionOpen = false;
  timePeriods = timePeriods;
  showSevere = true;
  showModerate = true;
  showMild = true;
  isTableVisible = true;

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    if (this.myChart) {
      this.myChart.resize();
    }
  }
  ngOnInit(): void {
    const chartDom = document.getElementById('main');
    this.myChart = echarts.init(chartDom);
    this.updateGraph();
    this.myChart.resize();
  }
  updateGraph(): void {
    if (this.myChart) {
      const startDate = new Date();
      startDate.setDate(startDate.getDate() - this.selectedNumberOfDays + 1);

      const days = Array.from({ length: this.selectedNumberOfDays }, (_, i) => {
        const currentDate = new Date(startDate);
        currentDate.setDate(currentDate.getDate() + i);
        const formattedDate = currentDate.toLocaleDateString(undefined, {
          day: 'numeric',
          month: 'numeric',
        });
        return formattedDate;
      });

      const { mildData, moderateData, severeData } = generateFakeData(
        this.selectedNumberOfDays
      );

      const updatedOption = {
        tooltip: {
          trigger: 'axis',
          formatter: function (params: any) {
            let content = `<div style="margin-bottom: 5px;">${params[0].axisValueLabel}</div>`;
            params.forEach((param: { color: any; seriesName: any; value: any; }) => {
              content += '<div style="display: flex; align-items: center;gap:5px; margin-bottom: 3px;">';
              content += `<span style="display:inline-block; width:10px; height:10px; background-color:${param.color}; border-radius: 50%; margin-right: 5px;"></span>`;
              content += `<span style="font-weight: bold;">${param.seriesName}</span>`;
              content += `<span style="margin-left: 5px; padding-left: 3px;">${param.value}</span>`;
              content += '</div>';
            });
            return content;
          },
        },
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
        ],
        legend: {
          data: ['קשה', 'בינוני', 'קל'],
          textStyle: {
            color: 'black',
          },
          itemWidth: 15,
          itemHeight: 15,
          icon: 'circle',
          selectedMode: false,
          right: '15px',
          top: '20px',
        },
        series: [
          this.showSevere
            ? {
                name: 'קשה',
                type: 'line',
                stack: 'Total',
                areaStyle: {},
                data: severeData,
                itemStyle: {
                  color: '#85DBFE',
                },
              }
            : null,
          this.showModerate
            ? {
                name: 'בינוני',
                type: 'line',
                stack: 'Total',
                areaStyle: {},
                data: moderateData,
                itemStyle: {
                  color: '#B6CA51',
                },
              }
            : null,
          this.showMild
            ? {
                name: 'קל',
                type: 'line',
                stack: 'Total',
                areaStyle: {},
                data: mildData,
                itemStyle: {
                  color: '#4CA5A5',
                },
              }
            : null,
        ].filter((series) => series !== null),
      };
      this.myChart.setOption(updatedOption, true);
    }
  }
  toggleFilteringDropdown() {
    this.isFilteringOptionOpen = !this.isFilteringOptionOpen;
  }
  applySelection() {
    this.selectedNumberOfDays = this.selectedNumberOfDaysTemp;
    this.updateGraph();
    this.toggleFilteringDropdown();
  }
  cancelSelection() {
    this.toggleFilteringDropdown();
  }
}
