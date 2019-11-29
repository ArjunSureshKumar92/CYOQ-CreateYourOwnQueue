import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateQueueComponent } from './create-queue.component';

describe('CreateQueueComponent', () => {
  let component: CreateQueueComponent;
  let fixture: ComponentFixture<CreateQueueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateQueueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateQueueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
