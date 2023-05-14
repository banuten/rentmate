import classes from './rhs-panel.module.css';

function RHSPanel(props) {
  return <div className={classes.panel}>{props.children}</div>;
}

export default RHSPanel;
