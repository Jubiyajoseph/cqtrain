import { Component, OnInit } from '@angular/core';
import { IEmployeeData } from '../employee/IEmployeeData';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeesService } from '../employee/employees.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-delete-employee',
  templateUrl: './delete-employee.component.html',
  styleUrls: ['./delete-employee.component.sass']
})
export class DeleteEmployeeComponent {

  constructor(private empService: EmployeesService,private router:Router, private activatedRoute: ActivatedRoute )
  {
  }

  empForm = new FormGroup({
    id: new FormControl('')
  })

  idvalue: number = 0;
  onDeleteEmp()
  {
    this.idvalue = Number(this.empForm.get('id')?.value!);
    this.empService.DeleteEmployee(this.idvalue).subscribe(()=>{});  
    console.log("Data deleted");
  }
}
