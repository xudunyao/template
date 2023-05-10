import { makeAutoObservable } from 'mobx';
import Cookies from 'js-cookie';

class Auth {
  profile = {
    username: '',
    avatar: '',
  }

  isLoggedIn = !!Cookies.get('token');

  permissions = []

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

  setPermissions(permissions) {
    this.permissions = permissions;
  }

  clearlogInfo() {
    this.profile = {
      username: '',
      avatar: '',
    };
    this.isLoggedIn = false;
    this.permissions = [];
  }
}

export default new Auth();
