export function generateRandomData(numDays: number) {
  let res = [];
  for (let i = 0; i < numDays; i++) {
    res.push(Math.round(Math.random() * 100));
  }
  return res;
}
export function calculateRollingAverage(
  data: number[],
  decimalPlaces: number
): number[] {
  const rollingAverages = [];

  for (let i = 0; i < data.length; i++) {
    let sum = 0;
    let count = 0;
    for (let j = i - 6; j <= i; j++) {
      if (j >= 0) {
        sum += data[j];
        count++;
      }
    }
    const average = count === 0 ? 0 : sum / count;
    rollingAverages.push(Number(average.toFixed(decimalPlaces)));
  }

  return rollingAverages;
}

export const data30: number[] = generateRandomData(30);
export const data90: number[] = generateRandomData(90);
export const data180: number[] = generateRandomData(180);
export const data360: number[] = generateRandomData(360);

export const option = {
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'line',
      label: {
        backgroundColor: '#FF0000',
      },
    },
  },
  legend: {},
  dataZoom: {
    show: false,
    start: 0,
    end: 100,
  },
  xAxis: [
    {
      type: 'category',
      boundaryGap: false,
    },
    {
      type: 'category',
      boundaryGap: false,
    },
  ],
  yAxis: [
    {
      type: 'value',
      scale: true,
      name: 'Patients',
      max: 120,
      min: 0,
      boundaryGap: [0.2, 0.2],
    },
    {
      type: 'value',
      scale: true,
      name: '',
      min: 0,
      boundaryGap: [0.2, 0.2],
      axisLabel: {
        show: false,
      },
    },
  ],
  series: [
    {
      name: 'מאומתים ',
      type: 'bar',
      xAxisIndex: 1,
      yAxisIndex: 1,
      itemStyle: {
        color: '#50CBFD',
      },
      barWidth: '60%',
      barGap: '70%',
      barCategoryGap: '20%',
      data: data30,
    },
  ],
};
