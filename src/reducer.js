export const initialState = {
  Data: []
};

export const actionTypes = {
  SET_DATA: "SET_DATA",
}

const reducer = (state, action) => {
  // console.log(action);

  switch (action.type) {
    case actionTypes.SET_DATA:
      return {
        ...state, Data: action.Data
      }
    default:
      return state;
  }
}

export default reducer;
