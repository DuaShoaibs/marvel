import React, { useEffect, useState } from 'react';
import styles from './Message.module.css'; // CSS module for styling

const Message = ({ text }) => {
  return (
    <div className={styles.messageContainer}>
      <div className={styles.message}>
        {text}
      </div>
    </div>
  );
};

export default Message;
