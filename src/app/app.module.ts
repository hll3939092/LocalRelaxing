import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { RollbarComponent } from './com/rollbar/rollbar.component';
import { HomeComponent } from './com/home/home.component';
import { LinkComponent } from './com/link/link.component';


export const appRoutes: Routes = [
  { path: 'Home', component: HomeComponent },
  { path: 'Link',      component: LinkComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    RollbarComponent,
    HomeComponent,
    LinkComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, { enableTracing: true })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


