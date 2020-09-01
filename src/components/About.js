import React, { useState, useEffect } from 'react';
import Footer from './shared/Footer';
import { useTranslation } from 'react-i18next';

const About = (props) => {
  const [about, setAbout] = useState([])
  const [mode, setMode] = useState('online')

  const {
    REACT_APP_USERNAME,
    REACT_APP_AVATAR_PICTURE,
    REACT_APP_NAME_PICTURE_1,
    REACT_APP_PORTFOLIO_NAME,
    REACT_APP_PICTURE_1,
    REACT_APP_PICTURE_2,
    REACT_APP_PICTURE_3,
    REACT_APP_PICTURE_4,
    REACT_APP_PICTURE_5,
    REACT_APP_PICTURE_6,
    REACT_APP_PICTURE_7,
    REACT_APP_PICTURE_8,
    REACT_APP_PICTURE_9,
    REACT_APP_PICTURE_10,
    REACT_APP_PICTURE_11,
    REACT_APP_PICTURE_12,
    REACT_APP_PICTURE_13,
    REACT_APP_PICTURE_14,
    REACT_APP_PICTURE_15,
    REACT_APP_PICTURE_16,
    REACT_APP_NAME_COPYRIGHT,
    REACT_APP_YEAR_COPYRIGHT
  } = process.env

  const { t } = useTranslation();

  useEffect(() => {
    const url = `https://api.github.com/users/${REACT_APP_USERNAME}`
    fetch(url).then((res) => {
      res.json().then((resultat) => {
        setAbout(resultat)
        localStorage.setItem('about', JSON.stringify(resultat))
      })
    }).catch(err => {
      setMode('offline')
      let collection = localStorage.getItem('about');
      setAbout(JSON.parse(collection))
    })
  }, [REACT_APP_USERNAME])

  const { id, location, blog, followers, company } = about
  return (
    <div className="linear-gradient">
      {
        mode === 'offline' ? <div className=" alert alert-danger" role="alert">{t('alert')}</div> : null
      }
      <br />
      <h1 style={{ fontSize: "30px" }}>{t('aboutMe')}</h1>
      <img className="rounded-img" src={`https://${REACT_APP_AVATAR_PICTURE}`} alt="avatar" />
      <div key={id}>
        {
          company !== null
            ?
            <React.Fragment>
              <span>{t('organization')} : {company}</span>
              <br />
            </React.Fragment>
            :
            ''
        }
        <span>{t('location')} : <b>{location}</b></span><br />
        <div>
          <p>Followers : {followers}</p>
        </div>
        <br />
        <span>{t('linkPortfolio')} : <a href={blog} target="new">{REACT_APP_PORTFOLIO_NAME}</a></span>
        <br />
        <div>
          <br />
          <div>
            <span className="title-tools">{t('tools')}:</span>
          </div>
          <br />
          <div className="tools">
            <img align="center" alt={`${REACT_APP_NAME_PICTURE_1}`} width="26px" src={`https://${REACT_APP_PICTURE_1}`} />&ensp;
            <img align="center" alt="HTML5" width="26px" src={`https://${REACT_APP_PICTURE_2}`} />&ensp;
            <img align="center" alt="CSS3" width="26px" src={`https://${REACT_APP_PICTURE_3}`} />&ensp;
            <img align="center" alt="Sass" width="26px" src={`https://${REACT_APP_PICTURE_4}`} />&ensp;
            <img align="center" alt="JavaScript" width="26px" src={`https://${REACT_APP_PICTURE_5}`} />&ensp;
            <img align="center" alt="React" width="26px" src={`https://${REACT_APP_PICTURE_6}`} />&ensp;
            <img align="center" alt="Next" width="26px" src={`https://${REACT_APP_PICTURE_7}`} />&ensp;
            <img align="center" alt="GraphQL" width="26px" src={`https://${REACT_APP_PICTURE_8}`} />&ensp;
          </div>
          <div className="tools">
            <img align="center" alt="Node.js" width="26px" src={`https://${REACT_APP_PICTURE_9}` || null} />&ensp;
          <img align="center" alt="Deno" width="26px" src={`https://${REACT_APP_PICTURE_10}` || null} />&ensp;
          <img align="center" alt="SQL" width="26px" src={`https://${REACT_APP_PICTURE_11}` || null} />&ensp;
          <img align="center" alt="Electron" width="26px" src={`https://${REACT_APP_PICTURE_12}` || null} />&ensp;
          <img align="center" alt="MongoDB" width="26px" src={`https://${REACT_APP_PICTURE_13}` || null} />&ensp;
          <img align="center" alt="Git" width="26px" src={`https://${REACT_APP_PICTURE_14}` || null} />&ensp;
          <img align="center" alt="GitHub" width="26px" src={`https://${REACT_APP_PICTURE_15}` || null} />&ensp;
          <img align="center" alt="Terminal" width="26px" src={`https://${REACT_APP_PICTURE_16}` || null} />
          </div>
          <div style={{ textAlign: 'center', padding: '25px' }}>
            <p className="bio">{t('bio')} : <br />{t('bioContent')}</p></div>
        </div>
        <hr />
      </div>
      <div>
        <Footer />
        <div style={{ marginTop: '10px' }}>
          <small className="d-block mb-3 link-footer brand-footer">Copyright &copy; {`${REACT_APP_NAME_COPYRIGHT}`} {`${REACT_APP_YEAR_COPYRIGHT}`}</small>
        </div>
      </div>
      <br />
      <div className="padding-bottom-phone">
        <br />
        <br />
      </div>
    </div>
  )
}

export default About
