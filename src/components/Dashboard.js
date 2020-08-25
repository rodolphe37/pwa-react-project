import React from 'react';
import JavascriptChart from './dashBoard/JavascriptChart';
import JavaChart from './dashBoard/JavaChart';
import PhpChart from './dashBoard/PhpChart';
import PythonChart from './dashBoard/PythonChart';
import RubyChart from './dashBoard/RubyChart';

const Dashboard = () => {
  return (
    <>
      <h3 style={{ fontSize: '15px' }}>Global languages popularity on Github (based from pull requests)</h3>
      <div className="javascript">
        <JavascriptChart />
      </div>
      <div className="python">
        <PythonChart />
      </div>
      <div className="java">
        <JavaChart />
      </div>
      <div className="ruby">
        <RubyChart />
      </div>
      <div className="php">
        <PhpChart />
      </div>
    </>
  )
}

export default Dashboard
