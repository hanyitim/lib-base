export const isAndroid = () => {
  return /android/gi.test(window.navigator.userAgent);
};

export const isIos = () => {
  return /[iphone|ipad]/gi.test(window.navigator.userAgent);
};

export const isPPLive = () => {
  return /pplive/gi.test(window.navigator.userAgent);
};