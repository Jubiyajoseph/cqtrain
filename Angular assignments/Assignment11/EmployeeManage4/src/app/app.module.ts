import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeHomeComponent } from './employee-home/employee-home.component';
import { EmployeeModule } from './employee/employee.module';
import { DepartmentModule } from './department/department.module';
import { SearchComponent } from './search/search.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AddemployeeComponent } from './addemployee/addemployee.component';
import { AdddepartmentComponent } from './adddepartment/adddepartment.component';
import { SearchDepartmentComponent } from './search-department/search-department.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeHomeComponent,
    SearchComponent,
    AddemployeeComponent,
    AdddepartmentComponent,
    SearchDepartmentComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    EmployeeModule,
    DepartmentModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
