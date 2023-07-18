import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FilterService {
  private selectedCheckBoxes = new BehaviorSubject<string[]>([]);
  private selectedCheckBoxesLength: number = 0;
   filteredData: { [key: string]: BehaviorSubject<any[]> } = {};

  getFilteredDataObservable(tableName: string): Observable<any[]> {
    return this.filteredData[tableName].asObservable();
  }
  constructor() {}
  setInitialData(tableData: any[], tableName: string): void {
    this.filteredData[tableName] = new BehaviorSubject<any[]>(tableData);
  }

  updateSelectedCheckBoxes(value: any) {
    this.selectedCheckBoxes.next(value);
    this.selectedCheckBoxesLength = value.length;
    console.log(value);
  }
  getSelectedCheckBoxes(): Observable<string[]> {
    return this.selectedCheckBoxes.asObservable();
  }

  getSelectedCheckBoxesLength() {
    console.log(this.selectedCheckBoxesLength);
    return this.selectedCheckBoxesLength;
  }
  getFilteredData(tableData: any[], tableName: string): any[] {
    const selectedCheckBoxes = this.selectedCheckBoxes.getValue();

    if (selectedCheckBoxes.length === 0) {
      this.filteredData[tableName].next(tableData);
      return tableData;
    }

    const filteredData = tableData.filter(
      (item) =>
        selectedCheckBoxes.includes(item.hospitalName) ||
        selectedCheckBoxes.includes(item.countryName) ||
        selectedCheckBoxes.includes(item.city)
    );
    console.log('Filtered Data for', tableName, filteredData);
    this.filteredData[tableName].next(filteredData);
    return filteredData;
  }
}
