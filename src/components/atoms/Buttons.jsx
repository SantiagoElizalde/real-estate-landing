import React from "react";

const Style = {
    BtnBasics: `outline-none leading-[72px] px-5 font-bold appRadius`,
  }

export const BtnPrimary = ({ text, classes, onClick }) => {
  return (
    <button
      id="BtnPrimary"
      className={`${classes} ${Style.BtnBasics} bg-primary text-white`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export const BtnSecondary = ({ text, classes, onClick }) => {
  return (
    <button
      id="BtnPrimary"
      className={`${classes} ${Style.BtnBasics} text-primary bg-white`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export const BtnLink = ({ text, classes, onClick }) => {
  return (
    <button
      id="BtnPrimary"
      className={`${classes} ${Style.BtnBasics} text-primary`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};
