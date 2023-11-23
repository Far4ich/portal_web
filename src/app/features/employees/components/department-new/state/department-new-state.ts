import { Injectable } from '@angular/core';
import { EmployeeItemEntity } from '../../employee-item/employee-item.component';
import { DepartmentEntity } from '../../department/department.component';

@Injectable({
  providedIn: 'root',
})
export class DepartmentNewState {
  readonly name: string = '';
  readonly nameError: string = '';

  readonly supervisor: EmployeeItemEntity | null = null;
  readonly supervisorError: string = '';

  readonly parentDepartment: DepartmentEntity | null = null;
  readonly parentDepartmentError: string = '';

  readonly employees: EmployeeItemEntity[] = [
    {
      id: 1,
      img: 'https://cdn.betterttv.net/emote/6436b06d48b8cab3008407d4/3x.png',
      mail: 'firdavsinurov@site.com',
      name: 'Фирдавси Нуров',
      isSelect: false
    },
    {
      id: 2,
      img: 'https://cdn.betterttv.net/emote/6436b06d48b8cab3008407d4/3x.png',
      mail: '',
      name: 'Firdavsi Nurov',
      isSelect: false
    },
    {
      id: 3,
      img: '',
      mail: '',
      name: '',
      isSelect: false
    },
  ];
}
