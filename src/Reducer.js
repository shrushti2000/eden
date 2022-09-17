export const reducer = (state, action) => {
  switch (action.type) {
    case "SET_FULL_NAME":
      return { ...state, user: { ...state.user, fullName: action.payload } };
    case "SET_DISPLAY_NAME":
      return { ...state, user: { ...state.user, displayName: action.payload } };
    case "SET_WORKSPACE_NAME":
      return {
        ...state,
        user: { ...state.user, workspaceName: action.payload },
      };
    case "SET_WORKSPACE_URL":
      return {
        ...state,
        user: { ...state.user, workspaceURL: action.payload },
      };
    case "SET_USAGE":
      return { ...state, user: { ...state.user, usage: action.payload } };
    case "SET_NO_OF_STEPS_COMPLETED":
      return { ...state, noOfStepsCompleted: action.payload };
    case "TOGGLE_TOAST":
      return { ...state, showToast: !state.showToast };
    case "SET_TOAST_TEXT":
      return { ...state, toastText: action.payload };
    default:
      return state;
  }
};
