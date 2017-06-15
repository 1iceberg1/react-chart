import React from 'react';

import Chart from './Chart';
import AccountList from './AccountList';
import Repayment from './Repayment';

export default () => (
  <div>
    <div className="container-fluid">
      <div className="col-md-8 col-sm-12">
        <AccountList className="col-sm-4" />
        <Repayment className="col-sm-8" />
        <div className="col-sm-12">
          <Chart />
        </div>
      </div>
    </div>
  </div>
)