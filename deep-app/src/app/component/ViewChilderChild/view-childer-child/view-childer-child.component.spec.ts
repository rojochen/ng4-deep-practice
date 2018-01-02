import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewChilderChildComponent } from './view-childer-child.component';

describe('ViewChilderChildComponent', () => {
  let component: ViewChilderChildComponent;
  let fixture: ComponentFixture<ViewChilderChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewChilderChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewChilderChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
