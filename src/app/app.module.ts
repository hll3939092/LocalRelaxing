import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { RollbarComponent } from './com/rollbar/rollbar.component';
import { HomeComponent } from './com/home/home.component';
import { LinkComponent } from './com/link/link.component';
import {LoginComponent} from './com/login/login.component';


export const appRoutes: Routes = [
  { path: 'Home', component: HomeComponent },
  { path: 'Link', component: LinkComponent },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    RollbarComponent,
    HomeComponent,
    LinkComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, { enableTracing: true })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


