import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecuperarSenhaComponent } from './recuperar-senha.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

describe('RecuperarSenhaComponent', () => {
  let component: RecuperarSenhaComponent;
  let fixture: ComponentFixture<RecuperarSenhaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecuperarSenhaComponent],
      imports: [
        FormsModule,
        ReactiveFormsModule,
        RouterTestingModule,
        HttpClientTestingModule,
      ],
    });
    fixture = TestBed.createComponent(RecuperarSenhaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
