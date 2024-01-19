import { Component } from '@angular/core';
import {
  EmployeesNavigator,
  EmployeesNavItem,
} from '../../navigation/employees-navigator';
import {
  EmployeeSelectSettings,
  CountType,
  ClickType,
} from '../employee-select/interfaces/employee-select-settings';

@Component({
  selector: 'employees-list',
  templateUrl: './employees-list.component.html',
})
export class EmployeesListComponent {
  constructor(private navigator: EmployeesNavigator) {}

  createEmployee() {
    this.navigator.showContent({
      navItem: EmployeesNavItem.NEW_EMPLOYEE,
      params: '',
      ids: []
    });
  }

  createDepartment() {
    this.navigator.showContent({
      navItem: EmployeesNavItem.NEW_DEPARTMENT,
      params: '',
      ids: []
    });
  }

  protected readonly employeesSelectSettings: EmployeeSelectSettings = {
    toolsVisible: true,
    blueBoxVisible: true,
    countType: CountType.Multiple,
    clickType: ClickType.CtrlClicked,
    overflowScroll: false,
    tripleDotVisible: true
  };

  strings = {
    users: 'Пользователи',
    create: 'Создать',
    employee: 'Сотрудник',
    department: 'Департамент',
  };
}
