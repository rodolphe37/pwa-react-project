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
import CssChart from './dashBoard/CssChart';
import DartChart from './dashBoard/DartChart';
import SwiftChart from './dashBoard/SwiftChart';
import KotlinChart from './dashBoard/KotlinChart'
import VueChart from './dashBoard/VueChart';

const Dashboard = () => {
  return (
    <>
      <br />
      <h3 style={{ fontSize: '15px' }}>Languages used on my repositories</h3>
      <sup className="title-sup">These are the most used languages ​​on 50 of my repositories</sup>
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
      <div className="html">
        <HtmlChart />
      </div>
      <div className="typescript">
        <TypescriptChart />
      </div>
      <div className="css">
        <CssChart />
      </div>
      <div className="swift">
        <SwiftChart />
      </div>
      <div className="kotlin">
        <KotlinChart />
      </div>
      <div className="dart">
        <DartChart />
      </div>
      <div className="vue">
        <VueChart />
      </div>
    </>
  )
}

export default Dashboard
