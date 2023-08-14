import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeHomeComponent } from './employee-home/employee-home.component';
import { DepartmentHomeComponent } from './department-home/department-home.component';
import { EmployeeModule } from './employee/employee.module';
import { DepartmentModule } from './department/department.module';
import { EmployeesService } from './employee/employees.service';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeHomeComponent,
    DepartmentHomeComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    EmployeeModule,
    DepartmentModule
  ],
  providers: [EmployeesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
