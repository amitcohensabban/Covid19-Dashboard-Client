import { Component, Input, OnInit } from '@angular/core';
import { filterOptions } from 'src/app/data/app.anchorList';
@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
})
export class SelectComponent {
  @Input() filterOptions: any[] = [];

  selectedValues!: string;

  isFilteringOptionOpen: boolean = false;

  previousSelection: any[] = [];

  ngOnInit(): void {
    this.cloneFilterOptions();
    this.getSelectedValues();
    this.filterOptions = filterOptions;
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
}
