import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateModeratorComponent } from './create-moderator.component';

describe('CreateModeratorComponent', () => {
  let component: CreateModeratorComponent;
  let fixture: ComponentFixture<CreateModeratorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateModeratorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateModeratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
