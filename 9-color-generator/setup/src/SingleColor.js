import React, { useState, useEffect } from "react";
import rgbToHex from "./utils";

const SingleColor = ({ rgb, index, weight }) => {
  const bcg = rgb.join(",");
  const hex = rgbToHex(...rgb);
  const [alert, setAlert] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAlert(false);
    }, 3000);
    return () => clearTimeout(timeout);
  }, [alert]);

  return (
    <>
      <article
        className={`color ${index > 10 && "color-light"}`}
        style={{ backgroundColor: `rgb(${bcg})` }}
        onClick={() => {
          setAlert(true);
          navigator.clipboard.writeText(hex);
        }}
      >
        <p className="percent-value">{weight}%</p>
        <p className="color-value">{hex}</p>
        {alert && <p>copied to clipboard!</p>}
      </article>
    </>
  );
};

export default SingleColor;