const SOURCE = {
  AVATAR: require('./images/avatar.png'),
  AVATARHEADER: require('./images/avatarHeader.png'),
  AVATARINFOMATION: require('./images/avatar_218.png'),
  BLOW: require('./images/blow.png'),
  BLOW_FOCUSED: require('./images/blow_focused.png'),
  BACK: require('./images/back.png'),
  CALENDAR: require('./images/calendar.png'),
  DARKMODE: require('./images/darkmode.png'),
  EDIT: require('./images/edit.png'),
  DEVICE: require('./images/device.png'),
  DEVICE_FOCUSED: require('./images/device_focused.png'),
  INFO: require('./images/info.png'),
  INFO_FOCUSED: require('./images/info_focused.png'),
  INFO_BLOW: require('./images/infoblow.png'),
  INTRODUCDE: require('./images/introduce.png'),
  LOGO: require('./logo.png'),
  LINELIGHT: require('./images/lineLight.png'),
  LINEDARK: require('./images/lineDark.png'),
  LOGINSUCCESS: require('./images/loginSuccess.png'),
  MATERIAL: require('./images/material.png'),
  MATERIAL_FOCUSED: require('./images/material_focused.png'),
  NOTES: require('./images/notes.png'),
  QUANTITYCOMFIRM: require('./images/comfirmquantity.png'),
  QUANTITYCOMFIRM_FOCUSED: require('./images/comfirmquantity_focused.png'),
  QUANTITY: require('./images/quantity.png'),
  QUANTITY_FOCUSED: require('./images/quantity_focused.png'),
  QUANTITYBLOW: require('./images/quantityBlow.png'),
  SIGNOUT: require('./images/signout.png'),
};

export const getSource = (source: keyof typeof SOURCE) => {
  return SOURCE[source];
};

export * from './svg';
