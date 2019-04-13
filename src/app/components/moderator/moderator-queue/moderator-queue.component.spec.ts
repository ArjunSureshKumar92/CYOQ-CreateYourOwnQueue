import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModeratorQueueComponent } from './moderator-queue.component';

describe('ModeratorQueueComponent', () => {
  let component: ModeratorQueueComponent;
  let fixture: ComponentFixture<ModeratorQueueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModeratorQueueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModeratorQueueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
