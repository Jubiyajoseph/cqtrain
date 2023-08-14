import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IEmployeeData } from '../IEmployeeData';
import { EmployeeService } from '../employee.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-employee-name',
  templateUrl: './employee-name.component.html',
  styleUrls: ['./employee-name.component.sass']
})
export class EmployeeNameComponent {

  public emp: Array<IEmployeeData> = []

  /**
   *
   */
  constructor(private empService: EmployeeService, private router: Router,
    private activatedRoute: ActivatedRoute) {
    this.emp = empService.employeeList;
  }

  @Output() passToparent=new EventEmitter<IEmployeeData>();
  navigatetoEmployee(value : IEmployeeData)
  {
    this.router.navigate([`./${value.id}/details`], {
        relativeTo: this.activatedRoute 
    });
    //this.passToparent.emit(value);
  }

}