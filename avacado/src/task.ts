import { uuidv4 } from "./utils/uuidv4";

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
    id: uuidv4(),
    title: '',
    dueDate: '',
    description: '',
    completed: false,
    recurrence: 0,
  }
}