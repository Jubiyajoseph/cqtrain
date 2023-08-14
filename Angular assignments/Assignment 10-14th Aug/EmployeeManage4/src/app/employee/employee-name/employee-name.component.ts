import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IEmployeeData } from '../IEmployeeData';
import { EmployeesService } from '../employees.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-employee-name',
  templateUrl: './employee-name.component.html',
  styleUrls: ['./employee-name.component.sass']
})
export class EmployeeNameComponent {

  public emp: Array<IEmployeeData>=[];


  constructor(private empService: EmployeesService, private router: Router, private activatedRoute: ActivatedRoute)
  {
    this.emp = empService.empList;
  }

  @Output() passToparent=new EventEmitter<IEmployeeData>();
  navigatetoEmployee(value : IEmployeeData)
  {
    this.router.navigate([`./${value.id}/employeedetails`],
    {
      relativeTo: this.activatedRoute
    });
    //this.passToparent.emit(value);
  }

}