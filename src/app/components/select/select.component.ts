import { Component, Input, OnInit } from '@angular/core';
import { FilterService } from 'src/app/services/filter.service';
@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
})
export class SelectComponent implements OnInit {
  @Input() filterOptions: any[] = [];
  @Input() tableData!: any[];
  @Input() tableName!: string;
  selectedValues!: string;
  searchOptions!: any[];
  isFilteringOptionOpen: boolean = false;
  isSearchComponentClicked = false;
  isApplyClicked = false;
  hasCheckedOptions = false;
  previousSelection: any[] = [];
  selectedCheckBoxesLength: number = 0;
  InnerTitle = '';
  constructor(private filterService: FilterService) {}

  ngOnInit(): void {
    this.cloneFilterOptions();
    this.getSelectedValues();
    this.processArrayData(this.tableData);
    this.setInnerTitle();
  }
  handleSearchComponentClick(optionsVisible: boolean) {
    this.isSearchComponentClicked = !this.isSearchComponentClicked;
  }
  showOptions(): void {
    this.isSearchComponentClicked = true;
  }
  toggleFilteringDropdown() {
    if (this.isApplyClicked) {
      this.isFilteringOptionOpen = false;
      this.isApplyClicked = false;
    } else if (!this.isSearchComponentClicked) {
      this.isFilteringOptionOpen = !this.isFilteringOptionOpen;
    }
    this.isSearchComponentClicked = false;
  }
  closeFilteringDropdown() {
    this.isFilteringOptionOpen = false;
    this.isSearchComponentClicked = false;
    this.isApplyClicked = false;
  }
  cloneFilterOptions() {
    this.previousSelection = JSON.parse(JSON.stringify(this.filterOptions));
  }
  cancelSelection() {
    this.filterOptions = JSON.parse(JSON.stringify(this.previousSelection));
    this.closeFilteringDropdown();
  }
  applySelection() {
    if (this.isSearchComponentClicked) {
      this.isSearchComponentClicked = false;
    } else {
      this.filterService.getFilteredData(this.tableData, this.tableName);
      this.isFilteringOptionOpen = false;
    }
    this.selectedCheckBoxesLength =
      this.filterService.getSelectedCheckBoxesLength();
  }
  getSelectedValues() {
    const selectedValues = [];
    for (const section of this.filterOptions) {
      if (section.type === 'checkbox') {
        const selectedOptions = section.options.filter(
          (option: any) => option.isChecked
        );
        selectedValues.push(
          ...selectedOptions.map((option: any) => option.label)
        );
        if (selectedOptions.length > 0) {
          this.hasCheckedOptions = true;
        }
      } else if (section.type === 'radio') {
        const selectedItem = section.options.find(
          (option: any) => option.value === section.selectedItem
        );
        if (selectedItem) {
          selectedValues.push(selectedItem.label);
        }
      }
    }
    this.selectedValues = selectedValues.join(', ');
  }
  processArrayData(arr: any[]): string[] {
    if (arr.length === 10) {
      this.searchOptions = arr.map((item) => item.hospitalName);
      return this.searchOptions;
    } else if (arr.length === 37) {
      this.searchOptions = arr.map((item) => item.countryName);
      return this.searchOptions;
    } else if (arr.length === 20) {
      this.searchOptions = arr.map((item) => item.city);
      return this.searchOptions;
    } else {
      return [];
    }
  }
  setInnerTitle(): void {
    if (this.tableData.length == 10) this.InnerTitle = ' בתי חולים/מוסד נבחרו';
    if (this.tableData.length == 20) this.InnerTitle = 'ערים נבחרו';
    if (this.tableData.length == 37) this.InnerTitle = 'מדינות נבחרו  ';
  }
}
