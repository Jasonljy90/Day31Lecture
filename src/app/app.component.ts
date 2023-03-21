import { Component } from '@angular/core';
import { PicNum } from './components/models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'day31';
  disabled = true;
  textColor = 'purple';
  num = 10;

  pics: PicNum[] = [
    { num: 8, text: 'HUAT AH!' },
    { num: 8, text: 'HUAT AH!' },
    { num: 8, text: 'HUAT AH!' },
    { num: 8, text: 'HUAT AH!' },
    { num: 8, text: 'HUAT AH!' },
  ];

  toggleInput() {
    console.info('button clicked');
    this.disabled = !this.disabled;
  }

  newValue(value: number) {
    console.info('>>> new value', value);
    this.num += value;
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
