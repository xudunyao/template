import { makeAutoObservable } from 'mobx';

class Auth {
  profile = {
    username: '',
    avatar: '',
  };

  isLoggedIn = false;

  constructor() {
    makeAutoObservable(this);
  }

  setProfile(username, avatar) {
    this.profile.username = username;
    this.profile.avatar = avatar;
  }

  setIsLoggedIn(isLoggedIn) {
    this.isLoggedIn = isLoggedIn;
  }

  clearlogInfo() {
    this.profile = {
      username: '',
      avatar: '',
    };
    this.isLoggedIn = false;
  }
}

export default new Auth();
