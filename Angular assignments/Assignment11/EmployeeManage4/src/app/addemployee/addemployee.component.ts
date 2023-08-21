import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { IEmployeeData } from '../employee/IEmployeeData';
import { EmployeesService } from '../employee/employees.service';

@Component({
  selector: 'app-addemployee',
  templateUrl: './addemployee.component.html',
  styleUrls: ['./addemployee.component.sass']
})
export class AddemployeeComponent {

  //public emp: Array<IEmployeeData>=[];
  public newEmp: IEmployeeData={
    id: 0,
    firstName : "",
    lastName : "",
    dateOfBirth : new Date(),
    age : 0,
    dateOfJoining : new Date(),
    country : ""
  };

  empForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    dateOfBirth: new FormControl(''),
    age: new FormControl(''),
    dateOfJoining: new FormControl(''),
    country: new FormControl(''),
  })

  constructor(private empService: EmployeesService)
  {
  }

  onClickAddEmp()
  {
    this.newEmp.id=this.empService.empList[this.empService.empList.length-1].id + 1
    this.newEmp.firstName = this.empForm.get('firstName')?.value!;
    this.newEmp.lastName = this.empForm.get('lastName')?.value!;
    this.newEmp.dateOfBirth = new Date(this.empForm.get('dateOfBirth')?.value!);
    this.newEmp.age= Number(this.empForm.get('age')?.value);
    this.newEmp.dateOfJoining = new Date(this.empForm.get('dateOfJoining')?.value!);
    this.newEmp.country = this.empForm.get('country')?.value!;
    this.empService.empList.push(this.newEmp);
  }
}
