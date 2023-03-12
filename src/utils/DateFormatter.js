import React from "react";

function DateFormatter(props) {
  const date = new Date(props.date);
  const formattedDate = date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric"
  });

  return <span>{formattedDate}</span>;
}

export default DateFormatter;
