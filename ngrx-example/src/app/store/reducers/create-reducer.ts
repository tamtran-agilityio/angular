import * as _ from 'lodash';

import {
  ReducerOptions
} from 'app/models/reducer-options.model';

export const createReducer = (defaultState, reducerOptions: ReducerOptions): any => {
  return (state = defaultState, action) => {
    if (action.type === `${reducerOptions.type}_SUCCESS`) {
      return _.assignIn({}, state, {
        [reducerOptions.nameState]: action.payload
      });
    } else if (!_.isNil(reducerOptions.wrappedReducer)) {
      return reducerOptions.wrappedReducer(state, action);
    } else {
      return state;
    }
  };
};
