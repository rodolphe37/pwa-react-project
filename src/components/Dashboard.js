import React from 'react';
import JavascriptChart from './dashBoard/JavascriptChart';
import JavaChart from './dashBoard/JavaChart';
import PhpChart from './dashBoard/PhpChart';
import PythonChart from './dashBoard/PythonChart';
import RubyChart from './dashBoard/RubyChart';
import CplusPlusChart from './dashBoard/CplusPlusChart';
import TypescriptChart from './dashBoard/TypescriptChart';

const Dashboard = () => {
  return (
    <>
      <h3 style={{ fontSize: '15px' }}>Languages popularity on Github (based from Globals pull requests)</h3>
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
      <div className="c++">
        <CplusPlusChart />
      </div>
      <div className="tipescript">
        <TypescriptChart />
      </div>
    </>
  )
}

export default Dashboard
