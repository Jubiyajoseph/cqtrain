import { Injectable } from '@angular/core';
import { IEmployeeData } from './IEmployeeData';

@Injectable({
  providedIn: 'root'
})
 
export class EmployeesService {

  public empList: Array<IEmployeeData>=[
    {
      id: 1,
      firstName: "Jubiya",
      lastName : "Joseph",
      dateOfBirth: new Date('2001-04-24'),
      age: 22,
      dateOfJoining: new Date('03-07-2023'),
      country: 'India'
    },
    {
      id: 2,
      firstName: 'Arun',
      lastName : "Thomas",
      dateOfBirth: new Date('1989-06-14'),
      age: 36,
      dateOfJoining: new Date('01-04-2016'),
      country: 'India'
    },
    {
      id: 3,
      firstName: 'Kiara',
      lastName : 'Singh',
      dateOfBirth: new Date('2000-02-15'),
      age: 23,
      dateOfJoining: new Date('12-09-2022'),
      country: 'India'  
    },
    {
      id: 4,
      firstName: 'Percy',
      lastName : 'Mathew',
      dateOfBirth: new Date('05-10-1999'),
      age: 24,
      dateOfJoining: new Date('03-07-2021'),
      country: 'India'
    },
    {
      id: 5,
      firstName: 'Shawn',
      lastName: 'Mendes',
      dateOfBirth: new Date('1994-08-09'),
      age:29,
      dateOfJoining: new Date('2020-01-02'),
      country: 'India'
    }
  ];

  constructor() { }
}
