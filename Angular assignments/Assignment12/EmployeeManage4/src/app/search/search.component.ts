import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { IEmployeeData } from '../employee/IEmployeeData';
import { EmployeesService } from '../employee/employees.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.sass']
})
export class SearchComponent implements OnInit {

  public emp: Array<IEmployeeData>=[];
  public data:Array<IEmployeeData>=[];
  public value!: string;

  searchForm = new FormGroup({
    searchName: new FormControl('')
  })

  constructor(private empService: EmployeesService)
  {
    //this.emp=empService.empList
  }
  ngOnInit(): void
   {
    this.searchForm.controls['searchName'].valueChanges.subscribe(x=>{
      this.value=x!;
      this.data=this.emp.filter(x=>x.firstName.toLowerCase().includes(this.value.toLowerCase()));
      console.log(x);
    })
  }
  
  onClickSearch()
  {
    this.data=this.emp.filter(x=>x.firstName.toLowerCase().includes(this.value.toLowerCase()));
  }

}
