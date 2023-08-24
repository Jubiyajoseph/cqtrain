import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { IEmpDept } from '../department/IEmpDepartment';
import { DepartmentService } from '../department/department.service';

@Component({
  selector: 'app-adddepartment',
  templateUrl: './adddepartment.component.html',
  styleUrls: ['./adddepartment.component.sass']
})
export class AdddepartmentComponent {

  public newDept: IEmpDept={
    id: 0,
    deptName: '',
    deptManager: ''
  }
  deptForm = new FormGroup({
    depName: new FormControl(''),
    managerName: new FormControl('')
  })


  constructor(public depService: DepartmentService) {

  }
  onClickAddDept()
  {
    this.newDept.id = this.depService.deptList[this.depService.deptList.length-1].id+1
    this.newDept.deptName=this.deptForm.get('depName')?.value!;
    this.newDept.deptManager=this.deptForm.get('managerName')?.value!;
    this.depService.deptList.push(this.newDept);

  }
}
