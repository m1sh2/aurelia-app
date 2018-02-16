import { Todo } from './todo';
import { storage } from './storage.service';

export class App {
  heading: string = 'Aurelia Todos Example';
  todos: Array<any> = storage.get('au-todos') || [];
  todoDescription: string = '';
  todoType: string = 'story';
  eventAggregator: any;

  constructor() {
    const todos = [];
    console.log('location', window.location.hash);

    for (let i = 0; i < 1000; i++) {
      todos.push({
        text: 'Test',
        checked: false
      });
    }

    storage.set('au-todos', JSON.stringify(todos));
    this.todos = storage.get('au-todos');

    window.addEventListener('aurelia-composed', event => {
      window.parent.postMessage('FRAME_LOADED','https://jsmeasure.herokuapp.com');
    }, false);

    if (!storage.get('au-todos')) {
      storage.set('au-todos', JSON.stringify([
        {'description':'some','done':false,'type':'story'},
        {'description':'here!','done':false,'type':'bug'},
        {'description':'thing','done':true,'type':'story'}
      ]));
      this.todos = storage.get('au-todos');
    }
  }

  addTodo() {
    if (this.todoDescription) {
      this.todos.push(new Todo(this.todoDescription, this.todoType));
      storage.set('au-todos', this.todos);
      this.todoDescription = '';
      this.todoType = 'story';
    }
  }

  removeTodo(todo) {
    let index = this.todos.indexOf(todo);
    if (index !== -1) {
      this.todos.splice(index, 1);
      storage.set('au-todos', this.todos);
    }
  }

  check(todo, isDone) {
    todo.done = isDone;
    storage.set('au-todos', this.todos);
  }

  // activate() {
  //   this.mainLoadingSubscription = this.eventAggregator.subscribe('main:loading', isLoading => {
  //     window.parent.postMessage('FRAME_LOADED','http://localhost:3000');
  //   })
  // }
  //
  // deactivate() {
  //   this.mainLoadingSubscription.dispose();
  // }
}
