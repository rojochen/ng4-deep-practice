import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetectorRefDemoComponent } from './detector-ref-demo.component';

describe('DetectorRefDemoComponent', () => {
  let component: DetectorRefDemoComponent;
  let fixture: ComponentFixture<DetectorRefDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetectorRefDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetectorRefDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
