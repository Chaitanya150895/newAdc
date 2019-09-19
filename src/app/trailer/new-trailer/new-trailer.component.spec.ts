import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewTrailerComponent } from './new-trailer.component';

describe('NewTrailerComponent', () => {
  let component: NewTrailerComponent;
  let fixture: ComponentFixture<NewTrailerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewTrailerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewTrailerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
