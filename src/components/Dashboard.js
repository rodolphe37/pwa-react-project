import React from 'react';
import JavascriptChart from './dashBoard/JavascriptChart';
import JavaChart from './dashBoard/JavaChart';
import PhpChart from './dashBoard/PhpChart';
import PythonChart from './dashBoard/PythonChart';
import RubyChart from './dashBoard/RubyChart';
import CplusPlusChart from './dashBoard/CplusPlusChart';
import TypescriptChart from './dashBoard/TypescriptChart';
import HtmlChart from './dashBoard/HtmlChart';
import HisLanguageChart from './dashBoard/HisLanguageChart'

const Dashboard = () => {
  return (
    <>
      <br />
      <h3 style={{ fontSize: '15px' }}>Languages used on my repository</h3>
      <br className="appear" />
      <sup className="title-sup">These are the most used languages ​​on all of my repositories<br className="appear" /> This, since I created my account  </sup>
      <div className="his-languages">
        <HisLanguageChart />
      </div>
      <br />
      <h3 style={{ fontSize: '15px' }}>Languages popularity on Github <br className="appear" /> (based from Globals pull requests)</h3>
      <sup className="title-sup">For the year 2012 only 3 quarters (last 9 months), <br className="appear" /> as well as for the year 2020 only 2 quarters (first 6 months) are counted!</sup>
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
      <div className="html">
        <HtmlChart />
      </div>
    </>
  )
}

export default Dashboard
