import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExePaginationComponent } from './exe-pagination.component';

describe('ExePaginationComponent', () => {
  let component: ExePaginationComponent;
  let fixture: ComponentFixture<ExePaginationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExePaginationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExePaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
