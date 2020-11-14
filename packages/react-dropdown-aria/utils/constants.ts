export enum StyleKeys {
  Arrow = 'arrow',
  Selector = 'selector',
  Wrapper = 'wrapper',
  SelectorSearch = 'selectorSearch',
  SelectedValue = 'selectedValue',
  GroupContainer = 'groupContainer',
  GroupDivider = 'groupDivider',
  GroupHeading = 'groupHeading',
  OptionContainer = 'optionContainer',
  OptionItemWrap = 'optionItemWrap',
}

export enum KEY_CODES {
  DOWN_ARROW = 40,
  ENTER = 13,
  ESCAPE = 27,
  PAGE_DOWN = 34,
  PAGE_UP = 33,
  TAB = 9,
  UP_ARROW = 38,
  SPACE = 32,
}

export const NAVIGATION_KEYS = [
  KEY_CODES.ESCAPE,
  KEY_CODES.UP_ARROW,
  KEY_CODES.DOWN_ARROW,
  KEY_CODES.PAGE_UP,
  KEY_CODES.PAGE_DOWN,
];

export const IdPrefix = 'react_dropdown_aria_';

export const colours = {
  greys: {
    base: '#808080',
    dark: '#7C7C7C',
    darker: '#6e6d6d',
    light: '#CECECE',
    lighter: '#e0e0e0',
    lightest: '#f5f5f5',
  },
  states: {
    disabled: '#ededed',
    focused: '#0080bc',
  },
};
