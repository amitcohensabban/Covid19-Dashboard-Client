import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { sideNavData, sideNavData2 } from 'src/app/data/app.view';
@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss'],
})
export class SideNavComponent implements OnInit {
  data1: { value: string }[] = [];
  data2: { value: string }[] = [];
  ngOnInit(): void {
    this.data1 = sideNavData;
    this.data2 = sideNavData2;

  }
  @Input() isNavOpen: boolean = false;
  @Output() isNavOpenChange: EventEmitter<boolean> =
    new EventEmitter<boolean>();

  toggleButton() {
    this.isNavOpen = !this.isNavOpen;
    this.isNavOpenChange.emit(this.isNavOpen);
  }
}
