import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BroadtwoComponent } from './broadtwo.component';

describe('BroadtwoComponent', () => {
  let component: BroadtwoComponent;
  let fixture: ComponentFixture<BroadtwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BroadtwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BroadtwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
