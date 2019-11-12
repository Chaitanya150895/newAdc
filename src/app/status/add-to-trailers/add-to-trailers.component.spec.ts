import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddToTrailersComponent } from './add-to-trailers.component';

describe('AddToTrailersComponent', () => {
  let component: AddToTrailersComponent;
  let fixture: ComponentFixture<AddToTrailersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddToTrailersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddToTrailersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
