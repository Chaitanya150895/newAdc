import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BackroomInventoryComponent } from './backroom-inventory.component';

describe('BackroomInventoryComponent', () => {
  let component: BackroomInventoryComponent;
  let fixture: ComponentFixture<BackroomInventoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BackroomInventoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BackroomInventoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
