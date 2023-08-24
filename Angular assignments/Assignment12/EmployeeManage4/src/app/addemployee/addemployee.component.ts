import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { IEmployeeData } from '../employee/IEmployeeData';
import { EmployeesService } from '../employee/employees.service';

@Component({
  selector: 'app-addemployee',
  templateUrl: './addemployee.component.html',
  styleUrls: ['./addemployee.component.sass']
})
export class AddemployeeComponent implements OnInit{

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
    id: new FormControl(''),
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    dateOfBirth: new FormControl(''),
    age: new FormControl(''),
    dateOfJoining: new FormControl(''),
    country: new FormControl(''),
  })

  constructor(private empService: EmployeesService,private fb: FormBuilder)
  {
  }

  showErrors= false;

  id: number = 0;
  firstName: string = '';
  lastName: string = '';
  DOB!: Date;
  age: number =0;
  DOJ!: Date;
  country: string ='';

  ngOnInit(): void
  {
    this.empForm = this.fb.group({
      id: new FormControl(''),
      firstName: new FormControl('',[Validators.minLength(5),Validators.required]),
      lastName: new FormControl('',[Validators.maxLength(15),Validators.required]),
      dateOfBirth: new FormControl('',[Validators.required]),
      age: new FormControl(''),
      dateOfJoining: new FormControl('',[Validators.required]),
      country: new FormControl('',[Validators.required])
    });
  }

  onClickAddEmp()
  {
    if(this.empForm.valid)
    {
      this.firstName = this.empForm.get('firstName')?.value!;
      this.lastName = this.empForm.get('lastName')?.value!;
      this.DOB = new Date(this.empForm.get('dateOfBirth')?.value!);
      this.age= Number(this.empForm.get('age')?.value);
      this.DOJ= new Date(this.empForm.get('dateOfJoining')?.value!);
      this.country = this.empForm.get('country')?.value!;

      this.newEmp.firstName = this.firstName
      this.newEmp.lastName = this.lastName
      this.newEmp.dateOfBirth = this.DOB
      this.newEmp.age= this.age
      this.newEmp.dateOfJoining = this.DOJ
      this.newEmp.country = this.country

      this.empService.AddEmployee(this.newEmp).subscribe(data=>{console.log(data)});
      
    }

  }
}
