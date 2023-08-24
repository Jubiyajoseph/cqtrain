import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeNameComponent } from './employee/employee-name/employee-name.component';
import { EmployeeDetailsComponent } from './employee/employee-details/employee-details.component';
import { DepartmentListComponent } from './department/department-list/department-list.component';
import { DepartmentDetailsComponent } from './department/department-details/department-details.component';
import { AddemployeeComponent } from './addemployee/addemployee.component';
import { SearchComponent } from './search/search.component';
import { AdddepartmentComponent } from './adddepartment/adddepartment.component';
import { SearchDepartmentComponent } from './search-department/search-department.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { DeleteEmployeeComponent } from './delete-employee/delete-employee.component';

const routes: Routes = [
  {
  path:'employees',
  children: [
    {
      path: '',
      component: EmployeeNameComponent
    },
    {
      path: ':id/employee-details',
      component: EmployeeDetailsComponent
    },
    {
      path: 'newEmployee',
      component: AddemployeeComponent
    },
    {
      path: 'searchEmployee',
      component: SearchComponent
    },
    {
      path: 'updateEmployee',
      component: UpdateEmployeeComponent
    },
    {
      path: 'deleteEmployee',
      component: DeleteEmployeeComponent
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
      path: 'dept-details/:id',
      component: DepartmentDetailsComponent
    },
    {
      path: 'newDept',
      component: AdddepartmentComponent
    },
    {
      path: 'searchDept',
      component: SearchDepartmentComponent
    }
  ]
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
