import { DepartmentEntity } from '../../department/department.component';

export type EmployeeNewAction =
  | ChangeFirstNameAction
  | ChangeLastNameAction
  | ChangePatronymicAction
  | ChangeDateOfBirthAction
  | ChangeEmailAction
  | ChangeDepartmentAction
  | RemoveDepartmentAction
  | AddRoleAction
  | RemoveRoleAction
  | CreateAction
  | ChangePhoneNumberAction
  | ChangeJobTitleAction
  | OpenDepartmentModalAction
  | CloseDepartmentModalAction

export enum EmployeeNewActionTypes {
  CHANGE_JOB_TITLE,
  CHANGE_PHONE_NUMBER,
  CHANGE_FIRST_NAME,
  CHANGE_LAST_NAME,
  CHANGE_PATRONYMIC,
  CHANGE_DATE_OF_BIRTH,
  CHANGE_EMAIL,
  SELECT_DEPARTMENT,
  REMOVE_DEPARTMENT,
  ADD_ROLE,
  REMOVE_ROLE,
  CREATE,
  OPEN_DEPARTMENT_MODAL,
  CLOSE_DEPARTMENT_MODAL,
}

export interface ChangeJobTitleAction {
  readonly type: EmployeeNewActionTypes.CHANGE_JOB_TITLE;
  readonly jobTitle: string;
}

export interface ChangePhoneNumberAction {
  readonly type: EmployeeNewActionTypes.CHANGE_PHONE_NUMBER;
  readonly phoneNumber: string;
}

export interface ChangeFirstNameAction {
  readonly type: EmployeeNewActionTypes.CHANGE_FIRST_NAME;
  readonly firstName: string;
}

export interface ChangeLastNameAction {
  readonly type: EmployeeNewActionTypes.CHANGE_LAST_NAME;
  readonly lastName: string;
}

export interface ChangePatronymicAction {
  readonly type: EmployeeNewActionTypes.CHANGE_PATRONYMIC;
  readonly patronymic: string;
}

export interface ChangeDateOfBirthAction {
  readonly type: EmployeeNewActionTypes.CHANGE_DATE_OF_BIRTH;
  readonly dateOfBirth: string;
}

export interface ChangeEmailAction {
  readonly type: EmployeeNewActionTypes.CHANGE_EMAIL;
  readonly email: string;
}

export interface ChangeDepartmentAction {
  readonly type: EmployeeNewActionTypes.SELECT_DEPARTMENT;
  readonly department: DepartmentEntity;
}

export interface RemoveDepartmentAction {
  readonly type: EmployeeNewActionTypes.REMOVE_DEPARTMENT;
}

export interface AddRoleAction {
  readonly type: EmployeeNewActionTypes.ADD_ROLE;
  readonly roleId: string;
}

export interface RemoveRoleAction {
  readonly type: EmployeeNewActionTypes.REMOVE_ROLE;
  readonly roleId: string;
}

export interface CreateAction {
  readonly type: EmployeeNewActionTypes.CREATE;
}

export interface OpenDepartmentModalAction {
  readonly type: EmployeeNewActionTypes.OPEN_DEPARTMENT_MODAL;
}

export interface CloseDepartmentModalAction {
  readonly type: EmployeeNewActionTypes.CLOSE_DEPARTMENT_MODAL;
}
