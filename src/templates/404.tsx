import * as React from "react";
import {
  TemplateProps,
  TemplateRenderProps,
  GetHeadConfig,
  GetPath,
  Template,
  TemplateConfig,
} from "@yext/pages";
import { favicon } from "../../sites-global/global";
import { StaticData } from "../../sites-global/staticData";
import Footer from "../components/layouts/footer";
import Header1 from "../components/layouts/header";
import "../index.css";

export const getPath: GetPath<TemplateProps> = () => {
  return "404.html";
};

// Add a title to the page
export const getHeadConfig: GetHeadConfig<TemplateRenderProps> = () => {
  return {
    title: "Page Not Found",
    tags: [
      {
        type: "link",
        attributes: {
          rel: "shortcut icon",
          href: favicon,
        },
      },
    ]
  };
};

// Template that will show as the page
const FourOhFour: Template<TemplateRenderProps> = ({
  document,
}) => {
  const {
    _site
  } = document;
  return (
    <>
      <Header1 _site={_site} />

      <div className="container">
        <div className="content-list">
          <div className="sec-title text-center">
            <h1 className="" style={{ textAlign: "center", color: "red" }}>
              {StaticData.PagenotFound}
            </h1>
            <p>{StaticData.cantfind_page}</p>
            <p>{StaticData.Youcouldtry}</p>
            <div className="button-bx max-w-[45rem] !mx-auto !mt-5">
              
                <a className="btn" href="javascript:history.back()">{StaticData.Previuspage} &gt;</a>
                <a className="btn" href="/us.html">{StaticData.homePage} &gt;</a>
             
            </div>
          </div>
        </div>
      </div>

      <Footer _site={_site} />
    </>
  );
};

export default FourOhFour;
