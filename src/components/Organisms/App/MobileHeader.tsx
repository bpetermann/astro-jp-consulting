import { NavButton } from '@/components/Atoms/App';
import ScrollIndicator from './ScrollIndicator';
import styles from './MobileHeader.module.css';
import { useState } from 'react';

const MobileHeader = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <header className={styles.header}>
        <div>
          <div>
            <NavButton onClick={() => setOpen((prev) => !prev)} open={open} />
          </div>
        </div>
        <ScrollIndicator />
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
