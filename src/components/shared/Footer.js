import React from 'react';
import pdf from '../../assets/pdf/cv-developpeur.pdf'
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();

  const {
    REACT_APP_LINKEDIN_URL,
    REACT_APP_CODEPEN_LINK,
    REACT_APP_CODESANDBOX_LINK
  } = process.env
  return (
    <div className="row footer-content">
      <div className="col-6 col-md">
        <h5 className="titl"><b>{t('footerTitleDev')}</b></h5>
        <div className="list-unstyled text-small dev-list">
          <a className="link-footer" href={`https://${REACT_APP_LINKEDIN_URL}`} target="new">Linkedin</a> / <a className="link-footer" href={process.env.CV_LINK || pdf} target="new">Cv</a><br />
          <a className="link-footer codepen-link" href={`https://${REACT_APP_CODEPEN_LINK}`} target="new">CodePen</a><span className="hidden768"> / </span> <br className="appear" /> <a className="link-footer codesandbox-link" href={`https://${REACT_APP_CODESANDBOX_LINK}`} target="new">CodeSandBox</a>
        </div>
      </div>
      <div className="col-6 col-md">
        <h5 className="titl"><b>{t('footerTitleIllustr')}</b></h5>
        <div className="list-unstyled text-small">
          <a href='https://www.redbubble.com/fr/people/rodolphe-a/shop?asc=u' target="new" className="link-footer">{t('storeIllustr1')}</a>
          <br />
          <a href="https://www.zazzle.fr/store/amano_hilot_shop" target="new" className="link-footer">{t('storeIllustr2')}</a>
        </div>
      </div>
    </div>
  )
}

export default Footer
