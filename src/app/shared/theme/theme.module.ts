import { NgModule } from '@angular/core';
import { ThemeComponent } from './theme.component';
import { InputSwitchModule } from 'primeng/inputswitch';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    InputSwitchModule,
    FormsModule
  ],
  exports: [
    ThemeComponent
  ],
  declarations: [
    ThemeComponent
  ]
})
export class ThemeModule {
}
