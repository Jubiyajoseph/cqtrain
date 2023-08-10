import { Component } from '@angular/core';
import { IEmployeeData } from './IEmployeeData';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'EmployeeManage2';
  public show =true;
  details?: IEmployeeData;

  public showGrid(e : IEmployeeData)
  {
    this.show = false;
    this.details= e;
  }

  public changeView() {
    this.show=true;
  }
}


