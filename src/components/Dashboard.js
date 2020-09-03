import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import HisPersonalStatsGithub from './dashBoard/HisPersonalStatsGithub';
import AllLanguagesDashboard from './dashBoard/AllLanguagesDashboard';
import InfiniteLoopLoader from './infiniteLoopLoader/InfiniteLoopLoader';

const Dashboard = () => {
  const [loading, setLoading] = useState(true)
  const { t } = useTranslation();

  useEffect(() => {
    setTimeout(() => setLoading(false), 1500)
  }, [])

  return (
    <div>
      {loading === false
        ?
        <React.Fragment>
          <br />
          <h3 style={{ fontSize: '15px' }}>{t('languagesRepos')}</h3>
          <sup className="title-sup" > {t('mostUsed')}
            <br className="appear" />
            {t('mostUsed2')}
          </sup>
          <HisPersonalStatsGithub />
          <br />
          <div className="pull-requests">
            <h3 style={{ fontSize: '15px' }}>{t('popularityLanguages')}
              <br className="appear" />
              {t('pullRequests')}
            </h3>
            <sup className="title-sup">
              {t('globalCharts1')}
              <br className="appear" />
              {t('globalCharts2')}
            </sup>
          </div>
          <AllLanguagesDashboard />
        </React.Fragment>
        :
        <InfiniteLoopLoader />
      }
    </div>
  )
}

export default Dashboard
