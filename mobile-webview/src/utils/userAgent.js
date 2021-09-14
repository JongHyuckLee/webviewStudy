export const isAndroid = () => !!navigator?.userAgent?.match(/Android/i);
export const isIos = () => !!navigator?.userAgent?.match(/iPhone|iPad|iPod/i);
export const isMobile = () => isAndroid() || isIos();
