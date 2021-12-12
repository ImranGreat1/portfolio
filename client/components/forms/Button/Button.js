import Link from 'next/link';
import classes from './Button.module.css';

const Button = ({ href, children, btnProps }) => {
  if (href) {
    return (
      <Link href={href}>
        <a className={classes.btn}>{children}</a>
      </Link>
    );
  }

  return (
    <button {...btnProps} className={classes.btn}>
      {props.children}
    </button>
  );
};

export default Button;
