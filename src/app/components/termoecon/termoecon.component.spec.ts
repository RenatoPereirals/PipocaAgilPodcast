import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TermoeconComponent } from './termoecon.component';

describe('TermoeconComponent', () => {
  let component: TermoeconComponent;
  let fixture: ComponentFixture<TermoeconComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TermoeconComponent]
    });
    fixture = TestBed.createComponent(TermoeconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
