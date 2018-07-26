import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsGuidelineComponent } from './events-guideline.component';

describe('EventsGuidelineComponent', () => {
  let component: EventsGuidelineComponent;
  let fixture: ComponentFixture<EventsGuidelineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventsGuidelineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventsGuidelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
