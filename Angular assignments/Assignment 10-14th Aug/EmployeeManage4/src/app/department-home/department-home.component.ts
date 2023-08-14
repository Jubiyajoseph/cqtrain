import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-department-home',
  templateUrl: './department-home.component.html',
  styleUrls: ['./department-home.component.sass']
})
export class DepartmentHomeComponent {


  constructor(private router: Router) {

    
  }
  onDeptClick()
  {
    this.router.navigate(['./deptlist'])

  }
}
