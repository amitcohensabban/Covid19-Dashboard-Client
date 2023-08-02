import { Component, OnInit } from '@angular/core';
import { categories, categories2, data, data2 ,option} from 'src/app/data/app.graphes';
import * as echarts from 'echarts';

@Component({
  selector: 'app-new-patients-daily',
  templateUrl: './new-patients-daily.component.html',
  styleUrls: ['./new-patients-daily.component.scss'],
})
export class NewPatientsDailyComponent implements OnInit {
  chartOption: any;

  ngOnInit(): void {
    const chart = echarts.init(document.getElementById('chart'));
    this.chartOption =option;
    chart.setOption(this.chartOption);

  }


  
}
