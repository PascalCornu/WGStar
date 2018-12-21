import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  /**
   * schaut, ob eine person angemeldet ist.
   */
  public isMember = localStorage.getItem('isMember');
}


