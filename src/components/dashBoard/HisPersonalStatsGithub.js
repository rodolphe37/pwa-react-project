import React, { useState, useEffect } from 'react';
import InfiniteLoopLoader from '../infiniteLoopLoader/InfiniteLoopLoader';

const HisPersonalStatsGithub = () => {
  const [loading, setLoading] = useState(true)

  const { REACT_APP_USERNAME } = process.env

  useEffect(() => {
    setTimeout(() => setLoading(false), 1500)
  }, [])

  return (
    <div>
      {loading === false
        ?
        <div className="his-languages">
          <img className="perso-stats" align="left" alt="My Github Stats" src={`https://github-readme-stats.rodolphe37.vercel.app/api?username=${REACT_APP_USERNAME}&show_icons=true&hide_border=true`} />
          <img className="perso-stats2" align="right" width="300px" alt="My Github Languages most used" src={`https://github-readme-stats.rodolphe37.vercel.app/api/top-langs/?username=${REACT_APP_USERNAME}&hide_border=true`} />
        </div> : <InfiniteLoopLoader />
      }
    </div>
  )
}

export default HisPersonalStatsGithub
