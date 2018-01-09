import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentChildrenChildComponent } from './content-children-child.component';

describe('ContentChildrenChildComponent', () => {
  let component: ContentChildrenChildComponent;
  let fixture: ComponentFixture<ContentChildrenChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentChildrenChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentChildrenChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
