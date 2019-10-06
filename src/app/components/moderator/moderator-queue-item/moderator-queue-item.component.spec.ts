import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModeratorQueueItemComponent } from './moderator-queue-item.component';

describe('ModeratorQueueItemComponent', () => {
  let component: ModeratorQueueItemComponent;
  let fixture: ComponentFixture<ModeratorQueueItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModeratorQueueItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModeratorQueueItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
