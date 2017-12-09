import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LifeParentComponent } from './life-parent.component';

describe('LifeParentComponent', () => {
  let component: LifeParentComponent;
  let fixture: ComponentFixture<LifeParentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LifeParentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LifeParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
