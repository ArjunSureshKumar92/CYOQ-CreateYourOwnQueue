import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModeratorItemComponent } from './moderator-item.component';

describe('ModeratorItemComponent', () => {
  let component: ModeratorItemComponent;
  let fixture: ComponentFixture<ModeratorItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModeratorItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModeratorItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
