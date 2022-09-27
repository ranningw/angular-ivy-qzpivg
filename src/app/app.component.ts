import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;

  public precodingMatrix: number[][] = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ];
  public rowLength: number = this.precodingMatrix.length;
  public columnLength: number = this.precodingMatrix[0].length;

  public precodingnum: number[] = [1, 2, 3];

  onOK() {
    console.log('clickcc');

    var table = document.getElementById('precodingtable');
    var cells = table.getElementsByTagName('td');
    console.log(table.getElementsByTagName('td'));

    let pm = [];
    for (let i = 0; i < cells.length; i++) {
      pm.push(cells[i].innerHTML);

      }

    let aa : string;

    aa = pm.toString();
    console.log(aa);

   // console.log(cells.tostring());
    // for (let i = 0; i < cells.length; i++) {
    //   cells[i].onclick = function () {
    //     var input = document.createElement('input');
    //     input.setAttribute('type', 'text');
    //     input.value = this.innerHTML;
    //   };
    // }
  }
}
