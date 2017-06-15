import { createSelector } from 'reselect';

const total_balances = (state) => state.balances;

export default createSelector(
  total_balances
);