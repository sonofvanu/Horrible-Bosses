import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CircleActionComponent } from './circle-action.component';

describe('CircleActionComponent', () => {
  let component: CircleActionComponent;
  let fixture: ComponentFixture<CircleActionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CircleActionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CircleActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
