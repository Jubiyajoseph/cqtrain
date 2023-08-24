import { Component, OnInit } from '@angular/core';
import { IEmpDept } from '../IEmpDepartment';
import { ActivatedRoute, Router } from '@angular/router';
import { DepartmentService } from '../department.service';

@Component({
  selector: 'app-department-details',
  templateUrl: './department-details.component.html',
  styleUrls: ['./department-details.component.sass']
})
export class DepartmentDetailsComponent implements OnInit {

  public dep: Array<IEmpDept>=[];

  public deptDetails?: IEmpDept;
  public deptId!: number;
  public id!: string;

  constructor(private depService:DepartmentService ,private route: Router,private activateRoute: ActivatedRoute)
  {
    this.dep=this.depService.deptList;
  }
  ngOnInit(): void {
    
    this.id = this.activateRoute.snapshot.params['id'];
    this.deptId = Number(this.id);
    console.log(this.deptId);
    this.deptDetails = this.dep.find((x)=> x.id === this.deptId ) 
  }

  backToDept()
  {
    this.route.navigate(['./deptlist'])
  }


}
