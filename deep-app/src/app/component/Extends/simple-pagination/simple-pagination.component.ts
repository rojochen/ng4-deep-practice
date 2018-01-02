import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-simple-pagination',
  templateUrl: './simple-pagination.component.html',
  styleUrls: ['./simple-pagination.component.css']
})
export class SimplePaginationComponent implements OnInit {
  @Input() page: number;
  @Input() pageCount: number;
  @Input() previousText: string;
  @Input() nextText: string;
  @Output() pageChanged = new EventEmitter<number>();
  constructor() { }

  ngOnInit() {
    this.page = this.page || 1;
    this.pageCount = this.pageCount || 10;
    this.previousText = this.previousText || 'Previous';
    this.nextText = this.nextText || 'Next';
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
