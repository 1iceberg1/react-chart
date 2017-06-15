import { combineReducers } from 'redux';
import accounts from './accounts';
import repayments from './repayments';

const rootReducer = combineReducers({
  accounts,
  repayments
});

export default rootReducer;
