import React from "react";
import PropTypes from "prop-types";

const shapes = {
  RoundedBorder10: "rounded-radius10",
  RoundedBorder5: "rounded-radius5",
  CircleBorder14: "rounded-radius14",
  icbCircleBorder20: "rounded-radius20",
  icbCircleBorder12: "rounded-radius12",
};
const variants = {
  FillBluegray101: "bg-bluegray_101 text-gray_900",
  FillBlue800: "bg-blue_800 text-white_A700",
  FillWhiteA700: "bg-white_A700 text-black_900",
  FillLightgreen50: "bg-light_green_50 text-light_green_A700",
  FillRed90033: "bg-red_900_33 text-red_900",
  OutlineBlack900:
    "bg-white_A700 border-black_900 border-bw05 border-solid text-black_900",
  FillGray901: "bg-gray_901 text-white_A700",
  icbFillGray300: "bg-gray_300",
  icbFillYellow80019: "bg-yellow_800_19",
  icbFillLightgreenA70019: "bg-light_green_A700_19",
  icbFillDeeporange50019: "bg-deep_orange_500_19",
  icbOutlineBlack9007f: "border-black_900_7f border-bw05 border-solid",
};
const sizes = {
  sm: "lg:p-[3px] xl:p-[4px] 2xl:p-[5px] p-[6px]",
  md: "lg:p-[5px] xl:p-[6px] 2xl:p-[7px] p-[9px]",
  lg: "xl:p-[11px] 2xl:p-[12px] p-[15px] lg:p-[9px]",
  xl: "lg:p-[11px] xl:p-[13px] 2xl:p-[15px] p-[18px]",
  smIcn: "xl:p-[5px] lg:p-[5px] 2xl:p-[6px] p-[8px]",
  mdIcn: "2xl:p-[10px] p-[12px] lg:p-[7px] xl:p-[8px]",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant,
  size,
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${shapes[shape] || ""} ${
        variants[variant] || ""
      } ${sizes[size] || ""} common-button `}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
  shape: PropTypes.oneOf([
    "RoundedBorder10",
    "RoundedBorder5",
    "CircleBorder14",
    "icbCircleBorder20",
    "icbCircleBorder12",
  ]),
  variant: PropTypes.oneOf([
    "FillBluegray101",
    "FillBlue800",
    "FillWhiteA700",
    "FillLightgreen50",
    "FillRed90033",
    "OutlineBlack900",
    "FillGray901",
    "icbFillGray300",
    "icbFillYellow80019",
    "icbFillLightgreenA70019",
    "icbFillDeeporange50019",
    "icbOutlineBlack9007f",
  ]),
  size: PropTypes.oneOf(["sm", "md", "lg", "xl", "smIcn", "mdIcn"]),
};
Button.defaultProps = {
  className: "",
  leftIcon: null,
  rightIcon: null,
  shape: "",
  variant: "",
  size: "",
};

export { Button };
