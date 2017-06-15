import React from 'react';
import { connect } from 'react-redux';

import { payMonthly } from '../reducers/accounts';
import * as actions from '../reducers/accounts';


export default connect(({ monthly, repayments })=>({ monthly, repayments }))(
({ monthly, repayments, className, dispatch }) => (
  <div className={ className }>
    <div>
      <h2>Initial Balance</h2>
      <label>Monthly</label>
      <input type="text" maxLength="5" value={ monthly.monthlyPayment } onChange={ e=>dispatch(payMonthly(e.target.value)) }/>
    </div>
  </div>
));
