import React from "react";
import { useTranslation } from "react-i18next";

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
    REACT_APP_ADDRESS_STORE_2_URL,
  } = process.env;
  return (
    <div className="row footer-content">
      <hr />
      <div className="col-6 col-md">
        <h5 className="titl">
          <b>{t("footerTitleDev")}</b>
        </h5>
        <div className="list-unstyled text-small dev-list">
          <a
            className="link-footer"
            href={`https://${REACT_APP_LINK1_URL}`}
            target="new"
          >
            {REACT_APP_LINK1_NAME}
          </a>
          {REACT_APP_NAME_PDF && REACT_APP_PDF_LINK !== null ? (
            <React.Fragment>
              {" "}
              /{" "}
              <a className="link-footer" href={REACT_APP_PDF_LINK} target="new">
                {REACT_APP_NAME_PDF}
              </a>
            </React.Fragment>
          ) : (
            ""
          )}
          <br />
          <a
            className="link-footer codepen-link"
            href={`https://${REACT_APP_LINK3_URL}`}
            target="new"
          >
            {REACT_APP_LINK3_NAME}
          </a>
          {REACT_APP_LINK4_NAME && REACT_APP_LINK4_URL !== null ? (
            <span className="hidden768"> / </span>
          ) : (
            ""
          )}
          <br className="appear" />
          <a
            className="link-footer codesandbox-link"
            href={`https://${REACT_APP_LINK4_URL}`}
            target="new"
          >
            {REACT_APP_LINK4_NAME}
          </a>
        </div>
      </div>
      {REACT_APP_ADDRESS_STORE_1_URL &&
      REACT_APP_ADDRESS_STORE_2_URL !== null ? (
        <div className="col-6 col-md">
          <h5 className="titl">
            <b>{t("footerTitleIllustr")}</b>
          </h5>
          <div className="list-unstyled text-small">
            {REACT_APP_ADDRESS_STORE_1_URL !== null ? (
              <React.Fragment>
                <a
                  href={`https://${REACT_APP_ADDRESS_STORE_1_URL}`}
                  target="new"
                  className="link-footer"
                >
                  {t("storeIllustr1")}
                </a>
              </React.Fragment>
            ) : (
              ""
            )}
            <br />
            {REACT_APP_ADDRESS_STORE_2_URL !== null ? (
              <React.Fragment>
                <a
                  href={`https://${REACT_APP_ADDRESS_STORE_2_URL}`}
                  target="new"
                  className="link-footer"
                >
                  {t("storeIllustr2")}
                </a>
              </React.Fragment>
            ) : (
              ""
            )}
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Footer;
