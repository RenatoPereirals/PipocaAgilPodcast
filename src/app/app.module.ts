import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContatoComponent } from './components/contato/contato.component';
import { EpisodiosComponent } from './components/episodios/episodios.component';
import { GaleriaComponent } from './components/galeria/galeria.component';
import { PoliticapComponent } from './components/politicap/politicap.component';
import { TermoeconComponent } from './components/termoecon/termoecon.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { UserComponent } from './components/user/user.component';
import { CadastroComponent } from './components/user/cadastro/cadastro.component';
import { ToastComponent } from './components/shared/toasts/toast/toast.component';
import { BackgroundToastComponent } from './components/shared/toasts/background-toast/background-toast.component';
import { SpinnerComponent } from './components/shared/spinner/spinner.component';
import { SpinnerService } from './services/spinner.service';
import { RecuperarSenhaComponent } from './components/user/recuperar-senha/recuperar-senha.component';
import { LoginComponent } from './components/user/login/login.component';
import { MenuComponent } from './components/shared/menu/menu.component';
import { BlogComponent } from './components/blog/blog.component';
import { QuemsomosComponent } from './components/quemsomos/quemsomos.component';

@NgModule({
  declarations: [
    AppComponent,
    ToastComponent,
    ContatoComponent,
    EpisodiosComponent,
    GaleriaComponent,
    LoginComponent,
    PoliticapComponent,
    TermoeconComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    UserComponent,
    CadastroComponent,
    BackgroundToastComponent,
    SpinnerComponent,
    RecuperarSenhaComponent,
    MenuComponent,
    BlogComponent,
    QuemsomosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [SpinnerService],
  bootstrap: [AppComponent],
})
export class AppModule {}
