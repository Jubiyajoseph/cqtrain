import { Component } from '@angular/core';
import { IEmployee } from './IEmployee';


@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.sass']
})
export class EmployeeListComponent {

  public emp: Array <IEmployee>=[
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
        Country: 'USA'
    }
    ,
    {
        FirstName: 'Nikki',
        LastName: 'Mendes',
        DOB: new Date('09-08-1994'),
        Age: 29,
        DOJ: new Date('02-01-2020'),
        Country: 'India'
    }
  ]

}
