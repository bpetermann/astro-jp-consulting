import { NavButton, ScrollIndicator } from '@/components/Atoms/App';
import styles from './MobileHeader.module.css';
import { useState } from 'react';

const MobileHeader = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <header className={`${styles.header} ${open ? styles.open : ''}`}>
        {!open && <ScrollIndicator />}
        <NavButton onClick={() => setOpen((prev) => !prev)} open={open} />
      </header>
      {open && (
        <>
          <div className={styles.modal}>
            <nav>
              <a href='/'>Home</a>
              <a href='/about'>About</a>
              <a href='/'>Services</a>
            </nav>
          </div>
        </>
      )}
    </>
  );
};

export default MobileHeader;
