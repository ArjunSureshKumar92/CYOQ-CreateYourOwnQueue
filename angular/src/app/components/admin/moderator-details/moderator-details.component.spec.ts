import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModeratorDetailsComponent } from './moderator-details.component';

describe('ModeratorDetailsComponent', () => {
  let component: ModeratorDetailsComponent;
  let fixture: ComponentFixture<ModeratorDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModeratorDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModeratorDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
