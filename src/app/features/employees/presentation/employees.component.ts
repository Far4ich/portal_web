import { Component } from '@angular/core';

@Component({
  selector: 'app-presentation',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent {
  showDialog: boolean = false
 isModalActive: boolean = true
  onCrossClick() {
    this.isModalActive = !this.isModalActive
  }

}
