import NumberFormat, { NumberFormatProps } from "react-number-format";

const CustomNumberFormat = (props: NumberFormatProps<any>) => {
  return <NumberFormat decimalSeparator={"."} thousandSeparator={","} displayType="text" {...props} />;
};

export default CustomNumberFormat;
