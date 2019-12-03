import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModeratorQueueListComponent } from './moderator-queue-list.component';

describe('ModeratorQueueListComponent', () => {
  let component: ModeratorQueueListComponent;
  let fixture: ComponentFixture<ModeratorQueueListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModeratorQueueListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModeratorQueueListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
