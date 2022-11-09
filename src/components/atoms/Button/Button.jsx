import React from "react";
import ButtonSizes from "../../../dictionary/ButtonSizes";

const Style = {
  BtnBasics: `outline-none px-4 fontMedium appRadius`,
  LinkBasics: `outline-none fontMedium`,
};

const StyleBySize = {
  small: `h-[32px]`,
  normal: `h-[52px]`, //leading-[52px]
  big: `h-[72px]`,
};

export const BtnPrimary = ({ text, size = ButtonSizes.normal, onClick }) => {
  return (
    <button
      className={`${Style.BtnBasics} ${StyleBySize[size]} bg-primary text-white`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export const BtnSecondary = ({ text, size = ButtonSizes.normal, onClick }) => {
  return (
    <button
      className={`${Style.BtnBasics} ${StyleBySize[size]} text-primary bg-white`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export const BtnLink = ({ text, size = ButtonSizes.normal, onClick }) => {
  return (
    <button
      className={`${Style.LinkBasics} ${StyleBySize[size]} text-primary`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};
