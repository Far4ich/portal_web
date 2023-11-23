import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { MainContentCardComponent } from './main-content-card/main-content-card.component';
import { ButtonRedComponent } from './button-red/button-red.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { ButtonBackComponent } from './button-back/button-back.component';
import { InputFieldComponent } from './input-field/input-field.component';
import { SearchFieldComponent } from './search-field/search-field.component';
import { DropdownFieldComponent } from './dropdown-field/dropdown-field.component';
import { FieldErrorMessageComponent } from './field-error-message/field-error-message.component';
import { ButtonLightGrayComponent } from './button-light-gray/button-light-gray.component';
import { PopupMenuComponent } from './popup-menu/popup-menu.component';
import { PopupMenuButtonComponent } from './popup-menu/popup-menu-button/popup-menu-button.component';
import { PopupMenuContentComponent } from './popup-menu/popup-menu-content/popup-menu-content.component';
import { PopupMenuOptionComponent } from './popup-menu/popup-menu-option/popup-menu-option.component';
import { MultiselectFieldComponent } from './multiselect-field/multiselect-field.component';
import { PageShadingComponent } from './page-shading/page-shading.component';
import { ToastComponent } from './toast-alert/toast-alert.component';
import { ErrorToastComponent } from './toast-alert/error-toast/error-toast.component';
import { SuccessToastComponent } from './toast-alert/success-toast/success-toast.component';

@NgModule({
  declarations: [
    CardComponent,
    MainContentCardComponent,
    ButtonRedComponent,
    ButtonBackComponent,
    InputFieldComponent,
    SearchFieldComponent,
    DropdownFieldComponent,
    FieldErrorMessageComponent,
    ButtonLightGrayComponent,
    PopupMenuComponent,
    PopupMenuButtonComponent,
    PopupMenuContentComponent,
    PopupMenuOptionComponent,
    MultiselectFieldComponent,
    PageShadingComponent,
    ToastComponent,
    ErrorToastComponent,
    SuccessToastComponent
  ],
  exports: [
    CardComponent,
    MainContentCardComponent,
    ButtonRedComponent,
    ButtonBackComponent,
    InputFieldComponent,
    SearchFieldComponent,
    DropdownFieldComponent,
    ButtonLightGrayComponent,
    PopupMenuComponent,
    PopupMenuButtonComponent,
    PopupMenuContentComponent,
    PopupMenuOptionComponent,
    MultiselectFieldComponent,
    PageShadingComponent,
    ToastComponent,
    ErrorToastComponent,
    SuccessToastComponent
  ],
  imports: [CommonModule, AppRoutingModule],
})
export class ComponentsModule {}
