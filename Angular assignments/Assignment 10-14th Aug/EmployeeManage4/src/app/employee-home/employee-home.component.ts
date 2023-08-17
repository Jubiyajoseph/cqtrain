import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-home',
  templateUrl: './employee-home.component.html',
  styleUrls: ['./employee-home.component.sass']
})
export class EmployeeHomeComponent {


constructor(private router: Router) {
  
}

  onEmployeeClick()
  {
    this.router.navigate(['./employees'])

  }
  backToHome()
  {
    this.router.navigate(['.'])
  }
    onDeptClick()
  {
    this.router.navigate(['./deptlist'])

  }
}
