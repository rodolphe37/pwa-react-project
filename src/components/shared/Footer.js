import React from 'react';
import pdf from '../../assets/pdf/pdf-file.pdf'
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();

  const {
    REACT_APP_LINK1_NAME,
    REACT_APP_LINK1_URL,
    REACT_APP_NAME_PDF,
    REACT_APP_PDF_LINK,
    REACT_APP_LINK3_NAME,
    REACT_APP_LINK3_URL,
    REACT_APP_LINK4_NAME,
    REACT_APP_LINK4_URL,
    REACT_APP_ADDRESS_STORE_1_URL,
    REACT_APP_ADDRESS_STORE_2_URL
  } = process.env
  return (
    <div className="row footer-content">
      <div className="col-6 col-md">
        <h5 className="titl"><b>{t('footerTitleDev')}</b></h5>
        <div className="list-unstyled text-small dev-list">
          <a className="link-footer" href={`https://${REACT_APP_LINK1_URL}`} target="new">{REACT_APP_LINK1_NAME}</a>
          {
            REACT_APP_NAME_PDF && REACT_APP_PDF_LINK !== null
              ?
              <React.Fragment>
                / <a className="link-footer" href={REACT_APP_PDF_LINK || pdf} target="new">{REACT_APP_NAME_PDF}</a>
              </React.Fragment>
              :
              ''
          }
          <br />
          <a className="link-footer codepen-link" href={`https://${REACT_APP_LINK3_URL}`} target="new">{REACT_APP_LINK3_NAME}</a><span className="hidden768"> / </span> <br className="appear" /> <a className="link-footer codesandbox-link" href={`https://${REACT_APP_LINK4_URL}`} target="new">{REACT_APP_LINK4_NAME}</a>
        </div>
      </div>
      <div className="col-6 col-md">
        <h5 className="titl"><b>{t('footerTitleIllustr')}</b></h5>
        <div className="list-unstyled text-small">
          <a href={`https://${REACT_APP_ADDRESS_STORE_1_URL}`} target="new" className="link-footer">{t('storeIllustr1')}</a>
          <br />
          <a href={`https://${REACT_APP_ADDRESS_STORE_2_URL}`} target="new" className="link-footer">{t('storeIllustr2')}</a>
        </div>
      </div>
    </div>
  )
}

export default Footer
