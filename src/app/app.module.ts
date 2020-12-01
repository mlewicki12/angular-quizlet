import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AuthModule } from '@auth0/auth0-angular';

import { AppComponent } from './app.component';
import { QuestionComponent } from './question/question.component';
import { TimerComponent } from './timer/timer.component';
import { QuizComponent } from './quiz/quiz.component';
import { HeaderComponent } from './header/header.component';
import { AuthButtonComponent } from './auth-button/auth-button.component';

import { FormatTime } from './format-time.pipe';

import Auth0Info from '../../loginconfig.json';
import { AccountComponent } from './account/account.component';
import { CallbackComponent } from './callback/callback.component';

@NgModule({
  declarations: [
    AppComponent,
    QuestionComponent,
    TimerComponent,
    QuizComponent,
    FormatTime,
    HeaderComponent,
    AuthButtonComponent,
    AccountComponent,
    CallbackComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,

    AuthModule.forRoot({
      domain: Auth0Info.domain,
      clientId: Auth0Info.clientId
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
