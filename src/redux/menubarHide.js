// Initial State
export const initialState = {
  menuHide: false,
  inputHide: true,
  darkMode: false, // New state for dark mode
};

// Action Types
export const TOGGLE_MENU = "TOGGLE_MENU";
export const TOGGLE_INPUT = "TOGGLE_INPUT";
export const TOGGLE_DARK_MODE = "TOGGLE_DARK_MODE"; // New action type for dark mode

// Action Creators
export const hidemenufn = () => {
  return {
    type: TOGGLE_MENU,
  };
};

export const hideInputFn = () => {
  return {
    type: TOGGLE_INPUT,
  };
};

export const toggleDarkModeFn = () => {
  return {
    type: TOGGLE_DARK_MODE, // Action for toggling dark mode
  };
};

// Reducer Function
export function menuReducer(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_MENU:
      return {
        ...state,
        menuHide: !state.menuHide,
      };

    case TOGGLE_INPUT:
      return {
        ...state,
        inputHide: !state.inputHide,
      };

    case TOGGLE_DARK_MODE:
      return {
        ...state,
        darkMode: !state.darkMode, // Toggle dark mode state
      };

    default:
      return state;
  }
}
