import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoliticapComponent } from './politicap.component';

describe('PoliticapComponent', () => {
  let component: PoliticapComponent;
  let fixture: ComponentFixture<PoliticapComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PoliticapComponent]
    });
    fixture = TestBed.createComponent(PoliticapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
