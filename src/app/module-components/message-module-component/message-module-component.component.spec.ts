import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageModuleComponentComponent } from './message-module-component.component';

describe('MessageModuleComponentComponent', () => {
  let component: MessageModuleComponentComponent;
  let fixture: ComponentFixture<MessageModuleComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessageModuleComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageModuleComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
