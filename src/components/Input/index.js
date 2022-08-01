import { ErrorMessage } from "../../components/ErrorMessage";
import React from "react";
import PropTypes from "prop-types";

const variants = {
  OutlineBlack900: "bg-white_A700 border-black_900 border-bw02 border-solid",
  FillWhiteA700: "bg-white_A700",
};
const shapes = { RoundedBorder10: "rounded-radius10" };
const sizes = { sm: "xl:p-[5px] lg:p-[5px] 2xl:p-[6px] p-[8px]" };

const Input = React.forwardRef(
  (
    {
      wrapClassName = "",
      className = "",
      name,
      placeholder,
      type = "text",
      children,
      errors = [],
      label = "",
      prefix,
      suffix,
      shape,
      variant,
      size,
      ...restProps
    },
    ref
  ) => {
    return (
      <div
        className={`${wrapClassName} ${shapes[shape] || ""} ${
          variants[variant] || ""
        } ${sizes[size] || ""}`}
      >
        {!!label && label}
        {!!prefix && prefix}
        <input
          ref={ref}
          className={className}
          type={type}
          name={name}
          placeholder={placeholder}
          {...restProps}
        />
        {!!suffix && suffix}
        {!!errors && <ErrorMessage errors={errors} />}
      </div>
    );
  }
);

Input.propTypes = {
  wrapClassName: PropTypes.string,
  className: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  errors: PropTypes.array,
  label: PropTypes.string,
  prefix: PropTypes.node,
  suffix: PropTypes.node,
  shape: PropTypes.oneOf(["RoundedBorder10"]),
  variant: PropTypes.oneOf(["OutlineBlack900", "FillWhiteA700"]),
  size: PropTypes.oneOf(["sm"]),
};
Input.defaultProps = {
  wrapClassName: "",
  className: "",
  name: "",
  placeholder: "",
  type: "text",
  errors: [],
  label: "",
  prefix: null,
  suffix: null,
  shape: "RoundedBorder10",
  variant: "OutlineBlack900",
  size: "sm",
};

export { Input };
