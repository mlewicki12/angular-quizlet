import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AuthModule } from '@auth0/auth0-angular';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { ClipboardModule } from '@angular/cdk/clipboard';

import { AppComponent } from './app.component';
import { QuestionComponent } from './question/question.component';
import { TimerComponent } from './timer/timer.component';
import { QuizComponent } from './quiz/quiz.component';
import { FormatTime } from './format-time.pipe';
import { HeaderComponent } from './header/header.component';
import { AuthButtonComponent } from './auth-button/auth-button.component';
import { AccountComponent } from './account/account.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { QuizService } from './services/quiz.service';

import Auth0Info from '../../loginconfig.json';
import { environment } from 'src/environments/environment';

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
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ClipboardModule,

    AuthModule.forRoot({
      domain: Auth0Info.domain,
      clientId: Auth0Info.clientId
    }),

    AngularFireModule.initializeApp(environment.firebase, 'multi-tables-quizlet'),
    AngularFirestoreModule
  ],
  providers: [QuizService],
  bootstrap: [AppComponent]
})
export class AppModule { }
