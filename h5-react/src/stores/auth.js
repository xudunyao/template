import { makeAutoObservable } from 'mobx';

class Auth {
  profile = {
    username: '',
    avatar: '',
    id: '',
  }

  isLoggedIn = true

  constructor() {
    makeAutoObservable(this);
  }

  setProfile(profile) {
    this.profile = {
      ...this.profile,
      profile,
    };
  }

  setIsLoggedIn(isLoggedIn) {
    this.isLoggedIn = isLoggedIn;
  }

  clearLogInfo() {
    this.profile = {
      username: '',
      avatar: '',
      id: '',
    };
    this.isLoggedIn = false;
  }
}

export default new Auth();
