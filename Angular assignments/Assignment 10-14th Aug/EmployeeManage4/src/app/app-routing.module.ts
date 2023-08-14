import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeNameComponent } from './employee/employee-name/employee-name.component';
import { EmployeeDetailsComponent } from './employee/employee-details/employee-details.component';
import { DepartmentListComponent } from './department/department-list/department-list.component';
import { DepartmentDetailsComponent } from './department/department-details/department-details.component';

const routes: Routes = [
  {
  path:'employee-name',
  children: [
    {
      path: '',
      component: EmployeeNameComponent
    },
    {
      path: ':id/employeedetails',
      component: EmployeeDetailsComponent
    }
  ]
},
{
  path: 'deptlist',
  children: [
    {
      path: '',
      component: DepartmentListComponent
    },
    {
      path: 'deptdetails/:id',
      component: DepartmentDetailsComponent
    }
  ]
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
