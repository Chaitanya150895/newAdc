import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewTrailerComponent } from './view-trailer.component';

describe('ViewTrailerComponent', () => {
  let component: ViewTrailerComponent;
  let fixture: ComponentFixture<ViewTrailerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewTrailerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewTrailerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
