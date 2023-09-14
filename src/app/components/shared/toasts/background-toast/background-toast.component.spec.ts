import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackgroundToastComponent } from './background-toast.component';

describe('BackgroundToastComponent', () => {
  let component: BackgroundToastComponent;
  let fixture: ComponentFixture<BackgroundToastComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BackgroundToastComponent]
    });
    fixture = TestBed.createComponent(BackgroundToastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
