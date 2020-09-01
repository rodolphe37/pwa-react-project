import React from 'react';

const HisPersonalStatsGithub = () => {

  const { REACT_APP_USERNAME } = process.env
  return (
    <div className="his-languages">
      <img className="perso-stats" align="left" alt="My Github Stats" src={`https://github-readme-stats.rodolphe37.vercel.app/api?username=${REACT_APP_USERNAME}&show_icons=true&hide_border=true`} />
      <img className="perso-stats2" align="right" width="300px" alt="My Github Languages most used" src={`https://github-readme-stats.rodolphe37.vercel.app/api/top-langs/?username=${REACT_APP_USERNAME}&hide_border=true`} />
    </div>
  )
}

export default HisPersonalStatsGithub
