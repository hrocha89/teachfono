import { Component, OnInit } from '@angular/core';
import { WebStorageUtil } from './shared/util/web-storage-util';
import { Key } from './shared/util/key';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {


  ngOnInit(): void {
  }

  isLogged(): boolean {
    return !!WebStorageUtil.get(Key.USER) && !!WebStorageUtil.get(Key.PASSWORD);
  }

}
