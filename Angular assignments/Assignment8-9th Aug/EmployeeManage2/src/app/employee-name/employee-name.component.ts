import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IEmployeeData } from '../IEmployeeData';

@Component({
  selector: 'app-employee-name',
  templateUrl: './employee-name.component.html',
  styleUrls: ['./employee-name.component.sass']
})
export class EmployeeNameComponent {

  public emp: Array<IEmployeeData>=[
    {
      FirstName: "Jubiya",
      LastName : "Joseph",
      DOB: new Date('2001-04-24'),
      Age: 22,
      DOJ: new Date('03-07-2023'),
      Country: 'India'
    },
    {
      FirstName: 'Arun',
      LastName : "Neelakandan",
      DOB: new Date('1989-06-14'),
      Age: 36,
      DOJ: new Date('01-04-2016'),
      Country: 'India'
    },
    {
      FirstName: 'Kiara',
      LastName : 'Singh',
      DOB: new Date('2000-02-15'),
      Age: 23,
      DOJ: new Date('12-09-2022'),
      Country: 'India'  
    },
    {
      FirstName: 'Zaniya',
      LastName : 'Mathew',
      DOB: new Date('05-10-1999'),
      Age: 24,
      DOJ: new Date('03-07-2021'),
      Country: 'India'
    },
    {
      FirstName: 'Nikki',
      LastName: 'Mendes',
      DOB: new Date('1994-08-09'),
      Age:29,
      DOJ: new Date('2020-01-02'),
      Country: 'India'
    }
  ]

  @Output() passToparent=new EventEmitter<IEmployeeData>();
  navigatetoEmployee(value : IEmployeeData)
  {
    this.passToparent.emit(value);

  }


}
