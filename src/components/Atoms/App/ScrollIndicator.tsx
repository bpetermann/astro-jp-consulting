import { useEffect, useState } from 'react';
import styles from './ScrollIndicator.module.css';

const ScrollIndicator = () => {
  const [scrollTop, setScrollTop] = useState(0);

  const onScroll = () => {
    const winScroll = document.documentElement.scrollTop;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    const scrolled = (winScroll / height) * 100;

    setScrollTop(scrolled);
  };

  useEffect(() => {
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className={styles.container}>
      <div
        className={styles.progressMainStyle}
        style={{ width: `${scrollTop}%`, height: !scrollTop ? '0px' : '4px' }}
      ></div>
    </div>
  );
};

export default ScrollIndicator;
