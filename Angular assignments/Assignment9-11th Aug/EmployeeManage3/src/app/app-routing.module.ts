import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeNameComponent } from './employee/employee-name/employee-name.component';
import { DepartmentComponent } from './department/department.component';
import { EmployeeDetailsComponent } from './employee/employee-details/employee-details.component';

const routes: Routes = [{
    path: 'employee',
    children: [
        {
            path: '', component: EmployeeNameComponent
        },
        {
            path: ':id/details', component: EmployeeDetailsComponent
        }
    ]
},
{
    path: 'department', component: DepartmentComponent
},
// {
//     path: '', redirectTo: 'employee', pathMatch: 'full'
// }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
