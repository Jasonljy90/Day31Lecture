import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-count',
  templateUrl: './count.component.html',
  styleUrls: ['./count.component.css'],
})
export class CountComponent {
  @Input()
  startNum = 0;
  updatePic(inc: number) {
    this.startNum += inc;
    if (this.startNum < 0) {
      this.startNum = 30;
    } else if (this.startNum > 30) {
      this.startNum = 0;
    }
  }
}
