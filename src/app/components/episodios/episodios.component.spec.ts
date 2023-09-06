import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EpisodiosComponent } from './episodios.component';

describe('EpisodiosComponent', () => {
  let component: EpisodiosComponent;
  let fixture: ComponentFixture<EpisodiosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EpisodiosComponent]
    });
    fixture = TestBed.createComponent(EpisodiosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
