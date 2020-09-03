import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
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
import InfiniteLoopLoader from '../infiniteLoopLoader/InfiniteLoopLoader';

const AllLanguagesDashboard = () => {
  const [loading, setLoading] = useState(true)
  const { t } = useTranslation();

  useEffect(() => {
    setTimeout(() => setLoading(false), 1400)
  }, [])
  return (
    <React.Fragment>
      {loading === false
        ?
        <React.Fragment>
          <div>
            <div>
              <div className="pull-requests">
                <h3 style={{ fontSize: '15px' }}>{t('popularityLanguages')} <br className="appear" /> {t('pullRequests')}</h3>
                <sup className="title-sup">{t('globalCharts1')} <br className="appear" /> {t('globalCharts2')}</sup>
              </div>
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
        </React.Fragment>
        : <InfiniteLoopLoader />}
    </React.Fragment>
  )
}
export default AllLanguagesDashboard
