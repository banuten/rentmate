import classes from './lhs-panel.module.css';

function LHSPanel(props) {
  return <div className={classes.panel}>{props.children}</div>;
}

export default LHSPanel;
