import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChosenActivitiesPageComponent } from './chosen-activities-page.component';

describe('ChosenActivitiesPageComponent', () => {
  let component: ChosenActivitiesPageComponent;
  let fixture: ComponentFixture<ChosenActivitiesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChosenActivitiesPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChosenActivitiesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
