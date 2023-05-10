export const formatPhoneNumber = phoneNumber =>
  typeof phoneNumber === 'string'
    ? phoneNumber.replace(/(\d{3})\d{4}(\d{4})/, '$1****$2')
    : phoneNumber;
