import React from 'react';
import Linecharts from './dashBoard/Linechart';
import Linecharts2 from './dashBoard/Linechart2';
import Linecharts3 from './dashBoard/Linechart3';

const Dashboard = () => {
  return (
    <>
      <h3 style={{ fontSize: '15px' }}>Global languages popularity on Github (based from pull requests)</h3>
      <div className="javascript">
        <Linecharts />
      </div>
      <div className="java">
        <Linecharts2 />
      </div>
      <div className="php">
        <Linecharts3 />
      </div>
    </>
  )
}

export default Dashboard
