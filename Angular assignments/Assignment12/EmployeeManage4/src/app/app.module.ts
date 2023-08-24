import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeHomeComponent } from './home/employee-home.component';
import { EmployeeModule } from './employee/employee.module';
import { DepartmentModule } from './department/department.module';
import { SearchComponent } from './search/search.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AddemployeeComponent } from './addemployee/addemployee.component';
import { AdddepartmentComponent } from './adddepartment/adddepartment.component';
import { SearchDepartmentComponent } from './search-department/search-department.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { DeleteEmployeeComponent } from './delete-employee/delete-employee.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeHomeComponent,
    SearchComponent,
    AddemployeeComponent,
    AdddepartmentComponent,
    SearchDepartmentComponent,
    UpdateEmployeeComponent,
    DeleteEmployeeComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    EmployeeModule,
    DepartmentModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
