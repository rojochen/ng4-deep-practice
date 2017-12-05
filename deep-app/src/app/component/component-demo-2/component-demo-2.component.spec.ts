import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentDemo2Component } from './component-demo-2.component';

describe('ComponentDemo2Component', () => {
  let component: ComponentDemo2Component;
  let fixture: ComponentFixture<ComponentDemo2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentDemo2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentDemo2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
