import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipOfDayComponent } from './tip-of-day.component';

describe('TipOfDayComponent', () => {
  let component: TipOfDayComponent;
  let fixture: ComponentFixture<TipOfDayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TipOfDayComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TipOfDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
