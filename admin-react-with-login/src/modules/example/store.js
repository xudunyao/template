import { makeAutoObservable } from 'mobx';

class Example {
  title = ''

  constructor() {
    makeAutoObservable(this);
  }

  setTitle(title) {
    this.title = title;
  }
}

export default new Example();
