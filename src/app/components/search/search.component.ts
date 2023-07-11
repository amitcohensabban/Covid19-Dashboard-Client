import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  @Input() options!: string[];
  optionsVisible = false;
  selectedOptions: string[] = [];
  searchQuery = '';
  filteredOptions: string[] = [];
  searchPlaceholder = 'Search Options';

  ngOnInit(): void {
    console.log(this.options);
    this.filteredOptions = this.options;
    this.setPlaceholder();
  }

  showOptions(): void {
    this.optionsVisible = true;
  }

  filterOptions(): void {
    this.filteredOptions = this.options.filter(option =>
      option.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }

  toggleOption(option: string): void {
    if (this.selectedOptions.includes(option)) {
      this.selectedOptions = this.selectedOptions.filter(item => item !== option);
    } else {
      this.selectedOptions.push(option);
    }
  }
  setPlaceholder(): void {
    if(this.options.length==10)
      this.searchPlaceholder='חיפוש בית חולים/מוסד'
    if(this.options.length==20)
      this.searchPlaceholder='חיפוש עיר'
    if(this.options.length==37)
      this.searchPlaceholder='חיפוש מדינה'

  }
}
