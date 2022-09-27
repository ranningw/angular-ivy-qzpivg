import { Component, Input } from '@angular/core';

@Component({
  selector: 'hello',
  template: `<h1>Hello {{name}}!</h1>`,
  styles: [`h1 { font-family: Lato; }`],
})
export class HelloComponent {
  @Input() name: string;

  public precodingMatrix: number[][] = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ];

  onOK() {
    console.log('click1');
    console.log(document.getElementById('mybutton'));

    document.getElementById('mybutton').onclick = function () {
      console.log('click');
    };
  }
}
