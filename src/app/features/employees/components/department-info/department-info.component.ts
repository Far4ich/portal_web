import { Component } from '@angular/core';
import { DepartmentEntity } from '../department/department.component';
import { EmployeesDataService } from '../../data/employees-data-service';
import { ActivatedRoute, Router } from '@angular/router';
import {
  EmployeesNavItem,
  EmployeesNavigator,
} from '../../navigation/employees-navigator';
import { DepartmentService } from '../../data/department-service';
import { EmployeeService } from "../../data/employee-service";
import { EmployeeItemEntity } from "../employee-item/employee-item.component";

@Component({
  selector: 'department-info',
  templateUrl: './department-info.component.html',
})
export class DepartmentInfoComponent {
  public countOfEmployees: number = 0;
  public addEmplModalVisible: boolean = false
  private parentDepId: number = -1
  public isLoading: boolean = true
  public department: DepartmentEntity = {
    id: 0,
    name: '',
    isSelect: false,
    visibleContent: false,
    countOfEmployees: 0,
    supervisor: {
      id: 0,
      img: '',
      name: '',
      mail: ''
    },
    departments: [],
    employees: []
  }

  constructor(
    private dataService: EmployeesDataService,
    private navigator: EmployeesNavigator,
    private departmentService: DepartmentService,
    private route: ActivatedRoute,
    private router: Router
  )
    {
      this.update()
    }

  update()
  {
    this.isLoading = true
    let id = this.route.snapshot.paramMap.get('id')
    this.departmentService.getDepartment(Number(id)).subscribe((dep)=>{
      this.department = this.dataService.ConvertDepartmentFullToDepartmentEntity(dep.department)
      this.countOfEmployees = 0
      this.getCountEmployees(this.department)
      this.parentDepId = dep.department.parentDepartment ? dep.department.parentDepartment.id: -1
      this.isLoading = false
    })
  }

  getCountEmployees(department: DepartmentEntity):void
  {
    this.countOfEmployees += department.employees.length;
    department.departments.forEach(element => {
      this.getCountEmployees(element);
    });
  }

  editDepartment() {
    this.navigator.showContent({
      navItem: EmployeesNavItem.EDIT_DEPARTMENT,
      params: '' + this.department.id,
      ids: []
    });
  }

  addEmployees(employees: EmployeeItemEntity[])
  {
    let ids: number[] = []
    employees.forEach((element) => {
      if (element.isSelect) {
        ids.push(element.id)
      }
    })

    this.departmentService.editDepartment(this.department.id,
      {
        name: this.department.name,
        supervisorID: this.department.supervisor ? this.department.supervisor.id: null,
        parentDepartmentID: this.parentDepId != -1? this.parentDepId: null,
        employeeIDs: ids
      }).subscribe(()=>{
        this.addEmplModalVisible = false
        this.update()
      }
    )
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

  onChangeClicked(): void {}

  onAddClicked(): void {}
}
