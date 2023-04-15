import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardGlowComponent } from './card-glow.component';

describe('CardGlowComponent', () => {
  let component: CardGlowComponent;
  let fixture: ComponentFixture<CardGlowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardGlowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardGlowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
