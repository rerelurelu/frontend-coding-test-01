import { FetchAction, FetchState, FetchActionKind } from '../type/types';

export const INITIAL_STATE = {
  isLoading: false,
  isError: false,
};

export const fetchReducer = (state: FetchState, action: FetchAction) => {
  switch (action.type) {
    case FetchActionKind.FETCH_START:
      return {
        isLoading: true,
        isError: false,
      };
    case FetchActionKind.FETCH_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
      };
    case FetchActionKind.FETCH_ERROR:
      return {
        isLoading: false,
        isError: true,
      };
    default:
      return state;
  }
};
