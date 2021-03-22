const initialState = {
  movies:[1,2,3]
}

export default (state = initialState, { type, payload }) => {
  switch (type) {

  /*case typeName:
    return { ...state, ...payload } */

  default:
    return state
  }
}
