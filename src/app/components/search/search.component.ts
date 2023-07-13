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
    this.filteredOptions = this.options.filter((option) =>
      option.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
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
  }
  setPlaceholder(): void {
    if (this.options.length == 10)
      this.searchPlaceholder = 'חיפוש בית חולים/מוסד';
    if (this.options.length == 20) this.searchPlaceholder = 'חיפוש עיר';
    if (this.options.length == 37) this.searchPlaceholder = 'חיפוש מדינה';
  }
}
