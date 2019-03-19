import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigureQueueComponent } from './configure-queue.component';

describe('ConfigureQueueComponent', () => {
  let component: ConfigureQueueComponent;
  let fixture: ComponentFixture<ConfigureQueueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfigureQueueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigureQueueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
