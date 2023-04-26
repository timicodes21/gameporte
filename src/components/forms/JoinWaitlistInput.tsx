import React from 'react';
import styles from '@/styles/Component.module.css';
import Image from 'next/image';

interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const JoinWaitlistInput: React.FC<IProps> = ({ onClick, onChange, value }) => {
  return (
    <div className={styles.joinWaitlistInputContainer}>
      <Image
        src="/assets/icons/mail_icon.svg"
        width={26}
        height={22}
        alt="mail_icon"
      />
      <input
        type="email"
        value={value}
        onChange={onChange}
        placeholder="Email"
        style={{ width: '100%' }}
      />
      <div className={styles.iconWrapper} onClick={onClick}>
        <Image
          src="/assets/icons/send_icon.svg"
          width={24}
          height={24}
          alt="send_icon"
        />
      </div>
    </div>
  );
};

export default JoinWaitlistInput;
