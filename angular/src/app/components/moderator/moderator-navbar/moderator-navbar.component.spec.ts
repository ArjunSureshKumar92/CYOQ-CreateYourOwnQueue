import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModeratorNavbarComponent } from './moderator-navbar.component';

describe('ModeratorNavbarComponent', () => {
  let component: ModeratorNavbarComponent;
  let fixture: ComponentFixture<ModeratorNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModeratorNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModeratorNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
