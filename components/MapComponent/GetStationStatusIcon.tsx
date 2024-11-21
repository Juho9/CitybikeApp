const ICON_RED = require('../../assets/motorcycle-icon-red.png');
const ICON_YELLOW = require('../../assets/motorcycle-icon-orange.png');
const ICON_BLACK = require('../../assets/motorcycle-icon.png');

//Returns image based on the number of available bikes in station
export const getImageForMarker = (value: number) => {
  if (value === 0) {
    return ICON_RED;
  } else if (value <= 5) {
    return ICON_YELLOW;
  } else {
    return ICON_BLACK;
  }
};
