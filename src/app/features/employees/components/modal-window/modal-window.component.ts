import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'employees-modal-window',
  templateUrl: './modal-window.component.html',
})
export class ModalWindowComponent {
  @Input() params: ModalWindowParams = {
    title: "Select",
    confirmButtonText: 'Выбрать',
    declineButtonText: 'Отмена'
  }
  @Output() closeClick = new EventEmitter()
  @Output() confirmClick = new EventEmitter()
  
}

export interface ModalWindowParams{
  title: string,
  confirmButtonText: string,
  declineButtonText: string,
}