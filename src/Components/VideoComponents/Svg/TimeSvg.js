import React from "react";
import "./sass/svg_style_scvi.scss";

// SVG path COPIED FROM YOUTUBE

const TimeSvg = React.memo(() => {
  return (
    <div className="ytb_svg_x">
      <svg className="ytb_svg_x__wrapper" viewBox="0 0 24 24" focusable={false}>
        <g>
          <path
            fill="#fff"
            d="M12 3.67c-4.58 0-8.33 3.75-8.33 8.33s3.75 8.33 8.33 8.33 8.33-3.75 8.33-8.33S16.58 3.67 12 3.67zm3.5 11.83l-4.33-2.67v-5h1.25v4.34l3.75 2.25-.67 1.08z"
          ></path>
        </g>
      </svg>
    </div>
  );
});

export default TimeSvg;
