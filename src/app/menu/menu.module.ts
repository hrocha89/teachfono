import { NgModule } from '@angular/core';
import { MenuComponent } from './menu.component';
import { MenubarModule } from 'primeng/menubar';

@NgModule({
  imports: [
    MenubarModule
  ],
  exports: [
    MenuComponent
  ],
  declarations: [
    MenuComponent
  ]
})
export class MenuModule {
}
