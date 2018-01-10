import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BroadoneComponent } from './broadone.component';

describe('BroadoneComponent', () => {
  let component: BroadoneComponent;
  let fixture: ComponentFixture<BroadoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BroadoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BroadoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
