import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckTwIdComponent } from './check-tw-id.component';

describe('CheckTwIdComponent', () => {
  let component: CheckTwIdComponent;
  let fixture: ComponentFixture<CheckTwIdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckTwIdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckTwIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
