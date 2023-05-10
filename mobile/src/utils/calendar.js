import { LocaleConfig } from 'react-native-calendars';

const monthNames = [
  '1月',
  '2月',
  '3月',
  '4月',
  '5月',
  '6月',
  '7月',
  '8月',
  '9月',
  '10月',
  '11月',
  '12月',
];

export const configCalendar = () => {
  LocaleConfig.locales.zh = {
    monthNames: monthNames,
    monthNamesShort: monthNames,
    dayNames: ['周日', '周一', '周二', '周三', '周四', '周五', '周六'],
    dayNamesShort: ['日', '一', '二', '三', '四', '五', '六'],
    today: '今天',
  };
  LocaleConfig.defaultLocale = 'zh';
};
