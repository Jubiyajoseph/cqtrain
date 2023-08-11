import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IEmployeeData } from '../IEmployeeData';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.sass']
})
export class EmployeeDetailsComponent {
@Input() detailsofEmp?: IEmployeeData;
@Output() moveback=new EventEmitter<boolean>();

change()
{
  this.moveback.emit();
}

}