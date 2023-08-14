import { Injectable } from '@angular/core';
import { IEmployeeData } from './IEmployeeData';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

    public employeeList: Array<IEmployeeData> = [
        {
            id: 1,
          FirstName: "Jubiya",
          LastName : "Joseph",
          DOB: new Date('2001-04-24'),
          Age: 22,
          DOJ: new Date('03-07-2023'),
          Country: 'India'
        },
        {
            id: 2,
          FirstName: 'Arun',
          LastName : "Neelakandan",
          DOB: new Date('1989-06-14'),
          Age: 36,
          DOJ: new Date('01-04-2016'),
          Country: 'India'
        },
        {
            id: 3,
          FirstName: 'Kiara',
          LastName : 'Singh',
          DOB: new Date('2000-02-15'),
          Age: 23,
          DOJ: new Date('12-09-2022'),
          Country: 'India'  
        },
        {
            id: 4,
          FirstName: 'Zaniya',
          LastName : 'Mathew',
          DOB: new Date('05-10-1999'),
          Age: 24,
          DOJ: new Date('03-07-2021'),
          Country: 'India'
        },
        {
            id: 5,
          FirstName: 'Nikki',
          LastName: 'Mendes',
          DOB: new Date('1994-08-09'),
          Age:29,
          DOJ: new Date('2020-01-02'),
          Country: 'India'
        }];

  constructor() { }
}
