import React from 'react';
import { connect } from 'react-redux';

import * as actions from '../reducers/accounts';

export default connect(({ accounts }) => ({ accounts }))(
  ({ accounts: { balance }, className, dispatch }) => (
    <div className={ className }>
      <div>
        <h2>Accounts</h2>

        <label>Amount</label>
        <input type="text" maxLength="7" value={ 100 } onChange={ e=>dispatch(actions.setBalance(e.target.value)) } />
        <button className="btn btn-primary" onClick={e=>dispatch(actions.addAccount())}>Submit</button>
      </div>
      <div>
        { /* balances */ }
      </div>
    </div>
  ));