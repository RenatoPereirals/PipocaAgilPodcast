import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuemsomosComponent } from './quemsomos.component';

describe('QuemsomosComponent', () => {
  let component: QuemsomosComponent;
  let fixture: ComponentFixture<QuemsomosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QuemsomosComponent]
    });
    fixture = TestBed.createComponent(QuemsomosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
