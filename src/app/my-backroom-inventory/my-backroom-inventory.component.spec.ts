import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyBackroomInventoryComponent } from './my-backroom-inventory.component';

describe('MyBackroomInventoryComponent', () => {
  let component: MyBackroomInventoryComponent;
  let fixture: ComponentFixture<MyBackroomInventoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyBackroomInventoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyBackroomInventoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
