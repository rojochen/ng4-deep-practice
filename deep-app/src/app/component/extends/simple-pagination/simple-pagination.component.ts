import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-simple-pagination',
  templateUrl: './simple-pagination.component.html',
  styleUrls: ['./simple-pagination.component.css']
})
export class SimplePaginationComponent implements OnInit {
  @Input() pageCount: number;

  @Input() page: number;

  @Output() pageChanged = new EventEmitter<number>();

  @Input() previousText: string = 'Previous';

  @Input() nextText: string = 'Next';
  constructor() { }

  ngOnInit() {
  }

  nextPage(): void {
    this.pageChanged.emit(++this.page);
  }

  previousPage(): void {
    this.pageChanged.emit(--this.page);
  }

  hasPrevious(): boolean {
    return this.page > 1;
  }

  hasNext(): boolean {
    return this.page < this.pageCount;
  }
}
