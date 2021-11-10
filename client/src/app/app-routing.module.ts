import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { ListsComponent } from './components/lists/lists.component';
import { MemberDetailsComponent } from './components/members/member-details/member-details.component';
import { MemberListComponent } from './components/members/member-list/member-list.component';
import { MessagesComponent } from './components/messages/messages.component';

const routes: Routes = [
  { path: '', component:HomepageComponent},
  { path: 'members', component:MemberListComponent},
  { path: 'members/:id', component:MemberDetailsComponent},
  { path: 'lists', component:ListsComponent},
  { path: 'messages', component:MessagesComponent},
  { path: '**', component:HomepageComponent, pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
