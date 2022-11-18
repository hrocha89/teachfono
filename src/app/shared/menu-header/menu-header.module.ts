import { NgModule } from '@angular/core';
import { MenuModule } from 'primeng/menu';
import { UserHeaderModule } from '../user-header/user-header.module';
import { MenuHeaderComponent } from './menu-header.component';
import { ButtonModule } from 'primeng/button';

@NgModule({
  imports: [
    UserHeaderModule,
    MenuModule,
    ButtonModule
  ],
  declarations: [
    MenuHeaderComponent
  ],
  exports: [
    MenuHeaderComponent
  ]
})
export class MenuHeaderModule {

}
