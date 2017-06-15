import { createSelector } from 'reselect';

const total_balances = (state) => state.total_balances;

export default createSelector(
  [ total_balances ],
  () => {
    return total_balances
  }
);