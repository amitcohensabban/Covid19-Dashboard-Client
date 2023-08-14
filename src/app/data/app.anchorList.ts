export const pages = [
  'מבט על',
  'מדדים מרכזיים',
  'מדדי תחלואה כללית',
  'תחלואה ואשפוזי ילדים',
  'תחלואה מחול',
  'השפעת התחסנות על התחלואה',
  'נפטרים',
  'בדיקות',
  'תחקורים נוספים',
  'תחלואה חוזרת ומחלימים',
  'התחסנות האוכלוסיה',
  'רמזור בישובים',
];
export type Sections = { title: string; value: number; labels: string[] };
export const numberOfCards: Sections[] = [
  { title: 'מבט על', value: 0, labels: [] },
  { title: 'מדדים מרכזיים', value: 3, labels: ['graph', 'empty', 'graph2'] },
  { title: 'מדדי תחלואה כללית', value: 2, labels: ['empty', 'table'] },
  {
    title: 'תחלואה ואשפוזי ילדים',
    value: 3,
    labels: ['empty', 'empty', 'empty'],
  },
  { title: 'תחלואה מחול', value: 3, labels: ['empty', 'empty', 'table'] },
  {
    title: 'השפעת התחסנות על התחלואה',
    value: 3,
    labels: ['empty', 'empty', 'empty'],
  },
  { title: 'נפטרים', value: 2, labels: ['empty', 'empty'] },
  { title: 'בדיקות', value: 3, labels: ['empty', 'empty', 'graph3'] },
  { title: 'תחקורים נוספים', value: 3, labels: ['empty', 'empty', 'empty'] },
  {
    title: 'תחלואה חוזרת ומחלימים',
    value: 3,
    labels: ['empty', 'empty', 'empty'],
  },
  { title: 'התחסנות האוכלוסיה', value: 3, labels: ['empty', 'empty', 'empty'] },
  { title: 'רמזור בישובים', value: 2, labels: ['empty', 'table'] },
];

export const tables = [
  { number: '1', title: 'תפוסת מיטות בביה"ח' },
  { number: '2', title: 'מאומתים הנכנסים לישראל לפי מדינות' },
  { number: '3', title: 'תכנית הרמזור' },
];

export const filterOptionsBedOccupancy: any[] = [
  { placeHolder: 'placeholder' },
  //   {
  //     section: 'Section 1',
  //     type: 'checkbox',
  //     options: [
  //       { label: 'Option 1', isChecked: false },
  //       { label: 'Option 2', isChecked: true },
  //       { label: 'Option 3', isChecked: false },
  //     ],
  //   },
  //   {
  //     section: 'Section 2',
  //     type: 'radio',
  //     options: [
  //       { label: 'Option 4', value: 'value1' },
  //       { label: 'Option 5', value: 'value2' },
  //       { label: 'Option 6', value: 'value3' },
  //     ],
  //     selectedItem: 'value2',
  // },
];

export const filterOptionsVerifiedPatients: any[] = [
  {
    section: 'Section 1',
    type: 'checkbox',
    options: [
      { label: 'Option 1', isChecked: false },
      { label: 'Option 2', isChecked: true },
      { label: 'Option 3', isChecked: false },
    ],
  },
  {
    section: 'Section 2',
    type: 'radio',
    options: [
      { label: 'Option 4', value: 'value1' },
      { label: 'Option 5', value: 'value2' },
      { label: 'Option 6', value: 'value3' },
    ],
    selectedItem: 'value2',
  },
];

export const filterOptionsTrafficLightsPlan: any[] = [
  // {
  //   section: 'Section 1',
  //   type: 'checkbox',
  //   options: [
  //     { label: 'Option 1', isChecked: false },
  //     { label: 'Option 2', isChecked: true },
  //     { label: 'Option 3', isChecked: false },
  //   ],
  // },
  // {
  //   section: 'Section 2',
  //   type: 'radio',
  //   options: [
  //     { label: 'Option 4', value: 'value1' },
  //     { label: 'Option 5', value: 'value2' },
  //     { label: 'Option 6', value: 'value3' },
  //   ],
  //   selectedItem: 'value2',
  // },
];
export const colors = [
  { name: 'אדום', range: 'ציון 7.5 ומעלה', class: 'red' },
  { name: 'כתום', range: 'ציון בין 6 ל - 7.5', class: 'orange' },
  { name: 'צהוב', range: 'ציון בין 4.5 ל - 6', class: 'yellow' },
  { name: 'ירוק', range: 'ציון עד 4.5', class: 'green' },
];
