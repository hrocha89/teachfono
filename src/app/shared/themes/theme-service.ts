import { Inject, Injectable } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  constructor(@Inject(DOCUMENT) private _document: Document) {
  }

  selectTheme(isLigth: boolean) {
    const element = this._document.getElementById('app-theme') as HTMLLinkElement;

    if (element) {
      element.href = isLigth ? 'light' : 'dark' + '.css';
    }
  }

}
