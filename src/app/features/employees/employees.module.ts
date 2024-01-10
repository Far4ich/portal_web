import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ComponentsModule } from 'src/app/core/components/components.module';
import {
  SvgTripleDot,
  SvgXMark,
} from 'src/app/core/components/svg-components/svg.components';
import {
  DateRule,
  EmptyRule,
  MaxLengthRule,
} from 'src/app/core/validators/rule';
import { Validator } from 'src/app/core/validators/validator';
import {
  emailValidatorFactory,
  passwordValidatorFactory,
  phoneNumberValidatorFactory,
} from 'src/app/core/validators/validators';
import { AddEmployeesComponent } from './components/add-employees/add-employees.component';
import { DeleteEmployeeModal } from './components/delete-emoloyee-modal/delete-emoloyee-modal.component';
import { DeleteUnitModal } from './components/delete-unit-modal/delete-unit-modal.component';
import { DepartmentEditComponent } from './components/department-edit/department-edit.component';
import { DepartmentInfoComponent } from './components/department-info/department-info.component';
import { DepartmentNewComponent } from './components/department-new/department-new.component';
import { DepartmentComponent } from './components/department/department.component';
import { EmployeeEditComponent } from './components/employee-edit/employee-edit.component';
import { EmployeeItemComponent } from './components/employee-item/employee-item.component';
import { EmployeeNewComponent } from './components/employee-new/employee-new.component';
import { EmployeeSelectComponent } from './components/employee-select/employee-select.component';
import { EmployeesListComponent } from './components/employees-list/employees-list.component';
import { MenuItemComponent } from './components/menu/menu-item/menu-item.component';
import { MenuComponent } from './components/menu/menu.component';
import { ModalWindowComponent } from './components/modal-window/modal-window.component';
import { RoleItemComponent } from './components/roles/role-item/role-item.component';
import { RolesComponent } from './components/roles/roles.component';
import { SelectDepartmentModalComponent } from './components/select-department-modal/select-department-modal.component';
import { SelectEmployeesModalComponent } from './components/select-employees-modal/select-employees-modall.component';
import { SelectSupervisorModalComponent } from './components/select-supervisor-modal/select-supervisor-modal.component';
import { EmployeesComponent } from './presentation/employees.component';
import { EmployeeService } from 'src/app/features/employees/data/employee-service';
import { DepartmentService } from './data/department-service';

@NgModule({
  declarations: [
    EmployeesComponent,
    EmployeesListComponent,
    DepartmentInfoComponent,
    MenuComponent,
    MenuItemComponent,
    DepartmentComponent,
    EmployeeItemComponent,
    RolesComponent,
    RoleItemComponent,
    AddEmployeesComponent,
    ModalWindowComponent,
    EmployeeSelectComponent,
    DepartmentNewComponent,
    EmployeeNewComponent,
    DepartmentEditComponent,
    EmployeeEditComponent,
    SelectDepartmentModalComponent,
    SelectSupervisorModalComponent,
    SelectEmployeesModalComponent,
    DeleteEmployeeModal,
    DeleteUnitModal,
  ],
  exports: [EmployeesComponent],
  imports: [
    CommonModule,
    ComponentsModule,
    RouterOutlet,
    SvgXMark,
    SvgTripleDot,
  ],
  providers: [
    {
      provide: 'NewEmployeeEmailValidator',
      useExisting: Validator,
      useFactory: emailValidatorFactory,
    },
    {
      provide: 'NewEmployeePasswordValidator',
      useExisting: Validator,
      useFactory: passwordValidatorFactory,
    },
    {
      provide: 'NewEmployeeFirstNameValidator',
      useExisting: Validator,
      useFactory: EmployeesModule.firstNameValidatorFactory,
    },
    {
      provide: 'NewEmployeeLastNameValidator',
      useExisting: Validator,
      useFactory: EmployeesModule.lastNameValidatorFactory,
    },
    {
      provide: 'NewEmployeeDateOfBirthValidator',
      useExisting: Validator,
      useFactory: EmployeesModule.dateOfBirthValidatorFactory,
    },
    {
      provide: 'NewDepartmentNameValidator',
      useExisting: Validator,
      useFactory: EmployeesModule.nameValidatorFactory,
    },
    {
      provide: 'NewEmployeePhoneNumberValidator',
      useExisting: Validator,
      useFactory: phoneNumberValidatorFactory,
    },
    {
      provide: 'NewEmployeeJobTitleValidator',
      useExisting: Validator,
      useFactory: EmployeesModule.jobTitleValidatorFactory,
    },
    EmployeeService, 
    DepartmentService
  ],
})
export class EmployeesModule {
  public static jobTitleValidatorFactory = () =>
    new Validator([
      new EmptyRule('Введите должность'),
      new MaxLengthRule('Должность не может быть длиннее 50 символов', 50),
    ]);

  public static firstNameValidatorFactory = () =>
    new Validator([
      new EmptyRule('Введите имя'),
      new MaxLengthRule('Имя не может быть длиннее 50 символов', 50),
    ]);

  public static lastNameValidatorFactory = () =>
    new Validator([
      new EmptyRule('Введите фамилию'),
      new MaxLengthRule('Фамилия не может быть длиннее 50 символов', 50),
    ]);

  public static dateOfBirthValidatorFactory = () =>
    new Validator([
      new EmptyRule('Введите дату рождения'),
      new DateRule(
        'Введите корректную строку даты в формате гггг-мм-дд (Пример: 2002-10-05)',
      ),
    ]);

  public static nameValidatorFactory = () =>
    new Validator([
      new EmptyRule('Введите название департамента'),
      new MaxLengthRule(
        'Название департамента не должно быть больше 50 символов',
        50,
      ),
    ]);
}
