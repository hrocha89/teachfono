import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuHeaderModule } from './shared/menu-header/menu-header.module';
import { UserHeaderModule } from './shared/user-header/user-header.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginModule } from './shared/login/login.module';
import { AvatarModule } from 'primeng/avatar';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MenuHeaderModule,
    UserHeaderModule,
    BrowserAnimationsModule,
    LoginModule,
    AvatarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
