export interface Todo {
  id: string;
  title: string;
  description: string;
}

export type TodoPayload = Omit<Todo, 'id'>;
