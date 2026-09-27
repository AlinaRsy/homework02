export type ThemeState = {
  themeId: number;
};
export type SetThemeIdAction = {
  type: "SET_THEME_ID";
  id: number;
};
const initState: ThemeState = {
  themeId: 1,
};

export const themeReducer = (
  state = initState,
  action: SetThemeIdAction,
): ThemeState => {
  // fix any
  switch (action.type) {
    case "SET_THEME_ID":
      return {
        ...state,
        themeId: action.id,
      };
    default:
      return state;
  }
};

export const changeThemeId = (id: number): SetThemeIdAction => ({
  type: "SET_THEME_ID",
  id,
}); // fix any
