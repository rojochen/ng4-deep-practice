import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewChilderParentComponent } from './view-childer-parent.component';

describe('ViewChilderParentComponent', () => {
  let component: ViewChilderParentComponent;
  let fixture: ComponentFixture<ViewChilderParentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewChilderParentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewChilderParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
