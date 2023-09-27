import {
  ComponentFixture,
  TestBed,
  fakeAsync,
  tick,
} from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [
        FormsModule,
        ReactiveFormsModule,
        RouterTestingModule,
        HttpClientTestingModule,
      ],
    });
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Deve criar o componente', () => {
    expect(component).toBeTruthy();
  });

  //deve alterar a visibilidade da senha
  describe('LoginComponent', () => {
    let component: LoginComponent;

    it('deve alternar a visibilidade da senha', () => {
      // Verifique o estado inicial
      expect(component.passwordVisible).toBe(false);
      expect(component.imgShow).toBe(false);
      // Outras verificações se aplicáveis

      // Chame o método para alternar a visibilidade
      component.togglePasswordVisibility(
        'passwordInput',
        'togglePasswordButton'
      );

      // Verifique se as propriedades foram atualizadas corretamente
      expect(component.passwordVisible).toBe(true);
      expect(component.imgShow).toBe(true);
      // Outras verificações se aplicáveis

      // Chame o método novamente para reverter a visibilidade
      component.togglePasswordVisibility(
        'passwordInput',
        'togglePasswordButton'
      );

      // Verifique se as propriedades foram revertidas corretamente
      expect(component.passwordVisible).toBe(false);
      expect(component.imgShow).toBe(false);
      // Outras verificações se aplicáveis
    });
  });
});
