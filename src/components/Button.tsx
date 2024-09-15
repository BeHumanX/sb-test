import React, { useState } from 'react';

import '../stories/button.css';

export interface ButtonProps {
  /** Is this the principal call to action on the page? */
  primary?: boolean;
  /** What background color to use */
  backgroundColor?: string;
  /** How large should the button be? */
  size?: 'small' | 'medium' | 'large';
  /** Button contents */
  label: string;
  borderRadius:number,
  /** Optional click handler */
  onClick?: () => void;
  onHover?: () => void;
}

/** Primary UI component for user interaction */
export const Button = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  label,
  borderRadius,
  onClick,
  onHover,
  ...props
}: ButtonProps) => {
  const [isHovered,setIsHovered] = useState(false);
  const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
  const hoverMode = isHovered ? 'storybook-button--secondary' : '';

  const handleMouseOver = () =>{
    setIsHovered(true);
    if(onHover){
      onHover();
    }
  };
  const handleMouseOut = () =>{
    setIsHovered(false);
  }
  return (
    <button
      type="button"
      className={['storybook-button', `storybook-button--${size}`, mode, hoverMode].join(' ')}
      style={{ backgroundColor,borderRadius }}
      onClick={onClick}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      {...props}
    >
      {label}
    </button>
  );
};
