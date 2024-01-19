export interface EmployeeSelectSettings {
    toolsVisible: boolean,
    blueBoxVisible: boolean,
    countType: CountType,
    clickType: ClickType,
    overflowScroll: boolean,
    tripleDotVisible: boolean
  }

  export enum CountType { Single, Multiple }
  export enum ClickType { Clicked, CtrlClicked }
