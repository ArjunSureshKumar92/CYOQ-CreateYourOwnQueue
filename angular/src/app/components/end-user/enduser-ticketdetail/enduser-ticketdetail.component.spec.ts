import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnduserTicketdetailComponent } from './enduser-ticketdetail.component';

describe('EnduserTicketdetailComponent', () => {
  let component: EnduserTicketdetailComponent;
  let fixture: ComponentFixture<EnduserTicketdetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnduserTicketdetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnduserTicketdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
