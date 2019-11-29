import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EndUserHomeComponent } from './enduser-home.component';

describe('EndUserHomeComponent', () => {
  let component: EndUserHomeComponent;
  let fixture: ComponentFixture<EndUserHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EndUserHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EndUserHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
