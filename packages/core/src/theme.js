const createMediaQuery = n => `@media screen and (min-width:${n})`;

const addAliases = (arr, aliases) =>
  aliases.forEach((key, i) =>
    Object.defineProperty(arr, key, {
      enumerable: false,
      get() {
        return this[i];
      }
    })
  );

export const breakpoints = [32, 40, 48, 64].map(n => n + "em");

export const mediaQueries = breakpoints.map(createMediaQuery);

const aliases = ["sm", "md", "lg", "xl"];

addAliases(breakpoints, aliases);
addAliases(mediaQueries, aliases);

export const space = [0, 4, 8, 16, 32, 64, 128];

export const font = `'Helvetica,Arial,sans-serif`;

export const fontSizes = [12, 14, 16, 20, 24, 32, 40, 56, 72];

export const medium = 500;
export const bold = 700;
// alias
export const regular = medium;

// styled-system's `fontWeight` function can hook into the `fontWeights` object
export const fontWeights = {
  medium,
  bold,
  // alias
  regular
};

export const lineHeights = {
  standard: 1.5,
  display: 1.25
};

const letterSpacings = {
  normal: "normal",
  caps: "0.025em"
};

export const textStyles = {
  display8: {
    fontSize: fontSizes[8] + "px",
    fontWeight: fontWeights.bold,
    lineHeight: lineHeights.display
  },
  display7: {
    fontSize: fontSizes[7] + "px",
    fontWeight: fontWeights.bold,
    lineHeight: lineHeights.display
  },
  display6: {
    fontSize: fontSizes[6] + "px",
    fontWeight: fontWeights.bold,
    lineHeight: lineHeights.display
  },
  display5: {
    fontSize: fontSizes[5] + "px",
    fontWeight: fontWeights.bold,
    lineHeight: lineHeights.display
  },
  display4: {
    fontSize: fontSizes[4] + "px",
    fontWeight: fontWeights.bold,
    lineHeight: lineHeights.display
  },
  display3: {
    fontSize: fontSizes[3] + "px",
    fontWeight: fontWeights.bold,
    lineHeight: lineHeights.display
  },
  display2: {
    fontSize: fontSizes[2] + "px",
    fontWeight: fontWeights.bold,
    lineHeight: lineHeights.display
  },
  display1: {
    fontSize: fontSizes[1] + "px",
    fontWeight: fontWeights.bold,
    lineHeight: lineHeights.display
  },
  display0: {
    fontSize: fontSizes[0] + "px",
    fontWeight: fontWeights.bold,
    lineHeight: lineHeights.display,
    letterSpacing: letterSpacings.caps,
    textTransform: "uppercase"
  },
  body2: {
    fontSize: fontSizes[2] + "px",
    fontWeight: fontWeights.medium,
    lineHeight: lineHeights.standard
  },
  body1: {
    fontSize: fontSizes[1] + "px",
    fontWeight: fontWeights.medium,
    lineHeight: lineHeights.standard
  },
  body0: {
    fontSize: fontSizes[0] + "px",
    fontWeight: fontWeights.medium,
    lineHeight: lineHeights.standard
  }
};

// color palette

const black = "#000";
const white = "#fff";
const text = "#262626";
const lighterGray = "#E9E9E9";
const lightGray = "#C6C6C6";
const borderGray = "#c0cad5";
const gray = "#959595";
const boldGray = "#5C5C5C";
const bolderGray = "#313131";
const darkGray = "#5C5C5C";
const lightRed = "#ff9292";
const red = "#d90000";
const darkRed = "#660000";
const lightGreen = "#CFFF92";
const green = "#85EF00";
const darkGreen = "#396600";
const lightBlue = "#B6C7FF";
const blue = "#003BFF";
const darkBlue = "#002399";
const lightPurple = "#E2B6FF";
const purple = "#70b";
const darkPurple = "#5B0099";
const lightYellow = "#FEFFB6";
const yellow = "#EBEE00";
const darkYellow = "#917800";
const lightOrange = "#FFDEB6";
const orange = "#FF8C00";
const darkOrange = "#995400";
//  Brand Colors
const beOrange = "#FF8C00";
const beSlow = "#EBEE00";
const beGood = "#85EF00";
const beCool = "#009DAE";
const beHot = "#FF2D00";
const beFire = "#d90000";
const beGrape = "#2e0927";
const beBlack = "#262626";

