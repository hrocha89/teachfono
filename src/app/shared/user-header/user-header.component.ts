import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <p-avatar label="{{ label }}" styleClass="mr-2" size="large" shape="circle"
              [style]="{'background-color': '#9c27b0', 'color': '#ffffff'}">
    </p-avatar>
  `
})
export class UserHeaderComponent {

  @Input() label: string = '';

}
