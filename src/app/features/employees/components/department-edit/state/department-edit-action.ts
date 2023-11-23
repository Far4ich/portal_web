import { DepartmentEntity } from '../../department/department.component';
import { EmployeeItemEntity } from '../../employee-item/employee-item.component';
import { IDepartmentEditState } from './department-edit-state';

export type DepartmentEditAction =
  | ChangeNameAction
  | ChangeSupervisorAction
  | RemoveSupervisorAction
  | ChangeParentDepartamentAction
  | RemoveParentDepartamentAction
  | AddEmpoyeesAction
  | RemoveEmpoyeesAction
  | InitializeAction
  | EditAction;

export enum DepartmentEditActionTypes {
  CHANGE_NAME,
  CHANGE_SUPERVISOR,
  REMOVE_SUPERVISOR,
  CHANGE_PARENT_DEPARTAMENT,
  REMOVE_PARENT_DEPARTAMENT,
  ADD_EMLOYEES,
  REMOVE_EMPOYEES,
  INITIALIZE,
  EDIT,
}

export interface ChangeNameAction {
  readonly type: DepartmentEditActionTypes.CHANGE_NAME;
  readonly name: string;
}

export interface ChangeSupervisorAction {
  readonly type: DepartmentEditActionTypes.CHANGE_SUPERVISOR;
  readonly supervisor: EmployeeItemEntity;
}

export interface RemoveSupervisorAction {
  readonly type: DepartmentEditActionTypes.REMOVE_SUPERVISOR;
}

export interface ChangeParentDepartamentAction {
  readonly type: DepartmentEditActionTypes.CHANGE_PARENT_DEPARTAMENT;
  readonly parentDepartament: DepartmentEntity;
}

export interface RemoveParentDepartamentAction {
  readonly type: DepartmentEditActionTypes.REMOVE_PARENT_DEPARTAMENT;
}

export interface AddEmpoyeesAction {
  readonly type: DepartmentEditActionTypes.ADD_EMLOYEES;
  readonly empoyees: EmployeeItemEntity[];
}

export interface RemoveEmpoyeesAction {
  readonly type: DepartmentEditActionTypes.REMOVE_EMPOYEES;
  readonly empoyees: EmployeeItemEntity[];
}

export interface InitializeAction {
  readonly type: DepartmentEditActionTypes.INITIALIZE;
  readonly state: IDepartmentEditState;
}

export interface EditAction {
  readonly type: DepartmentEditActionTypes.EDIT;
}
