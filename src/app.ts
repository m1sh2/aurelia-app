import { Todo } from './todo';
import { storage } from './storage.service';

export class App {
  heading: string = 'Aurelia Todos Example';
  todos: Array<any> = storage.get('todos') || [];
  todoDescription: string = '';
  todoType: string = 'story';

  constructor() {
    if (!storage.get('todos')) {
      storage.set('todos', JSON.stringify([
        {'description':'some','done':false,'type':'story'},
        {'description':'here!','done':false,'type':'bug'},
        {'description':'thing','done':true,'type':'story'}
      ]));
      this.todos = storage.get('todos');
    }
  }

  addTodo() {
    if (this.todoDescription) {
      this.todos.push(new Todo(this.todoDescription, this.todoType));
      storage.set('todos', this.todos);
      this.todoDescription = '';
      this.todoType = 'story';
    }
  }

  removeTodo(todo) {
    let index = this.todos.indexOf(todo);
    if (index !== -1) {
      this.todos.splice(index, 1);
      storage.set('todos', this.todos);
    }
  }

  check(todo, isDone) {
    todo.done = isDone;
    storage.set('todos', this.todos);
  }
}