import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './account/account.component';
import { CallbackComponent } from './callback/callback.component';
import { QuizComponent } from './quiz/quiz.component';

const routes: Routes = [
  {path: 'quiz', component: QuizComponent},
  {path: 'account', component: AccountComponent},
  {path: '', component: CallbackComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
