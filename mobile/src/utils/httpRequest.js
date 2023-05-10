import axios from 'axios';
import { Platform } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Toast from 'react-native-toast-message';
import {
  getUniqueId,
  getVersion,
  getBuildNumber,
} from 'react-native-device-info';
import { NetworkInfo } from 'react-native-network-info';
import NetInfo from '@react-native-community/netinfo';

import env from '@root/env.json';
import { storageKey, navigationName } from '@/constants';
import { navigate } from '@/services/navigation';

const instance = axios.create({
  baseURL: env.API_ENDPOINT,
  timeout: 10000,
  headers: {},
});

const handleUnauthorized = () => {
  AsyncStorage.removeItem(storageKey.token);
  Toast.show({
    type: 'error',
    text1: '登录失效，请重新登录',
  });
  navigate(navigationName.onboarding.stack);
};

const getDeviceInfoForHeader = async () => {
  const headers = {};
  headers['X-App-Version'] = getVersion();
  headers['X-App-BuildNumber'] = getBuildNumber();
  headers['X-Device-ID'] = getUniqueId();
  headers['X-Device-OS'] = Platform.OS;
  const ipAddress = await NetworkInfo.getIPV4Address();
  if (ipAddress) {
    headers['X-Device-IP'] = ipAddress;
  }
  return headers;
};

// Add a request interceptor
instance.interceptors.request.use(
  async config => {
    const token = await AsyncStorage.getItem(storageKey.token);
    const netState = await NetInfo.fetch();
    if (!netState.isConnected) {
      throw new Error('网络异常，请检查网络连接');
    }
    if (token) {
      config.headers['X-User-Token'] = token;
    }
    const deviceInfo = await getDeviceInfoForHeader();
    config.headers = {
      ...config.headers,
      ...deviceInfo,
    };
    return config;
  },
  error => Promise.reject(error),
);

// Add a response interceptor
instance.interceptors.response.use(
  response => {
    if (response?.data?.code === 10) {
      handleUnauthorized();
    }
    return response.data;
  },
  error => {
    if (error?.response?.status === 401) {
      handleUnauthorized();
    }
    return Promise.reject(error);
  },
);

export default instance;
