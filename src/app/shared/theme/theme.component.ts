import { Component, OnInit } from '@angular/core';
import { ThemeService } from './theme.service';
import { WebStorageUtil } from '../util/web-storage-util';

@Component({
  selector: 'app-switch-theme',
  template: `
    <p-inputSwitch [(ngModel)]="isChecked" (onChange)="checked($event)"></p-inputSwitch>
  `
})
export class ThemeComponent implements OnInit {

  readonly LIGHT: string = 'light';
  readonly DARK: string = 'dark';

  isChecked: boolean = false;

  constructor(private _serice: ThemeService) {
  }

  ngOnInit(): void {
    this._defaultTheme();
  }

  checked(e: any) {
    WebStorageUtil.setTheme(e && e.checked ? this.DARK : this.LIGHT);
    this._updateTheme();
  }

  private _updateTheme() {
    this._serice.selectTheme(WebStorageUtil.getTheme());
    this._setIsChecked();
  }

  private _defaultTheme() {
    const theme = WebStorageUtil.getTheme();

    if (!theme) {
      WebStorageUtil.setTheme(this.LIGHT);
    }

    this._updateTheme();
  }

  private _setIsChecked() {
    this.isChecked = WebStorageUtil.getTheme() === this.DARK;
  }


}
