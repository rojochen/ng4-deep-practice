import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentChildrenParentComponent } from './content-children-parent.component';

describe('ContentChildrenParentComponent', () => {
  let component: ContentChildrenParentComponent;
  let fixture: ComponentFixture<ContentChildrenParentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentChildrenParentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentChildrenParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
