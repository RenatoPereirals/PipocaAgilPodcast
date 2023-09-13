import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContatoComponent } from './components/contato/contato.component';
import { EpisodiosComponent } from './components/episodios/episodios.component';
import { GaleriaComponent } from './components/galeria/galeria.component';
import { LoginComponent } from './components/user/login/login.component';
import { PoliticapComponent } from './components/politicap/politicap.component';
import { TermoeconComponent } from './components/termoecon/termoecon.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { UserComponent } from './components/user/user.component';
import { CadastroComponent } from './components/user/cadastro/cadastro.component';
import { PaginationComponent } from './components/shared/pagination/pagination.component';
import { ToastComponent } from './components/shared/toasts/toast/toast.component';
import { BackgroundToastComponent } from './components/shared/toasts/background-toast/background-toast.component';
import { SpinnerComponent } from './components/shared/spinner/spinner.component';
import { DatePickerComponent } from './components/shared/date-picker/date-picker.component';

@NgModule({
  declarations: [
    AppComponent,
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
    PaginationComponent,
    ToastComponent,
    BackgroundToastComponent,
    SpinnerComponent,
    DatePickerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
