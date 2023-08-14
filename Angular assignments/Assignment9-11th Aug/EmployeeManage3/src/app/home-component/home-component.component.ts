import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.sass']
})
export class HomeComponentComponent {

    constructor(private router: Router) {
       
        
    }

    backToHome() {
        this.router.navigate(['.'])
    }

    onEmployeeClick() {
        this.router.navigate(['./employee'])
    }
}
