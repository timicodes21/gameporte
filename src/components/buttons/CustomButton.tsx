import React, { ReactNode } from 'react';
import styles from '@/styles/Component.module.css';

interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant: 'primary' | 'secondary' | 'main';
  leftIcon?: ReactNode;
}

const CustomButton: React.FC<IProps> = ({
  children,
  leftIcon,
  variant,
  ...rest
}) => {
  const renderBackgroundColor = () => {
    switch (variant) {
      case 'primary':
        return '#02BAF1';
      case 'secondary':
        return '#1D5E82';
      case 'main':
        return '#244CC6';
      default:
        return '#02BAF1';
    }
  };

  const renderTextColor = () => {
    switch (variant) {
      case 'primary':
        return '#0A0A0B';
      case 'secondary':
        return '#FFFFFF';
      case 'main':
        return '#FFFFFF';
      default:
        return '#0A0A0B';
    }
  };

  const style = {
    width: '100%',
    borderRadius: '8px',
    padding: '12px 16px',
    background: renderBackgroundColor(),
    color: renderTextColor(),
    height: '40px',
    ':hover': {
      backgroundColor: 'blue',
      color: 'white',
    },
  };

  return (
    <button {...rest} style={style} className={styles.customButton}>
      {leftIcon && <div style={{ marginRight: '5px' }}>{leftIcon}</div>}
      <span>{children}</span>
    </button>
  );
};

export default CustomButton;
