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

  //@Output() passToParent=new EventEmitter<IEmpDept>();
  navigatetoDept(value : IEmpDept)
  {
    this.router.navigate([`./deptdetails/${value.id}`],
    {
      relativeTo:this.activateRoute
    })
  }

}
