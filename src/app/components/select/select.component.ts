import { Component, Input, OnInit } from '@angular/core';
@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
})
export class SelectComponent implements OnInit {
  @Input() filterOptions: any[] = [];
  @Input() tableData!: any[] ;
  selectedValues!: string;
  searchOptions!:any[];
  isFilteringOptionOpen: boolean = false;

  previousSelection: any[] = [];

  ngOnInit(): void {
    this.cloneFilterOptions();
    this.getSelectedValues();
    // console.log(this.filterOptions);
    // console.log(this.tableData);
  this.processArrayData(this.tableData);
  }

  toggleFilteringDropdown() {
    this.isFilteringOptionOpen = !this.isFilteringOptionOpen;
  }
  closeFilteringDropdown() {
    this.isFilteringOptionOpen = false;
  }

  cloneFilterOptions() {
    this.previousSelection = JSON.parse(JSON.stringify(this.filterOptions));
  }

  cancelSelection() {}

  applySelection() {
    this.cloneFilterOptions();
    this.getSelectedValues();
    this.isFilteringOptionOpen = false;
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
      this.searchOptions= arr.map((item) => item.hospitalName);
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
}
