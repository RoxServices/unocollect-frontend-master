import { Reducer } from 'redux';
import { FillsState, FillsTypes } from './types';

const INITIAL_STATE: FillsState = {
  fill: {},
  forms: [],
  form: {},
  loading: false,
  success: false,
  error: false,
};

const reducer: Reducer<FillsState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FillsTypes.GET_FORMS_REQUEST:
      return { ...state, loading: true, error: false };

    case FillsTypes.GET_FORMS_SUCCESS:
      return {
        ...state,
        forms: action.payload.data,
        loading: false,
        error: false,
      };

    case FillsTypes.GET_FORMS_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
      };

    /* case FillsTypes.ADD_USER_LOCATION:
      return {
        ...state,
        fill: {
          latitude: action.payload.latitude,
          longitude: action.payload.longitude,
        },
      }; */

    case FillsTypes.ADD_FILL_REQUEST:
      return {
        ...state,
        loading: true,
        success: false,
        error: false,
      };

    case FillsTypes.ADD_FILL_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        error: false,
      };

    case FillsTypes.ADD_FILL_FAILURE:
      return {
        ...state,
        loading: false,
        success: false,
        error: true,
      };

    case FillsTypes.SET_SUCCESS_FALSE:
      return {
        ...state,
        loading: false,
        success: false,
        error: false,
      };

    default:
      return state;
  }
};

export default reducer;
