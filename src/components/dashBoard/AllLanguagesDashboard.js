import React, { useEffect, useState } from "react";
import {
  JavascriptChart,
  JavaChart,
  PhpChart,
  PythonChart,
  RubyChart,
  CplusPlusChart,
  TypescriptChart,
  HtmlChart,
  CssChart,
  DartChart,
  SwiftChart,
  KotlinChart,
  VueChart,
} from "./allLanguagesDashboard/";
import axios from "axios";
import { useStateValue } from "../../StateProvider";
import { actionTypes } from "../../reducer";
import { useTranslation } from "react-i18next";

const AllLanguagesDashboard = () => {
  // eslint-disable-next-line
  const [{}, dispatch] = useStateValue();
  const [mode, setMode] = useState("online");
  const { t } = useTranslation();

  useEffect(() => {
    axios
      .get(
        `https://raw.githubusercontent.com/madnight/githut/master/src/data/gh-pull-request.json`
      )
      .then((res) => {
        console.log(res);
        dispatch({
          type: actionTypes.SET_DATA,
          Data: res.data,
        });
      })
      .catch((error) => setMode("offline") && alert(error.message));
  }, [dispatch]);

  return (
    <React.Fragment>
      <div>
        {mode === "offline" ? (
          <div className=" alert alert-danger" role="alert">
            {t("alert")}
          </div>
        ) : null}
        <div>
          <div className="javascript">
            <JavascriptChart />
          </div>
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
        <div className="padding-bottom-phone">
          <br />
          <br />
          <br />
          <br />
        </div>
      </div>
    </React.Fragment>
  );
};
export default AllLanguagesDashboard;
