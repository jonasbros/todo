import Todo from './todoRepository';

export const repository = store => ({
  todo: Todo(store)
});
