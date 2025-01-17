import * as React from "react";

interface Props {
    width: string;
    height: string;
}

const SVGComponent: React.FC<Props> = ({ width, height }) => (
  <svg
    fill="#2bfccf"
    width={width}
    height={height}
    viewBox="0 0 64 64"
    xmlns="http://www.w3.org/2000/svg"
  >
    <title />
    <g id="Productivity">
      <path d="M12,22H4a1,1,0,0,0-1,1V47a1,1,0,0,0,1,1h8a1,1,0,0,0,1-1V23A1,1,0,0,0,12,22ZM11,46H5V24h6Z" />
      <path d="M26,16H18a1,1,0,0,0-1,1V47a1,1,0,0,0,1,1h8a1,1,0,0,0,1-1V17A1,1,0,0,0,26,16ZM25,46H19V18h6Z" />
      <path d="M41,31V27a1,1,0,0,0-1-1H32a1,1,0,0,0-1,1V47a1,1,0,0,0,1,1h6.25V46H33V28h6v3Z" />
      <path d="M47,13h6V29.6h2V12a1,1,0,0,0-1-1H46a1,1,0,0,0-1,1V28.17h2Z" />
      <path d="M51,33A10,10,0,1,0,61,43,10,10,0,0,0,51,33Zm3.29,14.71-4-4A1,1,0,0,1,50,43V37h2v5.59l3.71,3.7Z" />
    </g>
  </svg>
);
export default SVGComponent;
