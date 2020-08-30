import React from 'react';
import pdf from '../assets/pdf/cv-developpeur.pdf'
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();
  return (
    <div className="row footer-content">
      <div className="col-6 col-md">
        <h5 className="titl"><b>{t('footerTitleDev')}</b></h5>
        <div className="list-unstyled text-small dev-list">
          <a className="link-footer" href="https://www.linkedin.com/in/rodolphe-augusto-d%C3%A9veloppeur-full-stack-react-node-js-1a20b759/" target="new">Linkedin</a> / <a className="link-footer" href={pdf} target="new">Cv</a><br />
          <a className="link-footer codepen-link" href="https://codepen.io/rodcefim" target="new">CodePen</a><span className="hidden768"> / </span> <br className="appear" /> <a className="link-footer codesandbox-link" href="https://codesandbox.io/u/rodolphe37" target="new">CodeSandBox</a>
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
