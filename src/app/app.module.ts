import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginScreenComponent } from './Templates/login/login-screen.component';
import { LoginFormComponent } from './Molecules/login-form/login-form.component';
import { FormsModule } from '@angular/forms';
import { SignupComponent } from './Templates/signup/signup.component';
import { SignupFormComponent } from './Molecules/signup-form/signup-form.component';
@NgModule({
  declarations: [AppComponent, LoginScreenComponent, LoginFormComponent,SignupComponent,SignupFormComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
