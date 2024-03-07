import React from "react";
import classes from "./MainComponent.module.css";
import Condition from "../../images/Condition";

import Yes from "../../images/Yes";
import NoRight from "../../images/NoRight";
import No from "../../images/No";
import YesLeft from "../../images/YesLeft";
import LongNoLeft from "../../images/LongNoLeft";
import LongYesRight from "../../images/LongYesRight";
import RightMiddle from "../../images/RightMiddle";
import LeftMiddle from "../../images/LeftMiddle";

const MainComponent = ({
  header,
  step1,
  step2a,
  step2b,
  step3a,
  step3b,
  step3c,
  step3d,
  step4a,
  step4b,
  step4c,
  step4d,
  step4e,
  step4f,
  step4g,
  step4h,

  arrowColor,
  data,
}) => {
  return (
    <div
      className="min-h-screen flex flex-col gap-20 items-center  w-full py-20"
      style={{ background: "var(--mainBg) " }}
    >
      <div className={classes.headingContainer}>
        <h3
          className={classes.subHeading}
          style={{ "--color": header.subHeadingColor }}
        >
          {header.subHeading}
        </h3>
        <h1
          className={classes.heading}
          style={{ "--color": header.headingColor }}
        >
          {header.heading}
        </h1>
      </div>
      <div className={classes.mainWrapper}>
        <div className={classes.wrapper}>
          <div className={[classes.condition, classes.step1].join(" ")}>
            {" "}
            <Condition bg={step1.bg} />
            <p
              className={[classes.label, classes.conditionLabel].join(" ")}
              style={{ "--color": step1.color }}
            >
              {step1.label}
            </p>{" "}
            <div className={classes.longNoLeft}>
              <LongNoLeft color={arrowColor} />
            </div>
            <div className={classes.longYesRight}>
              <LongYesRight color={arrowColor} />
            </div>
          </div>
          <div className={classes.step2Container}>
            <div className={[classes.condition, classes.step2a].join(" ")}>
              {" "}
              <Condition bg={step2a.bg} />
              <p
                className={[classes.label, classes.conditionLabel].join(" ")}
                style={{ "--color": step2a.color }}
              >
                {step2a.label}
              </p>{" "}
              <div className={classes.yesRight}>
                <YesLeft color={arrowColor} />
              </div>{" "}
              <div className={classes.no}>
                <No color={arrowColor} />
              </div>
            </div>
            <div className={classes.condition}>
              {" "}
              <Condition bg={step2b.bg} />
              <p
                className={[classes.label, classes.conditionLabel].join(" ")}
                style={{ "--color": step2b.color }}
              >
                {step2b.label}
              </p>{" "}
              <div className={classes.noRight}>
                {" "}
                <NoRight color={arrowColor} />
              </div>{" "}
              <div className={classes.yes}>
                <Yes color={arrowColor} />
              </div>
            </div>
          </div>
          <div className={classes.step3Container}>
            <div className={classes.step3abContainer}>
              <div
                className={[classes.box, classes.step3a].join(" ")}
                style={{ "--bg": step3a.bg }}
              >
                <h2
                  className={classes.label}
                  style={{ "--color": step3a.color }}
                >
                  {step3a.label}
                </h2>
                <div className={classes.leftMiddle}>
                  <LeftMiddle color={arrowColor} />
                </div>
              </div>{" "}
              <div
                className={[classes.box, classes.step3b].join(" ")}
                style={{ "--bg": step3b.bg }}
              >
                <h2
                  className={classes.label}
                  style={{ "--color": step3b.color }}
                >
                  {step3b.label}
                </h2>
                <div className={classes.rightMiddle}>
                  <RightMiddle color={arrowColor} />
                </div>
              </div>
            </div>
            <div className={classes.step3cdContainer}>
              <div
                className={[classes.box, classes.step3c].join(" ")}
                style={{ "--bg": step3c.bg }}
              >
                <h2
                  className={classes.label}
                  style={{ "--color": step3c.color }}
                >
                  {step3c.label}
                </h2>{" "}
                <div className={classes.leftMiddle}>
                  <LeftMiddle color={arrowColor} />
                </div>
              </div>{" "}
              <div
                className={[classes.box, classes.step3d].join(" ")}
                style={{ "--bg": step3d.bg }}
              >
                <h2
                  className={classes.label}
                  style={{ "--color": step3d.color }}
                >
                  {step3d.label}
                </h2>{" "}
                <div className={classes.rightMiddle}>
                  <RightMiddle color={arrowColor} />
                </div>
              </div>
            </div>
          </div>
          <div className={classes.step4Container}>
            <div
              className={[classes.box].join(" ")}
              style={{ "--bg": step4a.bg }}
            >
              <h2 className={classes.label} style={{ "--color": step4a.color }}>
                {step4a.label}
              </h2>
            </div>{" "}
            <div
              className={[classes.box, classes.step4b].join(" ")}
              style={{ "--bg": step4b.bg }}
            >
              <h2 className={classes.label} style={{ "--color": step4b.color }}>
                {step4b.label}
              </h2>
            </div>{" "}
            <div
              className={[classes.box, classes.step4c].join(" ")}
              style={{ "--bg": step4c.bg }}
            >
              <h2 className={classes.label} style={{ "--color": step4c.color }}>
                {step4c.label}
              </h2>
            </div>{" "}
            <div
              className={[classes.box].join(" ")}
              style={{ "--bg": step4d.bg }}
            >
              <h2 className={classes.label} style={{ "--color": step4d.color }}>
                {step4d.label}
              </h2>
            </div>{" "}
            <div
              className={[classes.box].join(" ")}
              style={{ "--bg": step4e.bg }}
            >
              <h2 className={classes.label} style={{ "--color": step4e.color }}>
                {step4e.label}
              </h2>
            </div>{" "}
            <div
              className={[classes.box].join(" ")}
              style={{ "--bg": step4f.bg }}
            >
              <h2 className={classes.label} style={{ "--color": step4f.color }}>
                {step4f.label}
              </h2>
            </div>{" "}
            <div
              className={[classes.box, classes.step4g].join(" ")}
              style={{ "--bg": step4g.bg }}
            >
              <h2 className={classes.label} style={{ "--color": step4g.color }}>
                {step4g.label}
              </h2>
            </div>{" "}
            <div
              className={[classes.box, classes.step4h].join(" ")}
              style={{ "--bg": step4h.bg }}
            >
              <h2 className={classes.label} style={{ "--color": step4h.color }}>
                {step4h.label}
              </h2>
            </div>{" "}
          </div>
        </div>
        <div className={classes.allData}>
          {data.map((el, i) => (
            <div
              className={classes.infoContainer}
              style={{ "--bg": el.bg }}
              key={i}
            >
              <p className={classes.info} style={{ "--color": el.infoColor }}>
                {" "}
                {el.info}
              </p>
              <h2
                className={classes.title}
                style={{ "--color": el.titleColor }}
              >
                {" "}
                {el.title}
              </h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MainComponent;
