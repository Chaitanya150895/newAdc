import { Component } from '@angular/core';

const TOKEN = 'TOKEN';
@Component({
  selector: '[app-root]',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isLogin = false;
  title = 'logistic-v1-angular';

  isLogged() {
    return localStorage.getItem(TOKEN) != null;
  }

}
