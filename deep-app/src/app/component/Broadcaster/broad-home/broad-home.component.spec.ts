import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BroadHomeComponent } from './broad-home.component';

describe('BroadHomeComponent', () => {
  let component: BroadHomeComponent;
  let fixture: ComponentFixture<BroadHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BroadHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BroadHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
