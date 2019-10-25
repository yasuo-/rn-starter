import { Platform } from 'react-native';

export default {
  rateUsUrl: Platform.OS === 'ios' ? 'https://apple.com' : 'https://google.com',
  contactUsUrl: '',
};
