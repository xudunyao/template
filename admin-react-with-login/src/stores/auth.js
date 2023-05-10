import { makeAutoObservable, runInAction } from 'mobx';
import Cookies from 'js-cookie';
import { httpRequest } from '@/utils';
import { storageKeys } from '@/constants';

const hasLoggedIn = !!Cookies.get(storageKeys.token);

const initPermissions = localStorage.getItem(storageKeys.permissions) ? JSON.parse(localStorage.getItem(storageKeys.permissions)) : [];

class Auth {
  profile = {
    username: Cookies.get(storageKeys.username),
    avatar: '',
  }

  isLoggedIn = hasLoggedIn

  permissions = initPermissions;

  isAdmin = false;

  constructor() {
    makeAutoObservable(this);
    if (hasLoggedIn) {
      this.getPermission();
    }
  }

  setProfile(username, avatar) {
    this.profile.username = username;
    this.profile.avatar = avatar;
  }

  setIsLoggedIn(isLoggedIn) {
    this.isLoggedIn = isLoggedIn;
    if (isLoggedIn) {
      this.getPermission();
    }
  }

  async getPermission() {
    try {
      const res = await httpRequest.get('/userPermission');
      if (res.code === 0) {
        runInAction(() => {
          const { permissions, admin } = res.data || {};
          this.permissions = permissions;
          localStorage.setItem(storageKeys.permissions, JSON.stringify(permissions));
          this.isAdmin = admin;
        });
      }
    } catch (err) {
      console.log(err?.message || '获取权限失败');
    }
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
