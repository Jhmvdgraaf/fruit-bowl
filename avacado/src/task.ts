export interface Task {
  id: string;
  title: string;
  dueDate: string;
  description: string;
  completed: boolean;
  recurrence: number;
}

export function getEmptyTask (): Task{
  return {
    id: '',
    title: '',
    dueDate: '',
    description: '',
    completed: false,
    recurrence: 0,
  }
}