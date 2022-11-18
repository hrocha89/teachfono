import { NgModule } from '@angular/core';
import { AvatarModule } from 'primeng/avatar';
import { UserHeaderComponent } from './user-header.component';

@NgModule({
  imports: [
    AvatarModule
  ],
  declarations: [
    UserHeaderComponent
  ],
  exports: [
    UserHeaderComponent
  ]
})
export class UserHeaderModule {
}
