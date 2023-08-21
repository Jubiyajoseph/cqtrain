import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DepartmentListComponent } from './department-list/department-list.component';
import { DepartmentDetailsComponent } from './department-details/department-details.component';



@NgModule({
  declarations: 
  [ DepartmentListComponent,
    DepartmentDetailsComponent],
  imports: [
    CommonModule
  ],
  exports: [DepartmentListComponent,DepartmentDetailsComponent]
})
export class DepartmentModule { }
