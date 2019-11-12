import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateDocksComponent } from './update-docks.component';

describe('UpdateDocksComponent', () => {
  let component: UpdateDocksComponent;
  let fixture: ComponentFixture<UpdateDocksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateDocksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateDocksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
