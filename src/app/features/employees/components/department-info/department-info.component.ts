import { Component, Input } from '@angular/core';
import { DepartmentEntity } from '../department/department.component';
import {
  EmployeesNavItem,
  EmployeesNavigator,
} from '../../navigation/employees-navigator';
import { EmployeesDataService } from '../../data/employees-data-service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'department-info',
  templateUrl: './department-info.component.html',
  styleUrls: ['./department-info.component.scss'],
})
export class DepartmentInfoComponent {
  public countOfEmployees: number = 0;

  public department: DepartmentEntity = {
    id: 1,
    name: "Test",
    supervisor: {
      id: 1,
      name: "Сергей Исхаков",
      mail: "se.isxakov@mail.ru",
      img: ""
    },
    isSelect: false,
    visibleContent: false,
    departments: [],
    employees: []
  }

  constructor(private dataService: EmployeesDataService,
    private navigator: EmployeesNavigator,
    private route: ActivatedRoute) {
    let findDepartment = dataService.departments.find((element) => {
      return element.id.toString() == this.route.snapshot.paramMap.get('id')
    })
    if (findDepartment) {
      this.department = dataService.ConvertToDepartmentEntity(findDepartment)
    }
    console.log(findDepartment)
    console.log(this.department)
  }

  editDepartment() {
    this.navigator.showContent({
      navItem: EmployeesNavItem.EDIT_DEPARTMENT,
      params: '',
    });
  }

  getCountEmployees(department: DepartmentEntity): void {
    this.countOfEmployees += department.employees.length;
    department.departments.forEach((element) => {
      this.getCountEmployees(element);
    });
  }

  strings = {
    change: 'Изменить',
    supervisor: 'Руководитель',
    participants: 'Участники',
    emptyText: 'В отделе нет подразделений и сотрудников',
    add: 'Добавить',
  };

  isEmptyDepartment(): boolean {
    return (
      this.department.employees.length == 0 &&
      this.department.departments.length == 0
    );
  }

  onAddClicked(): void { }
}
