import { useEffect, useState } from "react";
import { default as NumberFormat } from "react-number-format";

interface ICurrencyFormatProps {
  value: number;
}

const LAKH_UNIT = 100000;
const CRORE_UNIT = 10000000;

export const CurrencyFormat = (props: ICurrencyFormatProps) => {
  const { value } = props;
  const [number, setNumber] = useState(value);
  const [suffix, setSuffix] = useState("");
  useEffect(() => {
    const positiveValue = Math.abs(value);
    if (positiveValue >= LAKH_UNIT && positiveValue < CRORE_UNIT) {
      setNumber(value / LAKH_UNIT);
      setSuffix("Lakh");
    } else if (positiveValue >= CRORE_UNIT) {
      setNumber(value / CRORE_UNIT);
      setSuffix("Crore");
    } else {
      setNumber(value);
      setSuffix("");
    }
  }, [value]);

  return (
    <NumberFormat
      thousandSeparator={true}
      decimalSeparator="."
      decimalScale={2}
      prefix={"₹"}
      suffix={" " + suffix}
      displayType="text"
      {...props}
      value={number}
      fixedDecimalScale={true}
    />
  );
};

const format = (num: any) => {
  const n = String(num),
    p = n.indexOf(".");
  return n.replace(/\d(?=(?:\d{3})+(?:\.|$))/g, (m, i) => (p < 0 || i < p ? `${m},` : m));
};

export const CurrencyFormatString = (value: number) => {
  const positiveValue = Math.abs(value);
  if (positiveValue >= LAKH_UNIT && positiveValue < CRORE_UNIT) {
    return "₹" + format((value / LAKH_UNIT)?.toFixed(2)) + " Lakh";
  } else if (positiveValue >= CRORE_UNIT) {
    return "₹" + format((value / CRORE_UNIT)?.toFixed(2)) + " Crore";
  } else {
    return "₹" + format(value?.toFixed(2));
  }
};
