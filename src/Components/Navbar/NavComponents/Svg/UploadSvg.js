import React from "react";
import "./sass/svg_style_scnni.scss";

// SVG path COPIED FROM YOUTUBE

const UploadSvg = React.memo(() => {
  return (
    <div className="ytb_svg">
      <svg className="ytb_svg__wrapper" viewBox="0 0 24 24" focusable={false}>
        <g>
          <path
            fill="#6f6f6f"
            fillRule="evenodd"
            d="M19,4H5A2.15,2.15,0,0,0,3,6V18a2.15,2.15,0,0,0,2,2H19a2.15,2.15,0,0,0,2-2V6A2.15,2.15,0,0,0,19,4ZM5,18H19V6H5Z"
          ></path>
          <path d="M15,12,10,8v8Z" fillRule="evenodd" fill="#f80000"></path>
        </g>
      </svg>
    </div>
  );
});

export default UploadSvg;
