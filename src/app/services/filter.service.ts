import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FilterService {
  selectedCheckBoxes = new BehaviorSubject<string[]>([]);
    selectedCheckBoxesLength: number=0;

  constructor() {}


  updateSelectedCheckBoxes(value: any) {
    this.selectedCheckBoxes.next(value);
    this.selectedCheckBoxesLength=this.selectedCheckBoxes.getValue().length;
    console.log(value);
  }
  getSelectedCheckBoxesLength(){
    console.log(this.selectedCheckBoxesLength);
    return this.selectedCheckBoxesLength;

  }
}
