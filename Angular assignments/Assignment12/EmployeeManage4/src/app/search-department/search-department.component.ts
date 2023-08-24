import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DepartmentService } from '../department/department.service';
import { IEmpDept } from '../department/IEmpDepartment';

@Component({
  selector: 'app-search-department',
  templateUrl: './search-department.component.html',
  styleUrls: ['./search-department.component.sass']
})
export class SearchDepartmentComponent {

  public emp: Array<IEmpDept>=[];
  public data:Array<IEmpDept>=[];
  public value!: string;

  searchDepForm = new FormGroup({
    searchDepName: new FormControl('')
  })

  constructor(private depService: DepartmentService)
  {
    this.emp=depService.deptList
  }
  ngOnInit(): void
   {
    this.searchDepForm.controls['searchDepName'].valueChanges.subscribe(x=>{
      this.value=x!;
      this.data=this.emp.filter(x=>x.deptName.toLowerCase().includes(this.value.toLowerCase()));
      console.log(x);
    })
  }

  onSearch()
  {
    this.data=this.emp.filter(x=>x.deptName.toLowerCase().includes(this.value.toLowerCase()));
  }
}
