import { NgModule } from '@angular/core';
import { LoginComponent } from './login.component';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';

@NgModule({
  declarations: [
    LoginComponent
  ],
  exports: [
    LoginComponent
  ],
  imports: [
    InputTextModule,
    FormsModule,
    ButtonModule,
    RippleModule
  ]
})
export class LoginModule {

}
