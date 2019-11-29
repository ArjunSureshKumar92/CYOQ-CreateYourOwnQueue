import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModeratorHomeComponent } from './moderator-home.component';

describe('ModeratorHomeComponent', () => {
  let component: ModeratorHomeComponent;
  let fixture: ComponentFixture<ModeratorHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModeratorHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModeratorHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
