import React from 'react';
import { useTranslation } from 'react-i18next';
import HisPersonalStatsGithub from './dashBoard/HisPersonalStatsGithub';
import AllLanguagesDashboard from './dashBoard/AllLanguagesDashboard';

const Dashboard = () => {
  const { t } = useTranslation();

  return (
    <div>
      <br />
      <h3 style={{ fontSize: '15px' }}>{t('languagesRepos')}</h3>
      <sup className="title-sup" > {t('mostUsed')} <br className="appear" />{t('mostUsed2')}</sup>
      <HisPersonalStatsGithub />
      <br />
      <AllLanguagesDashboard />
    </div>
  )
}

export default Dashboard
