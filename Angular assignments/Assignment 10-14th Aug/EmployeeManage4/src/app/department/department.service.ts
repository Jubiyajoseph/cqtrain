import { Injectable } from '@angular/core';
import { IEmpDept } from './IEmpDepartment';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  public deptList: Array<IEmpDept> = [
    {
      id: 101,
      deptName: "HR",
      deptManager: "Shiva"
    },
    {
      id: 102,
      deptName: "Finance",
      deptManager: "Mekha"
    },
    {
      id: 103,
      deptName: "Design",
      deptManager: "Malavika"
    },
    {
      id: 104,
      deptName: "Development",
      deptManager: "Ram Mohan"
    },
    {
      id: 105,
      deptName: "Marketing",
      deptManager: "Zack"
    }
  ];
  constructor() { }
}
