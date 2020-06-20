import * as types from '../types';

const initialState = {
  language: 'vi',
};

export default function config(state = initialState, action) {
  switch (action.type) {
    case types.SET_LANGUAGE:
      return {
        ...state,
        language: action.payload,
      };
    default:
      return state;
  }
}
