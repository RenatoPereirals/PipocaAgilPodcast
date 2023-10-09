import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { HeaderComponent } from '../shared/header/header.component';
import { FooterComponent } from '../shared/footer/footer.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeComponent, HeaderComponent, FooterComponent],
      imports: [HttpClientModule, RouterTestingModule],
      providers: [HeaderComponent, FooterComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
  });

  describe('Elementos de inicialização', () => {
    it('deve ser criado', () => {
      expect(component).toBeTruthy();
    });

    it('deve carregar os vidios durante a inicialização', () => {
      spyOn(component, 'loadVideos');
      fixture.detectChanges();

      expect(component.loadVideos).toHaveBeenCalled();
    });

    it('deve verificar a largura da tela durante a inicialização', () => {
      spyOn(component, 'checkScreenSize');
      fixture.detectChanges();

      expect(component.checkScreenSize).toHaveBeenCalled();
    });
  });

  describe('Validação da paginação', () => {
    it('deve calcular o total de páginas corretamente', () => {
      component.paginatedVideo.totalItems = 10;
      component.paginatedVideo.itemsPerPage = 3;

      component.calculateTotalPages();

      expect(component.paginatedVideo.totalPages).toBe(4);
    });

    it('deve definir a página atual corretamente', () => {
      component.paginatedVideo.currentPage = 2;
      component.paginatedVideo.itemsPerPage = 3;

      component.videos = [
        { id: 1, title: 'Vídeo 1' },
        { id: 2, title: 'Vídeo 2' },
        { id: 3, title: 'Vídeo 3' },
        { id: 4, title: 'Vídeo 4' },
        { id: 5, title: 'Vídeo 5' },
      ];

      component.displayVideosOnCurrentPage();

      expect(component.paginatedVi).toEqual([
        { id: 4, title: 'Vídeo 4' },
        { id: 5, title: 'Vídeo 5' },
      ]);
    });

    it('deve mudar a página corretamente', () => {
      component.paginatedVideo.currentPage = 1;

      component.onPageChanged(2);

      expect(component.paginatedVideo.currentPage).toBe(2);
    });
  });
});
