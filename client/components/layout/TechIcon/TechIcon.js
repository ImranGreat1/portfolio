import classes from './TechIcon.module.css';

const TechIcon = ({ Icon, name }) => {
  return (
    <span className={classes.icon}>
      <Icon className={classes.icon__svg} />
      <span className={classes.icon__name}>{name}</span>
    </span>
  );
};

export default TechIcon;
