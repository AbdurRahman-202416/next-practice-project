export interface TodoType {

    id: number;
    text: string;
    priority: string;
    deadline: string;
    complete: boolean;
}
type TodoContextType = {
  todos: TodoType[];
  loading: boolean;
  error:string;
};


export  default TodoContextType ;
