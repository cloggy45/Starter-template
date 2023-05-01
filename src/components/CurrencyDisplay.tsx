import React from "react";

type CurrencyDisplayProps = {
  value: number;
  currency: string;
  locale?: string;
};

const CurrencyDisplay = ({
  value,
  currency,
  locale = "en-US", // Default locale is set to 'en-US'
}: CurrencyDisplayProps) => {
  const formattedValue = new Intl.NumberFormat(locale, {
    style: "currency",
    currency: currency,
  }).format(value / 100);

  return <span>{formattedValue}</span>;
};

export default CurrencyDisplay;
