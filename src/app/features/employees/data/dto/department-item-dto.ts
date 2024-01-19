export interface DepartmentItemDto{
    id: number
    name: string
    countOfEmployees: number
    departments: DepartmentItemDto[]
}
