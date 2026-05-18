import css from './Button.module.css';

export const Button = ({ onClick }) => {
  return (
    <div className={css.btnContainer}>
      <button type="button" className={css.btn} onClick={onClick}>
        Load more
      </button>
    </div>
  );
};
