import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CircleModuleComponentComponent } from './circle-module-component.component';

describe('CircleModuleComponentComponent', () => {
  let component: CircleModuleComponentComponent;
  let fixture: ComponentFixture<CircleModuleComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CircleModuleComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CircleModuleComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
