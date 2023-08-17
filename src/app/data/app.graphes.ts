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

//// second graph
export const optionTwo = {
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'cross',
      label: {
        backgroundColor: '#6a7985',
      },
    },
  },
  toolbox: {},
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true,
  },
  xAxis: [
    {
      type: 'category',
      boundaryGap: false,
    },
  ],
  yAxis: [
    {
      type: 'value',
    },
  ],
  series: [
    {
      name: 'Video Ads',
      type: 'line',
      stack: 'Total',
      areaStyle: {},
      emphasis: {
        focus: 'series',
      },
      data: [150, 232, 201, 154, 190, 330, 410],
    },
    {
      name: 'Direct',
      type: 'line',
      stack: 'Total',
      areaStyle: {},
      emphasis: {
        focus: 'series',
      },
      data: [320, 332, 301, 334, 390, 330, 320],
    },
    {
      name: 'Search Engine',
      type: 'line',
      stack: 'Total',
      label: {
        show: true,
        position: 'top',
      },
      areaStyle: {},
      emphasis: {
        focus: 'series',
      },
      data: [820, 932, 901, 934, 1290, 1330, 1320],
    },
  ],

};

export function generateFakeData(numberOfDays: number): {
  mildData: number[];
  moderateData: number[];
  severeData: number[];
} {
  const mildData = generateRandomData2(numberOfDays);
  const moderateData = generateRandomData2(numberOfDays);
  const severeData = generateRandomData2(numberOfDays);

  return { mildData, moderateData, severeData };
}

export function generateRandomData2(numberOfDays: number): number[] {
  const data = [];
  for (let i = 0; i < numberOfDays; i++) {
    data.push(Math.floor(Math.random() * 100));
  }
  return data;
}

export const option3 = {
  title: {
    text: '',
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow',
    },
  },
  legend: {},
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true,
  },
  xAxis: {
    type: 'value',
    boundaryGap: [0, 0.01],
    name: 'Number of Tests',
  },
  yAxis: {
    type: 'category',
    data: [
      '0-9',
      '10-19',
      '20-29',
      '30-39',
      '40-49',
      '50-49',
      '40-59',
      '60-69',
      '70-79',
      '80-89',
      '90+',
    ],
    axisLabel: {
      interval: 0,
    },
  },
  series: [
    {
      name: 'בדיקות חיוביות',
      type: 'bar',
      stack: 'total',
      label: {
        show: false,
      },
      emphasis: {
        focus: 'series',
      },
      itemStyle: {
        color: '#008A8A',
      },
      data: [],
    },
    {
      name: 'בדיקות',
      type: 'bar',
      stack: 'total',
      label: {
        show: false,
      },
      emphasis: {
        focus: 'series',
      },
      itemStyle: {
        color: '#50CBFD',
      },
      data: [],
    },
  ],
};

export function generateFakeDataForTests(
  days: number,
  numAgeGroups: number
): { total: number[][]; positive: number[][] } {
  const data = {
    total: [] as number[][],
    positive: [] as number[][],
  };

  for (let i = 0; i < numAgeGroups; i++) {
    const ageGroupTotalData: number[] = [];
    const ageGroupPositiveData: number[] = [];

    for (let j = 0; j < days; j++) {
      const totalTests = Math.floor(Math.random() * 500);
      ageGroupTotalData.push(totalTests);

      const positiveTests = Math.floor(
        totalTests * (0.7 + Math.random() * 0.2)
      );
      ageGroupPositiveData.push(positiveTests);
    }

    data.total.push(ageGroupTotalData);
    data.positive.push(ageGroupPositiveData);
  }

  return data;
}
export const timePeriods = [
  { value: 30, label: 'Last 30 Days' },
  { value: 90, label: 'Last 90 Days' },
  { value: 180, label: 'Last 180 Days' },
  { value: 360, label: 'Last 360 Days' },
];
