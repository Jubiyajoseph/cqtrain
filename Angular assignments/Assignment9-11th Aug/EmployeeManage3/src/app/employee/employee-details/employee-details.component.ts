import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IEmployeeData } from '../IEmployeeData';
import { EmployeeService } from '../employee.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.sass']
})
export class EmployeeDetailsComponent implements OnInit {
public detailsofEmp?: IEmployeeData;
public employeeId: number = 0;
public empList: Array<IEmployeeData> = [];
@Output() moveback=new EventEmitter<boolean>();

/**
 *
 */
constructor(private empService: EmployeeService, private route: ActivatedRoute,
    private router: Router) {
    this.empList = this.empService.employeeList;
}
    ngOnInit(): void {
        console.log(this.route);
        const id: string = this.route.snapshot.params['id'];
        this.employeeId = Number(id);
        console.log(this.employeeId);
        this.detailsofEmp = this.empList.find((emp) => emp.id === this.employeeId)
    }

change()
{
  this.router.navigate(['./employee']);
}

}