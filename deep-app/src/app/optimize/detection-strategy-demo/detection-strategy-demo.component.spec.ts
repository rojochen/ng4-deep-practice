import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetectionStrategyDemoComponent } from './detection-strategy-demo.component';

describe('DetectionStrategyDemoComponent', () => {
  let component: DetectionStrategyDemoComponent;
  let fixture: ComponentFixture<DetectionStrategyDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetectionStrategyDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetectionStrategyDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
