import React from 'react';

interface IPropsButton {
  width?: string;
  height?: string;
  color?: string;
  backgroundColor?: string;
  borderRadius?: string;
  children?: string;
}

const Button = ({
  children,
  width,
  height,
  color,
  backgroundColor,
  borderRadius,
}: IPropsButton) => {
  return (
    <button
      style={{
        width: `${width}`,
        height: `${height}`,
        color: `${color}`,
        backgroundColor: `${backgroundColor}`,
        borderRadius: `${borderRadius}`,
      }}
    >
      {children}
    </button>
  );
};

export default Button;