const colors = {
  black,
  white,
  text,
  lighterGray,
  lightGray,
  borderGray,
  gray,
  boldGray,
  bolderGray,
  darkGray,
  lightRed,
  red,
  darkRed,
  lightGreen,
  green,
  darkGreen,
  lightBlue,
  blue,
  darkBlue,
  lightPurple,
  purple,
  darkPurple,
  lightYellow,
  yellow,
  darkYellow,
  lightOrange,
  orange,
  darkOrange,
  beOrange,
  beSlow,
  beGood,
  beCool,
  beHot,
  beFire,
  beGrape,
  beBlack
};

export { colors };

export const colorStyles = {
  whiteOnText: {
    color: colors.white,
    backgroundColor: colors.text
  },
  whiteOnGray: {
    color: colors.white,
    backgroundColor: colors.gray
  },
  textOnLightGray: {
    color: colors.text,
    backgroundColor: colors.lightGray
  },
  whiteOnBlue: {
    color: colors.white,
    backgroundColor: colors.blue
  },
  blueOnLightBlue: {
    color: colors.blue,
    backgroundColor: colors.lightBlue
  },
  whiteOnGreen: {
    color: colors.white,
    backgroundColor: colors.green
  },
  greenOnLightGreen: {
    color: colors.green,
    backgroundColor: colors.lightGreen
  },
  whiteOnRed: {
    color: colors.white,
    backgroundColor: colors.red
  },
  redOnLightRed: {
    color: colors.red,
    backgroundColor: colors.lightRed
  },
  textOnOrange: {
    color: colors.text,
    backgroundColor: colors.orange
  },
  whiteOnPurple: {
    color: colors.white,
    backgroundColor: colors.purple
  },
  purpleOnLightPurple: {
    color: colors.purple,
    backgroundColor: colors.lightPurple
  },
  textOnWhite: {
    color: colors.text,
    backgroundColor: colors.white
  },
  grayOnWhite: {
    color: colors.gray,
    backgroundColor: colors.white
  },
  blueOnWhite: {
    color: colors.blue,
    backgroundColor: colors.white
  },
  greenOnWhite: {
    color: colors.green,
    backgroundColor: colors.white
  },
  redOnWhite: {
    color: colors.red,
    backgroundColor: colors.white
  },
  purpleOnWhite: {
    color: colors.purple,
    backgroundColor: colors.white
  },
  whiteOnDarkOrange: {
    color: colors.white,
    backgroundColor: colors.darkOrange
  }
};

colorStyles.info = colorStyles.textOnLightGray;
colorStyles.success = colorStyles.whiteOnGreen;
colorStyles.warning = colorStyles.textOnOrange;
colorStyles.danger = colorStyles.whiteOnRed;

// styled-system's `borderRadius` function can hook into the `radii` object/array
export const radii = [0, 4, 8];
export const radius = "4px";

export const maxContainerWidth = "1280px";

// boxShadows
export const boxShadows = [
  `0 0 2px 0 rgba(0,0,0,.08),0 1px 4px 0 rgba(0,0,0,.16)`,
  `0 0 2px 0 rgba(0,0,0,.08),0 2px 8px 0 rgba(0,0,0,.16)`,
  `0 0 2px 0 rgba(0,0,0,.08),0 4px 16px 0 rgba(0,0,0,.16)`,
  `0 0 2px 0 rgba(0,0,0,.08),0 8px 32px 0 rgba(0,0,0,.16)`
];

// animation duration
export const duration = {
  fast: `150ms`,
  normal: `300ms`,
  slow: `450ms`,
  slowest: `600ms`
};

// animation easing curves
const easeInOut = "cubic-bezier(0.5, 0, 0.25, 1)";
const easeOut = "cubic-bezier(0, 0, 0.25, 1)";
const easeIn = "cubic-bezier(0.5, 0, 1, 1)";

const timingFunctions = {
  easeInOut,
  easeOut,
  easeIn
};

// animation delay
const transitionDelays = {
  small: `60ms`,
  medium: `160ms`,
  large: `260ms`,
  xLarge: `360ms`
};

const theme = {
  breakpoints,
  mediaQueries,
  space,
  font,
  fontSizes,
  fontWeights,
  lineHeights,
  letterSpacings,
  regular,
  bold,
  textStyles,
  colors,
  colorStyles,
  radii,
  radius,
  boxShadows,
  maxContainerWidth,
  duration,
  timingFunctions,
  transitionDelays
};

export default theme;
