import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { ContatoComponent } from './components/contato/contato.component';
import { EpisodiosComponent } from './components/episodios/episodios.component';
import { GaleriaComponent } from './components/galeria/galeria.component';
import { PoliticapComponent } from './components/politicap/politicap.component';
import { TermoeconComponent } from './components/termoecon/termoecon.component';
import { LoginComponent } from './components/user/login/login.component';
import { CadastroComponent } from './components/user/cadastro/cadastro.component';
import { RecuperarSenhaComponent } from './components/user/recuperar-senha/recuperar-senha.component';
import { MenuComponent } from './components/shared/menu/menu.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'contatos', component: ContatoComponent },
  { path: 'episodios', component: EpisodiosComponent },
  { path: 'galeria', component: GaleriaComponent },
  { path: 'politicap', component: PoliticapComponent },
  { path: 'termoecon', component: TermoeconComponent },
  { path: 'cadastro', component: CadastroComponent },
  { path: 'login', component: LoginComponent },
  { path: 'forgot-password', component: RecuperarSenhaComponent },
  { path: 'menu', component: MenuComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
