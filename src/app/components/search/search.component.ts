import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FilterService } from 'src/app/services/filter.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  @Input() options!: string[];
  @Input() optionsVisible = false;
  @Input() tableData!: any[];
  selectedOptions: string[] = [];
  searchQuery = '';
  filteredOptions: string[] = [];
  searchPlaceholder = 'Search Options';

  @Output() searchComponentClicked = new EventEmitter<boolean>();

  ngOnInit(): void {
    console.log(this.options);
    this.filteredOptions = this.options;
    this.setPlaceholder();
  }

  constructor(private FilterService: FilterService) {}

  showOptions(): void {
    this.optionsVisible = !this.optionsVisible;
    this.searchComponentClicked.emit(this.optionsVisible);
    console.log(this.optionsVisible);
  }
  filterOptions(): void {
    this.filteredOptions = this.options
      .filter((option) =>
        option.toLowerCase().includes(this.searchQuery.toLowerCase())
      )
      .sort((a, b) => {
        const isSelectedA = this.selectedOptions.includes(a);
        const isSelectedB = this.selectedOptions.includes(b);

        if (isSelectedA && !isSelectedB) {
          return -1;
        } else if (!isSelectedA && isSelectedB) {
          return 1;
        }

        return 0;
      });
  }

  toggleOption(option: string): void {
    if (this.selectedOptions.includes(option)) {
      this.selectedOptions = this.selectedOptions.filter(
        (item) => item !== option
      );
    } else {
      this.selectedOptions.push(option);
    }

    this.FilterService.updateSelectedCheckBoxes(this.selectedOptions);
    this.filterOptions();
  }
  setPlaceholder(): void {
    if (this.tableData.length == 10)
      this.searchPlaceholder = 'חיפוש בית חולים/מוסד';
    if (this.tableData.length == 20) this.searchPlaceholder = 'חיפוש עיר';
    if (this.tableData.length == 37) this.searchPlaceholder = 'חיפוש מדינה';
  }
}
