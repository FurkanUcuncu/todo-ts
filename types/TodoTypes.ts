export interface TodoType {
    id: number,
    text:string,
    completed:boolean
}

export interface TodosType{
    todos:TodoType[],
    todo:TodoType
}
