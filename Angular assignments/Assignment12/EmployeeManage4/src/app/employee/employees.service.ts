import { Injectable } from '@angular/core';
import { IEmployeeData } from './IEmployeeData';
import { Observable } from 'rxjs';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
 
export class EmployeesService {

  public baseUrl='https://localhost:7158/api/Employee';
  constructor(private httpClient: HttpClient) 
  {
  }

  public GetEmployee(): Observable<Array<IEmployeeData>>
  {
    return this.httpClient.get<Array<IEmployeeData>>(this.baseUrl);
  }

  public AddEmployee(emp:IEmployeeData): Observable<boolean>
  {    
    return this.httpClient.post<boolean>(this.baseUrl,emp)
  }

  public UpdateEmployee(emp:IEmployeeData,id:number): Observable<any>
  {
    return this.httpClient.put(`${this.baseUrl}?id=${id}`,emp)
  }

  public DeleteEmployee(id:number): Observable<any>
  {
    return this.httpClient.delete(`${this.baseUrl}/${id}`)
  }

}


