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

  ngOnInit() {

    this.items = [
      {label: 'Inicio', icon: PrimeIcons.HOME, routerLink: ['/']},
      {label: 'Importância dos 4 subsistemas', icon: PrimeIcons.SITEMAP, routerLink: ['/pdf']},
      {label: 'Subsistemas da linguaguem', icon: PrimeIcons.SERVER, routerLink: ['/sub']},
      {label: 'Hipóteses de escritas', icon: PrimeIcons.QUESTION, routerLink: ['/hipotese']},
      {label: 'Sobre', icon: PrimeIcons.TABLET, routerLink: ['/sobre']},
      {label: 'Sair', icon: PrimeIcons.POWER_OFF, routerLink: ['/'], command: () => this._logOff()}
    ]

  }

  private _logOff() {
    WebStorageUtil.set(Key.USER, '');
    WebStorageUtil.set(Key.PASSWORD, '');
  }


}
