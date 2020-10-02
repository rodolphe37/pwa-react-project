import React, { useEffect } from 'react';
import JavascriptChart from './allLanguagesDashboard/JavascriptChart';
import JavaChart from './allLanguagesDashboard/JavaChart';
import PhpChart from './allLanguagesDashboard/PhpChart';
import PythonChart from './allLanguagesDashboard/PythonChart';
import RubyChart from './allLanguagesDashboard/RubyChart';
import CplusPlusChart from './allLanguagesDashboard/CplusPlusChart';
import TypescriptChart from './allLanguagesDashboard/TypescriptChart';
import HtmlChart from './allLanguagesDashboard/HtmlChart';
import CssChart from './allLanguagesDashboard/CssChart';
import DartChart from './allLanguagesDashboard/DartChart';
import SwiftChart from './allLanguagesDashboard/SwiftChart';
import KotlinChart from './allLanguagesDashboard/KotlinChart'
import VueChart from './allLanguagesDashboard/VueChart';
import axios from 'axios';
import { useStateValue } from '../../StateProvider';
import { actionTypes } from '../../reducer';


const AllLanguagesDashboard = () => {
  // eslint-disable-next-line
  const [{ }, dispatch] = useStateValue();

  useEffect(() => {
    axios.get(`https://raw.githubusercontent.com/madnight/githut/master/src/data/gh-pull-request.json`)
      .then(res => {
        dispatch({
          type: actionTypes.SET_DATA,
          Data: res.data
        })
      })
      .catch((error) => alert(error.message))

  }, [dispatch])

  return (
    < React.Fragment >
      <div>
        <div>
          <div className="javascript">
            <JavascriptChart />
          </div>
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
        <div className="padding-bottom-phone">
          <br />
          <br />
          <br />
          <br />
        </div>
      </div>
    </React.Fragment >
  )
}
export default AllLanguagesDashboard
