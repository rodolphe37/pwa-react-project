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
import { useTranslation } from 'react-i18next';

const Dashboard = () => {
  const { t } = useTranslation();
  return (
    <React.Fragment>
      <br />
      <h3 style={{ fontSize: '15px' }}>{t('languagesRepos')}</h3>
      <sup className="title-sup" > {t('mostUsed')}</sup>
      <div className="his-languages">
        <HisLanguageChart />
      </div>
      <br />
      <h3 style={{ fontSize: '15px' }}>{t('popularityLanguages')} <br className="appear" /> {t('pullRequests')}</h3>
      <sup className="title-sup">{t('globalCharts1')} <br className="appear" /> {t('globalCharts2')}</sup>
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
    </React.Fragment>
  )
}

export default Dashboard
