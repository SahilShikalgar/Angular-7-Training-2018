import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }  from '@angular/forms'

import { TaskService } from './services/task.service'
import { MessageService } from './services/message.service'

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { TaskManagerComponent } from './components/task-manager/task-manager.component';
import { TaskFormComponent } from './components/task-manager/task-form/task-form.component';
import { TaskListComponent } from './components/task-manager/task-list/task-list.component';
import { TaskItemComponent } from './components/task-manager/task-list/task-item/task-item.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ReactiveFormsModule } from '@angular/forms';


import { AuthGuard } from './guards/auth.guard';
import { RouterModule , Routes } from '@angular/router';
import { PageNotFoundComponent } from './components/shared/page-not-found/page-not-found.component';
import { TaskDetailComponent } from './components/task-manager/task-detail/task-detail.component';
import { MyUppercasePipe } from './pipes/my-uppercase.pipe';
import { CompletedDirective } from './directives/completed.directive';
import { SearchPipe } from './pipes/search.pipe';
import { CounterComponent } from './counter/counter.component';


//creating routes
const routes: Routes = [
  
    { path:'' , redirectTo: '/login' ,pathMatch:'full' },
    { path: 'login',component: LoginComponent }, 
    { path: 'register', component: RegisterComponent },
    { path: 'tasks' , component: TaskManagerComponent , canActivate:[AuthGuard]},
    { path: 'tasks/:id', component:TaskDetailComponent, canActivate:[AuthGuard]} , 
    { path: '**' , component:PageNotFoundComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    TaskManagerComponent,
    TaskFormComponent,
    TaskListComponent,
    TaskItemComponent,
    LoginComponent,
    RegisterComponent,
    PageNotFoundComponent,
    TaskDetailComponent,
    MyUppercasePipe,
    CompletedDirective,
    SearchPipe,
    CounterComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [TaskService,MessageService,AuthGuard],    //one in whole system
  bootstrap: [AppComponent]
})
export class AppModule { }
