import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserModuleComponentComponent } from './user-module-component.component';

describe('UserModuleComponentComponent', () => {
  let component: UserModuleComponentComponent;
  let fixture: ComponentFixture<UserModuleComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserModuleComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserModuleComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
