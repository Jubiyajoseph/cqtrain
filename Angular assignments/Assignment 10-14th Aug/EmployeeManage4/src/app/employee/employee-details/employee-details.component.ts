import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IEmployeeData } from '../IEmployeeData';
import { EmployeesService } from '../employees.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.sass']
})
export class EmployeeDetailsComponent implements OnInit {

public emp: Array<IEmployeeData>=[];
public empId!: number;
public detailsOfEmp?: IEmployeeData
@Output() moveback=new EventEmitter<boolean>();


constructor(private empService: EmployeesService, private router: Router, private activatedRoute: ActivatedRoute)
{
  this.emp = empService.empList;
}
  ngOnInit(): void
   {
    //console.log(this.router);       //current route information
    const id: string = this.activatedRoute.snapshot.params['id'];  //id extracted from route snapshot using the 'snapshot.params'
    this.empId = Number(id);   //convert id parameter to a number
    console.log(this.empId);
    this.detailsOfEmp = this.emp.find((x) => x.id === this.empId)
  }
change()
{
  //this.moveback.emit();
  this.router.navigate(['./employee-name'])
}

}