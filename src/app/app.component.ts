import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'day31';
  disabled = true;
  textColor = 'purple';

  toggleInput() {
    console.info('button clicked');
    this.disabled = !this.disabled;
  }

  cursorEntered() {
    this.textColor = 'red';
  }

  cursorExit() {
    this.textColor = 'purple';
  }

  newInputValue(abc: string) {
    console.info('...typed', abc);
  }
}
