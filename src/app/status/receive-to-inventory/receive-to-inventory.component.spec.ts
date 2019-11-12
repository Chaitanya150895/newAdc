import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceiveToInventoryComponent } from './receive-to-inventory.component';

describe('ReceiveToInventoryComponent', () => {
  let component: ReceiveToInventoryComponent;
  let fixture: ComponentFixture<ReceiveToInventoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReceiveToInventoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceiveToInventoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
