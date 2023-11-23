import { Component } from '@angular/core';
import { DepartmentEntity } from 'src/app/features/employees/components/department/department.component';
import { EmployeeItemEntity } from 'src/app/features/employees/components/employee-item/employee-item.component';
import { EmployeesNavigator, EmployeesNavItem } from '../../navigation/employees-navigator';
import { EmployeeSelectSettings, SelectCount } from '../employee-select/interfaces/employee-select-settings';

@Component({
  selector: 'employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.scss'],
})

export class EmployeesListComponent {
  constructor(private navigator: EmployeesNavigator) {}

  createEmployee() {
    this.navigator.showContent({
      navItem: EmployeesNavItem.NEW_EMPLOYEE,
      params: '',
    });
  }

  createDepartment() {
    this.navigator.showContent({
      navItem: EmployeesNavItem.NEW_DEPARTMENT,
      params: '',
    });
  }

  protected readonly employeesSelectSettings: EmployeeSelectSettings =
  {
    toolsVisible: true,
    blueBoxVisible: true,
    countType: SelectCount.Multiple
  }

  strings = {
    users: 'Пользователи',
    create: 'Создать',
    employee: 'Сотрудник',
    department: 'Департамент',
  };
}
