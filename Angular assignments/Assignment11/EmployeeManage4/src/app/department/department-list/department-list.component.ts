import { Component, EventEmitter, Output } from '@angular/core';
import { IEmpDept } from '../IEmpDepartment';
import { DepartmentService } from '../department.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.sass']
})
export class DepartmentListComponent {

  public dep: Array<IEmpDept>=[];

  constructor(private depService: DepartmentService,private router: Router, private activateRoute: ActivatedRoute)
  {
    this.dep=depService.deptList;
  }

 
  navigatetoDept(value : IEmpDept)
  {
    this.router.navigate([`./dept-details/${value.id}`],
    {
      relativeTo:this.activateRoute
    })
  }

  addNewDept()
  {
    this.router.navigate([`./newDept`],{
      relativeTo: this.activateRoute
    })
  }
  searchDept()
  {
    this.router.navigate([`./searchDept`],{
      relativeTo: this.activateRoute
    })
  }
}
