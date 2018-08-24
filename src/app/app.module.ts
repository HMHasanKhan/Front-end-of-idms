import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { AppComponent } from './app.component';
import { OwlModule } from 'angular-owl-carousel';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import {Routes, RouterModule} from '@angular/router';
import { CounterComponent } from './counter/counter.component';
const appRputes: Routes =[
  {path:'', component:HomeComponent},
  {path:'login', component:LoginComponent },
  {path: 'signup', component: SignupComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    CounterComponent,

  ],
  imports: [TooltipModule,
    BrowserModule,
    OwlModule,
    RouterModule.forRoot(appRputes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
