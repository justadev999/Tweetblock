import React from 'react';

interface ICardProps {
  width: string;
  height: string;
  boxShadow: string;
  outline?: string;
  padding: string;
  borderRadius: string;
  background: string;
  margin: string;
  children?: React.ReactNode;
}

const Card = ({
  width,
  height,
  boxShadow,
  outline,
  padding,
  children,
  borderRadius,
  background,
  margin,
}: ICardProps) => {
  return (
    <div
      style={{
        height: `${height}`,
        width: `${width}`,
        boxShadow: `${boxShadow}`,
        outline: `${outline}`,
        padding: `${padding}`,
        borderRadius: `${borderRadius}`,
        background: `${background}`,
        margin: `${margin}`,
      }}
    >
      {children}
    </div>
  );
};

export default Card;
