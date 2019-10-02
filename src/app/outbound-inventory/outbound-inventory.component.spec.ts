import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutboundInventoryComponent } from './outbound-inventory.component';

describe('OutboundInventoryComponent', () => {
  let component: OutboundInventoryComponent;
  let fixture: ComponentFixture<OutboundInventoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutboundInventoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutboundInventoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
