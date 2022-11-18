import { NgModule } from '@angular/core';
import { ThemeComponent } from './theme.component';
import { InputSwitchModule } from 'primeng/inputswitch';
import { FormsModule } from '@angular/forms';
import { ThemeService } from './theme.service';

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
  ],
  providers: [
    ThemeService
  ]
})
export class ThemeModule {
}
