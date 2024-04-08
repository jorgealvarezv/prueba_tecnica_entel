// reducers.js
import { combineReducers } from 'redux';

const initialState = {
  formulariosEnviados: [],
};

const formReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GUARDAR_DATOS':
      return {
        ...state,
        formulariosEnviados: [...state.formulariosEnviados, action.payload],
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  form: formReducer,
});

export default rootReducer;
