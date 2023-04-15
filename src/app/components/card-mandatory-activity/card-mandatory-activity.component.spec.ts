import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardMandatoryActivityComponent } from './card-mandatory-activity.component';

describe('CardMandatoryActivityComponent', () => {
  let component: CardMandatoryActivityComponent;
  let fixture: ComponentFixture<CardMandatoryActivityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardMandatoryActivityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardMandatoryActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
