import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterQueueComponent } from './register-queue.component';

describe('RegisterQueueComponent', () => {
  let component: RegisterQueueComponent;
  let fixture: ComponentFixture<RegisterQueueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterQueueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterQueueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
