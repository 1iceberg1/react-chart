const ADD_ACCOUNT = 'ADD_ACCOUNT';
const PAY_MONTHLY = 'PAY_MONTHLY';

const initialState = {
  balances: [],
  total_balance: 0,
  accounts: [],
  monthly_payments: [],
  monthly: 0,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_ACCOUNT:
      return {
        ...state,
        accounts: state.accounts.push({balance: action.val}),
        total_balance: state.total_balance + action.val,
        balances: state.balances.push({balance:state.total_balance + action.val})
      };
    case PAY_MONTHLY:
      return {
        ...state,
        monthly_payments: state.monthly_payments.push({balance: action.val}),
        total_balance: state.total_balance - action.val,
        balances: state.balances.push({balance: state.total_balance - action.val})
      };
    default:
      return state;
  }
}

export const addAccount = val => ({ type: ADD_ACCOUNT, val });
export const payMonthly = val => ({ type: PAY_MONTHLY, val });
