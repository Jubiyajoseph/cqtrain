import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IEmployeeData } from '../IEmployeeData';
import { EmployeesService } from '../employees.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-employee-name',
  templateUrl: './employee-name.component.html',
  styleUrls: ['./employee-name.component.sass']
})
export class EmployeeNameComponent {

  public emp: Array<IEmployeeData>=[];
  
  empform = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    dateOfBirth: new FormControl(''),
    age: new FormControl(''),
    dateOfJoining: new FormControl(''),
    country: new FormControl(''),
  })

  constructor(private empService: EmployeesService, private router: Router, private activatedRoute: ActivatedRoute)
  {
    this.emp = empService.empList;
  }


  navigatetoEmployee(value : IEmployeeData)
  {
    this.router.navigate([`./${value.id}/employee-details`],
    {
      relativeTo: this.activatedRoute
    });

  }

  addNewEmployee()
  {
    this.router.navigate(['./newEmployee'], {
      relativeTo: this.activatedRoute
  });
  }
  searchEmployee()
  {
    this.router.navigate(['./searchEmployee'], {
      relativeTo: this.activatedRoute
  });
  }
}