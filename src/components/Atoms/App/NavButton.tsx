import styles from './NavButton.module.css';

type Props = {
  onClick: () => void;
  open: boolean;
};

const NavButton: React.FC<Props> = ({ onClick, open }) => {
  return (
    <button
      className={`${styles.button} ${open ? styles.open : ''}`}
      onClick={onClick}
    >
      <div></div>
      <div></div>
    </button>
  );
};

export default NavButton;
