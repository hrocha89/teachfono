import { Component, OnInit } from '@angular/core';
import { MenuItem, PrimeIcons } from 'primeng/api';
import { WebStorageUtil } from '../util/web-storage-util';
import { Key } from '../util/key';

@Component({
  selector: 'app-menu',
  templateUrl: './menu-header.component.html'
})
export class MenuHeaderComponent implements OnInit {

  items: MenuItem[] = [];
  label: string = '';

  ngOnInit() {

    this.label = WebStorageUtil.get(Key.USER).substring(0, 1).toUpperCase();

    this.items = [
      {label: 'Inicio', icon: PrimeIcons.HOME, routerLink: ['/']},
      {label: 'Importância dos 4 subsistemas', icon: PrimeIcons.HOME, routerLink: ['/']},
      {label: 'Subsistemas da linguaguem', icon: PrimeIcons.HOME, routerLink: ['/']},
      {label: 'Hipóteses de escrita', icon: PrimeIcons.HOME, routerLink: ['/']},
      {label: 'Sair', icon: PrimeIcons.POWER_OFF, routerLink: ['/'], command: () => this._logOff()}
    ]

  }

  private _logOff() {
    WebStorageUtil.set(Key.USER, '');
    WebStorageUtil.set(Key.PASSWORD, '');
  }


}
