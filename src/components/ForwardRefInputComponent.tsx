import { forwardRef } from "react";

type Props = {
  label: string;
};

const ForwardRefInputComponent = (
  props: Props,
  ref: React.ForwardedRef<HTMLInputElement>
) => {
  const { label, ...otherProps } = props;

  return (
    <label htmlFor={label}>
      {label}
      <input ref={ref} {...otherProps} />
    </label>
  );
};

export default forwardRef(ForwardRefInputComponent);
