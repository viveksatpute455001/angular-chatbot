import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChatbotComponent } from './components/chatbot/chatbot.component';
const routes: Routes = [
  { path: '', redirectTo: '/chatbot', pathMatch: 'full'},
  { path: 'chatbot', component: ChatbotComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
