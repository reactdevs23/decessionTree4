import { useState } from "react";

import MainComponent from "./components/MainComponent/MainComponent";

function App() {
  const [allData, setAllData] = useState({
    fontFamily: "'Inter', sans-serif",
    headingFontFamily: "'Manrope', sans-serif",
    mainBg: "#fff",
    header: {
      subHeading: "STRATEGY",
      subHeadingColor: "#CA8504",
      heading: "Decisions to take",
      headingColor: "#000",
    },
    arrowColor: "#000",

    step1: {
      label: "Should we start this Initiative",
      color: "#000",
      bg: "#FEDF89",
    },

    step2a: {
      label: "Will it be important for the company this quarter?",
      color: "#000",
      bg: "#FAC515",
    },

    step2b: {
      label: "Will it be important for the company this quarter?",
      color: "#000",
      bg: "#FAC515",
    },
    step3a: {
      label: "Relevant ressources",
      color: "#000",
      bg: "#FEDF89",
    },
    step3b: {
      label: "Significant learning",
      color: "#000",
      bg: "#FEDF89",
    },
    step3c: {
      label: "Relevant ressources",
      color: "#000",
      bg: "#FEDF89",
    },
    step3d: {
      label: "Significant learning",
      color: "#000",
      bg: "#FEDF89",
    },
    step4a: {
      label: "Outcome",
      color: "#000",
      bg: "#B2CCFF",
    },
    step4b: {
      label: "Outcome",
      color: "#000",
      bg: "#B2CCFF",
    },
    step4c: {
      label: "Outcome",
      color: "#000",
      bg: "#B2CCFF",
    },
    step4d: {
      label: "Outcome",
      color: "#000",
      bg: "#B2CCFF",
    },
    step4e: {
      label: "Outcome",
      color: "#000",
      bg: "#B2CCFF",
    },
    step4f: {
      label: "Outcome",
      color: "#000",
      bg: "#B2CCFF",
    },
    step4g: {
      label: "Outcome",
      color: "#000",
      bg: "#B2CCFF",
    },
    step4h: {
      label: "Outcome",
      color: "#000",
      bg: "#B2CCFF",
    },

    data: [
      {
        info: "Spend a few minutes discussing the decision you need to make.",
        infoColor: "#000",
        title: "5 min together",
        titleColor: "#000",
        bg: "#F2F4F7",
      },
      {
        info: 'Think of each decision node as an "if-then" statement. Explore alternative outcomes as you move down the branches.',

        infoColor: "#000",
        title: "15 min together",
        titleColor: "#000",
        bg: "#F2F4F7",
      },
      {
        info: "If you need to think, stop the discussion and brainstorm outcomes for 3 minutes individually before regrouping.",

        infoColor: "#000",
        title: "20 min together",
        titleColor: "#000",
        bg: "#F2F4F7",
      },

      {
        info: "Discuss possible outcomes and their consequences.",
        infoColor: "#000",
        title: "10 min together",
        titleColor: "#000",
        bg: "#F2F4F7",
      },
    ],
  });

  return (
    <>
      <div
        style={{
          "--mainBg": allData.mainBg,
          "--headingFontFamily": allData.headingFontFamily,

          fontFamily: allData.fontFamily,
        }}
      >
        <MainComponent {...allData} />
      </div>
    </>
  );
}

export default App;
