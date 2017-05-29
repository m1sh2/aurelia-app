export class Todo {
  description: string;
  done: boolean;
  type: string;
  
  constructor(description, type) {
    this.description = description;
    this.done = false;
    this.type = type;
  }
}