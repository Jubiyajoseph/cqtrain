import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IEmployeeData } from '../IEmployeeData';
import { EmployeesService } from '../employees.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-employee-name',
  templateUrl: './employee-name.component.html',
  styleUrls: ['./employee-name.component.sass']
})
export class EmployeeNameComponent implements OnInit{

  public emp: Array<IEmployeeData>=[];
  

  constructor(private empService: EmployeesService, private router: Router, private activatedRoute: ActivatedRoute)
  {       
  }

  ngOnInit(): void {
    this.empService.GetEmployee().subscribe((data:Array<IEmployeeData>)=>{ 
      this.emp=data;
      console.log(this.emp);
    });
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

  updateEmployee()
  {
    this.router.navigate(['./updateEmployee'],
    {
      relativeTo: this.activatedRoute
    })
  }
  deleteEmployee()
  {
    this.router.navigate(['./deleteEmployee'],
    {
      relativeTo: this.activatedRoute
    })
  }
  // GetAll()
  // {
  //   this.empService.GetEmployee().subscribe((data)=>{
  //     console.log(data);      
  //   })
  // }

}